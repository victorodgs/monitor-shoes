import { NOT } from './logic'

export enum SO {
  MAC = 'Mac OS',
  IOS = 'iOS',
  WINDOWS = 'Windows',
  ANDROID = 'Android',
  LINUX = 'Linux',
}

const { platform, userAgent } = window.navigator

const System = {
  [SO.MAC]: ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
  [SO.IOS]: ['iPhone', 'iPad', 'iPod'],
  [SO.WINDOWS]: ['Win32', 'Win64', 'Windows', 'WinCE'],
  [SO.ANDROID]: /Android/.test(userAgent),
}

const verifyStringSystem = key => System[key].indexOf(platform) !== -1

export const isMac = verifyStringSystem(SO.MAC)
export const isIos = verifyStringSystem(SO.IOS)
export const isWindows = verifyStringSystem(SO.WINDOWS)
export const isAndroid = System[SO.ANDROID]
export const isLinux = NOT(isMac || isIos || isWindows || isAndroid)

export enum Device {
  DESKTOP = 'Desktop',
  TABLET = 'TABLET',
  PHONE = 'PHONE',
}

export const device = () => {
  const screenWidth = window?.innerWidth ?? window?.screen?.availWidth
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  if (screenWidth < 640 && isMobile) {
    return Device.PHONE
  }

  if (screenWidth < 1000 && isMobile) {
    return Device.TABLET
  }

  if (NOT(isMobile)) {
    return Device.DESKTOP
  }
}

export const isMobile = device() === Device.PHONE
export const isTablet = device() === Device.TABLET
export const isDesktop = device() === Device.DESKTOP
