import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pom/login.page';
import { HomePage } from '../../pom/home.page';
import { TradePage } from '../../pom/trade.page';
import { testConfig } from '../../testConfig';
import { Utils } from '../../pom/utils';

test.beforeEach(async ({ page }) => {
  console.log('Test Start');
  await test.step(`User signs in`, async () => {
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
});

test('User successfully opens and closes a hedging BUY position',{ tag: ['@smoke', '@trade', '@buytrade'] }, async ({ page }) => {
    
  test.setTimeout(1200000);

    await test.step(`User selects hedging trading account`, async () => {
      const homePage = new HomePage(page);
      await homePage.selectHedgingTradeAccount();
    });
  
      await test.step(`User goes to trade screen`, async () => {
        const tradePage = new TradePage(page);
        await tradePage.navigateToTradePage();
    });

    await test.step(`User opens a EURUSD BUY position if the market is opened`, async () => {
      const tradePage = new TradePage(page);
      const utils = new Utils(page);
      const isTodayWeekend = await utils.isWeekend();
  
      // If today is a weekend, expect the market watch to be visible
      if (isTodayWeekend) {
          await expect(tradePage.MARKET_WATCH_TIMER).toBeVisible();
          console.log('Today is weekend. Market is closed.');
      } else {
          console.log('Today is not a weekend. Skipping the visibility check.');
          await tradePage.closeAllPositions();
  
          await tradePage.openMarketPosition('BUY', 'Value', '1');
          await tradePage.assertEntryPrice('BUY', 0.0001);
          await tradePage.assertCurrentPrice('BUY', 0.0001);
          await tradePage.assertInitialMargin(0.1);
          await tradePage.assertMargin();
          await tradePage.assertThereIsNoCommisionAndSwap();
          await tradePage.assertThereIsNoTPSL();
        
          await tradePage.closePosition();
          await tradePage.assertBalanceAfterClosedPosition(1);
          await tradePage.assertAccountMetricsNoPositions();
  
          await tradePage.navigateToOrderHistoryTab();
          await tradePage.assertOrderHistory('BUY', 0.0001, 0.1);
      }
  });
});

 test('User successfully opens and closes a hedging SELL position', { tag: ['@smoke', '@trade', '@selltrade'] }, async ({ page }) => {
  test.setTimeout(1200000);

  await test.step(`User selects hedging trading account`, async () => {
    const homePage = new HomePage(page);
    await homePage.selectHedgingTradeAccount();
  });

    await test.step(`User goes to trade screen`, async () => {
      const tradePage = new TradePage(page);
      await tradePage.navigateToTradePage();
  });

  await test.step(`User opens a EURUSD SELL position if the market is opened`, async () => {
    const tradePage = new TradePage(page);
    const utils = new Utils(page);
    const isTodayWeekend = await utils.isWeekend();

    // If today is a weekend, expect the market watch to be visible
    if (isTodayWeekend) {
        await expect(tradePage.MARKET_WATCH_TIMER).toBeVisible();
        console.log('Today is weekend. Market is closed.');
    } else {
        console.log('Today is not a weekend. Skipping the visibility check.');
        await tradePage.closeAllPositions();

        await tradePage.openMarketPosition('SELL', 'Value', '1');
        await tradePage.assertEntryPrice('SELL', 0.0001);
        await tradePage.assertCurrentPrice('SELL', 0.0001);
        await tradePage.assertInitialMargin(0.1);
        await tradePage.assertMargin();
        await tradePage.assertThereIsNoCommisionAndSwap();
        await tradePage.assertThereIsNoTPSL();
      
        await tradePage.closePosition();
        await tradePage.assertBalanceAfterClosedPosition(1);
        await tradePage.assertAccountMetricsNoPositions();

        await tradePage.navigateToOrderHistoryTab();
        await tradePage.assertOrderHistory('SELL', 0.0001, 0.1);
    }
});
});