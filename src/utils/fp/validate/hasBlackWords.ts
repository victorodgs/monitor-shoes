export const hasWordInBlackList = (
  _text: string,
  blackList = [
    'select',
    'update',
    'insert',
    'delete',
    'drop',
    'truncate',
    'waitfor',
    'delay',
    'where',
    'from',
    'having',
    'script',
    'applet',
    'sha1',
  ],
) => blackList.some(_ => _text.includes(_))
