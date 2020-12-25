import { getOrigin } from '@utils/getOrigin'
import { Origins } from '@store/constants'

export const resolveTitlePartner = () => {
  const origin = getOrigin()
  const title: { [K in Origins]: string } = {
    orama: 'Órama',
    bv: 'Cartão BV Elo Mais',
    'icatu-life': 'Seguro de Vida Icatu',
    'bv-graphite': 'Cartão BV Grafite',
    'bv-international': 'Cartão BV Internacional',
    'bv-platinum': 'Cartão BV Platinum',
    'icatu-pp': 'Icatu Previdência',
    'icatu-pc': 'Icatu Crédito Protegido',
  }

  return title[origin] ?? ''
}
