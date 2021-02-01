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
exports.isProductAvailable = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const PartnersConfig_1 = require("../PartnersConfig");
const isProductAvailable = (partner, product, channel, mode) => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch();
    const page = yield browser.newPage();
    const config = PartnersConfig_1.MazeConfig;
    yield page.goto(product);
    const result = yield page.evaluate((config) => __awaiter(void 0, void 0, void 0, function* () {
        const shoes = [];
        document.querySelectorAll(`${config.productLinkContainer.type}${config.productLinkContainer.selector} ${config.buttonLink.type}${config.buttonLink.selector}`)
            .forEach((item) => shoes.push(`${config.siteURL}${item.getAttribute('href')}`));
        console.log(shoes);
        return shoes;
    }), config);
    yield browser.close();
    if (result.length > 0) {
        return result;
    }
    else {
        return null;
    }
});
exports.isProductAvailable = isProductAvailable;
