"use strict";(self.webpackChunkusercentrics_extension_documentation=self.webpackChunkusercentrics_extension_documentation||[]).push([[1576],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),f=r,g=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return t?i.createElement(g,a(a({ref:n},l),{},{components:t})):i.createElement(g,a({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"General",sidebar_position:1,description:"Required and optional settings."},a="Configuration",s={unversionedId:"configuration/general",id:"configuration/general",title:"Configuration",description:"Required and optional settings.",source:"@site/docs/configuration/general.md",sourceDirName:"configuration",slug:"/configuration/general",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/next/configuration/general",draft:!1,editUrl:"https://github.com/diva-e/usercentrics-adobe-launch-extension-documentation/edit/main/docs/configuration/general.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"General",sidebar_position:1,description:"Required and optional settings."},sidebar:"documentationSidebar",previous:{title:"Configuration",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/next/category/configuration"},next:{title:"Data Processing Services (DPS)",permalink:"/usercentrics-adobe-launch-extension-documentation/docs/next/configuration/data-processing-services"}},c={},d=[{value:"Required Settings",id:"required-settings",level:2},{value:"Settings-ID",id:"settings-id",level:3},{value:"Window Event Name",id:"window-event-name",level:3},{value:"Optional Settings",id:"optional-settings",level:2},{value:"Experience Cloud ID Service Opt-In",id:"experience-cloud-id-service-opt-in",level:3},{value:"Predefined Data Processing Service",id:"predefined-data-processing-service",level:3}],l={toc:d},u="wrapper";function p(e){let{components:n,...o}=e;return(0,r.kt)(u,(0,i.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("h2",{id:"required-settings"},"Required Settings"),(0,r.kt)("h3",{id:"settings-id"},"Settings-ID"),(0,r.kt)("p",null,"Settings-ID of the relevant Usercentrics account. Can be found in the Usercentrics Admin Interface. This is needed to build the script-tag that will be placed on your website to launch usercentrics."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"extension configuration page",src:t(7901).Z,width:"1235",height:"598"})),(0,r.kt)("h3",{id:"window-event-name"},"Window Event Name"),(0,r.kt)("p",null,"Window Event Name of Usercentrics will be used to identify consent status. You must create a new window event in the Usercentrics Admin Interface under 'Implementation' -> 'Data Layer & Events' -> 'Window Event'. The extension will use it as a \u201cTrigger\u201d for any changes that the end-users make to their consent settings. If you already defined a Window Event Name within Usercentrics, you can also use that one. However, we recommend creating an own Window Event Name, just for the Usercentrics Launch Extension. "),(0,r.kt)("h2",{id:"optional-settings"},"Optional Settings"),(0,r.kt)("h3",{id:"experience-cloud-id-service-opt-in"},"Experience Cloud ID Service Opt-In"),(0,r.kt)("p",null,'This allows you to use the Experience Cloud ID Service Opt-In feature, which handles consent for specific Adobe products. You can find a list of all default supported Adobe products in the Default section of Data Processing Services in the extension\u2019s settings page. Please keep in mind that this will only work if the "Experience Cloud ID Service"-Extension is installed and Opt-In is enabled.'),(0,r.kt)("h3",{id:"predefined-data-processing-service"},"Predefined Data Processing Service"),(0,r.kt)("p",null,"We already have defined some of the Adobe Products if you plan to use the Experience Cloud ID Service Opt-In. Those are: Adobe Advertising Cloud (DSP, Search), Adobe Analytics, Adobe Audience Manager & Adobe Target."))}p.isMDXComponent=!0},7901:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/configuration-53f773cf0683561210536e2c2c825b1d.png"}}]);