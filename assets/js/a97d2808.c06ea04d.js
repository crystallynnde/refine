"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38338],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),u=r,d=g["".concat(s,".").concat(u)]||g[u]||m[u]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>g});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",slug:"how-react-fragments-is-works",authors:"clara_ekekenta",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-02-react-fragments/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/how-react-fragments-is-works",source:"@site/blog/2022-10-02-react-fragments.md",title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",date:"2022-10-02T00:00:00.000Z",formattedDate:"October 2, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:5.445,hasTruncateMarker:!1,authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],frontMatter:{title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",slug:"how-react-fragments-is-works",authors:"clara_ekekenta",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-02-react-fragments/social.png",hide_table_of_contents:!1},prevItem:{title:"A Guide on TypeScript Omit Type",permalink:"/blog/typescript-omit-utility-type"},nextItem:{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type"},relatedPosts:[{title:"Next.js vs React - A Beginner's Guide",description:"We briefly run through the innovation driven differences between React and Next.js in rendering behavior, routing, data fetching, backend API development and app configuration.",permalink:"/blog/next-js-vs-react",formattedDate:"February 2, 2024",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:22.54,date:"2024-02-02T00:00:00.000Z"},{title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",permalink:"/blog/react-virtual-dom",formattedDate:"November 23, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:12.11,date:"2023-11-23T00:00:00.000Z"},{title:"Create charts using Recharts",description:"We'll explore how to create charts in a Refine project using Recharts.",permalink:"/blog/recharts",formattedDate:"February 23, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:20.43,date:"2024-02-23T00:00:00.000Z"}],authorPosts:[{title:"When to use dangerouslySetInnerHTML in React?",description:"Find out when to use dangerouslySetInnerHTML in React and how it can help avoid XSS attacks.",permalink:"/blog/use-react-dangerouslysetinnerhtml",formattedDate:"September 25, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.315,date:"2022-09-25T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},g=[{value:"Introduction",id:"introduction",level:2},{value:"What is React Fragment?",id:"what-is-react-fragment",level:2},{value:"React Fragment vs Div Element",id:"react-fragment-vs-div-element",level:2},{value:"Problem with using div",id:"problem-with-using-div",level:2},{value:"Advantages of Fragment",id:"advantages-of-fragment",level:2},{value:"Using the key prop with React fragments",id:"using-the-key-prop-with-react-fragments",level:2},{value:"Using shortcut version",id:"using-shortcut-version",level:2},{value:"Fragment in Action",id:"fragment-in-action",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:g},u="wrapper";function d(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(u,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Returning multiple elements from a component has always been problematic for React developers.\nThis is because React depends on creating a tree-like structure that is used for reconciliation. Therefore, when multiple elements are returned in the render method, the algorithm used for reconciliation will not function as expected, and the presumption that the tree will have one root node for a component will no longer be valid."),(0,a.yg)("p",null,"React Fragment fixed this problem in version 16.2 of the library."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-react-fragment"},"What is React Fragment?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#react-fragment-vs-div-element"},"React Fragment vs Div Element")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#problem-with-using-div"},"Problem with using div")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#advantages-of-fragment"},"Advantages of Fragment")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-the-key-prop-with-react-fragments"},"Using the key prop with React fragments")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-shortcut-version"},"Using shortcut version")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#fragment-in-action"},"Fragment in Action"))),(0,a.yg)("h2",{id:"what-is-react-fragment"},"What is React Fragment?"),(0,a.yg)("p",null,"React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM."),(0,a.yg)("p",null,"To return multiple elements from a React component, you'll need to wrap the element in a root element. This approach has not been efficient and may cause issues in some cases. Eg."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"function TableData() {\n  return (\n    <div>\n      <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    </div>\n  );\n}\n\nfunction Table() {\n  return (\n    <table>\n      <tr>\n        <TableData />\n      </tr>\n    </table>\n  );\n}\n")),(0,a.yg)("p",null,"The above code will produce the HTML equivalent below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"<table>\n  <tr>\n    <div>\n      <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    </div>\n  </tr>\n</table>\n")),(0,a.yg)("p",null,"So as you can see that wrapping the ",(0,a.yg)("inlineCode",{parentName:"p"},"<td>")," tags in a ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," element breaks the table parent-child relationship. For things to work as expected, the ",(0,a.yg)("inlineCode",{parentName:"p"},"<td>")," tags have to be rendered individually without wrapping them in a ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," element. In scenarios like this, it's better to use React Fragment."),(0,a.yg)("h2",{id:"react-fragment-vs-div-element"},"React Fragment vs Div Element"),(0,a.yg)("p",null,'In React, "Fragment" and "Div" are used interchangeably. The main difference between the two is that "Fragment" clears out all extra divs from a DOM tree while "Div" adds a div to the DOM tree.'),(0,a.yg)("p",null,"With React Fragments, we can create code that is cleaner and easier to read. It renders components more quickly and uses less memory. Every element is rendered as intended. While Div expands the DOM due to the long nested nodes that occur when there are too many HTML tags on your website."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," element has more methods and properties, which causes it to consume more memory which can make the page slow load time; the prototype chain is like HTMLDivElement -> HTMLElement -> Element -> Node -> EventTarget, whereas the React fragment has fewer methods with the prototype chain DocumentFragment -> Node -> EventTarget."),(0,a.yg)("p",null,"Using fragments, you can reuse parts of your application. But, like in the table example we used in the previous section, div makes it challenging to do so. However, there are situations where using div instead of a fragment is necessary."),(0,a.yg)("p",null,"For instance, utilizing fragments does not allow you to design a component since you must wrap the target elements in a div. Additionally, you must use a div if you are adding keys to the components' elements. In light of this, you can use the two interchangeably depending on what you want your React application to accomplish."),(0,a.yg)("h2",{id:"problem-with-using-div"},"Problem with using div"),(0,a.yg)("p",null,"Let's look at some of the problems in using div in detail."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The div element expands the HTML DOM, causing the browser to consume more resources than expected."),(0,a.yg)("li",{parentName:"ul"},"When the DOM is too large, it consumes a lot of memory, causing the pages to load slowly in the browser."),(0,a.yg)("li",{parentName:"ul"},"Debugging and tracing the origin of the extra nodes becomes more difficult as the DOM grows larger and more nested."),(0,a.yg)("li",{parentName:"ul"},"Using div to render components may cause performance issues by clogging your HTML.")),(0,a.yg)("h2",{id:"advantages-of-fragment"},"Advantages of Fragment"),(0,a.yg)("p",null,"React Fragment replaces the ",(0,a.yg)("inlineCode",{parentName:"p"},"<div>")," element, which can cause issues with invalid HTML, with the following advantages."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The code readability of React Fragment is higher."),(0,a.yg)("li",{parentName:"ul"},"Because React fragments have a smaller DOM, they render faster and use less memory."),(0,a.yg)("li",{parentName:"ul"},"React Fragment allows React components to be rendered as intended without causing any parent-child relationship issues."),(0,a.yg)("li",{parentName:"ul"},"Fragments allow the return of multiple JSX elements, which addresses the issue of invalid HTML markups within react applications that were caused by the must-have constraint of only one element returning per component.")),(0,a.yg)("h2",{id:"using-the-key-prop-with-react-fragments"},"Using the key prop with React fragments"),(0,a.yg)("p",null,"In some cases, the key prop is required in a React application. In react, the key props are typically used to control component instances. React uses the key prop in scenarios like this to identify which items changed, removed, or added. Using the key props in a React application with fragments will be like the code snippet below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"function TableData () {\n  return  (\n       {data.map(rec=>\n        <React.Fragment key={rec.id}>\n           <td>{rec.hobby}</td>\n        </React.Fragment>\n      )}\n  );\n}\n")),(0,a.yg)("h2",{id:"using-shortcut-version"},"Using shortcut version"),(0,a.yg)("p",null,"Aside from using React Fragment, React also provides a shorthand notation ",(0,a.yg)("inlineCode",{parentName:"p"},"<></>")," to wrap multiple elements together that works similarly to React Fragment but with a lower memory load. In a react application, the shorthand notation ",(0,a.yg)("inlineCode",{parentName:"p"},"<></>")," is implemented as follows."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"<function TableData () {\n  return  (\n    <>\n      <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    <>\n  );\n}\n")),(0,a.yg)("p",null,"The above code will produce the expected HTML equivalent below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"<table>\n  <tr>\n    <div>\n      <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    </div>\n  </tr>\n</table>\n")),(0,a.yg)("p",null,"However, there are some drawbacks to this approach. For example, implementing the key props is impossible because the shorthand notation ",(0,a.yg)("inlineCode",{parentName:"p"},"<></>")," will not work here. After all, it cannot take an attribute."),(0,a.yg)("h2",{id:"fragment-in-action"},"Fragment in Action"),(0,a.yg)("p",null,"Now let's see how fragments are used in a React application. In the example below, we'll use the React Fragment to render a list of items in a table."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import "./App.css";\nimport React from "react";\n\nconst Table = ({ children, style }) => {\n  return <div>{children}</div>;\n};\n\nconst TableData = () => {\n  return (\n    <React.Fragment>\n      <td>John Doe</td>\n      <td>16</td>\n      <td>Developer</td>;\n    </React.Fragment>\n  );\n};\n\nfunction App() {\n  return (\n    <Table>\n      <tr>\n        <th>Name</th>\n        <th>Age</th>\n        <th>Occupation</th>\n      </tr>\n      <TableData />\n    </Table>\n  );\n}\nexport default App;\n')),(0,a.yg)("p",null,"In the above code snippet, we created two components that we to be rendered in our application. In the render method, we used React Fragment instead of wrapping the elements in the TableData components in a div. This way, our table data will be rendered as expected."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"Throughout this tutorial, you've learned about React Fragment. We started by knowing what a React Fragment is and when to use it in a React application. Then we went further to demonstrate how it's used in a practical application."))}d.isMDXComponent=!0}}]);