import { Partners } from './bot/PartnersConfig'
import { isProductAvailable } from './bot/actions/isProductAvailable'
import Discord  from 'discord.js'
import config from '../discordConfig.json'

const Client = new Discord.Client();
Client.login(config.BOT_TOKEN);

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
        isProductAvailable(Partners.ArtWalk, 'Nike Jordan', message)
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




