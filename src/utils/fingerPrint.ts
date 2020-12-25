export const getFingerprint = async clearSaleId =>
  new Promise(resolve => {
    const inputElement = document.createElement('input')

    inputElement.id = 'fingerprint'
    inputElement.name = 'fingerprint'
    inputElement.type = 'hidden'

    document.body.append(inputElement)

    const tagScript = 'script'
    const url = '//device.clearsale.com.br/p/fp.js'
    const fnName = 'csdp'
    // @ts-ignore
    window.CsdpObject = fnName
    window[fnName] =
      window[fnName] ||
      function() {
        ;(window[fnName].q = window[fnName].q || []).push(arguments)
      }
    // @ts-ignore
    window[fnName].l = 1 * new Date()
    const scriptElement = document.createElement(tagScript)
    const e = document.getElementsByTagName(tagScript)[0]

    scriptElement.async = true
    scriptElement.src = url
    e.parentNode.insertBefore(scriptElement, e)

    scriptElement.onload = () => {
      // @ts-ignore
      csdp('app', clearSaleId)
      // @ts-ignore
      csdp('outputsessionid', 'fingerprint')

      setTimeout(() => {
        const { value = null } = inputElement

        const iFrameCsdp = document.querySelector(`#csdp_${value}`)

        if (iFrameCsdp) {
          iFrameCsdp.remove()
        }

        scriptElement.remove()
        inputElement.remove()

        resolve(value)
      }, 100)
    }
  })
