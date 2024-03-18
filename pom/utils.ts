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


    async isWithinRange(value: number, target: number, range: number): Promise<boolean> {
        const lowerBound = target - range;
        const upperBound = target + range;
        console.log('The value range is between lower ' + lowerBound + ' and upper ' + upperBound);
        return value >= lowerBound && value <= upperBound;
    }
} 