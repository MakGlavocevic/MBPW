import { Page, BrowserContext, Locator, expect } from '@playwright/test';

export class Utils {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly LEVERAGE_500: number;
    readonly EUR_USD_LINK: string;
    constructor(page: Page) {
        this.LEVERAGE_500 = 500;
        this.EUR_USD_LINK = '/trade/EURUSD';
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

   async leverageMarginCalculation(positionValue: number, leverage: number): Promise<number> {
     
        if (leverage === 0) {
            throw new Error('Leverage cannot be zero');
        }
    
        return positionValue / leverage;
    }
} 