function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var o,i,r,u,f,a,c=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(w,t),l?g(e):u}function h(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=r}function w(){var e=m();if(h(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-a);return d?v(n,r-(e-c)):n}(e))}function S(e){return f=void 0,p&&o?g(e):(o=i=void 0,u)}function T(){var e=m(),n=h(e);if(o=arguments,i=this,a=e,n){if(void 0===f)return j(a);if(d)return f=setTimeout(w,t),g(a)}return void 0===f&&(f=setTimeout(w,t)),u}return t=y(t)||0,b(n)&&(l=!!n.leading,r=(d="maxWait"in n)?s(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},T.flush=function(){return void 0===f?u:S(m())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const g=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea"),w={};var S,T;(g.addEventListener("submit",onFormSubmit),g.addEventListener("input",e(t)(onUserInput,500)),localStorage.getItem("feedback-form-state"))&&(w=JSON.parse(localStorage.getItem("feedback-form-state")),j.value=null!==(S=w.email)&&void 0!==S?S:"",h.value=null!==(T=w.message)&&void 0!==T?T:"");
//# sourceMappingURL=03-feedback.14f0c432.js.map
