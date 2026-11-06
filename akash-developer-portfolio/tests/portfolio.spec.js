import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const width of [320, 375, 768, 1024, 1440]) {
  test(`layout and accessibility at ${width}px`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Akash Shinde');
    await expect(page).toHaveTitle('Akash Shinde | Software Developer Portfolio');
    await page.evaluate(() => document.fonts.ready);
    for (const section of await page.locator('main > section').all()) {
      await section.scrollIntoViewIfNeeded();
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
    await page.getByRole('button', { name: 'Web Development', exact: true }).click();
    await expect(page.locator('#project-results article')).toHaveCount(1);
    await page.getByRole('button', { name: 'All Projects', exact: true }).click();
    await expect(page.locator('#project-results article')).toHaveCount(4);
    await page.locator('#home').scrollIntoViewIfNeeded();
    const toggle = page.getByRole('button', { name: 'Open navigation menu' });
    if (width < 1024) {
      await toggle.click();
      await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(toggle).toBeFocused();
      await toggle.click();
      await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: /^about$/i }).click();
      await expect(page.locator('#about')).toBeFocused();
    } else {
      await expect(toggle).toBeHidden();
      await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
    }
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: 'Open Email Draft' }).click();
    await expect(page.locator('#contact-name')).toBeFocused();
    await expect(page.getByRole('alert')).toBeVisible();
    const scan = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
    expect(scan.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) }))).toEqual([]);
    expect(errors).toEqual([]);
    if (width === 320 || width === 1440) await page.screenshot({ path: `test-results/portfolio-${width}.png`, fullPage: true });
  });
}

test('documents, keyboard skip link, and reduced motion', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  await expect(page.getByRole('button', { name: 'Pause hero animations' })).toHaveCount(0);
  const before = await page.locator('.hero-role').innerText();
  await page.waitForTimeout(2400);
  expect(await page.locator('.hero-role').innerText()).toEqual(before);
  for (const link of await page.locator('a[download], a.certificate-link').all()) {
    const response = await page.request.get(await link.getAttribute('href'));
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toMatch(/application\/pdf|image\/png/);
  }
  expect(await page.locator('link[rel="canonical"]').count()).toBe(0);
  expect((await page.request.get('/robots.txt')).status()).toBe(200);
  expect((await page.request.get('/favicon.svg')).status()).toBe(200);
});

test('motion controls, active navigation, and visual snapshots', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('#hero-title')).toHaveCSS('opacity', '1');
  await expect(page.getByRole('button', { name: 'Pause hero animations' })).toBeVisible();
  await page.getByRole('button', { name: 'Pause hero animations' }).click();
  const role = await page.locator('.hero-role').innerText();
  await page.waitForTimeout(500);
  expect(await page.locator('.hero-role').innerText()).toEqual(role);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({ path: 'test-results/hero-desktop.png' });
  await page.getByRole('button', { name: 'Resume hero animations' }).click();
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await expect(page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: /^projects$/i })).toHaveAttribute('aria-current', 'location');
  await expect(page.locator('#project-results article').first()).toBeVisible();
  await page.locator('#projects').evaluate(node => node.scrollIntoView({ block: 'start', behavior: 'instant' }));
  await page.screenshot({ path: 'test-results/projects-desktop.png' });
  await page.setViewportSize({ width: 320, height: 900 });
  await page.locator('#home').scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({ path: 'test-results/hero-mobile.png' });
  expect(errors).toEqual([]);
});

test('featured final-year project is first and truthfully labeled', async ({ page }) => {
  for (const width of [320, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/');
    const featured = page.locator('#project-results article').first();
    await featured.scrollIntoViewIfNeeded();
    await expect(featured.getByRole('heading', { level: 3 })).toHaveText('Enterprise Multi-Agent RAG Knowledge Assistant with Tool Use & Memory');
    await expect(featured.getByText('Featured Project', { exact: true })).toBeVisible();
    await expect(featured.getByText('Final-Year Project', { exact: true })).toBeVisible();
    await expect(featured.getByText('In Progress', { exact: true })).toBeVisible();
    await expect(featured.getByRole('heading', { name: 'Planned features' })).toBeVisible();
    await expect(featured.getByRole('heading', { name: 'Planned technologies & concepts' })).toBeVisible();
    await expect(featured.getByText('Proposed capabilities below are planned, not a list of completed functionality.')).toBeVisible();
    await expect(featured.locator('a')).toHaveCount(0);
    await expect(featured.locator('ul').first().locator('li')).toHaveCount(9);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await featured.screenshot({ path: `test-results/featured-${width}.png` });
    await page.getByRole('button', { name: 'AI / Machine Learning', exact: true }).click();
    await expect(page.locator('#project-results article')).toHaveCount(4);
    await page.getByRole('button', { name: 'Python', exact: true }).click();
    await expect(page.locator('#project-results article')).toHaveCount(3);
    await expect(page.locator('#project-results article').first().getByRole('heading', { level: 3 })).toHaveText('Mother Tongue Bridge');
  }
});
