import Discord from 'discord.js'
import config from '../../../discordConfig.json'

export const sendMessageToDiscord = (clientMessage: any) => {
    const Client = new Discord.Client();
    Client.login(config.BOT_TOKEN);
    Client.on("message", function(message) {
      const prefix = ''
      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;
    
      const commandBody = message.content.slice(prefix.length);
      const args = commandBody.split(' ');
      const command = args.toString().toLowerCase()
    
      message.reply(`${clientMessage}`);
    });
}

