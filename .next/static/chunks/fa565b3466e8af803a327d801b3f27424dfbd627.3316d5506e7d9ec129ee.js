(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery;return n||a&&(void 0!==o&&o)}e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))}},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"1Yj4":function(t,e,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("17x9"),u=n.n(c),l=n("TSYQ"),s=n.n(l),f=n("33Jr"),p={tag:f.c,fluid:u.a.oneOfType([u.a.bool,u.a.string]),className:u.a.string,cssModule:u.a.object},d=function(t){var e=t.className,n=t.cssModule,o=t.fluid,c=t.tag,u=Object(a.a)(t,["className","cssModule","fluid","tag"]),l="container";!0===o?l="container-fluid":o&&(l="container-"+o);var p=Object(f.b)(s()(e,l),n);return i.a.createElement(c,Object(r.a)({},u,{className:p}))};d.propTypes=p,d.defaultProps={tag:"div"},e.a=d},"5Yp1":function(t,e,n){"use strict";var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),i=n("md7G"),c=n("foSv"),u=n("q1tI"),l=n.n(u),s=n("8Kt/"),f=n.n(s),p=n("YFqc"),d=n.n(p),v=n("wx14"),m=n("zLVn"),b=n("17x9"),y=n.n(b),h=n("TSYQ"),g=n.n(h),j=n("33Jr"),O={tabs:y.a.bool,pills:y.a.bool,vertical:y.a.oneOfType([y.a.bool,y.a.string]),horizontal:y.a.string,justified:y.a.bool,fill:y.a.bool,navbar:y.a.bool,card:y.a.bool,tag:j.c,className:y.a.string,cssModule:y.a.object},w=function(t){var e=t.className,n=t.cssModule,r=t.tabs,a=t.pills,o=t.vertical,i=t.horizontal,c=t.justified,u=t.fill,s=t.navbar,f=t.card,p=t.tag,d=Object(m.a)(t,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),b=Object(j.b)(g()(e,s?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(t){return!1!==t&&(!0===t||"xs"===t?"flex-column":"flex-"+t+"-column")}(o),{"nav-tabs":r,"card-header-tabs":f&&r,"nav-pills":a,"card-header-pills":f&&a,"nav-justified":c,"nav-fill":u}),n);return l.a.createElement(p,Object(v.a)({},d,{className:b}))};w.propTypes=O,w.defaultProps={tag:"ul",vertical:!1};var S=w,_={tag:j.c,active:y.a.bool,className:y.a.string,cssModule:y.a.object},x=function(t){var e=t.className,n=t.cssModule,r=t.active,a=t.tag,o=Object(m.a)(t,["className","cssModule","active","tag"]),i=Object(j.b)(g()(e,"nav-item",!!r&&"active"),n);return l.a.createElement(a,Object(v.a)({},o,{className:i}))};x.propTypes=_,x.defaultProps={tag:"li"};var M=x,k=n("1Yj4"),P=l.a.createElement;function A(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var a=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var N=function(t){Object(o.a)(n,t);var e=A(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props.children;return P("div",null,P(f.a,null,P("title",null,"Welcome to Nextjs"),P("meta",{charSet:"utf-8"}),P("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),P("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"})),P("header",null,P(S,{className:"navbar navbar-dark bg-dark"},P(M,null,P(d.a,{href:"/"},P("a",{className:"navbar-brand"},"Home"))),P(M,{className:"ml-auto"},P(d.a,{href:"/signin"},P("a",{className:"nav-link"},"Sign In"))),P(M,null,P(d.a,{href:"/signup"},P("a",{className:"nav-link"}," Sign Up"))),P(M,null,P(d.a,{href:"/my/name/[names]/setting",as:"/my/name/pooria/setting"},P("a",{className:"nav-link"}," setting"))),P(M,null,P(d.a,{href:"/test"},P("a",{className:"nav-link"}," test"))))),P(k.a,null,t))}}]),n}(l.a.Component);e.a=N},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("Xuae")),i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var l=f[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var s=a.props[l],p=r[l]||new Set;p.has(s)?o=!1:(p.add(s),r[l]=p)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}var d=o.default();function v(t){var e=t.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:u.isInAmpMode(t)},e)}))}))}v.rewind=d.rewind,e.default=v},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI"));e.HeadManagerContext=a.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return a}))},RIqP:function(t,e,n){var r=n("Ijbi"),a=n("EbDI"),o=n("Bnag");t.exports=function(t){return r(t)||a(t)||o()}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),c=n("a1gu"),u=n("Nsbk"),l=n("RIqP");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(c){i(l,c);var u=s(l);function l(t){var o;return r(this,l),o=u.call(this,t),p&&(e.add(a(o)),n(a(o))),o}return o(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),o(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component))}},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI"));e.AmpStateContext=a.createContext({})},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return(a="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return i}));var o=n("JX7q");function i(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?Object(o.a)(t):e}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))}}]);