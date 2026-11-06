import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

test('professional portrait preserves its source and renders responsively', async ({ page }) => {
  expect(readFileSync('public/akash.png').equals(readFileSync('public/images/professional-profile.png'))).toBe(true);
  expect(readFileSync('public/akash.png').equals(readFileSync('dist/images/professional-profile.png'))).toBe(true);
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/');
    const portrait = page.getByRole('img', { name: 'Akash Shinde - Software Developer', exact: true });
    await portrait.scrollIntoViewIfNeeded();
    await expect(portrait).toBeVisible();
    await expect(portrait).toHaveAttribute('src', '/images/professional-profile.png');
    await expect(portrait).toHaveCSS('object-fit', 'contain');
    expect(await portrait.evaluate(img => img.complete && img.naturalWidth === 1105 && img.naturalHeight === 1423)).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const box = await portrait.boundingBox();
    expect(Math.abs(box.width / box.height - 1105 / 1423)).toBeLessThan(0.01);
    await expect(page.locator('#home a[download]')).toHaveAttribute('href', '/resume.pdf');
    await expect(page.locator('#home a[href="#projects"]')).toBeVisible();
    if (width === 320 || width === 1440) await page.screenshot({ path: `test-results/portrait-${width}.png` });
  }
});
