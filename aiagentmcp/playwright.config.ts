import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  fullyParallel: true,
  reporter: 'list',
  use: {
    headless: false,
    trace: 'on-first-retry',
  },
});
