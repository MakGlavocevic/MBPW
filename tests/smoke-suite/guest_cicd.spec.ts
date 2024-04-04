import { test, expect } from '../../pom/pom.fixtures';
import { LoginPage } from '../../pom/login.page';
import { HomePage } from '../../pom/home.page';

test.beforeEach(async ({ page, homePage }) => {
  console.log('Test Start');
  await homePage.navigateToHomePage();
});

test('User successfully signs in and logs out', { 
  tag: ['@testcicd', '@test'] }, 
  async ({ page, homePage, loginPage }) => {

  await test.step(`Navigate to the login screen and assert it`, async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.assertThatUserIsOnLoginPage();
  });
});