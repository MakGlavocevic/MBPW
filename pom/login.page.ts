import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { fill } from 'cypress/types/lodash';
import { text } from 'stream/consumers';
import { generateRandomPassword } from './utils';

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
    readonly OTP_INVALID_ERROR: Locator;
    readonly FORGOT_PASSWORD_BUTTON: Locator;
    readonly FORGOT_PASSWORD_TEXT: string;
    readonly FORGOT_PASSWORD_INPUT_FIELD: Locator;
    readonly FORGOT_PASSWORD_CONTINUE_BUTTON: Locator;
    readonly FORGOT_PASSWORD_OTP_1: Locator;
    readonly FORGOT_PASSWORD_OTP_2: Locator;
    readonly FORGOT_PASSWORD_OTP_3: Locator;
    readonly FORGOT_PASSWORD_OTP_4: Locator;
    readonly FORGOT_PASSWORD_OTP_5: Locator;
    readonly FORGOT_PASSWORD_OTP_6: Locator;
    readonly FORGOT_PASSWORD_CONTINUE: Locator;
    readonly NEW_PASSWORD_FIELD: Locator;
    readonly NEW_PASSWORD_FIELD_CONFIRMATION: Locator;
    readonly RESET_PASSWORD_BUTTON: Locator;
    readonly PASSWORD_SUCCESSFULLY_CHANGED: string;
    readonly FORGOT_PASSWORD_LOGIN_BUTTON: Locator;
    newPassword: String; 


    
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
        this.OTP_INVALID_ERROR = page.locator('[class="style_message__PKH_2 style_error__fKZrk"]');
        this.FORGOT_PASSWORD_BUTTON = page.locator ('//html/body/div[1]/div/div/div/div/div[1]/form/a') 
        this.FORGOT_PASSWORD_TEXT = 'Enter the email associated with your account and we’ll send an email with instructions to reset your password.';
        this.FORGOT_PASSWORD_INPUT_FIELD = page.locator('//html/body/div[1]/div/div/div/div/div/div[1]/div/input');
        this.FORGOT_PASSWORD_CONTINUE_BUTTON = page.locator ('//html/body/div[1]/div/div/div/div/div/div[2]/button[2]'); 
        this.FORGOT_PASSWORD_OTP_1 = page.locator ('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]');
        this.FORGOT_PASSWORD_OTP_2 = page.locator ('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]'); 
        this.FORGOT_PASSWORD_OTP_3 = page.locator ('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/input[1]');
        this.FORGOT_PASSWORD_OTP_4 = page.locator ('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/input[1]');
        this.FORGOT_PASSWORD_OTP_5 = page.locator ('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[5]/input[1]');
        this.FORGOT_PASSWORD_OTP_6 = page.locator ('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[6]/input[1]');
        this.FORGOT_PASSWORD_CONTINUE = page.locator('//html/body/div[1]/div/div/div/div/div/div[3]/button');
        this.NEW_PASSWORD_FIELD = page.locator('//html/body/div[1]/div/div/div/div/form/div[1]/div/input');
        this.NEW_PASSWORD_FIELD_CONFIRMATION = page.locator ('//html/body/div[1]/div/div/div/div/form/div[2]/div/input');
        this.RESET_PASSWORD_BUTTON = page.locator ('//button[contains(text(),"Reset Password")]');
        this.PASSWORD_SUCCESSFULLY_CHANGED = 'You’ve successfully reset your password';
        this.FORGOT_PASSWORD_LOGIN_BUTTON = page.locator ('//button[contains(text(),"Login")]');

    }

    async navigateToLoginPage(): Promise<void> {

        await expect(this.REDIRECT_TO_LOGIN_BUTTON, 'User is on the login/signup page').toBeVisible();
        await this.REDIRECT_TO_LOGIN_BUTTON.click();

    }

    async assertThatUserIsOnLoginPage(): Promise<void> {
      
        await expect(this.SIGN_IN_SCREEN_TITLE, 'User is on the sign in page').toBeVisible();
   
    }

    async loginWithCredentials(username: string, password: string): Promise<void> {
      
        await expect(this.USERNAME_EDITBOX).toBeVisible();
        await expect(this.PASSWORD_EDITBOX).toBeVisible();
        
        await this.USERNAME_EDITBOX.fill(username);
        await this.PASSWORD_EDITBOX.fill(password);

        await expect(this.LOGIN_SUBMIT_BUTTON, 'User entered credentials').toBeVisible();
        await this.LOGIN_SUBMIT_BUTTON.click();
    }

    async loginWithInvalidCredentials(): Promise<void> {
      
        await expect(this.USERNAME_EDITBOX).toBeVisible();
        await expect(this.PASSWORD_EDITBOX).toBeVisible();
        
        await this.USERNAME_EDITBOX.fill('username@dot.com');
        await this.PASSWORD_EDITBOX.fill('password');

        await expect(this.LOGIN_SUBMIT_BUTTON, 'User entered invalid credentials').toBeVisible();
        await this.LOGIN_SUBMIT_BUTTON.click();
    }

    async assertInvalidCredentialsError(): Promise<void> {
      
        await expect(this.INVALID_EMAIL_OR_PASSWORD_ERROR, 'Error for invalid credentials is visible').toBeVisible();
        await expect(this.INVALID_EMAIL_OR_PASSWORD_ERROR).toHaveText(this.INVALID_EMAIL_OR_PASSWORD_TEXT);
    }

    async wait15SecondsForUserToFinishCaptcha(): Promise<void> {

        await this.page.waitForTimeout(15000);
      
    }

    async assertThatUserIsOnOTPPage(): Promise<void> {
      
        await expect(this.OTP_TITLE, 'User is on the OTP screen').toBeVisible();
        await expect(this.OTP_SUBTITLE).toBeVisible();

    }

    async userEntersOTPCode(): Promise<void> {
      
        await this.OTP_1.fill('1');
        await this.OTP_2.fill('2');
        await this.OTP_3.fill('3');
        await this.OTP_4.fill('4');
        await this.OTP_5.fill('5');
        await this.OTP_6.fill('6');

        await expect(this.LOGIN_SUBMIT_BUTTON, 'User sees login button').toBeVisible();
        await this.LOGIN_SUBMIT_BUTTON.click();

    }

    async userEntersInvalidOTPCode(): Promise<void> {
      
        await this.OTP_1.fill('1');
        await this.OTP_2.fill('2');
        await this.OTP_3.fill('1');
        await this.OTP_4.fill('2');
        await this.OTP_5.fill('1');
        await this.OTP_6.fill('2');

        await expect(this.LOGIN_SUBMIT_BUTTON, 'User sees login button').toBeVisible();
        await this.LOGIN_SUBMIT_BUTTON.click();

    }

    async assertInvalidErrorOTPCodeError(): Promise<void> {
      
        await expect(this.OTP_INVALID_ERROR, "Error for invalid OTP is visible").toBeVisible();
        await expect(this.OTP_INVALID_ERROR).toContainText('Incorrect OTP. You have')
        
    }

    async userIsSignedIn(): Promise<void> {
      
        await expect(this.WALLET_BACKGROUND, 'User is signed in').toBeVisible();

    }

    async userNavigatesToForgotPassword(): Promise<void> {

        await expect(this.FORGOT_PASSWORD_BUTTON, 'Forgot Password?').toBeVisible();
        await this.FORGOT_PASSWORD_BUTTON.click();
        await expect(this.FORGOT_PASSWORD_TEXT).toContain(this.FORGOT_PASSWORD_TEXT);
    }

    async userPopulatesForgotPassword(): Promise<void> {

        await expect(this.FORGOT_PASSWORD_INPUT_FIELD).toBeVisible();
        await this.FORGOT_PASSWORD_INPUT_FIELD.fill('anel@automation.com') // Email that is used for forgot password flow
        await this.FORGOT_PASSWORD_CONTINUE_BUTTON.click();
    }

    async userPopulateOTPCodeForForgotPassword(): Promise<void> {
        await this.FORGOT_PASSWORD_OTP_1.fill('1');
        await this.FORGOT_PASSWORD_OTP_2.fill('2');
        await this.FORGOT_PASSWORD_OTP_3.fill('3');
        await this.FORGOT_PASSWORD_OTP_4.fill('4');
        await this.FORGOT_PASSWORD_OTP_5.fill('5');
        await this.FORGOT_PASSWORD_OTP_6.fill('6');
        await this.FORGOT_PASSWORD_CONTINUE.click()
    }

    async userEntersNewPassword(): Promise<void> {
        const newPassword = generateRandomPassword(12); // Change value for password how much letters/digits password will have 
        await this.NEW_PASSWORD_FIELD.fill(newPassword); 
        await this.NEW_PASSWORD_FIELD_CONFIRMATION.fill(newPassword);
        await this.RESET_PASSWORD_BUTTON.click();
        await expect(this.PASSWORD_SUCCESSFULLY_CHANGED).toContain(this.PASSWORD_SUCCESSFULLY_CHANGED);
        await this.FORGOT_PASSWORD_LOGIN_BUTTON.click();
        await this.USERNAME_EDITBOX.fill('anel@automation.com')
        await this.PASSWORD_EDITBOX.fill(newPassword);
        await this.LOGIN_SUBMIT_BUTTON.click();
    } 
}