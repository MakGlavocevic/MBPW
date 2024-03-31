import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pom/login.page';
import { HomePage } from '../../pom/home.page';

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
});