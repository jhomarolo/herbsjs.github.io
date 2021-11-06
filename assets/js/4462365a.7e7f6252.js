"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[1693],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=o,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22925:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"herbsjs",title:"What's Herbs?",sidebar_label:"What's Herbs?",slug:"/introduction/whats-herbs",custom_edit_url:null},c={unversionedId:"introduction/herbsjs",id:"introduction/herbsjs",isDocsHomePage:!1,title:"What's Herbs?",description:"Herbs is an open source library for backend applications. It is focused on achieving faster deliveries and with happier developers, without neglecting the long-term need to constantly evolve your application as requirements change. Herbs allow you to build your microservices in node.js faster and future proof.",source:"@site/docs/introduction/what-is-herbjs.md",sourceDirName:"introduction",slug:"/introduction/whats-herbs",permalink:"/docs/introduction/whats-herbs",editUrl:null,version:"current",sidebar_label:"What's Herbs?",frontMatter:{id:"herbsjs",title:"What's Herbs?",sidebar_label:"What's Herbs?",slug:"/introduction/whats-herbs",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Getting Started with Herbs",permalink:"/docs/"},next:{title:"1. Creating a New Herbs Project",permalink:"/docs/tutorial/new-project"}},l=[],u={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../img/logo-herbsjs.png",height:"220",alt:"herbsjs logo"})),(0,i.kt)("p",null,"Herbs is an open source library for backend applications. It is focused on achieving faster deliveries and with happier developers, without neglecting the long-term need to constantly evolve your application as requirements change. Herbs allow you to build your microservices in node.js faster and future proof."),(0,i.kt)("p",null,'Herbs uses a "',(0,i.kt)("strong",{parentName:"p"},"Domain-First"),'" approach in order to achieve this: You and your team focus on your business domain and let Herbs handles the infrastructure code. Herbs will extract metadata from your domain and dynamically generate, on the fly (no code generation), your transport and repositories layers using the best existing libraries in the ecosystem. '),(0,i.kt)("p",null,"The world is complex, so being humble is part of Herbs' tenets. While we believe Herbs will help you in most cases, we are aware that there will be advanced scenarios that the defaults won't be enough for your application to make a difference. This means having flexible conventions, an extensible library and not replacing or hiding any abstraction important to your application."))}p.isMDXComponent=!0}}]);