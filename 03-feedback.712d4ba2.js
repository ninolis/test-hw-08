!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var o,r,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=o,i=r;return o=r=void 0,l=t,f=e.apply(i,n)}function S(e){return l=e,a=setTimeout(w,t),d?y(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function w(){var e=p();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-c);return s?b(n,u-(e-l)):n}(e))}function O(e){return a=void 0,v&&o?y(e):(o=r=void 0,f)}function T(){var e=p(),n=h(e);if(o=arguments,r=this,c=e,n){if(void 0===a)return S(c);if(s)return a=setTimeout(w,t),y(c)}return void 0===a&&(a=setTimeout(w,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},T.flush=function(){return void 0===a?f:O(p())},T}function g(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=f.test(t);return i||a.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};var S,h,w="feedback-form-state",O=document.querySelector(".feedback-form"),T=document.querySelector(".feedback-form input"),x=document.querySelector(".feedback-form textarea"),E={};(O.addEventListener("submit",onFormSubmit),O.addEventListener("input",e(t)(onUserInput,500)),localStorage.getItem(w))&&(E=JSON.parse(localStorage.getItem(w)),T.value=null!==(S=E.email)&&void 0!==S?S:"",x.value=null!==(h=E.message)&&void 0!==h?h:"")}();
//# sourceMappingURL=03-feedback.712d4ba2.js.map
