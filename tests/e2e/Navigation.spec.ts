import percySnapshot from '@percy/playwright';
import { test } from '@playwright/test';

test.describe('Navigation', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('/');

      await percySnapshot(page, 'Homepage');
    });
  });
});
