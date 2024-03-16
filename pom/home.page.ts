import { Page, BrowserContext, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly HEDGING_TRADING_ACCOUNT: Locator;
    readonly TRADING_ACCOUNT_DROPDOWN_UNOPENED: Locator;
    readonly INVALID_EMAIL_OR_PASSWORD_TEXT: string;
    readonly WALLET_BACKGROUND: Locator;
    readonly LOG_OUT_BUTTON: Locator;
    constructor(page: Page) {
        this.page = page;
        this.TRADING_ACCOUNT_DROPDOWN_UNOPENED = page.locator('[id="headlessui-popover-button-:rf:"]');
        this.INVALID_EMAIL_OR_PASSWORD_TEXT = 'Invalid email or password. Please try again.';
        this.HEDGING_TRADING_ACCOUNT = page.locator('//span[contains(text(),"650872")]');
        this.WALLET_BACKGROUND = page.locator('[alt="wallet-background"]');
        this.LOG_OUT_BUTTON = page.locator('//button[contains(text(),"Log Out")]');
    }

    async navigateToHomePage(): Promise<void> {

        await this.page.goto("");
        await this.page.setViewportSize({
            width: 1920,
            height: 1080,
          });

    }

    async selectHedgingTradeAccount(): Promise<void> {

        await expect(this.TRADING_ACCOUNT_DROPDOWN_UNOPENED).toBeVisible();
        await this.TRADING_ACCOUNT_DROPDOWN_UNOPENED.click();

        await expect(this.HEDGING_TRADING_ACCOUNT).toBeVisible();
        await this.HEDGING_TRADING_ACCOUNT.click();

        await this.page.waitForTimeout(1000);

        await expect(this.HEDGING_TRADING_ACCOUNT).toBeVisible();
      
    }

    async userLogOuts(): Promise<void> {
      
        await expect(this.TRADING_ACCOUNT_DROPDOWN_UNOPENED).toBeVisible();
        await this.TRADING_ACCOUNT_DROPDOWN_UNOPENED.click();
        
        await expect(this.LOG_OUT_BUTTON).toBeVisible();
        await this.LOG_OUT_BUTTON.click();

        await this.page.waitForTimeout(1000);

    }

    async assertThatUserNotSignedIn(): Promise<void> {
      
        await expect(this.WALLET_BACKGROUND).not.toBeVisible();

    }
}