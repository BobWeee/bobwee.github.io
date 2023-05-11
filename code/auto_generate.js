function generateCode(api, codeLang, defaultCode, host) {
    if (codeLang == 'nodeJS') {
      let codeStr = require("@/data/code/" + codeLang + '.js').default
      const api2 = {}
      api2.uri = api.uri
      api2.method = api.method
      api2.payload = api.payload
      api2.protocol = api.protocol
      codeStr = codeStr.replace(/AAPPII/g, JSON.stringify(api2, null, 4))
      codeStr = codeStr.replace(/HHOOSSTT/g, host)
      return codeStr
    }
    if (codeLang == 'shell') {
      let parameters = ""
      for (const key in api.payload) {
        parameters += key + "=" + api.payload[key] + "&"
      }
      if (parameters) {
        parameters = parameters.substring(0, parameters.length - 1)
      }
      let codeStr = require("@/data/code/" + codeLang + '.js').default
      codeStr = codeStr.replace(/AAPPII/g, api.uri)
      codeStr = codeStr.replace(/HHOOSSTT/g, host)
      codeStr = codeStr.replace(/PPRROOTTOOCCOOLL/g, api.protocol)
      codeStr = codeStr.replace(/MMEETTHHOODD/g, api.method)
      codeStr = codeStr.replace(/PPAARRAAMMEETTEERRSS/g, parameters)
      codeStr = codeStr.replace(/\^/g, '`')
      return codeStr
    }
    if (codeLang == 'golang') {
        let codeStr = require("@/data/code/" + codeLang + '.js').default
        const api2 = {}
        api2.uri = api.uri
        api2.method = api.method
        // api2.payload = api.payload
        api2.protocol = api.protocol
        codeStr = codeStr.replace(/\^/g, '`')
        codeStr = codeStr.replace(/AAPPII/g, JSON.stringify(api2, null, 4))
        codeStr = codeStr.replace(/PPAAYYLLOOAADD/g, JSON.stringify(api.payload, null, 4))
        codeStr = codeStr.replace(/HHOOSSTT/g, host)
        return codeStr
      }
    return defaultCode
  }
  export default generateCode
