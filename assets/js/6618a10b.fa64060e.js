"use strict";(self.webpackChunkusercentrics_extension_documentation=self.webpackChunkusercentrics_extension_documentation||[]).push([[6586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(v,a(a({ref:t},l),{},{components:n})):o.createElement(v,a({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Consent Revoked",sidebar_position:2,description:""},a="Consent Revoked",s={unversionedId:"condition/consent-revoked",id:"version-1.0.7/condition/consent-revoked",title:"Consent Revoked",description:"",source:"@site/versioned_docs/version-1.0.7/condition/consent-revoked.md",sourceDirName:"condition",slug:"/condition/consent-revoked",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/condition/consent-revoked",draft:!1,editUrl:"https://github.com/diva-e/usercentrics-adobe-launch-extension-documentation/edit/main/versioned_docs/version-1.0.7/condition/consent-revoked.md",tags:[],version:"1.0.7",sidebarPosition:2,frontMatter:{sidebar_label:"Consent Revoked",sidebar_position:2,description:""},sidebar:"documentationSidebar",previous:{title:"Consent Given",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/condition/consent-given"},next:{title:"Actions",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/category/actions"}},c={},d=[],l={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"consent-revoked"},"Consent Revoked"),(0,r.kt)("p",null,"Based on the mappings configured in the extension\u2019s configuration page, the condition evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),' if at least one of the selected services has changed its consent to "consent revoked".'),(0,r.kt)("admonition",{title:"Please Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There is a distinction by which event this condition was triggered.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Case 1"),': The condition was triggered by the "Usercentrics: Consent Update" event. In this case, the consent must actually change from "Given" to "Revoked" so that the condition evaluates to ',(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Case 2"),': The condition is triggered by any other event. If this is the case, it is only checked whether the current consent status is set to "Revoked" so that the condition evaluates to ',(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"consent_revoked.png",src:n(2331).Z,width:"908",height:"631"})))}p.isMDXComponent=!0},2331:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/consent_revoked-e78feb6cd637326770f0b2ea31f07756.png"}}]);