"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82486],{58860:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var r=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,f=u["".concat(p,".").concat(g)]||u[g]||c[g]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},21511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});t(37953);var r=t(58860);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={id:"handling-filters",title:"Handling Filters"},p=void 0,s={unversionedId:"advanced-tutorials/data-provider/handling-filters",id:"advanced-tutorials/data-provider/handling-filters",title:"Handling Filters",description:"Refine expects an array of type CrudFilters to filter results based on some field\u2019s values. So you can use more than one filter. Even the or operator can be used to combine multiple filters.",source:"@site/docs/advanced-tutorials/data-provider/handling-filters.md",sourceDirName:"advanced-tutorials/data-provider",slug:"/advanced-tutorials/data-provider/handling-filters",permalink:"/docs/advanced-tutorials/data-provider/handling-filters",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/data-provider/handling-filters.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716563799,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{id:"handling-filters",title:"Handling Filters"},sidebar:"mainSidebar",previous:{title:"Custom Layout",permalink:"/docs/advanced-tutorials/custom-layout"},next:{title:"Custom Form Validation",permalink:"/docs/advanced-tutorials/forms/custom-form-validation"}},d={},u=[{value:"CrudFilters",id:"crudfilters",level:2},{value:"LogicalFilters",id:"logicalfilters",level:2},{value:"ConditionalFilters",id:"conditionalfilters",level:2},{value:"Top level multiple conditional filters usage",id:"top-level-multiple-conditional-filters-usage",level:3},{value:"Combining Filters",id:"combining-filters",level:2},{value:"Handle filters in a data provider",id:"handle-filters-in-a-data-provider",level:2}],c=(g="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var g;const f={toc:u},y="wrapper";function m(e){var{components:n}=e,t=o(e,["components"]);return(0,r.yg)(y,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Refine")," expects an array of type ",(0,r.yg)("inlineCode",{parentName:"p"},"CrudFilters")," to filter results based on some field\u2019s values. So you can use more than one filter. Even the ",(0,r.yg)("inlineCode",{parentName:"p"},"or")," operator can be used to combine multiple filters."),(0,r.yg)("h2",{id:"crudfilters"},"CrudFilters"),(0,r.yg)(c,{id:"crudfilters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"CrudFilters")," is an array of objects with the following properties:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'// Supported operators:\ntype CrudOperators =\n  | "eq"\n  | "ne"\n  | "lt"\n  | "gt"\n  | "lte"\n  | "gte"\n  | "in"\n  | "nin"\n  | "contains"\n  | "ncontains"\n  | "containss"\n  | "ncontainss"\n  | "between"\n  | "nbetween"\n  | "null"\n  | "nnull"\n  | "or"\n  | "startswith"\n  | "nstartswith"\n  | "startswiths"\n  | "nstartswiths"\n  | "endswith"\n  | "nendswith"\n  | "endswiths"\n  | "nendswiths";\n\n// Supported filter types:\ntype LogicalFilter = {\n  field: string;\n  operator: Exclude<CrudOperators, "or">;\n  value: any;\n};\n\ntype ConditionalFilter = {\n  operator: "or";\n  value: LogicalFilter[];\n};\n\ntype CrudFilter = LogicalFilter | ConditionalFilter;\n//highlight-next-line\ntype CrudFilters = CrudFilter[];\n'))),(0,r.yg)("h2",{id:"logicalfilters"},"LogicalFilters"),(0,r.yg)(c,{id:"logicalfilters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"LogicalFilter")," works with ",(0,r.yg)("inlineCode",{parentName:"p"},"AND")," logic. For example, if you want to filter by ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," field and ",(0,r.yg)("inlineCode",{parentName:"p"},"age")," field, you can use the following filter:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'const filter = [\n  {\n    field: "name",\n    operator: "eq",\n    value: "John",\n  },\n  {\n    field: "age",\n    operator: "lt",\n    value: 30,\n  },\n];\n')),(0,r.yg)("p",null,"Here the query will look like: ",(0,r.yg)("inlineCode",{parentName:"p"},'"name" = "John" AND "age" < 30'))),(0,r.yg)("h2",{id:"conditionalfilters"},"ConditionalFilters"),(0,r.yg)(c,{id:"conditionalfilters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ConditionalFilter")," works ",(0,r.yg)("inlineCode",{parentName:"p"},"or")," / ",(0,r.yg)("inlineCode",{parentName:"p"},"and")," operator and expects an array of ",(0,r.yg)("inlineCode",{parentName:"p"},"LogicalFilter")," objects in the ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," property. For example, if you want to filter multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"OR")," by ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," field and ",(0,r.yg)("inlineCode",{parentName:"p"},"age")," field, you can use the following filter:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'const filter = [\n  {\n    operator: "or",\n    value: [\n      {\n        operator: "and",\n        value: [\n          {\n            field: "name",\n            operator: "eq",\n            value: "John Doe",\n          },\n          {\n            field: "age",\n            operator: "eq",\n            value: 30,\n          },\n        ],\n      },\n      {\n        operator: "and",\n        value: [\n          {\n            field: "name",\n            operator: "eq",\n            value: "JR.Doe",\n          },\n          {\n            field: "age",\n            operator: "eq",\n            value: 1,\n          },\n        ],\n      },\n    ],\n  },\n];\n')),(0,r.yg)("p",null,"Here the query will look like: ",(0,r.yg)("inlineCode",{parentName:"p"},'("name" = John Doe AND "age" = 30) OR ("name" = JR.Doe AND "age" = 1)'))),(0,r.yg)("h3",{id:"top-level-multiple-conditional-filters-usage"},"Top level multiple conditional filters usage"),(0,r.yg)(c,{id:"top-level-multiple-conditional-filters-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you create multiple Conditional Filters at the top level, you must add a key to it. Otherwise, you will get a warning in the console and your filters may not be combined correctly."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'const filter = [\n  {\n    key: "parent",\n    operator: "or",\n    value: [\n      {\n        operator: "and",\n        value: [\n          {\n            field: "name",\n            operator: "eq",\n            value: "John Doe",\n          },\n          {\n            field: "age",\n            operator: "eq",\n            value: 30,\n          },\n        ],\n      },\n      {\n        operator: "and",\n        value: [\n          {\n            field: "name",\n            operator: "eq",\n            value: "Jane Doe",\n          },\n          {\n            field: "age",\n            operator: "eq",\n            value: 28,\n          },\n        ],\n      },\n    ],\n  },\n  {\n    key: "children",\n    operator: "or",\n    value: [\n      {\n        operator: "and",\n        value: [\n          {\n            field: "name",\n            operator: "eq",\n            value: "JR John",\n          },\n          {\n            field: "age",\n            operator: "eq",\n            value: 1,\n          },\n        ],\n      },\n      {\n        operator: "and",\n        value: [\n          {\n            field: "name",\n            operator: "eq",\n            value: "JR Jane",\n          },\n          {\n            field: "age",\n            operator: "eq",\n            value: 2,\n          },\n        ],\n      },\n    ],\n  },\n];\n'))),(0,r.yg)("h2",{id:"combining-filters"},"Combining Filters"),(0,r.yg)(c,{id:"combining-filters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You can group multiple parameters in the same query using the logical filters or the conditional filters operators to filter results based on more than one criteria at the same time. This allows you to create more complex queries."),(0,r.yg)("p",null,"Example query: Find posts with 2 possible dates & a specific status"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'filter = [\n  {\n    operator: "or",\n    value: [\n      {\n        field: "createdAt",\n        operator: "eq",\n        value: "2022-01-01",\n      },\n      {\n        field: "createdAt",\n        operator: "eq",\n        value: "2022-01-02",\n      },\n    ],\n  },\n  {\n    operator: "eq",\n    field: "status",\n    value: "published",\n  },\n];\n')),(0,r.yg)("p",null,"Here the query will look like:",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},'"status" == "published" AND ("createdAt" == "2022-01-01" OR "createdAt" == "2022-01-02")'))),(0,r.yg)("h2",{id:"handle-filters-in-a-data-provider"},"Handle filters in a data provider"),(0,r.yg)(c,{id:"handle-filters-in-a-data-provider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="dataProvider.ts"',title:'"dataProvider.ts"'},'import { DataProvider } from "@refinedev/core";\n\nconst dataProvider = (): DataProvider => ({\n  getList: async ({ resource, pagination, filters, sorters }) => {\n    if (filters) {\n      filters.map((filter) => {\n        if (\n          filter.operator !== "or" &&\n          filter.operator !== "and" &&\n          "field" in filter\n        ) {\n          // Handle your logical filters here\n          // console.log(typeof filter); // LogicalFilter\n        } else {\n          // Handle your conditional filters here\n          // console.log(typeof filter); // ConditionalFilter\n        }\n      });\n    }\n  },\n});\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Data providers that support ",(0,r.yg)("inlineCode",{parentName:"p"},"or")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"and")," filtering logic are as follows:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/nestjsx-crud"},"NestJS CRUD")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi"},"Strapi")," - ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-v4"},"Strapi v4")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/supabase"},"Supabase")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/hasura"},"Hasura"))))))}m.isMDXComponent=!0}}]);