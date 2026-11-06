import { test, expect } from '@playwright/test';

test('project illustrations load consistently on mobile and desktop', async ({ page }) => {
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/');
    const figures = page.locator('#project-results .project-figure');
    await expect(figures).toHaveCount(4);
    for (let index = 0; index < 4; index++) {
      const figure = figures.nth(index);
      await figure.scrollIntoViewIfNeeded();
      const image = figure.locator('img');
      await expect.poll(() => image.evaluate(img => img.complete && img.naturalWidth === 960 && img.naturalHeight === 540)).toBe(true);
      await expect(image).toHaveAttribute('loading', 'lazy');
      await expect(image).toHaveCSS('object-fit', 'contain');
      expect((await image.getAttribute('alt')).length).toBeGreaterThan(25);
      const media = await figure.locator('.project-media').boundingBox();
      expect(Math.abs(media.width / media.height - 16 / 9)).toBeLessThan(.01);
      await expect(figure.locator('figcaption')).toContainText('Not an application screenshot');
      expect((await page.request.get(await image.getAttribute('src'))).status()).toBe(200);
      if (width === 1440) await figure.screenshot({ path: `test-results/project-visual-${index}.png` });
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
});
