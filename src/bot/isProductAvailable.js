const USER_DATA = {
  email: 'victorodgs@gmail.com',
  name: 'Victor',
  lastName: 'Costa',
  code_area: 13,
  number: 996529238,
  address: {
    street: '',
  },
};

const MATRIZ_CONFIG = {
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
};

function isProductAvailable () {
  const siteUrl = MATRIZ_CONFIG.site + '/' + MATRIZ_CONFIG.categoryPathname;
  const productName = document.getElementsByClassName ('product-title')[1]
    .textContent;
  const availableIndicator = Object (
    document.getElementById ('product-add-to-cart')
  );
  console.log ('Nome do Produto: ' + productName);
  console.log (
    'Produto disponível?' + availableIndicator.disabled ? 'Não' : 'Sim'
  );
  console.log ('Página do produto: ' + siteUrl);

  return availableIndicator.disabled ? false : true;
}

const CartInfo = {
  token: '90702f6f340751e076a06115d34fc46f',
  note: '',
  attributes: {},
  original_total_price: 110970,
  total_price: 110970,
  total_discount: 0,
  total_weight: 3900.0,
  item_count: 3,
  items: [
    {
      id: 29484905791530,
      properties: null,
      quantity: 1,
      variant_id: 29484905791530,
      key: '29484905791530:c38613d9dc6543fa2a26aa962c6eba9d',
      title: 'T\u00caNIS NIKE SB ZOOM JANOSKI SLIP RM CRAFTED MARROM - 37 \/ MARROM',
      price: 30990,
      original_price: 30990,
      discounted_price: 30990,
      line_price: 30990,
      original_line_price: 30990,
      total_discount: 0,
      discounts: [],
      sku: '0008707_17225_6_0_37',
      grams: 1300,
      vendor: 'Matriz SP Augusta',
      taxable: false,
      product_id: 3945407152170,
      product_has_only_default_variant: false,
      gift_card: false,
      final_price: 30990,
      final_line_price: 30990,
      url: '\/products\/tenis-nike-sb-zoom-janoski-slip-rm-crafted-marrom?variant=29484905791530',
      featured_image: {
        aspect_ratio: 1.0,
        alt: 'T\u00caNIS NIKE SB ZOOM JANOSKI SLIP RM CRAFTED MARROM - Matriz Skate Shop',
        height: 1100,
        url: 'https:\/\/cdn.shopify.com\/s\/files\/1\/2802\/3244\/products\/tenis-nike-sb-zoom-janoski-slip-rm-crafted-marrom-683759.jpg?v=1579142315',
        width: 1100,
      },
      image: 'https:\/\/cdn.shopify.com\/s\/files\/1\/2802\/3244\/products\/tenis-nike-sb-zoom-janoski-slip-rm-crafted-marrom-683759.jpg?v=1579142315',
      handle: 'tenis-nike-sb-zoom-janoski-slip-rm-crafted-marrom',
      requires_shipping: true,
      product_type: 'T\u00caNIS',
      product_title: 'T\u00caNIS NIKE SB ZOOM JANOSKI SLIP RM CRAFTED MARROM',
      product_description: 'UMA HOMENAGEM \u00c0 ARTE E \u00c0 CRIATIVIDADE.\nO Nike SB Zoom Stefan Janoski Slip RM Crafted homenageia as contribui\u00e7\u00f5es de Stefan ao mundo do skate e da arte. O couro trabalhado \u00e0 m\u00e3o proporciona um visual exclusivo, ao passo que o amortecimento refinado e a borracha flex\u00edvel otimizam o seu desempenho.\nArte Aprimorada\nCouro macio trabalhado \u00e0 m\u00e3o para criar uma est\u00e9tica premium e exclusiva.\nDesign Aprimorado\nA borracha est\u00e1 mais fina nas principais \u00e1reas para um toque leve e descontra\u00eddo logo no primeiro uso.\nConforto Responsivo\nPalmilha em espuma em toda a extens\u00e3o proporciona sensa\u00e7\u00e3o de maciez sob o p\u00e9. A unidade Zoom Air oferece amortecimento responsivo.\nMais Benef\u00edcios\n\nConstru\u00e7\u00e3o vulcanizada que une o solado ao cabedal para um visual descontra\u00eddo.\nFormatos geom\u00e9tricos, entre a entressola e o solado, se expandem e se contraem em todas as dire\u00e7\u00f5es, permitindo melhor sensibilidade ao skate e flexibilidade.\n\nOrigem do Janoski\nEm 2009, a maioria dos t\u00eanis de skate era grande e volumosa. Nike SB pro Stefan Janoski deram o primeiro passo e mudaram tudo com seu t\u00eanis exclusivo. Ele queria que fosse poss\u00edvel sentir tudo sob o p\u00e9, ent\u00e3o criou um t\u00eanis mais baixo, mais plano e mais leve. O resultado exibiu a clareza de Stefan em todos os detalhes \u2014 resumindo-se ao lema presente em um dos seus antigos patches.',
      variant_title: '37 \/ MARROM',
      variant_options: ['37', 'MARROM'],
      options_with_values: [
        {name: 'Tamanho', value: '37'},
        {name: 'Cor', value: 'MARROM'},
      ],
      line_level_discount_allocations: [],
      line_level_total_discount: 0,
    },
    {
      id: 29545921282090,
      properties: {},
      quantity: 2,
      variant_id: 29545921282090,
      key: '29545921282090:ea2d6d72b69b30220d725914c877067a',
      title: 'T\u00caNIS VANS OLD SKOOL PRO - 34 \/ PRETO',
      price: 39990,
      original_price: 39990,
      discounted_price: 39990,
      line_price: 79980,
      original_line_price: 79980,
      total_discount: 0,
      discounts: [],
      sku: '03113_10278_2_0_34',
      grams: 1300,
      vendor: 'Matriz SP Augusta',
      taxable: false,
      product_id: 3956058619946,
      product_has_only_default_variant: false,
      gift_card: false,
      final_price: 39990,
      final_line_price: 79980,
      url: '\/products\/tenis-vans-old-skool-pro-1?variant=29545921282090',
      featured_image: {
        aspect_ratio: 1.0,
        alt: 'T\u00caNIS VANS OLD SKOOL PRO - Matriz Skate Shop',
        height: 1200,
        url: 'https:\/\/cdn.shopify.com\/s\/files\/1\/2802\/3244\/products\/tenis-vans-old-skool-pro-234988.jpg?v=1576103391',
        width: 1200,
      },
      image: 'https:\/\/cdn.shopify.com\/s\/files\/1\/2802\/3244\/products\/tenis-vans-old-skool-pro-234988.jpg?v=1576103391',
      handle: 'tenis-vans-old-skool-pro-1',
      requires_shipping: true,
      product_type: 'T\u00caNIS',
      product_title: 'T\u00caNIS VANS OLD SKOOL PRO',
      product_description: 'O Vans\u00a0Old Skool Pro, um cl\u00e1ssico da Vans que foi atualizado para oferecer um melhor desempenho, possui cabedal de lona e camur\u00e7a, a ic\u00f4nica sidestripe na lateral de couro, amortecimento ULTRACUSH HD, para manter o p\u00e9 pr\u00f3ximo ao skate, proporcionando o mais alto n\u00edvel de absor\u00e7\u00e3o de impacto, e a original sola Waffle de bo.rracha vulcanizada da marca, para ader\u00eancia e controle superiores.O Old Skool Pro conta tamb\u00e9m com camadas internas de refor\u00e7o de borracha DURACAP em \u00e1reas de alto desgaste para uma durabilidade incompar\u00e1vel.',
      variant_title: '34 \/ PRETO',
      variant_options: ['34', 'PRETO'],
      options_with_values: [
        {name: 'Tamanho', value: '34'},
        {name: 'Cor', value: 'PRETO'},
      ],
      line_level_discount_allocations: [],
      line_level_total_discount: 0,
    },
  ],
  requires_shipping: true,
  currency: 'BRL',
  items_subtotal_price: 110970,
  cart_level_discount_applications: [],
};
