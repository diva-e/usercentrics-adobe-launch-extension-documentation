"use strict";(self.webpackChunkusercentrics_extension_documentation=self.webpackChunkusercentrics_extension_documentation||[]).push([[9008],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Load Usercentrics",sidebar_position:1,description:""},a="Load Usercentrics",c={unversionedId:"actions/load-usercentrics",id:"version-1.0.6/actions/load-usercentrics",title:"Load Usercentrics",description:"",source:"@site/versioned_docs/version-1.0.6/actions/load-usercentrics.md",sourceDirName:"actions",slug:"/actions/load-usercentrics",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/actions/load-usercentrics",draft:!1,editUrl:"https://github.com/diva-e/usercentrics-adobe-launch-extension-documentation/edit/main/versioned_docs/version-1.0.6/actions/load-usercentrics.md",tags:[],version:"1.0.6",sidebarPosition:1,frontMatter:{sidebar_label:"Load Usercentrics",sidebar_position:1,description:""},sidebar:"documentationSidebar",previous:{title:"Actions",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/category/actions"},next:{title:"Reload Website",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/actions/reload-website"}},s={},d=[],l={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"load-usercentrics"},"Load Usercentrics"),(0,o.kt)("p",null,"Loads the Usercentrics (V2) CMP and applies the Usercentrics consents to the ECID opt-in framework if enabled over the extension\u2019s configuration page. "),(0,o.kt)("admonition",{title:"Loading order",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},'To ensure that the CMP is loaded first, the order should be set to 1 for the "Library Loaded (Page Top)" event.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"load_cmp.png",src:n(482).Z,width:"730",height:"662"})))}p.isMDXComponent=!0},482:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/load_cmp-831ade02e85fc5f4bde86b65f6489318.png"}}]);