import { PlaywrightTestConfig } from '@playwright/test';
import * as process from 'node:process';


const config: PlaywrightTestConfig = {
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 4 : 1,
  use: {
    actionTimeout: 0,
    trace: "on-first-retry",
  }
}

export default config;
