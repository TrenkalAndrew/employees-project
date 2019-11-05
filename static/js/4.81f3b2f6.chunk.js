(this["webpackJsonpemployees-project"]=this["webpackJsonpemployees-project"]||[]).push([[4],{48:function(e,t,n){"use strict";var r=n(49),a=n.n(r),c=n(50),o=n(51),i=n.n(o),l=n(4),s=i.a.create({baseURL:l.b}),u={getEmployees:function(){return s.get(l.a)},getEmployeeById:function(e){return s.get("".concat(l.d,"/").concat(e))},createComment:function(e,t,n,r){return s.post(l.c,{id:e,label:t,text:n,phone:r})}};n.d(t,"c",function(){return f}),n.d(t,"b",function(){return m}),n.d(t,"a",function(){return d});var f=function(e){e(p()),u.getEmployees().then(function(t){var n=t.data,r=n.success;e(r?v(n.data):h(n.message))}).catch(function(t){return e(h(l.e))})},m=function(e,t){return function(n){t?(n(p()),u.getEmployees().then(function(){var t=Object(c.a)(a.a.mark(function t(r){var c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:c=r.data,c.success?(n(v(c.data)),n(y()),j(e,n)):n(h(c.message));case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){return n(h(l.e))})):(n(y()),j(e,n))}},d=function(e,t,n,r){return function(a){a(g()),u.createComment(e,t,n,r).then(function(c){var o=c.data,i=o.success;a(i?E({id:e,title:t,text:n,phone:r,date:(new Date).getTime()}):O(o.message))}).catch(function(e){return a(O(l.e))})}},p=function(){return{type:l.j}},v=function(e){return{type:l.k,payload:e}},h=function(e){return{type:l.i,payload:e}},y=function(){return{type:l.m}},b=function(e){return{type:l.l,payload:e}},g=function(){return{type:l.g}},E=function(e){return{type:l.h,payload:e}},O=function(e){return{type:l.f,payload:e}},j=function(e,t){u.getEmployeeById(e).then(function(e){var n,r=e.data,a=r.success;t(a?(n=r.data,{type:l.n,payload:n}):b(r.message))}).catch(b(l.e))}},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),o=n(48),i=n(21),l=(n(80),n(11)),s=function(e){var t=e.title,n=e.imageSrc,r=e.alt,c=e.url,o=e.linkText,s=e.children;return a.a.createElement("div",{className:"col s12"},t&&a.a.createElement("h2",{className:"header"},t),a.a.createElement("div",{className:"card horizontal"},a.a.createElement("div",{className:"card-image"},a.a.createElement("span",null,a.a.createElement(i.a,{src:n,alt:r}))),a.a.createElement("div",{className:"card-stacked"},a.a.createElement("div",{className:"card-content"},s),a.a.createElement("div",{className:"card-action"},a.a.createElement(l.b,{to:c},o)))))};s.defaultProps={url:"/",linkText:"Come back"};var u=s,f=function(e){return e<10?"0"+e:e},m=n(26);function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e){return(v="function"===typeof Symbol&&"symbol"===p(Symbol.iterator)?function(e){return p(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":p(e)})(e)}function h(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=n(22),E=(n(81),a.a.forwardRef(function(e,t){var n=e.onChange,c=e.type,o=e.label,i=e.size,l=e.name,s=e.withError,u=e.errorText,f=Object(r.useState)(!1),m=Object(g.a)(f,2),d=m[0],p=m[1];return a.a.createElement("div",{className:"input-field col s".concat(i)},a.a.createElement("input",{type:c,id:l,ref:t,onFocus:function(){p(!0)},onBlur:function(e){e.target.value||p(!1),n(e)},name:l}),a.a.createElement("label",{htmlFor:l,className:d?"active":""},o),s&&a.a.createElement("span",{className:"form-error-message"},u))}));E.defaultProps={type:"text",size:6,onChange:function(){},name:"",withError:!1};var O=E,j=a.a.forwardRef(function(e,t){var n=e.onChange,c=e.label,o=e.size,i=e.name,l=e.withError,s=e.errorText,u=Object(r.useState)(!1),f=Object(g.a)(u,2),m=f[0],d=f[1];return a.a.createElement("div",{className:"input-field col s".concat(o)},a.a.createElement("textarea",{ref:t,id:i,onFocus:function(){d(!0)},className:"materialize-textarea",onBlur:function(e){e.target.value||d(!1),n(e)},name:i}),a.a.createElement("label",{htmlFor:i,className:m?"active":""},c),l&&a.a.createElement("span",{className:"form-error-message"},s))});j.defaultProps={size:6,value:"",onChange:function(){},name:"",withError:!1};var w=j,N=n(4);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var x=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(n=h(this,(e=y(t)).call.apply(e,[this].concat(c)))).state={isValidForm:!1,title:"",text:"",phone:"",isValidFields:{title:!1,text:!1,phone:!1},errorMessages:{title:"",text:"",phone:""},rules:{title:{required:!0,minLength:5,maxLength:80},text:{required:!0,maxLength:128},phone:{required:!0,match:/^((\+7|7|8)+([0-9]){10})$/}}},n.titleRef=a.a.createRef(),n.textRef=a.a.createRef(),n.phoneRef=a.a.createRef(),n.onHandleChange=function(e){var t=e.target,r=t.name,a=t.value;n.setState(function(e){var t=k({},e);return t[r]=a,t},function(){return n.checkValidField(r)})},n.checkValidField=function(e){var t=n.state[e],r=n.state.rules[e],a=function(a){if(a===N.w){if(!t)return n.setState(function(t){var n=k({},t);return n.errorMessages[e]=N.v,n["".concat(e,"Valid")]=!1,n.isValidFields[e]=!1,n},function(){return n.checkValidForm()}),{v:!1}}else if(a===N.u){if(t.length<r[a])return n.setState(function(t){var n=k({},t);return n.errorMessages[e]="".concat(N.t," ").concat(r[a]," symbols"),n.isValidFields[e]=!1,n},function(){return n.checkValidForm()}),{v:!1}}else if(a===N.s){if(t.length>r[a])return n.setState(function(t){var n=k({},t);return n.errorMessages[e]="".concat(N.r," ").concat(r[a]," symbols"),n.isValidFields[e]=!1,n},function(){return n.checkValidForm()}),{v:!1}}else if(a===N.p){if(!r[a].test(t))return n.setState(function(t){var n=k({},t);return n.errorMessages[e]="".concat(N.q," 0-9, '-', '+', '(', ')'"),n.isValidFields[e]=!1,n},function(){return n.checkValidForm()}),{v:!1}}};for(var c in r){var o=a(c);if("object"===typeof o)return o.v}n.setState(function(t){var n=k({},t);return n.isValidFields[e]=!0,n.errorMessages[e]="",n},function(){return n.checkValidForm()})},n.checkValidForm=function(){var e=n.state.isValidFields;for(var t in e)if(!e[t])return n.setState(function(e){return k({},e,{isValidForm:!1})}),!1;n.setState(function(e){return k({},e,{isValidForm:!0})})},n.onHandleSubmit=function(e){var t=n.props,r=t.submitHandler,a=t.id,c=n.state,o=c.title,i=c.text,l=c.phone;e.preventDefault(),r(a,o,i,l),n.clearForm()},n.clearForm=function(){n.setState({title:"",text:"",phone:"",isValidFields:{title:!1,text:!1,phone:!1},isValidForm:!1}),n.titleRef.current.value="",n.textRef.current.value="",n.phoneRef.current.value=""},n}var n,c,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,(c=[{key:"render",value:function(){var e=this.state,t=e.isValidForm,n=e.errorMessages;return a.a.createElement("form",{onSubmit:this.onHandleSubmit},a.a.createElement(O,{label:"title",size:12,ref:this.titleRef,onChange:this.onHandleChange,name:"title",withError:!0,errorText:n.title}),a.a.createElement(w,{label:"Text",size:12,ref:this.textRef,onChange:this.onHandleChange,name:"text",withError:!0,errorText:n.text}),a.a.createElement(O,{label:"Phone",size:12,ref:this.phoneRef,onChange:this.onHandleChange,name:"phone",withError:!0,errorText:n.phone}),a.a.createElement("button",{className:"btn waves-effect waves-light",disabled:!t},"Submit"))}}])&&d(n.prototype,c),o&&d(n,o),t}(),F=(n(82),n(23)),C=n.n(F),V=function(e){var t=e.position,n=e.clickHandler,r=C()("slider-nav-btn",{"slider-nav-btn-left":"left"===t,"slider-nav-btn-right":"right"===t});return a.a.createElement(a.a.Fragment,null,"left"===t?a.a.createElement("button",{className:r,onClick:n},"\u2039"):a.a.createElement("button",{className:r,onClick:n},"\u203a"))},P=function(e){var t=e.itemsOnScreen,n=(e.navButtons,e.dots),c=(e.clickHandler,e.autoPlay),o=e.children,i=Object(r.useState)(2),l=Object(g.a)(i,2),s=l[0],u=l[1],f=Object(r.useState)(1),m=Object(g.a)(f,2),d=m[0],p=m[1],v=Object(r.useState)(0),h=Object(g.a)(v,2),y=h[0],b=h[1],E=function(e){var t=s+e;-1===t?t=o.length-1:t===o.length&&(t=0),u(t)};return Object(r.useEffect)(function(){!function(){var e=document.getElementsByClassName("slider")[0].clientWidth;p(e),b(e/t)}()},[]),Object(r.useEffect)(function(){if(c){var e=setInterval(function(){u(s+1<o.length?s+1:0)},c);return function(){return clearInterval(e)}}},[s,o.length]),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col s12"},a.a.createElement("div",{className:"slider"},a.a.createElement(V,{position:"left",clickHandler:function(){return E(-1)}}),a.a.createElement("div",{className:"slider-wrap",style:t%2?{left:"".concat(-d/t*(s-(t-1)/2),"px")}:{}},o.map(function(e,n){var r=C()("slider-item",{active:n===s||!(t%2)});return a.a.createElement("div",{key:n,className:r,style:{width:"".concat(y,"px")}},a.a.createElement("div",{className:"slide-wrap"},e))})),a.a.createElement(V,{position:"right",clickHandler:function(){return E(1)}})),n&&a.a.createElement("div",{className:"dots"},o.map(function(e,n){var r=C()("dot",{active:n===s||!(t%2)});return a.a.createElement("div",{key:n,className:r,onClick:function(){return u(n)}})}))))};t.default=Object(c.b)(function(e){return{employees:e.employees}},function(e){return{getEmployees:function(){return e(o.c)},getEmployeeById:function(t,n){return e(Object(o.b)(t,n))},createComment:function(t,n,r,a){return e(Object(o.a)(t,n,r,a))}}})(function(e){var t=e.location,n=e.employees,c=e.getEmployeeById,o=e.createComment,s=function(){var e=t.pathname;return Number(e.split("/")[2])}();Object(r.useEffect)(function(){if(n.items.length){var e=n.items.find(function(e){return e.id===s});e?e.comments||c(s,!1):c(s,!0)}else c(s,!0)},[s]);var m=n.items.find(function(e){return e.id===s})||{},d=m.imageUrl,p=void 0===d?"":d,v=m.firstName,h=void 0===v?"":v,y=m.lastName,b=void 0===y?"":y,g=m.position,E=void 0===g?"":g,O=m.address,j=void 0===O?"":O,w=m.comments,S=(void 0===w?[]:w).sort(function(e,t){return t.date-e.date}).slice(0,5);return a.a.createElement("main",{className:"container layout"},a.a.createElement(P,{itemsOnScreen:3,navButtons:!0,dots:!0,autoPlay:4e3},n.items.map(function(e){var t=e.id,n=e.imageUrl,r=e.firstName,c=e.lastName,o=e.position;return a.a.createElement(l.b,{key:t,to:"".concat(N.d,"/").concat(t)},a.a.createElement(i.a,{src:n,alt:"".concat(r," ").concat(c," - ").concat(o)}))})),0!==Object.keys(m).length&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"row"},a.a.createElement(u,{imageSrc:p,alt:"".concat(h," ").concat(b," - ").concat(E)},a.a.createElement("h4",null,h," ",b),a.a.createElement("div",null,"Position: ",a.a.createElement("span",null,E)),a.a.createElement("div",null,"Address: ",a.a.createElement("span",null,j)),a.a.createElement("div",{className:"divider"}),a.a.createElement("div",null,"Latest comments:"),S.map(function(e){var t=e.title,n=e.text,r=e.date;return a.a.createElement("blockquote",{key:"".concat(r).concat(Math.random())},a.a.createElement("time",{dateTime:r},function(e){var t=new Date(Number(e)),n=t.getFullYear(),r=t.getMonth(),a=t.getDate(),c=t.getHours(),o=t.getMinutes(),i=t.getSeconds();return"".concat(f(a),".").concat(f(r),".").concat(n," ").concat(f(c),":").concat(f(o),":").concat(f(i))}(r)),a.a.createElement("div",null,a.a.createElement("em",null,t)),a.a.createElement("p",null,n))}))),a.a.createElement("div",{className:"row"},a.a.createElement(x,{submitHandler:o,id:s}))))})}}]);
//# sourceMappingURL=4.81f3b2f6.chunk.js.map