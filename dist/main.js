!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){for(let[e,t]of document.querySelectorAll(".required").entries())if(console.log(e,t),!t.querySelector(".input-aux-container")){let e=document.createElement("div");e.classList.add("input-aux-container"),t.appendChild(e)}for(let[e,t]of document.querySelectorAll(".counter").entries()){if(!t.querySelector(".input-aux-container")){let e=document.createElement("div");e.classList.add("input-aux-container"),t.appendChild(e)}let r=document.createElement("span"),o=`input-number-${e+1}`;r.id=o,r.classList.add("number"),t.querySelector(".input-aux-container").appendChild(r),t.addEventListener("click",e=>n(e,o)),t.addEventListener("keyup",e=>n(e,o)),t.addEventListener("keydown",e=>n(e,o))}function n(e,t){const n=e.target.maxLength,r=e.target.value.length;document.getElementById(`${t}`).innerHTML=`${r}/${n}`}function r(e){e.scrollHeight<104?e.target.style.height="104px":e.target.style.height=e.target.scrollHeight+"px"}for(let e of document.getElementsByTagName("textarea"))e.addEventListener("keyup",e=>r(e)),e.addEventListener("keydown",e=>r(e));document.getElementById("clean").addEventListener("click",(function(e){document.querySelector("div.input-container.cleaner input").value.length>0&&(document.querySelector("div.input-container.cleaner input").value="")}))}]);