const cURL = `
# apt install openssl
# apt install curl
API_KEY=""
API_SECRET=""
TIMESTAMP=$((^date '+%s'^*1000+^date '+%N'^/1000000))
PARAMETERS="PPAARRAAMMEETTEERRSS"
HOST="HHOOSSTT"
PROTOCOL="PPRROOTTOOCCOOLL"
METHOD="MMEETTHHOODD"
API="AAPPII"

echo "API_KEY:"$API_KEY
echo "API_SECRET:"$API_SECRET
echo "PARAMETERS:"$PARAMETERS
PARAMETERS="$PARAMETERS&timestamp=$TIMESTAMP"

sign=^echo -n $PARAMETERS | openssl dgst -sha256 -hmac $API_SECRET -hex^
sign=$\{sign##* \}
echo "sign:"$sign
CURL="curl  --location --request $METHOD --header  'X-BX-APIKEY: $API_KEY' '$PROTOCOL://$HOST$API?$PARAMETERS&signature=$sign'"
echo ""
echo $CURL
echo ""
curl  --location --request $METHOD --header  "X-BX-APIKEY: $API_KEY" "$PROTOCOL://$HOST$API?$PARAMETERS&signature=$sign"
echo ""
echo ""
`
export default cURL
