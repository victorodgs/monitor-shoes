import { isIos, isDesktop } from './getOs'
import noop from './noop'

enum SHELF {
  CARDS = '6',
}

const DEEP_LINK = 'guiabolso://'

interface WebViewParams {
  shelf?: string
  url?: string
}

const mountParams = (params: WebViewParams) =>
  params
    ? Object.keys(params).reduce(
        (acc, _param) => `${acc}${_param}=${params[_param]}`,
        '?',
      )
    : ''

const doActionWebView = (key: string, params?: WebViewParams) => () => {
  if (isDesktop && key === 'leaveWebview') {
    return (window.location.href =
      'https://app.guiabolso.com.br/#/financas/resumo')
  }
  if (isDesktop && key === 'openBrowser') {
    return window.open(mountParams(params).replace('?url=', ''))
  }
  if (isIos && key === 'leaveWebview') {
    ;(window.close || noop)()
  }
  const link = DEEP_LINK + key + mountParams(params)

  window.location.href = link
}

export const WebViewGb = {
  exit: doActionWebView('leaveWebview'),
  openBrowser: (url: string) => doActionWebView('openBrowser', { url }),
  openOthersCards: doActionWebView('products', { shelf: SHELF.CARDS }),
}
