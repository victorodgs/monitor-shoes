"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSearchPartnersBot = void 0;
const discord_js_1 = __importDefault(require("discord.js"));
//@ts-ignore
const discordConfig_json_1 = __importDefault(require("../../discordConfig.json"));
const isProductAvailable_1 = require("../bot/actions/isProductAvailable");
const PartnersConfig_1 = require("../bot/PartnersConfig");
const actions_1 = __importDefault(require("../bot/state/shared/actions"));
const fast_deep_equal_1 = __importDefault(require("fast-deep-equal"));
const Client = new discord_js_1.default.Client();
Client.login(discordConfig_json_1.default.BOT_TOKEN);
const initSearchPartnersBot = (discordChannel) => __awaiter(void 0, void 0, void 0, function* () {
    let searchResults = [];
    let normalizedResults = [];
    const { updateState, state } = actions_1.default();
    const lastSearchResults = state.actualSearch;
    let searchPromises = [];
    yield PartnersConfig_1.MazeConfig.itemsToSearch.NikeJordan.forEach((item, index) => __awaiter(void 0, void 0, void 0, function* () {
        searchPromises.push(isProductAvailable_1.isProductAvailable(PartnersConfig_1.Partners.Maze, item, null, 'all'));
    }));
    yield Promise.all(searchPromises).then(res => {
        searchResults.push(res);
    }).catch(err => { throw new Error("Erro ao Buscar"); });
    yield searchResults.forEach((item) => {
        if (item !== null) {
            item.forEach((productList) => {
                if (productList !== null) {
                    productList.forEach((product) => {
                        if (!normalizedResults.includes(product)) {
                            normalizedResults.push(product);
                        }
                    });
                }
            });
        }
    });
    if (fast_deep_equal_1.default(normalizedResults, lastSearchResults)) {
        console.log(`passou`);
        return;
    }
    else {
        updateState({
            actualSearch: normalizedResults,
            actualPartnerInSearch: PartnersConfig_1.Partners.Maze
        });
        discordChannel.send('\:rotating_light: OLHA OS JORDAN NA MAZE, MEUS CHAPAS \:rotating_light:');
        normalizedResults.forEach((item) => discordChannel.send(item));
    }
});
exports.initSearchPartnersBot = initSearchPartnersBot;
