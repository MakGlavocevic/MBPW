import { test as pomtest } from "@playwright/test"
import { HomePage } from "./home.page"
import { LoginPage } from "./login.page"
import { TradePage } from "./trade.page"
import { Utils } from "./utils"

type PomFixtures = {
 loginPage: LoginPage
 homePage: HomePage
 tradePage: TradePage
 utils: Utils
}

export const test = pomtest.extend<PomFixtures>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page))
    },
    homePage: async ({page}, use) => {
        await use (new HomePage(page))
    },
    tradePage: async ({page}, use) => {
        await use (new TradePage(page))
    },
    utils: async ({page}, use) => {
        await use (new Utils(page))
    }
})

export { expect } from "@playwright/test"