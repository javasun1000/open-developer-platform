(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{167:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(10),c=(r(0),r(176)),o=r(178),i={id:"nodesecurity",title:"Node Security"},u={id:"development-infrastructure/code-validation/nodesecurity",title:"Node Security",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/development-infrastructure/code-validation/nodesecurity.mdx",permalink:"/docs/development-infrastructure/code-validation/nodesecurity",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/code-validation/nodesecurity.mdx",sidebar:"mainSidebar",previous:{title:"Coverity Scan",permalink:"/docs/development-infrastructure/code-validation/coverityscan"},next:{title:"Sonar Cloud",permalink:"/docs/development-infrastructure/code-validation/sonarcloud"}},s=[{value:"Request access",id:"request-access",children:[]}],b={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("img",{height:"150px",alt:"nodesecurity-logo",src:Object(o.a)("img/vendors/nodesecurity-logo.png")}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Name")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"nodesecurity")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Status")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delivered")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Link")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"nodesecurity.io"}),"nodesecurity.io"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Topics")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Security, Quality")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Languages")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Javascript")))),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://nodesecurity.io/"}),"Node Security Platform")," (NSP) helps you understand how secure your app is, learn to confidently build more secure code, and be prepared to defend and respond to threats as you encounter them."),Object(c.b)("p",null,"Below are some of the most important features used by Foundation projects:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Integration with CI environments"),Object(c.b)("li",{parentName:"ol"},"Check libraries for security vulnerabilities")),Object(c.b)("img",{alt:"nodesecurity-dashboard",src:Object(o.a)("img/vendors/nodesecurity-dashboard.png")}),Object(c.b)("h2",{id:"request-access"},"Request access"),Object(c.b)("p",null,"Simply sign into ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"nodesecurity.io"}),"nodesecurity.io")," using your Github ID and register your project."))}l.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},l=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=b(r),p=n,m=l["".concat(o,".").concat(p)]||l[p]||d[p]||c;return r?a.a.createElement(m,i({ref:t},s,{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},177:function(e,t,r){"use strict";var n=r(0),a=r(56);t.a=function(){return Object(n.useContext)(a.a)}},178:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(179);var n=r(177);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},179:function(e,t,r){"use strict";var n=r(8),a=r(20),c=r(180),o="".startsWith;n(n.P+n.F*r(181)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,r):t.slice(r,r+n.length)===n}})},180:function(e,t,r){var n=r(76),a=r(28);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},181:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);