(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1156:function(e,t,a){"use strict";var n=a(0),r=a(189),o=a(18);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l,i,c={},d=4.5,u=24,m=24,f="topRight";function p(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m;switch(e){case"topLeft":t={left:0,top:a,bottom:"auto"};break;case"topRight":t={right:0,top:a,bottom:"auto"};break;case"bottomLeft":t={left:0,top:"auto",bottom:n};break;default:t={right:0,top:"auto",bottom:n}}return t}var h={success:"check-circle-o",info:"info-circle-o",error:"close-circle-o",warning:"exclamation-circle-o"};var v={open:function(e){var t=e.prefixCls||"ant-notification",a="".concat(t,"-notice"),s=void 0===e.duration?d:e.duration,u=null;if(e.icon)u=n.createElement("span",{className:"".concat(a,"-icon")},e.icon);else if(e.type){var m=h[e.type];u=n.createElement(o.a,{className:"".concat(a,"-icon ").concat(a,"-icon-").concat(e.type),type:m})}var v=!e.description&&u?n.createElement("span",{className:"".concat(a,"-message-single-line-auto-margin")}):null;!function(e,t){var a=e.prefixCls,s=e.placement,d=void 0===s?f:s,u=e.getContainer,m=void 0===u?l:u,h=e.top,v=e.bottom,g=e.closeIcon,y=void 0===g?i:g,C="".concat(a,"-").concat(d);if(c[C])t(c[C]);else{var E=n.createElement("span",{className:"".concat(a,"-close-x")},y||n.createElement(o.a,{className:"".concat(a,"-close-icon"),type:"close"}));r.default.newInstance({prefixCls:a,className:"".concat(a,"-").concat(d),style:p(d,h,v),getContainer:m,closeIcon:E},function(e){c[C]=e,t(e)})}}({prefixCls:t,placement:e.placement,top:e.top,bottom:e.bottom,getContainer:e.getContainer,closeIcon:e.closeIcon},function(t){t.notice({content:n.createElement("div",{className:u?"".concat(a,"-with-icon"):""},u,n.createElement("div",{className:"".concat(a,"-message")},v,e.message),n.createElement("div",{className:"".concat(a,"-description")},e.description),e.btn?n.createElement("span",{className:"".concat(a,"-btn")},e.btn):null),duration:s,closable:!0,onClose:e.onClose,onClick:e.onClick,key:e.key,style:e.style||{},className:e.className})})},close:function(e){Object.keys(c).forEach(function(t){return c[t].removeNotice(e)})},config:function(e){var t=e.duration,a=e.placement,n=e.bottom,r=e.top,o=e.getContainer,s=e.closeIcon;void 0!==t&&(d=t),void 0!==a&&(f=a),void 0!==n&&(m=n),void 0!==r&&(u=r),void 0!==o&&(l=o),void 0!==s&&(i=s)},destroy:function(){Object.keys(c).forEach(function(e){c[e].destroy(),delete c[e]})}};["success","info","warning","error"].forEach(function(e){v[e]=function(t){return v.open(s(s({},t),{type:e}))}}),v.warn=v.warning,t.a=v},1157:function(e,t,a){var n;e.exports=(n=a(0),function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(s).default}});var l=a(11),i=n(l),c=a(9),d=n(c),u=a(5),m=n(u),f=a(2),p=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,n=Array(a),r=0;r<a;r++)n[r]=arguments[r];var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return o.setRef=o.setRef.bind(o),o.onBlur=o.onBlur.bind(o),o.onChange=o.onChange.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"setRef",value:function(e){this.inputElement=e}},{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0,m.default)(r({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.value,n=t.pipe,r=t.mask,o=t.guide,s=t.placeholderChar,l=t.showMask,i={guide:o,placeholderChar:s,showMask:l},c="function"==typeof n&&"function"==typeof e.pipe?n.toString()!==e.pipe.toString():(0,f.isNil)(n)&&!(0,f.isNil)(e.pipe)||!(0,f.isNil)(n)&&(0,f.isNil)(e.pipe),d=r.toString()!==e.mask.toString(),u=Object.keys(i).some(function(t){return i[t]!==e[t]})||d||c,m=a!==this.inputElement.value;(m||u)&&this.initTextMask()}},{key:"render",value:function(){var e=this.props,t=e.render,a=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["render"]);return delete a.mask,delete a.guide,delete a.pipe,delete a.placeholderChar,delete a.keepCharPositions,delete a.value,delete a.onBlur,delete a.onChange,delete a.showMask,t(this.setRef,r({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},a))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e)}}]),t}(i.default.PureComponent);t.default=p,p.propTypes={mask:d.default.oneOfType([d.default.array,d.default.func,d.default.bool,d.default.shape({mask:d.default.oneOfType([d.default.array,d.default.func]),pipe:d.default.func})]).isRequired,guide:d.default.bool,value:d.default.oneOfType([d.default.string,d.default.number]),pipe:d.default.func,placeholderChar:d.default.string,keepCharPositions:d.default.bool,showMask:d.default.bool},p.defaultProps={render:function(e,t){return i.default.createElement("input",r({ref:e},t))}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t,a){"use strict";function n(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.placeholderChar;if(!n(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(t)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map(function(e){return e instanceof RegExp?t:e}).join("")},t.isArray=n,t.isString=function(e){return"string"==typeof e||e instanceof String},t.isNumber=function(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)},t.isNil=function(e){return"undefined"==typeof e||null===e},t.processCaretTraps=function(e){for(var t=[],a=void 0;-1!==(a=e.indexOf(s));)t.push(a),e.splice(a,1);return{maskWithoutCaretTraps:e,indexes:t}};var r=a(1),o=[],s="[]"},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,r.isArray)(t)){if(("undefined"==typeof t?"undefined":n(t))!==o.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,a),t=(0,r.processCaretTraps)(t).maskWithoutCaretTraps}var i=a.guide,c=void 0===i||i,d=a.previousConformedValue,u=void 0===d?l:d,m=a.placeholderChar,f=void 0===m?o.placeholderChar:m,p=a.placeholder,h=void 0===p?(0,r.convertMaskToPlaceholder)(t,f):p,v=a.currentCaretPosition,g=a.keepCharPositions,y=!1===c&&void 0!==u,C=e.length,E=u.length,b=h.length,k=t.length,w=C-E,x=w>0,O=v+(x?-w:0),N=O+Math.abs(w);if(!0===g&&!x){for(var P=l,j=O;j<N;j++)h[j]===f&&(P+=f);e=e.slice(0,O)+P+e.slice(O,C)}for(var T=e.split(l).map(function(e,t){return{char:e,isNew:t>=O&&t<N}}),A=C-1;A>=0;A--){var S=T[A].char;if(S!==f){var I=A>=O&&E===k;S===h[I?A-w:A]&&T.splice(A,1)}}var R=l,_=!1;e:for(var D=0;D<b;D++){var M=h[D];if(M===f){if(T.length>0)for(;T.length>0;){var V=T.shift(),L=V.char,F=V.isNew;if(L===f&&!0!==y){R+=f;continue e}if(t[D].test(L)){if(!0===g&&!1!==F&&u!==l&&!1!==c&&x){for(var z=T.length,H=null,J=0;J<z;J++){var B=T[J];if(B.char!==f&&!1===B.isNew)break;if(B.char===f){H=J;break}}null!==H?(R+=L,T.splice(H,1)):D--}else R+=L;continue e}_=!0}!1===y&&(R+=h.substr(D,b));break}R+=M}if(y&&!1===x){for(var W=null,q=0;q<R.length;q++)h[q]===f&&(W=q);R=null!==W?R.substr(0,W+1):l}return{conformedValue:R,meta:{someCharsRejected:_}}};var r=a(2),o=a(1),s=[],l=""},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.previousConformedValue,r=void 0===t?n:t,o=e.previousPlaceholder,s=void 0===o?n:o,l=e.currentCaretPosition,i=void 0===l?0:l,c=e.conformedValue,d=e.rawValue,u=e.placeholderChar,m=e.placeholder,f=e.indexesOfPipedChars,p=void 0===f?a:f,h=e.caretTrapIndexes,v=void 0===h?a:h;if(0===i||!d.length)return 0;var g=d.length,y=r.length,C=m.length,E=c.length,b=g-y,k=b>0,w=0===y;if(b>1&&!k&&!w)return i;var x=0,O=void 0,N=void 0;if(!k||r!==c&&c!==m){var P=c.toLowerCase(),j=d.toLowerCase(),T=j.substr(0,i).split(n),A=T.filter(function(e){return-1!==P.indexOf(e)});N=A[A.length-1];var S=s.substr(0,A.length).split(n).filter(function(e){return e!==u}).length,I=m.substr(0,A.length).split(n).filter(function(e){return e!==u}).length,R=I!==S,_=void 0!==s[A.length-1]&&void 0!==m[A.length-2]&&s[A.length-1]!==u&&s[A.length-1]!==m[A.length-1]&&s[A.length-1]===m[A.length-2];!k&&(R||_)&&S>0&&m.indexOf(N)>-1&&void 0!==d[i]&&(O=!0,N=d[i]);for(var D=p.map(function(e){return P[e]}),M=D.filter(function(e){return e===N}).length,V=A.filter(function(e){return e===N}).length,L=m.substr(0,m.indexOf(u)).split(n).filter(function(e,t){return e===N&&d[t]!==e}).length,F=L+V+M+(O?1:0),z=0,H=0;H<E;H++){var J=P[H];if(x=H+1,J===N&&z++,z>=F)break}}else x=i-b;if(k){for(var B=x,W=x;W<=C;W++)if(m[W]===u&&(B=W),m[W]===u||-1!==v.indexOf(W)||W===C)return B}else if(O){for(var q=x-1;q>=0;q--)if(c[q]===N||-1!==v.indexOf(q)||0===q)return q}else for(var U=x;U>=0;U--)if(m[U-1]===u||-1!==v.indexOf(U)||0===U)return U};var a=[],n=""},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){document.activeElement===e&&(v?g(function(){return e.setSelectionRange(t,t,p)},0):e.setSelectionRange(t,t,p))}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,l=n.inputElement,c=n.mask,p=n.guide,v=n.pipe,g=n.placeholderChar,y=void 0===g?m.placeholderChar:g,C=n.keepCharPositions,E=void 0!==C&&C,b=n.showMask,k=void 0!==b&&b;if("undefined"==typeof a&&(a=l.value),a!==t.previousConformedValue){("undefined"==typeof c?"undefined":s(c))===h&&void 0!==c.pipe&&void 0!==c.mask&&(v=c.pipe,c=c.mask);var w=void 0,x=void 0;if(c instanceof Array&&(w=(0,u.convertMaskToPlaceholder)(c,y)),!1!==c){var O=function(e){if((0,u.isString)(e))return e;if((0,u.isNumber)(e))return String(e);if(void 0===e||null===e)return f;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}(a),N=l.selectionEnd,P=t.previousConformedValue,j=t.previousPlaceholder,T=void 0;if(("undefined"==typeof c?"undefined":s(c))===m.strFunction){if(!1===(x=c(O,{currentCaretPosition:N,previousConformedValue:P,placeholderChar:y})))return;var A=(0,u.processCaretTraps)(x),S=A.maskWithoutCaretTraps,I=A.indexes;x=S,T=I,w=(0,u.convertMaskToPlaceholder)(x,y)}else x=c;var R={previousConformedValue:P,guide:p,placeholderChar:y,pipe:v,placeholder:w,currentCaretPosition:N,keepCharPositions:E},_=(0,d.default)(O,x,R),D=_.conformedValue,M=("undefined"==typeof v?"undefined":s(v))===m.strFunction,V={};M&&(!1===(V=v(D,o({rawValue:O},R)))?V={value:P,rejected:!0}:(0,u.isString)(V)&&(V={value:V}));var L=M?V.value:D,F=(0,i.default)({previousConformedValue:P,previousPlaceholder:j,conformedValue:L,placeholder:w,rawValue:O,currentCaretPosition:N,placeholderChar:y,indexesOfPipedChars:V.indexesOfPipedChars,caretTrapIndexes:T}),z=L===w&&0===F,H=k?w:f,J=z?H:L;t.previousConformedValue=J,t.previousPlaceholder=w,l.value!==J&&(l.value=J,r(l,F))}}}}};var l=a(4),i=n(l),c=a(3),d=n(c),u=a(2),m=a(1),f="",p="none",h="object",v="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,t){"use strict";function a(e){return function(){return e}}var n=function(){};n.thatReturns=a,n.thatReturnsFalse=a(!1),n.thatReturnsTrue=a(!0),n.thatReturnsNull=a(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,a){"use strict";var n=function(e){};e.exports=function(e,t,a,r,o,s,l,i){if(n(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[a,r,o,s,l,i],u=0;(c=new Error(t.replace(/%s/g,function(){return d[u++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(10);e.exports=function(){function e(e,t,a,n,s,l){l!==o&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return a.checkPropTypes=n,a.PropTypes=a,a}},function(e,t,a){"use strict";"function"==typeof Symbol&&Symbol.iterator,e.exports=a(8)()},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports=n}]))},1162:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),o=a(16),s=a(15),l=a(17),i=a(3),c=a(0),d=a.n(c),u=a(1139),m=a(1146),f=a(522),p=a(168),h=a(90),v=a(115),g=a(1156),y=a(1144),C=a(533),E=a(334),b=a(1133),k=a(55),w=a(1157),x=a.n(w),O=a(31),N=v.a.Option,P=function(e){g.a[e]({message:"Endere\xe7o EDITADO "})},j=function(e){function t(){var e;Object(n.a)(this,t),(e=Object(o.a)(this,Object(s.a)(t).call(this))).handleEditAdress=function(t,a){e.props.knowIfIsEditing(),e.setState({address:t,canEdit:!0})},e.handleEditAdressOntable=function(){e.props.handleEditAdress(e.state.address),e.setState({address:{name:"",cep:"",cpfcnpj:"",phone:""}}),P("success")},e.handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields(function(e,t){e||console.log("Received values of form: ",t)}),alert("handleSubmit")},e.state={adresses:[],address:{type:"1",personType:"1"},canEdit:!1,maskCPFCNPJ:[/[1-9]/,/\d/,/\d/,".",/\d/,/\d/,/\d/,".",/\d/,/\d/,/\d/,"-",/\d/,/\d/],maskCPFCNPJ_placeholder:"999.999.999-99",titleCPFCNPJ:"CPF"},e.handleChange=e.handleChange.bind(Object(i.a)(Object(i.a)(e))),e.handleClickAddAddress=e.handleClickAddAddress.bind(Object(i.a)(Object(i.a)(e)));var a=Object(i.a)(Object(i.a)(e));return e.adressesColumns=[{title:"Nome",dataIndex:"name",key:"name"},{title:"Endereco",dataIndex:"address",key:"address"},{title:"CEP",dataIndex:"cep",key:"cep"},{title:"A\xe7\xf5es",key:"action",render:function(e,t){return d.a.createElement("div",null,d.a.createElement("i",{className:"icon icon-trash",style:{marginRight:"10px"},onClick:function(e){m.a.confirm({title:"Tem certeza que deseja remover esse endere\xe7o?",onOk:function(){a.handleDeleteAddressRow(t.key,e)},onCancel:function(){}})}}),d.a.createElement("i",{className:"icon icon-edit",onClick:function(e){return a.handleEditAdress(t,e)}}))}}],e}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){console.log(e);var t=this.props.model;"cliente"===e||"fornecedor"===e||"ambos"===e?t.tipo=e:"cnpj"===e.target.name?t[e.target.name]=e.target.value.replace(/\D+/g,""):t[e.target.name]=e.target.value,this.setState(function(){return{model:t}})}},{key:"handleChangeAddress",value:function(e,t){console.log("name",e),console.log("value",t);var a=this.state.address;a[e]=t,this.setState({address:a})}},{key:"handleDeleteAddressRow",value:function(e,t){var a;console.log(e),this.props.handleDeleteAddressRow(e,t),a="success",g.a[a]({message:"Endere\xe7o REMOVIDO"})}},{key:"handleClickAddAddress",value:function(){var e;this.props.handleClickAddAddress(this.state.address),this.setState({address:{name:"",cep:"",cpfcnpj:"",phone:""}}),e="success",g.a[e]({message:"Endere\xe7o ADICIONADO "})}},{key:"handleTipoPessoa",value:function(e,t){console.log("handleTipoPessoa",t);var a=[/[1-9]/,/\d/,/\d/,".",/\d/,/\d/,/\d/,".",/\d/,/\d/,/\d/,"-",/\d/,/\d/],n="999.999.999-99",r="CPF";2===t&&(a=[/[1-9]/,/\d/,".",/\d/,/\d/,/\d/,".",/\d/,/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/],n="99.999.999/9999-99",r="CNPJ"),this.setState({maskCPFCNPJ:a,maskCPFCNPJ_placeholder:n,titleCPFCNPJ:r}),this.handleChangeAddress(e,t)}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"main"},d.a.createElement(p.a,null,d.a.createElement(h.a,{span:24},d.a.createElement(y.a,{layout:"horizontal",size:"small"},d.a.createElement(C.a,{type:"inner",title:d.a.createElement(O.a,{id:"commondata.customers"})},d.a.createElement(p.a,null,d.a.createElement(h.a,{lg:6,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Fantasia",required:!0},d.a.createElement(E.a,{type:"text",name:"name",value:this.props.model.name,onChange:this.handleChange}),this.props.validator.message("name",this.props.model.name,"required|string",{className:"text-danger"})))),d.a.createElement(h.a,{lg:6,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Raz\xe3o social"},d.a.createElement(E.a,{type:"text",name:"razaosocial",onChange:this.handleChange,value:this.props.model.razaosocial})))),d.a.createElement(h.a,{lg:6,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Tipo"},d.a.createElement(v.a,{className:"gx-mr-3 gx-mb-3",name:"type",value:this.props.model.tipo,style:{width:150},onChange:this.handleChange},d.a.createElement(N,{value:"cliente"},"Cliente"),d.a.createElement(N,{value:"fornecedor"},"Fornecedor"),d.a.createElement(N,{value:"ambos"},"Ambos"))))))),d.a.createElement(C.a,{type:"inner",title:"Dados gerais"},d.a.createElement(p.a,null,d.a.createElement(h.a,{lg:6,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"CNPJ"},d.a.createElement(x.a,{mask:[/[0-9]/,/\d/,".",/\d/,/\d/,/\d/,".",/\d/,/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/],className:"ant-input",placeholder:"99.999.999/9999-99",guide:!0,id:"my-input-id",value:this.props.model.cnpj,name:"cnpj",onBlur:function(){},onChange:this.handleChange})))))),d.a.createElement(C.a,{type:"inner",title:"Endere\xe7os cadastrados"},d.a.createElement(b.a,{className:"gx-table-responsive",columns:this.adressesColumns,dataSource:this.props.adresses,size:"small",rowKey:"id",style:{margin:"-15px -24px"}})),d.a.createElement(C.a,{type:"inner",title:"Novo/Editar Endere\xe7o"},d.a.createElement(y.a,{type:"horizontal"},d.a.createElement(p.a,null,d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Tipo de endere\xe7o"},d.a.createElement(v.a,{className:"gx-mr-3 gx-mb-3",defaultValue:"1",name:"e_type",onChange:function(t){return e.handleChangeAddress("type",t)},value:this.state.address.type},d.a.createElement(N,{value:"1"},"Retirada"),d.a.createElement(N,{value:"2"},"Entrega"),d.a.createElement(N,{value:"3"},"Cobran\xe7a"))))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Tipo de pessoa"},d.a.createElement(v.a,{className:"gx-mr-3 gx-mb-3",defaultValue:"1",name:"e_type_person",value:this.state.address.personType,onChange:function(t){return e.handleTipoPessoa("personType",t)}},d.a.createElement(N,{value:"1"},"CPF"),d.a.createElement(N,{value:"2"},"CNPJ"))))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Nome"},d.a.createElement(E.a,{type:"text",name:"e_name",onChange:function(t){return e.handleChangeAddress("name",t.target.value)},value:this.state.address.name})))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:this.state.titleCPFCNPJ},d.a.createElement(x.a,{mask:this.state.maskCPFCNPJ,onChange:function(t){return e.handleChangeAddress("cpfcnpj",t.target.value)},value:this.state.address.cpfcnpj,className:"ant-input",placeholder:this.state.maskCPFCNPJ_placeholder,guide:!1,id:"my-input-id"})))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Inscric\xe3o estadual"},d.a.createElement(E.a,{type:"text",name:"ie",onChange:function(t){return e.handleChangeAddress("ie",t.target.value)},value:this.state.address.ie})))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"CEP"},d.a.createElement(x.a,{mask:[/[1-9]/,/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/],className:"ant-input",placeholder:"99999-99",guide:!1,id:"e_cep",name:"e_cep",value:this.state.address.cep,onChange:function(t){return e.handleChangeAddress("cep",t.target.value)}})))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Endere\xe7o"},d.a.createElement(E.a,{type:"text",name:"address",value:this.state.address.address,onChange:function(t){return e.handleChangeAddress("address",t.target.value)}})))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Bairro"},d.a.createElement(E.a,{type:"text",name:"district",value:this.state.address.district,onChange:function(t){return e.handleChangeAddress("district",t.target.value)}})))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"N\xfamero"},d.a.createElement(E.a,{type:"text",name:"number",value:this.state.address.numero,onChange:function(t){return e.handleChangeAddress("numero",t.target.value)}})))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Complemento"},d.a.createElement(E.a,{type:"text",name:"complement",value:this.state.address.complement,onChange:function(t){return e.handleChangeAddress("complement",t.target.value)}})))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Pa\xeds"},d.a.createElement(E.a,{type:"text",name:"country",value:this.state.address.country,onChange:function(t){return e.handleChangeAddress("country",t.target.value)}})))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Estado"},d.a.createElement(E.a,{type:"text",name:"state",value:this.state.address.state,onChange:function(t){return e.handleChangeAddress("state",t.target.value)}})))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Cidade"},d.a.createElement(E.a,{type:"text",name:"city",value:this.state.address.city,onChange:function(t){return e.handleChangeAddress("city",t.target.value)}})))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Telefone"},d.a.createElement(x.a,{mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],className:"ant-input",placeholder:"Ex:(DDD) 99999-9999",guide:!0,id:"my-input-id",value:this.state.address.phone,name:"phone",onBlur:function(){},onChange:function(t){return e.handleChangeAddress("phone",t.target.value)}})))),d.a.createElement(h.a,{lg:4,md:6,sm:12,xs:24},d.a.createElement("div",{className:"gx-form-row0"},d.a.createElement(y.a.Item,{label:"Email"},d.a.createElement(E.a,{type:"text",name:"email",value:this.state.address.email,onChange:function(t){return e.handleChangeAddress("email",t.target.value)}})))),d.a.createElement(h.a,{span:24},d.a.createElement("div",{className:"gx-form-row0"},!0===this.state.canEdit?d.a.createElement(k.a,{type:"primary",htmlType:"submit",onClick:this.handleEditAdressOntable},"Editar"):d.a.createElement(k.a,{type:"primary",htmlType:"submit",disabled:!1,onClick:this.handleClickAddAddress},"Adicionar endere\xe7o"))))))))))}}]),t}(c.Component),T=y.a.create()(j),A=a(53),S=a(32),I=a(9),R="partner",_=[{title:"Id",dataIndex:"id",key:"id",width:55,render:function(e){return e}},{title:"Fantasia",dataIndex:"name",key:"name",onCell:function(){return{style:{whiteSpace:"nowrap",maxWidth:150}}},render:function(e){return d.a.createElement(S.a,{title:e},e.toUpperCase())}},{title:"Razao Social",dataIndex:"razaosocial",key:"razaosocial",onCell:function(){return{style:{whiteSpace:"nowrap",maxWidth:150}}},render:function(e){return d.a.createElement(S.a,{title:e},e.toUpperCase())}},{title:"CNPJ",dataIndex:"cnpj",key:"cnpj",onCell:function(){return{style:{whiteSpace:"nowrap",maxWidth:150}}},render:function(e){return d.a.createElement(S.a,{title:e},e)}}],D=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this))).fetchLeftList=function(){console.log("fecthLeftlist"),I.a.get("".concat(R,"/"),{}).then(function(e){a.setState({isLoaded:!0,data:e.data})}).catch(function(e){console.log("error",e)})},a.state={data:[]},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log("CustomerList - ComponentWillReceivePropst")}},{key:"componentDidMount",value:function(){console.log("ComponentDidMout - CustomerList"),this.fetchLeftList()}},{key:"render",value:function(){var e=this;return d.a.createElement(A.a,{columns:_,data:this.state.data,onRowClick:function(t,a){return{onClick:function(n){return e.props.onRowClick(t,a)}}}})}}]),t}(c.Component),M=a(112),V=a(58),L=a.n(V),F="partner",z=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(o.a)(this,Object(s.a)(t).call(this))).handleOnClickRow=function(t,a){var n=Object(i.a)(Object(i.a)(e));e.setState({loading:!0,loadingTip:"Carregando registro"}),setTimeout(function(){I.a.get("".concat(F,"/").concat(t.id),{}).then(function(e){console.log(e.data.adresses),u.a.success("Cliente carregado com sucesso!"),n.setStateEdit(e.data),n.setState({knowToRaz:!0})}).catch(function(e){console.log(e),u.a.error("Erro ao buscar registro, tente novamente mais tarde!"),n.setStateNew()})},1e3)},e.onHandleClickNew=function(){e.setStateNew()},e.onHandleClickSave=function(){if(e.validator.allValid()){var t=e.state.model;t.adresses=e.state.adresses;var a=Object(i.a)(Object(i.a)(e));e.setState({loading:!0,loadingTip:"Salvando registro, aguarde..."}),setTimeout(function(){var e="PATCH",n="".concat(F,"/").concat(t.id);a.state.isNew&&(e="POST",n="".concat(F)),console.log("onHandleSaveButton",t),Object(I.a)({method:e,url:n,data:{name:t.name,lastname:t.lastname,cnpj:t.cnpj,razaosocial:t.razaosocial,tipo:t.tipo,adresses:t.adresses}}).then(function(e){u.a.success("Cliente salvo com sucesso!"),console.log(e.data),a.setStateEdit(e.data),a.leftListChild.current.fetchLeftList()}).catch(function(e){console.log(e),a.setStateEdit(t),u.a.error("Erro ao gravar registro, tente novamente mais tarde!")})},1e3)}else u.a.warning("Campos obrigat\xf3rios em branco!"),e.validator.showMessages(),e.forceUpdate()},e.onHandleClickDelete=function(){var t=e.state.model,a=Object(i.a)(Object(i.a)(e));m.a.confirm({title:"Tem certeza que deseja excluir esse registro?",onOk:function(){a.setState({loading:!0,loadingTip:"Excluindo registro, aguarde..."}),setTimeout(function(){var e="".concat(F,"/").concat(t.id);Object(I.a)({method:"DELETE",url:e}).then(function(e){u.a.success("Registro excluido com sucesso!"),a.setStateNew(),a.leftListChild.current.fetchLeftList()}).catch(function(e){console.log(e),u.a.error(e.response.data.message)})},1e3),a.setStateNew()},onCancel:function(){}})},e.setStateNew=function(){e.setState({canSave:!0,canNew:!0,canDelete:!1,model:{},adresses:[],loading:!1,isNew:!0,refreshLeftList:!1,knowToRaz:!1}),e.refreshEditAddress()},e.setStateEdit=function(t){console.log(t),e.setState({canSave:!0,canNew:!0,canDelete:!0,model:t,loading:!1,isNew:!1,adresses:t.adresses})},e.handleEditAdress=function(t){var a=e.state.adresses,n=!0,r=!1,o=void 0;try{for(var s,l=a[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){var i=s.value;i.key===t.key&&(i=t)}}catch(c){r=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}},e.refreshEditAddress=function(){return!0===e.state.refreshEditAddress},e.knowIfIsEditing=function(){e.setState({refreshEditAddress:!0})},e.knowToRaz=function(){return!1===e.state.knowToRaz},e.knowToClearVars=function(t){!0===t&&e.setState({clearVars:!0})},e.state={isNew:!0,canNew:!0,canSave:!0,canDelete:!1,loading:!1,model:{tipo:""},adresses:[],refreshEditAddress:!1,knowToRaz:null,clearVars:!1},e.setStateNew=e.setStateNew.bind(Object(i.a)(Object(i.a)(e))),e.onHandleClickNew=e.onHandleClickNew.bind(Object(i.a)(Object(i.a)(e))),e.onHandleClickSave=e.onHandleClickSave.bind(Object(i.a)(Object(i.a)(e))),e.onHandleClickDelete=e.onHandleClickDelete.bind(Object(i.a)(Object(i.a)(e))),e.handleClickAddAddress=e.handleClickAddAddress.bind(Object(i.a)(Object(i.a)(e))),e.handleDeleteAddressRow=e.handleDeleteAddressRow.bind(Object(i.a)(Object(i.a)(e))),e.leftListChild=d.a.createRef(),e.validator=new L.a({locale:"pt",messages:{default:":attribute n\xe3o pode estar vazio"}}),e}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleClickAddAddress",value:function(e){var t=this.state.adresses,a=t[t.length-1];0===t.length?e.key=0:e.key=a.key+1,t.push(e),this.setState({adresses:t})}},{key:"handleDeleteAddressRow",value:function(e,t){t.preventDefault();var a=this.state.adresses.filter(function(t){return t.key!==e});this.setState({adresses:a})}},{key:"render",value:function(){return d.a.createElement(f.a,{spinning:this.state.loading,tip:this.state.loadingTip},d.a.createElement(p.a,null,d.a.createElement(h.a,{lg:5,md:5,sm:24,xs:24},d.a.createElement(D,{onRowClick:this.handleOnClickRow,ref:this.leftListChild})),d.a.createElement(h.a,{lg:15,md:15,sm:24,xs:24},d.a.createElement(T,{model:this.state.model,handleClickAddAddress:this.handleClickAddAddress,refreshEditAddress:this.refreshEditAddress,knowIfIsEditing:this.knowIfIsEditing,knowToClearVars:this.knowToClearVars,knowToRaz:this.knowToRaz,adresses:this.state.adresses,handleEditAdress:this.handleEditAdress,handleDeleteAddressRow:this.handleDeleteAddressRow,validator:this.validator})),d.a.createElement(h.a,{lg:4,md:4,sm:24,xs:24},d.a.createElement(M.a,{title:d.a.createElement(O.a,{id:"commondata.customers"}),onHandleClickNew:this.onHandleClickNew,onHandleClickSave:this.onHandleClickSave,onHandleClickDelete:this.onHandleClickDelete,canNew:this.state.canNew,canSave:this.state.canSave,canDelete:this.state.canDelete}))))}}]),t}(c.Component);t.default=z}}]);
//# sourceMappingURL=8.0ca51e16.chunk.js.map