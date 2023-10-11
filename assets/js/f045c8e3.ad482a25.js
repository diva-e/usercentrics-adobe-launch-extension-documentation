"use strict";(self.webpackChunkusercentrics_extension_documentation=self.webpackChunkusercentrics_extension_documentation||[]).push([[3971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Data Processing Services (DPS)",sidebar_position:2,description:"How to manage default and custom DPS."},o="Data Processing Services (DPS)",s={unversionedId:"configuration/data-processing-services",id:"version-1.0.7/configuration/data-processing-services",title:"Data Processing Services (DPS)",description:"How to manage default and custom DPS.",source:"@site/versioned_docs/version-1.0.7/configuration/data-processing-services.md",sourceDirName:"configuration",slug:"/configuration/data-processing-services",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/configuration/data-processing-services",draft:!1,editUrl:"https://github.com/diva-e/usercentrics-adobe-launch-extension-documentation/edit/main/versioned_docs/version-1.0.7/configuration/data-processing-services.md",tags:[],version:"1.0.7",sidebarPosition:2,frontMatter:{sidebar_label:"Data Processing Services (DPS)",sidebar_position:2,description:"How to manage default and custom DPS."},sidebar:"documentationSidebar",previous:{title:"General",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/configuration/general"},next:{title:"Events",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/category/events"}},c={},l=[{value:"Default Data Processing Services",id:"default-data-processing-services",level:2},{value:"Custom Data Processing Services",id:"custom-data-processing-services",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-processing-services-dps"},"Data Processing Services (DPS)"),(0,r.kt)("h2",{id:"default-data-processing-services"},"Default Data Processing Services"),(0,r.kt)("p",null,"The extension comes with some predefined DPS that can be used. If you do not use predefined services, you have the option of deactivating them. Deactivation has the following effects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hides them in the Consent Given & Consent Revoked rules."),(0,r.kt)("li",{parentName:"ul"},"When using the ECID Opt-In framework, those will not be evaluated."),(0,r.kt)("li",{parentName:"ul"},"Generally, a deactivated DPS is not evaluated anywhere.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"extension configuration: default data processing services (DPS)",src:n(4910).Z,width:"1238",height:"382"})),(0,r.kt)("h2",{id:"custom-data-processing-services"},"Custom Data Processing Services"),(0,r.kt)("p",null,"If you use a DPS that is not listed in the default section (see above), you can configure them in this section. To clearly identify the DPS, the Service Name and the Template ID from your Usercentrics Admin Interface and (optionally) the information whether it is an Adobe product should be specified. If you have activated the ECID Opt-In, the consent will be applied automatically for the specific Adobe categories."),(0,r.kt)("p",null,"The Service Name is not used for evaluating consent, the Template-ID is the important data. The Service Name is only used to assign a human-readable name for the Template-ID inside the extension, e.g. when using it in a Consent Given condition. You may change the name at any point, the evaluations will keep working, since the Template-ID is used internally."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"extension configuration: custom data processing services (DPS)",src:n(3551).Z,width:"1583",height:"320"})))}p.isMDXComponent=!0},3551:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/custom_dps-00570e9a4c75a08058af3c617e176f04.png"},4910:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/default_dps-58a3e9282a409ddb7d38aba8d0b8f631.png"}}]);