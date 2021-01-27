import { HTMLSelectorTypes } from './Enums'

export enum Partners {
    Maze = 'Maze',
    ArtWalk = 'ArtWalk',
    Matriz = 'Matriz',
    Nike = 'Nike'
}

export interface PartnerConfig {
    siteURL: string,
    siteSearchURL: string,
    productCategory: string,
    categoryPathname: string
    productLinkContainer: {
      selector: string,
      type: HTMLSelectorTypes,
    },
    buttonLink: {
      selector: string,
      type: HTMLSelectorTypes,
      HTMLTag: string
    },
    productSearchParams: {
      availableIndicator: string
      indicadorType: HTMLSelectorTypes
      unavailableIndicator: string, // criar um enumerador
    },
    formFieldsOnBuyPage?: {
      email: string,
      phone: string //document.getElementById ('user_phone'),
    },
    itemsToSearch?: any
  }