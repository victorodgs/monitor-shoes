import { HTMLSelectorTypes } from './Enums'
import { PartnerConfig } from './Constants'

export const MazeConfig: PartnerConfig = {
        siteURL: 'https://maze.com.br',
        siteSearchURL: 'https://www.maze.com.br/busca?n=',
        productCategory: 'shoes',
        categoryPathname: 'products/tenis-nike-sb-zoom-dunk-high-pro-qs', // pages/search-results-page?q=nike+dunk
        productLinkContainer: {
          selector: 'product-in-card',
          type: HTMLSelectorTypes.className,
        },
        buttonLink: {
          selector: 'maze_btnComprar',
          type: HTMLSelectorTypes.className,
          HTMLTag: 'a'
        },
        productSearchParams: {
          availableIndicator: 'product-add-to-cart',
          indicadorType: HTMLSelectorTypes.id, // criar um enumerador
          unavailableIndicator: 'button-disabled', // criar um enumerador
        },
}
