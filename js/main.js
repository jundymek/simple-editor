!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,n){"use strict";var r=document.querySelector(".form-field__input--js"),u=r.value,l=r.name,o=document.querySelector(".form-field__input--js1"),c=o.value,a=o.name;r.addEventListener("keyup",function(e){u=e.target.value}),o.addEventListener("keyup",function(e){c=e.target.value});var i=document.querySelector(".button--save--js");i.addEventListener("click",function(e){e.preventDefault(),console.log(i),localStorage.setItem(l,u),localStorage.setItem(a,c)});var d=document.querySelector(".main");document.querySelector(".button--load--js").addEventListener("click",function(e){e.preventDefault(),u=localStorage.getItem(l),c=localStorage.getItem(a),d.classList.toggle("main--visible");var t=document.querySelector(".table__th--js"),n=document.querySelector(".table__th--second--js");t.innerHTML=l,n.innerHTML=a;var r=document.querySelector(".table__td--js"),o=document.querySelector(".table__td--second--js");r.innerHTML=u,o.innerHTML=c}),document.querySelector(".backside__exit--js").addEventListener("click",function(e){e.preventDefault(),d.classList.toggle("main--visible")})}]);