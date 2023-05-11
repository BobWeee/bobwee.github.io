
const nodeJS = `
// npm install crypto-js -s 
// npm install axios -s 
import CryptoJS from "crypto-js";
import axios from "axios";
const API_KEY = ""
const API_SECRET = ""
const host = "HHOOSSTT"
const api = AAPPII
async function main() {

    let  parameters = ""
    for (const key in api.payload) {
        parameters += key+"="+api.payload[key]+"&"
    }
    if (parameters) {
        parameters = parameters.substring(0,parameters.length)
    }
    await bingXOpenApiTest(api.protocol, api.host, api.uri, api.method, API_KEY, API_SECRET, parameters)
}
main().catch(console.err);
async function bingXOpenApiTest(protocol,host, api, method, API_KEY, API_SECRET, parameters) {
    const timestamp = new Date().getTime()
    parameters = parameters+"&timestamp="+timestamp
    const sign = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(parameters, API_SECRET))
    const url = protocol+"://"+host+api+parameters+"&signature="+sign
    console.log("protocol:", protocol)
    console.log("method:", method)
    console.log("host:", host)
    console.log("api:", api)
    console.log("parameters:", parameters)
    console.log("sign:", sign)
    console.log(method, url)
    const headers = {
        'X-BX-APIKEY': API_KEY,
    }
    const resp = await doAxios(url, method, headers, "", false)
    console.log("response:", resp)
}

async function doAxios(uri, method, headers, data, async, timeout) {
    let respData = null;
    await axios({
        method: method,
        url: uri,
        data: data,
        async: async,
        headers: headers,
        timeout: timeout || 1000 * 60 * 3,
    })
        .then(res => {
            respData = res.data
        })
        .catch(error => { });
    return respData
}`
export default nodeJS
