'use strict';

function t(){return (t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t}).apply(this,arguments)}var e=function(e){return Object.entries(e).reduce(function(e,n){var r,o=n[1];return void 0===o?e:t({},e,((r={})[n[0]]=o,r))},{})},l=function(n){return t({},e(n),{type:"CodeChunk"})},p=function(n){return t({},e(n),{type:"CodeExpression"})},s=function(n){return t({},e(n),{type:"CodeError"})},ut=function(n){return void 0===n&&(n={}),t({},e(n),{type:"SoftwareSession"})},ht={Code:"Code",CodeBlock:"CodeBlock",CodeChunk:"CodeChunk",CodeExpression:"CodeExpression",CodeFragment:"CodeFragment"},Gt=function(t){return function(e){return Object.keys(t).includes(e)}},xt=function(t){return function(e){return !!Ht(e)&&Gt(t)(e.type)}},Lt=function(t){var e,n=((e={})[t]=t,e);return xt(n)},Nt=function(t,e){return Ht(e)&&e.type===t},zt=function(t){var e=typeof t;return null===t||"boolean"===e||"number"===e||"string"===e},Ht=function(t){return null!=t&&Object.prototype.hasOwnProperty.call(t,"type")},Ut=xt(ht),Xt=Lt("Article"),Yt=Lt("Paragraph"),Zt=Lt("ListItem");

exports.Nt = Nt;
exports.Ut = Ut;
exports.l = l;
exports.p = p;
exports.s = s;
exports.ut = ut;
exports.zt = zt;
