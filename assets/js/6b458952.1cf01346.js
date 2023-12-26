"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89564],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={title:"TypeScript Decorators in Brief",description:"We'll explore four main types of TypeScript Decorators with examples from a class that resembles those in typical class based TypeScript libraries.",slug:"typescript-decorators",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-24-typescript-decorators/social.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/blog/typescript-decorators",source:"@site/blog/2023-07-24-typescript-decorators.md",title:"TypeScript Decorators in Brief",description:"We'll explore four main types of TypeScript Decorators with examples from a class that resembles those in typical class based TypeScript libraries.",date:"2023-07-24T00:00:00.000Z",formattedDate:"July 24, 2023",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:9.59,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"TypeScript Decorators in Brief",description:"We'll explore four main types of TypeScript Decorators with examples from a class that resembles those in typical class based TypeScript libraries.",slug:"typescript-decorators",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-24-typescript-decorators/social.png",hide_table_of_contents:!1},prevItem:{title:"Building a React Admin Panel with PrimeReact and Refine",permalink:"/blog/building-react-admin-panel-with-primereact-and-refine"},nextItem:{title:"Zsh and Bash",permalink:"/blog/zsh-vs-bash"},relatedPosts:[{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.45,date:"2022-10-03T00:00:00.000Z"},{title:"TypeScript Record Type with Examples",description:"We'll explore TypeScript Record type with examples.",permalink:"/blog/typescript-record-type",formattedDate:"June 16, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.165,date:"2023-06-16T00:00:00.000Z"},{title:"A Detailed Guide on TypeScript Pick Type",description:"We'll deep dive into the TypeScript Pick utility type with examples and use cases.",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.475,date:"2022-09-30T00:00:00.000Z"}],authorPosts:[{title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",permalink:"/blog/javascript-some-method",formattedDate:"October 25, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:7.96,date:"2022-10-25T00:00:00.000Z"},{title:"A Definitive guide on JavaScript every() Method",description:"In this post, we expound on with examples of what the JavaScript every method is, how it works.",permalink:"/blog/javascript-every-method",formattedDate:"November 2, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.63,date:"2022-11-02T00:00:00.000Z"},{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.45,date:"2022-10-03T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"TypeScript and Runtime",id:"typescript-and-runtime",level:3},{value:"Enabling Decorators Support",id:"enabling-decorators-support",level:3},{value:"Decorating a Class with TypeScript Decorators",id:"decorating-a-class-with-typescript-decorators",level:2},{value:"TypeScript Decorators Syntax",id:"typescript-decorators-syntax",level:2},{value:"Class Decoration in TypeScript",id:"class-decoration-in-typescript",level:2},{value:"Property Decorators in TypeScript",id:"property-decorators-in-typescript",level:2},{value:"Accessor Decorators in TypeScript",id:"accessor-decorators-in-typescript",level:2},{value:"TypeScript Decorator Factories",id:"typescript-decorator-factories",level:2},{value:"Method Decorators in TypeScript",id:"method-decorators-in-typescript",level:2},{value:"Summary",id:"summary",level:2}],m={toc:d};function u(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"TypeScript decorators are an extension that allows adding annotation and metaprogramming to class declarations and their members in TypeScript. TypeScript supports decorators syntax as an experimental feature which is distinct from JavaScript decorators that is currently a Stage 3 ECMAScript proposal. This post provides a brief walk through into the use of TypeScript decorators with examples from decorating a ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class, its properties, accessors and methods."),(0,a.kt)("p",null,"This decorators are an extension that implements the Decorator Pattern with native syntax. It is supported for class based programming which was introduced with ES6. TypeScript decorators allow us to sneak into run time JavaScript objects in order to annotate and manipulate them. As such, TypeScript decorators defined with built-in\nsyntax are commonly leveraged in TS libraries for logging events, warnings, as well as for observing, modifying and replacing objects and their members."),(0,a.kt)("p",null,"In this post, we explore four main types of TypeScript Decorators with examples from a class that resembles those in typical class based JavaScript / TypeScript libraries. We first introduce and understand the TypeScript decorators syntax. And then using an existing ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class and its members, we see how to decorate the class itself, and where necessary - its properties and their accessors, as well as other class methods."),(0,a.kt)("p",null,"Applying the decorators is done with ",(0,a.kt)("inlineCode",{parentName:"p"},"@"),", which exposes several parameters such as the ",(0,a.kt)("strong",{parentName:"p"},"class constructor")," or ",(0,a.kt)("strong",{parentName:"p"},"prototype")," and where applicable, the ",(0,a.kt)("strong",{parentName:"p"},"member key"),", the ",(0,a.kt)("strong",{parentName:"p"},"member descriptor")," and the parameter index of a method argument. These exposed parameters are utilized to define necessary decorator functions that observe, modify or replace the construct subject to decoration."),(0,a.kt)("p",null,"In the sections ahead, we work with an existing ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class that we seek to decorate. However, below let's first talk about the environment we need to get started."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#typescript-and-runtime"},"TypeScript and Runtime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#enabling-decorators-support"},"Enabling Decorators Support")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#decorating-a-class-with-typescript-decorators"},"Decorating a Class with TypeScript Decorators")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#typescript-decorators-syntax"},"TypeScript Decorators Syntax")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#class-decoration-in-typescript"},"Class Decoration in TypeScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#property-decorators-in-typescript"},"Property Decorators in TypeScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#accessor-decorators-in-typescript"},"Accessor Decorators in TypeScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#typescript-decorator-factories"},"TypeScript Decorator Factories")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#method-decorators-in-typescript"},"Method Decorators in TypeScript"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"typescript-and-runtime"},"TypeScript and Runtime"),(0,a.kt)("p",null,"In order to properly follow this post and test out the examples, you need to have a JavaScript engine. It could be Node.js in your local machine with TypeScript installed or you could use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play"},"TypeScript Playground"),"."),(0,a.kt)("h3",{id:"enabling-decorators-support"},"Enabling Decorators Support"),(0,a.kt)("p",null,"TypeScript decorators are supported under experimental flag. So, we have to enable it from the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file by adding the following entry to ",(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// Inside tsconfig.json\n\n{\n  "compilerOptions": {\n    "experimentalDecorators": true\n  }\n}\n')),(0,a.kt)("p",null,"If you're running a file in a Node.js shell, simply activate decorators by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tsc --experimentalDecorators\n")),(0,a.kt)("p",null,"In TypeScript Playground, you can activate decorators first by visiting the ",(0,a.kt)("inlineCode",{parentName:"p"},"TS Config")," dropdown and then selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"experimentalDecorators")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Language and Environment")," section."),(0,a.kt)("p",null,"With the environment ready to support decorators, let's now look at the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class that we are decorating throughout this post."),(0,a.kt)("h2",{id:"decorating-a-class-with-typescript-decorators"},"Decorating a Class with TypeScript Decorators"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class that we want to decorate initially looks like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'class User {\n  private static userType: string = "Generic";\n  private _email: string;\n\n  public username: string;\n  public addressLine1: string = "";\n  public addressLine2: string = "";\n  public country: string = "";\n\n  constructor(username: string, email: string) {\n    this.username = username;\n    this._email = email;\n  }\n\n  get userType() {\n    return User.userType;\n  }\n\n  get email() {\n    return this._email;\n  }\n\n  set email(newEmail: string) {\n    this._email = newEmail;\n  }\n\n  address(): any {\n    return `${this.addressLine1}\\n${this.addressLine2}\\n${this.country}`;\n  }\n}\n\nconst p = new User("exampleUser", "example@exmaple.com");\np.addressLine1 = "1, New Avenue";\np.addressLine2 = "Bahcelievler, Istanbul";\n')),(0,a.kt)("p",null,"As we can see, we have a mix of ",(0,a.kt)("inlineCode",{parentName:"p"},"private")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," properties among ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," and instance members describing different attributes of an user. We have accessors and also an ",(0,a.kt)("inlineCode",{parentName:"p"},"address()")," instance method that returns an address of the user."),(0,a.kt)("p",null,"TypeScript allows decorating the class constructor itself, its properties and their accessors, as well as method members. In the coming sections, one by one, we implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"@frozen")," decorator on the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class, ",(0,a.kt)("inlineCode",{parentName:"p"},"@required")," on a couple of properties, ",(0,a.kt)("inlineCode",{parentName:"p"},"@enumerable")," on a getter and ",(0,a.kt)("inlineCode",{parentName:"p"},"@deprecated")," on an instance method."),(0,a.kt)("p",null,"TypeScript also allows us to decorate method and constructor ",(0,a.kt)("strong",{parentName:"p"},"parameters"),". However, we are not covering it in this quick exploration as its use cases become relevant when we need deeper insight into runtime behaviors of properties and method arguments by relying on libraries such as ",(0,a.kt)("inlineCode",{parentName:"p"},"reflect-metadata"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class after applying the above mentioned decorators looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@frozen\nclass User {\n  private static userType: string = "Generic";\n\n  @required\n  private _email: string;\n\n  @required\n  public username: string;\n\n  public addressLine1: string = "";\n  public addressLine2: string = "";\n  public country: string = "";\n\n  constructor(username: string, email: string) {\n    this.username = username;\n    this._email = email;\n  }\n\n  @enumerable(false)\n  get userType() {\n    return User.userType;\n  }\n\n  get email() {\n    return this._email;\n  }\n\n  set email(newEmail: string) {\n    this._email = newEmail;\n  }\n\n  @deprecated\n  address(): any {\n    return `${this.addressLine1}\\n${this.addressLine2}\\n${this.country}`;\n  }\n}\n\nconst p = new User("exampleUser", "example@example.com");\np.addressLine1 = "1, New Avenue";\np.addressLine2 = "Bahcelievler, Istanbul";\n')),(0,a.kt)("h2",{id:"typescript-decorators-syntax"},"TypeScript Decorators Syntax"),(0,a.kt)("p",null,"As we can see above, the syntax for using a decorator follows this pattern:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@decoratorName\nitemToBeDecorated\n")),(0,a.kt)("p",null,"Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," invokes the ",(0,a.kt)("inlineCode",{parentName:"p"},"decoratorName")," function on the ",(0,a.kt)("inlineCode",{parentName:"p"},"itemToBeDecorated")," subject. And it exposes appropriate parameters for the ",(0,a.kt)("inlineCode",{parentName:"p"},"decoratorName")," to observe, modify and replace. These parameters vary according to whether the item is a class, property, method or a parameter. For example, when we want to decorate a class, the class ",(0,a.kt)("inlineCode",{parentName:"p"},"constructor")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"prototype")," is made available to the decorator function invoked by ",(0,a.kt)("inlineCode",{parentName:"p"},"@"),". It then falls on the class decorator function to make use of this parameter for decorating the class."),(0,a.kt)("p",null,"Let's explicate the idea by focusing on the ",(0,a.kt)("inlineCode",{parentName:"p"},"@frozen")," decorator call which is a class decorator."),(0,a.kt)("h2",{id:"class-decoration-in-typescript"},"Class Decoration in TypeScript"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@frozen")," decorator is applied to our ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class. The decorator invocation with ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," exposes the constructor function of the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class to the ",(0,a.kt)("inlineCode",{parentName:"p"},"frozen")," function. This means we can pass it to ",(0,a.kt)("inlineCode",{parentName:"p"},"frozen")," and use it for manipulating the class. We want our ",(0,a.kt)("inlineCode",{parentName:"p"},"frozen")," function to freeze the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function frozen(target: Function) {\n  Object.freeze(target);\n  Object.freeze(target.prototype);\n}\n")),(0,a.kt)("p",null,"When we apply the decorator to the class, the ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," is always the constructor function of the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class."),(0,a.kt)("p",null,"And now if we try to add a new static member to ",(0,a.kt)("inlineCode",{parentName:"p"},"User"),", we get an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(Object.isFrozen(User)); // true\nUser.addNewProp = "Trying to add new prop value"; // [ERR]: Cannot add property addNewProp, object is not extensible\nconsole.log(Object.isFrozen(new User("example", "example@example.com"))); // false\n')),(0,a.kt)("p",null,"Notice that an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class is ",(0,a.kt)("strong",{parentName:"p"},"not")," frozen, rather the class itself is. This means a class decorator is applied to the prototype and not to the instance."),(0,a.kt)("p",null,"Next, we are going to consider decorating properties."),(0,a.kt)("h2",{id:"property-decorators-in-typescript"},"Property Decorators in TypeScript"),(0,a.kt)("p",null,"If we look back at the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class above, we have applied a ",(0,a.kt)("inlineCode",{parentName:"p"},"@required")," decorator to a couple of properties, namely: ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"email"),". We want ",(0,a.kt)("inlineCode",{parentName:"p"},"@required")," to throw an error if ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," is not initialized at user construction."),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"required")," decorator looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function required(target: any, key: string) {\n  let currentValue = target[key];\n\n  Object.defineProperty(target, key, {\n    set: (newValue: string) => {\n      if (!newValue) {\n        throw new Error(`${key} is required.`);\n      }\n      currentValue = newValue;\n    },\n    get: () => currentValue,\n  });\n}\n")),(0,a.kt)("p",null,"Applying a decorator to a property exposes the ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," parameters to the decorator function. The ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"constructor")," function if we apply the decorator to a ",(0,a.kt)("strong",{parentName:"p"},"static")," member and the ",(0,a.kt)("strong",{parentName:"p"},"prototype")," of the class if it is applied on an instance property. The ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," is the member name."),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"required")," function above grabs them to redefine a decorated property with the same member name but a different setter, effectively replacing the existing definition of the member value."),(0,a.kt)("p",null,"Notice that it is possible to ",(0,a.kt)("strong",{parentName:"p"},"replace")," the descriptor value of the member with ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.defineProperty()")," method without necessarily accessing the member descriptor itself. This is useful in decorating properties."),(0,a.kt)("p",null,"And now if we try to instantiate a user without a value for ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"email"),", we'll get an error thrown:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const p = new User("", "example@example.com"); // [ERR]: username is required.\nconst u = new User("example", ""); // [ERR]: _email is required.\n')),(0,a.kt)("p",null,"With this done, let's now see how property accessors should be decorated."),(0,a.kt)("h2",{id:"accessor-decorators-in-typescript"},"Accessor Decorators in TypeScript"),(0,a.kt)("p",null,"Applying a decorator to a property accessor exposes the property ",(0,a.kt)("inlineCode",{parentName:"p"},"descriptor")," in addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," (constructor/prototype) and the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," (member name). With the member descriptor at our disposal, we can directly operate on the member metadata."),(0,a.kt)("p",null,"If we revisit the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class with decorators applied, we see that we have an ",(0,a.kt)("inlineCode",{parentName:"p"},"@enumerable(false)")," decorator applied to the ",(0,a.kt)("inlineCode",{parentName:"p"},"userType()")," getter method."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"enumerable")," wrapper below returns a function that takes the member ",(0,a.kt)("inlineCode",{parentName:"p"},"descriptor")," and sets its ",(0,a.kt)("inlineCode",{parentName:"p"},"enumerable")," attribute to ",(0,a.kt)("inlineCode",{parentName:"p"},"isEnumerable"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function enumerable(isEnumerable: boolean) {\n  return (target: any, key: string, descriptor: PropertyDescriptor) => {\n    descriptor.enumerable = isEnumerable;\n    console.log("The enumerable property of this member is set to: " + descriptor.enumerable);\n  };\n}\n')),(0,a.kt)("p",null,"This time, thanks to the access to the member ",(0,a.kt)("inlineCode",{parentName:"p"},"descriptor"),", we don't really need to redefine the same property with ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.defineProperty()"),"."),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"@enumerable(false)")," applied to a member, the console prints the following message at:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// The enumerable property of this member is set to: false\n")),(0,a.kt)("h2",{id:"typescript-decorator-factories"},"TypeScript Decorator Factories"),(0,a.kt)("p",null,"Take a close look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"enumerable")," decorator. It is taking a parameter that is actually passed at decorator invocation. Rather than purely being a decorator, ",(0,a.kt)("inlineCode",{parentName:"p"},"enumerable")," is a ",(0,a.kt)("strong",{parentName:"p"},"decorator factory")," that produces the decorator for us by taking a ",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean")," input from us. Such decorator factories are commonly used to customize decorator behavior and make them reusable."),(0,a.kt)("h2",{id:"method-decorators-in-typescript"},"Method Decorators in TypeScript"),(0,a.kt)("p",null,"In our ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class, we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"@deprecated")," method decorator applied which is generally intended to inform the console that the method it is applied to is deprecated, alongside doing its usual stuff. Like accessor decorators, invoking a method decorator also exposes three parameters: the ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," which can be the constructor for a static method or the class prototype for an instance method, the member ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," for the method and the member ",(0,a.kt)("inlineCode",{parentName:"p"},"descriptor"),"."),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"deprecated")," decorator function looks as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function deprecated(target: any, key: string, descriptor: PropertyDescriptor) {\n  const originalDef = descriptor.value;\n\n  descriptor.value = function (...args: any[]) {\n    console.log(`Warning: ${key}() is deprecated. Use other methods instead.`);\n    return originalDef.apply(this, args);\n  };\n  return descriptor;\n}\n")),(0,a.kt)("p",null,"Here the manipulation of the descriptor ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," is explicit, as we can reset it directly and return the new ",(0,a.kt)("inlineCode",{parentName:"p"},"descriptor")," after implementing the decoration. Access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"descriptor")," makes it easier to change the method implementation on the instance at runtime."),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"@deprecated")," decorator applied to ",(0,a.kt)("inlineCode",{parentName:"p"},"address()"),", the following warning is logged to the console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Warning: address() is deprecated. Use other methods instead.\n")),(0,a.kt)("p",null,"These are pretty much the major examples of decorators in TypeScript which can help us decorate a class and its members. Using parameter decorators give us more insight into how arguments act out in runtime. It is very useful to leverage the ",(0,a.kt)("inlineCode",{parentName:"p"},"reflect-metadata")," library with parameter decorators. For a few examples, please check out ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators"},"this section of the TypeScript decorators documentation"),"."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"TypeScript decorators are very useful for annotations such deprecation warnings and logging. They are especially powerful for metaprogramming in JavaScript applications. In this post, we have briefly explored four main types of decorators that can be implemented with TypeScript, namely: class decorators, property decorators, accessor decorators and method decorators. We also saw how decorator factories are used to produce reusable decorators in TypeScript."))}u.isMDXComponent=!0}}]);