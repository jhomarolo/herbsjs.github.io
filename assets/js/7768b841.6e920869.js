"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[5959],{36742:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(63366),o=n(67294),i=n(73727),u=n(13919),a=n(10412),c=(0,o.createContext)({collectLink:function(){}}),s=n(44996),l=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f,d=e.isNavLink,v=e.to,h=e.href,m=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],p=e.autoAddBaseUrl,Z=void 0===p||p,E=(0,r.Z)(e,l),C=(0,s.C)().withBaseUrl,k=(0,o.useContext)(c),w=v||h,j=(0,u.Z)(w),y=null==w?void 0:w.replace("pathname://",""),N=void 0!==y?(n=y,Z&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0,U=(0,o.useRef)(!1),A=d?i.OL:i.rU,L=a.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!L&&j&&null!=N&&window.docusaurus.prefetch(N),function(){L&&f&&f.disconnect()}}),[N,L,j]);var O=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,B=!N||!j||O;return N&&j&&!O&&!g&&k.collectLink(N),B?o.createElement("a",Object.assign({href:N},w&&!j&&{target:"_blank",rel:"noopener noreferrer"},E)):o.createElement(A,Object.assign({},E,{onMouseEnter:function(){U.current||null==N||(window.docusaurus.preload(N),U.current=!0)},innerRef:function(e){var t,n;L&&e&&j&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:N||""},d&&{isActive:b,activeClassName:m}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return u}});var r=n(52263),o=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},82924:function(e,t,n){var r=n(67294).createContext(void 0);t.Z=r},85350:function(e,t,n){var r=n(67294),o=n(82924);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},17478:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(67294),o=n(86010),i="heroBanner_fJ9I",u="getStarted_piF7",a="buttons_XC4p",c="versionInfo_oUdY",s=n(36742),l=n(44996),f=n(13984),d=n(91262),v=n(85350),h=function(){return r.createElement(d.Z,{fallback:r.createElement("img",{alt:"herbsjs logo",src:"img/logo-herbsjs.png"})},(function(){var e=(0,v.Z)().isDarkTheme?"img/logo-herbsjs-douradoebranco.png":"img/logo-herbsjs.png",t=(0,l.Z)(e);return r.createElement("img",{src:t})}))},m=function(e){var t=e.version;return r.createElement("header",{className:(0,o.Z)("hero",i)},r.createElement("div",{className:"container"},r.createElement(h,null),r.createElement("h4",null,"UNLOCK YOUR DOMAIN"),r.createElement("div",{className:a},r.createElement(s.Z,{className:(0,o.Z)("button button--outline button--primary button--lg",u),to:(0,l.Z)("docs/")},"Get started")," ",r.createElement(s.Z,{className:(0,o.Z)("button button--primary button--lg",u),to:"https://github.com/herbsjs"},r.createElement(f.Z,{fontSize:"small"})," Start")),r.createElement("div",{className:c},t&&r.createElement("p",null,"Last stable version ",r.createElement("a",{href:"https://github.com/herbsjs/herbs/releases/tag/v"+t,rel:"noopener noreferrer",target:"_blank"}," ",t," ")))))}},86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},30907:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},40181:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(30907);function o(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);