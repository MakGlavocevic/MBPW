import { Page, BrowserContext, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly HEDGING_TRADING_ACCOUNT: Locator;
    readonly TRADING_ACCOUNT_DROPDOWN_AVATAR_ICON: Locator;
    readonly INVALID_EMAIL_OR_PASSWORD_TEXT: string;
    readonly WALLET_BACKGROUND: Locator;
    readonly LOG_OUT_BUTTON: Locator;
    readonly SUPPORT_WINDOW_MINIMIZE: Locator;
    constructor(page: Page) {
        this.page = page;
        this.TRADING_ACCOUNT_DROPDOWN_AVATAR_ICON = page.locator('[alt="user-icon"]');
        this.INVALID_EMAIL_OR_PASSWORD_TEXT = 'Invalid email or password. Please try again.';
        this.HEDGING_TRADING_ACCOUNT = page.locator('//span[contains(text(),"650872")]');
        this.WALLET_BACKGROUND = page.locator('[alt="wallet-background"]');
        this.LOG_OUT_BUTTON = page.locator('//button[contains(text(),"Log Out")]');
        this.SUPPORT_WINDOW_MINIMIZE = page.locator('[aria-label="Minimize window"]');
    }

    async navigateToHomePage(): Promise<void> {

        await this.page.goto("");
        await this.page.setViewportSize({
            width: 1920,
            height: 1080,
          });
          console.log('User is on homepage');
               

    }

    async selectHedgingTradeAccount(): Promise<void> {

        await expect(this.TRADING_ACCOUNT_DROPDOWN_AVATAR_ICON).toBeVisible();
        await this.TRADING_ACCOUNT_DROPDOWN_AVATAR_ICON.click();

        await expect(this.HEDGING_TRADING_ACCOUNT).toBeVisible();
        await this.HEDGING_TRADING_ACCOUNT.click();
        console.log('User selected hedging account');

        await this.page.waitForTimeout(1000);

        await expect(this.HEDGING_TRADING_ACCOUNT).toBeVisible();
      
    }

    async userLogOuts(): Promise<void> {
      
        await expect(this.TRADING_ACCOUNT_DROPDOWN_AVATAR_ICON).toBeVisible();
        await this.TRADING_ACCOUNT_DROPDOWN_AVATAR_ICON.click();
        
        await expect(this.LOG_OUT_BUTTON).toBeVisible();
        await this.LOG_OUT_BUTTON.click();

        await this.page.waitForTimeout(1000);
        console.log('User is logged out');
    }

    async assertThatUserNotSignedIn(): Promise<void> {
      
        await expect(this.WALLET_BACKGROUND).not.toBeVisible();

    }

    async minimizeSupportWindow(): Promise<void> {

       const supportFrameWindow =  this.page.frameLocator('[name="chat-widget"]');
    
       if (await supportFrameWindow.locator(this.SUPPORT_WINDOW_MINIMIZE).isVisible()){
       await supportFrameWindow.locator(this.SUPPORT_WINDOW_MINIMIZE).click();}
   } 
} 