/*! For license information please see eea88ad0.b50aab76.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[454692],{164376:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(824246),o=r(511151);const a={id:"plugin-scaffolder-backend.taskstorecreatetaskresult",title:"TaskStoreCreateTaskResult",description:"API reference for TaskStoreCreateTaskResult"},s=void 0,c={unversionedId:"reference/plugin-scaffolder-backend.taskstorecreatetaskresult",id:"reference/plugin-scaffolder-backend.taskstorecreatetaskresult",title:"TaskStoreCreateTaskResult",description:"API reference for TaskStoreCreateTaskResult",source:"@site/../docs/reference/plugin-scaffolder-backend.taskstorecreatetaskresult.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.taskstorecreatetaskresult",permalink:"/docs/reference/plugin-scaffolder-backend.taskstorecreatetaskresult",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.taskstorecreatetaskresult.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.taskstorecreatetaskresult",title:"TaskStoreCreateTaskResult",description:"API reference for TaskStoreCreateTaskResult"}},u={},i=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstorecreatetaskresult",children:(0,n.jsx)(t.code,{children:"TaskStoreCreateTaskResult"})})]}),"\n",(0,n.jsxs)(t.p,{children:["The response from ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.createtask",children:"TaskStore.createTask()"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.b,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type TaskStoreCreateTaskResult = {\n    taskId: string;\n};\n"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,s,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var i in a=Object(arguments[u]))r.call(a,i)&&(c[i]=a[i]);if(t){s=t(a);for(var f=0;f<s.length;f++)n.call(a,s[f])&&(c[s[f]]=a[s[f]])}}return c}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,a={},i=null,f=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:f,props:a,_owner:s.current}}t.jsx=i,t.jsxs=i},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,c=60110,u=60112;t.Suspense=60113;var i=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),s=l("react.provider"),c=l("react.context"),u=l("react.forward_ref"),t.Suspense=l("react.suspense"),i=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function h(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||y}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var m=v.prototype=new b;m.constructor=v,n(m,h.prototype),m.isPureReactComponent=!0;var g={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,a={},s=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)_.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var i=Array(u),f=0;f<u;f++)i[f]=arguments[f+2];a.children=i}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:s,ref:c,props:a,_owner:g.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return s=s(u=e),e=""===n?"."+C(u,0):n,Array.isArray(s)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),x(s,t,r,"",(function(e){return e}))):null!=s&&(O(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),t.push(s)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=n+C(c=e[i],i);u+=x(c,t,r,f,s)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(c=e.next()).done;)u+=x(c=c.value,t,r,f=n+C(c,i++),s);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function R(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function P(){var e=T.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:R,forEach:function(e,t,r){R(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},t.Component=h,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var a=n({},e.props),s=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=g.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in t)_.call(t,f)&&!j.hasOwnProperty(f)&&(a[f]=void 0===t[f]&&void 0!==i?i[f]:t[f])}var f=arguments.length-2;if(1===f)a.children=r;else if(1<f){i=Array(f);for(var l=0;l<f;l++)i[l]=arguments[l+2];a.children=i}return{$$typeof:o,type:e.type,key:s,ref:c,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:i,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>a});var n=r(667294);const o=n.createContext({});function a(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||s:a(e),n.createElement(o.Provider,{value:c},t)}}}]);