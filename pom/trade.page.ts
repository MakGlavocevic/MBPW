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
    }

    async navigateToTradePage(): Promise<void> {

        await expect(this.TRADE_DROPDOWN_BUTTON).toBeVisible();
        await this.TRADE_DROPDOWN_BUTTON.click();

        await expect(this.TRADE_NAVIGATION_BUTTON).toBeVisible();
        await this.TRADE_NAVIGATION_BUTTON.click();

        await this.page.waitForLoadState('load');
        expect(this.page.url()).toContain(this.TRADE_DEFAULT_LINK);

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
                await expect(this.BUY_POSITION_LABEL).toBeVisible();
                break;

            case 'SELL':
                await expect(this.SELL_SHORT_BUTTON).toBeVisible();
                await this.SELL_SHORT_BUTTON.click();
                this.sellPriceWhenTradeWasOpened = await this.currentBuyPrice();
                await expect(this.SELL_POSITION_LABEL).toBeVisible();
                break;
                
            default:
                console.log('Unknown side: ' + positionSide);
                break;
        }

        const balanceAfterOpenPosition = await this.currentBalance();
        const currentMargin = await this.currentMargin();
        const currentPNL = await this.currentPNL();
        let balanceOpenPositionCalculation: number;

        if (currentPNL < 0) {
            balanceOpenPositionCalculation = balanceAfterOpenPosition + currentMargin - Math.abs(currentPNL);
        } else {
            balanceOpenPositionCalculation = balanceAfterOpenPosition + currentMargin + currentPNL;
        }

        try {
            await expect(this.balanceBeforeOpenPosition).toBe(balanceOpenPositionCalculation);
        } catch (error) {
            throw new Error('Balance before open position calculation is incorrect');
        }
    }

    async assertEntryPrice(positionSide: string): Promise<void> {
        switch (positionSide) {

            case 'BUY':
                const entryBuyPrice = await this.entryPriceTable();
                try {
                    await expect(this.buyPriceWhenTradeWasOpened).toBe(entryBuyPrice);
                } catch (error) {
                    throw new Error('buy price at the moment of open position does not match the entry price of position in the table');
                }
                break;

            case 'SELL':
                const entrySellPrice = await this.entryPriceTable();
                try {
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
                    await expect(currentTableBuyPrice).toBe(currentNewSellPrice);
                } catch (error) {
                    throw new Error('sell price at the current moment does not match the current price of buy side position in the table');
                }
                break;

            case 'SELL':
                const currentTableSellPrice = await this.currentPriceTable();
                const currentNewBuyPrice = await this.currentBuyPrice();
                try {
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
        const balanceNumber = parseFloat(balanceText);
        return balanceNumber;
    } else {
        throw new Error('Balance text is null');
     }
    }

    async currentMargin(): Promise<number> {

        const marginText = await this.MARGIN_ACCOUNT_METRICS.textContent();
 
        if (marginText !== null) {
         const marginNumber = parseFloat(marginText);
         return marginNumber;
     } else {
         throw new Error('Margin text is null');
      }
     }

     async currentTableMargin(): Promise<number> {

        const marginText = await this.MARGIN_POSITION_TABLE.textContent();
 
        if (marginText !== null) {
         const marginNumber = parseFloat(marginText);
         return marginNumber;
     } else {
         throw new Error('Margin text is null');
      }
     }


     async currentPNL(): Promise<number> {

        const pnlText = await this.PNL_FIRST_TRADE.textContent();
 
        if (pnlText !== null) {
         const pnlNumber = parseFloat(pnlText);
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
         const buyPriceNumber = parseFloat(fullBuyPrice);
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
         const sellPriceNumber = parseFloat(fullSellPrice);
         return sellPriceNumber;
     } else {
         throw new Error('Buy price text is null');
      }
     }

     async entryPriceTable(): Promise<number> {

        const entryPrice = await this.ENTRY_PRICE_TABLE.textContent();

        if (entryPrice !== null) {
         const entryPriceTableNumber = parseFloat(entryPrice);
         return entryPriceTableNumber;
     } else {
         throw new Error('Buy table price text is null');
      }
     }

     async currentPriceTable(): Promise<number> {

        const currentPrice = await this.CURRENT_PRICE_TABLE.textContent();

        if (currentPrice !== null) {
         const currentPriceTablePrice = parseFloat(currentPrice);
         return currentPriceTablePrice;
     } else {
         throw new Error('Buy table price text is null');
      }
     }


}