import { test, expect } from '@playwright/test';

test('opens example page', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
