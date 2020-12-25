export const MazeConfig = {
        site: 'https://matrizskateshop.com.br',
        productCategory: 'shoes',
        categoryPathname: 'products/tenis-nike-sb-zoom-dunk-high-pro-qs', // pages/search-results-page?q=nike+dunk
        productLinkContainer: '.snize-product',
        linkContainer: 'a',
        productSearchParams: {
          availableIndicator: 'product-add-to-cart',
          indicadorType: 'id', // criar um enumerador
          unavailableIndicator: 'button-disabled', // criar um enumerador
        },
        formFieldsOnBuyPage: {
          email: document.getElementById ('user_email'),
          phone: document.getElementById ('user_phone'),
        },
}