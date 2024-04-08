import { log } from 'console';
import { test, expect } from '../../pom/pom.fixtures';
import { generateRandomPassword } from '../../pom/utils';
import { HomePage } from '../../pom/home.page';


const { USERNAME_AUTOMATION, PASSWORD } = process.env

test.beforeEach(async ({ page, homePage }) => {
  console.log('Test Start');
  await homePage.navigateToHomePage();
});

test('User successfully signs in and logs out', { 
  tag: ['@smoke', '@login', '@validlogin'] }, 
  async ({ page, homePage, loginPage }) => {

  await test.step(`Navigate to the login screen`, async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.assertThatUserIsOnLoginPage();
  });

  await test.step(`User logs in using valid credentials`, async () => {

    await loginPage.loginWithCredentials(USERNAME_AUTOMATION!, PASSWORD!);

    await loginPage.wait5SecondsForUserToFinishCaptcha();
    await loginPage.assertThatUserIsOnOTPPage();
    await loginPage.userEntersOTPCode();
   });

   await test.step(`User is signed in`, async () => {
    await loginPage.userIsSignedIn();
    await homePage.minimizeSupportWindow();
   });

   await test.step(`User signs out`, async () => {
    await homePage.userLogOuts();
    await homePage.assertThatUserNotSignedIn();
   });
});

test('User unsuccessfully signs in', { 
  tag: ['@smoke', '@login', '@invalidlogin'] }, 
  async ({ page, loginPage }) => {

  await test.step(`Navigate to the login screen`, async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.assertThatUserIsOnLoginPage();
  });

  await test.step(`User logs in using invalid credentials`, async () => {
    await loginPage.loginWithInvalidCredentials();
    await loginPage.wait5SecondsForUserToFinishCaptcha();
   });

   await test.step(`User asserts invalid credentials error`, async () => {
    await loginPage.assertInvalidCredentialsError();
   });
  });

  test('User enters invalid OTP code', { 
    tag: ['@smoke', '@login', '@invalidOTPlogin'] }, 
    async ({ page, loginPage }) => {
  
    await test.step(`Navigate to the login screen`, async () => {
      await loginPage.navigateToLoginPage();
      await loginPage.assertThatUserIsOnLoginPage();
    });
  
    await test.step(`User logs in using valid credentials but invalid otp code`, async () => {

      await loginPage.loginWithCredentials(USERNAME_AUTOMATION!, PASSWORD!);

      await loginPage.wait5SecondsForUserToFinishCaptcha();
      await loginPage.assertThatUserIsOnOTPPage();
      await loginPage.userEntersOTPCode();
     });
  
      await test.step(`User assert invalid otp code error`, async () => {
      await loginPage.assertInvalidErrorOTPCodeError();
     });
    });

    test('User is able to restart their password' , {
      tag: ['@smoke', '@login', '@forgotpassword'] }, 
      async ({ page, loginPage }) => {

        await test.step(`Navigate to the login screen`, async () => {
          await loginPage.navigateToLoginPage();
          await loginPage.assertThatUserIsOnLoginPage();
        });   
        
        await test.step('User has navigated to the forgot password screen' , async () => {

          await loginPage.userNavigatesToForgotPassword();
          await loginPage.userPopulatesForgotPassword(); // this needs to be updated 
          await loginPage.userPopulateOTPCodeForForgotPassword();
          await loginPage.userEntersNewPassword();
        })

        await test.step('User logins with new password' , async () => {
          await loginPage.userEntersOTPCode();
          await loginPage.userIsSignedIn();
        })
      });
