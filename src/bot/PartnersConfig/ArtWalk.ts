import { HTMLSelectorTypes } from './Enums'
import { PartnerConfig } from './Constants'

export const ArtWalkConfig: PartnerConfig = {
        siteURL: 'https://www.artwalk.com.br',
        siteSearchURL: 'https://www.artwalk.com.br/',
        productCategory: 'shoes',
        categoryPathname: 'products/tenis-nike-sb-zoom-dunk-high-pro-qs', // pages/search-results-page?q=nike+dunk
        productLinkContainer: {
          selector: 'shelf-buy-button',
          type: HTMLSelectorTypes.className,
        },
        buttonLink: {
          selector: 'btn-add-buy-button-asynchronous',
          type: HTMLSelectorTypes.className,
          HTMLTag: 'a'
        },
        productSearchParams: {
          availableIndicator: 'product-add-to-cart',
          indicadorType: HTMLSelectorTypes.id, // criar um enumerador
          unavailableIndicator: 'button-disabled', // criar um enumerador
        },
}


