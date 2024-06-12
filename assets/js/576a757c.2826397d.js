"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3422],{18216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>g,toc:()=>m});a(37953);var n=a(58860),r=a(82433),o=a(47191);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const d={id:"graphql",title:"GraphQL"},s=void 0,g={unversionedId:"advanced-tutorials/data-provider/graphql",id:"version-3.xx.xx/advanced-tutorials/data-provider/graphql",title:"GraphQL",description:"refine graphql and strapi-graphql data provider built with gql-query-builder and graphql-request is made for GraphQL implementation. It aims to create a query dynamically with gql-query-builder and send requests with graphql-request.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/data-provider/graphql.md",sourceDirName:"advanced-tutorials/data-provider",slug:"/advanced-tutorials/data-provider/graphql",permalink:"/docs/3.xx.xx/advanced-tutorials/data-provider/graphql",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/data-provider/graphql.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Aviv Keller",lastUpdatedAt:1718200077,formattedLastUpdatedAt:"Jun 12, 2024",frontMatter:{id:"graphql",title:"GraphQL"},sidebar:"someSidebar",previous:{title:"Appwrite",permalink:"/docs/3.xx.xx/advanced-tutorials/data-provider/appwrite"},next:{title:"Handling Filters",permalink:"/docs/3.xx.xx/advanced-tutorials/data-provider/handling-filters"}},u={},m=[{value:"GraphQL Query Builder",id:"graphql-query-builder",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Create Collections",id:"create-collections",level:2},{value:"List Page",id:"list-page",level:2},{value:"Edit Page",id:"edit-page",level:2},{value:"Show Page",id:"show-page",level:2},{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},y=c("DocThumbsUpDownFeedbackWidget"),h=c("InstallPackagesCommand"),x=c("CodeSandboxExample"),f={toc:m},N="wrapper";function b(e){var{components:t}=e,a=p(e,["components"]);return(0,n.yg)(N,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},f,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"refine")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/graphql"},"graphql")," and ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/strapi-graphql"},"strapi-graphql")," data provider built with ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"gql-query-builder")," and ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-request"},"graphql-request")," is made for GraphQL implementation. It aims to create a query dynamically with ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"gql-query-builder")," and send requests with ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-request"},"graphql-request"),"."),(0,n.yg)("h2",{id:"graphql-query-builder"},"GraphQL Query Builder"),(0,n.yg)(y,{id:"graphql-query-builder",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"GraphQL Query Builder")," allows us to build queries and mutations. The ",(0,n.yg)("inlineCode",{parentName:"p"},"getList"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"getMany"),", and, ",(0,n.yg)("inlineCode",{parentName:"p"},"getOne")," methods in our ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," generate a query to send a request. On the other hand, the ",(0,n.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"createMany"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"update"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"updateMany"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"deleteOne"),", and, ",(0,n.yg)("inlineCode",{parentName:"p"},"deleteMany")," methods generate a mutation to send a request."),(0,n.yg)("p",null,"In order to create a GraphQL query, our ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," has to take some options, such as specifying which fields will come in response, we pass these options to our ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," methods with ",(0,n.yg)("inlineCode",{parentName:"p"},"MetaDataQuery"),"."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder#options"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"MetaDataQuery")," properties for detailed usage. ","\u2192")),(0,n.yg)("p",null,"Hooks and components that support ",(0,n.yg)("inlineCode",{parentName:"p"},"MetaDataQuery"),":"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Supported data hooks"),(0,n.yg)("th",{parentName:"tr",align:null},"Supported other hooks"),(0,n.yg)("th",{parentName:"tr",align:null},"Supported components"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdate/"},(0,n.yg)("inlineCode",{parentName:"a"},"useUpdate")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm"},(0,n.yg)("inlineCode",{parentName:"a"},"useForm")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/delete-button"},(0,n.yg)("inlineCode",{parentName:"a"},"DeleteButton")," ","\u2192"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdateMany/"},(0,n.yg)("inlineCode",{parentName:"a"},"useUpdateMany")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useModalForm"},(0,n.yg)("inlineCode",{parentName:"a"},"useModalForm")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/refresh-button"},(0,n.yg)("inlineCode",{parentName:"a"},"RefreshButton")," ","\u2192"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},(0,n.yg)("inlineCode",{parentName:"a"},"useDelete")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useDrawerForm"},(0,n.yg)("inlineCode",{parentName:"a"},"useDrawerForm")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDeleteMany/"},(0,n.yg)("inlineCode",{parentName:"a"},"useDeleteMany")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useStepsForm"},(0,n.yg)("inlineCode",{parentName:"a"},"useStepsForm")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreate/"},(0,n.yg)("inlineCode",{parentName:"a"},"useCreate")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useTable"},(0,n.yg)("inlineCode",{parentName:"a"},"useTable")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreateMany/"},(0,n.yg)("inlineCode",{parentName:"a"},"useCreateMany")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useEditableTable"},(0,n.yg)("inlineCode",{parentName:"a"},"useEditableTable")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useList/"},(0,n.yg)("inlineCode",{parentName:"a"},"useList")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/list/useSimpleList"},(0,n.yg)("inlineCode",{parentName:"a"},"useSimpleList")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useOne/"},(0,n.yg)("inlineCode",{parentName:"a"},"useOne")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/show/useShow"},(0,n.yg)("inlineCode",{parentName:"a"},"useShow")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useMany/"},(0,n.yg)("inlineCode",{parentName:"a"},"useMany")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useExport"},(0,n.yg)("inlineCode",{parentName:"a"},"useExport")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustom/"},(0,n.yg)("inlineCode",{parentName:"a"},"useCustom")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/field/useCheckboxGroup"},(0,n.yg)("inlineCode",{parentName:"a"},"useCheckboxGroup")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useSelect/"},(0,n.yg)("inlineCode",{parentName:"a"},"useSelect")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/field/useRadioGroup"},(0,n.yg)("inlineCode",{parentName:"a"},"useRadioGroup")," ","\u2192")),(0,n.yg)("td",{parentName:"tr",align:null}))))),(0,n.yg)("h2",{id:"setup"},"Setup"),(0,n.yg)(y,{id:"setup",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(h,{args:"@pankod/refine-core @pankod/refine-antd @pankod/refine-strapi-graphql",mdxType:"InstallPackagesCommand"}),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/refine-antd"},(0,n.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks or helpers imported from the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/refine-antd"},(0,n.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package.")),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"We used ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/strapi-graphql"},"strapi-graphql")," server for this guide. You can customize your data provider for your own GraphQL server."))),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(y,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"To activate the data provider in ",(0,n.yg)("inlineCode",{parentName:"p"},"@pankod/refine-strapi-graphql"),", we have to pass the API address with ",(0,n.yg)("inlineCode",{parentName:"p"},"GraphQLClient"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\n// highlight-next-line\nimport dataProvider, { GraphQLClient } from "@pankod/refine-strapi-graphql";\n\nconst client = new GraphQLClient("API_URL");\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      // highlight-next-line\n      dataProvider={dataProvider(client)}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n    />\n  );\n};\n')),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"With ",(0,n.yg)("inlineCode",{parentName:"p"},"GraphQLClient")," you can do things like add headers for authentication. On the other hand, you can send a request with your query."))),(0,n.yg)("h2",{id:"create-collections"},"Create Collections"),(0,n.yg)(y,{id:"create-collections",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"We created two collections on ",(0,n.yg)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," as ",(0,n.yg)("inlineCode",{parentName:"p"},"posts")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"categories")," and added a relation between them. For detailed information on how to create a collection, you can check ",(0,n.yg)("a",{parentName:"p",href:"https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html"},"here"),"."),(0,n.yg)("p",null,"You can see the fields of the collections we created as below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="post"',title:'"post"'},'{\n  "id": 1,\n  "title": "Eius ea autem.",\n  "content": "Explicabo nihil delectus. Nam aliquid sunt numquam...",\n  "category": {\n    "id": 24,\n    "title": "Placeat fuga"\n  }\n}\n'))),(0,n.yg)("h2",{id:"list-page"},"List Page"),(0,n.yg)(y,{id:"list-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"When sending the request, we must specify which fields will come, so we send ",(0,n.yg)("inlineCode",{parentName:"p"},"fields")," in ",(0,n.yg)("inlineCode",{parentName:"p"},"metaData")," to hooks that we will fetch data from."),(0,n.yg)(r.A,{defaultValue:"usage",values:[{label:"usage",value:"usage"},{label:"output",value:"output"}],mdxType:"Tabs"},(0,n.yg)(o.A,{value:"usage",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'export const PostList: React.FC<IResourceComponentsProps> = () => {\n  const { tableProps, sorter } = useTable<IPost>({\n    initialSorter: [\n      {\n        field: "id",\n        order: "asc",\n      },\n    ],\n    // highlight-start\n    metaData: {\n      fields: [\n        "id",\n        "title",\n        {\n          category: ["title"],\n        },\n      ],\n    },\n    // highlight-end\n  });\n\n  const { selectProps } = useSelect<ICategory>({\n    resource: "categories",\n    // highlight-start\n    metaData: {\n      fields: ["id", "title"],\n    },\n    // highlight-end\n  });\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column\n          dataIndex="id"\n          title="ID"\n          sorter={{ multiple: 2 }}\n          defaultSortOrder={getDefaultSortOrder("id", sorter)}\n        />\n        <Table.Column\n          key="title"\n          dataIndex="title"\n          title="Title"\n          sorter={{ multiple: 1 }}\n        />\n        <Table.Column<IPost>\n          dataIndex="category"\n          title="Category"\n          filterDropdown={(props) => (\n            <FilterDropdown {...props}>\n              <Select\n                style={{ minWidth: 200 }}\n                mode="multiple"\n                placeholder="Select Category"\n                {...selectProps}\n              />\n            </FilterDropdown>\n          )}\n          render={(_, record) => record.category.title}\n        />\n        <Table.Column<IPost>\n          title="Actions"\n          dataIndex="actions"\n          render={(_, record) => (\n            <Space>\n              <EditButton hideText size="small" recordItemId={record.id} />\n              <ShowButton hideText size="small" recordItemId={record.id} />\n              <DeleteButton hideText size="small" recordItemId={record.id} />\n            </Space>\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n'))),(0,n.yg)(o.A,{value:"output",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"\nquery ($sort: String, $where: JSON, $start: Int, $limit: Int) {\n    posts (sort: $sort, where: $where, start: $start, limit: $limit) {\n        id,\n        title,\n        category {\n            title\n        }\n    }\n}\n")))),(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/graphql-list.png",alt:"GraphQL list page"})),(0,n.yg)("h2",{id:"edit-page"},"Edit Page"),(0,n.yg)(y,{id:"edit-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"On the edit page, ",(0,n.yg)("inlineCode",{parentName:"p"},"useForm")," sends a request with the record id to fill the form. ",(0,n.yg)("inlineCode",{parentName:"p"},"fields")," must be sent in ",(0,n.yg)("inlineCode",{parentName:"p"},"metaData")," to determine which fields will come in this request."),(0,n.yg)(r.A,{defaultValue:"usage",values:[{label:"usage",value:"usage"},{label:"output",value:"output"}],mdxType:"Tabs"},(0,n.yg)(o.A,{value:"usage",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'export const PostEdit: React.FC<IResourceComponentsProps> = () => {\n  const { formProps, saveButtonProps, queryResult } = useForm<\n    IPost,\n    HttpError,\n    IPost\n  >({\n    // highlight-start\n    metaData: {\n      fields: [\n        "id",\n        "title",\n        {\n          category: ["id", "title"],\n        },\n        "content",\n      ],\n    },\n    // highlight-end\n  });\n\n  const postData = queryResult?.data?.data;\n  const { selectProps: categorySelectProps } = useSelect<ICategory>({\n    resource: "categories",\n    defaultValue: postData?.category.id,\n    // highlight-start\n    metaData: {\n      fields: ["id", "title"],\n    },\n    // highlight-end\n  });\n\n  return (\n    <Edit saveButtonProps={saveButtonProps}>\n      <Form\n        {...formProps}\n        layout="vertical"\n        onFinish={(values) =>\n          formProps.onFinish?.({\n            ...values,\n            category: values.category.id,\n          } as any)\n        }\n      >\n        <Form.Item\n          label="Title"\n          name="title"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n        <Form.Item\n          label="Category"\n          name={["category", "id"]}\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Select {...categorySelectProps} />\n        </Form.Item>\n        <Form.Item\n          label="Content"\n          name="content"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <MDEditor data-color-mode="light" />\n        </Form.Item>\n      </Form>\n    </Edit>\n  );\n};\n')),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The create page is largely the same as the edit page, there is no need to pass ",(0,n.yg)("inlineCode",{parentName:"p"},"metaData")," to ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm"},(0,n.yg)("inlineCode",{parentName:"a"},"useForm"))," on the create page. If you want to use the created record as a response after the request, you can pass the ",(0,n.yg)("inlineCode",{parentName:"p"},"fields")," with ",(0,n.yg)("inlineCode",{parentName:"p"},"metaData"),"."))),(0,n.yg)(o.A,{value:"output",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"mutation ($input: updatePostInput) {\n    updatePost (input: $input) {\n        post  {\n            id\n        }\n    }\n}\n")))),(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/graphql-edit.png",alt:"GraphQL edit page"})),(0,n.yg)("h2",{id:"show-page"},"Show Page"),(0,n.yg)(y,{id:"show-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"<Show>")," component includes the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/refresh-button"},(0,n.yg)("inlineCode",{parentName:"a"},"<RefreshButton>"))," by default. We can pass ",(0,n.yg)("inlineCode",{parentName:"p"},"refetch")," method of ",(0,n.yg)("inlineCode",{parentName:"p"},"queryResult")," to its ",(0,n.yg)("inlineCode",{parentName:"p"},"onClick"),". This method repeats the last request made by the query. So it refreshes the data that is shown in page."),(0,n.yg)(r.A,{defaultValue:"usage",values:[{label:"usage",value:"usage"},{label:"output",value:"output"}],mdxType:"Tabs"},(0,n.yg)(o.A,{value:"usage",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'export const PostShow: React.FC<IResourceComponentsProps> = () => {\n  const { queryResult } = useShow<IPost>({\n    resource: "posts",\n    // highlight-start\n    metaData: {\n      fields: [\n        "id",\n        "title",\n        {\n          category: ["title"],\n        },\n        "content",\n      ],\n    },\n    // highlight-end\n  });\n  const { data, isLoading } = queryResult;\n  const record = data?.data;\n\n  return (\n    <Show\n      isLoading={isLoading}\n      // highlight-next-line\n      headerProps={{\n        extra: <RefreshButton onClick={() => queryResult.refetch()} />,\n      }}\n    >\n      <Title level={5}>Id</Title>\n      <Text>{record?.id}</Text>\n\n      <Title level={5}>Title</Title>\n      <Text>{record?.title}</Text>\n\n      <Title level={5}>Category</Title>\n      <Text>{record?.category.title}</Text>\n\n      <Title level={5}>Content</Title>\n      <MarkdownField value={record?.content} />\n    </Show>\n  );\n};\n'))),(0,n.yg)(o.A,{value:"output",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"mutation ($input: updatePostInput) {\n    updatePost (input: $input) {\n        post  {\n            id\n        }\n    }\n}\n")))),(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/graphql-show.png",alt:"GraphQL show page"})),(0,n.yg)("h2",{id:"example"},"Example"),(0,n.yg)(y,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(x,{path:"--branch v3 data-provider-strapi-graphql",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);