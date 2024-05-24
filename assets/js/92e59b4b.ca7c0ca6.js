"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9287],{58860:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>f});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>p,metadata:()=>s,toc:()=>d});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={id:"custom-layout",title:"Custom Layout"},c=void 0,s={unversionedId:"advanced-tutorials/custom-layout",id:"version-3.xx.xx/advanced-tutorials/custom-layout",title:"Custom Layout",description:"You can create custom layouts using ` and ` components.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/custom-layout.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/custom-layout",permalink:"/docs/3.xx.xx/advanced-tutorials/custom-layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/custom-layout.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716563799,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{id:"custom-layout",title:"Custom Layout"},sidebar:"someSidebar",previous:{title:"Azure AD Login",permalink:"/docs/3.xx.xx/advanced-tutorials/auth/azure-ad"},next:{title:"Custom Pages",permalink:"/docs/3.xx.xx/advanced-tutorials/custom-pages"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},m=u("DocThumbsUpDownFeedbackWidget"),f=u("CodeSandboxExample"),y={toc:d},g="wrapper";function x(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(g,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You can create custom layouts using ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.yg)("inlineCode",{parentName:"a"},"<Refine>"))," and ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},(0,r.yg)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," components."),(0,r.yg)("p",null,"Both of these components can accept the listed props for customization. ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.yg)("inlineCode",{parentName:"a"},"<Refine>"))," is for global customization and the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},(0,r.yg)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," is for local."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#layout"},(0,r.yg)("inlineCode",{parentName:"a"},"Layout"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#sider"},(0,r.yg)("inlineCode",{parentName:"a"},"Sider"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#footer"},(0,r.yg)("inlineCode",{parentName:"a"},"Footer"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#header"},(0,r.yg)("inlineCode",{parentName:"a"},"Header"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#offlayoutarea"},(0,r.yg)("inlineCode",{parentName:"a"},"OffLayoutArea"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#title"},(0,r.yg)("inlineCode",{parentName:"a"},"Title")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/refine-antd"},(0,r.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/refine-antd"},(0,r.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package.")),(0,r.yg)("p",null,"Let's look at an example of modifying the default layout to have a top menu layout."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/App.tsx"',title:'"/src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n  AntdLayout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { PostList } from "pages/posts";\n// highlight-next-line\nimport { CustomSider } from "components";\n\nconst { Link } = routerProvider;\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(API_URL)}\n      // highlight-start\n      Layout={({ children, Footer, OffLayoutArea }) => (\n        <AntdLayout>\n          <AntdLayout.Header>\n            <CustomSider />\n          </AntdLayout.Header>\n          <AntdLayout.Content>\n            <AntdLayout.Content>\n              <div style={{ padding: 24, minHeight: 360 }}>{children}</div>\n            </AntdLayout.Content>\n            {Footer && <Footer />}\n          </AntdLayout.Content>\n          {OffLayoutArea && <OffLayoutArea />}\n        </AntdLayout>\n      )}\n      // highlight-end\n      Title={() => (\n        <Link to="/" style={{ float: "left", marginRight: "10px" }}>\n          <img src="/refine.svg" alt="Refine" />\n        </Link>\n      )}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n    />\n  );\n};\n\nexport default App;\n')),(0,r.yg)("p",null,"Here, we override the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#title"},(0,r.yg)("inlineCode",{parentName:"a"},"<Title>"))," and ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#layout"},(0,r.yg)("inlineCode",{parentName:"a"},"<Layout>"))," components. When we override ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#layout"},(0,r.yg)("inlineCode",{parentName:"a"},"<Layout>")),", we put the ",(0,r.yg)("inlineCode",{parentName:"p"},"<CustomSider>")," (instead of the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#sider"},(0,r.yg)("inlineCode",{parentName:"a"},"<Sider>"))," that was provided to ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#layout"},(0,r.yg)("inlineCode",{parentName:"a"},"<Layout>"))," to render it by default) on top of ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/layout/"},(0,r.yg)("inlineCode",{parentName:"a"},"<AntdLayout>")),"."),(0,r.yg)("p",null,"So, we just provided a custom ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#sider"},(0,r.yg)("inlineCode",{parentName:"a"},"<Sider>")),". Here's our custom sider that looks horizontal, instead of the default vertical one:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/components/sider/index.tsx"',title:'"/src/components/sider/index.tsx"'},'import { useTitle, useMenu } from "@pankod/refine-core";\nimport { Menu } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nconst { Link } = routerProvider;\n\nexport const CustomSider: React.FC = () => {\n  // highlight-start\n  const Title = useTitle();\n  const { menuItems, selectedKey } = useMenu();\n  // highlight-end\n\n  return (\n    <>\n      // highlight-start\n      {Title && <Title collapsed={false} />}\n      <Menu selectedKeys={[selectedKey]} mode="horizontal">\n        {menuItems.map(({ icon, route, label }) => (\n          <Menu.Item key={route} icon={icon}>\n            <Link to={route ?? ""}>{label}</Link>\n          </Menu.Item>\n        ))}\n      </Menu>\n      // highlight-end\n    </>\n  );\n};\n')),(0,r.yg)("p",null,"Here, we use ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/ui/useMenu"},(0,r.yg)("inlineCode",{parentName:"a"},"useMenu"))," hook to get the list of current resources and print it."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"By default, ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#sider"},(0,r.yg)("inlineCode",{parentName:"a"},"<Sider>"))," is responsible for rendering ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#title"},(0,r.yg)("inlineCode",{parentName:"a"},"<Title>")),". It gets this component (configured by ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.yg)("inlineCode",{parentName:"a"},"<Refine>"))," and/or ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},(0,r.yg)("inlineCode",{parentName:"a"},"<LayoutWrapper>")),") by ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/refine/useTitle"},(0,r.yg)("inlineCode",{parentName:"a"},"useTitle"))," hook.")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This example demonstrated how to configure a global layout. To learn how to use global layout in custom pages and make local modifications per page, ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},"refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," docs. ","\u2192")))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(m,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Here's how it looks in the end:"),(0,r.yg)(f,{path:"customization-top-menu-layout",mdxType:"CodeSandboxExample"})))}x.isMDXComponent=!0}}]);