import Discord from 'discord.js'
import puppeteer from 'puppeteer'
import { Partners, MazeConfig, PartnerConfig, ArtWalkConfig } from '../PartnersConfig'


export const isProductAvailable = async (partner: Partners, product: string, channel?: any, mode?: 'all' | 'partner') => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const config: PartnerConfig = MazeConfig

    await page.goto(product)

    const result = await page.evaluate(async (config: PartnerConfig) => {
      const shoes: any = []
      document.querySelectorAll(`${config.productLinkContainer.type}${config.productLinkContainer.selector} ${config.buttonLink.type}${config.buttonLink.selector}`)
          .forEach((item) => shoes.push(`${config.siteURL}${item.getAttribute('href')}`))
          console.log(shoes)
      return shoes
      
    }, config as any)

    await browser.close()

    if (result.length > 0) {
      return result
    } else {
      return null
    }
}
 
