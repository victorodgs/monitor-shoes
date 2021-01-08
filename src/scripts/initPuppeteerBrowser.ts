import puppeteer from "puppeteer"

export const initPuppeteerBrowser = async (): Promise<puppeteer.Page> => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    return {...Promise.resolve(page), close: browser.close}
}