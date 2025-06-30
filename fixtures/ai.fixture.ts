import { test as base } from '@playwright/test';
import { AITestHelper } from '../utils/ai-helper';

export const test = base.extend<{ 
  ai: typeof AITestHelper 
}>({
  ai: async ({}, use) => {
    await use(AITestHelper);
  },
});

export { expect } from '@playwright/test';