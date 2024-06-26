import { test, expect } from '../../pom/pom.fixtures';

const { USERNAME_AUTOMATION, PASSWORD } = process.env

test.beforeEach(async ({ page, homePage, loginPage }) => {
  console.log('Test Start');

  await test.step(`User signs in`, async () => {
  
    await homePage.navigateToHomePage();
   
    await loginPage.navigateToLoginPage();
    await loginPage.assertThatUserIsOnLoginPage();

    await loginPage.loginWithCredentials(USERNAME_AUTOMATION!, PASSWORD!);
    await loginPage.wait5SecondsForUserToFinishCaptcha();
    await loginPage.assertThatUserIsOnOTPPage();
    await loginPage.userEntersOTPCode();
  
    await loginPage.userIsSignedIn();
    await homePage.minimizeSupportWindow();
  });
});

test('User successfully opens and closes a hedging BUY position with EUR trading account',{ 
  tag: ['@smoke', '@trade', '@eurbuytrade'] }, 
  async ({ page, homePage, tradePage, utils }) => {
    
  test.setTimeout(60000);

    await test.step(`User selects EUR hedging trading account`, async () => {
      await homePage.selectEURHedgingTradeAccount();
    });
  
    await test.step(`User goes to trade screen`, async () => {
      await tradePage.navigateToTradePage();
    });

    await test.step(`User opens a EURUSD BUY position if the market is opened`, async () => {
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

 test('User successfully opens and closes a hedging SELL position with EUR trading account', { 
  tag: ['@smoke', '@trade', '@eurselltrade'] }, 
  async ({ page, homePage, tradePage, utils  }) => {
  test.setTimeout(60000);

  await test.step(`User selects EUR hedging trading account`, async () => {
    await homePage.selectEURHedgingTradeAccount();
  });

  await test.step(`User goes to trade screen`, async () => {
    await tradePage.navigateToTradePage();
  });

  await test.step(`User opens a EURUSD SELL position if the market is opened`, async () => {
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

test('User asserts that Hedging trading account behaves as expected',{ 
  tag: ['@smoke', '@trade', '@hedgingcheck'] }, 
  async ({ page, homePage, tradePage, utils }) => {
    
  test.setTimeout(60000);

    await test.step(`User selects EUR hedging trading account`, async () => {
      await homePage.selectEURHedgingTradeAccount();
    });
  
    await test.step(`User goes to trade screen`, async () => {
      await tradePage.navigateToTradePage();
    });

    await test.step(`User opens two EURUSD BUY position if the market is opened`, async () => {
      const isTodayWeekend = await utils.isWeekend();
  
      // If today is a weekend, expect the market watch to be visible
      if (isTodayWeekend) {
          await expect(tradePage.MARKET_WATCH_TIMER).toBeVisible();
          console.log('Today is weekend. Market is closed.');
      } else {
          console.log('Today is not a weekend. Skipping the visibility check.');
          await tradePage.closeAllPositions();
  
          await tradePage.openMarketPositionBasic('BUY', 'Value', '1');
          await tradePage.openMarketPositionBasic('BUY', 'Value', '1');
          await tradePage.assertMarginOfTwoPositions();
          await tradePage.assertHedgingPositionBehaviour();
          await tradePage.closeAllPositions();
      }
  });
});

test('User asserts that Netting trading account behaves as expected',{ 
  tag: ['@smoke', '@trade', '@nettingcheck'] }, 
  async ({ page, homePage, tradePage, utils }) => {
    
  test.setTimeout(60000);

    await test.step(`User selects EUR hedging trading account`, async () => {
      await homePage.selectNettingTradeAccount();
    });
  
    await test.step(`User goes to trade screen`, async () => {
      await tradePage.navigateToTradePage();
    });

    await test.step(`User opens a EURUSD BUY position if the market is opened`, async () => {
      const isTodayWeekend = await utils.isWeekend();
  
      // If today is a weekend, expect the market watch to be visible
      if (isTodayWeekend) {
          await expect(tradePage.MARKET_WATCH_TIMER).toBeVisible();
          console.log('Today is weekend. Market is closed.');
      } else {
          console.log('Today is not a weekend. Skipping the visibility check.');
          await tradePage.closeAllPositions();
  
          await tradePage.openMarketPositionBasic('BUY', 'Value', '1');
          await tradePage.openMarketPositionBasic('BUY', 'Value', '1');
          await tradePage.assertMarginOfTwoPositions();
          await tradePage.assertNettingPositionBehaviour();
          await tradePage.closeAllPositions();
      }
  });
});
