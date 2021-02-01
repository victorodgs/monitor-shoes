"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MazeConfig = void 0;
const Enums_1 = require("./Enums");
exports.MazeConfig = {
    siteURL: 'https://maze.com.br',
    siteSearchURL: 'https://www.maze.com.br/busca?n=',
    productCategory: 'shoes',
    categoryPathname: 'products/tenis-nike-sb-zoom-dunk-high-pro-qs',
    productLinkContainer: {
        selector: 'product-in-card',
        type: Enums_1.HTMLSelectorTypes.className,
    },
    buttonLink: {
        selector: 'maze_btnComprar',
        type: Enums_1.HTMLSelectorTypes.className,
        HTMLTag: 'a'
    },
    productSearchParams: {
        availableIndicator: 'product-add-to-cart',
        indicadorType: Enums_1.HTMLSelectorTypes.id,
        unavailableIndicator: 'button-disabled',
    },
    itemsToSearch: {
        NikeJordan: [
            'https://www.maze.com.br/busca?n=Nike%20jordan%201&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/busca?n=Nike%20jordan%203&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/busca?n=Nike%20jordan%204&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/busca?n=Nike%20jordan%205&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/busca?n=Nike%20jordan%206&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/busca?n=Nike%20jordan%207&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/busca?n=Nike%20jordan%208&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/busca?n=Nike%20jordan%209&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/busca?n=Nike%20jordan%2010&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/busca?n=Nike%20jordan%2011&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/busca?n=Nike%20jordan%2012&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/busca?n=Nike%20jordan%2013&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/busca?n=Nike%20jordan&mdf=undefined&mdv=undefined'
        ],
        NikeDunkMid: [
            'https://www.maze.com.br/busca?n=Nike%20dunk%20mid&mdf=undefined&mdv=undefined',
            'https://www.maze.com.br/categoria/nike/jordan',
            'https://www.maze.com.br/categoria/nike/air-force',
            'https://www.maze.com.br/categoria/adidas/yeezy',
            'https://www.maze.com.br/categoria/sale'
        ]
    }
};
