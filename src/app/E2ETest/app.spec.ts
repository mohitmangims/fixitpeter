import { test, expect } from '@playwright/test';

test('home page has welcome text', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const text = await page.textContent('h1');
  expect(text).toBe('Hello, World!'); // Replace this with the actual welcome text in your app
});