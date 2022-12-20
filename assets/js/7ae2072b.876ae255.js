"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9656],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=l.createContext({}),p=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return l.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,u=c["".concat(s,".").concat(m)]||c[m]||k[m]||a;return n?l.createElement(u,o(o({ref:e},d),{},{components:n})):l.createElement(u,o({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4393:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const a={},o="GET markets info",i={type:"api",id:"get-markets-info",unversionedId:"get-markets-info",title:"GET markets info",description:"",slug:"/get-markets-info",frontMatter:{},api:{description:"This endpoint provides information regarding __one__, __many__, or __all__ markets available in a __single__ network.",operationId:"MarketsInfo",tags:["Markets"],parameters:[{name:"network",in:"query",description:"User's selected network name",required:!0,example:["ethereum"," zksyncv1_goerli"," polygon"],schema:{type:"string",format:"string"}},{name:"markets",in:"query",description:"Comma-seperated list of markets",required:!1,example:["ETH-DAI,ETH-USDC"],schema:{type:"string",format:"string"}}],responses:{200:{description:"A json response containing information of requested markets",content:{"application/json":{schema:{type:"json",required:["info"],properties:{info:{type:"list",format:"list",properties:{network:{format:"string"},base_asset_name:{format:"string"},quote_asset_name:{format:"string"},display_name:{format:"string"},price_precision:{format:"int32"},base_asset:{type:"json",format:"json",properties:{address:{format:"string"},symbol:{format:"string"},decimals:{format:"int32"}}},quote_asset:{type:"json",format:"json",properties:{address:{format:"string"},symbol:{format:"string"},decimals:{format:"int32"}}}}}}}}}},default:{description:"unexpected error",content:{"application/json":{schema:{type:"object",required:["code","message"],properties:{code:{type:"integer",format:"int32"},message:{type:"string"}}}}}}},method:"get",path:"/markets/info",servers:[{url:"https://api.dexpresso.exchange/api/v1"}],info:{version:"1.0.0",title:"Dexpresso API v1",license:{name:"MIT"}},postman:{name:"GET markets info",description:{content:"This endpoint provides information regarding __one__, __many__, or __all__ markets available in a __single__ network.",type:"text/plain"},url:{path:["markets","info"],host:["{{baseUrl}}"],query:[{description:{content:"(Required) User's selected network name",type:"text/plain"},key:"network",value:"<string>"},{description:{content:"Comma-seperated list of markets",type:"text/plain"},key:"markets",value:"<string>"}],variable:[]},method:"GET"}},source:"@site/docs/API/api-v1.json",sourceDirName:".",permalink:"/api/get-markets-info",next:{title:"GET markets config",permalink:"/api/get-markets-config"}},s=[],p={toc:s};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-markets-info"},"GET markets info"),(0,r.kt)("p",null,"This endpoint provides information regarding ",(0,r.kt)("strong",{parentName:"p"},"one"),", ",(0,r.kt)("strong",{parentName:"p"},"many"),", or ",(0,r.kt)("strong",{parentName:"p"},"all")," markets available in a ",(0,r.kt)("strong",{parentName:"p"},"single")," network."),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"network"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"User's selected network name")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: ethereum, zksyncv1_goerli, polygon"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"markets"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Comma-seperated list of markets")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: ETH-DAI,ETH-USDC"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"A json response containing information of requested markets"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"info"),(0,r.kt)("span",{style:{opacity:"0.6"}}," list"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"network"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"base_asset_name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"quote_asset_name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"display_name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"price_precision"),(0,r.kt)("span",{style:{opacity:"0.6"}}," int32"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"base_asset"),(0,r.kt)("span",{style:{opacity:"0.6"}}," json"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"address"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"symbol"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"decimals"),(0,r.kt)("span",{style:{opacity:"0.6"}}," int32"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"quote_asset"),(0,r.kt)("span",{style:{opacity:"0.6"}}," json"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"address"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"symbol"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"decimals"),(0,r.kt)("span",{style:{opacity:"0.6"}}," int32")))))))))))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"default")),(0,r.kt)("div",null,(0,r.kt)("p",null,"unexpected error"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"code"),(0,r.kt)("span",{style:{opacity:"0.6"}}," int32"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"message"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))}d.isMDXComponent=!0}}]);