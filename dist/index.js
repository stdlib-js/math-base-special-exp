"use strict";var v=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var f=v(function(H,s){
function L(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}s.exports=L
});var c=v(function(U,p){
var R=require('@stdlib/math-base-special-ldexp/dist'),F=f();function _(r,e,u){var t,a,i,n;return t=r-e,a=t*t,i=t-a*F(a),n=1-(e-t*i/(2-i)-r),R(n,u)}p.exports=_
});var O=v(function(V,E){
var m=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-trunc/dist'),y=require('@stdlib/constants-float64-ninf/dist'),N=require('@stdlib/constants-float64-pinf/dist'),I=c(),A=.6931471803691238,G=19082149292705877e-26,l=1.4426950408889634,P=709.782712893384,W=-745.1332191019411,q=1/(1<<28),Z=-q;function d(r){var e,u,t;return m(r)||r===N?r:r===y?0:r>P?N:r<W?0:r>Z&&r<q?1+r:(r<0?t=o(l*r-.5):t=o(l*r+.5),e=r-t*A,u=t*G,I(e,u,t))}E.exports=d
});var k=O();module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
