"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54074],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"strapi-v4",title:"Strapi-v4",sidebar_label:"Strapi-v4"},l=void 0,p={unversionedId:"advanced-tutorials/multi-tenancy/strapi-v4",id:"advanced-tutorials/multi-tenancy/strapi-v4",title:"Strapi-v4",description:"What is Multitenancy?",source:"@site/docs/advanced-tutorials/multi-tenancy/strapi.md",sourceDirName:"advanced-tutorials/multi-tenancy",slug:"/advanced-tutorials/multi-tenancy/strapi-v4",permalink:"/docs/advanced-tutorials/multi-tenancy/strapi-v4",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/multi-tenancy/strapi.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1703583733,formattedLastUpdatedAt:"Dec 26, 2023",frontMatter:{id:"strapi-v4",title:"Strapi-v4",sidebar_label:"Strapi-v4"},sidebar:"mainSidebar",previous:{title:"Appwrite",permalink:"/docs/advanced-tutorials/multi-tenancy/appwrite"},next:{title:"Mutation Mode",permalink:"/docs/advanced-tutorials/mutation-mode"}},d={},c=[{value:"What is Multitenancy?",id:"what-is-multitenancy",level:2},{value:"Introduction\u200b",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"AuthProvider",id:"authprovider",level:3},{value:"Create Collections",id:"create-collections",level:2},{value:"Create Resources and Routes",id:"create-resources-and-routes",level:2},{value:"Using the <code>tenant</code> at the other components",id:"using-the-tenant-at-the-other-components",level:2},{value:"Shop Select to Sider Component",id:"shop-select-to-sider-component",level:2},{value:"Product List Page",id:"product-list-page",level:2},{value:"Product Create Page",id:"product-create-page",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=u("InstallPackagesCommand"),h=u("CodeSandboxExample"),g={toc:c};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-multitenancy"},"What is Multitenancy?"),(0,r.kt)("p",null,"Multitenancy refers to a kind of architecture where a single instance of software runs on a server and serves multiple customers. In a multi-tenant environment, separate customers tap into the same hardware and data storage, creating a dedicated instance for each customer. Each tenant\u2019s data is isolated and remains invisible to others, but is running on the same server."),(0,r.kt)("h2",{id:"introduction"},"Introduction\u200b"),(0,r.kt)("p",null,"In this guide, we will create an application with you in the logic of Multi Tenant(Multitenancy). We can say multi tenant application is separate and manage multiple contents independently from each other in a single application."),(0,r.kt)("p",null,"We will make a Cake House application using ",(0,r.kt)("strong",{parentName:"p"},"Refine")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html"},"Strapi-v4"),". Our Cake House will consist of two separate stores and there will be special products for these stores. We will explain step by step how to manage these stores, products, and orders separately."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This guide has been prepared to assume you know the basics of ",(0,r.kt)("strong",{parentName:"p"},"Refine"),". If you haven't learned these basics yet, we recommend reading the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/introduction/index/"},"Tutorial"),".")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(m,{args:"@refinedev/strapi-v4",mdxType:"InstallPackagesCommand"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"authprovider"},"AuthProvider"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthBindings } from "@refinedev/core";\nimport { AuthHelper } from "@refinedev/strapi-v4";\nimport axios from "axios";\n\nexport const axiosInstance = axios.create();\n\nconst API_URL = "YOUR_API_URL";\nconst TOKEN_KEY = "strapi-jwt-token";\nconst strapiAuthHelper = AuthHelper(API_URL + "/api");\n\nexport const authProvider: AuthBindings = {\n  login: async ({ username, password }) => {\n    try {\n      const { data, status } = await strapiAuthHelper.login(username, password);\n      if (status === 200) {\n        localStorage.setItem(TOKEN_KEY, data.jwt);\n\n        // set header axios instance\n        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;\n\n        return {\n          success: true,\n        };\n      }\n    } catch (error: any) {\n      return {\n        success: false,\n        error: {\n          name: error.response.data.error.name,\n          message: error.response.data.error.message,\n        },\n      };\n    }\n\n    return {\n      success: false,\n      error: {\n        message: "Login failed",\n        name: "Invalid email or password",\n      },\n    };\n  },\n  logout: async () => {\n    localStorage.removeItem(TOKEN_KEY);\n    return {\n      success: true,\n      redirectTo: "/",\n    };\n  },\n  onError: async (error) => {\n    console.error(error);\n    return { error };\n  },\n  check: async () => {\n    const token = localStorage.getItem(TOKEN_KEY);\n    if (token) {\n      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;\n      return {\n        authenticated: true,\n      };\n    }\n\n    return {\n      authenticated: false,\n      error: {\n        message: "Check failed",\n        name: "Token not found",\n      },\n      logout: true,\n      redirectTo: "/login",\n    };\n  },\n  getPermissions: async () => null,\n  getIdentity: async () => {\n    const token = localStorage.getItem(TOKEN_KEY);\n    if (!token) {\n      return null;\n    }\n\n    const { data, status } = await strapiAuthHelper.me(token);\n    if (status === 200) {\n      const { id, username, email } = data;\n      return {\n        id,\n        username,\n        email,\n      };\n    }\n\n    return null;\n  },\n};\n'))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you need the population for the ",(0,r.kt)("inlineCode",{parentName:"p"},"/me")," request, you can use it like this in your ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const strapiAuthHelper = AuthHelper(API_URL + "/api");\n\nstrapiAuthHelper.me("token", {\n  meta: {\n    populate: ["role"],\n  },\n});\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine, Authenticated } from "@refinedev/core";\nimport { Layout, notificationProvider, ErrorComponent } from "@refinedev/antd";\nimport { DataProvider } from "@refinedev/strapi-v4";\nimport routerProvider, { NavigateToResource, CatchAllNavigate } from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport "@refinedev/antd/dist/reset.css";\n\n// highlight-next-line\nimport { authProvider, axiosInstance } from "./authProvider";\n\nconst API_URL = "YOUR_API_URL";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        //highlight-start\n        authProvider={authProvider}\n        dataProvider={DataProvider(API_URL + "/api", axiosInstance)}\n        //highlight-end\n        routerProvider={routerProvider}\n        notificationProvider={notificationProvider}\n      >\n        {/* ... */}\n      </Refine>\n    </BrowserRouter>\n  );\n};\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find detailed usage information and the source code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/multi-tenancy-strapi"},"here"),".")),(0,r.kt)("h2",{id:"create-collections"},"Create Collections"),(0,r.kt)("p",null,"We created three collections on Strapi as store, product, and order and added a relation between them. For detailed information on how to create a collection, you can check ",(0,r.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Stores")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title: Text"),(0,r.kt)("li",{parentName:"ul"},"Relation with Products"),(0,r.kt)("li",{parentName:"ul"},"Relation with Orders")),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/strapi/stores.png",alt:"stores"}),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Products")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title: Text"),(0,r.kt)("li",{parentName:"ul"},"Description: Text"),(0,r.kt)("li",{parentName:"ul"},"Image: Media"),(0,r.kt)("li",{parentName:"ul"},"Relation with Stores"),(0,r.kt)("li",{parentName:"ul"},"Relation with Orders")),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/strapi/products.png",alt:"products"}),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Orders")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Status: Text"),(0,r.kt)("li",{parentName:"ul"},"Customer Name: Text"),(0,r.kt)("li",{parentName:"ul"},"Customer Address: Text"),(0,r.kt)("li",{parentName:"ul"},"Quantity: Number"),(0,r.kt)("li",{parentName:"ul"},"Relation with Stores"),(0,r.kt)("li",{parentName:"ul"},"Relation with Product")),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/strapi/orders.png",alt:"orders"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now that we have completed the setup and our collections, we can now log in with the ",(0,r.kt)("strong",{parentName:"p"},"Refine")," and start the listing processes."),(0,r.kt)("h2",{id:"create-resources-and-routes"},"Create Resources and Routes"),(0,r.kt)("p",null,"To view the products and orders of two different stores separately, we need to filter by ",(0,r.kt)("inlineCode",{parentName:"p"},"storeId"),". We will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"storeId")," information in more than one place. For example, when creating a store-specific order. We will also add this as a prefix to the routes. (example.com/:tenant/products)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'const App: React.FC = () => {\n  // highlight-start\n  // When `domain.com` is entered, we set the default tenant to redirect `domain.com/name`.\n  const tenant = "1";\n  // highlight-end\n\n  return (\n    <BrowserRouter>\n      <GitHubBanner />\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          authProvider={authProvider}\n          dataProvider={DataProvider(API_URL + "/api", axiosInstance)}\n          routerProvider={routerProvider}\n          // highlight-start\n          // The path definition for `list`, `create`, `show`, `edit` pages is as follows and variables can be used as in `react-router`.\n          resources={[\n            {\n              name: "products",\n              list: "/:tenant/products",\n              meta: {\n                tenant,\n              },\n            },\n            {\n              name: "orders",\n              list: "/:tenant/orders",\n              create: "/:tenant/orders/create",\n              edit: "/:tenant/orders/edit/:id",\n              meta: {\n                tenant,\n              },\n            },\n          ]}\n          // highlight-end\n          notificationProvider={notificationProvider}\n          options={{\n            syncWithLocation: true,\n            warnWhenUnsavedChanges: true,\n          }}\n        >\n          <Routes>\n            {/* ... */}\n            <Route index element={<NavigateToResource resource="products" />} />\n            {/* highlight-start */}\n            {/* prefix `resources` paths. */}\n            <Route path="/:tenant">\n              {/* highlight-end */}\n              <Route path="products">\n                <Route index element={<ProductList />} />\n              </Route>\n\n              <Route path="orders">\n                <Route index element={<OrderList />} />\n                <Route path="create" element={<OrderCreate />} />\n                <Route path="edit/:id" element={<OrderEdit />} />\n              </Route>\n            </Route>\n          </Routes>\n          <UnsavedChangesNotifier />\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n')),(0,r.kt)("h2",{id:"using-the-tenant-at-the-other-components"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"tenant")," at the other components"),(0,r.kt)("p",null,"You may want to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"tenant")," within the project. This is easily get with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-parsed"},(0,r.kt)("inlineCode",{parentName:"a"},"useParsed"))," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useParsed } from "@refinedev/core";\n\nconst { params } = useParsed<{ tenant: string }>();\n\nconsole.log(params?.tenant); // { tenant: "Refine" }\n')),(0,r.kt)("h2",{id:"shop-select-to-sider-component"},"Shop Select to Sider Component"),(0,r.kt)("p",null,"We will create a select component in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," Menu where the user will select the stores. Let's create our select component first, then let's see how we can define it in the ",(0,r.kt)("strong",{parentName:"p"},"Refine")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="scr/components/select/StoreSelect.tsx"',title:'"scr/components/select/StoreSelect.tsx"'},'import { useSelect } from "@refinedev/antd";\nimport { Select } from "antd";\nimport { useGetToPath, useGo, useParsed } from "@refinedev/core";\n\nimport { IStore } from "interfaces";\n\ntype SelectProps = {\n  onSelect?: () => void;\n};\n\nexport const StoreSelect: React.FC<SelectProps> = ({ onSelect }) => {\n  // highlight-start\n  const getToPath = useGetToPath();\n  const go = useGo();\n  const { resource, action, params } = useParsed<{ tenant: string }>();\n  // highlight-end\n\n  const { selectProps: storeSelectProps } = useSelect<IStore>({\n    resource: "stores",\n    optionLabel: "title",\n    optionValue: "id",\n  });\n\n  if (!params?.tenant) {\n    return null;\n  }\n\n  return (\n    <Select\n      defaultValue={+params?.tenant}\n      style={{ width: 120 }}\n      // highlight-start\n      onChange={(tenant) =>\n        go({\n          to: getToPath({\n            resource,\n            action: action || "list",\n            meta: {\n              tenant,\n            },\n          }),\n        })\n      }\n      // highlight-end\n      onSelect={onSelect}\n    >\n      {storeSelectProps.options?.map(({ value, label }) => (\n        <Select.Option key={value} value={value}>\n          {label}\n        </Select.Option>\n      ))}\n    </Select>\n  );\n};\n')),(0,r.kt)("p",null,"Here we have created a select component. Then we fetch the store id and title we created in the Strapi database with ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect"),"."),(0,r.kt)("p",null,"Let's define the select component in the ",(0,r.kt)("strong",{parentName:"p"},"Refine")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Header"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/components/themed-layout#header"},"Check out how you can customize ",(0,r.kt)("inlineCode",{parentName:"a"},"Header")," \u2192")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header/index.tsx"',title:'"src/components/header/index.tsx"'},'import React from "react";\nimport { Layout as AntdLayout, Typography, Avatar, Space, theme } from "antd";\nimport { useActiveAuthProvider, useGetIdentity } from "@refinedev/core";\nimport { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";\n\n// highlight-next-**line**\nimport { StoreSelect } from "../select";\n\nconst { Text } = Typography;\nconst { useToken } = theme;\n\nexport const Header: React.FC<RefineThemedLayoutV2HeaderProps> = () => {\n  const { token } = useToken();\n\n  const authProvider = useActiveAuthProvider();\n  const { data: user } = useGetIdentity({\n    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),\n  });\n\n  return (\n    <AntdLayout.Header\n      style={{\n        backgroundColor: token.colorBgElevated,\n        display: "flex",\n        justifyContent: "flex-end",\n        alignItems: "center",\n        padding: "0px 24px",\n        height: "64px",\n        position: "sticky",\n        top: 0,\n        zIndex: 1,\n      }}\n    >\n      <Space\n        style={{\n          width: "100%",\n          display: "flex",\n          justifyContent: "space-between",\n        }}\n      >\n        {/* highlight-next-line */}\n        <StoreSelect />\n        <Space size="middle">\n          {user?.username && (\n            <>\n              <Text strong>{user.username}</Text>\n              <Avatar>R</Avatar>\n            </>\n          )}\n        </Space>\n      </Space>\n    </AntdLayout.Header>\n  );\n};\n')))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/strapi/header.jpg",alt:"header"})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"As you can see, you can create a store-specific product and order by selecting ",(0,r.kt)("inlineCode",{parentName:"em"},"tenant")," in the ",(0,r.kt)("inlineCode",{parentName:"em"},"Header")," component and choosing according to the ",(0,r.kt)("inlineCode",{parentName:"em"},"storeId")," information."))))),(0,r.kt)("h2",{id:"product-list-page"},"Product List Page"),(0,r.kt)("p",null,"Now we can list the products of the selected store according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"storeId")," information by filtering it. We can do this filtering by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"filters.permanent")," property within the ",(0,r.kt)("strong",{parentName:"p"},"Refine"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useSimpleList")," hook."),(0,r.kt)("p",null,"We separate the products of different stores by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"filters.permanent")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"storeId")," we get from the Store Context. So we can control more than single content in one application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'//highlight-start\nconst { params } = useParsed<{ tenant: string }>();\n//highlight-end\n\nconst { listProps } = useSimpleList<IProduct>({\n  //highlight-start\n  filters: {\n    permanent: [{ field: "stores][id]", operator: "eq", value: params?.tenant }],\n  },\n  //highlight-end\n});\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/pages/ProductList.tsx",title:"src/pages/ProductList.tsx"},'import { IResourceComponentsProps, HttpError, useParsed } from "@refinedev/core";\nimport { useSimpleList, useModalForm, CreateButton, List } from "@refinedev/antd";\nimport { List as AntdList } from "antd";\n\nimport { IProduct } from "interfaces";\n\nimport { ProductItem, CreateProduct, EditProduct } from "components/product";\n\nexport const ProductList: React.FC<IResourceComponentsProps> = () => {\n  const { params } = useParsed<{ tenant: string }>();\n  const { listProps } = useSimpleList<IProduct>({\n    permanentFilter: [\n      {\n        field: "stores][id]",\n        operator: "eq",\n        value: params?.tenant,\n      },\n    ],\n    metaData: { populate: ["image"] },\n  });\n\n  const {\n    modalProps: createModalProps,\n    formProps: createModalFormProps,\n    show: createShow,\n  } = useModalForm<IProduct, HttpError, IProduct>({\n    action: "create",\n    resource: "products",\n    redirect: false,\n  });\n\n  const {\n    modalProps: editModalProps,\n    formProps: editFormProps,\n    show: editShow,\n  } = useModalForm<IProduct, HttpError, IProduct>({\n    action: "edit",\n    metaData: { populate: ["image"] },\n    resource: "products",\n    redirect: false,\n  });\n\n  return (\n    <>\n      <List\n        headerProps={{\n          extra: <CreateButton onClick={() => createShow()} />,\n        }}\n      >\n        <AntdList\n          grid={{ gutter: 16, xs: 1 }}\n          style={{\n            justifyContent: "center",\n          }}\n          {...listProps}\n          renderItem={(item) => (\n            <AntdList.Item>\n              <ProductItem item={item} editShow={editShow} />\n            </AntdList.Item>\n          )}\n        />\n      </List>\n      <EditProduct modalProps={editModalProps} formProps={editFormProps} />\n      <CreateProduct modalProps={createModalProps} formProps={createModalFormProps} />\n    </>\n  );\n};\n')))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/strapi/filter-tenant.gif",alt:"Filter Tenant"}),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In this example, we used the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter.permanent")," object to filter the data, as Appwrite does not support multitenancy. However, you can do this from a single point by swizzle the data provider in your own RestApi."),(0,r.kt)("p",{parentName:"admonition"},"You can check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages#swizzle"},"swizzle data provider guide")," for more information."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resource.meta")," object is passed as ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," to ",(0,r.kt)("strong",{parentName:"p"},"all methods")," in the data providers. For this you have to swizzle the data provider."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/dataProvider.ts"',title:'"src/dataProvider.ts"'},'//...\nexport const dataProvider = (): Required<DataProvider> => {\n  //...\n  return {\n    getList: async ({ resource, pagination, filters, sorters, meta }) => {\n      // ...\n      console.log(meta.tenant); // { tenant: "Refine" }\n    },\n    getOne: async ({ resource, id, meta }) => {\n      // ...\n      console.log(meta.tenant); // { tenant: "Refine" }\n    },\n    // ...\n  };\n};\n'))),(0,r.kt)("h2",{id:"product-create-page"},"Product Create Page"),(0,r.kt)("p",null,"Now let's see how we can create store-specific products. Which store we choose in Sider, the product we will create will automatically be the product of the selected store."),(0,r.kt)("p",null,"By overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinish")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"form")," and sending the selected store information, we specify which store it will be the product of."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-start\nimport { useParsed } from "@refinedev/core";\nconst { params } = useParsed<{ tenant: string }>();\n//highlight-end\n\n<Form\n    {...formProps}\n    ...\n     //highlight-start\n    onFinish={(values) => {\n        return (\n            formProps.onFinish?.({\n                ...values,\n                stores: params?.tenant,\n            })\n        );\n    }}\n    //highlight-end\n>\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="CreateProduct"',title:'"CreateProduct"'},'import { useParsed } from "@refinedev/core";\nimport { mediaUploadMapper, getValueProps } from "@refinedev/strapi-v4";\nimport { Form, FormProps, Input, Upload, ModalProps, Modal } from "antd";\n\nimport { TOKEN_KEY, API_URL } from "../../constants";\n\ntype CreateProductProps = {\n  modalProps: ModalProps;\n  formProps: FormProps;\n};\n\nexport const CreateProduct: React.FC<CreateProductProps> = ({ modalProps, formProps }) => {\n  // highlight-next-line\n  const { params } = useParsed<{ tenant: string }>();\n\n  return (\n    <Modal {...modalProps}>\n      <Form\n        {...formProps}\n        layout="vertical"\n        initialValues={{\n          isActive: true,\n        }}\n        // highlight-start\n        onFinish={(values) => {\n          console.log("values", values);\n          formProps.onFinish?.(\n            mediaUploadMapper({\n              ...values,\n              stores: [params?.tenant],\n            }),\n          );\n        }}\n        // highlight-end\n      >\n        <Form.Item\n          label="Title"\n          name="title"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n        <Form.Item label="Description" name="description">\n          <Input />\n        </Form.Item>\n        <Form.Item label="Image">\n          <Form.Item\n            name="image"\n            valuePropName="fileList"\n            getValueProps={(data) => getValueProps(data, API_URL)}\n            noStyle\n            rules={[\n              {\n                required: true,\n              },\n            ]}\n          >\n            <Upload.Dragger\n              name="files"\n              action={`${API_URL}/api/upload`}\n              headers={{\n                Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,\n              }}\n              listType="picture"\n              multiple\n            >\n              <p className="ant-upload-text">Drag & drop a file in this area</p>\n            </Upload.Dragger>\n          </Form.Item>\n        </Form.Item>\n      </Form>\n    </Modal>\n  );\n};\n')))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/strapi/create-product.gif",alt:"Create Product"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this guide and in our example app, we talked about how we can build multitenancy apps with ",(0,r.kt)("strong",{parentName:"p"},"Refine"),". Developing a multitenancy application is quite simple with the flexible route infrastructure of ",(0,r.kt)("inlineCode",{parentName:"p"},"Refine"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("admonition",{title:"Demo Credentials",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Email: ",(0,r.kt)("inlineCode",{parentName:"p"},"demo@refine.dev"),(0,r.kt)("br",{parentName:"p"}),"\n","Password: ",(0,r.kt)("inlineCode",{parentName:"p"},"demodemo"))),(0,r.kt)(h,{path:"multi-tenancy-strapi",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);