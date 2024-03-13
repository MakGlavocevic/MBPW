import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/login.page';
import { testConfig } from '../testConfig';

test('User successfully signs in', async ({ page }) => {

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
   });

});

