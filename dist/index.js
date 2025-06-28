"use strict";var a=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var n=a(function(rr,B){B.exports={nargs:7,nin:1,nout:1}});var s=a(function(er,C){C.exports=[12,12,12,17,11,11,11,12,11,17,17,17,6,6,6,12,6,17,4,4,4,6,4,11,4,12,4,17,1,1,1,4,1,6,1,11,1,12,1,17,7,7,7,12,7,17,5,6,5,5,5,7,5,11,5,12,5,17,2,4,2,6,2,2,2,3,2,5,2,7,2,11,2,12,2,17,3,4,3,6,3,2,3,3,3,5,3,7,3,11,3,12,3,17]});var y=a(function(ar,l){
var i=require('@stdlib/math-base-special-trunc/dist'),D=require('@stdlib/math-base-special-truncf/dist'),r=require('@stdlib/number-float64-base-identity/dist'),F=[i,i,D,i,i,i,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r];l.exports=F
});var g=a(function(tr,j){
var G=require('@stdlib/strided-dispatch/dist'),H=require('@stdlib/strided-base-unary/dist'),x=require('@stdlib/strided-base-dtype-resolve-enum/dist'),I=s(),f=n(),J=y(),K=G(H,I,J,f.nargs,f.nin,f.nout);function L(t,e,q,c,o,p,d){return K(t,x(e),q,c,x(o),p,d)}j.exports=L
});var _=a(function(ir,R){
var M=require('@stdlib/strided-dispatch/dist'),N=require('@stdlib/strided-base-unary/dist').ndarray,h=require('@stdlib/strided-base-dtype-resolve-enum/dist'),Q=s(),u=n(),S=y(),T=M(N,Q,S,u.nargs+u.nin+u.nout,u.nin,u.nout);function U(t,e,q,c,o,p,d,z,A){return T(t,h(e),q,c,o,h(p),d,z,A)}R.exports=U
});var k=a(function(ur,b){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=require('@stdlib/strided-base-meta-data-props/dist'),O=n(),P=s(),v=g(),W=_();V(v,"ndarray",W);E(O,P,v,!1);E(O,P,v.ndarray,!0);b.exports=v
});var X=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=k(),m,w=Y(X(__dirname,"./native.js"));w instanceof Error?m=Z:m=w;module.exports=m;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
