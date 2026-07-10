import { test, expect } from '@playwright/test';

test('signs in, adds iPhone X to cart, and confirms checkout', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  await page.locator('input[name="username"]').fill('rahulshettyacademy');
  await page.locator('input[name="password"]').fill('Learning@830$3mK2');
  await page.getByRole('button', { name: /sign in/i }).click();

  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/shop/);

  const iphoneCard = page.locator('.card').filter({ hasText: 'iphone X' }).first();
  await expect(iphoneCard).toBeVisible();

  await iphoneCard.getByRole('button', { name: /add/i }).click();
  await iphoneCard.getByRole('button', { name: /Checkout/i }).click();
  await page.goto('https://rahulshettyacademy.com/angularpractice/shop');
 
  await expect(page.locator('body')).toContainText('iphone X');
  await expect(page.locator('body')).toContainText(/checkout/i);
});
