// Counter.spec.js
import { test, expect } from "@playwright/test";

test("renders Counter component with initial count", async ({ page }) => {
  await page.goto("http://localhost:3000"); // Ensure your app is running here
  const countValue = await page.locator('[data-testid="count-value"]');
  await expect(countValue).toHaveText("Count: 0");
});

test("increments the counter", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click('[data-testid="increment-btn"]');
  const countValue = await page.locator('[data-testid="count-value"]');
  await expect(countValue).toHaveText("Count: 1");
});

test("decrements the counter but does not go below zero", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click('[data-testid="decrement-btn"]');
  const countValue = await page.locator('[data-testid="count-value"]');
  await expect(countValue).toHaveText("Count: 0");
  await page.click('[data-testid="increment-btn"]');
  await page.click('[data-testid="decrement-btn"]');
  await expect(countValue).toHaveText("Count: 0");
});

test("resets the counter", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click('[data-testid="increment-btn"]');
  await page.click('[data-testid="increment-btn"]');
  await page.click('[data-testid="reset-btn"]');
  const countValue = await page.locator('[data-testid="count-value"]');
  await expect(countValue).toHaveText("Count: 0");
});
