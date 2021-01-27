 
 import Discord  from 'discord.js'
 import config from '../../discordConfig.json'
 import { isProductAvailable } from '../bot/actions/isProductAvailable'
 import { Partners, MazeConfig } from '../bot/PartnersConfig'
 import useSharedSharedActions  from '../bot/state/shared/actions'
 import fastDeepEqual  from 'fast-deep-equal'
 
 const Client = new Discord.Client();
 Client.login(config.BOT_TOKEN);

 export const initSearchPartnersBot = async (discordChannel: any) => {
    let searchResults: any = [];
    let normalizedResults: any = []
    const { updateState, state } = useSharedSharedActions()
    const lastSearchResults = state.actualSearch

    let searchPromises: any = []
 
    await MazeConfig.itemsToSearch.NikeJordan.forEach(async (item: any, index: number) => {
       searchPromises.push(
         isProductAvailable(Partners.Maze, item, null, 'all')
       )
    })

    await Promise.all(searchPromises).then(res => {
        searchResults.push(res)
    }).catch(err => { throw new Error("Erro ao Buscar")}) 

    await searchResults.forEach((item: any) => {
        if (item !== null) {
            item.forEach((productList: any) => {
            if(productList !== null) {
                productList.forEach((product: any) => {
                    if(!normalizedResults.includes(product)) {
                        normalizedResults.push(product)
                    }
                }) 
            }
            
            })
        }
    })


    if(fastDeepEqual(normalizedResults, lastSearchResults)) {
        console.log(`passou`)
        return 
    } else {
        updateState({
            actualSearch: normalizedResults,
            actualPartnerInSearch: Partners.Maze
        })

        discordChannel.send('\:rotating_light: OLHA OS JORDAN NA MAZE, MEUS CHAPAS \:rotating_light:')
        normalizedResults.forEach((item: string) => discordChannel.send(item))
    }
    
 }

 
 
 
