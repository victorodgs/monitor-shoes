import puppeteer from "puppeteer"

export const initPuppeteerBrowser = async () => {
    const browser = await puppeteer.launch()
    return Promise.resolve(browser)
}