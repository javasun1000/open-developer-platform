(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(10),c=(r(0),r(176)),o=r(178),i={id:"coverityscan",title:"Coverity Scan"},s={id:"development-infrastructure/code-validation/coverityscan",title:"Coverity Scan",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/development-infrastructure/code-validation/coverityscan.mdx",permalink:"/docs/development-infrastructure/code-validation/coverityscan",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/code-validation/coverityscan.mdx",sidebar:"mainSidebar",previous:{title:"Code Climate",permalink:"/docs/development-infrastructure/code-validation/codeclimate"},next:{title:"Node Security",permalink:"/docs/development-infrastructure/code-validation/nodesecurity"}},b=[{value:"Request access",id:"request-access",children:[]}],l={rightToc:b};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("img",{height:"150px",alt:"coverity-logo",src:Object(o.a)("img/vendors/coverity-logo.png")}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Name")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Coverity")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Status")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delivered")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Link")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"scan.coverity.com"}),"scan.coverity.com"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Topics")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Security,Quality")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Languages")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Java, Javascript, C#, Python")))),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://scan.coverity.com/"}),"Coverity Scan")," service was initiated with the U.S. Department of Homeland Security as the largest public-private sector research project in the world, focused on open source software quality and security; it is now a free service to the open source community."),Object(c.b)("p",null,"Below are listed the main CoverityScan features that have been adopted by Foundation projects."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Integration with CI environments"),Object(c.b)("li",{parentName:"ol"},"Scans code for security vulnerabilities"),Object(c.b)("li",{parentName:"ol"},"Scans code for bad practices"),Object(c.b)("li",{parentName:"ol"},"Scans code for bugs")),Object(c.b)("p",null,"Please note that Coverity applies ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://scan.coverity.com/faq#frequency"}),"frequency build limits"),"; the build configuration (and/or branching strategy) must be adapted to avoid high submission rate."),Object(c.b)("img",{alt:"coverity-dashboard",src:Object(o.a)("img/vendors/coverity-dashboard.png")}),Object(c.b)("img",{alt:"coverity-metrics",src:Object(o.a)("img/vendors/coverity-metrics.png")}),Object(c.b)("h2",{id:"request-access"},"Request access"),Object(c.b)("p",null,"CoverityScan provides a Github signup that grants access to a personal dashboard and register a new Github project."),Object(c.b)("img",{alt:"coverity-new-project",src:Object(o.a)("img/vendors/coverity-new-project.png")}))}u.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||c;return r?a.a.createElement(m,i({ref:t},b,{components:r})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},177:function(e,t,r){"use strict";var n=r(0),a=r(56);t.a=function(){return Object(n.useContext)(a.a)}},178:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(179);var n=r(177);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},179:function(e,t,r){"use strict";var n=r(8),a=r(20),c=r(180),o="".startsWith;n(n.P+n.F*r(181)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,r):t.slice(r,r+n.length)===n}})},180:function(e,t,r){var n=r(76),a=r(28);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},181:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);