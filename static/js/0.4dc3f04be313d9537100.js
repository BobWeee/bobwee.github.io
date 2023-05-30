webpackJsonp([0],{"/AO3":function(e,t){},dPpd:function(e,t){},n9yX:function(e,t){},z6YW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r,s,i,o,c=a("Dd8w"),l=a.n(c),p=a("0xDb"),m=a("Gu7T"),u=a.n(m),d=a("mvHQ"),h=a.n(d),v=a("OvRC"),y=a.n(v),b=a("bOdI"),f=a.n(b),g=(n={},f()(n,p.c.zh,{name:"参数名",type:"类型",required:"是否必填",description:"字段说明"}),f()(n,p.c.tw,{name:"參數名",type:"類型",required:"是否必填",description:"欄位說明"}),f()(n,p.c.en,{name:"Parameter Name",type:"Type",required:"Required",description:"Field Description"}),n),C=(r={},f()(r,p.c.zh,{name:"参数名",description:"字段说明"}),f()(r,p.c.tw,{name:"參數名",description:"欄位說明"}),f()(r,p.c.en,{name:"Parameter Name",description:"Field Description"}),r),_=(s={},f()(s,p.c.zh,{name:"",description:"说明"}),f()(s,p.c.tw,{name:"",description:"說明"}),f()(s,p.c.en,{name:"",description:"description"}),s),T={code:(i={},f()(i,p.c.zh,"复制代码"),f()(i,p.c.tw,"複製代碼"),f()(i,p.c.en,"Copy Code"),i),params:(o={},f()(o,p.c.zh,"复制参数"),f()(o,p.c.tw,"複製參數"),f()(o,p.c.en,"Copy Parameters"),o)},x="request",w="request1",k="request2",M="request3",P="response",S="response1",j="response2",N="response3",$="wssResponse",E="common",q="key1",O="key2",A="key3",D="key4",z="key5",F="key6",I="key7",L="key8",R={name:"Demo",props:{lang:String,item:{type:Object,default:function(){}}},data:function(){return{parmasShowType:1,activeParamsTab:"",paramsTableColumn:[],codeLangConfig:p.d,activeCodeTab:p.d[0].value}},computed:{isTable:function(){return 1===this.parmasShowType},successMsg:function(){return p.k.success[this.lang]},errorMsg:function(){return p.k.error[this.lang]},copyCodeBtnText:function(){return T.code[this.lang]},copyParmsBtnText:function(){return T.params[this.lang]},currentMap:function(){return g[this.lang]},currentCommonMap:function(){return _[this.lang]},currentWssMap:function(){return C[this.lang]},requestTableColumns:function(){return[{prop:"name",label:this.currentMap.name},{prop:"type",label:this.currentMap.type},{prop:"required",label:this.currentMap.required},{prop:"description",label:this.currentMap.description}]},commonTableColumns:function(){return[{prop:"name",label:this.currentCommonMap.name},{prop:"description",label:this.currentCommonMap.description}]},wssTableColumns:function(){return[{prop:"name",label:this.currentWssMap.name},{prop:"description",label:this.currentWssMap.description}]},responseTableColumns:function(){return[{prop:"name",label:this.currentMap.name},{prop:"type",label:this.currentMap.type},{prop:"description",label:this.currentMap.description}]},paramsTabs:function(){return Array.isArray(this.item.params)?this.item.params.map(function(e){return{type:e.type,key:e.key}}):[]},jsonParams:function(){var e=this,t=this.item.params.find(function(t){return t.key===e.activeParamsTab}),a=y()(null);return(t?t.data:[]).forEach(function(e){a[e.name]=e.type}),h()(a,null,2)},renderParamsData:function(){var e=this,t=this.item.params.find(function(t){return t.key===e.activeParamsTab});if(this.isTable)return t?t.data:[];var a=y()(null);return(t?t.data:[]).forEach(function(e){a[e.name]=e.type}),this.$hljs.highlight(h()(a,null,2),{language:"json"}).value},code:function(){return this.item.api?Object(p.f)(this.item.api,this.activeCodeTab,this.item.host||"pre-open-api.yunzhonghui.vip"):"No Code"},demoCode:function(){return this.$hljs.highlight(this.code,{language:this.activeCodeTab}).value}},watch:{activeParamsTab:function(e){this.paramsTableColumn=[].concat(e===x||e===w||e===k||e===M?u()(this.requestTableColumns):e===P||e===S||e===j||e===N?u()(this.responseTableColumns):e===E?u()(this.commonTableColumns):e===q?u()(this.commonTableColumns):e===O?u()(this.commonTableColumns):e===A?u()(this.commonTableColumns):e===D?u()(this.commonTableColumns):e===z?u()(this.commonTableColumns):e===F?u()(this.commonTableColumns):e===I?u()(this.commonTableColumns):e===L?u()(this.commonTableColumns):e===$?u()(this.wssTableColumns):u()(this.responseTableColumns))}},methods:{onCopy:function(){this.$message.success(this.successMsg)},onError:function(){this.$message.success(this.errorMsg)}},created:function(){"demo"===this.item.type&&(this.activeParamsTab=this.paramsTabs[0].key)}},H={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item-demo-content"},[a("div",[a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{flex:"1"}},[a("el-radio",{attrs:{label:1},model:{value:e.parmasShowType,callback:function(t){e.parmasShowType=t},expression:"parmasShowType"}},[e._v("Table")]),e._v(" "),a("el-radio",{attrs:{label:2},model:{value:e.parmasShowType,callback:function(t){e.parmasShowType=t},expression:"parmasShowType"}},[e._v("JSON")])],1),e._v(" "),e.isTable?e._e():a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.jsonParams,expression:"jsonParams",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{size:"small"}},[e._v("\n          "+e._s(e.copyParmsBtnText)+"\n        ")])],1),e._v(" "),a("div",{staticClass:"params-content"},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeParamsTab,callback:function(t){e.activeParamsTab=t},expression:"activeParamsTab"}},e._l(e.paramsTabs,function(t){return a("el-tab-pane",{key:t.key,attrs:{name:t.key,label:t.type}},[e.isTable?a("el-table",{attrs:{data:e.renderParamsData,stripe:"",border:""}},e._l(e.paramsTableColumn,function(e,t){return a("el-table-column",{key:t,attrs:{label:e.label,prop:e.prop,align:"left"}})}),1):a("div",{staticClass:"code-html"},[a("pre",[a("code",{staticClass:"hljs language-json",domProps:{innerHTML:e._s(e.renderParamsData)}})])])],1)}),1)],1)]),e._v(" "),a("div",[a("div",{staticStyle:{display:"flex","flex-direction":"row-reverse"}},[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{size:"small"}},[e._v(e._s(e.copyCodeBtnText))])],1),e._v(" "),a("div",{staticClass:"params-content",staticStyle:{"margin-top":"4px"}},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeCodeTab,callback:function(t){e.activeCodeTab=t},expression:"activeCodeTab"}},e._l(e.codeLangConfig,function(t){return a("el-tab-pane",{key:t.value,attrs:{name:t.value,label:t.label}},[a("div",{staticClass:"code-html demo-code"},[a("pre",[a("code",{class:["hljs","language-"+e.activeCodeTab],domProps:{innerHTML:e._s(e.demoCode)}})])])])}),1)],1)])])},staticRenderFns:[]};var B=a("VU/8")(R,H,!1,function(e){a("/AO3")},"data-v-6210f844",null).exports,W={name:"ContentItem",props:{lang:String,item:{type:Object,default:function(){}}},components:{Demo:B},data:function(){return{}},filters:{generateId:p.g},computed:{successMsg:function(){return p.k.success[this.lang]},errorMsg:function(){return p.k.error[this.lang]}},methods:{onCopy:function(){this.$message.success(this.successMsg)},onError:function(){this.$message.success(this.errorMsg)}}},U={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return"hash"===e.item.type?a("h2",{staticClass:"item-hash",attrs:{id:e._f("generateId")(e.item.text),"data-text":e.item.text}},[a("router-link",{staticClass:"header-anchor",attrs:{to:{path:e.$route.path,hash:"#"+e.item.text}}},[e._v("\n      "+e._s(e.item.text)+"\n    ")])],1):a("div",{staticClass:"content-item"},["title"===e.item.type?a("p",{staticClass:"item-title"},[e._v(e._s(e.item.text))]):e._e(),e._v(" "),"normal"===e.item.type?a("div",{staticClass:"item-normal"},[e.item.text?a("p",{style:e.item.style||{}},[e._v(e._s(e.item.text))]):e._e(),e._v(" "),Array.isArray(e.item.children)?a("ul",{staticStyle:{"margin-left":"-10px"}},e._l(e.item.children,function(t,n){return a("li",{key:n},["html"===t.type?a("span",{domProps:{innerHTML:e._s(t.text)}}):a("span",[e._v(e._s(t.text))]),e._v(" "),Array.isArray(t.children)?a("ul",{staticStyle:{"margin-left":"-15px","list-style-type":"disc"}},e._l(t.children,function(t,n){return a("li",{key:n},[e._v(e._s(t.text))])}),0):e._e()])}),0):e._e()]):e._e(),e._v(" "),"html"===e.item.type?a("p",{domProps:{innerHTML:e._s(e.item.text)}}):e._e(),e._v(" "),"warning"===e.item.type?a("p",{staticClass:"item-warning-content"},[e._v(e._s(e.item.text))]):e._e(),e._v(" "),"code"===e.item.type?a("p",{staticClass:"item-code-content",staticStyle:{position:"relative"}},[a("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.item.text,expression:"item.text",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"el-icon-copy-document"}),e._v("\n      "+e._s(e.item.text)+"\n    ")]):e._e(),e._v(" "),"demo"===e.item.type?a("Demo",{attrs:{lang:e.lang,item:e.item}}):e._e()],1)},staticRenderFns:[]};var V=a("VU/8")(W,U,!1,function(e){a("n9yX")},null,null).exports,J={name:"Content Not Found",content:[]},X={props:{lang:String},components:{ContentItem:V},data:function(){return{appConfig:Object(p.h)(),pageContent:l()({},J)}},computed:{},watch:{"$route.path":{handler:function(e){this.pageContent=this.appConfig[e]||l()({},J)},immediate:!0},lang:function(){this.appConfig=Object(p.h)(),this.pageContent=this.appConfig[this.$route.path]||l()({},J)}},mounted:function(){p.e.$emit("content-ready")},updated:function(){p.e.$emit("content-ready")}},G={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-content"},[a("h1",{staticClass:"page-content-title"},[e._v(e._s(e.pageContent.name))]),e._v(" "),a("div",{staticClass:"page-content-wrap",attrs:{id:"page-content-wrap"}},[Array.isArray(e.pageContent.content)?e._l(e.pageContent.content,function(t,n){return a("ContentItem",{key:n,attrs:{item:t,lang:e.lang}})}):a("p",[e._v(e._s(e.pageContent.content))])],2)])},staticRenderFns:[]};var Q=a("VU/8")(X,G,!1,function(e){a("dPpd")},"data-v-514494ef",null);t.default=Q.exports}});
//# sourceMappingURL=0.4dc3f04be313d9537100.js.map