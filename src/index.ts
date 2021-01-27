import { Partners } from './bot/PartnersConfig'
import { isProductAvailable } from './bot/actions/isProductAvailable'
import { initSearchPartnersBot } from './scripts/initSearchPartnersBot'
import { Client as DCClient}  from 'discord.js'
import config from '../discordConfig.json'
import useSharedSharedActions  from './bot/state/shared/actions'

const Client = new DCClient();
Client.login(config.BOT_TOKEN);

Client.on("ready", () => {
    const channel = Client.channels.cache.find(channel => channel.id == '792163237680250922')
    setInterval(() => {
        initSearchPartnersBot(channel)
    }, 20000)   
});  


Client.on("message", function(message) {
    const prefix = '!'
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');

    if(message.content === "!NikeDunkMaze") {
        isProductAvailable(Partners.Maze, 'Nike Dunk', message)
    }

    if(message.content === "!NikeJordanArtWalk") {
        isProductAvailable(Partners.ArtWalk, 'Tenis Nike Jordan', message)
    }

    if(message.content === "!NikeJordan1Maze") {
        isProductAvailable(Partners.Maze, 'Nike Jordan 1', message)
    }

    if(message.content === "!NikeJordan2Maze") {
        isProductAvailable(Partners.Maze, 'Nike Jordan 2', message)
    }

    if(message.content === "!NikeJordan3Maze") {
        isProductAvailable(Partners.Maze, 'Nike Jordan 3', message)
    }

    if(message.content === "!NikeJordan4Maze") {
        isProductAvailable(Partners.Maze, 'Nike Jordan 4', message)
    }

    if(message.content === "!NikeJordan5Maze") {
        isProductAvailable(Partners.Maze, 'Nike Jordan 5', message)
    }

    if(message.content === "!NikeJordan6Maze") {
        isProductAvailable(Partners.Maze, 'Nike Jordan 6', message)
    }

    if(message.content === "!NikeJordan11Maze") {
        isProductAvailable(Partners.Maze, 'Nike Jordan 11', message)
    }

  });




