import base from "../../../playwright.config"
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  ...base,
  testDir: "./tests",
  projects: [
    {
      name: "Local",
      use: {
        baseURL: "https://test-aqa.demo.case.one/",
        trace: "retain-on-failure",
        video: "retain-on-failure",
        launchOptions: {
          slowMo: 80,
        }
      }
    }
  ],
  reporter: [
    ["list"],
  ]
}

export default config;