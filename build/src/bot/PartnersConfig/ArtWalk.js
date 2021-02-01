"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtWalkConfig = void 0;
const Enums_1 = require("./Enums");
exports.ArtWalkConfig = {
    siteURL: 'https://www.artwalk.com.br',
    siteSearchURL: 'https://www.artwalk.com.br/',
    productCategory: 'shoes',
    categoryPathname: 'products/tenis-nike-sb-zoom-dunk-high-pro-qs',
    productLinkContainer: {
        selector: 'shelf-buy-button',
        type: Enums_1.HTMLSelectorTypes.className,
    },
    buttonLink: {
        selector: 'btn-add-buy-button-asynchronous',
        type: Enums_1.HTMLSelectorTypes.className,
        HTMLTag: 'a'
    },
    productSearchParams: {
        availableIndicator: 'product-add-to-cart',
        indicadorType: Enums_1.HTMLSelectorTypes.id,
        unavailableIndicator: 'button-disabled',
    },
};
