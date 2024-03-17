import { Page, BrowserContext, Locator, expect } from '@playwright/test';

export class Utils {
    readonly page: Page;
    readonly context: BrowserContext;
 
    constructor(page: Page) {
     }

     async isWeekend(): Promise<boolean> {
        const today = new Date();
        const dayOfWeek = today.getDay(); // Returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday
        return dayOfWeek === 0 || dayOfWeek === 6;
    }

} 