import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pom/login.page';
import { HomePage } from '../../pom/home.page';
import { testConfig } from '../../testConfig';

test.beforeEach(async ({ page }) => {
  console.log('Test Start');
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
});

test('User successfully signs in and logs out', { tag: ['@smoke', '@login'] }, async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await test.step(`Navigate to the login screen`, async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.assertThatUserIsOnLoginPage();
  });

  await test.step(`User logs in using valid credentials`, async () => {
    await loginPage.loginWithCredentials(testConfig.username, testConfig.password);
    await loginPage.wait15SecondsForUserToFinishCaptcha();
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

test('User unsuccessfully signs in', { tag: ['@smoke', '@login'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);

  await test.step(`Navigate to the login screen`, async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.assertThatUserIsOnLoginPage();
  });

  await test.step(`User logs in using invalid credentials`, async () => {
    await loginPage.loginWithInvalidCredentials();
    await loginPage.wait15SecondsForUserToFinishCaptcha();
   });

   await test.step(`User asserts invalid credentials error`, async () => {
    await loginPage.assertInvalidCredentialsError();
   });

  });
