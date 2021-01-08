 
 import Discord  from 'discord.js'
 import config from '../../discordConfig.json'
 import { isProductAvailable } from '../bot/actions/isProductAvailable'
 import { Partners, ItemsToSearch } from '../bot/PartnersConfig'
 
 const Client = new Discord.Client();
 Client.login(config.BOT_TOKEN);

 export const initSearchPartnersBot = () => {
    const partnersToSearch = Object.keys(Partners)
    const searchResults: any = [];

    // Create Partner Section to recieve a list of results categorized :)
    (() => {
        partnersToSearch.forEach(partner => searchResults.push({partnerName: partner, results: []}))
    })()

    partnersToSearch.forEach((partner, index) => {
        ItemsToSearch.forEach(item => {
            searchResults[index]['results'].push(isProductAvailable(partner as Partners, item))
        })
    })

    console.log(searchResults)
 }
 
 
 
