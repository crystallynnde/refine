"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>c,default:()=>x,frontMatter:()=>m,metadata:()=>k,toc:()=>f});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={toc:[]};function p(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},l,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=420px",live:!0,url:"http://localhost:3000/posts",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { IResourceComponentsProps } from "@pankod/refine-core";\n\nimport {\n    List,\n    Table,\n    Form,\n    Space,\n    Button,\n    SaveButton,\n    EditButton,\n    Input,\n    TextField,\n    useEditableTable,\n} from "@pankod/refine-antd";\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n\nconst PostList: React.FC<IResourceComponentsProps> = () => {\n    const {\n        tableProps,\n        formProps,\n        isEditing,\n        setId: setEditId,\n        saveButtonProps,\n        cancelButtonProps,\n        editButtonProps,\n    } = useEditableTable<IPost>();\n\n    return (\n        <List>\n            <Form {...formProps}>\n                <Table\n                    {...tableProps}\n                    rowKey="id"\n                    onRow={(record) => ({\n                        // eslint-disable-next-line\n                        onClick: (event: any) => {\n                            if (event.target.nodeName === "TD") {\n                                setEditId && setEditId(record.id);\n                            }\n                        },\n                    })}\n                >\n                    <Table.Column dataIndex="id" title="ID" />\n                    <Table.Column<IPost>\n                        dataIndex="title"\n                        title="Title"\n                        render={(value, record) => {\n                            if (isEditing(record.id)) {\n                                return (\n                                    <Form.Item\n                                        name="title"\n                                        style={{ margin: 0 }}\n                                    >\n                                        <Input />\n                                    </Form.Item>\n                                );\n                            }\n                            return <TextField value={value} />;\n                        }}\n                    />\n                    <Table.Column<IPost>\n                        title="Actions"\n                        dataIndex="actions"\n                        render={(_, record) => {\n                            if (isEditing(record.id)) {\n                                return (\n                                    <Space>\n                                        <SaveButton\n                                            {...saveButtonProps}\n                                            hideText\n                                            size="small"\n                                        />\n                                        <Button\n                                            {...cancelButtonProps}\n                                            size="small"\n                                        >\n                                            Cancel\n                                        </Button>\n                                    </Space>\n                                );\n                            }\n                            return (\n                                <EditButton\n                                    {...editButtonProps(record.id)}\n                                    hideText\n                                    size="small"\n                                />\n                            );\n                        }}\n                    />\n                </Table>\n            </Form>\n        </List>\n    );\n};\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "posts",\n            list: PostList,\n        },\n    ],\n});\n\nrender(<RefineAntdDemo />);\n')))}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}p.isMDXComponent=!0;const m={id:"useEditableTable",title:"useEditableTable",source:"packages/antd/src/hooks/table/useTable"},c=void 0,k={unversionedId:"api-reference/antd/hooks/table/useEditableTable",id:"version-3.xx.xx/api-reference/antd/hooks/table/useEditableTable",title:"useEditableTable",description:"useEditeableTable allows you to implement the edit feature on the ` with ease. Return properties that can be used on Ant Desing's  and ` components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/table/useEditableTable.md",sourceDirName:"api-reference/antd/hooks/table",slug:"/api-reference/antd/hooks/table/useEditableTable",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/table/useEditableTable",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/table/useEditableTable.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ege Ayt\u0131n",lastUpdatedAt:1704725284,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{id:"useEditableTable",title:"useEditableTable",source:"packages/antd/src/hooks/table/useTable"},sidebar:"someSidebar",previous:{title:"useSimpleList",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/list/useSimpleList"},next:{title:"useTable",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/table/useTable"}},b={},f=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Editing with buttons",id:"editing-with-buttons",level:3},{value:"Editing by clicking to row",id:"editing-by-clicking-to-row",level:3},{value:"Properties",id:"properties",level:2},{value:"Return Values",id:"return-values",level:2},{value:"<code>cancelButtonProps</code>",id:"cancelbuttonprops",level:3},{value:"<code>editButtonProps</code>",id:"editbuttonprops",level:3},{value:"<code>isEditing</code>",id:"isediting",level:3},{value:"API",id:"api",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values-1",level:3},{value:"Example",id:"example",level:2}],h=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},g=h("PropsTable"),N=h("CodeSandboxExample"),y={toc:f};function x(e){var{components:t}=e,n=u(e,["components"]);return(0,a.kt)("wrapper",d(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useEditeableTable")," allows you to implement the edit feature on the ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/table/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"<Table>"))," with ease. Return properties that can be used on Ant Desing's ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/table/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"<Table>"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"<Form>"))," components."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"useEditeableTable")," hook is extended from ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useTable"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable"))," hook from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/antd"},(0,a.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. This means that you can use all the features of ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useTable"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable"))," hook.")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"Here is an example of how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"useEditableTable")," hook. We will explain in detail the usage of the hook in the following sections:"),(0,a.kt)(p,{mdxType:"LivePreview"}),(0,a.kt)("h3",{id:"editing-with-buttons"},"Editing with buttons"),(0,a.kt)("p",null,"Let's say that we want to make the ",(0,a.kt)("inlineCode",{parentName:"p"},"Post")," data where we show the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," values a listing page:"),(0,a.kt)("p",null,"This time, to add the edit feature, we have to cover the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Table>")," component with a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Form>")," component and pass the properties coming from ",(0,a.kt)("inlineCode",{parentName:"p"},"useEditableTable")," to the corresponding components:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/pages/posts/list.tsx"',title:'"/pages/posts/list.tsx"'},'import {\n  List,\n  Table,\n  useEditableTable,\n  Form,\n  TextField,\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  // highlight-next-line\n  const { tableProps, formProps } = useEditableTable<IPost>();\n\n  return (\n    <List>\n      // highlight-start\n      <Form {...formProps}>\n        <Table {...tableProps} rowKey="id">\n          <Table.Column dataIndex="id" title="ID" />\n          <Table.Column dataIndex="title" title="Title" />\n        </Table>\n      </Form>\n      // highlight-end\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n')),(0,a.kt)("p",null,"Now lets add a column for edit buttons:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/pages/posts/list.tsx"',title:'"/pages/posts/list.tsx"'},'import {\n  List,\n  Table,\n  Form,\n  // highlight-start\n  Space,\n  Button,\n  SaveButton,\n  EditButton,\n  // highlight-end\n  useEditableTable,\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  const {\n    tableProps,\n    formProps,\n    isEditing,\n    // highlight-start\n    saveButtonProps,\n    cancelButtonProps,\n    editButtonProps,\n    // highlight-end\n  } = useEditableTable<IPost>();\n\n  return (\n    <List>\n      <Form {...formProps}>\n        <Table {...tableProps} rowKey="id">\n          <Table.Column key="id" dataIndex="id" title="ID" />\n          <Table.Column key="title" dataIndex="title" title="Title" />\n          <Table.Column<IPost>\n            title="Actions"\n            dataIndex="actions"\n            key="actions"\n            // highlight-start\n            render={(_text, record) => {\n              if (isEditing(record.id)) {\n                return (\n                  <Space>\n                    <SaveButton {...saveButtonProps} size="small" />\n                    <Button {...cancelButtonProps} size="small">\n                      Cancel\n                    </Button>\n                  </Space>\n                );\n              }\n              return (\n                <Space>\n                  <EditButton {...editButtonProps(record.id)} size="small" />\n                </Space>\n              );\n            }}\n            // highlight-end\n          />\n        </Table>\n      </Form>\n    </List>\n  );\n};\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"isEditing")," function that returns from ",(0,a.kt)("inlineCode",{parentName:"p"},"useEditableTable")," lets us check whether a line is currently in edit mode or not.")),(0,a.kt)("p",null,"For now, our post is not editable yet. If a post is being edited, we must show editable columns inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Form.Item>")," using conditional rendering:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/pages/posts/list.tsx"',title:'"/pages/posts/list.tsx"'},'import {\n  List,\n  Table,\n  Form,\n  Space,\n  Button,\n  SaveButton,\n  EditButton,\n  // highlight-start\n  Input,\n  TextField,\n  // highlight-end\n  useEditableTable,\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  const {\n    tableProps,\n    formProps,\n    isEditing,\n    saveButtonProps,\n    cancelButtonProps,\n    editButtonProps,\n  } = useEditableTable<IPost>();\n\n  return (\n    <List>\n      <Form {...formProps}>\n        <Table {...tableProps} rowKey="id">\n          <Table.Column key="id" dataIndex="id" title="ID" />\n          <Table.Column<IPost>\n            key="title"\n            dataIndex="title"\n            title="Title"\n            // highlight-start\n            render={(value, record) => {\n              if (isEditing(record.id)) {\n                return (\n                  <Form.Item name="title" style={{ margin: 0 }}>\n                    <Input />\n                  </Form.Item>\n                );\n              }\n              return <TextField value={value} />;\n            }}\n            // highlight-end\n          />\n          <Table.Column<IPost>\n            title="Actions"\n            dataIndex="actions"\n            key="actions"\n            render={(_text, record) => {\n              if (isEditing(record.id)) {\n                return (\n                  <Space>\n                    <SaveButton {...saveButtonProps} size="small" />\n                    <Button {...cancelButtonProps} size="small">\n                      Cancel\n                    </Button>\n                  </Space>\n                );\n              }\n              return (\n                <Space>\n                  <EditButton {...editButtonProps(record.id)} size="small" />\n                </Space>\n              );\n            }}\n          />\n        </Table>\n      </Form>\n    </List>\n  );\n};\n')),(0,a.kt)("p",null,"With this, when a user clicks on the edit button, ",(0,a.kt)("inlineCode",{parentName:"p"},"isEditing(lineId)")," will turn ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," for the relevant line. This will also cause ",(0,a.kt)("inlineCode",{parentName:"p"},"<TextInput>")," to show up on the line that's being edited. When the editing is finished, a new value can be saved by clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"<SaveButton>"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"By giving the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Table.Column>")," component a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," property, you can render the value in that column however you want.\nRefer to ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/table/#Column"},(0,a.kt)("inlineCode",{parentName:"a"},"<Table.Column>"))," documentation for more information.")),(0,a.kt)("h3",{id:"editing-by-clicking-to-row"},"Editing by clicking to row"),(0,a.kt)("p",null,"A line with the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," value can be put to edit mode programmatically by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"setId")," function that returns from ",(0,a.kt)("inlineCode",{parentName:"p"},"useEditableTable"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onRow")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Table>")," component can be used to put a line to editing mode when it's clicked on. The function given to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onRow")," property is called every time one of these lines is clicked on, with the information of which line was clicked on."),(0,a.kt)("p",null,"We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"setId")," to put a line to edit mode whenever it's clicked on."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/pages/posts/list.tsx"',title:'"/pages/posts/list.tsx"'},'import {\n  List,\n  Table,\n  Form,\n  Input,\n  TextField,\n  useEditableTable,\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  // highlight-start\n  const { tableProps, formProps, isEditing, setId } = useEditableTable<IPost>();\n  // highlight-end\n\n  return (\n    <List>\n      <Form {...formProps}>\n        <Table\n          {...tableProps}\n          key="id"\n          // highlight-start\n          onRow={(record) => ({\n            onClick: (event: any) => {\n              if (event.target.nodeName === "TD") {\n                setId && setId(record.id);\n              }\n            },\n          })}\n          // highlight-end\n        >\n          <Table.Column key="id" dataIndex="id" title="ID" />\n          <Table.Column<IPost>\n            key="title"\n            dataIndex="title"\n            title="Title"\n            render={(value, data: any) => {\n              if (isEditing(data.id)) {\n                return (\n                  <Form.Item name="title" style={{ margin: 0 }}>\n                    <Input />\n                  </Form.Item>\n                );\n              }\n              return <TextField value={value} />;\n            }}\n          />\n        </Table>\n      </Form>\n    </List>\n  );\n};\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"All ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useTable"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable"))," properties are available in ",(0,a.kt)("inlineCode",{parentName:"p"},"useEditableTable"),". You can read the documentation of ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useTable/"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useTable"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable"))," for more information.")),(0,a.kt)("h2",{id:"return-values"},"Return Values"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"All ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useTable"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable"))," return values are available in ",(0,a.kt)("inlineCode",{parentName:"p"},"useEditableTable"),". You can read the documentation of ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useTable/"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useTable"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable"))," for more information.")),(0,a.kt)("h3",{id:"cancelbuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"cancelButtonProps")),(0,a.kt)("p",null,"Returns the props for needed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"<EditButton>"),"."),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," function is overridden by ",(0,a.kt)("inlineCode",{parentName:"p"},"useEditableTable"),". When is triggered it will call ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm's")," ",(0,a.kt)("inlineCode",{parentName:"p"},"setId")," function with ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"cancelButtonProps: () => ButtonProps;\n")),(0,a.kt)("h3",{id:"editbuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"editButtonProps")),(0,a.kt)("p",null,"Takes ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," as a parameter and returns the props needed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"<EditButton>"),"."),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," function is overridden by ",(0,a.kt)("inlineCode",{parentName:"p"},"useEditableTable"),". When is triggered it will call ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm's")," ",(0,a.kt)("inlineCode",{parentName:"p"},"setId")," function with the given ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"editButtonProps: (id: BaseKey) => ButtonProps;\n")),(0,a.kt)("p",null,"Returns a function that takes an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," as a parameter and returns the props for the edit button."),(0,a.kt)("h3",{id:"isediting"},(0,a.kt)("inlineCode",{parentName:"h3"},"isEditing")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"isEditing: (id: BaseKey) => boolean;\n")),(0,a.kt)("p",null,"Takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," as a parameter and returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the given ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseKey")," is equal to the selected ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm's")," ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(g,{module:"@pankod/refine-antd/useEditableTable",mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Desription"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TData"),(0,a.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TError"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,a.kt)("td",{parentName:"tr",align:null},"Values for params"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TSearchVariables"),(0,a.kt)("td",{parentName:"tr",align:null},"Values for search params"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,a.kt)("h3",{id:"return-values-1"},"Return values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"searchFormProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Ant Design ",(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"<Form>"))," props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"FormProps<TSearchVariables>")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tableProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Ant Design ",(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/table/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"<Table>"))," props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/table/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"TableProps<TData>")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tableQueryResult"),(0,a.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,a.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,a.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{`` data: TData[];`` total: number; },`` TError>")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sorter"),(0,a.kt)("td",{parentName:"tr",align:null},"Current sorting state"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#crudsorting"},(0,a.kt)("inlineCode",{parentName:"a"},"CrudSorting")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filters"),(0,a.kt)("td",{parentName:"tr",align:null},"Current filters state"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#crudfilters"},(0,a.kt)("inlineCode",{parentName:"a"},"CrudFilters")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"form"),(0,a.kt)("td",{parentName:"tr",align:null},"Ant Design ",(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"<Form>"))," instance"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#FormInstance"},(0,a.kt)("inlineCode",{parentName:"a"},"FormInstance")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"formProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Ant Design ",(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"<Form>"))," props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"FormProps")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean; onClick: () => void; }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cancelButtonProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Props for a cancel button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ onClick: () => void; }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"editButtonProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Props for an edit button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ onClick: () => void; }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,a.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<T>")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,a.kt)("td",{parentName:"tr",align:null},"Result of the mutation triggered by submitting the form"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,a.kt)("inlineCode",{parentName:"a"},"UseMutationResult<T>")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"formLoading"),(0,a.kt)("td",{parentName:"tr",align:null},"Loading state of form request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"Record id for edit action"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseKey")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"setId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"id")," setter"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseKey"))," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined>>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isEditing"),(0,a.kt)("td",{parentName:"tr",align:null},"Check if is editing"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(id: "),(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseKey")),(0,a.kt)("inlineCode",{parentName:"td"},") => boolean"))))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(N,{path:"table-antd-use-editable-table",mdxType:"CodeSandboxExample"}))}x.isMDXComponent=!0}}]);