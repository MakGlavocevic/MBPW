import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pom/login.page';
import { HomePage } from '../../pom/home.page';
import { TradePage } from '../../pom/trade.page';
import { testConfig } from '../../testConfig';
import { Utils } from '../../pom/utils';

test.beforeEach(async ({ page }) => {
  console.log('Test Start');
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.assertThatUserIsOnLoginPage();

  await loginPage.loginWithCredentials(testConfig.username, testConfig.password);
  await loginPage.wait15SecondsForUserToFinishCaptcha();
  await loginPage.assertThatUserIsOnOTPPage();
  await loginPage.userEntersOTPCode();

  await loginPage.userIsSignedIn();
  await homePage.minimizeSupportWindow();
});

test('User successfully opens and closes a hedging BUY position',{ tag: ['@smoke', '@trade'] }, async ({ page }) => {
    test.setTimeout(1200000);
    const homePage = new HomePage(page);
    await homePage.selectHedgingTradeAccount();

    const tradePage = new TradePage(page);
    await tradePage.navigateToTradePage();
    await tradePage.closeAllPositions();

    const utils = new Utils(page);
    const isTodayWeekend = await utils.isWeekend();

    // If today is a weekend, expect the market watch to be visible
    if (isTodayWeekend) {
        await expect(tradePage.MARKET_WATCH_TIMER).toBeVisible();
        console.log('Today is weekend. Market is closed.');
    } else {
        console.log('Today is not a weekend. Skipping the visibility check.');
        await tradePage.openEURUSDPosition('BUY');
        /*   await tradePage.assertEntryPrice('BUY', range);
          await tradePage.assertCurrentPrice('BUY', range);
          await tradePage.assertMargin();
          await tradePage.assertThereIsNoCommisionAndSwap();
          await tradePage.assertThereIsNoTPSL();
      
          await tradePage.closePosition(); */
    }
});

/* test('User successfully opens and closes a hedging SELL position', { tag: ['@smoke', '@trade'] }, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.selectHedgingTradeAccount();

    const tradePage = new TradePage(page);
    await tradePage.navigateToTradePage();
    await tradePage.closeAllPositions();

    const utils = new Utils(page);
    const isTodayWeekend = await utils.isWeekend();

    if (isTodayWeekend) {
      await expect(tradePage.MARKET_WATCH_TIMER).toBeVisible();
      console.log('Today is weekend. Market is closed.');
    } else {
        console.log('Today is not a weekend. Skipping the visibility check.');
        await tradePage.openEURUSDPosition('SELL');
          await tradePage.assertEntryPrice('SELL', range);
          await tradePage.assertCurrentPrice('SELL', range);
          await tradePage.assertMargin();
          await tradePage.assertThereIsNoCommisionAndSwap();
          await tradePage.assertThereIsNoTPSL();
      
          await tradePage.closePosition(); 
        }
}); */