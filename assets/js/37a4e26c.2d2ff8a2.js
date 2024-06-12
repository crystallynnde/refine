"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60098],{58860:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>b});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,b=u["".concat(s,".").concat(m)]||u[m]||f[m]||c;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(37953);var n=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"casbin",title:"Casbin","example-tags":["access-control"]},s=void 0,l={unversionedId:"examples/access-control/casbin",id:"examples/access-control/casbin",title:"Casbin",description:"Access Control is a complex topic with a variety of sophisticated solutions that provide numerous functions. This example demonstrates how to use Refine and Casbin to simplify access control management throughout your application.",source:"@site/docs/examples/access-control/casbin.md",sourceDirName:"examples/access-control",slug:"/examples/access-control/casbin",permalink:"/docs/examples/access-control/casbin",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/access-control/casbin.md",tags:[],version:"current",lastUpdatedBy:"Aviv Keller",lastUpdatedAt:1718200077,formattedLastUpdatedAt:"Jun 12, 2024",frontMatter:{id:"casbin",title:"Casbin","example-tags":["access-control"]},sidebar:"mainSidebar",previous:{title:"useCan",permalink:"/docs/authorization/hooks/use-can/"},next:{title:"Cerbos",permalink:"/docs/examples/access-control/cerbos"}},p={},u=[],f=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var m;const b={toc:u},y="wrapper";function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.yg)(y,c(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Access Control is a complex topic with a variety of sophisticated solutions that provide numerous functions. This example demonstrates how to use Refine and ",(0,n.yg)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin")," to simplify access control management throughout your application."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"Refer to the Refine Access Control Provider documentation for more information. \u2192")),(0,n.yg)(f,{path:"access-control-casbin",mdxType:"CodeSandboxExample"}))}d.isMDXComponent=!0}}]);