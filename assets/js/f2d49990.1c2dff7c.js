"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(n),p=a,d=g["".concat(s,".").concat(p)]||g[p]||m[p]||i;return n?o.createElement(d,r(r({ref:t},u),{},{components:n})):o.createElement(d,r({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>m});n(67294);var o=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"Kubectl config set context Tutorial and Best Practices",description:"We'll discuss the kubectl config set-context command and how it can be used to manage contexts in Kubernetes. We'll also cover some best practices for managing contexts.",slug:"kubectl-config-set-context",authors:"muhammad_khabbab",tags:["kubernetes","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/social.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/blog/kubectl-config-set-context",source:"@site/blog/2023-10-27-kubecti-config.md",title:"Kubectl config set context Tutorial and Best Practices",description:"We'll discuss the kubectl config set-context command and how it can be used to manage contexts in Kubernetes. We'll also cover some best practices for managing contexts.",date:"2023-10-27T00:00:00.000Z",formattedDate:"October 27, 2023",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:9.835,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Kubectl config set context Tutorial and Best Practices",description:"We'll discuss the kubectl config set-context command and how it can be used to manage contexts in Kubernetes. We'll also cover some best practices for managing contexts.",slug:"kubectl-config-set-context",authors:"muhammad_khabbab",tags:["kubernetes","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/social.png",hide_table_of_contents:!1},prevItem:{title:"React Slick Examples - Creating a carousel",permalink:"/blog/react-slick"},nextItem:{title:"Introduction to HTMX",permalink:"/blog/what-is-htmx"},relatedPosts:[{title:"Kubernetes vs Docker - A Detailed Comparison",description:"Explore an in-depth comparison between Docker and Kubernetes, focusing on their unique features, advantages, and ideal use scenarios.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"January 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:14.365,date:"2024-01-26T00:00:00.000Z"},{title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",permalink:"/blog/git-switch-and-git-checkout",formattedDate:"December 20, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.365,date:"2022-12-20T00:00:00.000Z"},{title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",permalink:"/blog/docker-run-command",formattedDate:"June 24, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.855,date:"2023-06-24T00:00:00.000Z"}],authorPosts:[{title:"git stash - Save the Uncommitted Changes Locally",description:"Explore the essential guide to Git Stash with practical examples and expert tips. Learn how to effectively save, manage, and apply your code changes with the git stash command.",permalink:"/blog/2024/01/26/git-stash",formattedDate:"January 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:12.005,date:"2024-01-26T00:00:00.000Z"},{title:"Kubernetes vs Docker - A Detailed Comparison",description:"Explore an in-depth comparison between Docker and Kubernetes, focusing on their unique features, advantages, and ideal use scenarios.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"January 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:14.365,date:"2024-01-26T00:00:00.000Z"},{title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",permalink:"/blog/docker-run-command",formattedDate:"June 24, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.855,date:"2023-06-24T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},m=[{value:"Brief about kubectl and the need for configuration management",id:"brief-about-kubectl-and-the-need-for-configuration-management",level:2},{value:"Importance of understanding kubectl config set-context",id:"importance-of-understanding-kubectl-config-set-context",level:2},{value:"Basic configuration methods",id:"basic-configuration-methods",level:2},{value:"Placing kubeconfig in $HOME/.KUBE/CONFIG",id:"placing-kubeconfig-in-homekubeconfig",level:3},{value:"Using --kubeconfig flag",id:"using---kubeconfig-flag",level:2},{value:"Utilizing kubeconfig environment variable",id:"utilizing-kubeconfig-environment-variable",level:2},{value:"Understanding and using set-context",id:"understanding-and-using-set-context",level:2},{value:"What is set-context?",id:"what-is-set-context",level:3},{value:"Setting up multiple contexts",id:"setting-up-multiple-contexts",level:3},{value:"Switching between contexts",id:"switching-between-contexts",level:2},{value:"Best practices for managing contexts",id:"best-practices-for-managing-contexts",level:2},{value:"Naming conventions for contexts",id:"naming-conventions-for-contexts",level:3},{value:"Keeping contexts minimal and specific",id:"keeping-contexts-minimal-and-specific",level:3},{value:"Regularly pruning old or unused contexts",id:"regularly-pruning-old-or-unused-contexts",level:2},{value:"Advanced context configurations",id:"advanced-context-configurations",level:2},{value:"Using context with namespaces",id:"using-context-with-namespaces",level:3},{value:"Setting specific users or clusters for a context",id:"setting-specific-users-or-clusters-for-a-context",level:3},{value:"Potential pitfalls &amp; troubleshooting",id:"potential-pitfalls--troubleshooting",level:2},{value:"Common errors and misconfigurations",id:"common-errors-and-misconfigurations",level:3},{value:"Tips for troubleshooting context-related issues",id:"tips-for-troubleshooting-context-related-issues",level:3},{value:"Integration with CI/CD pipelines",id:"integration-with-cicd-pipelines",level:2},{value:"Brief about how context management can help in continuous deployment and integration scenarios",id:"brief-about-how-context-management-can-help-in-continuous-deployment-and-integration-scenarios",level:3},{value:"Conclusion &amp; further reading",id:"conclusion--further-reading",level:2},{value:"Summing up the importance of effective context management",id:"summing-up-the-importance-of-effective-context-management",level:3},{value:"Pointing to additional resources or documentation",id:"pointing-to-additional-resources-or-documentation",level:3}],g={toc:m};function p(e){var{components:t}=e,n=r(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"brief-about-kubectl-and-the-need-for-configuration-management"},"Brief about kubectl and the need for configuration management"),(0,o.kt)("p",null,"The kubectl utility is a command line interface (CLI) for interacting with Kubernetes. You can use it to manage Kubernetes resources such as pods, services, and deployments. Configuration Management is the process of ensuring that a cluster and its components remain in a desired state."),(0,o.kt)("p",null,"Steps we'll cover in this tutorial:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#brief-about-kubectl-and-the-need-for-configuration-management"},"Brief about kubectl and the need for configuration management")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#importance-of-understanding-kubectl-config-set-context"},"Importance of understanding kubectl config set-context")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#basic-configuration-methods"},"Basic configuration methods"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#placing-kubeconfig-in-homekubeconfig"},"Placing kubeconfig in $HOME/.KUBE/CONFIG")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using---kubeconfig-flag"},"Using --kubeconfig flag")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#utilizing-kubeconfig-environment-variable"},"Utilizing kubeconfig environment variable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#understanding-and-using-set-context"},"Understanding and using set-context"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-set-context"},"What is set-context?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setting-up-multiple-contexts"},"Setting up multiple contexts")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#switching-between-contexts"},"Switching between contexts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#best-practices-for-managing-contexts"},"Best practices for managing contexts"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#naming-conventions-for-contexts"},"Naming conventions for contexts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#keeping-contexts-minimal-and-specific"},"Keeping contexts minimal and specific")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#regularly-pruning-old-or-unused-contexts"},"Regularly pruning old or unused contexts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#advanced-context-configurations"},"Advanced context configurations"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-context-with-namespaces"},"Using context with namespaces")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setting-specific-users-or-clusters-for-a-context"},"Setting specific users or clusters for a context")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#potential-pitfalls--troubleshooting"},"Potential pitfalls \\& troubleshooting"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#common-errors-and-misconfigurations"},"Common errors and misconfigurations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#tips-for-troubleshooting-context-related-issues"},"Tips for troubleshooting context-related issues")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#integration-with-cicd-pipelines"},"Integration with CI/CD pipelines"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#brief-about-how-context-management-can-help-in-continuous-deployment-and-integration-scenarios"},"Brief about how context management can help in continuous deployment and integration scenarios"))))),(0,o.kt)("h2",{id:"importance-of-understanding-kubectl-config-set-context"},"Importance of understanding kubectl config set-context"),(0,o.kt)("p",null,"You must have knowledge of kubectl config set-context so that you can change contexts, which are sets of configuration parameters defined for clusters, users and namespaces. The ability to quickly switch from one set of Kubernetes contexts to another is one of the most significant benefits of using kubectl config set-context."),(0,o.kt)("p",null,"When you work on more than one project or need to manage a number of Kubernetes clusters, this can be particularly useful. You can change the current context or create a new context based upon an existing one by using kubectl config set-context."),(0,o.kt)("h2",{id:"basic-configuration-methods"},"Basic configuration methods"),(0,o.kt)("h3",{id:"placing-kubeconfig-in-homekubeconfig"},"Placing kubeconfig in $HOME/.KUBE/CONFIG"),(0,o.kt)("p",null,"The configuration file that kubectl is looking for must be in this location. This file contains the information about cluster, user and namespace. In one file, you can create multiple clusters, users and namespaces or use a number of files. Modifying your configuration file can also be done with kubectl config."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The below configuration is placed at the default location(i.e., C:\\Users\\username\\ .kube), so every kubectl command will use this configuration:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/first.png",alt:"kubectl set context"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"using---kubeconfig-flag"},"Using --kubeconfig flag"),(0,o.kt)("p",null,"For each of the kubectl commands, this will allow you to define a separate configuration file. This flag may be used to access a series of clusters with different configuration files. The KUBECONFIG environment variable can also define the list of configuration files, which is separated by a colon."),(0,o.kt)("p",null,"Now, suppose that we have another configuration, having the current context changed to '",(0,o.kt)("strong",{parentName:"p"},"docker-desktop"),"' from '",(0,o.kt)("strong",{parentName:"p"},"cluster-2"),"'. We can use that configuration by specifying the path where it is located and utilizing the kubeconfig flag."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Here is another configuration:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/config-flag.png",alt:"kubectl set context"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"For Example, in order to view specific configurations using the '",(0,o.kt)("strong",{parentName:"p"},"kubectl"),"' and '",(0,o.kt)("strong",{parentName:"p"},"kubeconfig"),"' flag, you can run the following command:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config view --kubeconfig=[Config_File_Path]")),(0,o.kt)("h2",{id:"utilizing-kubeconfig-environment-variable"},"Utilizing kubeconfig environment variable"),(0,o.kt)("p",null,"You will be able to create a configuration file for the current shell session. The default location and the '",(0,o.kt)("strong",{parentName:"p"},"--kubeconfig"),"' flag can be overridden by this variable. To switch from one configuration file to another, you may also change the value of this variable."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Let's view the previous default configuration that has the current-context set to 'cluster-2':")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/kube-config-env.png",alt:"kubectl set context"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"We have another configuration with the current-context set to '",(0,o.kt)("strong",{parentName:"p"},"docker-desktop"),"'. By running the command below, we can set that configuration for the current shell session:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Command for Windows:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set KUBECONFIG=[Config_File_Path]")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Command for Linux/MacOS:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=[Config_File_Path]")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The below output shows that the current shell session is using the configuration specified against the 'KUBECONFIG' environment variable that has the current-context set to 'docker-desktop':")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/command-linux.png",alt:"kubectl set context"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"understanding-and-using-set-context"},"Understanding and using set-context"),(0,o.kt)("h3",{id:"what-is-set-context"},"What is set-context?"),(0,o.kt)("p",null,"Set-context is a kubectl config subcommand that allows you to create or update a context from your kubeconfig file. The new values of the cluster, users, namespaces and other parameters that define a context can be specified in the command."),(0,o.kt)("h3",{id:"setting-up-multiple-contexts"},"Setting up multiple contexts"),(0,o.kt)("p",null,"It's not the usual practice to have one Kubernetes cluster, particularly when dealing with different environments such as development, staging and production. Each context associates a cluster, user, and an optional namespace. These groupings allow you to specify access parameters for different cluster environments."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Example, if we want to add a new development context to the existing cluster (i.e., cluster-2, we can use the following command:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config set-context dev-context --cluster=cluster-2")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/multiple-context.png",alt:"kubectl set context"})),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Then, we add production context to another cluster existing cluster (i.e., docker-desktop) by running the command below:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config set-context prod-context --cluster=docker-desktop")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/set-context-2.png",alt:"kubectl set context"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"switching-between-contexts"},"Switching between contexts"),(0,o.kt)("p",null,"When you've got a lot of different contexts, it often makes sense to switch between them depending on the requirement. You can use '",(0,o.kt)("strong",{parentName:"p"},"kubectl config use-context"),"' followed by the name of a context that you want to use when switching between contexts. Your active Kubernetes context will be changed to the one you specified in the command."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Example, you are currently using the production context, and you want to switch to the development context. For that purpose, you can run the following command:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config use-context dev-context")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/switch-between.png",alt:"kubectl set context"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"best-practices-for-managing-contexts"},"Best practices for managing contexts"),(0,o.kt)("h3",{id:"naming-conventions-for-contexts"},"Naming conventions for contexts"),(0,o.kt)("p",null,"It will be easier to remember your context if you use consistent naming conventions in different contexts. Generic terms such as test or default should not be used as they may be confusing. Pick a name that is more descriptive instead. To name your contexts, for instance, you may use a format like ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"CLUSTER-USER/ROLE-PROJECT")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As an example, consider the following sample context configuration with a naming convention:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/best-practice.png",alt:"kubectl set context"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"keeping-contexts-minimal-and-specific"},"Keeping contexts minimal and specific"),(0,o.kt)("p",null,"Only create contexts you need and often use, avoiding the creation of redundant or overlapping contexts. You don't need to create a bunch of contexts for different namespaces, especially when you are only working with one cluster and one user."),(0,o.kt)("p",null,"Similarly, you don't have to specify a namespace in the context name if you only work with one namespace within a cluster. In addition, strictly avoid creating contexts that contain sensitive information like passwords and tokens."),(0,o.kt)("h2",{id:"regularly-pruning-old-or-unused-contexts"},"Regularly pruning old or unused contexts"),(0,o.kt)("p",null,"The contexts you are using should be reviewed and deleted from time to time if they aren't of any relevance or value anymore. It will make it easier to maintain and organize the kubeconfig file so that you do not run into errors or security problems."),(0,o.kt)("p",null,"To remove a context from the kubeconfig file, use the '",(0,o.kt)("strong",{parentName:"p"},"kubectl config delete-context ","[NAME_OF_CONTEXT]"),"' command."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Example, we have an existing context with the name '"),"QA-andrew-frontend",(0,o.kt)("strong",{parentName:"p"},"', that is not in use anymore, so we can delete it by running the command below:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config delete-context QA-andrew-frontend")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/pruning-old.png",alt:"kubectl set context"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"advanced-context-configurations"},"Advanced context configurations"),(0,o.kt)("h3",{id:"using-context-with-namespaces"},"Using context with namespaces"),(0,o.kt)("p",null,"A namespace is an organizing tool for resources in a cluster. You'll be able to separate and group resources for a variety of projects, teams or purposes using namespaces. The ability to check access and quota for resources can also be achieved by using namespaces. By default, kubectl commands apply to the default namespace unless you specify a different namespace with the ",(0,o.kt)("strong",{parentName:"p"},"--namespace")," flag."),(0,o.kt)("p",null,"For instance, you can use the following command to update an existing context called '",(0,o.kt)("strong",{parentName:"p"},"dev-lex-frontend"),"' which uses the cluster '",(0,o.kt)("strong",{parentName:"p"},"cluster-2"),"' and the namespace '",(0,o.kt)("strong",{parentName:"p"},"app-frontend"),"':"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config set-context dev-lex-frontend --cluster=cluster-2 --namespace=app-frontend")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After running the command above, the configuration will look like this:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/10.png",alt:"kubectl set context"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"setting-specific-users-or-clusters-for-a-context"},"Setting specific users or clusters for a context"),(0,o.kt)("p",null,"In some cases, regardless of existing user or cluster settings, you may want to be using a particular user or cluster in your context. For Example, you may require using another user or cluster to run tests or for production purposes. If you create a context or if you modify it, use the ",(0,o.kt)("strong",{parentName:"p"},"--user")," or ",(0,o.kt)("strong",{parentName:"p"},"--cluster")," flag to achieve this."),(0,o.kt)("p",null,"Now, let's modify an existing context that uses the cluster '",(0,o.kt)("strong",{parentName:"p"},"cluster-2"),"', by specifying a user for it through the command below:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config set-context dev-lex-frontend --cluster=cluster-2 --user=lex")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After running the command above, the configuration will look like this:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-27-kubecti-config/11.png",alt:"kubectl set context"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"potential-pitfalls--troubleshooting"},"Potential pitfalls & troubleshooting"),(0,o.kt)("h3",{id:"common-errors-and-misconfigurations"},"Common errors and misconfigurations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"No Context Found:"),"\nThe following error occurred when kubectl failed to find a valid context in your kubeconfig file or KUBECONFIG Environment Variable. It may occur if you have failed to configure your kubeconfig file correctly or if you've deleted or renamed the context that was used before."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User or cluster does not have context configured correctly:"),"\nThis error indicates that none of the defined users or clusters in the kubeconfig match the user or cluster specified in the context. This may occur if user or cluster credentials are changed or you have more than one kubeconfig file with different settings."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Context isn't working as expected:"),"\nThis error means that the context you are using is not behaving in accordance with your expectations. For Example, resources may appear from a different namespace or cluster than the one specified in this context. This may happen if you've overridden the context settings with other flags or commands, like '",(0,o.kt)("strong",{parentName:"p"},"namespace"),"' or '",(0,o.kt)("strong",{parentName:"p"},"kubeconfig"),"'."),(0,o.kt)("h3",{id:"tips-for-troubleshooting-context-related-issues"},"Tips for troubleshooting context-related issues"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can use the '",(0,o.kt)("strong",{parentName:"li"},"kubectl config set-context"),"' command to create or modify a context or the '",(0,o.kt)("strong",{parentName:"li"},"kubectl config use-context"),"' command to switch to an existing context to resolve the no context found error. The ",(0,o.kt)("strong",{parentName:"li"},"kubectl config get-contexts")," command can be used to specify all the contexts that are accessible for your kubeconfig file."),(0,o.kt)("li",{parentName:"ol"},"Use the '",(0,o.kt)("strong",{parentName:"li"},"kubectl config set-context"),"' with user or cluster flags to specify the correct user or cluster for the context to fix the context not set error. In order to see details of your existing user and cluster settings, you may also use the '",(0,o.kt)("strong",{parentName:"li"},"kubectl config view"),"' command."),(0,o.kt)("li",{parentName:"ol"},"Check if there are conflicting flags or commands in your kubectl command line to correct a context not working error, and remove them where appropriate. To determine the name of your current context, you may also use a '",(0,o.kt)("strong",{parentName:"li"},"kubectl config current-context"),"' command.")),(0,o.kt)("h2",{id:"integration-with-cicd-pipelines"},"Integration with CI/CD pipelines"),(0,o.kt)("h3",{id:"brief-about-how-context-management-can-help-in-continuous-deployment-and-integration-scenarios"},"Brief about how context management can help in continuous deployment and integration scenarios"),(0,o.kt)("p",null,"Context management allows applications to be deployed and updated across different environments, e.g., development, testing, staging or production, which can contribute to the CI/CD integration scenarios. You can also use context management to determine various scenarios or access a variety of resources depending on the users or roles you are using."),(0,o.kt)("p",null,"Context management makes precise, automated deployments possible when integrated into CI/CD processes. A CD pipeline might, for example, deploy code to a '",(0,o.kt)("strong",{parentName:"p"},"staging"),"' or '",(0,o.kt)("strong",{parentName:"p"},"production"),"' context in accordance with predetermined criteria, whereas a CI pipeline might build and test the code in a '",(0,o.kt)("strong",{parentName:"p"},"development"),"' context."),(0,o.kt)("h2",{id:"conclusion--further-reading"},"Conclusion & further reading"),(0,o.kt)("h3",{id:"summing-up-the-importance-of-effective-context-management"},"Summing up the importance of effective context management"),(0,o.kt)("p",null,"In order to achieve a seamless operation of the processes, context management is required in Kubernetes. Users can quickly and safely switch among various cluster environments through the efficient management of contexts, ensuring security and precise deployment. In multi-project scenarios, it improves efficiency by streamlining operations, reducing errors and increasing productivity."),(0,o.kt)("h3",{id:"pointing-to-additional-resources-or-documentation"},"Pointing to additional resources or documentation"),(0,o.kt)("p",null,"Read the official Kubernetes documentation, specialized community forums and dedicated online trainings to get a better understanding of context management."))}p.isMDXComponent=!0}}]);