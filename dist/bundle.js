(()=>{var r,t={29:(r,t,n)=>{function e(r){return function(r){if(Array.isArray(r))return o(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(r){if("string"==typeof r)return o(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(r,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}n(97),r.exports=function(){var r=new Array(10).fill(new Array(10).fill(0));return{placeShip:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,i=new Array(o).fill("a"),a=new Array(10).fill(0);a.splice.apply(a,[n,n+o].concat(e(i))),r[t]=a,console.log(r)},get board(){return r}}}},97:r=>{r.exports=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t-r},e=function(){return 0===t};return{size:r,health:t,hit:n,isSunk:e}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}r=e(29),e(97),r().placeShip(2,3)})();