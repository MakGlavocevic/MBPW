import { Page, BrowserContext, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly USERNAME_EDITBOX: Locator;
    readonly PASSWORD_EDITBOX: Locator;
    readonly REDIRECT_TO_LOGIN_BUTTON: Locator;
    readonly SIGN_IN_SCREEN_TITLE: Locator;
    readonly LOGIN_SUBMIT_BUTTON: Locator;
    readonly OTP_TITLE: Locator;
    readonly OTP_SUBTITLE: Locator;
    readonly OTP_1: Locator;
    readonly OTP_2: Locator;
    readonly OTP_3: Locator;
    readonly OTP_4: Locator;
    readonly OTP_5: Locator;
    readonly OTP_6: Locator;
    readonly WALLET_BACKGROUND: Locator;
    readonly INVALID_EMAIL_OR_PASSWORD_ERROR: Locator;
    readonly INVALID_EMAIL_OR_PASSWORD_TEXT: string;
   

    constructor(page: Page) {
        this.page = page;
        this.USERNAME_EDITBOX = page.locator('[name="email"]');
        this.PASSWORD_EDITBOX = page.locator('[name="password"]');
        this.REDIRECT_TO_LOGIN_BUTTON = page.locator('[href="/login"]');
        this.SIGN_IN_SCREEN_TITLE = page.locator('//span[contains(text(),"Sign In")]');
        this.LOGIN_SUBMIT_BUTTON = page.locator('[type="submit"]');
        this.OTP_TITLE = page.locator('[class="login_otp-form-title__kXT9k"]');
        this.OTP_SUBTITLE = page.locator('[class="login_otp-form-description__Igq_Y"]');
        this.OTP_1 = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]');
        this.OTP_2 = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/input[1]');
        this.OTP_3 = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/input[1]');
        this.OTP_4 = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/input[1]');
        this.OTP_5 = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/input[1]');
        this.OTP_6 = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[6]/input[1]');
        this.WALLET_BACKGROUND = page.locator('[alt="wallet-background"]');
        this.INVALID_EMAIL_OR_PASSWORD_ERROR = page.locator('[class="style_message__PKH_2 style_error__fKZrk"]');
        this.INVALID_EMAIL_OR_PASSWORD_TEXT = 'Invalid email or password. Please try again.';
    }

    async navigateToLoginPage(): Promise<void> {

        await expect(this.REDIRECT_TO_LOGIN_BUTTON).toBeVisible();
        await this.REDIRECT_TO_LOGIN_BUTTON.click();

    }

    async assertThatUserIsOnLoginPage(): Promise<void> {
      
        await expect(this.SIGN_IN_SCREEN_TITLE).toBeVisible();
   
    }

    async loginWithCredentials(username: string, password: string): Promise<void> {
      
        await expect(this.USERNAME_EDITBOX).toBeVisible();
        await expect(this.PASSWORD_EDITBOX).toBeVisible();
        
        await this.USERNAME_EDITBOX.fill(username);
        await this.PASSWORD_EDITBOX.fill(password);

        await expect(this.LOGIN_SUBMIT_BUTTON).toBeVisible();
        await this.LOGIN_SUBMIT_BUTTON.click();
    }

    async loginWithInvalidCredentials(): Promise<void> {
      
        await expect(this.USERNAME_EDITBOX).toBeVisible();
        await expect(this.PASSWORD_EDITBOX).toBeVisible();
        
        await this.USERNAME_EDITBOX.fill('username@dot.com');
        await this.PASSWORD_EDITBOX.fill('password');

        await expect(this.LOGIN_SUBMIT_BUTTON).toBeVisible();
        await this.LOGIN_SUBMIT_BUTTON.click();
    }

    async assertInvalidCredentialsError(): Promise<void> {
      
        await expect(this.INVALID_EMAIL_OR_PASSWORD_ERROR).toBeVisible();
        await expect(this.INVALID_EMAIL_OR_PASSWORD_ERROR).toHaveText(this.INVALID_EMAIL_OR_PASSWORD_TEXT);
    }

    async wait15SecondsForUserToFinishCaptcha(): Promise<void> {

        await this.page.waitForTimeout(15000);
      
    }

    async assertThatUserIsOnOTPPage(): Promise<void> {
      
        await expect(this.OTP_TITLE).toBeVisible();
        await expect(this.OTP_SUBTITLE).toBeVisible();

    }

    async userEntersOTPCode(): Promise<void> {
      
        await this.OTP_1.fill('1');
        await this.OTP_2.fill('2');
        await this.OTP_3.fill('3');
        await this.OTP_4.fill('4');
        await this.OTP_5.fill('5');
        await this.OTP_6.fill('6');

        await this.LOGIN_SUBMIT_BUTTON.click();

    }

    async userIsSignedIn(): Promise<void> {
      
        await expect(this.WALLET_BACKGROUND).toBeVisible();

    }


}