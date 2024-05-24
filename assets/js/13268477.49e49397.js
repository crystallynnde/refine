"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31825],{58860:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>c});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"real-time",title:"Live / Realtime"},l=void 0,p={unversionedId:"advanced-tutorials/real-time",id:"version-3.xx.xx/advanced-tutorials/real-time",title:"Live / Realtime",description:"refine lets you add Realtime support to your app via the liveProvider prop for ``. It can be used to update and show data in Realtime throughout your app. refine remains agnostic in its API to allow different solutions(Ably, Socket.IO, Mercure, supabase, etc.) to be integrated.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/real-time.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/real-time",permalink:"/docs/3.xx.xx/advanced-tutorials/real-time",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/real-time.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716563799,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{id:"real-time",title:"Live / Realtime"},sidebar:"someSidebar",previous:{title:"CSV Import",permalink:"/docs/3.xx.xx/advanced-tutorials/import-export/csv-import"},next:{title:"Multi Level Menu",permalink:"/docs/3.xx.xx/advanced-tutorials/multi-level-menu/"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Adding <code>liveProvider</code>",id:"adding-liveprovider",level:2},{value:"Configuring <code>liveMode</code>",id:"configuring-livemode",level:2},{value:"Custom Subscriptions",id:"custom-subscriptions",level:2},{value:"Example",id:"example",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},m=u("DocThumbsUpDownFeedbackWidget"),g=u("InstallPackagesCommand"),y=u("CodeSandboxExample"),f={toc:c},h="wrapper";function b(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(h,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"refine")," lets you add Realtime support to your app via the ",(0,r.yg)("inlineCode",{parentName:"p"},"liveProvider")," prop for ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.yg)("inlineCode",{parentName:"a"},"<Refine>")),". It can be used to update and show data in Realtime throughout your app. ",(0,r.yg)("strong",{parentName:"p"},"refine")," remains agnostic in its API to allow different solutions(",(0,r.yg)("a",{parentName:"p",href:"https://ably.com"},"Ably"),", ",(0,r.yg)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO"),", ",(0,r.yg)("a",{parentName:"p",href:"https://mercure.rocks/"},"Mercure"),", ",(0,r.yg)("a",{parentName:"p",href:"https://supabase.com"},"supabase"),", etc.) to be integrated."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},"Refer to the Live Provider documentation for detailed information. ","\u2192")),(0,r.yg)("p",null,"We will be using ",(0,r.yg)("a",{parentName:"p",href:"https://ably.com"},"Ably")," in this guide to provide Realtime features."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)(m,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We need to install the Ably live provider package from ",(0,r.yg)("strong",{parentName:"p"},"refine"),"."),(0,r.yg)(g,{args:"@pankod/refine-ably",mdxType:"InstallPackagesCommand"}),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/refine-antd"},(0,r.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/refine-antd"},(0,r.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package."))),(0,r.yg)("h2",{id:"setup"},"Setup"),(0,r.yg)(m,{id:"setup",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Since we will need ",(0,r.yg)("inlineCode",{parentName:"p"},"apiKey")," from Ably, you must first register and get the key from ",(0,r.yg)("a",{parentName:"p",href:"https://ably.com"},"Ably"),"."),(0,r.yg)("p",null,"The app will have one resource: ",(0,r.yg)("strong",{parentName:"p"},"posts")," with ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/examples/base-antd/src/pages/posts"},"CRUD pages(list, create, edit, and show) similar to base example"),"."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"#example"},"You can also refer to CodeSandbox to see the final state of the app ","\u2192"))),(0,r.yg)("h2",{id:"adding-liveprovider"},"Adding ",(0,r.yg)("inlineCode",{parentName:"h2"},"liveProvider")),(0,r.yg)(m,{id:"adding-liveprovider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Firstly we create a Ably client for ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/ably"},(0,r.yg)("inlineCode",{parentName:"a"},"@pankod/refine-ably"))," live provider."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/utility/ablyClient.ts"',title:'"src/utility/ablyClient.ts"'},'import { Ably } from "@pankod/refine-ably";\n\nexport const ablyClient = new Ably.Realtime("your-api-key");\n')),(0,r.yg)("p",null,"Then pass ",(0,r.yg)("inlineCode",{parentName:"p"},"liveProvider")," from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/ably"},(0,r.yg)("inlineCode",{parentName:"a"},"@pankod/refine-ably"))," to ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\n//highlight-next-line\nimport { liveProvider } from "@pankod/refine-ably";\n\n//highlight-next-line\nimport { ablyClient } from "utility/ablyClient";\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n      //highlight-start\n      liveProvider={liveProvider(ablyClient)}\n      options={{ liveMode: "auto" }}\n      //highlight-end\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n          create: PostCreate,\n          edit: PostEdit,\n          show: PostShow,\n          canDelete: true,\n        },\n      ]}\n    />\n  );\n};\n\nexport default App;\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For live features to work automatically we added ",(0,r.yg)("inlineCode",{parentName:"p"},'liveMode: "auto"')," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"options")," prop."),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider#livemode"},"Refer to the Live Provider documentation for detailed information. ","\u2192"))),(0,r.yg)("br",null),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/real-time/real-time.gif",alt:"Realtime Demo"})),(0,r.yg)("h2",{id:"configuring-livemode"},"Configuring ",(0,r.yg)("inlineCode",{parentName:"h2"},"liveMode")),(0,r.yg)(m,{id:"configuring-livemode",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We may not want to make Realtime changes instantly in some cases. In these cases, we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"manual")," mode to prevent the data from changing instantly. Then we can handle the event manually."),(0,r.yg)("p",null,"For example in an edit page for a record, It would be better to handle Realtime data manually to prevent synchronization problems caused by multiple editing sources. We would not want the data changing while we are trying to edit a record."),(0,r.yg)("p",null,"We will be alerted about changes in an alert box on top of the form instead of changing the data instantly."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'// ...\n\nexport const PostEdit: React.FC = () => {\n  //highlight-start\n  const [deprecated, setDeprecated] = useState<\n    "deleted" | "updated" | undefined\n  >();\n  //highlight-end\n\n  const { formProps, saveButtonProps, queryResult } = useForm<IPost>({\n    //highlight-start\n    liveMode: "manual",\n    onLiveEvent: (event) => {\n      if (event.type === "deleted" || event.type === "updated") {\n        setDeprecated(event.type);\n      }\n    },\n    //highlight-end\n  });\n\n  //highlight-start\n  const handleRefresh = () => {\n    queryResult?.refetch();\n    setDeprecated(undefined);\n  };\n  //highlight-end\n\n  // ...\n\n  return (\n    <Edit /* ... */>\n      //highlight-start\n      {deprecated === "deleted" && (\n        <Alert\n          message="This post is deleted."\n          type="warning"\n          style={{ marginBottom: 20 }}\n          action={<ListButton size="small" />}\n        />\n      )}\n      {deprecated === "updated" && (\n        <Alert\n          message="This post is updated. Refresh to see changes."\n          type="warning"\n          style={{ marginBottom: 20 }}\n          action={<RefreshButton size="small" onClick={handleRefresh} />}\n        />\n      )}\n      //highlight-end\n      <Form {...formProps} layout="vertical">\n        // ....\n      </Form>\n    </Edit>\n  );\n};\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"We can also implement a similar thing on the show page."),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("a",{parentName:"p",href:"#example"},"Refer to the CodeSandbox example for detailed information. ","\u2192"))),(0,r.yg)("br",null),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/real-time/manual-mode.gif",alt:"Manual Mode Demo"})),(0,r.yg)("h2",{id:"custom-subscriptions"},"Custom Subscriptions"),(0,r.yg)(m,{id:"custom-subscriptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You can subscribe to events emitted within ",(0,r.yg)("strong",{parentName:"p"},"refine")," in any place in your app with ",(0,r.yg)("inlineCode",{parentName:"p"},"useSubscription"),"."),(0,r.yg)("p",null,"For example, we can subscribe to ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"create"))," event for ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"posts"))," resource and we can show a badge for the number of events in the sider menu."),(0,r.yg)("p",null,"Firstly, let's implement a custom sider like in ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/examples/customization/customSider"},"this example"),"."),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Custom Sider Menu"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/sider.tsx"',title:'"src/components/sider.tsx"'},'import React, { useState } from "react";\nimport {\n  useTitle,\n  ITreeMenu,\n  CanAccess,\n  useRouterContext,\n  useMenu,\n} from "@pankod/refine-core";\nimport { AntdLayout, Menu, Grid, Icons } from "@pankod/refine-antd";\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nexport const CustomSider: React.FC = () => {\n  const [collapsed, setCollapsed] = useState<boolean>(false);\n  const { Link } = useRouterContext();\n  const Title = useTitle();\n  const { menuItems, selectedKey } = useMenu();\n  const breakpoint = Grid.useBreakpoint();\n\n  const isMobile =\n    typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n  const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n    return tree.map((item: ITreeMenu) => {\n      const { icon, label, route, name, children, parentName } = item;\n\n      if (children.length > 0) {\n        return (\n          <SubMenu\n            key={route}\n            icon={icon ?? <Icons.UnorderedListOutlined />}\n            title={label}\n          >\n            {renderTreeView(children, selectedKey)}\n          </SubMenu>\n        );\n      }\n      const isSelected = route === selectedKey;\n      const isRoute = !(parentName !== undefined && children.length === 0);\n      return (\n        <CanAccess key={route} resource={name.toLowerCase()} action="list">\n          <Menu.Item\n            key={route}\n            style={{\n              fontWeight: isSelected ? "bold" : "normal",\n            }}\n            icon={icon ?? (isRoute && <Icons.UnorderedListOutlined />)}\n          >\n            <Link to={route}>{label}</Link>\n            {!collapsed && isSelected && <Icons.UnorderedListOutlined />}\n          </Menu.Item>\n        </CanAccess>\n      );\n    });\n  };\n\n  return (\n    <AntdLayout.Sider\n      collapsible\n      collapsedWidth={isMobile ? 0 : 80}\n      collapsed={collapsed}\n      breakpoint="lg"\n      onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n      style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n    >\n      <Title collapsed={collapsed} />\n      <Menu\n        selectedKeys={[selectedKey]}\n        mode="inline"\n        onClick={({ key }) => {\n          if (!breakpoint.lg) {\n            setCollapsed(true);\n          }\n        }}\n      >\n        {renderTreeView(menuItems, selectedKey)}\n      </Menu>\n    </AntdLayout.Sider>\n  );\n};\n'))),(0,r.yg)("p",null,"Now, let's add a badge for the number of create and update events for ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"posts"))," menu items."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport {\n  useTitle,\n  ITreeMenu,\n  CanAccess,\n  useMenu,\n  //highlight-start\n  useSubscription,\n  //highlight-end\n} from "@pankod/refine-core";\nimport {\n  AntdLayout,\n  Menu,\n  Grid,\n  Icons,\n  //highlight-start\n  Badge,\n  //highlight-end\n} from "@pankod/refine-antd";\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nexport const CustomSider: React.FC = () => {\n  const [subscriptionCount, setSubscriptionCount] = useState(0);\n  const [collapsed, setCollapsed] = useState<boolean>(false);\n  const { Link } = useRouterContext();\n  const Title = useTitle();\n  const { menuItems, selectedKey } = useMenu();\n  const breakpoint = Grid.useBreakpoint();\n\n  const isMobile =\n    typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n  //highlight-start\n  useSubscription({\n    channel: "resources/posts",\n    type: ["created", "updated"],\n    onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),\n  });\n  //highlight-end\n\n  const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n    return tree.map((item: ITreeMenu) => {\n      const { icon, label, route, name, children, parentName } = item;\n\n      if (children.length > 0) {\n        return (\n          <SubMenu\n            key={name}\n            icon={icon ?? <Icons.UnorderedListOutlined />}\n            title={label}\n          >\n            {renderTreeView(children, selectedKey)}\n          </SubMenu>\n        );\n      }\n      const isSelected = route === selectedKey;\n      const isRoute = !(parentName !== undefined && children.length === 0);\n      return (\n        <CanAccess key={route} resource={name.toLowerCase()} action="list">\n          <Menu.Item\n            key={route}\n            style={{\n              fontWeight: isSelected ? "bold" : "normal",\n            }}\n            icon={icon ?? (isRoute && <Icons.UnorderedListOutlined />)}\n          >\n            //highlight-start\n            <div>\n              <Link to={route}>{label}</Link>\n              {label === "Posts" && (\n                <Badge\n                  size="small"\n                  count={subscriptionCount}\n                  offset={[2, -15]}\n                />\n              )}\n            </div>\n            //highlight-end\n          </Menu.Item>\n        </CanAccess>\n      );\n    });\n  };\n\n  return (\n    <AntdLayout.Sider\n      collapsible\n      collapsedWidth={isMobile ? 0 : 80}\n      collapsed={collapsed}\n      breakpoint="lg"\n      onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n      style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n    >\n      <Title collapsed={collapsed} />\n      <Menu\n        selectedKeys={[selectedKey]}\n        mode="inline"\n        onClick={() => {\n          if (!breakpoint.lg) {\n            setCollapsed(true);\n          }\n\n          //highlight-start\n          if (key === "/posts") {\n            setSubscriptionCount(0);\n          }\n          //highlight-end\n        }}\n      >\n        {renderTreeView(menuItems, selectedKey)}\n      </Menu>\n    </AntdLayout.Sider>\n  );\n};\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"You can subscribe to specific ",(0,r.yg)("inlineCode",{parentName:"p"},"ids")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"params"),". For example, you can subscribe to ",(0,r.yg)("strong",{parentName:"p"},"deleted")," and ",(0,r.yg)("strong",{parentName:"p"},"updated")," events from ",(0,r.yg)("strong",{parentName:"p"},"posts")," resource with ",(0,r.yg)("strong",{parentName:"p"},"id")," ",(0,r.yg)("inlineCode",{parentName:"p"},"1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"2"),"."),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'useSubscription({\n  channel: "resources/posts",\n  type: ["deleted", "updated"],\n  //highlight-start\n  params: {\n    ids: ["1", "2"],\n  },\n  //highlight-end\n  onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),\n});\n'))),(0,r.yg)("br",null),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/real-time/custom-sider.gif",alt:"Custom Sider Demo"})),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(m,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(y,{path:"live-provider-ably",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);