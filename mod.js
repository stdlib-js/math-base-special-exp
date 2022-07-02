// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return n!=n},r=Math.floor,t=Math.ceil,o=r,e=t;var a=function(n){return n<0?e(n):o(n)},u=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,f=i,c=u;var y=function(n){return n===f||n===c};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var l=function(){return v&&"symbol"==typeof Symbol.toStringTag},p=Object.prototype.toString,A=p;var w=function(n){return A.call(n)},U=Object.prototype.hasOwnProperty;var b=function(n,r){return null!=n&&U.call(n,r)},m="function"==typeof Symbol?Symbol.toStringTag:"",h=b,I=m,d=p;var s=w,F=function(n){var r,t,o;if(null==n)return d.call(n);t=n[I],r=h(n,I);try{n[I]=void 0}catch(r){return d.call(n)}return o=d.call(n),r?n[I]=t:delete n[I],o},N=l()?F:s,S=N,H="function"==typeof Uint32Array;var O="function"==typeof Uint32Array?Uint32Array:null,g=function(n){return H&&n instanceof Uint32Array||"[object Uint32Array]"===S(n)},E=O;var j=function(){var n,r;if("function"!=typeof E)return!1;try{r=new E(r=[1,3.14,-3.14,4294967296,4294967297]),n=g(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var T="function"==typeof Uint32Array?Uint32Array:void 0,G=function(){throw new Error("not implemented")},L=j()?T:G,W=N,M="function"==typeof Float64Array;var P="function"==typeof Float64Array?Float64Array:null,V=function(n){return M&&n instanceof Float64Array||"[object Float64Array]"===W(n)},Y=P;var _=function(){var n,r;if("function"!=typeof Y)return!1;try{r=new Y([1,3.14,-3.14,NaN]),n=V(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var x="function"==typeof Float64Array?Float64Array:void 0,k=function(){throw new Error("not implemented")},q=_()?x:k,z=N,B="function"==typeof Uint8Array;var C="function"==typeof Uint8Array?Uint8Array:null,D=function(n){return B&&n instanceof Uint8Array||"[object Uint8Array]"===z(n)},J=C;var K=function(){var n,r;if("function"!=typeof J)return!1;try{r=new J(r=[1,3.14,-3.14,256,257]),n=D(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var Q="function"==typeof Uint8Array?Uint8Array:void 0,R=function(){throw new Error("not implemented")},X=K()?Q:R,Z=N,$="function"==typeof Uint16Array;var nn="function"==typeof Uint16Array?Uint16Array:null,rn=function(n){return $&&n instanceof Uint16Array||"[object Uint16Array]"===Z(n)},tn=nn;var on=function(){var n,r;if("function"!=typeof tn)return!1;try{r=new tn(r=[1,3.14,-3.14,65536,65537]),n=rn(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var en,an="function"==typeof Uint16Array?Uint16Array:void 0,un=function(){throw new Error("not implemented")},fn={uint16:on()?an:un,uint8:X};(en=new fn.uint16(1))[0]=4660;var cn,yn,vn=52===new fn.uint8(en.buffer)[0];!0===vn?(cn=1,yn=0):(cn=0,yn=1);var ln=L,pn={HIGH:cn,LOW:yn},An=new q(1),wn=new ln(An.buffer),Un=pn.HIGH,bn=pn.LOW;var mn=function(n,r){return An[0]=r,n[0]=wn[Un],n[1]=wn[bn],n};var hn=function(n,r){return 1===arguments.length?mn([0,0],n):mn(n,r)},In=L,dn=!0===vn?1:0,sn=new q(1),Fn=new In(sn.buffer);var Nn,Sn,Hn=function(n){return sn[0]=n,Fn[dn]};!0===vn?(Nn=1,Sn=0):(Nn=0,Sn=1);var On=L,gn={HIGH:Nn,LOW:Sn},En=new q(1),jn=new On(En.buffer),Tn=gn.HIGH,Gn=gn.LOW;var Ln=function(n,r){return jn[Tn]=n,jn[Gn]=r,En[0]},Wn=hn,Mn=Hn,Pn=Ln,Vn=[0,0];var Yn=y,_n=n,xn=function(n){return Math.abs(n)};var kn=function(n,r){return _n(r)||Yn(r)?(n[0]=r,n[1]=0,n):0!==r&&xn(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)};var qn=Hn;var zn=function(n){var r=qn(n);return(r=(2146435072&r)>>>20)-1023|0},Bn=i,Cn=u,Dn=n,Jn=y,Kn=function(n,r){var t,o;return Wn(Vn,n),t=Vn[0],t&=2147483647,o=Mn(r),Pn(t|=o&=2147483648,Vn[1])},Qn=function(n,r){return 1===arguments.length?kn([0,0],n):kn(n,r)},Rn=zn,Xn=hn,Zn=Ln,$n=[0,0],nr=[0,0];var rr=function(n,r){var t,o;return 0===r||0===n||Dn(n)||Jn(n)?n:(Qn($n,n),r+=$n[1],(r+=Rn(n=$n[0]))<-1074?Kn(0,n):r>1023?n<0?Cn:Bn:(r<=-1023?(r+=52,o=2220446049250313e-31):o=1,Xn(nr,n),t=nr[0],t&=2148532223,o*Zn(t|=r+1023<<20,nr[1])))},tr=rr;function or(r){var t;return n(r)||r===i?r:r===u?0:r>709.782712893384?i:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(n,r,t){var o,e,a,u;return a=(o=n-r)-(e=o*o)*(0===(u=e)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)),tr(1-(r-o*a/(2-a)-n),t)}(r-.6931471803691238*(t=a(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}export{or as default};
//# sourceMappingURL=mod.js.map
