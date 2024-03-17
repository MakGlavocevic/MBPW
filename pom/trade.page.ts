import { Page, BrowserContext, Locator, expect } from '@playwright/test';

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
    buyPriceWhenTradeWasOpened: number;
    sellPriceWhenTradeWasOpened: number;
    tablePositionCloseButtonString: string;
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
        this.POSITION_VALUE_INPUT = page.locator('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/input[1]');
        this.BUY_LONG_BUTTON = page.locator('//button[contains(text(),"Buy / Long")]');
        this.SELL_SHORT_BUTTON = page.locator('//button[contains(text(),"Sell / Short")]');
        this.SELL_POSITION_LABEL = page.locator('//span[contains(text(),"SELL")]');
        this.BUY_POSITION_LABEL = page.locator('//span[contains(text(),"BUY")]');
        this.MARGIN_ACCOUNT_METRICS = page.locator('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[2]/div[1]/div[1]/p[6]');
        this.PNL_FIRST_TRADE = page.locator('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[9]/div[1]/div[1]/div[1]/span[1]');
        this.BUY_PRICE = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/span[2]/span[1]');
        this.SELL_PRICE = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/span[2]/span[1]');
        this.BUY_PRICE_LAST_NUMBER = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/span[2]/span[2]');
        this.SELL_PRICE_LAST_NUMBER = page.locator('//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/span[2]/span[2]');
        this.ENTRY_PRICE_TABLE = page.locator('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[5]/span[1]/span[1]');
        this.CURRENT_PRICE_TABLE = page.locator('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[6]/div[1]/div[1]/span[1]');
        this.MARGIN_POSITION_TABLE = page.locator('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[10]/span[1]');
        this.TP_POSITION_TABLE = page.locator('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[7]/span[1]');
        this.SL_POSITION_TABLE = page.locator('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[8]/span[1]');
        this.SWAP_POSITION_TABLE = page.locator('//tbody/tr[1]/td[11]');
        this.COMMISION_POSITION_TABLE = page.locator('//tbody/tr[1]/td[12]');
        this.POSITION_CLOSE_BUTTON = page.locator('//tbody/tr[1]/td[13]/div[1]/button[2]');
        this.tablePositionCloseButtonString = '//tbody/tr[1]/td[13]/div[1]/button[2]';
        this.POSITION_EDIT_BUTTON = page.locator('//tbody/tr[1]/td[13]/div[1]/button[1]');
        this.CLOSE_MODAL_SUBTITLE = page.locator('//p[contains(text(),"Are you sure you want to close this position?")]');
        this.CLOSE_BUTTON = page.locator('//button[contains(text(),"Close")]');
        this.POSITION_CLOSED_SUCCESSFULLY_MODAL_TITLE = page.locator('//p[contains(text(),"Position Closed Succesfully")]');
        this.OK_BUTTON = page.locator('//button[contains(text(),"Ok")]');
       

       
    }

    async navigateToTradePage(): Promise<void> {

        await expect(this.TRADE_DROPDOWN_BUTTON).toBeVisible();
        await this.TRADE_DROPDOWN_BUTTON.click();
        await this.page.waitForTimeout(1000);
        await expect(this.TRADE_NAVIGATION_BUTTON).toBeVisible();
        await this.TRADE_NAVIGATION_BUTTON.click();
        await this.page.waitForTimeout(1000);
        await this.page. reload()
        
    }

    async closePosition(): Promise<void> {

        await this.page.waitForTimeout(2000);
        await expect(this.POSITION_CLOSE_BUTTON).toBeVisible();
        await this.POSITION_CLOSE_BUTTON.click();
        await this.page.waitForTimeout(2000);
        await expect(this.CLOSE_MODAL_SUBTITLE).toBeVisible();
        await expect(this.CLOSE_BUTTON).toBeVisible();
        await this.page.waitForTimeout(2000);
        await this.CLOSE_BUTTON.click();
        await expect(this.POSITION_CLOSED_SUCCESSFULLY_MODAL_TITLE).toBeVisible();
        await expect(this.OK_BUTTON).toBeVisible();
        await this.OK_BUTTON.click();
        await this.page.waitForTimeout(1000);
     
    }

    async closeAllPositions(): Promise<void> {

        let notificationButtonVisible: boolean = await this.page.isVisible(this.tablePositionCloseButtonString);
        
        while(notificationButtonVisible){
    
            await this.closePosition();

            notificationButtonVisible = await this.page.isVisible(this.tablePositionCloseButtonString);
}
    }


    async openEURUSDPosition(positionSide: string): Promise<void> {

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

        this.balanceBeforeOpenPosition = await this.currentBalance();

        await expect(this.POSITION_VALUE_INPUT).toBeVisible();
        await this.POSITION_VALUE_INPUT.fill('1');
        await this.POSITION_VALUE_INPUT.blur();

        switch (positionSide) {

            case 'BUY':
                await expect(this.BUY_LONG_BUTTON).toBeVisible();
                await this.BUY_LONG_BUTTON.click();
                this.buyPriceWhenTradeWasOpened = await this.currentBuyPrice();
                console.log('Buy Price when the trade was opened: ' + this.buyPriceWhenTradeWasOpened);
                await expect(this.BUY_POSITION_LABEL).toBeVisible();
                break;

            case 'SELL':
                await expect(this.SELL_SHORT_BUTTON).toBeVisible();
                await this.SELL_SHORT_BUTTON.click();
                this.sellPriceWhenTradeWasOpened = await this.currentSellPrice();
                console.log('Sell Price when the trade was opened: ' + this.sellPriceWhenTradeWasOpened);
                await expect(this.SELL_POSITION_LABEL).toBeVisible();
                break;
                
            default:
                console.log('Unknown side: ' + positionSide);
                break;
        }

        const balanceAfterOpenPosition = await this.currentBalance();
        const currentMargin = await this.currentMargin();
        const currentPNL = await this.currentPNL();
        console.log('You have after opened position: ' + balanceAfterOpenPosition);
        console.log('Margin of the position: ' + currentMargin);
        console.log('PNL of the position: ' + currentPNL);
        let balanceOpenPositionCalculation: number;

        if (currentPNL < 0) {
            balanceOpenPositionCalculation = balanceAfterOpenPosition + currentMargin - Math.abs(currentPNL);
        } else {
            balanceOpenPositionCalculation = balanceAfterOpenPosition + currentMargin + currentPNL;
        }

        try {
            console.log('Balance before opened position: ' + this.balanceBeforeOpenPosition);
            console.log('Balance before opened position: ' + balanceOpenPositionCalculation);
            await expect.soft(this.balanceBeforeOpenPosition).toBe(balanceOpenPositionCalculation);
        } catch (error) {
            throw new Error('Balance before open position calculation is incorrect');
        }

        await expect.soft(this.POSITION_CLOSE_BUTTON).toBeVisible();
        await expect.soft(this.POSITION_EDIT_BUTTON).toBeVisible();

    }

    async assertEntryPrice(positionSide: string): Promise<void> {
        switch (positionSide) {

            case 'BUY':
                const entryBuyPrice = await this.entryPriceTable();
                try {
                    console.log('Buy price when trade was opened: ' + this.buyPriceWhenTradeWasOpened);
                    console.log('Entry buy price in the position table: ' + entryBuyPrice);
                    await expect(this.buyPriceWhenTradeWasOpened).toBe(entryBuyPrice);
                } catch (error) {
                    throw new Error('buy price at the moment of open position does not match the entry price of position in the table');
                }
                break;

            case 'SELL':
                const entrySellPrice = await this.entryPriceTable();
                try {
                    console.log('Sell price when trade was opened: ' + this.sellPriceWhenTradeWasOpened);
                    console.log('Entry Sell price in the position table: ' + entrySellPrice);
                    await expect(this.sellPriceWhenTradeWasOpened).toBe(entrySellPrice);
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

        const currentTableMargin = await this.currentTableMargin();
        const currentMargin = await this.currentMargin();

        try {
            console.log('Position table margin: ' + currentTableMargin);
            console.log('Account Metrics Margin: ' + currentMargin);
            await expect(currentMargin).toBe(currentTableMargin);
        } catch (error) {
            throw new Error('Margin is not the equal value in position table and account metrics');
        }
     }
 
     async assertCurrentPrice(positionSide: string): Promise<void> {

        switch (positionSide) {

            case 'BUY':
                const currentTableBuyPrice = await this.currentPriceTable();
                const currentNewSellPrice = await this.currentSellPrice();
                try {
                    console.log('Position table current price: ' + currentTableBuyPrice);
                    console.log('Current sell price: ' + currentNewSellPrice);
                    await expect(currentTableBuyPrice).toBe(currentNewSellPrice);
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
                    await expect(currentTableSellPrice).toBe(currentNewBuyPrice);
                } catch (error) {
                    throw new Error('buy price at the current moment does not match the current price of sell side position in the table');
                }
                break;
                
            default:
                console.log('Unknown side: ' + positionSide);
                break;
        }
     }
 

    async currentBalance(): Promise<number> {

       const balanceText = await this.BALANCE.textContent();

       if (balanceText !== null) {
        const balanceFormated = balanceText?.replace(",", "")
        const balanceNumber = parseFloat(balanceFormated);
        return balanceNumber;
    } else {
        throw new Error('Balance text is null');
     }
    }

    async currentMargin(): Promise<number> {

        const marginText = await this.MARGIN_ACCOUNT_METRICS.textContent();
 
        if (marginText !== null) {
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
         const currentPriceFormated = currentPrice?.replace(",", "")   
         const currentPriceTablePrice = parseFloat(currentPriceFormated);
         return currentPriceTablePrice;
     } else {
         throw new Error('Buy table price text is null');
      }
     }

     async assertThereIsNoCommisionAndSwap(): Promise<void> {

        await expect.soft(this.SWAP_POSITION_TABLE).toHaveText('0');
        await expect.soft(this.COMMISION_POSITION_TABLE).toHaveText('0');
       
     }

     async assertThereIsNoTPSL(): Promise<void> {

        await expect.soft(this.TP_POSITION_TABLE).toHaveText('0');
        await expect.soft(this.SL_POSITION_TABLE).toHaveText('0');
       
     }

}