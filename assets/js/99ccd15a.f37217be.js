"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3664],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>c});var n=r(67294);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,a=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=p(r),c=l,y=k["".concat(s,".").concat(c)]||k[c]||u[c]||a;return r?n.createElement(y,i(i({ref:e},d),{},{components:r})):n.createElement(y,i({ref:e},d))}));function c(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=r.length,i=new Array(a);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},33821:(t,e,r)=>{r.r(e),r.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),l=(r(67294),r(3905));const a={},i="GET user trade history",o={type:"api",id:"get-user-trade-history",unversionedId:"get-user-trade-history",title:"GET user trade history",description:"",slug:"/get-user-trade-history",frontMatter:{},api:{description:"Provides trade history of the user in the chosen __network__ and __market__.",operationId:"UserFills",tags:["Trades"],parameters:[{name:"Authorization",in:"header",description:"Given token to user after successful login to the Dexpresso",required:!0,example:["Bearer **access_token**"],schema:{type:"string",format:"string"}},{name:"network",in:"query",description:"User's selected network name",required:!1,example:["zksyncv1","ethereum","zksyncv1_goerli","fantom","polygon"],schema:{type:"string",format:"string"}},{name:"market",in:"query",description:"Market's symbol",required:!1,example:["ETH-DAI","ETH-USDC"],schema:{type:"string",format:"string"}},{name:"page",in:"query",description:"pagination parameter of the API",required:!1,example:[1,3],schema:{type:"integer",format:"int32"}},{name:"per_page",in:"query",description:"number of orders per each page",required:!1,example:[10,20],schema:{type:"integer",format:"int32"}}],responses:{200:{description:"A json response containing information of requested markets",content:{"application/json":{schema:{type:"json",required:["fills"],properties:{fills:{type:"list",format:"list",properties:{schema:{type:"json",properties:{id:{format:"int32"},network:{format:"string"},price:{format:"float"},maker_user_id:{format:"string"},taker_user_id:{format:"string"},tx_hash:{format:"string"},amount:{format:"float"},maker_fee:{format:"float"},taker_fee:{format:"float"},created_at:{format:"Datetime"},maker_order_id:{format:"int32"},taker_order_id:{format:"int32"},type:{type:"string"},status:{format:"string"}}}}}}}}}},default:{description:"unexpected error",content:{"application/json":{schema:{type:"object",required:["code","message"],properties:{code:{type:"integer",format:"int32"},message:{type:"string"}}}}}}},method:"get",path:"/user/fills",servers:[{url:"https://api.dexpresso.exchange/api/v1"}],info:{version:"1.0.0",title:"Dexpresso API v1",license:{name:"MIT"}},postman:{name:"GET user trade history",description:{content:"Provides trade history of the user in the chosen __network__ and __market__.",type:"text/plain"},url:{path:["user","fills"],host:["{{baseUrl}}"],query:[{description:{content:"User's selected network name",type:"text/plain"},key:"network",value:"<string>"},{description:{content:"Market's symbol",type:"text/plain"},key:"market",value:"<string>"},{description:{content:"pagination parameter of the API",type:"text/plain"},key:"page",value:"<integer>"},{description:{content:"number of orders per each page",type:"text/plain"},key:"per_page",value:"<integer>"}],variable:[]},header:[{description:{content:"(Required) Given token to user after successful login to the Dexpresso",type:"text/plain"},key:"Authorization",value:"<string>"}],method:"GET"}},source:"@site/docs/API/api-v1.json",sourceDirName:".",permalink:"/api/get-user-trade-history",previous:{title:"GET latest trades",permalink:"/api/get-latest-trades"},next:{title:"SUBSCRIBE to a market",permalink:"/api/subscribe-to-a-market"}},s=[],p={toc:s};function d(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-user-trade-history"},"GET user trade history"),(0,l.kt)("p",null,"Provides trade history of the user in the chosen ",(0,l.kt)("strong",{parentName:"p"},"network")," and ",(0,l.kt)("strong",{parentName:"p"},"market"),"."),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"network"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"User's selected network name")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: zksyncv1,ethereum,zksyncv1_goerli,fantom,polygon"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"market"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Market's symbol")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: ETH-DAI,ETH-USDC"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"page"),(0,l.kt)("span",{style:{opacity:"0.6"}}," int32"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"pagination parameter of the API")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 1,3"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"per_page"),(0,l.kt)("span",{style:{opacity:"0.6"}}," int32"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"number of orders per each page")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 10,20"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Header Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"Authorization"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Given token to user after successful login to the Dexpresso")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: Bearer **access_token**"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"A json response containing information of requested markets"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"fills"),(0,l.kt)("span",{style:{opacity:"0.6"}}," list"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," json"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," int32"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"network"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"price"),(0,l.kt)("span",{style:{opacity:"0.6"}}," float"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"maker_user_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"taker_user_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"tx_hash"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"amount"),(0,l.kt)("span",{style:{opacity:"0.6"}}," float"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"maker_fee"),(0,l.kt)("span",{style:{opacity:"0.6"}}," float"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"taker_fee"),(0,l.kt)("span",{style:{opacity:"0.6"}}," float"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"created_at"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Datetime"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"maker_order_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," int32"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"taker_order_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," int32"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"status"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"default")),(0,l.kt)("div",null,(0,l.kt)("p",null,"unexpected error"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"code"),(0,l.kt)("span",{style:{opacity:"0.6"}}," int32"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"message"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))}d.isMDXComponent=!0}}]);