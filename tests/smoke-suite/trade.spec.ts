import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pom/login.page';
import { HomePage } from '../../pom/home.page';
import { TradePage } from '../../pom/trade.page';
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

test('User successfully opens and closes a hedging BUY position', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.selectHedgingTradeAccount();

    const tradePage = new TradePage(page);
    await tradePage.navigateToTradePage();

    await tradePage.closeAllPositions();

    await tradePage.openEURUSDPosition('BUY');
    await tradePage.assertEntryPrice('BUY');
    await tradePage.assertCurrentPrice('BUY');
    await tradePage.assertMargin();
    await tradePage.assertThereIsNoCommisionAndSwap();
    await tradePage.assertThereIsNoTPSL();

    await tradePage.closePosition();
});

test('User successfully opens and closes a hedging SELL position', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.selectHedgingTradeAccount();

    const tradePage = new TradePage(page);
    await tradePage.navigateToTradePage();

    await tradePage.closeAllPositions();

    await tradePage.openEURUSDPosition('SELL');
    await tradePage.assertEntryPrice('SELL');
    await tradePage.assertCurrentPrice('SELL');
    await tradePage.assertMargin();
    await tradePage.assertThereIsNoCommisionAndSwap();
    await tradePage.assertThereIsNoTPSL();

    await tradePage.closePosition();
});