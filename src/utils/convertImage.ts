import { awaitTo } from './fp'
import { isIos } from './getOs'

interface ImageToCanvasConfig {
  height?: number
  orientation?: number
  scale?: number
  width?: number
}

const imagetoCanvas = async (image, config: ImageToCanvasConfig = {}) => {
  const cvs = document.createElement('canvas')
  const ctx = cvs.getContext('2d')
  let height
  let width
  for (const i in config) {
    if (Object.prototype.hasOwnProperty.call(config, i)) {
      config[i] = Number(config[i])
    }
  }
  if (!config.scale) {
    width =
      config.width ||
      (config.height * image.width) / image.height ||
      image.width
    height =
      config.height ||
      (config.width * image.height) / image.width ||
      image.height
  } else {
    const scale = config.scale > 0 && config.scale < 10 ? config.scale : 1
    width = image.width * scale
    height = image.height * scale
  }
  if ([5, 6, 7, 8].some(i => i === config.orientation)) {
    cvs.height = width
    cvs.width = height
  } else {
    cvs.height = height
    cvs.width = width
  }
  switch (config.orientation) {
    case 3:
      ctx.rotate((180 * Math.PI) / 180)
      ctx.drawImage(image, -cvs.width, -cvs.height, cvs.width, cvs.height)
      break
    case 6:
      ctx.rotate((90 * Math.PI) / 180)
      ctx.drawImage(image, 0, -cvs.width, cvs.height, cvs.width)
      break
    case 8:
      ctx.rotate((270 * Math.PI) / 180)
      ctx.drawImage(image, -cvs.height, 0, cvs.height, cvs.width)
      break

    case 2:
      ctx.translate(cvs.width, 0)
      ctx.scale(-1, 1)
      ctx.drawImage(image, 0, 0, cvs.width, cvs.height)
      break
    case 4:
      ctx.translate(cvs.width, 0)
      ctx.scale(-1, 1)
      ctx.rotate((180 * Math.PI) / 180)
      ctx.drawImage(image, -cvs.width, -cvs.height, cvs.width, cvs.height)
      break
    case 5:
      ctx.translate(cvs.width, 0)
      ctx.scale(-1, 1)
      ctx.rotate((90 * Math.PI) / 180)
      ctx.drawImage(image, 0, -cvs.width, cvs.height, cvs.width)
      break
    case 7:
      ctx.translate(cvs.width, 0)
      ctx.scale(-1, 1)
      ctx.rotate((270 * Math.PI) / 180)
      ctx.drawImage(image, -cvs.height, 0, cvs.height, cvs.width)
      break
    default:
      ctx.drawImage(image, 0, 0, cvs.width, cvs.height)
  }

  return cvs
}

const canvastoDataURL = async (canvas, quality, type = 'image/jpeg') =>
  canvas.toDataURL(type, quality)

const filetoDataURL = (file): Promise<string | ArrayBuffer | null> =>
  new Promise(resolve => {
    const reader = new FileReader()
    reader.onloadend = (e: ProgressEvent<FileReader>) =>
      resolve(e.target.result)
    reader.readAsDataURL(file)
  })

const dataURLtoImage = dataURL =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () =>
      reject(new Error('dataURLtoImage(): dataURL is illegal'))
    img.src = dataURL
  })

const dataURLtoFile = async (dataURL: string, type) => {
  const arr = dataURL.split(',')
  const mime = type || arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new Blob([u8arr], {
    type: mime,
  })
}

interface CompressConfig {
  accuracy?: number
  height?: number
  orientation?: number
  quality?: number
  scale?: number
  size?: number
  type?: 'image/png' | 'image/jpeg' | 'image/gif'
  width?: number
}

export const compress = async (
  file: Blob,
  config: CompressConfig = {
    quality: 0.9,
    type: 'image/jpeg',
    size: 100,
    accuracy: 0.9,
    width: 300,
    height: 200,
    scale: 0.5,
    orientation: 2,
  },
) => {
  const dataURL = await filetoDataURL(file)
  const image = await dataURLtoImage(dataURL)
  const canvas = await imagetoCanvas(image, { ...config })
  const compressDataURL = await canvastoDataURL(
    canvas,
    config.quality,
    config.type,
  )
  const compressFile = await dataURLtoFile(compressDataURL, config.type)

  return compressFile
}

export const compressAccurately = awaitTo(
  async (
    file: Blob,
    config: CompressConfig = {
      quality: 0.75,
      type: 'image/jpeg',
      size: 100,
      accuracy: 0.9,
      width: 300,
      height: 200,
      scale: 0.5,
      orientation: isIos ? 6 : undefined,
    },
  ) => {
    if (config.size * 1024 > file.size) {
      return file
    }
    if (!config.accuracy || config.accuracy < 0.8 || config.accuracy > 0.99) {
      config.accuracy = 0.95
    }
    const resultSize = {
      max: config.size * (2 - config.accuracy) * 1024,
      accurate: config.size * 1024,
      min: config.size * config.accuracy * 1024,
    }
    const dataURL = await filetoDataURL(file)
    const image = await dataURLtoImage(dataURL)
    const canvas = await imagetoCanvas(image, { ...config })
    const proportion = 0.75
    let imageQuality = 0.5
    let compressDataURL
    const tempDataURLs = [null, null]
    for (let x = 1; x <= 7; x++) {
      compressDataURL = await canvastoDataURL(canvas, imageQuality, config.type)
      const CalculationSize = compressDataURL.length * proportion
      if (x === 7) {
        if (
          resultSize.max < CalculationSize ||
          resultSize.min > CalculationSize
        ) {
          compressDataURL = [compressDataURL, ...tempDataURLs]
            .filter(i => i)
            .sort(
              (a, b) =>
                Math.abs(a.length * proportion - resultSize.accurate) -
                Math.abs(b.length * proportion - resultSize.accurate),
            )[0]
        }
        break
      }
      if (resultSize.max < CalculationSize) {
        tempDataURLs[1] = compressDataURL
        imageQuality -= 0.5 ** (x + 1)
      } else if (resultSize.min > CalculationSize) {
        tempDataURLs[0] = compressDataURL
        imageQuality += 0.5 ** (x + 1)
      } else {
        break
      }
    }
    const compressFile = await dataURLtoFile(compressDataURL, config.type)
    if (compressFile.size > file.size) {
      return file
    }

    return compressFile
  },
)
