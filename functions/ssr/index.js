var V=Object.create;var l=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var I=Object.getOwnPropertyNames;var L=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty;var A=(e,r)=>()=>(e&&(r=e(e=0)),r);var E=(e,r)=>{for(var t in r)l(e,t,{get:r[t],enumerable:!0})},y=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of I(r))!U.call(e,o)&&o!==t&&l(e,o,{get:()=>r[o],enumerable:!(n=q(r,o))||n.enumerable});return e};var c=(e,r,t)=>(t=e!=null?V(L(e)):{},y(r||!e||!e.__esModule?l(t,"default",{value:e,enumerable:!0}):t,e)),B=e=>y(l({},"__esModule",{value:!0}),e);var k={};E(k,{default:()=>Z});var j,Z,T=A(()=>{j=require("quasar/wrappers"),Z=(0,j.ssrMiddleware)(({app:e,resolve:r,render:t,serve:n})=>{e.get(r.urlPath("*"),(o,s)=>{s.setHeader("Content-Type","text/html"),t({req:o,res:s}).then(a=>{s.send(a)}).catch(a=>{a.url?a.code?s.redirect(a.code,a.url):s.redirect(a.url):a.code===404?s.status(404).send("404 | Page Not Found"):s.status(500).send("500 | Internal Server Error")})})})});var ae={};E(ae,{default:()=>se});module.exports=B(ae);var d=require("path"),F=require("vue/server-renderer"),D=c(require("./render-template.js")),p=c(require("./quasar.manifest.json")),M=c(require("./server/server-entry.js"));var m=c(require("express")),R=c(require("compression")),P=c(require("firebase-functions")),i=require("quasar/wrappers"),$=(0,i.ssrCreate)(()=>{let e=(0,m.default)();return e.disable("x-powered-by"),e.use((0,R.default)()),e});async function S({app:e,port:r,ssrHandler:t}){return{handler:P.https.onRequest(t)}}var de=(0,i.ssrClose)(({listenResult:e})=>e.close()),Q=1e3*60*60*24*30,b=(0,i.ssrServeStaticContent)((e,r)=>m.default.static(e,{maxAge:Q,...r})),z=/\.js$/,C=/\.css$/,J=/\.woff$/,K=/\.woff2$/,W=/\.gif$/,X=/\.jpe?g$/,Y=/\.png$/,g=(0,i.ssrRenderPreloadTag)(e=>z.test(e)===!0?`<link rel="modulepreload" href="${e}" crossorigin>`:C.test(e)===!0?`<link rel="stylesheet" href="${e}">`:J.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff" crossorigin>`:K.test(e)===!0?`<link rel="preload" href="${e}" as="font" type="font/woff2" crossorigin>`:W.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/gif">`:X.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/jpeg">`:Y.test(e)===!0?`<link rel="preload" href="${e}" as="image" type="image/png">`:"");function h(e){return Promise.all([Promise.resolve().then(()=>(T(),k))]).then(async r=>{let t=r.map(n=>n.default);for(let n=0;n<t.length;n++)try{await t[n](e)}catch(o){console.error("[Quasar SSR] middleware error:",o);return}})}var ee=process.env.PORT||3e3,re=/\/\//g,u="/",x=u==="/"?e=>e||"/":e=>e?(u+e).replace(re,"/"):u,_=__dirname,N=(0,d.join)(__dirname,"client");function O(){return(0,d.join)(N,...arguments)}function te(e){let r="",t=new Set;return e.forEach(n=>{let o=p.default[n];o!==void 0&&o.forEach(s=>{if(t.has(s)===!0)return;t.add(s);let a=(0,d.basename)(s);if(p.default[a]!==void 0)for(let w of p.default[a])r+=g(w),t.add(w);r+=g(s)})}),r}async function oe(e){let r=[];Object.assign(e,{_meta:{},onRendered:t=>{r.push(t)}});try{let t=await(0,M.default)(e),n=await(0,F.renderToString)(t,e);return r.forEach(o=>{o()}),typeof e.rendered=="function"&&e.rendered(),e._meta.runtimePageContent=n,e._meta.endingHeadTags+=te(e.modules),(0,D.default)(e)}catch(t){throw t}}var G=(e,r={})=>b(O(e),r),f={port:ee,resolve:{urlPath:x,root(){return(0,d.join)(_,...arguments)},public:O},publicPath:u,folders:{root:_,public:N},render:e=>oe(e),serve:{static:G}},v=$(f);f.app=v;v.use(x("/"),G("."));var H=()=>h(f),ne=(e,r,t)=>H().then(()=>v(e,r,t)),se=S({isReady:H,ssrHandler:ne,...f});0&&(module.exports={});
