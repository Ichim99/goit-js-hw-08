var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire45dc;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire45dc=r),(0,r.register)("9OeKo",function(t,n){var r="Expected a function",i=0/0,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return i;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=u.test(e);return r||l.test(e)?f(e.slice(2),r?2:8):a.test(e)?i:+e}t.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,a,u,l,f,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError(r);function O(t){var n=i,r=o;return i=o=void 0,s=t,u=e.apply(r,n)}function x(e){var n=e-f,r=e-s;return void 0===f||n>=t||n<0||d&&r>=a}function h(){var e,n,r,i=g();if(x(i))return j(i);l=setTimeout(h,(e=i-f,n=i-s,r=t-e,d?p(r,a-n):r))}function j(e){return(l=void 0,m&&i)?O(e):(i=o=void 0,u)}function T(){var e,n=g(),r=x(n);if(i=arguments,o=this,f=n,r){if(void 0===l)return s=e=f,l=setTimeout(h,t),c?O(e):u;if(d)return l=setTimeout(h,t),O(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=y(t)||0,b(n)&&(c=!!n.leading,a=(d="maxWait"in n)?v(y(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=f=o=l=void 0},T.flush=function(){return void 0===l?u:j(g())},T}(e,t,{leading:i,maxWait:t,trailing:o})}});var i=r("9OeKo");const o=document.querySelector(".feedback-form"),a="feedback-form-state",u=JSON.parse(localStorage.getItem(a))??{};o.elements.email.value=u.email??"",o.elements.message.value=u.message??"",o.addEventListener("input",(i&&i.__esModule?i.default:i)(e=>{let{name:t,value:n}=e.target;u[t]=n,localStorage.setItem(a,JSON.stringify(u))},500)),o.addEventListener("submit",e=>{e.preventDefault(),console.log("Submitted Data:",{email:o.elements.email.value||"N/A",message:o.elements.message.value||"N/A"}),localStorage.removeItem(a),o.reset()});
//# sourceMappingURL=03-feedback.35ca3c58.js.map