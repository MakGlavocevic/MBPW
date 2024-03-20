import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { Utils } from '../pom/utils';

export class TradePage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly TRADE_DROPDOWN_BUTTON: Locator;
    readonly INVALID_EMAIL_OR_PASSWORD_ERROR: Locator;
    readonly TRADE_DEFAULT_LINK: string;
    readonly TRADE_NAVIGATION_BUTTON: Locator;
    readonly BUY_SIDE_BUTTON: Locator;
    readonly SELL_SIDE_BUTTON: Locator;
    readonly BUY_INACTIVE_BUTTON: Locator;
    readonly SELL_INACTIVE_BUTTON: Locator;
    readonly BALANCE: Locator;
    readonly POSITION_VALUE_INPUT: Locator;
    readonly POSITION_LOT_INPUT: Locator;
    readonly BUY_LONG_BUTTON: Locator;
    readonly SELL_SHORT_BUTTON: Locator;
    readonly SELL_POSITION_LABEL: Locator;
    readonly BUY_POSITION_LABEL: Locator;
    readonly MARGIN_ACCOUNT_METRICS: Locator;
    readonly PNL_FIRST_TRADE: Locator;
    readonly BUY_PRICE: Locator;
    readonly SELL_PRICE: Locator;
    readonly BUY_PRICE_LAST_NUMBER: Locator;
    readonly SELL_PRICE_LAST_NUMBER: Locator;
    readonly ENTRY_PRICE_TABLE: Locator;
    readonly CURRENT_PRICE_TABLE: Locator;
    readonly MARGIN_POSITION_TABLE: Locator;
    balanceBeforeOpenPosition: number;
    balanceAfterClosedPosition: number;
    buyPriceWhenTradeWasOpened: number;
    sellPriceWhenTradeWasOpened: number;
    marginWhenOpenPosition: number;
    currentMargin: number;
    closedPriceWhenClosing: number;
    initialMargin: number;
    positionUnits: number;
    positionValue: number;
    tablePositionCloseButtonString: string;
    positionSideType: string;
    pnlValueWhenClosing: number;
    readonly TP_POSITION_TABLE: Locator;
    readonly SL_POSITION_TABLE: Locator;
    readonly SWAP_POSITION_TABLE: Locator;
    readonly COMMISION_POSITION_TABLE: Locator;
    readonly POSITION_CLOSE_BUTTON: Locator;
    readonly POSITION_EDIT_BUTTON: Locator;
    readonly CLOSE_MODAL_SUBTITLE: Locator;
    readonly CLOSE_BUTTON: Locator;
    readonly POSITION_CLOSED_SUCCESSFULLY_MODAL_TITLE: Locator;
    readonly OK_BUTTON: Locator;
    readonly MARKET_WATCH_TIMER: Locator;
    readonly CLOSED_PNL: Locator;
    readonly TABLE_POSITION_UNITS: Locator;
    readonly CLOSED_PRICE_COLUMN_LABEL: Locator;
    readonly ORDER_HISTORY_TAB: Locator;
    readonly BALANCE_ACCOUNT_METRICS: Locator;
    readonly EQUITY_ACCOUNT_METRICS: Locator;
    readonly FREE_MARGIN_ACCOUNT_METRICS: Locator;
    readonly ORDER_HISTORY_SIDE: Locator;
    readonly CLOSED_PRICE: Locator;
    readonly ORDER_HISTORY_PNL: Locator;
    readonly ORDER_HISTORY_UNITS: Locator;
    readonly ORDER_HISTORY_MARGIN: Locator;
    readonly ORDER_HISTORY_CLOSED_PRICE: Locator;
    readonly POSITION_SIZE_DROPDOWN_ARROW: Locator;
    readonly POSITION_SIZE_DROPDOWN_VALUE: Locator;
    readonly POSITION_SIZE_DROPDOWN_LOT: Locator;
    readonly INITIAL_MARGIN: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.INVALID_EMAIL_OR_PASSWORD_ERROR = page.locator('[class="style_message__PKH_2 style_error__fKZrk"]');
        this.TRADE_DEFAULT_LINK = '/trade/EURUSD';
        this.TRADE_DROPDOWN_BUTTON = page.locator('//header/div[1]/div[1]/div[1]/span[1]/div[1]');
        this.TRADE_NAVIGATION_BUTTON = page.locator('[href="/trade/EURUSD"]');
        this.BUY_SIDE_BUTTON = page.locator('//span[contains(text(),"Buy")]');
        this.SELL_SIDE_BUTTON = page.locator('//span[contains(text(),"Sell")]');
        this.BUY_INACTIVE_BUTTON = page.locator('[class="style_tab-button__ZR4hy style_tab-button--right__FL_yj justify-end align-center px-16 py-6 style_tab-button--inactive__7y2K5"]');
        this.SELL_INACTIVE_BUTTON = page.locator('[class="style_tab-button__ZR4hy style_tab-button--left__NHKYQ align-center px-16 py-6 style_tab-button--inactive__7y2K5"]');
        this.BALANCE = page.locator('//*[@id="__next"]/div/div/div/div[2]/div/div[5]/div/div[1]/div[2]/div[2]/div/div/div/span[1]');
        this.POSITION_VALUE_INPUT = page.locator('[class="style_input__7PBqJ"]');
        this.POSITION_LOT_INPUT = page.locator('[class="style_input__7PBqJ"]');
        this.POSITION_SIZE_DROPDOWN_ARROW = page.locator('[class="ml-8 size-20 style_icon__WEyPE style_stroke-color__sta1z"]');
        this.BUY_LONG_BUTTON = page.locator('//button[contains(text(),"Buy / Long")]');
        this.SELL_SHORT_BUTTON = page.locator('//button[contains(text(),"Sell / Short")]');
        this.SELL_POSITION_LABEL = page.locator('//span[contains(text(),"SELL")]');
        this.BUY_POSITION_LABEL = page.locator('//span[contains(text(),"BUY")]');
        this.MARGIN_ACCOUNT_METRICS = page.locator('//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[2]/div[1]/div[1]/p[6]');
        this.PNL_FIRST_TRADE = page.locator('//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[9]/div[1]/div[1]/div[1]/span[1]');
        this.BUY_PRICE = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/span[2]/span[1]');
        this.SELL_PRICE = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/span[2]/span[1]');
        this.BUY_PRICE_LAST_NUMBER = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/span[2]/span[2]');
        this.SELL_PRICE_LAST_NUMBER = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/span[2]/span[2]');
        this.ENTRY_PRICE_TABLE = page.locator('//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[5]/span[1]/span[1]');
        this.CURRENT_PRICE_TABLE = page.locator('//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[6]/div[1]/div[1]/span[1]');
        this.MARGIN_POSITION_TABLE = page.locator('//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[10]/span[1]');
        this.TP_POSITION_TABLE = page.locator('//tbody/tr[1]/td[7]/span[1]');
        this.SL_POSITION_TABLE = page.locator('//tbody/tr[1]/td[8]/span[1]');
        this.SWAP_POSITION_TABLE = page.locator('//tbody/tr[1]/td[11]');
        this.COMMISION_POSITION_TABLE = page.locator('//tbody/tr[1]/td[12]');
        this.POSITION_CLOSE_BUTTON = page.locator('//tbody/tr[1]/td[13]/div[1]/button[2]');
        this.tablePositionCloseButtonString = '//tbody/tr[1]/td[13]/div[1]/button[2]';
        this.POSITION_EDIT_BUTTON = page.locator('//tbody/tr[1]/td[13]/div[1]/button[1]');
        this.CLOSE_MODAL_SUBTITLE = page.locator('//p[contains(text(),"Are you sure you want to close this position?")]');
        this.CLOSE_BUTTON = page.locator('//button[contains(text(),"Close")]');
        this.POSITION_CLOSED_SUCCESSFULLY_MODAL_TITLE = page.locator('//p[contains(text(),"Position Closed Succesfully")]');
        this.OK_BUTTON = page.locator('//button[contains(text(),"Ok")]');
        this.MARKET_WATCH_TIMER = page.locator('//div[contains(text(),"This market is currently closed. It will be open in")]');
        this.CLOSED_PNL = page.locator('//body/div[@id="headlessui-portal-root"]/div[1]/div[1]/div[1]/div[1]/div[2]/p[1]/div[1]/div[2]/div[3]/div[1]/div[1]/span[1]');
        this.TABLE_POSITION_UNITS = page.locator('//tbody/tr[1]/td[4]/span[1]');
        this.CLOSED_PRICE_COLUMN_LABEL = page.locator('//th[contains(text(),"Closed Price")]');
        this.ORDER_HISTORY_TAB = page.locator('//span[contains(text(),"Order History")]');
        this.BALANCE_ACCOUNT_METRICS = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[2]/div[1]/div[1]/p[2]');
        this.EQUITY_ACCOUNT_METRICS = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[2]/div[1]/div[1]/p[4]');
        this.ORDER_HISTORY_SIDE = page.locator('//tbody/tr[1]/td[3]/span[1]');
        this.ORDER_HISTORY_PNL = page.locator('//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[8]/div[1]/div[1]/div[1]/span[1]');
        this.ORDER_HISTORY_UNITS = page.locator('//body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/span[1]');
        this.ORDER_HISTORY_MARGIN = page.locator('//tbody/tr[1]/td[9]');
        this.ORDER_HISTORY_CLOSED_PRICE = page.locator('//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[5]/span[1]/span[1]');
        this.FREE_MARGIN_ACCOUNT_METRICS = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[2]/div[1]/div[1]/p[10]');
        this.POSITION_SIZE_DROPDOWN_VALUE = page.locator('//html[1]/body[1]/div[2]/div[3]/div[1]/button[1]');
        this.POSITION_SIZE_DROPDOWN_LOT = page.locator('//html[1]/body[1]/div[2]/div[3]/div[1]/button[2]');
        this.INITIAL_MARGIN = page.locator('//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[2]/div[3]/div[2]/span[2]');
       
    }

    async navigateToTradePage(): Promise<void> {

        await expect(this.TRADE_DROPDOWN_BUTTON).toBeVisible();
        await this.TRADE_DROPDOWN_BUTTON.click();
        await this.page.waitForTimeout(500);
        await expect(this.TRADE_NAVIGATION_BUTTON).toBeVisible();
        await this.TRADE_NAVIGATION_BUTTON.click();
        await this.page.waitForTimeout(500);
        await this.page. reload()
        await this.page.waitForLoadState('domcontentloaded')
        await expect(this.page.url()).toContain('/trade/EURUSD');
        await this.page.waitForTimeout(2000);
    }

    async closePosition(): Promise<void> {

        await this.page.waitForTimeout(1000);
        this.closedPriceWhenClosing = await this.currentPriceTable();
        await expect(this.POSITION_CLOSE_BUTTON).toBeVisible();
        await this.POSITION_CLOSE_BUTTON.click();
        await this.page.waitForTimeout(500);

        await expect(this.CLOSE_MODAL_SUBTITLE).toBeVisible();
        await expect(this.CLOSE_BUTTON).toBeVisible();
        await expect(this.CLOSED_PNL).toBeVisible();
        this.pnlValueWhenClosing = await this.closedPositionPNL();
        await this.CLOSE_BUTTON.click();
        await this.page.waitForTimeout(500);

        await expect(this.POSITION_CLOSED_SUCCESSFULLY_MODAL_TITLE).toBeVisible();
        await expect(this.OK_BUTTON).toBeVisible();
        await this.OK_BUTTON.click();
        await this.page.waitForTimeout(2000);

        await this.page.waitForTimeout(3000);
        this.balanceAfterClosedPosition = await this.currentYouHaveBalance();
    
    }

    async closeAllPosition(): Promise<void> {

        await this.page.waitForTimeout(1000);

        await expect(this.POSITION_CLOSE_BUTTON).toBeVisible();
        await this.POSITION_CLOSE_BUTTON.click();
        await this.page.waitForTimeout(500);

        await expect(this.CLOSE_MODAL_SUBTITLE).toBeVisible();
        await expect(this.CLOSE_BUTTON).toBeVisible();
        await this.CLOSE_BUTTON.click();
        await this.page.waitForTimeout(500);

        await expect(this.POSITION_CLOSED_SUCCESSFULLY_MODAL_TITLE).toBeVisible();
        await expect(this.OK_BUTTON).toBeVisible();
        await this.OK_BUTTON.click();
        await this.page.waitForTimeout(1000);
    
    }

    async closeAllPositions(): Promise<void> {

        let notificationButtonVisible: boolean = await this.page.isVisible(this.tablePositionCloseButtonString);
        
        while(notificationButtonVisible){
    
            await this.closeAllPosition();

            notificationButtonVisible = await this.page.isVisible(this.tablePositionCloseButtonString);
}
        await this.page.waitForTimeout(5000);
    }


    async openEURUSDPosition(positionSide: string, positionSizeType: string, positionValue: string): Promise<void> {
        const utils = new Utils(this.page);
        this.positionSideType = positionSide;

        switch (positionSide) {

            case 'BUY':
                await expect(this.BUY_SIDE_BUTTON).toBeVisible();
                await this.BUY_SIDE_BUTTON.click();
                await expect(this.SELL_INACTIVE_BUTTON).toBeVisible();
                break;

            case 'SELL':
                await expect(this.SELL_SIDE_BUTTON).toBeVisible();
                await this.SELL_SIDE_BUTTON.click();
                await expect(this.BUY_INACTIVE_BUTTON).toBeVisible();
                break;
                
            default:
                console.log('Unknown side: ' + positionSide);
                break;
        }

        await this.page.waitForTimeout(1000);
        this.balanceBeforeOpenPosition = await this.currentYouHaveBalance();

        switch (positionSizeType) {

            case 'Value':
                await expect(this.POSITION_SIZE_DROPDOWN_ARROW).toBeVisible();
                await this.POSITION_SIZE_DROPDOWN_ARROW.click();
                await expect(this.POSITION_SIZE_DROPDOWN_VALUE).toBeVisible();
                await this.POSITION_SIZE_DROPDOWN_VALUE.click();
                await this.page.waitForTimeout(1000);
                await this.POSITION_VALUE_INPUT.fill(positionValue);
                await this.page.waitForTimeout(500);
                await this.MARGIN_ACCOUNT_METRICS.click();
                this.positionValue = await this.currentPositionValue();
                console.log('User used value for position size');
                break;

            case 'Lot':
                await expect(this.POSITION_SIZE_DROPDOWN_ARROW).toBeVisible();
                await this.POSITION_SIZE_DROPDOWN_ARROW.click();
                await expect(this.POSITION_SIZE_DROPDOWN_LOT).toBeVisible();
                await this.POSITION_SIZE_DROPDOWN_LOT.click();
                await this.page.waitForTimeout(1000);
                await this.POSITION_LOT_INPUT.fill(positionValue);
                await expect(this.POSITION_SIZE_DROPDOWN_ARROW).toBeVisible();
                await this.POSITION_SIZE_DROPDOWN_ARROW.click();
                await expect(this.POSITION_SIZE_DROPDOWN_VALUE).toBeVisible();
                await this.POSITION_SIZE_DROPDOWN_VALUE.click();
                await this.page.waitForTimeout(1000);
                await this.MARGIN_ACCOUNT_METRICS.click();
                this.positionValue = await this.currentPositionValue();
                console.log('User used lots for position size');
                break;
                
            default:
                console.log('Unknown positione type: ' + positionSizeType);
                break;
        }

        await this.page.waitForTimeout(1000);
        this.initialMargin = await this.currentInitialMargin();
        await this.assertInitialMarginCalculation(500)

        switch (positionSide) {

            case 'BUY':
                await expect(this.BUY_LONG_BUTTON).toBeVisible();
                await this.BUY_LONG_BUTTON.click();
                this.buyPriceWhenTradeWasOpened = await this.currentBuyPrice();
                await expect(this.BUY_POSITION_LABEL).toBeVisible();
                console.log('User open position with BUY side and minimum value');
                break;

            case 'SELL':
                await expect(this.SELL_SHORT_BUTTON).toBeVisible();
                await this.SELL_SHORT_BUTTON.click();
                this.sellPriceWhenTradeWasOpened = await this.currentSellPrice();
                await expect(this.SELL_POSITION_LABEL).toBeVisible();
                console.log('User open position with SELL side and minimum value');
                break;
                
            default:
                console.log('Unknown side: ' + positionSide);
                break;
        }

        await this.page.waitForTimeout(2000);
        const balanceAfterOpenPosition = await this.currentYouHaveBalance();
        const currentMargin = await this.marginAccountMetrics();
        const currentPNL = await this.currentPNL();
        this.positionUnits = await this.openPositionUnits()
        let balanceOpenPositionCalculation: number;

        if (currentPNL < 0) {
            balanceOpenPositionCalculation = balanceAfterOpenPosition + currentMargin + Math.abs(currentPNL);
        } else {
            balanceOpenPositionCalculation = balanceAfterOpenPosition + currentMargin - currentPNL;
        }

        try {
            console.log('Balance before opened position: ' + this.balanceBeforeOpenPosition);
            console.log('Balance after opened position: ' + balanceOpenPositionCalculation);
            const isWithinRangeResult = await utils.isWithinRange(this.balanceBeforeOpenPosition, balanceOpenPositionCalculation, 1);
            await expect(isWithinRangeResult).toBeTruthy();
        } catch (error) {
            throw new Error('Balance before open position calculation is incorrect');
        }

        await expect(this.POSITION_CLOSE_BUTTON).toBeVisible();
        await expect(this.POSITION_EDIT_BUTTON).toBeVisible();
     
    }

    async assertEntryPrice(positionSide: string, range: number): Promise<void> {
        const utils = new Utils(this.page);

        switch (positionSide) {

            case 'BUY':
                const entryBuyPrice = await this.entryPriceTable();
                try {
                    console.log('Buy price when trade was opened: ' + this.buyPriceWhenTradeWasOpened);
                    console.log('Entry buy price in the position table: ' + entryBuyPrice);
                    const isWithinRangeResult = await utils.isWithinRange(this.buyPriceWhenTradeWasOpened, entryBuyPrice, range);
                    await expect(isWithinRangeResult).toBeTruthy();
                } catch (error) {
                    throw new Error('buy price at the moment of open position does not match the entry price of position in the table');
                }
                break;

            case 'SELL':
                const entrySellPrice = await this.entryPriceTable();
                try {
                    console.log('Sell price when trade was opened: ' + this.sellPriceWhenTradeWasOpened);
                    console.log('Entry Sell price in the position table: ' + entrySellPrice);
                    const isWithinRangeResult = await utils.isWithinRange(this.sellPriceWhenTradeWasOpened, entrySellPrice, range);
                    await expect(isWithinRangeResult).toBeTruthy();
                } catch (error) {
                    throw new Error('sell price at the moment of open position does not match the entry price of position in the table');
                }
                break;
                
            default:
                console.log('Unknown side: ' + positionSide);
                break;
        }
     }

     async assertMargin(): Promise<void> {

        this.marginWhenOpenPosition = await this.currentTableMargin();
        this.currentMargin = await this.marginAccountMetrics();

        try {
            console.log('Position table margin: ' + this.marginWhenOpenPosition);
            console.log('Account Metrics Margin: ' + this.currentMargin);
            await expect.soft(this.marginWhenOpenPosition).toBe(this.currentMargin);
        } catch (error) {
            throw new Error('Margin is not the equal value in position table and account metrics');
        }
     }

     async assertInitialMargin(range: number): Promise<void> {
        const utils = new Utils(this.page);
        this.marginWhenOpenPosition = await this.currentTableMargin();
        this.currentMargin = await this.marginAccountMetrics();

        try {
            console.log('Position table margin: ' + this.marginWhenOpenPosition);
            console.log('Account Metrics Margin: ' + this.currentMargin);
            console.log('Initial Margin: ' + this.initialMargin);
            const isWithinRangeResult = await utils.isWithinRange(this.marginWhenOpenPosition, this.initialMargin, range);
            await expect.soft(isWithinRangeResult).toBeTruthy();
            const isWithinRangeResult2 = await utils.isWithinRange(this.currentMargin, this.initialMargin, range);
            await expect.soft(isWithinRangeResult2).toBeTruthy();
        } catch (error) {
            throw new Error('Margin is not the equal value in position table and account metrics');
        }
     }

     
 
     async assertCurrentPrice(positionSide: string, range: number): Promise<void> {
        const utils = new Utils(this.page);

        switch (positionSide) {

            case 'BUY':
                const currentTableBuyPrice = await this.currentPriceTable();
                const currentNewSellPrice = await this.currentSellPrice();
                try {
                    console.log('Position table current price: ' + currentTableBuyPrice);
                    console.log('Current sell price: ' + currentNewSellPrice);
                    const isWithinRangeResult = await utils.isWithinRange(currentTableBuyPrice, currentNewSellPrice, range);
                    await expect(isWithinRangeResult).toBeTruthy();
                } catch (error) {
                    throw new Error('sell price at the current moment does not match the current price of buy side position in the table');
                }
                break;

            case 'SELL':
                const currentTableSellPrice = await this.currentPriceTable();
                const currentNewBuyPrice = await this.currentBuyPrice();
                try {
                    console.log('Position table current price: ' + currentTableSellPrice);
                    console.log('Current buy price: ' + currentNewBuyPrice);
                    const isWithinRangeResult = await utils.isWithinRange(currentTableSellPrice, currentNewBuyPrice, range);
                    await expect(isWithinRangeResult).toBeTruthy();
                } catch (error) {
                    throw new Error('buy price at the current moment does not match the current price of sell side position in the table');
                }
                break;
                
            default:
                console.log('Unknown side: ' + positionSide);
                break;
        }
     }
 

    async currentYouHaveBalance(): Promise<number> {

       const balanceText = await this.BALANCE.textContent();

       if (balanceText !== null) {
        console.log('Current You Have balance: ' + balanceText);
        const balanceFormated = balanceText?.replace(",", "")
        const balanceNumber = parseFloat(balanceFormated);
        return balanceNumber;
    } else {
        throw new Error('Balance text is null');
     }
    }

    async marginAccountMetrics(): Promise<number> {

        const marginText = await this.MARGIN_ACCOUNT_METRICS.textContent();
 
        if (marginText !== null) {
        console.log('Current account metrics margin: ' + marginText);
         const marginFormated = marginText?.replace(",", "")
         const marginNumber = parseFloat(marginFormated);
         return marginNumber;
     } else {
         throw new Error('Margin text is null');
      }
     }

     async currentTableMargin(): Promise<number> {

        const marginText = await this.MARGIN_POSITION_TABLE.textContent();
 
        if (marginText !== null) {
        console.log('Current table metrics margin: ' + marginText);
         const marginFormated = marginText?.replace(",", "")
         const marginNumber = parseFloat(marginFormated);
         return marginNumber;
     } else {
         throw new Error('Margin text is null');
      }
     }


     async currentPNL(): Promise<number> {

        const pnlText = await this.PNL_FIRST_TRADE.textContent();
 
        if (pnlText !== null) {
         console.log('Current table pnl: ' + pnlText);
         const pnlFormated = pnlText?.replace(",", "")   
         const pnlNumber = parseFloat(pnlFormated);
         return pnlNumber;
     } else {
         throw new Error('PNL text is null');
      }
     }
     
     async openPositionUnits(): Promise<number> {

        const positionUnits = await this.TABLE_POSITION_UNITS.textContent();
 
        if (positionUnits !== null) {
         console.log('Current table pnl: ' + positionUnits);
         const positionUnitsFormated = positionUnits?.replace(",", "")
         const positionUnitsFormated2 = positionUnitsFormated?.replace("EUR", "")
         const positionUnitsFormated3 = positionUnitsFormated2?.replace("USD", "")
         const positionUnitsNumber = parseFloat(positionUnitsFormated3);
         return positionUnitsNumber;
     } else {
         throw new Error('Units text is null');
      }
     }

     async closedPositionPNL(): Promise<number> {

        const pnlText = await this.CLOSED_PNL.textContent();
 
        if (pnlText !== null) {
         console.log('Closed modal pnl: ' + pnlText);
         const pnlFormated = pnlText?.replace(",", "")   
         const pnlNumber = parseFloat(pnlFormated);
         return pnlNumber;
     } else {
         throw new Error('PNL text is null');
      }
     }

     async currentBuyPrice(): Promise<number> {

        const buyPrice = await this.BUY_PRICE.textContent();
        const buyPriceLastNumber = await this.BUY_PRICE_LAST_NUMBER.textContent();

        const fullBuyPrice = `${buyPrice}${buyPriceLastNumber}`;

        if (fullBuyPrice !== null) {
         console.log('Current buy price: ' + fullBuyPrice);
         const fullBuyPriceFormated = fullBuyPrice?.replace(",", "")   
         const buyPriceNumber = parseFloat(fullBuyPriceFormated);
         return buyPriceNumber;
     } else {
         throw new Error('Buy price text is null');
      }
     }

     async currentSellPrice(): Promise<number> {

        const sellPrice = await this.SELL_PRICE.textContent();
        const sellPriceLastNumber = await this.SELL_PRICE_LAST_NUMBER.textContent();

        const fullSellPrice = `${sellPrice}${sellPriceLastNumber}`;

        if (fullSellPrice !== null) {
         console.log('Current sell price: ' + fullSellPrice);
         const fullSellPriceFormated = fullSellPrice?.replace(",", "")   
         const sellPriceNumber = parseFloat(fullSellPriceFormated);
         return sellPriceNumber;
     } else {
         throw new Error('Buy price text is null');
      }
     }

     async entryPriceTable(): Promise<number> {

        const entryPrice = await this.ENTRY_PRICE_TABLE.textContent();

        if (entryPrice !== null) {
         console.log('Entry price: ' + entryPrice);
         const entryPriceFormated = entryPrice?.replace(",", "")   
         const entryPriceTableNumber = parseFloat(entryPriceFormated);
         return entryPriceTableNumber;
     } else {
         throw new Error('Buy table price text is null');
      }
     }

     async currentPriceTable(): Promise<number> {

        const currentPrice = await this.CURRENT_PRICE_TABLE.textContent();

        if (currentPrice !== null) {
         console.log('Current price: ' + currentPrice);
         const currentPriceFormated = currentPrice?.replace(",", "")   
         const currentPriceTablePrice = parseFloat(currentPriceFormated);
         return currentPriceTablePrice;
     } else {
         throw new Error('Buy table price text is null');
      }
     }

     async currentInitialMargin(): Promise<number> {

        const currentInitialMargin = await this.INITIAL_MARGIN.textContent();

        if (currentInitialMargin !== null) {
         console.log('Current initial margin: ' + currentInitialMargin);
         const currentInitialMarginFormated = currentInitialMargin?.replace(",", "")   
         const currentInitialMarginValue = parseFloat(currentInitialMarginFormated);
         return currentInitialMarginValue;
     } else {
         throw new Error('Initial margin text is null');
      }
     }

     async currentPositionValue(): Promise<number> {

        const currentPositionValue = await this.POSITION_VALUE_INPUT.textContent();

        if (currentPositionValue !== null) {
         console.log('Current psoition value: ' + currentPositionValue);
         const currentPositionValueFormated = currentPositionValue?.replace(",", "")   
         const currentPositionValueValue = parseFloat(currentPositionValueFormated);
         return currentPositionValueValue;
     } else {
         throw new Error('Position Value text is null');
      }
     }

     async assertThereIsNoCommisionAndSwap(): Promise<void> {

        await expect(await this.SWAP_POSITION_TABLE.textContent()).toMatch('0 EUR' || '0 USD');
        await expect(await this.COMMISION_POSITION_TABLE.textContent()).toMatch('0 EUR' || '0 USD');
       
     }

     async assertThereIsNoTPSL(): Promise<void> {

        await expect(this.TP_POSITION_TABLE).toHaveText('0');
        await expect(this.SL_POSITION_TABLE).toHaveText('0');
       
     }

     async assertBalanceAfterClosedPosition(range: number): Promise<void> {
        const utils = new Utils(this.page);
        let balanceAfterClosePositionCalculation: number;

        if (this.pnlValueWhenClosing < 0) {
            balanceAfterClosePositionCalculation =  this.balanceBeforeOpenPosition - Math.abs(this.pnlValueWhenClosing);
        } else {
            balanceAfterClosePositionCalculation =  this.balanceBeforeOpenPosition + this.pnlValueWhenClosing;
        }

        const isWithinRangeResult = await utils.isWithinRange(this.balanceAfterClosedPosition, balanceAfterClosePositionCalculation, range);
        await expect(isWithinRangeResult).toBeTruthy();
       
     }

     async balanceAccountMetrics(): Promise<number> {

        const currentPrice = await this.BALANCE_ACCOUNT_METRICS.textContent();

        if (currentPrice !== null) {
         console.log('Balance account metrics: ' + currentPrice);
         const currentPriceFormated = currentPrice?.replace(",", "")   
         const currentPriceTablePrice = parseFloat(currentPriceFormated);
         return currentPriceTablePrice;
     } else {
         throw new Error('Balance account metrics text is null');
      }
     }

     async equityAccountMetrics(): Promise<number> {

        const currentPrice = await this.EQUITY_ACCOUNT_METRICS.textContent();

        if (currentPrice !== null) {
         console.log('Equity account metrics: ' + currentPrice);
         const currentPriceFormated = currentPrice?.replace(",", "")   
         const currentPriceTablePrice = parseFloat(currentPriceFormated);
         return currentPriceTablePrice;
     } else {
         throw new Error('Equity account metrics text is null');
      }
     }

     async freeMarginAccountMetrics(): Promise<number> {

        const currentPrice = await this.FREE_MARGIN_ACCOUNT_METRICS.textContent();

        if (currentPrice !== null) {
         console.log('Free margin account metrics: ' + currentPrice);
         const currentPriceFormated = currentPrice?.replace(",", "")   
         const currentPriceTablePrice = parseFloat(currentPriceFormated);
         return currentPriceTablePrice;
     } else {
         throw new Error('Buy table price text is null');
      }
     }

     async orderHistoryTablePNL(): Promise<number> {

        const orderHistoryPNL = await this.ORDER_HISTORY_PNL.textContent();

        if (orderHistoryPNL !== null) {
         console.log('Order history pnl: ' + orderHistoryPNL);
         const orderHistoryPNLFormated = orderHistoryPNL?.replace(",", "")   
         const orderHistoryPNLNumber = parseFloat(orderHistoryPNLFormated);
         return orderHistoryPNLNumber;
     } else {
         throw new Error('Order history pnl text is null');
      }
     }

     async orderHistoryTableUnits(): Promise<number> {

        const orderHistoryUnits = await this.ORDER_HISTORY_UNITS.textContent();

        if (orderHistoryUnits !== null) {
         console.log('Order history units: ' + orderHistoryUnits);
         const positionUnitsFormated = orderHistoryUnits?.replace(",", "")
         const positionUnitsFormated2 = positionUnitsFormated?.replace("EUR", "")
         const positionUnitsFormated3 = positionUnitsFormated2?.replace("USD", "")
         const positionUnitsNumber = parseFloat(positionUnitsFormated3);
         return positionUnitsNumber;
     } else {
         throw new Error('Order history units text is null');
      }
     }

     async orderHistoryTableMargin(): Promise<number> {

        const orderHistoryMargin = await this.ORDER_HISTORY_MARGIN.textContent();

        if (orderHistoryMargin !== null) {
         console.log('Order history margin: ' + orderHistoryMargin);
         const orderHistoryMarginFormated = orderHistoryMargin?.replace(",", "")  
         const orderHistoryMarginFormated2 = orderHistoryMarginFormated?.replace("EUR", "")
         const orderHistoryMarginFormated3 = orderHistoryMarginFormated2?.replace("USD", "") 
         const orderHistoryMarginPrice = parseFloat(orderHistoryMarginFormated3);
         return orderHistoryMarginPrice;
     } else {
         throw new Error('Order history margin text is null');
      }
     }

     async orderHistoryTableClosedPrice(): Promise<number> {

        const orderHistoryClosedPrice = await this.ORDER_HISTORY_CLOSED_PRICE.textContent();

        if (orderHistoryClosedPrice !== null) {
         console.log('Order history closed price: ' + orderHistoryClosedPrice);
         const orderHistoryClosedPriceFormated = orderHistoryClosedPrice?.replace(",", "")   
         const orderHistoryClosedPriceNumber = parseFloat(orderHistoryClosedPriceFormated);
         return orderHistoryClosedPriceNumber;
     } else {
         throw new Error('Order history closed price text is null');
      }
     }

     async assertAccountMetricsNoPositions(): Promise<void> {

        let balance: number;
        let equity: number;
        let freeMargin: number;

        balance = await this.balanceAccountMetrics();
        equity =  await this.equityAccountMetrics();
        freeMargin =  await this.freeMarginAccountMetrics();
       
        await expect(balance).toBe(equity);
        await expect(balance).toBe(freeMargin);
     }

     async assertInitialMarginCalculation(leverage: number): Promise<void> {

        const utils = new Utils(this.page);
        let leverageValueCalculation: number;
                
        leverageValueCalculation = await utils.leverageMarginCalculation(this.positionValue, leverage)
                
        await expect(leverageValueCalculation).toBe(this.initialMargin);
            
     }

     async assertOrderHistory(positionSide: string, range: number): Promise<void> {

        const utils = new Utils(this.page);

        let orderHistoryPNL: number;
        let orderHistoryClosedPrice: number;
        let orderHistoryMargin: number;
        let orderHistoryUnits: number;

        orderHistoryPNL = await this.orderHistoryTablePNL();
        orderHistoryClosedPrice = await this.orderHistoryTableClosedPrice();
        orderHistoryMargin = await this.orderHistoryTableMargin();
        orderHistoryUnits = await this.orderHistoryTableUnits();

        switch (positionSide) {

            case 'BUY':
                await expect(this.ORDER_HISTORY_SIDE).toContainText('BUY');
                break;

            case 'SELL':
                await expect(this.ORDER_HISTORY_SIDE).toContainText('SELL');
                break;
                
            default:
                console.log('Unknown side: ' + positionSide);
                break;
        }

        const isWithinRangeResultClosedPrice = await utils.isWithinRange(orderHistoryClosedPrice, this.closedPriceWhenClosing, range);
        await expect(isWithinRangeResultClosedPrice).toBeTruthy();
        await expect(orderHistoryPNL).toBe(this.pnlValueWhenClosing);
        await expect.soft(orderHistoryMargin).toBe(this.marginWhenOpenPosition);
        await expect.soft(orderHistoryMargin).toBe(this.currentMargin);
        await expect(orderHistoryUnits).toBe(this.positionUnits);

     }

     async navigateToOrderHistoryTab(): Promise<void> {

        await expect(this.ORDER_HISTORY_TAB).toBeVisible();
        await this.ORDER_HISTORY_TAB.click();
        await expect(this.CLOSED_PRICE_COLUMN_LABEL).toBeVisible();

     }
}