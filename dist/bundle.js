(()=>{var r,t,n={29:(r,t,n)=>{function e(r){return function(r){if(Array.isArray(r))return o(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(r){if("string"==typeof r)return o(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(r,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}n(97),r.exports=function(){var r=new Array(10).fill(new Array(10).fill(0)),t=function(r,t){return r+t<=10},n=function(r,t){return r+t<=10};return{placeShipHorizontally:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;if(t(o,i)){var l=new Array(i).fill("a"),a=new Array(10).fill(0);a.splice.apply(a,[o,i].concat(e(l))),r[n]=a,console.log(r)}else console.log("Ship doesn't fit horizontally")},shipFitsHorizontally:t,placeShipVertically:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;if(n(t,o)){for(var i=t;i<=o+t;i++){if("a"===r[i][e]){console.log("Obstructed");break}var l=new Array(10).fill(0);l[e]="a",r[i]=l}console.log(r)}else console.log("Ship doesn't fit vertically")},shipFitsVertically:n,isObstructed:function(t,n){return 0!==r[t][n]},get board(){return r}}}},97:r=>{r.exports=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t-r},e=function(){return 0===t};return{size:r,health:t,hit:n,isSunk:e}}}},e={};function o(r){var t=e[r];if(void 0!==t)return t.exports;var i=e[r]={exports:{}};return n[r](i,i.exports,o),i.exports}r=o(29),o(97),(t=r()).placeShipHorizontally(2,4,4),t.placeShipVertically(2,4,4)})();