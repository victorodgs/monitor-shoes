import puppeteer from "puppeteer"
import { Partners, MazeConfig, PartnerConfig } from '../PartnersConfig'
import { sendMessageToDiscord } from './sendMessageToDiscord'

export const isProductAvailable = (partner: Partners, product?: string) => {

  const config: PartnerConfig = MazeConfig;

  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`${config.siteSearchURL}${product?.toLowerCase().replace(' ', '%20')}`)
    const result = await page.evaluate((config: PartnerConfig) => {
      const shoes: any = []
      document.querySelectorAll(`${config.productLinkContainer.type}${config.productLinkContainer.selector} ${config.buttonLink.type}${config.buttonLink.selector}`)
          .forEach((item) => shoes.push(`https://maze.com.br${item.getAttribute('href')}`))
      return shoes
    }, MazeConfig as any)
    browser.close()

    if (result.length === 0) {
      sendMessageToDiscord(`Meu chapa, nao está tendo nenhum ${product} na ${partner}, te aviso quando chegar :)`)
    } else {
      let messageToSend = `
        Aqui estao os ${product} na ${partner}, meu chapa!
        ${result}
      `
      sendMessageToDiscord(messageToSend)
    }
    return 0
  })();

}
 
