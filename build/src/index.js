"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PartnersConfig_1 = require("./bot/PartnersConfig");
const isProductAvailable_1 = require("./bot/actions/isProductAvailable");
const initSearchPartnersBot_1 = require("./scripts/initSearchPartnersBot");
const discord_js_1 = require("discord.js");
const discordConfig_json_1 = __importDefault(require("../discordConfig.json"));
const Client = new discord_js_1.Client();
Client.login(discordConfig_json_1.default.BOT_TOKEN);
Client.on("ready", () => {
    const channel = Client.channels.cache.find(channel => channel.id == '792163237680250922');
    setInterval(() => {
        initSearchPartnersBot_1.initSearchPartnersBot(channel);
    }, 20000);
});
Client.on("message", function (message) {
    const prefix = '!';
    if (message.author.bot)
        return;
    if (!message.content.startsWith(prefix))
        return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    if (message.content === "!NikeDunkMaze") {
        isProductAvailable_1.isProductAvailable(PartnersConfig_1.Partners.Maze, 'Nike Dunk', message);
    }
    if (message.content === "!NikeJordanArtWalk") {
        isProductAvailable_1.isProductAvailable(PartnersConfig_1.Partners.ArtWalk, 'Tenis Nike Jordan', message);
    }
    if (message.content === "!NikeJordan1Maze") {
        isProductAvailable_1.isProductAvailable(PartnersConfig_1.Partners.Maze, 'Nike Jordan 1', message);
    }
    if (message.content === "!NikeJordan2Maze") {
        isProductAvailable_1.isProductAvailable(PartnersConfig_1.Partners.Maze, 'Nike Jordan 2', message);
    }
    if (message.content === "!NikeJordan3Maze") {
        isProductAvailable_1.isProductAvailable(PartnersConfig_1.Partners.Maze, 'Nike Jordan 3', message);
    }
    if (message.content === "!NikeJordan4Maze") {
        isProductAvailable_1.isProductAvailable(PartnersConfig_1.Partners.Maze, 'Nike Jordan 4', message);
    }
    if (message.content === "!NikeJordan5Maze") {
        isProductAvailable_1.isProductAvailable(PartnersConfig_1.Partners.Maze, 'Nike Jordan 5', message);
    }
    if (message.content === "!NikeJordan6Maze") {
        isProductAvailable_1.isProductAvailable(PartnersConfig_1.Partners.Maze, 'Nike Jordan 6', message);
    }
    if (message.content === "!NikeJordan11Maze") {
        isProductAvailable_1.isProductAvailable(PartnersConfig_1.Partners.Maze, 'Nike Jordan 11', message);
    }
});
