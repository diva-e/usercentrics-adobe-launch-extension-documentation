"use strict";(self.webpackChunkusercentrics_extension_documentation=self.webpackChunkusercentrics_extension_documentation||[]).push([[8207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Prolog",sidebar_position:1},i="Prolog",s={unversionedId:"prolog",id:"version-1.0.6/prolog",title:"Prolog",description:"Please Note",source:"@site/versioned_docs/version-1.0.6/prolog.md",sourceDirName:".",slug:"/prolog",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/1.0.6/prolog",draft:!1,editUrl:"https://github.com/diva-e/usercentrics-adobe-launch-extension-documentation/edit/main/versioned_docs/version-1.0.6/prolog.md",tags:[],version:"1.0.6",sidebarPosition:1,frontMatter:{sidebar_label:"Prolog",sidebar_position:1},sidebar:"documentationSidebar",next:{title:"Installation",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/1.0.6/installation/"}},c={},l=[{value:"Please Note",id:"please-note",level:2},{value:"Smart Data Protector",id:"smart-data-protector",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prolog"},"Prolog"),(0,o.kt)("h2",{id:"please-note"},"Please Note"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This extension supports the Usercentrics CMP Version 2 only."),(0,o.kt)("li",{parentName:"ul"},"Please ensure you have an account plan that supports the \u201cWindow Event Name\u201c function."),(0,o.kt)("li",{parentName:"ul"},"If you plan to handle the consent management somewhere else and not via the extension, you can also use the extension to simply implement the Usercentrics CMP Version 2 on your website. For example, it is possible to implement Usercentrics directly on the website: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.usercentrics.com/#/direct-implementation-guide"},"https://docs.usercentrics.com/#/direct-implementation-guide"))),(0,o.kt)("h2",{id:"smart-data-protector"},"Smart Data Protector"),(0,o.kt)("p",null,"The Smart Data Protector ist currently not part of this extension. If you plan to implement this feature, please ensure the Usercentrics ScriptTag is implemented directly on the website before Adobe Tag Manager is executed. This is to prevent the CMP from not being exposed to the Customer and Tag Manager being blocked due to Smart Data Protector. You can find more information here: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.usercentrics.com/#/smart-data-protector"},"https://docs.usercentrics.com/#/smart-data-protector")))}d.isMDXComponent=!0}}]);