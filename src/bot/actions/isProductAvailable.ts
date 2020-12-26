import puppeteer from "puppeteer"
import Discord from 'discord.js'
import { Partners, MazeConfig, PartnerConfig, ArtWalkConfig } from '../PartnersConfig'

export const isProductAvailable = async (partner: Partners, product: string, message: Discord.Message) => {

  const config: PartnerConfig = partner === "ArtWalk" ? ArtWalkConfig : MazeConfig

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`${config.siteSearchURL}${product?.toLowerCase().replace(' ', '%20')}`)
    const result = await page.evaluate((config: PartnerConfig) => {
      const shoes: any = []
      document.querySelectorAll(`${config.productLinkContainer.type}${config.productLinkContainer.selector} ${config.buttonLink.type}${config.buttonLink.selector}`)
          .forEach((item) => shoes.push(`${item.getAttribute('href')}`))
      return shoes
    }, config as any)
    browser.close()

    if (result.length === 0) {
      message.reply(`Meu chapa, nao está tendo nenhum ${product} na ${partner}, te aviso quando chegar :)`)
    } else {
      message.reply(`Aqui estao os ${product} na ${partner}, meu chapa!`)
      Array(result).forEach(item => message.reply(`${item.toString().split(',').join('\n')}`))
    }

    return 
}
 
