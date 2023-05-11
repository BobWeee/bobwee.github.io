const golang = `
package main

import (
	"encoding/json"
	"crypto/hmac"
	"fmt"
	"time"
	"net/http"
	"io/ioutil"
	"crypto/sha256"
	"encoding/hex"
)
HOST := "HHOOSSTT"
API_KEY := ""
API_SECRET := ""
func main() {

  dataStr := ^AAPPII^
  payload := ^PPAAYYLLOOAADD^
  apiMap := getParameters(dataStr, payload)
  sign := computeHmac256(fmt.Sprintf("%v",apiMap["parameters"]), API_SECRET)
  parameters := fmt.Sprintf("%v&signature=%s",apiMap["parameters"], sign)
  url := fmt.Sprintf("%v://%s%v?%s",apiMap["protocol"],HOST,apiMap["uri"],parameters)
  method := fmt.Sprintf("%v",apiMap["method"])
  client := &http.Client {}
  fmt.Println("parameters:",parameters)
  fmt.Println("sign:",sign)
  fmt.Println("url:",url)
  fmt.Println("method:",method)
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("X-BX-APIKEY", API_KEY)
  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}

func computeHmac256(strMessage string, strSecret string) string {
	key := []byte(strSecret)
	h := hmac.New(sha256.New, key)
	h.Write([]byte(strMessage))
	return hex.EncodeToString(h.Sum(nil))
}
func getParameters(dataStr string , payload string) map[string]interface{}{
	 TIMESTAMP := time.Now().UnixNano()
	 TIMESTAMP = TIMESTAMP/1e6
	var apiMap  map[string]interface{}
	var payloadMap map[string]interface{}
	err := json.Unmarshal([]byte(dataStr), &apiMap)
	if err != nil {
	   fmt.Printf("json to map error,err:%s\\n", err)
	   return apiMap
	}
	err = json.Unmarshal([]byte(payload), &payloadMap)
	if err != nil {
	   fmt.Printf("json to map error,err:%s\\n", err)
	   return apiMap
	}
	parameters := ""
	for key, value := range payloadMap {
        parameters = parameters + key+"="+fmt.Sprintf("%v",value)+"&"
    }
	parameters +="timestamp="+fmt.Sprintf("%d",TIMESTAMP)
	apiMap["parameters"]=fmt.Sprintf("%v",parameters)
	return apiMap
}`
export default golang