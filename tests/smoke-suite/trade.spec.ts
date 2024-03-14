import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pom/login.page';
import { testConfig } from '../../testConfig';

test.beforeEach(async ({ page }) => {
  console.log('Test Start');
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.assertThatUserIsOnLoginPage();
  await loginPage.loginWithCredentials(testConfig.username, testConfig.password);
  await loginPage.wait15SecondsForUserToFinishCaptcha();
  await loginPage.assertThatUserIsOnOTPPage();
  await loginPage.userEntersOTPCode();
  await loginPage.userIsSignedIn();
});

test('User successfully opens BUY market default position', async ({ page }) => {

  

});

test('User successfully opens SELL market default position', async ({ page }) => {

  

});


