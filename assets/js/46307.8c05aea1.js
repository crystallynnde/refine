"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46307],{46307:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/core/src/index.tsx","description":"{@link https://refine.dev/docs/api-reference/core/components/refine-config `<Refine> component`} is the entry point of a refine app.\\nIt is where the highest level of configuration of the app occurs.\\nOnly a dataProvider is required to bootstrap the app. After adding a dataProvider, resources can be added as property.","displayName":"Refine","props":{"resources":{"defaultValue":null,"description":"`resources` is the predefined interaction points for a refine app. A resource represents an entity in an endpoint in the API.\\nWhile this is not a required property, it is used in resource detection and creation of routes for the app.","name":"resources","required":false,"type":{"name":"[`ResourceProps[]`](https://refine.dev/docs/api-reference/core/components/refine-config/#resources)"},"tags":{"type":"[`ResourceProps[]`] (https://refine.dev/docs/api-reference/core/components/refine-config/#resources)"}},"legacyRouterProvider":{"defaultValue":null,"description":"**refine** needs some router functions to create resource pages, handle navigation, etc. This provider allows you to use the router library you want","name":"legacyRouterProvider","required":false,"type":{"name":"[`IRouterProvider`](https://refine.dev/docs/api-reference/core/providers/router-provider/)"},"tags":{"type":"[`IRouterProvider`] (https://refine.dev/docs/api-reference/core/providers/router-provider/)","deprecated":"This property is deprecated and was the legacy way of routing. Please use `routerProvider` with new router bindings instead."}},"routerProvider":{"defaultValue":null,"description":"Router bindings for **refine**. A simple interface for **refine** to interact with your router in a flexible way.","name":"routerProvider","required":false,"type":{"name":"[`RouterProvider`](https://refine.dev/docs/routing/router-provider/)"},"tags":{"type":"[`RouterProvider`] (https://refine.dev/docs/routing/router-provider/)"}},"dataProvider":{"defaultValue":null,"description":"A `dataProvider` is the place where a refine app communicates with an API. Data providers also act as adapters for refine, making it possible for it to consume different API\'s and data services.","name":"dataProvider","required":false,"type":{"name":"[`DataProvider` | `DataProviders`](https://refine.dev/docs/api-reference/core/providers/data-provider/)"},"tags":{"type":"[`DataProvider` | `DataProviders`] (https://refine.dev/docs/api-reference/core/providers/data-provider/)"}},"authProvider":{"defaultValue":null,"description":"`authProvider` handles authentication logic like login, logout flow and checking user credentials. It is an object with methods that refine uses when necessary.","name":"authProvider","required":false,"type":{"name":"[`AuthProvider`](https://refine.dev/docs/api-reference/core/providers/auth-provider/)"},"tags":{"type":"[`AuthProvider`] (https://refine.dev/docs/api-reference/core/providers/auth-provider/)"}},"legacyAuthProvider":{"defaultValue":null,"description":"`legacyAuthProvider` handles authentication logic like login, logout flow and checking user credentials. It is an object with methods that refine uses when necessary.","name":"legacyAuthProvider","required":false,"type":{"name":"[`AuthProvider`](https://refine.dev/docs/api-reference/core/providers/auth-provider/)"},"tags":{"type":"[`AuthProvider`] (https://refine.dev/docs/api-reference/core/providers/auth-provider/)","deprecated":"`legacyAuthProvider` is deprecated with refine@4, use `authProvider` instead."}},"liveProvider":{"defaultValue":null,"description":"**refine** lets you add Realtime support to your app via `liveProvider`. It can be used to update and show data in Realtime throughout your app.","name":"liveProvider","required":false,"type":{"name":"[`LiveProvider`](https://refine.dev/docs/api-reference/core/providers/live-provider/)"},"tags":{"type":"[`LiveProvider`] (https://refine.dev/docs/api-reference/core/providers/live-provider/)"}},"notificationProvider":{"defaultValue":null,"description":"`notificationProvider` handles notification logics. It is an object with methods that refine uses when necessary.","name":"notificationProvider","required":false,"type":{"name":"[`NotificationProvider` | `(() => NotificationProvider)`](https://refine.dev/docs/api-reference/core/providers/notification-provider/)"},"tags":{"type":"[`NotificationProvider` | `(() => NotificationProvider)`] (https://refine.dev/docs/api-reference/core/providers/notification-provider/)"}},"accessControlProvider":{"defaultValue":null,"description":"`accessControlProvider` is the entry point for implementing access control for refine apps.","name":"accessControlProvider","required":false,"type":{"name":"[`AccessControlProvider`](https://refine.dev/docs/api-reference/core/providers/accessControl-provider/)"},"tags":{"type":"[`AccessControlProvider`] (https://refine.dev/docs/api-reference/core/providers/accessControl-provider/)"}},"auditLogProvider":{"defaultValue":null,"description":"**refine** allows you to track changes in your data and keep track of who made the changes.","name":"auditLogProvider","required":false,"type":{"name":"[`AuditLogProvider`](https://refine.dev/docs/api-reference/core/providers/audit-log-provider#overview)"},"tags":{"type":"[`AuditLogProvider`] (https://refine.dev/docs/api-reference/core/providers/audit-log-provider#overview)"}},"i18nProvider":{"defaultValue":null,"description":"`i18nProvider` property lets you add i18n support to your app. Making you able to use any i18n framework.","name":"i18nProvider","required":false,"type":{"name":"[`i18nProvider`](https://refine.dev/docs/api-reference/core/providers/i18n-provider/)"},"tags":{"type":"[`i18nProvider`] (https://refine.dev/docs/api-reference/core/providers/i18n-provider/)"}},"catchAll":{"defaultValue":null,"description":"A custom error component.","name":"catchAll","required":false,"type":{"name":"[`ReactNode`](https://refine.dev/docs/api-reference/core/components/refine-config/#catchall)"},"tags":{"type":"[`ReactNode`] (https://refine.dev/docs/api-reference/core/components/refine-config/#catchall)","deprecated":"Please use the `catchAll` element in your routes instead."}},"LoginPage":{"defaultValue":null,"description":"Custom login component can be passed to the `LoginPage` property.","name":"LoginPage","required":false,"type":{"name":"[`React.FC`](https://refine.dev/docs/api-reference/core/components/refine-config/#loginpage)"},"tags":{"type":"[`React.FC`] (https://refine.dev/docs/api-reference/core/components/refine-config/#loginpage)","deprecated":"Please use the `LoginPage` component in your routes instead."}},"DashboardPage":{"defaultValue":null,"description":"A custom dashboard page can be passed to the `DashboardPage` prop which is accessible on root route.","name":"DashboardPage","required":false,"type":{"name":"[`React.FC<DashboardPageProps>`](https://refine.dev/docs/api-reference/core/components/refine-config/#dashboardpage)"},"tags":{"type":"[`React.FC<DashboardPageProps>`] (https://refine.dev/docs/api-reference/core/components/refine-config/#dashboardpage)","deprecated":"Please use the `DashboardPage` component in your routes instead."}},"ReadyPage":{"defaultValue":null,"description":"Custom ready page component can be set by passing to `ReadyPage` property.","name":"ReadyPage","required":false,"type":{"name":"[`React.FC`](https://refine.dev/docs/api-reference/core/components/refine-config/#readypage)"},"tags":{"type":"[`React.FC`] (https://refine.dev/docs/api-reference/core/components/refine-config/#readypage)","deprecated":"This component is only used with the legacy router and will be removed in the future."}},"Layout":{"defaultValue":null,"description":"Default layout can be customized by passing the `Layout` property.","name":"Layout","required":false,"type":{"name":"[`React.FC<LayoutProps>`](https://refine.dev/docs/api-reference/core/components/refine-config/#layout)"},"tags":{"type":"[`React.FC<LayoutProps>`] (https://refine.dev/docs/api-reference/core/components/refine-config/#layout)","deprecated":"Please use the `Layout` component as a children instead of a prop."}},"Sider":{"defaultValue":null,"description":"The default sidebar can be customized by using refine hooks and passing custom components to `Sider` property.","name":"Sider","required":false,"type":{"name":"[`React.FC`](https://refine.dev/docs/api-reference/core/components/refine-config/#sider)"},"tags":{"type":"[`React.FC`] (https://refine.dev/docs/api-reference/core/components/refine-config/#sider)","deprecated":"Please pass the `Sider` component to your `Layout` component."}},"Header":{"defaultValue":null,"description":"The default app header can be customized by passing the `Header` property.","name":"Header","required":false,"type":{"name":"[`React.FC`](https://refine.dev/docs/api-reference/core/components/refine-config/#header)"},"tags":{"type":"[`React.FC`] (https://refine.dev/docs/api-reference/core/components/refine-config/#header)","deprecated":"Please pass the `Header` component to your `Layout` component."}},"Footer":{"defaultValue":null,"description":"The default app footer can be customized by passing the `Footer` property.","name":"Footer","required":false,"type":{"name":"[`React.FC`](https://refine.dev/docs/api-reference/core/components/refine-config/#footer)"},"tags":{"type":"[`React.FC`] (https://refine.dev/docs/api-reference/core/components/refine-config/#footer)","deprecated":"Please pass the `Footer` component to your `Layout` component."}},"OffLayoutArea":{"defaultValue":null,"description":"The component wanted to be placed out of app layout structure can be set by passing to `OffLayoutArea` prop.","name":"OffLayoutArea","required":false,"type":{"name":"[`React.FC`](https://refine.dev/docs/api-reference/core/components/refine-config/#offlayoutarea)"},"tags":{"type":"[`React.FC`] (https://refine.dev/docs/api-reference/core/components/refine-config/#offlayoutarea)","deprecated":"Please use your `OffLayoutArea` component as a children instead of a prop."}},"Title":{"defaultValue":null,"description":"TThe app title can be set by passing the `Title` property.","name":"Title","required":false,"type":{"name":"[`React.FC<TitleProps>`](https://refine.dev/docs/api-reference/core/components/refine-config/#title)"},"tags":{"type":"[`React.FC<TitleProps>`] (https://refine.dev/docs/api-reference/core/components/refine-config/#title)","deprecated":"Please pass the `Title` component to your `Layout` component."}},"onLiveEvent":{"defaultValue":null,"description":"Callback to handle all live events.","name":"onLiveEvent","required":false,"type":{"name":"[`(event: LiveEvent) => void`](https://refine.dev/docs/api-reference/core/providers/live-provider/#onliveevent)"},"tags":{"type":"[`(event: LiveEvent) => void`] (https://refine.dev/docs/api-reference/core/providers/live-provider/#onliveevent)"}},"options":{"defaultValue":null,"description":"`options` is used to configure the app.","name":"options","required":false,"type":{"name":"[`IRefineOptions`](https://refine.dev/docs/api-reference/core/components/refine-config/#options)"},"tags":{"type":"[`IRefineOptions`] (https://refine.dev/docs/api-reference/core/components/refine-config/#options)"}}},"generatedAt":1716564155047}')}}]);