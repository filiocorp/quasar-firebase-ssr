import{c as g,e as r,f as t,a as c,h as p,j as h,D as d,g as f,I as m,J as y,K as x,R as _}from"./index.ee33439d.js";import{h as v}from"./render.d5108125.js";var C=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:s}}=f(),e=r(h,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(r(d,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const i=c(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:s.screen.height;return n.styleFn(a,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":s.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":s.screen.height-a+"px"}}),l=c(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:l.value,style:i.value},v(o.default))}}),P="/assets/quasar-logo-vertical.55e9c854.svg";const Q=_("img",{alt:"Quasar logo",src:P,style:{width:"200px",height:"200px"}},null,-1),B=Object.assign({name:"IndexPage"},{__name:"IndexPage",setup(n){return(o,s)=>(m(),y(C,{class:"flex flex-center"},{default:x(()=>[Q]),_:1}))}});export{B as default};
