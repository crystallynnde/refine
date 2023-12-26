"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,g=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>l});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={},s=void 0,p={unversionedId:"data/hooks/use-list/pagination-live-preview",id:"data/hooks/use-list/pagination-live-preview",title:"pagination-live-preview",description:"",source:"@site/docs/data/hooks/use-list/pagination-live-preview.md",sourceDirName:"data/hooks/use-list",slug:"/data/hooks/use-list/pagination-live-preview",permalink:"/docs/data/hooks/use-list/pagination-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/hooks/use-list/pagination-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1703575639,formattedLastUpdatedAt:"Dec 26, 2023",frontMatter:{}},u={},l=[],d={toc:l};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n  padding: 4px;\n  background: white;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"300px",hideCode:!0},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useState } from "react";\nimport { useList, HttpError } from "@refinedev/core";\n\ninterface IProduct {\n  id: number;\n  name: string;\n  material: string;\n}\n\nconst ProductList: React.FC = () => {\n  //highlight-start\n  const [current, setCurrent] = useState(1);\n  const [pageSize, setPageSize] = useState(5);\n  //highlight-end\n\n  const { data, isLoading, isError } = useList<IProduct, HttpError>({\n    resource: "products",\n    //highlight-start\n    pagination: {\n      current,\n      pageSize,\n    },\n    //highlight-end\n  });\n\n  const products = data?.data ?? [];\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (isError) {\n    return <div>Something went wrong!</div>;\n  }\n\n  return (\n    <div>\n      {/* highlight-start */}\n      <button onClick={() => setCurrent((prev) => prev - 1)}>{"<"}</button>\n      <span> page: {current} </span>\n      <button onClick={() => setCurrent((prev) => prev + 1)}>{">"}</button>\n      <span> per page: </span>\n      <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>\n        {[5, 10, 20].map((size) => (\n          <option key={size} value={size}>\n            {size}\n          </option>\n        ))}\n      </select>\n      {/* highlight-end */}\n\n      <ul>\n        {products.map((product) => (\n          <li key={product.id}>\n            <h4>\n              {product.name} - ({product.material})\n            </h4>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n};\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: "products",\n      list: ProductList,\n    },\n  ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))}f.isMDXComponent=!0}}]);