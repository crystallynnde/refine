"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75487],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},77650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>m});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",slug:"framer-motion-react-animations",authors:"joel_ezimorah",tags:["css","react","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-01-framer-text-animations/social.png",hide_table_of_contents:!1},c=void 0,s={permalink:"/blog/framer-motion-react-animations",source:"@site/blog/2022-09-01-framer-text-animations.md",title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",date:"2022-09-01T00:00:00.000Z",formattedDate:"September 1, 2022",tags:[{label:"css",permalink:"/blog/tags/css"},{label:"react",permalink:"/blog/tags/react"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:8.235,hasTruncateMarker:!0,authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],frontMatter:{title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",slug:"framer-motion-react-animations",authors:"joel_ezimorah",tags:["css","react","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-01-framer-text-animations/social.png",hide_table_of_contents:!1},prevItem:{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui"},nextItem:{title:"Using Google Lighthouse to improve app performance",permalink:"/blog/lighthouse-google-chrome"},relatedPosts:[{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.775,date:"2022-07-21T00:00:00.000Z"},{title:"How to use Material UI Modal",description:"We'll learn how to use Material UI Modal to create a popup window that can display important information or facilitate user input.",permalink:"/blog/material-ui-modal",formattedDate:"May 9, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:11.15,date:"2023-05-09T00:00:00.000Z"},{title:"An Intro to server components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",permalink:"/blog/react-server-components",formattedDate:"July 9, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.405,date:"2023-07-09T00:00:00.000Z"}],authorPosts:[]},p={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2}],u={toc:m};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"When a tool like Framer Motion is available, why write many lines of CSS code to create an animation? Web applications look more exciting and beautiful when they are animated."),(0,n.kt)("p",null,"Many developers avoid adding animation to their web applications since animation codes can be rigorous to write. However, with Framer Motion, you can execute animations with only a few lines of code. This external library in React.js makes animation incredibly simple, allowing the developer to concentrate on other aspects of the project."),(0,n.kt)("p",null,"In this article, we'll examine Framer Motion's functionality, installation process, and usability by using it to animate text and images."))}f.isMDXComponent=!0}}]);