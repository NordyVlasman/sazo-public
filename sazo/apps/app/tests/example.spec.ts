import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3001/')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h1')).toContainText('Log in op je account')

  await page.locator('#email').fill('john.doe@example.com');
  await page.locator('#password').fill('Password!');
  await page.locator('#signin').click();

  await expect(page.getByText('Voor jou')).toBeVisible()
})
