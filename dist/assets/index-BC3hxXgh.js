var Ff=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Jy=Ff(pl=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const el="163",qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Of=0,Bl=1,Bf=2,zu=1,zf=2,Dn=3,ai=0,It=1,un=2,ni=0,br=1,zl=2,kl=3,Hl=4,kf=5,wi=100,Hf=101,Gf=102,Vf=103,Wf=104,Xf=200,qf=201,Yf=202,jf=203,wa=204,Ra=205,Jf=206,Zf=207,Kf=208,$f=209,Qf=210,ed=211,td=212,nd=213,id=214,rd=0,sd=1,od=2,oo=3,ad=4,ld=5,cd=6,ud=7,tl=0,hd=1,fd=2,ii=0,dd=1,pd=2,md=3,_d=4,gd=5,vd=6,xd=7,ku=300,Dr=301,Ur=302,Ca=303,Pa=304,So=306,La=1e3,Ci=1001,Na=1002,tn=1003,yd=1004,ws=1005,hn=1006,Fo=1007,Pi=1008,ri=1009,Sd=1010,Md=1011,Hu=1012,Gu=1013,Fr=1014,$n=1015,ao=1016,Vu=1017,Wu=1018,Ms=1020,Ed=35902,Td=1021,bd=1022,yn=1023,Ad=1024,wd=1025,Ar=1026,ls=1027,Rd=1028,Xu=1029,Cd=1030,qu=1031,Yu=1033,Oo=33776,Bo=33777,zo=33778,ko=33779,Gl=35840,Vl=35841,Wl=35842,Xl=35843,ju=36196,ql=37492,Yl=37496,jl=37808,Jl=37809,Zl=37810,Kl=37811,$l=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,rc=37818,sc=37819,oc=37820,ac=37821,Ho=36492,lc=36494,cc=36495,Pd=36283,uc=36284,hc=36285,fc=36286,Ld=3200,Nd=3201,nl=0,Id=1,Kn="",cn="srgb",fi="srgb-linear",il="display-p3",Mo="display-p3-linear",lo="linear",Ke="srgb",co="rec709",uo="p3",ji=7680,dc=519,Dd=512,Ud=513,Fd=514,Ju=515,Od=516,Bd=517,zd=518,kd=519,pc=35044,mc="300 es",On=2e3,ho=2001;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _c=1234567;const ts=Math.PI/180,cs=180/Math.PI;function Vi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function rl(r,e){return(r%e+e)%e}function Hd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Gd(r,e,t){return r!==e?(t-r)/(e-r):0}function ns(r,e,t){return(1-t)*r+t*e}function Vd(r,e,t,n){return ns(r,e,1-Math.exp(-t*n))}function Wd(r,e=1){return e-Math.abs(rl(r,e*2)-e)}function Xd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function qd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Yd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function jd(r,e){return r+Math.random()*(e-r)}function Jd(r){return r*(.5-Math.random())}function Zd(r){r!==void 0&&(_c=r);let e=_c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kd(r){return r*ts}function $d(r){return r*cs}function Qd(r){return(r&r-1)===0&&r!==0}function ep(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function tp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function np(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ct(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ip={DEG2RAD:ts,RAD2DEG:cs,generateUUID:Vi,clamp:vt,euclideanModulo:rl,mapLinear:Hd,inverseLerp:Gd,lerp:ns,damp:Vd,pingpong:Wd,smoothstep:Xd,smootherstep:qd,randInt:Yd,randFloat:jd,randFloatSpread:Jd,seededRandom:Zd,degToRad:Kd,radToDeg:$d,isPowerOfTwo:Qd,ceilPowerOfTwo:ep,floorPowerOfTwo:tp,setQuaternionFromProperEuler:np,normalize:Ct,denormalize:pr};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,n,i,s,o,a,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=i[0],d=i[3],m=i[6],E=i[1],x=i[4],T=i[7],I=i[2],C=i[5],w=i[8];return s[0]=o*_+a*E+l*I,s[3]=o*d+a*x+l*C,s[6]=o*m+a*T+l*w,s[1]=c*_+u*E+h*I,s[4]=c*d+u*x+h*C,s[7]=c*m+u*T+h*w,s[2]=f*_+p*E+g*I,s[5]=f*d+p*x+g*C,s[8]=f*m+p*T+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new Le;function Zu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rp(){const r=fo("canvas");return r.style.display="block",r}const gc={};function sp(r){r in gc||(gc[r]=!0,console.warn(r))}const vc=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xc=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[fi]:{transfer:lo,primaries:co,toReference:r=>r,fromReference:r=>r},[cn]:{transfer:Ke,primaries:co,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Mo]:{transfer:lo,primaries:uo,toReference:r=>r.applyMatrix3(xc),fromReference:r=>r.applyMatrix3(vc)},[il]:{transfer:Ke,primaries:uo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(xc),fromReference:r=>r.applyMatrix3(vc).convertLinearToSRGB()}},op=new Set([fi,Mo]),je={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!op.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Rs[e].toReference,i=Rs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Rs[r].primaries},getTransfer:function(r){return r===Kn?lo:Rs[r].transfer}};function wr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ji;class ap{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=fo("canvas")),Ji.width=e.width,Ji.height=e.height;const n=Ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=wr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wr(t[n]/255)*255):t[n]=wr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lp=0;class Ku{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wo(i[o].image)):s.push(Wo(i[o]))}else s=Wo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ap.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cp=0;class Dt extends Gi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Ci,i=Ci,s=hn,o=Pi,a=yn,l=ri,c=Dt.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Vi(),this.name="",this.source=new Ku(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case La:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case La:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=ku;Dt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,i=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],d=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,T=(p+1)/2,I=(m+1)/2,C=(u+f)/4,w=(h+_)/4,F=(g+d)/4;return x>T&&x>I?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=w/n):T>I?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=C/i,s=F/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=w/s,i=F/s),this.set(n,i,s,t),this}let E=Math.sqrt((d-g)*(d-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class up extends Gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ku(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends up{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $u extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hp extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let d=1-a;const m=l*f+c*p+u*g+h*_,E=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const I=Math.sqrt(x),C=Math.atan2(I,m*E);d=Math.sin(d*C)/I,a=Math.sin(a*C)/I}const T=a*E;if(l=l*d+f*T,c=c*d+p*T,u=u*d+g*T,h=h*d+_*T,d===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new q,yc=new Bi;class Vr{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(e.matrixWorld),this.union(Cs)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),Ps.subVectors(this.max,Yr),Zi.subVectors(e.a,Yr),Ki.subVectors(e.b,Yr),$i.subVectors(e.c,Yr),Wn.subVectors(Ki,Zi),Xn.subVectors($i,Ki),_i.subVectors(Zi,$i);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-_i.z,_i.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,_i.z,0,-_i.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-_i.y,_i.x,0];return!qo(t,Zi,Ki,$i,Ps)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,Zi,Ki,$i,Ps))?!1:(Ls.crossVectors(Wn,Xn),t=[Ls.x,Ls.y,Ls.z],qo(t,Zi,Ki,$i,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new q,new q,new q,new q,new q,new q,new q,new q],on=new q,Cs=new Vr,Zi=new q,Ki=new q,$i=new q,Wn=new q,Xn=new q,_i=new q,Yr=new q,Ps=new q,Ls=new q,gi=new q;function qo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){gi.fromArray(r,s);const a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fp=new Vr,jr=new q,Yo=new q;class sl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);const t=jr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(jr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Yo)),this.expandByPoint(jr.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new q,jo=new q,Ns=new q,qn=new q,Jo=new q,Is=new q,Zo=new q;class Qu{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jo.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(jo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ns),a=qn.dot(this.direction),l=-qn.dot(Ns),c=qn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(jo).addScaledVector(Ns,f),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,i,s){Jo.subVectors(t,e),Is.subVectors(n,e),Zo.crossVectors(Jo,Is);let o=this.direction.dot(Zo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(Is.crossVectors(qn,Is));if(l<0)return null;const c=a*this.direction.dot(Jo.cross(qn));if(c<0||l+c>o)return null;const u=-a*qn.dot(Zo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,s,o,a,l,c,u,h,f,p,g,_,d){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,p,g,_,d)}set(e,t,n,i,s,o,a,l,c,u,h,f,p,g,_,d){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=p,m[7]=g,m[11]=_,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dp,e,pp)}lookAt(e,t,n){const i=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Yn.crossVectors(n,Gt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Yn.crossVectors(n,Gt)),Yn.normalize(),Ds.crossVectors(Gt,Yn),i[0]=Yn.x,i[4]=Ds.x,i[8]=Gt.x,i[1]=Yn.y,i[5]=Ds.y,i[9]=Gt.y,i[2]=Yn.z,i[6]=Ds.z,i[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],d=n[10],m=n[14],E=n[3],x=n[7],T=n[11],I=n[15],C=i[0],w=i[4],F=i[8],M=i[12],S=i[1],V=i[5],H=i[9],z=i[13],$=i[2],k=i[6],O=i[10],G=i[14],U=i[3],Z=i[7],J=i[11],re=i[15];return s[0]=o*C+a*S+l*$+c*U,s[4]=o*w+a*V+l*k+c*Z,s[8]=o*F+a*H+l*O+c*J,s[12]=o*M+a*z+l*G+c*re,s[1]=u*C+h*S+f*$+p*U,s[5]=u*w+h*V+f*k+p*Z,s[9]=u*F+h*H+f*O+p*J,s[13]=u*M+h*z+f*G+p*re,s[2]=g*C+_*S+d*$+m*U,s[6]=g*w+_*V+d*k+m*Z,s[10]=g*F+_*H+d*O+m*J,s[14]=g*M+_*z+d*G+m*re,s[3]=E*C+x*S+T*$+I*U,s[7]=E*w+x*V+T*k+I*Z,s[11]=E*F+x*H+T*O+I*J,s[15]=E*M+x*z+T*G+I*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],d=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*p-n*l*p)+_*(+t*l*p-t*c*f+s*o*f-i*o*p+i*c*u-s*l*u)+d*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],d=e[14],m=e[15],E=h*d*c-_*f*c+_*l*p-a*d*p-h*l*m+a*f*m,x=g*f*c-u*d*c-g*l*p+o*d*p+u*l*m-o*f*m,T=u*_*c-g*h*c+g*a*p-o*_*p-u*a*m+o*h*m,I=g*h*l-u*_*l-g*a*f+o*_*f+u*a*d-o*h*d,C=t*E+n*x+i*T+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=E*w,e[1]=(_*f*s-h*d*s-_*i*p+n*d*p+h*i*m-n*f*m)*w,e[2]=(a*d*s-_*l*s+_*i*c-n*d*c-a*i*m+n*l*m)*w,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*p-n*l*p)*w,e[4]=x*w,e[5]=(u*d*s-g*f*s+g*i*p-t*d*p-u*i*m+t*f*m)*w,e[6]=(g*l*s-o*d*s-g*i*c+t*d*c+o*i*m-t*l*m)*w,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*p+t*l*p)*w,e[8]=T*w,e[9]=(g*h*s-u*_*s-g*n*p+t*_*p+u*n*m-t*h*m)*w,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*w,e[12]=I*w,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*d+t*h*d)*w,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*d-t*a*d)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,_=o*u,d=o*h,m=a*h,E=l*c,x=l*u,T=l*h,I=n.x,C=n.y,w=n.z;return i[0]=(1-(_+m))*I,i[1]=(p+T)*I,i[2]=(g-x)*I,i[3]=0,i[4]=(p-T)*C,i[5]=(1-(f+m))*C,i[6]=(d+E)*C,i[7]=0,i[8]=(g+x)*w,i[9]=(d-E)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Qi.set(i[0],i[1],i[2]).length();const o=Qi.set(i[4],i[5],i[6]).length(),a=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],an.copy(this);const c=1/s,u=1/o,h=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=On){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(a===On)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ho)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=On){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,p=(n+i)*u;let g,_;if(a===On)g=(o+s)*h,_=-2*h;else if(a===ho)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new q,an=new tt,dp=new q(0,0,0),pp=new q(1,1,1),Yn=new q,Ds=new q,Gt=new q,Sc=new tt,Mc=new Bi;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mp=0;const Ec=new q,er=new Bi,Pn=new tt,Us=new q,Jr=new q,_p=new q,gp=new Bi,Tc=new q(1,0,0),bc=new q(0,1,0),Ac=new q(0,0,1),wc={type:"added"},vp={type:"removed"},tr={type:"childadded",child:null},Ko={type:"childremoved",child:null};class Mt extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new q,t=new pn,n=new Bi,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new Le}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(Tc,e)}rotateY(e){return this.rotateOnAxis(bc,e)}rotateZ(e){return this.rotateOnAxis(Ac,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tc,e)}translateY(e){return this.translateOnAxis(bc,e)}translateZ(e){return this.translateOnAxis(Ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Us.copy(e):Us.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Jr,Us,this.up):Pn.lookAt(Us,Jr,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),er.setFromRotationMatrix(Pn),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wc),tr.child=e,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vp),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wc),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,_p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new q(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new q,Ln=new q,$o=new q,Nn=new q,nr=new q,ir=new q,Rc=new q,Qo=new q,ea=new q,ta=new q;class vn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ln.subVectors(i,t),Ln.subVectors(n,t),$o.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(Ln),l=ln.dot($o),c=Ln.dot(Ln),u=Ln.dot($o),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Ln.subVectors(e,t),ln.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),ln.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;nr.subVectors(i,n),ir.subVectors(s,n),Qo.subVectors(e,n);const l=nr.dot(Qo),c=ir.dot(Qo);if(l<=0&&c<=0)return t.copy(n);ea.subVectors(e,i);const u=nr.dot(ea),h=ir.dot(ea);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(nr,o);ta.subVectors(e,s);const p=nr.dot(ta),g=ir.dot(ta);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ir,a);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return Rc.subVectors(s,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Rc,a);const m=1/(d+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(nr,o).addScaledVector(ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function na(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=rl(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=na(o,s,e+1/3),this.g=na(o,s,e),this.b=na(o,s,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return je.fromWorkingColorSpace(bt.copy(this),e),Math.round(vt(bt.r*255,0,255))*65536+Math.round(vt(bt.g*255,0,255))*256+Math.round(vt(bt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,i=bt.g,s=bt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=cn){je.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,i=bt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Fs);const n=ns(jn.h,Fs.h,t),i=ns(jn.s,Fs.s,t),s=ns(jn.l,Fs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new He;He.NAMES=th;let xp=0;class Wr extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=br,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ra,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nh extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new q,Os=new he;class dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return sp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pc&&(e.usage=this.usage),e}}class ih extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rh extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yp=0;const $t=new tt,ia=new Mt,rr=new q,Vt=new Vr,Zr=new Vr,gt=new q;class mn extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zu(e)?rh:ih)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Vt.min,Zr.min),Vt.expandByPoint(gt),gt.addVectors(Vt.max,Zr.max),Vt.expandByPoint(gt)):(Vt.expandByPoint(Zr.min),Vt.expandByPoint(Zr.max))}Vt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(rr.fromBufferAttribute(e,c),gt.add(rr)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new q,l[F]=new q;const c=new q,u=new q,h=new q,f=new he,p=new he,g=new he,_=new q,d=new q;function m(F,M,S){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,F),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const V=1/(p.x*g.y-g.x*p.y);isFinite(V)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(V),d.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(V),a[F].add(_),a[M].add(_),a[S].add(_),l[F].add(d),l[M].add(d),l[S].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,M=E.length;F<M;++F){const S=E[F],V=S.start,H=S.count;for(let z=V,$=V+H;z<$;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new q,T=new q,I=new q,C=new q;function w(F){I.fromBufferAttribute(i,F),C.copy(I);const M=a[F];x.copy(M),x.sub(I.multiplyScalar(I.dot(M))).normalize(),T.crossVectors(C,M);const V=T.dot(l[F])<0?-1:1;o.setXYZW(F,x.x,x.y,x.z,V)}for(let F=0,M=E.length;F<M;++F){const S=E[F],V=S.start,H=S.count;for(let z=V,$=V+H;z<$;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,d),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,d=l.length;_<d;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[p++]}return new dn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new tt,vi=new Qu,Bs=new sl,Pc=new q,sr=new q,or=new q,ar=new q,ra=new q,zs=new q,ks=new he,Hs=new he,Gs=new he,Lc=new q,Nc=new q,Ic=new q,Vs=new q,Ws=new q;class qt extends Mt{constructor(e=new mn,t=new nh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ra.fromBufferAttribute(h,e),o?zs.addScaledVector(ra,u):zs.addScaledVector(ra.sub(t),u))}t.add(zs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(Bs.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Bs,Pc)===null||vi.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Cc.copy(s).invert(),vi.copy(e.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const d=f[g],m=o[d.materialIndex],E=Math.max(d.start,p.start),x=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let T=E,I=x;T<I;T+=3){const C=a.getX(T),w=a.getX(T+1),F=a.getX(T+2);i=Xs(this,m,e,n,c,u,h,C,w,F),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=d.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const E=a.getX(d),x=a.getX(d+1),T=a.getX(d+2);i=Xs(this,o,e,n,c,u,h,E,x,T),i&&(i.faceIndex=Math.floor(d/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const d=f[g],m=o[d.materialIndex],E=Math.max(d.start,p.start),x=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let T=E,I=x;T<I;T+=3){const C=T,w=T+1,F=T+2;i=Xs(this,m,e,n,c,u,h,C,w,F),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=d.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const E=d,x=d+1,T=d+2;i=Xs(this,o,e,n,c,u,h,E,x,T),i&&(i.faceIndex=Math.floor(d/3),t.push(i))}}}}function Sp(r,e,t,n,i,s,o,a){let l;if(e.side===It?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ai,a),l===null)return null;Ws.copy(a),Ws.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ws);return c<t.near||c>t.far?null:{distance:c,point:Ws.clone(),object:r}}function Xs(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,sr),r.getVertexPosition(l,or),r.getVertexPosition(c,ar);const u=Sp(r,e,t,n,sr,or,ar,Vs);if(u){i&&(ks.fromBufferAttribute(i,a),Hs.fromBufferAttribute(i,l),Gs.fromBufferAttribute(i,c),u.uv=vn.getInterpolation(Vs,sr,or,ar,ks,Hs,Gs,new he)),s&&(ks.fromBufferAttribute(s,a),Hs.fromBufferAttribute(s,l),Gs.fromBufferAttribute(s,c),u.uv1=vn.getInterpolation(Vs,sr,or,ar,ks,Hs,Gs,new he)),o&&(Lc.fromBufferAttribute(o,a),Nc.fromBufferAttribute(o,l),Ic.fromBufferAttribute(o,c),u.normal=vn.getInterpolation(Vs,sr,or,ar,Lc,Nc,Ic,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new q,materialIndex:0};vn.getNormal(sr,or,ar,h.normal),u.face=h}return u}class Es extends mn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(h,2));function g(_,d,m,E,x,T,I,C,w,F,M){const S=T/w,V=I/F,H=T/2,z=I/2,$=C/2,k=w+1,O=F+1;let G=0,U=0;const Z=new q;for(let J=0;J<O;J++){const re=J*V-z;for(let ce=0;ce<k;ce++){const _e=ce*S-H;Z[_]=_e*E,Z[d]=re*x,Z[m]=$,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[d]=0,Z[m]=C>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(ce/w),h.push(1-J/F),G+=1}}for(let J=0;J<F;J++)for(let re=0;re<w;re++){const ce=f+re+k*J,_e=f+re+k*(J+1),L=f+(re+1)+k*(J+1),N=f+(re+1)+k*J;l.push(ce,_e,N),l.push(_e,L,N),U+=6}a.addGroup(p,U,M),p+=U,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(r){const e={};for(let t=0;t<r.length;t++){const n=Or(r[t]);for(const i in n)e[i]=n[i]}return e}function Mp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Ep={clone:Or,merge:Pt};var Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=Mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oh extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new q,Dc=new he,Uc=new he;class en extends oh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Dc,Uc),t.subVectors(Uc,Dc)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lr=-90,cr=1;class Ap extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(lr,cr,e,t);i.layers=this.layers,this.add(i);const s=new en(lr,cr,e,t);s.layers=this.layers,this.add(s);const o=new en(lr,cr,e,t);o.layers=this.layers,this.add(o);const a=new en(lr,cr,e,t);a.layers=this.layers,this.add(a);const l=new en(lr,cr,e,t);l.layers=this.layers,this.add(l);const c=new en(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ah extends Dt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wp extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ah(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Es(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:ni});s.uniforms.tEquirect.value=t;const o=new qt(i,s),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=hn),new Ap(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const sa=new q,Rp=new q,Cp=new Le;class Zn{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sa.subVectors(n,t).cross(Rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cp.getNormalMatrix(e),i=this.coplanarPoint(sa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new sl,qs=new q;class ol{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,s=new Zn,o=new Zn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],p=i[8],g=i[9],_=i[10],d=i[11],m=i[12],E=i[13],x=i[14],T=i[15];if(n[0].setComponents(l-s,f-c,d-p,T-m).normalize(),n[1].setComponents(l+s,f+c,d+p,T+m).normalize(),n[2].setComponents(l+o,f+u,d+g,T+E).normalize(),n[3].setComponents(l-o,f-u,d-g,T-E).normalize(),n[4].setComponents(l-a,f-h,d-_,T-x).normalize(),t===On)n[5].setComponents(l+a,f+h,d+_,T+x).normalize();else if(t===ho)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qs.x=i.normal.x>0?e.max.x:e.min.x,qs.y=i.normal.y>0?e.max.y:e.min.y,qs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Pp(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,a),h.count===-1&&f.length===0&&r.bufferSubData(c,0,u),f.length!==0){for(let p=0,g=f.length;p<g;p++){const _=f[p];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Eo extends mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],_=[],d=[];for(let m=0;m<u;m++){const E=m*f-o;for(let x=0;x<c;x++){const T=x*h-s;g.push(T,-E,0),_.push(0,0,1),d.push(x/a),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<a;E++){const x=E+c*m,T=E+c*(m+1),I=E+1+c*(m+1),C=E+1+c*m;p.push(x,T,C),p.push(T,I,C)}this.setIndex(p),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,em=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",lm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Am=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,t_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,a_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,p_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,m_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,__=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,x_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,S_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,A_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,P_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,z_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,q_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Z_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Q_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ng=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Lp,alphahash_pars_fragment:Np,alphamap_fragment:Ip,alphamap_pars_fragment:Dp,alphatest_fragment:Up,alphatest_pars_fragment:Fp,aomap_fragment:Op,aomap_pars_fragment:Bp,batching_pars_vertex:zp,batching_vertex:kp,begin_vertex:Hp,beginnormal_vertex:Gp,bsdfs:Vp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:Jp,color_fragment:Zp,color_pars_fragment:Kp,color_pars_vertex:$p,color_vertex:Qp,common:em,cube_uv_reflection_fragment:tm,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:rm,emissivemap_fragment:sm,emissivemap_pars_fragment:om,colorspace_fragment:am,colorspace_pars_fragment:lm,envmap_fragment:cm,envmap_common_pars_fragment:um,envmap_pars_fragment:hm,envmap_pars_vertex:fm,envmap_physical_pars_fragment:Tm,envmap_vertex:dm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:_m,fog_pars_fragment:gm,gradientmap_pars_fragment:vm,lightmap_fragment:xm,lightmap_pars_fragment:ym,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:Mm,lights_pars_begin:Em,lights_toon_fragment:bm,lights_toon_pars_fragment:Am,lights_phong_fragment:wm,lights_phong_pars_fragment:Rm,lights_physical_fragment:Cm,lights_physical_pars_fragment:Pm,lights_fragment_begin:Lm,lights_fragment_maps:Nm,lights_fragment_end:Im,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Om,map_fragment:Bm,map_pars_fragment:zm,map_particle_fragment:km,map_particle_pars_fragment:Hm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Vm,morphinstance_vertex:Wm,morphcolor_vertex:Xm,morphnormal_vertex:qm,morphtarget_pars_vertex:Ym,morphtarget_vertex:jm,normal_fragment_begin:Jm,normal_fragment_maps:Zm,normal_pars_fragment:Km,normal_pars_vertex:$m,normal_vertex:Qm,normalmap_pars_fragment:e_,clearcoat_normal_fragment_begin:t_,clearcoat_normal_fragment_maps:n_,clearcoat_pars_fragment:i_,iridescence_pars_fragment:r_,opaque_fragment:s_,packing:o_,premultiplied_alpha_fragment:a_,project_vertex:l_,dithering_fragment:c_,dithering_pars_fragment:u_,roughnessmap_fragment:h_,roughnessmap_pars_fragment:f_,shadowmap_pars_fragment:d_,shadowmap_pars_vertex:p_,shadowmap_vertex:m_,shadowmask_pars_fragment:__,skinbase_vertex:g_,skinning_pars_vertex:v_,skinning_vertex:x_,skinnormal_vertex:y_,specularmap_fragment:S_,specularmap_pars_fragment:M_,tonemapping_fragment:E_,tonemapping_pars_fragment:T_,transmission_fragment:b_,transmission_pars_fragment:A_,uv_pars_fragment:w_,uv_pars_vertex:R_,uv_vertex:C_,worldpos_vertex:P_,background_vert:L_,background_frag:N_,backgroundCube_vert:I_,backgroundCube_frag:D_,cube_vert:U_,cube_frag:F_,depth_vert:O_,depth_frag:B_,distanceRGBA_vert:z_,distanceRGBA_frag:k_,equirect_vert:H_,equirect_frag:G_,linedashed_vert:V_,linedashed_frag:W_,meshbasic_vert:X_,meshbasic_frag:q_,meshlambert_vert:Y_,meshlambert_frag:j_,meshmatcap_vert:J_,meshmatcap_frag:Z_,meshnormal_vert:K_,meshnormal_frag:$_,meshphong_vert:Q_,meshphong_frag:eg,meshphysical_vert:tg,meshphysical_frag:ng,meshtoon_vert:ig,meshtoon_frag:rg,points_vert:sg,points_frag:og,shadow_vert:ag,shadow_frag:lg,sprite_vert:cg,sprite_frag:ug},ve={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},gn={basic:{uniforms:Pt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Pt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Pt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Pt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Pt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Pt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Pt([ve.points,ve.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Pt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Pt([ve.common,ve.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Pt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Pt([ve.sprite,ve.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Pt([ve.common,ve.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Pt([ve.lights,ve.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};gn.physical={uniforms:Pt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ys={r:0,b:0,g:0},yi=new pn,hg=new tt;function fg(r,e,t,n,i,s,o){const a=new He(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(d,m){let E=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),E=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===So)?(u===void 0&&(u=new qt(new Es(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Or(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),yi.copy(m.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hg.makeRotationFromEuler(yi)),u.material.toneMapped=je.getTransfer(x.colorSpace)!==Ke,(h!==x||f!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new qt(new Eo(2,2),new li({name:"BackgroundMaterial",uniforms:Or(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=je.getTransfer(x.colorSpace)!==Ke,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function _(d,m){d.getRGB(Ys,sh(r)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(d,m=1){a.set(d),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,_(a,l)},render:g}}function dg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(S,V,H,z,$){let k=!1;const O=h(z,H,V);s!==O&&(s=O,c(s.object)),k=p(S,z,H,$),k&&g(S,z,H,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,T(S,V,H,z),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,V,H){const z=H.wireframe===!0;let $=n[S.id];$===void 0&&($={},n[S.id]=$);let k=$[V.id];k===void 0&&(k={},$[V.id]=k);let O=k[z];return O===void 0&&(O=f(l()),k[z]=O),O}function f(S){const V=[],H=[],z=[];for(let $=0;$<t;$++)V[$]=0,H[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:H,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,V,H,z){const $=s.attributes,k=V.attributes;let O=0;const G=H.getAttributes();for(const U in G)if(G[U].location>=0){const J=$[U];let re=k[U];if(re===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),J===void 0||J.attribute!==re||re&&J.data!==re.data)return!0;O++}return s.attributesNum!==O||s.index!==z}function g(S,V,H,z){const $={},k=V.attributes;let O=0;const G=H.getAttributes();for(const U in G)if(G[U].location>=0){let J=k[U];J===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const re={};re.attribute=J,J&&J.data&&(re.data=J.data),$[U]=re,O++}s.attributes=$,s.attributesNum=O,s.index=z}function _(){const S=s.newAttributes;for(let V=0,H=S.length;V<H;V++)S[V]=0}function d(S){m(S,0)}function m(S,V){const H=s.newAttributes,z=s.enabledAttributes,$=s.attributeDivisors;H[S]=1,z[S]===0&&(r.enableVertexAttribArray(S),z[S]=1),$[S]!==V&&(r.vertexAttribDivisor(S,V),$[S]=V)}function E(){const S=s.newAttributes,V=s.enabledAttributes;for(let H=0,z=V.length;H<z;H++)V[H]!==S[H]&&(r.disableVertexAttribArray(H),V[H]=0)}function x(S,V,H,z,$,k,O){O===!0?r.vertexAttribIPointer(S,V,H,$,k):r.vertexAttribPointer(S,V,H,z,$,k)}function T(S,V,H,z){_();const $=z.attributes,k=H.getAttributes(),O=V.defaultAttributeValues;for(const G in k){const U=k[G];if(U.location>=0){let Z=$[G];if(Z===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){const J=Z.normalized,re=Z.itemSize,ce=e.get(Z);if(ce===void 0)continue;const _e=ce.buffer,L=ce.type,N=ce.bytesPerElement,P=L===r.INT||L===r.UNSIGNED_INT||Z.gpuType===Gu;if(Z.isInterleavedBufferAttribute){const A=Z.data,Q=A.stride,le=Z.offset;if(A.isInstancedInterleavedBuffer){for(let ee=0;ee<U.locationSize;ee++)m(U.location+ee,A.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let ee=0;ee<U.locationSize;ee++)d(U.location+ee);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let ee=0;ee<U.locationSize;ee++)x(U.location+ee,re/U.locationSize,L,J,Q*N,(le+re/U.locationSize*ee)*N,P)}else{if(Z.isInstancedBufferAttribute){for(let A=0;A<U.locationSize;A++)m(U.location+A,Z.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let A=0;A<U.locationSize;A++)d(U.location+A);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let A=0;A<U.locationSize;A++)x(U.location+A,re/U.locationSize,L,J,re*N,re/U.locationSize*A*N,P)}}else if(O!==void 0){const J=O[G];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(U.location,J);break;case 3:r.vertexAttrib3fv(U.location,J);break;case 4:r.vertexAttrib4fv(U.location,J);break;default:r.vertexAttrib1fv(U.location,J)}}}}E()}function I(){F();for(const S in n){const V=n[S];for(const H in V){const z=V[H];for(const $ in z)u(z[$].object),delete z[$];delete V[H]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const V=n[S.id];for(const H in V){const z=V[H];for(const $ in z)u(z[$].object),delete z[$];delete V[H]}delete n[S.id]}function w(S){for(const V in n){const H=n[V];if(H[S.id]===void 0)continue;const z=H[S.id];for(const $ in z)u(z[$].object),delete z[$];delete H[S.id]}}function F(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:F,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:d,disableUnusedAttributes:E}}function pg(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{h.multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function mg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),d=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:d,vertexTextures:m,maxSamples:E}}function _g(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Zn,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!d)s?u(null):c();else{const E=s?0:n,x=E*4;let T=m.clippingState||null;l.value=T,T=u(g,f,x,p);for(let I=0;I!==x;++I)T[I]=t[I];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const m=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<m)&&(d=new Float32Array(m));for(let x=0,T=p;x!==_;++x,T+=4)o.copy(h[x]).applyMatrix4(E,a),o.normal.toArray(d,T),d[T+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}function gg(r){let e=new WeakMap;function t(o,a){return a===Ca?o.mapping=Dr:a===Pa&&(o.mapping=Ur),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ca||a===Pa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wp(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ch extends oh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mr=4,Fc=[.125,.215,.35,.446,.526,.582],Ri=20,oa=new ch,Oc=new He;let aa=null,la=0,ca=0,ua=!1;const bi=(1+Math.sqrt(5))/2,ur=1/bi,Bc=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,bi,ur),new q(0,bi,-ur),new q(ur,0,bi),new q(-ur,0,bi),new q(bi,ur,0),new q(-bi,ur,0)];class zc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa,la,ca),this._renderer.xr.enabled=ua,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ao,format:yn,colorSpace:fi,depthBuffer:!1},i=kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vg(s)),this._blurMaterial=xg(s,e,t)}return i}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,i){const a=new en(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Oc),u.toneMapping=ii,u.autoClear=!1;const p=new nh({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new qt(new Es,p);let _=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,_=!0):(p.color.copy(Oc),_=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):E===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;js(i,E*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Dr||e.mapping===Ur;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Bc[(i-1)%Bc.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),_=s/g,d=isFinite(s)?1+Math.floor(u*_):Ri;d>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ri}`);const m=[];let E=0;for(let w=0;w<Ri;++w){const F=w/_,M=Math.exp(-F*F/2);m.push(M),w===0?E+=M:w<d&&(E+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/E;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const T=this._sizeLods[i],I=3*T*(i>x-mr?i-x+mr:0),C=4*(this._cubeSize-T);js(t,I,C,3*T,2*T),l.setRenderTarget(t),l.render(h,oa)}}function vg(r){const e=[],t=[],n=[];let i=r;const s=r-mr+1+Fc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-mr?l=Fc[o-r+mr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,d=2,m=1,E=new Float32Array(_*g*p),x=new Float32Array(d*g*p),T=new Float32Array(m*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,F=C>2?0:-1,M=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];E.set(M,_*g*C),x.set(f,d*g*C);const S=[C,C,C,C,C,C];T.set(S,m*g*C)}const I=new mn;I.setAttribute("position",new dn(E,_)),I.setAttribute("uv",new dn(x,d)),I.setAttribute("faceIndex",new dn(T,m)),e.push(I),i>mr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kc(r,e,t){const n=new Oi(r,e,t);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function xg(r,e,t){const n=new Float32Array(Ri),i=new q(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Hc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Gc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ca||l===Pa,u=l===Dr||l===Ur;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new zc(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new zc(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Sg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Mg(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,m=_.length;d<m;d++)e.remove(_[d])}f.removeEventListener("dispose",o),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let d=0,m=_.length;d<m;d++)e.update(_[d],r.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let x=0,T=E.length;x<T;x+=3){const I=E[x+0],C=E[x+1],w=E[x+2];f.push(I,C,C,w,w,I)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,T=E.length/3-1;x<T;x+=3){const I=x+0,C=x+1,w=x+2;f.push(I,C,C,w,w,I)}}else return;const d=new(Zu(f)?rh:ih)(f,1);d.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,d)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Eg(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,h*o,p),t.update(f,n,p))}function u(h,f,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p;_++)this.render(h[_]/o,f[_]);else{g.multiDrawElementsWEBGL(n,f,0,s,h,0,p);let _=0;for(let d=0;d<p;d++)_+=f[d];t.update(_,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Tg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function bg(r,e,t){const n=new WeakMap,i=new yt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),d===!0&&(T=3);let I=a.attributes.position.count*T,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const w=new Float32Array(I*C*4*h),F=new $u(w,I,C,h);F.type=$n,F.needsUpdate=!0;const M=T*4;for(let V=0;V<h;V++){const H=m[V],z=E[V],$=x[V],k=I*C*4*V;for(let O=0;O<H.count;O++){const G=O*M;g===!0&&(i.fromBufferAttribute(H,O),w[k+G+0]=i.x,w[k+G+1]=i.y,w[k+G+2]=i.z,w[k+G+3]=0),_===!0&&(i.fromBufferAttribute(z,O),w[k+G+4]=i.x,w[k+G+5]=i.y,w[k+G+6]=i.z,w[k+G+7]=0),d===!0&&(i.fromBufferAttribute($,O),w[k+G+8]=i.x,w[k+G+9]=i.y,w[k+G+10]=i.z,w[k+G+11]=$.itemSize===4?i.w:1)}}f={count:h,texture:F,size:new he(I,C)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let d=0;d<c.length;d++)g+=c[d];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Ag(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class uh extends Dt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Ar,u!==Ar&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ar&&(n=Fr),n===void 0&&u===ls&&(n=Ms),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hh=new Dt,fh=new uh(1,1);fh.compareFunction=Ju;const dh=new $u,ph=new hp,mh=new ah,Vc=[],Wc=[],Xc=new Float32Array(16),qc=new Float32Array(9),Yc=new Float32Array(4);function Xr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Vc[i];if(s===void 0&&(s=new Float32Array(i),Vc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function To(r,e){let t=Wc[e];t===void 0&&(t=new Int32Array(e),Wc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function wg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Rg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2fv(this.addr,e),pt(t,e)}}function Cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;r.uniform3fv(this.addr,e),pt(t,e)}}function Pg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4fv(this.addr,e),pt(t,e)}}function Lg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Yc.set(n),r.uniformMatrix2fv(this.addr,!1,Yc),pt(t,n)}}function Ng(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;qc.set(n),r.uniformMatrix3fv(this.addr,!1,qc),pt(t,n)}}function Ig(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Xc.set(n),r.uniformMatrix4fv(this.addr,!1,Xc),pt(t,n)}}function Dg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2iv(this.addr,e),pt(t,e)}}function Fg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3iv(this.addr,e),pt(t,e)}}function Og(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4iv(this.addr,e),pt(t,e)}}function Bg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2uiv(this.addr,e),pt(t,e)}}function kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3uiv(this.addr,e),pt(t,e)}}function Hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4uiv(this.addr,e),pt(t,e)}}function Gg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?fh:hh;t.setTexture2D(e||s,i)}function Vg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ph,i)}function Wg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mh,i)}function Xg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dh,i)}function qg(r){switch(r){case 5126:return wg;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Lg;case 35675:return Ng;case 35676:return Ig;case 5124:case 35670:return Dg;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return kg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function Yg(r,e){r.uniform1fv(this.addr,e)}function jg(r,e){const t=Xr(e,this.size,2);r.uniform2fv(this.addr,t)}function Jg(r,e){const t=Xr(e,this.size,3);r.uniform3fv(this.addr,t)}function Zg(r,e){const t=Xr(e,this.size,4);r.uniform4fv(this.addr,t)}function Kg(r,e){const t=Xr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function $g(r,e){const t=Xr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Qg(r,e){const t=Xr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function e0(r,e){r.uniform1iv(this.addr,e)}function t0(r,e){r.uniform2iv(this.addr,e)}function n0(r,e){r.uniform3iv(this.addr,e)}function i0(r,e){r.uniform4iv(this.addr,e)}function r0(r,e){r.uniform1uiv(this.addr,e)}function s0(r,e){r.uniform2uiv(this.addr,e)}function o0(r,e){r.uniform3uiv(this.addr,e)}function a0(r,e){r.uniform4uiv(this.addr,e)}function l0(r,e,t){const n=this.cache,i=e.length,s=To(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||hh,s[o])}function c0(r,e,t){const n=this.cache,i=e.length,s=To(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ph,s[o])}function u0(r,e,t){const n=this.cache,i=e.length,s=To(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||mh,s[o])}function h0(r,e,t){const n=this.cache,i=e.length,s=To(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||dh,s[o])}function f0(r){switch(r){case 5126:return Yg;case 35664:return jg;case 35665:return Jg;case 35666:return Zg;case 35674:return Kg;case 35675:return $g;case 35676:return Qg;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return r0;case 36294:return s0;case 36295:return o0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return h0}}class d0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qg(t.type)}}class p0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f0(t.type)}}class m0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function jc(r,e){r.seq.push(e),r.map[e.id]=e}function _0(r,e,t){const n=r.name,i=n.length;for(ha.lastIndex=0;;){const s=ha.exec(n),o=ha.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){jc(t,c===void 0?new d0(a,r,e):new p0(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new m0(a),jc(t,h)),t=h}}}class to{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);_0(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Jc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const g0=37297;let v0=0;function x0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function y0(r){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(r);let n;switch(e===t?n="":e===uo&&t===co?n="LinearDisplayP3ToLinearSRGB":e===co&&t===uo&&(n="LinearSRGBToLinearDisplayP3"),r){case fi:case Mo:return[n,"LinearTransferOETF"];case cn:case il:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Zc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+x0(r.getShaderSource(e),o)}else return i}function S0(r,e){const t=y0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function M0(r,e){let t;switch(e){case dd:t="Linear";break;case pd:t="Reinhard";break;case md:t="OptimizedCineon";break;case _d:t="ACESFilmic";break;case vd:t="AgX";break;case xd:t="Neutral";break;case gd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function E0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function T0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function b0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function $r(r){return r!==""}function Kc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $c(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(r){return r.replace(A0,R0)}const w0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function R0(r,e){let t=Oe[e];if(t===void 0){const n=w0.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const C0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(r){return r.replace(C0,P0)}function P0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function eu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===zf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function N0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Dr:case Ur:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function D0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case hd:e="ENVMAP_BLENDING_MIX";break;case fd:e="ENVMAP_BLENDING_ADD";break}return e}function U0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function F0(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=L0(t),c=N0(t),u=I0(t),h=D0(t),f=U0(t),p=E0(t),g=T0(s),_=i.createProgram();let d,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($r).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($r).join(`
`),m.length>0&&(m+=`
`)):(d=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),m=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Oe.tonemapping_pars_fragment:"",t.toneMapping!==ii?M0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,S0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=Ia(o),o=Kc(o,t),o=$c(o,t),a=Ia(a),a=Kc(a,t),a=$c(a,t),o=Qc(o),a=Qc(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",t.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=E+d+o,T=E+m+a,I=Jc(i,i.VERTEX_SHADER,x),C=Jc(i,i.FRAGMENT_SHADER,T);i.attachShader(_,I),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(V){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(I).trim(),$=i.getShaderInfoLog(C).trim();let k=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,I,C);else{const G=Zc(i,I,"vertex"),U=Zc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+H+`
`+G+`
`+U)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||$==="")&&(O=!1);O&&(V.diagnostics={runnable:k,programLog:H,vertexShader:{log:z,prefix:d},fragmentShader:{log:$,prefix:m}})}i.deleteShader(I),i.deleteShader(C),F=new to(i,_),M=b0(i,_)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,g0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let O0=0;class B0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new z0(e),t.set(e,n)),n}}class z0{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}}function k0(r,e,t,n,i,s,o){const a=new eh,l=new B0,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,S,V,H,z){const $=H.fog,k=z.geometry,O=M.isMeshStandardMaterial?H.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),U=G&&G.mapping===So?G.image.height:null,Z=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const J=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=J!==void 0?J.length:0;let ce=0;k.morphAttributes.position!==void 0&&(ce=1),k.morphAttributes.normal!==void 0&&(ce=2),k.morphAttributes.color!==void 0&&(ce=3);let _e,L,N,P;if(Z){const mt=gn[Z];_e=mt.vertexShader,L=mt.fragmentShader}else _e=M.vertexShader,L=M.fragmentShader,l.update(M),N=l.getVertexShaderID(M),P=l.getFragmentShaderID(M);const A=r.getRenderTarget(),Q=z.isInstancedMesh===!0,le=z.isBatchedMesh===!0,ee=!!M.map,B=!!M.matcap,K=!!G,Y=!!M.aoMap,W=!!M.lightMap,X=!!M.bumpMap,ie=!!M.normalMap,R=!!M.displacementMap,v=!!M.emissiveMap,b=!!M.metalnessMap,j=!!M.roughnessMap,ne=M.anisotropy>0,fe=M.clearcoat>0,be=M.iridescence>0,de=M.sheen>0,Me=M.transmission>0,Ae=ne&&!!M.anisotropyMap,me=fe&&!!M.clearcoatMap,xe=fe&&!!M.clearcoatNormalMap,Ce=fe&&!!M.clearcoatRoughnessMap,Se=be&&!!M.iridescenceMap,Te=be&&!!M.iridescenceThicknessMap,Be=de&&!!M.sheenColorMap,ze=de&&!!M.sheenRoughnessMap,We=!!M.specularMap,Xe=!!M.specularColorMap,qe=!!M.specularIntensityMap,we=Me&&!!M.transmissionMap,y=Me&&!!M.thicknessMap,se=!!M.gradientMap,pe=!!M.alphaMap,ge=M.alphaTest>0,Ee=!!M.alphaHash,Ge=!!M.extensions;let ke=ii;M.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ke=r.toneMapping);const $e={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:L,defines:M.defines,customVertexShaderID:N,customFragmentShaderID:P,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:le,instancing:Q,instancingColor:Q&&z.instanceColor!==null,instancingMorph:Q&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:A===null?r.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:fi,alphaToCoverage:!!M.alphaToCoverage,map:ee,matcap:B,envMap:K,envMapMode:K&&G.mapping,envMapCubeUVHeight:U,aoMap:Y,lightMap:W,bumpMap:X,normalMap:ie,displacementMap:f&&R,emissiveMap:v,normalMapObjectSpace:ie&&M.normalMapType===Id,normalMapTangentSpace:ie&&M.normalMapType===nl,metalnessMap:b,roughnessMap:j,anisotropy:ne,anisotropyMap:Ae,clearcoat:fe,clearcoatMap:me,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ce,iridescence:be,iridescenceMap:Se,iridescenceThicknessMap:Te,sheen:de,sheenColorMap:Be,sheenRoughnessMap:ze,specularMap:We,specularColorMap:Xe,specularIntensityMap:qe,transmission:Me,transmissionMap:we,thicknessMap:y,gradientMap:se,opaque:M.transparent===!1&&M.blending===br&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:ge,alphaHash:Ee,combine:M.combine,mapUv:ee&&_(M.map.channel),aoMapUv:Y&&_(M.aoMap.channel),lightMapUv:W&&_(M.lightMap.channel),bumpMapUv:X&&_(M.bumpMap.channel),normalMapUv:ie&&_(M.normalMap.channel),displacementMapUv:R&&_(M.displacementMap.channel),emissiveMapUv:v&&_(M.emissiveMap.channel),metalnessMapUv:b&&_(M.metalnessMap.channel),roughnessMapUv:j&&_(M.roughnessMap.channel),anisotropyMapUv:Ae&&_(M.anisotropyMap.channel),clearcoatMapUv:me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&_(M.sheenRoughnessMap.channel),specularMapUv:We&&_(M.specularMap.channel),specularColorMapUv:Xe&&_(M.specularColorMap.channel),specularIntensityMapUv:qe&&_(M.specularIntensityMap.channel),transmissionMapUv:we&&_(M.transmissionMap.channel),thicknessMapUv:y&&_(M.thicknessMap.channel),alphaMapUv:pe&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ie||ne),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(ee||pe),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ee&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===Ke,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===un,flipSided:M.side===It,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ge&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ge&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)S.push(V),S.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(E(S,M),x(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function E(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),M.push(a.mask)}function T(M){const S=g[M.type];let V;if(S){const H=gn[S];V=Ep.clone(H.uniforms)}else V=M.uniforms;return V}function I(M,S){let V;for(let H=0,z=u.length;H<z;H++){const $=u[H];if($.cacheKey===S){V=$,++V.usedTimes;break}}return V===void 0&&(V=new F0(r,S,M,s),u.push(V)),V}function C(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function F(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:T,acquireProgram:I,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:F}}function H0(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function G0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function tu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function nu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,p,g,_,d){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:d},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=d),e++,m}function a(h,f,p,g,_,d){const m=o(h,f,p,g,_,d);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(h,f,p,g,_,d){const m=o(h,f,p,g,_,d);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||G0),n.length>1&&n.sort(f||tu),i.length>1&&i.sort(f||tu)}function u(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function V0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new nu,r.set(n,[o])):i>=s.length?(o=new nu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function W0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new He};break;case"SpotLight":t={position:new q,direction:new q,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function X0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let q0=0;function Y0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function j0(r){const e=new W0,t=X0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new tt,o=new tt;function a(c,u){let h=0,f=0,p=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let g=0,_=0,d=0,m=0,E=0,x=0,T=0,I=0,C=0,w=0,F=0;c.sort(Y0);const M=u===!0?Math.PI:1;for(let V=0,H=c.length;V<H;V++){const z=c[V],$=z.color,k=z.intensity,O=z.distance,G=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=$.r*k*M,f+=$.g*k*M,p+=$.b*k*M;else if(z.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(z.sh.coefficients[U],k);F++}else if(z.isDirectionalLight){const U=e.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity*M),z.castShadow){const Z=z.shadow,J=t.get(z);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=z.shadow.matrix,x++}n.directional[g]=U,g++}else if(z.isSpotLight){const U=e.get(z);U.position.setFromMatrixPosition(z.matrixWorld),U.color.copy($).multiplyScalar(k*M),U.distance=O,U.coneCos=Math.cos(z.angle),U.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),U.decay=z.decay,n.spot[d]=U;const Z=z.shadow;if(z.map&&(n.spotLightMap[C]=z.map,C++,Z.updateMatrices(z),z.castShadow&&w++),n.spotLightMatrix[d]=Z.matrix,z.castShadow){const J=t.get(z);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.spotShadow[d]=J,n.spotShadowMap[d]=G,I++}d++}else if(z.isRectAreaLight){const U=e.get(z);U.color.copy($).multiplyScalar(k),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),n.rectArea[m]=U,m++}else if(z.isPointLight){const U=e.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity*M),U.distance=z.distance,U.decay=z.decay,z.castShadow){const Z=z.shadow,J=t.get(z);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=z.shadow.matrix,T++}n.point[_]=U,_++}else if(z.isHemisphereLight){const U=e.get(z);U.skyColor.copy(z.color).multiplyScalar(k*M),U.groundColor.copy(z.groundColor).multiplyScalar(k*M),n.hemi[E]=U,E++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const S=n.hash;(S.directionalLength!==g||S.pointLength!==_||S.spotLength!==d||S.rectAreaLength!==m||S.hemiLength!==E||S.numDirectionalShadows!==x||S.numPointShadows!==T||S.numSpotShadows!==I||S.numSpotMaps!==C||S.numLightProbes!==F)&&(n.directional.length=g,n.spot.length=d,n.rectArea.length=m,n.point.length=_,n.hemi.length=E,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=I,n.spotShadowMap.length=I,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=I+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=F,S.directionalLength=g,S.pointLength=_,S.spotLength=d,S.rectAreaLength=m,S.hemiLength=E,S.numDirectionalShadows=x,S.numPointShadows=T,S.numSpotShadows=I,S.numSpotMaps=C,S.numLightProbes=F,n.version=q0++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const d=u.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const x=c[m];if(x.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(d),h++}else if(x.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(d),p++}else if(x.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),o.identity(),s.copy(x.matrixWorld),s.premultiply(d),o.extractRotation(s),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),f++}else if(x.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(d),_++}}}return{setup:a,setupView:l,state:n}}function iu(r){const e=new j0(r),t=[],n=[];function i(){t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function J0(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new iu(r),e.set(i,[a])):s>=o.length?(a=new iu(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Z0 extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K0 extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ev(r,e,t){let n=new ol;const i=new he,s=new he,o=new yt,a=new Z0({depthPacking:Nd}),l=new K0,c={},u=t.maxTextureSize,h={[ai]:It,[It]:ai,[un]:un},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:$0,fragmentShader:Q0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zu;let m=this.type;this.render=function(C,w,F){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const M=r.getRenderTarget(),S=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),H=r.state;H.setBlending(ni),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=m!==Dn&&this.type===Dn,$=m===Dn&&this.type!==Dn;for(let k=0,O=C.length;k<O;k++){const G=C[k],U=G.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const Z=U.getFrameExtents();if(i.multiply(Z),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,U.mapSize.y=s.y)),U.map===null||z===!0||$===!0){const re=this.type!==Dn?{minFilter:tn,magFilter:tn}:{};U.map!==null&&U.map.dispose(),U.map=new Oi(i.x,i.y,re),U.map.texture.name=G.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();const J=U.getViewportCount();for(let re=0;re<J;re++){const ce=U.getViewport(re);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),H.viewport(o),U.updateMatrices(G,re),n=U.getFrustum(),T(w,F,U.camera,G,this.type)}U.isPointLightShadow!==!0&&this.type===Dn&&E(U,F),U.needsUpdate=!1}m=this.type,d.needsUpdate=!1,r.setRenderTarget(M,S,V)};function E(C,w){const F=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Oi(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(w,null,F,f,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(w,null,F,p,_,null)}function x(C,w,F,M){let S=null;const V=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(V!==void 0)S=V;else if(S=F.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=S.uuid,z=w.uuid;let $=c[H];$===void 0&&($={},c[H]=$);let k=$[z];k===void 0&&(k=S.clone(),$[z]=k,w.addEventListener("dispose",I)),S=k}if(S.visible=w.visible,S.wireframe=w.wireframe,M===Dn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=r.properties.get(S);H.light=F}return S}function T(C,w,F,M,S){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Dn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const z=e.update(C),$=C.material;if(Array.isArray($)){const k=z.groups;for(let O=0,G=k.length;O<G;O++){const U=k[O],Z=$[U.materialIndex];if(Z&&Z.visible){const J=x(C,Z,M,S);C.onBeforeShadow(r,C,w,F,z,J,U),r.renderBufferDirect(F,null,z,J,C,U),C.onAfterShadow(r,C,w,F,z,J,U)}}}else if($.visible){const k=x(C,$,M,S);C.onBeforeShadow(r,C,w,F,z,k,null),r.renderBufferDirect(F,null,z,k,C,null),C.onAfterShadow(r,C,w,F,z,k,null)}}const H=C.children;for(let z=0,$=H.length;z<$;z++)T(H[z],w,F,M,S)}function I(C){C.target.removeEventListener("dispose",I);for(const F in c){const M=c[F],S=C.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function tv(r){function e(){let y=!1;const se=new yt;let pe=null;const ge=new yt(0,0,0,0);return{setMask:function(Ee){pe!==Ee&&!y&&(r.colorMask(Ee,Ee,Ee,Ee),pe=Ee)},setLocked:function(Ee){y=Ee},setClear:function(Ee,Ge,ke,$e,mt){mt===!0&&(Ee*=$e,Ge*=$e,ke*=$e),se.set(Ee,Ge,ke,$e),ge.equals(se)===!1&&(r.clearColor(Ee,Ge,ke,$e),ge.copy(se))},reset:function(){y=!1,pe=null,ge.set(-1,0,0,0)}}}function t(){let y=!1,se=null,pe=null,ge=null;return{setTest:function(Ee){Ee?P(r.DEPTH_TEST):A(r.DEPTH_TEST)},setMask:function(Ee){se!==Ee&&!y&&(r.depthMask(Ee),se=Ee)},setFunc:function(Ee){if(pe!==Ee){switch(Ee){case rd:r.depthFunc(r.NEVER);break;case sd:r.depthFunc(r.ALWAYS);break;case od:r.depthFunc(r.LESS);break;case oo:r.depthFunc(r.LEQUAL);break;case ad:r.depthFunc(r.EQUAL);break;case ld:r.depthFunc(r.GEQUAL);break;case cd:r.depthFunc(r.GREATER);break;case ud:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Ee}},setLocked:function(Ee){y=Ee},setClear:function(Ee){ge!==Ee&&(r.clearDepth(Ee),ge=Ee)},reset:function(){y=!1,se=null,pe=null,ge=null}}}function n(){let y=!1,se=null,pe=null,ge=null,Ee=null,Ge=null,ke=null,$e=null,mt=null;return{setTest:function(Ye){y||(Ye?P(r.STENCIL_TEST):A(r.STENCIL_TEST))},setMask:function(Ye){se!==Ye&&!y&&(r.stencilMask(Ye),se=Ye)},setFunc:function(Ye,ct,ut){(pe!==Ye||ge!==ct||Ee!==ut)&&(r.stencilFunc(Ye,ct,ut),pe=Ye,ge=ct,Ee=ut)},setOp:function(Ye,ct,ut){(Ge!==Ye||ke!==ct||$e!==ut)&&(r.stencilOp(Ye,ct,ut),Ge=Ye,ke=ct,$e=ut)},setLocked:function(Ye){y=Ye},setClear:function(Ye){mt!==Ye&&(r.clearStencil(Ye),mt=Ye)},reset:function(){y=!1,se=null,pe=null,ge=null,Ee=null,Ge=null,ke=null,$e=null,mt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,g=!1,_=null,d=null,m=null,E=null,x=null,T=null,I=null,C=new He(0,0,0),w=0,F=!1,M=null,S=null,V=null,H=null,z=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=O>=1):G.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=O>=2);let U=null,Z={};const J=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),ce=new yt().fromArray(J),_e=new yt().fromArray(re);function L(y,se,pe,ge){const Ee=new Uint8Array(4),Ge=r.createTexture();r.bindTexture(y,Ge),r.texParameteri(y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<pe;ke++)y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(se+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return Ge}const N={};N[r.TEXTURE_2D]=L(r.TEXTURE_2D,r.TEXTURE_2D,1),N[r.TEXTURE_CUBE_MAP]=L(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[r.TEXTURE_2D_ARRAY]=L(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),N[r.TEXTURE_3D]=L(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),P(r.DEPTH_TEST),s.setFunc(oo),X(!1),ie(Bl),P(r.CULL_FACE),Y(ni);function P(y){c[y]!==!0&&(r.enable(y),c[y]=!0)}function A(y){c[y]!==!1&&(r.disable(y),c[y]=!1)}function Q(y,se){return u[y]!==se?(r.bindFramebuffer(y,se),u[y]=se,y===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=se),y===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=se),!0):!1}function le(y,se){let pe=f,ge=!1;if(y){pe=h.get(se),pe===void 0&&(pe=[],h.set(se,pe));const Ee=y.textures;if(pe.length!==Ee.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let Ge=0,ke=Ee.length;Ge<ke;Ge++)pe[Ge]=r.COLOR_ATTACHMENT0+Ge;pe.length=Ee.length,ge=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,ge=!0);ge&&r.drawBuffers(pe)}function ee(y){return p!==y?(r.useProgram(y),p=y,!0):!1}const B={[wi]:r.FUNC_ADD,[Hf]:r.FUNC_SUBTRACT,[Gf]:r.FUNC_REVERSE_SUBTRACT};B[Vf]=r.MIN,B[Wf]=r.MAX;const K={[Xf]:r.ZERO,[qf]:r.ONE,[Yf]:r.SRC_COLOR,[wa]:r.SRC_ALPHA,[Qf]:r.SRC_ALPHA_SATURATE,[Kf]:r.DST_COLOR,[Jf]:r.DST_ALPHA,[jf]:r.ONE_MINUS_SRC_COLOR,[Ra]:r.ONE_MINUS_SRC_ALPHA,[$f]:r.ONE_MINUS_DST_COLOR,[Zf]:r.ONE_MINUS_DST_ALPHA,[ed]:r.CONSTANT_COLOR,[td]:r.ONE_MINUS_CONSTANT_COLOR,[nd]:r.CONSTANT_ALPHA,[id]:r.ONE_MINUS_CONSTANT_ALPHA};function Y(y,se,pe,ge,Ee,Ge,ke,$e,mt,Ye){if(y===ni){g===!0&&(A(r.BLEND),g=!1);return}if(g===!1&&(P(r.BLEND),g=!0),y!==kf){if(y!==_||Ye!==F){if((d!==wi||x!==wi)&&(r.blendEquation(r.FUNC_ADD),d=wi,x=wi),Ye)switch(y){case br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zl:r.blendFunc(r.ONE,r.ONE);break;case kl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case kl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}m=null,E=null,T=null,I=null,C.set(0,0,0),w=0,_=y,F=Ye}return}Ee=Ee||se,Ge=Ge||pe,ke=ke||ge,(se!==d||Ee!==x)&&(r.blendEquationSeparate(B[se],B[Ee]),d=se,x=Ee),(pe!==m||ge!==E||Ge!==T||ke!==I)&&(r.blendFuncSeparate(K[pe],K[ge],K[Ge],K[ke]),m=pe,E=ge,T=Ge,I=ke),($e.equals(C)===!1||mt!==w)&&(r.blendColor($e.r,$e.g,$e.b,mt),C.copy($e),w=mt),_=y,F=!1}function W(y,se){y.side===un?A(r.CULL_FACE):P(r.CULL_FACE);let pe=y.side===It;se&&(pe=!pe),X(pe),y.blending===br&&y.transparent===!1?Y(ni):Y(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),i.setMask(y.colorWrite);const ge=y.stencilWrite;o.setTest(ge),ge&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),v(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?P(r.SAMPLE_ALPHA_TO_COVERAGE):A(r.SAMPLE_ALPHA_TO_COVERAGE)}function X(y){M!==y&&(y?r.frontFace(r.CW):r.frontFace(r.CCW),M=y)}function ie(y){y!==Of?(P(r.CULL_FACE),y!==S&&(y===Bl?r.cullFace(r.BACK):y===Bf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):A(r.CULL_FACE),S=y}function R(y){y!==V&&(k&&r.lineWidth(y),V=y)}function v(y,se,pe){y?(P(r.POLYGON_OFFSET_FILL),(H!==se||z!==pe)&&(r.polygonOffset(se,pe),H=se,z=pe)):A(r.POLYGON_OFFSET_FILL)}function b(y){y?P(r.SCISSOR_TEST):A(r.SCISSOR_TEST)}function j(y){y===void 0&&(y=r.TEXTURE0+$-1),U!==y&&(r.activeTexture(y),U=y)}function ne(y,se,pe){pe===void 0&&(U===null?pe=r.TEXTURE0+$-1:pe=U);let ge=Z[pe];ge===void 0&&(ge={type:void 0,texture:void 0},Z[pe]=ge),(ge.type!==y||ge.texture!==se)&&(U!==pe&&(r.activeTexture(pe),U=pe),r.bindTexture(y,se||N[y]),ge.type=y,ge.texture=se)}function fe(){const y=Z[U];y!==void 0&&y.type!==void 0&&(r.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function be(){try{r.compressedTexImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Me(){try{r.texSubImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ae(){try{r.texSubImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function xe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ce(){try{r.texStorage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Be(){try{r.texImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ze(y){ce.equals(y)===!1&&(r.scissor(y.x,y.y,y.z,y.w),ce.copy(y))}function We(y){_e.equals(y)===!1&&(r.viewport(y.x,y.y,y.z,y.w),_e.copy(y))}function Xe(y,se){let pe=l.get(se);pe===void 0&&(pe=new WeakMap,l.set(se,pe));let ge=pe.get(y);ge===void 0&&(ge=r.getUniformBlockIndex(se,y.name),pe.set(y,ge))}function qe(y,se){const ge=l.get(se).get(y);a.get(se)!==ge&&(r.uniformBlockBinding(se,ge,y.__bindingPointIndex),a.set(se,ge))}function we(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},U=null,Z={},u={},h=new WeakMap,f=[],p=null,g=!1,_=null,d=null,m=null,E=null,x=null,T=null,I=null,C=new He(0,0,0),w=0,F=!1,M=null,S=null,V=null,H=null,z=null,ce.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:P,disable:A,bindFramebuffer:Q,drawBuffers:le,useProgram:ee,setBlending:Y,setMaterial:W,setFlipSided:X,setCullFace:ie,setLineWidth:R,setPolygonOffset:v,setScissorTest:b,activeTexture:j,bindTexture:ne,unbindTexture:fe,compressedTexImage2D:be,compressedTexImage3D:de,texImage2D:Te,texImage3D:Be,updateUBOMapping:Xe,uniformBlockBinding:qe,texStorage2D:Ce,texStorage3D:Se,texSubImage2D:Me,texSubImage3D:Ae,compressedTexSubImage2D:me,compressedTexSubImage3D:xe,scissor:ze,viewport:We,reset:we}}function nv(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return p?new OffscreenCanvas(R,v):fo("canvas")}function _(R,v,b){let j=1;const ne=ie(R);if((ne.width>b||ne.height>b)&&(j=b/Math.max(ne.width,ne.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const fe=Math.floor(j*ne.width),be=Math.floor(j*ne.height);h===void 0&&(h=g(fe,be));const de=v?g(fe,be):h;return de.width=fe,de.height=be,de.getContext("2d").drawImage(R,0,0,fe,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+fe+"x"+be+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function d(R){return R.generateMipmaps&&R.minFilter!==tn&&R.minFilter!==hn}function m(R){r.generateMipmap(R)}function E(R,v,b,j,ne=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe=v;if(v===r.RED&&(b===r.FLOAT&&(fe=r.R32F),b===r.HALF_FLOAT&&(fe=r.R16F),b===r.UNSIGNED_BYTE&&(fe=r.R8)),v===r.RED_INTEGER&&(b===r.UNSIGNED_BYTE&&(fe=r.R8UI),b===r.UNSIGNED_SHORT&&(fe=r.R16UI),b===r.UNSIGNED_INT&&(fe=r.R32UI),b===r.BYTE&&(fe=r.R8I),b===r.SHORT&&(fe=r.R16I),b===r.INT&&(fe=r.R32I)),v===r.RG&&(b===r.FLOAT&&(fe=r.RG32F),b===r.HALF_FLOAT&&(fe=r.RG16F),b===r.UNSIGNED_BYTE&&(fe=r.RG8)),v===r.RG_INTEGER&&(b===r.UNSIGNED_BYTE&&(fe=r.RG8UI),b===r.UNSIGNED_SHORT&&(fe=r.RG16UI),b===r.UNSIGNED_INT&&(fe=r.RG32UI),b===r.BYTE&&(fe=r.RG8I),b===r.SHORT&&(fe=r.RG16I),b===r.INT&&(fe=r.RG32I)),v===r.RGB&&b===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),v===r.RGBA){const be=ne?lo:je.getTransfer(j);b===r.FLOAT&&(fe=r.RGBA32F),b===r.HALF_FLOAT&&(fe=r.RGBA16F),b===r.UNSIGNED_BYTE&&(fe=be===Ke?r.SRGB8_ALPHA8:r.RGBA8),b===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),b===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function x(R,v){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==hn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function T(R){const v=R.target;v.removeEventListener("dispose",T),C(v),v.isVideoTexture&&u.delete(v)}function I(R){const v=R.target;v.removeEventListener("dispose",I),F(v)}function C(R){const v=n.get(R);if(v.__webglInit===void 0)return;const b=R.source,j=f.get(b);if(j){const ne=j[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(R),Object.keys(j).length===0&&f.delete(b)}n.remove(R)}function w(R){const v=n.get(R);r.deleteTexture(v.__webglTexture);const b=R.source,j=f.get(b);delete j[v.__cacheKey],o.memory.textures--}function F(R){const v=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let ne=0;ne<v.__webglFramebuffer[j].length;ne++)r.deleteFramebuffer(v.__webglFramebuffer[j][ne]);else r.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)r.deleteFramebuffer(v.__webglFramebuffer[j]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const b=R.textures;for(let j=0,ne=b.length;j<ne;j++){const fe=n.get(b[j]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(b[j])}n.remove(R)}let M=0;function S(){M=0}function V(){const R=M;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),M+=1,R}function H(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function z(R,v){const b=n.get(R);if(R.isVideoTexture&&W(R),R.isRenderTargetTexture===!1&&R.version>0&&b.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(b,R,v);return}}t.bindTexture(r.TEXTURE_2D,b.__webglTexture,r.TEXTURE0+v)}function $(R,v){const b=n.get(R);if(R.version>0&&b.__version!==R.version){ce(b,R,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,b.__webglTexture,r.TEXTURE0+v)}function k(R,v){const b=n.get(R);if(R.version>0&&b.__version!==R.version){ce(b,R,v);return}t.bindTexture(r.TEXTURE_3D,b.__webglTexture,r.TEXTURE0+v)}function O(R,v){const b=n.get(R);if(R.version>0&&b.__version!==R.version){_e(b,R,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+v)}const G={[La]:r.REPEAT,[Ci]:r.CLAMP_TO_EDGE,[Na]:r.MIRRORED_REPEAT},U={[tn]:r.NEAREST,[yd]:r.NEAREST_MIPMAP_NEAREST,[ws]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[Fo]:r.LINEAR_MIPMAP_NEAREST,[Pi]:r.LINEAR_MIPMAP_LINEAR},Z={[Dd]:r.NEVER,[kd]:r.ALWAYS,[Ud]:r.LESS,[Ju]:r.LEQUAL,[Fd]:r.EQUAL,[zd]:r.GEQUAL,[Od]:r.GREATER,[Bd]:r.NOTEQUAL};function J(R,v){if(v.type===$n&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===hn||v.magFilter===Fo||v.magFilter===ws||v.magFilter===Pi||v.minFilter===hn||v.minFilter===Fo||v.minFilter===ws||v.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,G[v.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,G[v.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,G[v.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,U[v.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,U[v.minFilter]),v.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Z[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===tn||v.minFilter!==ws&&v.minFilter!==Pi||v.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const b=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function re(R,v){let b=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",T));const j=v.source;let ne=f.get(j);ne===void 0&&(ne={},f.set(j,ne));const fe=H(v);if(fe!==R.__cacheKey){ne[fe]===void 0&&(ne[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,b=!0),ne[fe].usedTimes++;const be=ne[R.__cacheKey];be!==void 0&&(ne[R.__cacheKey].usedTimes--,be.usedTimes===0&&w(v)),R.__cacheKey=fe,R.__webglTexture=ne[fe].texture}return b}function ce(R,v,b){let j=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=r.TEXTURE_3D);const ne=re(R,v),fe=v.source;t.bindTexture(j,R.__webglTexture,r.TEXTURE0+b);const be=n.get(fe);if(fe.version!==be.__version||ne===!0){t.activeTexture(r.TEXTURE0+b);const de=je.getPrimaries(je.workingColorSpace),Me=v.colorSpace===Kn?null:je.getPrimaries(v.colorSpace),Ae=v.colorSpace===Kn||de===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let me=_(v.image,!1,i.maxTextureSize);me=X(v,me);const xe=s.convert(v.format,v.colorSpace),Ce=s.convert(v.type);let Se=E(v.internalFormat,xe,Ce,v.colorSpace,v.isVideoTexture);J(j,v);let Te;const Be=v.mipmaps,ze=v.isVideoTexture!==!0&&Se!==ju,We=be.__version===void 0||ne===!0,Xe=fe.dataReady,qe=x(v,me);if(v.isDepthTexture)Se=r.DEPTH_COMPONENT16,v.type===$n?Se=r.DEPTH_COMPONENT32F:v.type===Fr?Se=r.DEPTH_COMPONENT24:v.type===Ms&&(Se=r.DEPTH24_STENCIL8),We&&(ze?t.texStorage2D(r.TEXTURE_2D,1,Se,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,Se,me.width,me.height,0,xe,Ce,null));else if(v.isDataTexture)if(Be.length>0){ze&&We&&t.texStorage2D(r.TEXTURE_2D,qe,Se,Be[0].width,Be[0].height);for(let we=0,y=Be.length;we<y;we++)Te=Be[we],ze?Xe&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,Te.width,Te.height,xe,Ce,Te.data):t.texImage2D(r.TEXTURE_2D,we,Se,Te.width,Te.height,0,xe,Ce,Te.data);v.generateMipmaps=!1}else ze?(We&&t.texStorage2D(r.TEXTURE_2D,qe,Se,me.width,me.height),Xe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me.width,me.height,xe,Ce,me.data)):t.texImage2D(r.TEXTURE_2D,0,Se,me.width,me.height,0,xe,Ce,me.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&We&&t.texStorage3D(r.TEXTURE_2D_ARRAY,qe,Se,Be[0].width,Be[0].height,me.depth);for(let we=0,y=Be.length;we<y;we++)Te=Be[we],v.format!==yn?xe!==null?ze?Xe&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,Te.width,Te.height,me.depth,xe,Te.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,we,Se,Te.width,Te.height,me.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?Xe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,Te.width,Te.height,me.depth,xe,Ce,Te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,we,Se,Te.width,Te.height,me.depth,0,xe,Ce,Te.data)}else{ze&&We&&t.texStorage2D(r.TEXTURE_2D,qe,Se,Be[0].width,Be[0].height);for(let we=0,y=Be.length;we<y;we++)Te=Be[we],v.format!==yn?xe!==null?ze?Xe&&t.compressedTexSubImage2D(r.TEXTURE_2D,we,0,0,Te.width,Te.height,xe,Te.data):t.compressedTexImage2D(r.TEXTURE_2D,we,Se,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?Xe&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,Te.width,Te.height,xe,Ce,Te.data):t.texImage2D(r.TEXTURE_2D,we,Se,Te.width,Te.height,0,xe,Ce,Te.data)}else if(v.isDataArrayTexture)ze?(We&&t.texStorage3D(r.TEXTURE_2D_ARRAY,qe,Se,me.width,me.height,me.depth),Xe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,xe,Ce,me.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Se,me.width,me.height,me.depth,0,xe,Ce,me.data);else if(v.isData3DTexture)ze?(We&&t.texStorage3D(r.TEXTURE_3D,qe,Se,me.width,me.height,me.depth),Xe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,xe,Ce,me.data)):t.texImage3D(r.TEXTURE_3D,0,Se,me.width,me.height,me.depth,0,xe,Ce,me.data);else if(v.isFramebufferTexture){if(We)if(ze)t.texStorage2D(r.TEXTURE_2D,qe,Se,me.width,me.height);else{let we=me.width,y=me.height;for(let se=0;se<qe;se++)t.texImage2D(r.TEXTURE_2D,se,Se,we,y,0,xe,Ce,null),we>>=1,y>>=1}}else if(Be.length>0){if(ze&&We){const we=ie(Be[0]);t.texStorage2D(r.TEXTURE_2D,qe,Se,we.width,we.height)}for(let we=0,y=Be.length;we<y;we++)Te=Be[we],ze?Xe&&t.texSubImage2D(r.TEXTURE_2D,we,0,0,xe,Ce,Te):t.texImage2D(r.TEXTURE_2D,we,Se,xe,Ce,Te);v.generateMipmaps=!1}else if(ze){if(We){const we=ie(me);t.texStorage2D(r.TEXTURE_2D,qe,Se,we.width,we.height)}Xe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,Ce,me)}else t.texImage2D(r.TEXTURE_2D,0,Se,xe,Ce,me);d(v)&&m(j),be.__version=fe.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function _e(R,v,b){if(v.image.length!==6)return;const j=re(R,v),ne=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+b);const fe=n.get(ne);if(ne.version!==fe.__version||j===!0){t.activeTexture(r.TEXTURE0+b);const be=je.getPrimaries(je.workingColorSpace),de=v.colorSpace===Kn?null:je.getPrimaries(v.colorSpace),Me=v.colorSpace===Kn||be===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,me=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let y=0;y<6;y++)!Ae&&!me?xe[y]=_(v.image[y],!0,i.maxCubemapSize):xe[y]=me?v.image[y].image:v.image[y],xe[y]=X(v,xe[y]);const Ce=xe[0],Se=s.convert(v.format,v.colorSpace),Te=s.convert(v.type),Be=E(v.internalFormat,Se,Te,v.colorSpace),ze=v.isVideoTexture!==!0,We=fe.__version===void 0||j===!0,Xe=ne.dataReady;let qe=x(v,Ce);J(r.TEXTURE_CUBE_MAP,v);let we;if(Ae){ze&&We&&t.texStorage2D(r.TEXTURE_CUBE_MAP,qe,Be,Ce.width,Ce.height);for(let y=0;y<6;y++){we=xe[y].mipmaps;for(let se=0;se<we.length;se++){const pe=we[se];v.format!==yn?Se!==null?ze?Xe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+y,se,0,0,pe.width,pe.height,Se,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+y,se,Be,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?Xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+y,se,0,0,pe.width,pe.height,Se,Te,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+y,se,Be,pe.width,pe.height,0,Se,Te,pe.data)}}}else{if(we=v.mipmaps,ze&&We){we.length>0&&qe++;const y=ie(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,qe,Be,y.width,y.height)}for(let y=0;y<6;y++)if(me){ze?Xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,0,0,xe[y].width,xe[y].height,Se,Te,xe[y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,Be,xe[y].width,xe[y].height,0,Se,Te,xe[y].data);for(let se=0;se<we.length;se++){const ge=we[se].image[y].image;ze?Xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+y,se+1,0,0,ge.width,ge.height,Se,Te,ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+y,se+1,Be,ge.width,ge.height,0,Se,Te,ge.data)}}else{ze?Xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,0,0,Se,Te,xe[y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,Be,Se,Te,xe[y]);for(let se=0;se<we.length;se++){const pe=we[se];ze?Xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+y,se+1,0,0,Se,Te,pe.image[y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+y,se+1,Be,Se,Te,pe.image[y])}}}d(v)&&m(r.TEXTURE_CUBE_MAP),fe.__version=ne.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function L(R,v,b,j,ne,fe){const be=s.convert(b.format,b.colorSpace),de=s.convert(b.type),Me=E(b.internalFormat,be,de,b.colorSpace);if(!n.get(v).__hasExternalTextures){const me=Math.max(1,v.width>>fe),xe=Math.max(1,v.height>>fe);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,fe,Me,me,xe,v.depth,0,be,de,null):t.texImage2D(ne,fe,Me,me,xe,0,be,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Y(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,ne,n.get(b).__webglTexture,0,K(v)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,ne,n.get(b).__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function N(R,v,b){if(r.bindRenderbuffer(r.RENDERBUFFER,R),v.depthBuffer&&!v.stencilBuffer){let j=r.DEPTH_COMPONENT24;if(b||Y(v)){const ne=v.depthTexture;ne&&ne.isDepthTexture&&(ne.type===$n?j=r.DEPTH_COMPONENT32F:ne.type===Fr&&(j=r.DEPTH_COMPONENT24));const fe=K(v);Y(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,j,v.width,v.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,j,v.width,v.height)}else r.renderbufferStorage(r.RENDERBUFFER,j,v.width,v.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(v.depthBuffer&&v.stencilBuffer){const j=K(v);b&&Y(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,v.width,v.height):Y(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const j=v.textures;for(let ne=0;ne<j.length;ne++){const fe=j[ne],be=s.convert(fe.format,fe.colorSpace),de=s.convert(fe.type),Me=E(fe.internalFormat,be,de,fe.colorSpace),Ae=K(v);b&&Y(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,Me,v.width,v.height):Y(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,Me,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Me,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function P(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);const j=n.get(v.depthTexture).__webglTexture,ne=K(v);if(v.depthTexture.format===Ar)Y(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(v.depthTexture.format===ls)Y(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function A(R){const v=n.get(R),b=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");P(v.__webglFramebuffer,R)}else if(b){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]=r.createRenderbuffer(),N(v.__webglDepthbuffer[j],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),N(v.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(R,v,b){const j=n.get(R);v!==void 0&&L(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),b!==void 0&&A(R)}function le(R){const v=R.texture,b=n.get(R),j=n.get(v);R.addEventListener("dispose",I);const ne=R.textures,fe=R.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=v.version,o.memory.textures++),fe){b.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){b.__webglFramebuffer[de]=[];for(let Me=0;Me<v.mipmaps.length;Me++)b.__webglFramebuffer[de][Me]=r.createFramebuffer()}else b.__webglFramebuffer[de]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){b.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)b.__webglFramebuffer[de]=r.createFramebuffer()}else b.__webglFramebuffer=r.createFramebuffer();if(be)for(let de=0,Me=ne.length;de<Me;de++){const Ae=n.get(ne[de]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Y(R)===!1){b.__webglMultisampledFramebuffer=r.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const Me=ne[de];b.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,b.__webglColorRenderbuffer[de]);const Ae=s.convert(Me.format,Me.colorSpace),me=s.convert(Me.type),xe=E(Me.internalFormat,Ae,me,Me.colorSpace,R.isXRRenderTarget===!0),Ce=K(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,xe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,b.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(b.__webglDepthRenderbuffer=r.createRenderbuffer(),N(b.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),J(r.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)L(b.__webglFramebuffer[de][Me],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me);else L(b.__webglFramebuffer[de],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);d(v)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let de=0,Me=ne.length;de<Me;de++){const Ae=ne[de],me=n.get(Ae);t.bindTexture(r.TEXTURE_2D,me.__webglTexture),J(r.TEXTURE_2D,Ae),L(b.__webglFramebuffer,R,Ae,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),d(Ae)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,j.__webglTexture),J(de,v),v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)L(b.__webglFramebuffer[Me],R,v,r.COLOR_ATTACHMENT0,de,Me);else L(b.__webglFramebuffer,R,v,r.COLOR_ATTACHMENT0,de,0);d(v)&&m(de),t.unbindTexture()}R.depthBuffer&&A(R)}function ee(R){const v=R.textures;for(let b=0,j=v.length;b<j;b++){const ne=v[b];if(d(ne)){const fe=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,be=n.get(ne).__webglTexture;t.bindTexture(fe,be),m(fe),t.unbindTexture()}}}function B(R){if(R.samples>0&&Y(R)===!1){const v=R.textures,b=R.width,j=R.height;let ne=r.COLOR_BUFFER_BIT;const fe=[],be=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(R),Me=v.length>1;if(Me)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){fe.push(r.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&fe.push(be);const me=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(me===!1&&(R.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&de.__isTransmissionRenderTarget!==!0&&(ne|=r.STENCIL_BUFFER_BIT)),Me&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]),me===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[be]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[be])),Me){const xe=n.get(v[Ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xe,0)}r.blitFramebuffer(0,0,b,j,0,0,b,j,ne,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Me)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]);const me=n.get(v[Ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function K(R){return Math.min(i.maxSamples,R.samples)}function Y(R){const v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function W(R){const v=o.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function X(R,v){const b=R.colorSpace,j=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||b!==fi&&b!==Kn&&(je.getTransfer(b)===Ke?(j!==yn||ne!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",b)),v}function ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=S,this.setTexture2D=z,this.setTexture2DArray=$,this.setTexture3D=k,this.setTextureCube=O,this.rebindTextures=Q,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=L,this.useMultisampledRTT=Y}function iv(r,e){function t(n,i=Kn){let s;const o=je.getTransfer(i);if(n===ri)return r.UNSIGNED_BYTE;if(n===Vu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ed)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return r.BYTE;if(n===Md)return r.SHORT;if(n===Hu)return r.UNSIGNED_SHORT;if(n===Gu)return r.INT;if(n===Fr)return r.UNSIGNED_INT;if(n===$n)return r.FLOAT;if(n===ao)return r.HALF_FLOAT;if(n===Td)return r.ALPHA;if(n===bd)return r.RGB;if(n===yn)return r.RGBA;if(n===Ad)return r.LUMINANCE;if(n===wd)return r.LUMINANCE_ALPHA;if(n===Ar)return r.DEPTH_COMPONENT;if(n===ls)return r.DEPTH_STENCIL;if(n===Rd)return r.RED;if(n===Xu)return r.RED_INTEGER;if(n===Cd)return r.RG;if(n===qu)return r.RG_INTEGER;if(n===Yu)return r.RGBA_INTEGER;if(n===Oo||n===Bo||n===zo||n===ko)if(o===Ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gl||n===Vl||n===Wl||n===Xl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ju)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ql||n===Yl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ql)return o===Ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jl||n===Jl||n===Zl||n===Kl||n===$l||n===Ql||n===ec||n===tc||n===nc||n===ic||n===rc||n===sc||n===oc||n===ac)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===jl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ec)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rc)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===lc||n===cc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ho)return o===Ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pd||n===uc||n===hc||n===fc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ho)return s.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class rv extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let _r=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const sv={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const d=t.getJointPose(_,n),m=this._getHandJoint(c,_);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _r;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,av=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Dt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new li({vertexShader:ov,fragmentShader:av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qt(new Eo(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class cv extends Gi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new lv,d=t.getContextAttributes();let m=null,E=null;const x=[],T=[],I=new he;let C=null;const w=new en;w.layers.enable(1),w.viewport=new yt;const F=new en;F.layers.enable(2),F.viewport=new yt;const M=[w,F],S=new rv;S.layers.enable(1),S.layers.enable(2);let V=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let N=x[L];return N===void 0&&(N=new fa,x[L]=N),N.getTargetRaySpace()},this.getControllerGrip=function(L){let N=x[L];return N===void 0&&(N=new fa,x[L]=N),N.getGripSpace()},this.getHand=function(L){let N=x[L];return N===void 0&&(N=new fa,x[L]=N),N.getHandSpace()};function z(L){const N=T.indexOf(L.inputSource);if(N===-1)return;const P=x[N];P!==void 0&&(P.update(L.inputSource,L.frame,c||o),P.dispatchEvent({type:L.type,data:L.inputSource}))}function $(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",k);for(let L=0;L<x.length;L++){const N=T[L];N!==null&&(T[L]=null,x[L].disconnect(N))}V=null,H=null,_.reset(),e.setRenderTarget(m),p=null,f=null,h=null,i=null,E=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",$),i.addEventListener("inputsourceschange",k),d.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){const N={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,N),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Oi(p.framebufferWidth,p.framebufferHeight,{format:yn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let N=null,P=null,A=null;d.depth&&(A=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=d.stencil?ls:Ar,P=d.stencil?Ms:Fr);const Q={colorFormat:t.RGBA8,depthFormat:A,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Q),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Oi(f.textureWidth,f.textureHeight,{format:yn,type:ri,depthTexture:new uh(f.textureWidth,f.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0});const le=e.properties.get(E);le.__ignoreDepthValues=f.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function k(L){for(let N=0;N<L.removed.length;N++){const P=L.removed[N],A=T.indexOf(P);A>=0&&(T[A]=null,x[A].disconnect(P))}for(let N=0;N<L.added.length;N++){const P=L.added[N];let A=T.indexOf(P);if(A===-1){for(let le=0;le<x.length;le++)if(le>=T.length){T.push(P),A=le;break}else if(T[le]===null){T[le]=P,A=le;break}if(A===-1)break}const Q=x[A];Q&&Q.connect(P)}}const O=new q,G=new q;function U(L,N,P){O.setFromMatrixPosition(N.matrixWorld),G.setFromMatrixPosition(P.matrixWorld);const A=O.distanceTo(G),Q=N.projectionMatrix.elements,le=P.projectionMatrix.elements,ee=Q[14]/(Q[10]-1),B=Q[14]/(Q[10]+1),K=(Q[9]+1)/Q[5],Y=(Q[9]-1)/Q[5],W=(Q[8]-1)/Q[0],X=(le[8]+1)/le[0],ie=ee*W,R=ee*X,v=A/(-W+X),b=v*-W;N.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(b),L.translateZ(v),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const j=ee+v,ne=B+v,fe=ie-b,be=R+(A-b),de=K*B/ne*j,Me=Y*B/ne*j;L.projectionMatrix.makePerspective(fe,be,de,Me,j,ne),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function Z(L,N){N===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(N.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;_.texture!==null&&(L.near=_.depthNear,L.far=_.depthFar),S.near=F.near=w.near=L.near,S.far=F.far=w.far=L.far,(V!==S.near||H!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),V=S.near,H=S.far,w.near=V,w.far=H,F.near=V,F.far=H,w.updateProjectionMatrix(),F.updateProjectionMatrix(),L.updateProjectionMatrix());const N=L.parent,P=S.cameras;Z(S,N);for(let A=0;A<P.length;A++)Z(P[A],N);P.length===2?U(S,w,F):S.projectionMatrix.copy(w.projectionMatrix),J(L,S,N)};function J(L,N,P){P===null?L.matrix.copy(N.matrixWorld):(L.matrix.copy(P.matrixWorld),L.matrix.invert(),L.matrix.multiply(N.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(N.projectionMatrix),L.projectionMatrixInverse.copy(N.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=cs*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=L)},this.hasDepthSensing=function(){return _.texture!==null};let re=null;function ce(L,N){if(u=N.getViewerPose(c||o),g=N,u!==null){const P=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let A=!1;P.length!==S.cameras.length&&(S.cameras.length=0,A=!0);for(let le=0;le<P.length;le++){const ee=P[le];let B=null;if(p!==null)B=p.getViewport(ee);else{const Y=h.getViewSubImage(f,ee);B=Y.viewport,le===0&&(e.setRenderTargetTextures(E,Y.colorTexture,f.ignoreDepthValues?void 0:Y.depthStencilTexture),e.setRenderTarget(E))}let K=M[le];K===void 0&&(K=new en,K.layers.enable(le),K.viewport=new yt,M[le]=K),K.matrix.fromArray(ee.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ee.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(B.x,B.y,B.width,B.height),le===0&&(S.matrix.copy(K.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),A===!0&&S.cameras.push(K)}const Q=i.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const le=h.getDepthInformation(P[0]);le&&le.isValid&&le.texture&&_.init(e,le,i.renderState)}}for(let P=0;P<x.length;P++){const A=T[P],Q=x[P];A!==null&&Q!==void 0&&Q.update(A,N,c||o)}_.render(e,S),re&&re(L,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),g=null}const _e=new lh;_e.setAnimationLoop(ce),this.setAnimationLoop=function(L){re=L},this.dispose=function(){}}}const Si=new pn,uv=new tt;function hv(r,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,sh(r)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function i(d,m,E,x,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(d,m):m.isMeshToonMaterial?(s(d,m),h(d,m)):m.isMeshPhongMaterial?(s(d,m),u(d,m)):m.isMeshStandardMaterial?(s(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,T)):m.isMeshMatcapMaterial?(s(d,m),g(d,m)):m.isMeshDepthMaterial?s(d,m):m.isMeshDistanceMaterial?(s(d,m),_(d,m)):m.isMeshNormalMaterial?s(d,m):m.isLineBasicMaterial?(o(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?l(d,m,E,x):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===It&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===It&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const E=e.get(m),x=E.envMap,T=E.envMapRotation;if(x&&(d.envMap.value=x,Si.copy(T),Si.x*=-1,Si.y*=-1,Si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),d.envMapRotation.value.setFromMatrix4(uv.makeRotationFromEuler(Si)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const I=r._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*I,t(m.lightMap,d.lightMapTransform)}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function o(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,E,x){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*E,d.scale.value=x*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function h(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,E){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===It&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function _(d,m){const E=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fv(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const T=x.program;n.uniformBlockBinding(E,T)}function c(E,x){let T=i[E.id];T===void 0&&(g(E),T=u(E),i[E.id]=T,E.addEventListener("dispose",d));const I=x.program;n.updateUBOMapping(E,I);const C=e.render.frame;s[E.id]!==C&&(f(E),s[E.id]=C)}function u(E){const x=h();E.__bindingPointIndex=x;const T=r.createBuffer(),I=E.__size,C=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,I,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,T),T}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=i[E.id],T=E.uniforms,I=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let C=0,w=T.length;C<w;C++){const F=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,S=F.length;M<S;M++){const V=F[M];if(p(V,C,M,I)===!0){const H=V.__offset,z=Array.isArray(V.value)?V.value:[V.value];let $=0;for(let k=0;k<z.length;k++){const O=z[k],G=_(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,H+$,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,$),$+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(E,x,T,I){const C=E.value,w=x+"_"+T;if(I[w]===void 0)return typeof C=="number"||typeof C=="boolean"?I[w]=C:I[w]=C.clone(),!0;{const F=I[w];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return I[w]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(E){const x=E.uniforms;let T=0;const I=16;for(let w=0,F=x.length;w<F;w++){const M=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,V=M.length;S<V;S++){const H=M[S],z=Array.isArray(H.value)?H.value:[H.value];for(let $=0,k=z.length;$<k;$++){const O=z[$],G=_(O),U=T%I;U!==0&&I-U<G.boundary&&(T+=I-U),H.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=G.storage}}}const C=T%I;return C>0&&(T+=I-C),E.__size=T,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function d(E){const x=E.target;x.removeEventListener("dispose",d);const T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const E in i)r.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class dv{constructor(e={}){const{canvas:t=rp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const m=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;const x=this;let T=!1,I=0,C=0,w=null,F=-1,M=null;const S=new yt,V=new yt;let H=null;const z=new He(0);let $=0,k=t.width,O=t.height,G=1,U=null,Z=null;const J=new yt(0,0,k,O),re=new yt(0,0,k,O);let ce=!1;const _e=new ol;let L=!1,N=!1;const P=new tt,A=new he,Q=new q,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return w===null?G:1}let B=n;function K(D,te){const ae=t.getContext(D,te);return ae!==null?ae:null}try{const D={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${el}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),B===null){const te="webgl2";if(B=K(te,D),B===null)throw K(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Y,W,X,ie,R,v,b,j,ne,fe,be,de,Me,Ae,me,xe,Ce,Se,Te,Be,ze,We,Xe,qe;function we(){Y=new Sg(B),Y.init(),W=new mg(B,Y,e),We=new iv(B,Y),X=new tv(B),ie=new Tg(B),R=new H0,v=new nv(B,Y,X,R,W,We,ie),b=new gg(x),j=new yg(x),ne=new Pp(B),Xe=new dg(B,ne),fe=new Mg(B,ne,ie,Xe),be=new Ag(B,fe,ne,ie),Te=new bg(B,W,v),xe=new _g(R),de=new k0(x,b,j,Y,W,Xe,xe),Me=new hv(x,R),Ae=new V0,me=new J0(Y),Se=new fg(x,b,j,X,be,f,l),Ce=new ev(x,be,W),qe=new fv(B,ie,W,X),Be=new pg(B,Y,ie),ze=new Eg(B,Y,ie),ie.programs=de.programs,x.capabilities=W,x.extensions=Y,x.properties=R,x.renderLists=Ae,x.shadowMap=Ce,x.state=X,x.info=ie}we();const y=new cv(x,B);this.xr=y,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const D=Y.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Y.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(D){D!==void 0&&(G=D,this.setSize(k,O,!1))},this.getSize=function(D){return D.set(k,O)},this.setSize=function(D,te,ae=!0){if(y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=D,O=te,t.width=Math.floor(D*G),t.height=Math.floor(te*G),ae===!0&&(t.style.width=D+"px",t.style.height=te+"px"),this.setViewport(0,0,D,te)},this.getDrawingBufferSize=function(D){return D.set(k*G,O*G).floor()},this.setDrawingBufferSize=function(D,te,ae){k=D,O=te,G=ae,t.width=Math.floor(D*ae),t.height=Math.floor(te*ae),this.setViewport(0,0,D,te)},this.getCurrentViewport=function(D){return D.copy(S)},this.getViewport=function(D){return D.copy(J)},this.setViewport=function(D,te,ae,ue){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,te,ae,ue),X.viewport(S.copy(J).multiplyScalar(G).round())},this.getScissor=function(D){return D.copy(re)},this.setScissor=function(D,te,ae,ue){D.isVector4?re.set(D.x,D.y,D.z,D.w):re.set(D,te,ae,ue),X.scissor(V.copy(re).multiplyScalar(G).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(D){X.setScissorTest(ce=D)},this.setOpaqueSort=function(D){U=D},this.setTransparentSort=function(D){Z=D},this.getClearColor=function(D){return D.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(D=!0,te=!0,ae=!0){let ue=0;if(D){let oe=!1;if(w!==null){const ye=w.texture.format;oe=ye===Yu||ye===qu||ye===Xu}if(oe){const ye=w.texture.type,Re=ye===ri||ye===Fr||ye===Hu||ye===Ms||ye===Vu||ye===Wu,Pe=Se.getClearColor(),Ne=Se.getClearAlpha(),De=Pe.r,Ie=Pe.g,Ue=Pe.b;Re?(p[0]=De,p[1]=Ie,p[2]=Ue,p[3]=Ne,B.clearBufferuiv(B.COLOR,0,p)):(g[0]=De,g[1]=Ie,g[2]=Ue,g[3]=Ne,B.clearBufferiv(B.COLOR,0,g))}else ue|=B.COLOR_BUFFER_BIT}te&&(ue|=B.DEPTH_BUFFER_BIT),ae&&(ue|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Ae.dispose(),me.dispose(),R.dispose(),b.dispose(),j.dispose(),be.dispose(),Xe.dispose(),qe.dispose(),de.dispose(),y.dispose(),y.removeEventListener("sessionstart",ct),y.removeEventListener("sessionend",ut),kt.stop()};function se(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const D=ie.autoReset,te=Ce.enabled,ae=Ce.autoUpdate,ue=Ce.needsUpdate,oe=Ce.type;we(),ie.autoReset=D,Ce.enabled=te,Ce.autoUpdate=ae,Ce.needsUpdate=ue,Ce.type=oe}function ge(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ee(D){const te=D.target;te.removeEventListener("dispose",Ee),Ge(te)}function Ge(D){ke(D),R.remove(D)}function ke(D){const te=R.get(D).programs;te!==void 0&&(te.forEach(function(ae){de.releaseProgram(ae)}),D.isShaderMaterial&&de.releaseShaderCache(D))}this.renderBufferDirect=function(D,te,ae,ue,oe,ye){te===null&&(te=le);const Re=oe.isMesh&&oe.matrixWorld.determinant()<0,Pe=Nf(D,te,ae,ue,oe);X.setMaterial(ue,Re);let Ne=ae.index,De=1;if(ue.wireframe===!0){if(Ne=fe.getWireframeAttribute(ae),Ne===void 0)return;De=2}const Ie=ae.drawRange,Ue=ae.attributes.position;let at=Ie.start*De,Ht=(Ie.start+Ie.count)*De;ye!==null&&(at=Math.max(at,ye.start*De),Ht=Math.min(Ht,(ye.start+ye.count)*De)),Ne!==null?(at=Math.max(at,0),Ht=Math.min(Ht,Ne.count)):Ue!=null&&(at=Math.max(at,0),Ht=Math.min(Ht,Ue.count));const _t=Ht-at;if(_t<0||_t===1/0)return;Xe.setup(oe,ue,Pe,ae,Ne);let wn,nt=Be;if(Ne!==null&&(wn=ne.get(Ne),nt=ze,nt.setIndex(wn)),oe.isMesh)ue.wireframe===!0?(X.setLineWidth(ue.wireframeLinewidth*ee()),nt.setMode(B.LINES)):nt.setMode(B.TRIANGLES);else if(oe.isLine){let Fe=ue.linewidth;Fe===void 0&&(Fe=1),X.setLineWidth(Fe*ee()),oe.isLineSegments?nt.setMode(B.LINES):oe.isLineLoop?nt.setMode(B.LINE_LOOP):nt.setMode(B.LINE_STRIP)}else oe.isPoints?nt.setMode(B.POINTS):oe.isSprite&&nt.setMode(B.TRIANGLES);if(oe.isBatchedMesh)nt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else if(oe.isInstancedMesh)nt.renderInstances(at,_t,oe.count);else if(ae.isInstancedBufferGeometry){const Fe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,No=Math.min(ae.instanceCount,Fe);nt.renderInstances(at,_t,No)}else nt.render(at,_t)};function $e(D,te,ae){D.transparent===!0&&D.side===un&&D.forceSinglePass===!1?(D.side=It,D.needsUpdate=!0,As(D,te,ae),D.side=ai,D.needsUpdate=!0,As(D,te,ae),D.side=un):As(D,te,ae)}this.compile=function(D,te,ae=null){ae===null&&(ae=D),d=me.get(ae),d.init(),E.push(d),ae.traverseVisible(function(oe){oe.isLight&&oe.layers.test(te.layers)&&(d.pushLight(oe),oe.castShadow&&d.pushShadow(oe))}),D!==ae&&D.traverseVisible(function(oe){oe.isLight&&oe.layers.test(te.layers)&&(d.pushLight(oe),oe.castShadow&&d.pushShadow(oe))}),d.setupLights(x._useLegacyLights);const ue=new Set;return D.traverse(function(oe){const ye=oe.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const Pe=ye[Re];$e(Pe,ae,oe),ue.add(Pe)}else $e(ye,ae,oe),ue.add(ye)}),E.pop(),d=null,ue},this.compileAsync=function(D,te,ae=null){const ue=this.compile(D,te,ae);return new Promise(oe=>{function ye(){if(ue.forEach(function(Re){R.get(Re).currentProgram.isReady()&&ue.delete(Re)}),ue.size===0){oe(D);return}setTimeout(ye,10)}Y.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let mt=null;function Ye(D){mt&&mt(D)}function ct(){kt.stop()}function ut(){kt.start()}const kt=new lh;kt.setAnimationLoop(Ye),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(D){mt=D,y.setAnimationLoop(D),D===null?kt.stop():kt.start()},y.addEventListener("sessionstart",ct),y.addEventListener("sessionend",ut),this.render=function(D,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),y.enabled===!0&&y.isPresenting===!0&&(y.cameraAutoUpdate===!0&&y.updateCamera(te),te=y.getCamera()),D.isScene===!0&&D.onBeforeRender(x,D,te,w),d=me.get(D,E.length),d.init(),E.push(d),P.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),_e.setFromProjectionMatrix(P),N=this.localClippingEnabled,L=xe.init(this.clippingPlanes,N),_=Ae.get(D,m.length),_.init(),m.push(_),Zt(D,te,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(U,Z),this.info.render.frame++,L===!0&&xe.beginShadows();const ae=d.state.shadowsArray;if(Ce.render(ae,D,te),L===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(y.enabled===!1||y.isPresenting===!1||y.hasDepthSensing()===!1)&&Se.render(_,D),d.setupLights(x._useLegacyLights),te.isArrayCamera){const ue=te.cameras;for(let oe=0,ye=ue.length;oe<ye;oe++){const Re=ue[oe];Gn(_,D,Re,Re.viewport)}}else Gn(_,D,te);w!==null&&(v.updateMultisampleRenderTarget(w),v.updateRenderTargetMipmap(w)),D.isScene===!0&&D.onAfterRender(x,D,te),Xe.resetDefaultState(),F=-1,M=null,E.pop(),E.length>0?d=E[E.length-1]:d=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Zt(D,te,ae,ue){if(D.visible===!1)return;if(D.layers.test(te.layers)){if(D.isGroup)ae=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(te);else if(D.isLight)d.pushLight(D),D.castShadow&&d.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||_e.intersectsSprite(D)){ue&&Q.setFromMatrixPosition(D.matrixWorld).applyMatrix4(P);const Re=be.update(D),Pe=D.material;Pe.visible&&_.push(D,Re,Pe,ae,Q.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||_e.intersectsObject(D))){const Re=be.update(D),Pe=D.material;if(ue&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Q.copy(D.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Q.copy(Re.boundingSphere.center)),Q.applyMatrix4(D.matrixWorld).applyMatrix4(P)),Array.isArray(Pe)){const Ne=Re.groups;for(let De=0,Ie=Ne.length;De<Ie;De++){const Ue=Ne[De],at=Pe[Ue.materialIndex];at&&at.visible&&_.push(D,Re,at,ae,Q.z,Ue)}}else Pe.visible&&_.push(D,Re,Pe,ae,Q.z,null)}}const ye=D.children;for(let Re=0,Pe=ye.length;Re<Pe;Re++)Zt(ye[Re],te,ae,ue)}function Gn(D,te,ae,ue){const oe=D.opaque,ye=D.transmissive,Re=D.transparent;d.setupLightsView(ae),L===!0&&xe.setGlobalState(x.clippingPlanes,ae),ye.length>0&&Xi(oe,ye,te,ae),ue&&X.viewport(S.copy(ue)),oe.length>0&&pi(oe,te,ae),ye.length>0&&pi(ye,te,ae),Re.length>0&&pi(Re,te,ae),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Xi(D,te,ae,ue){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(d.state.transmissionRenderTarget===null){d.state.transmissionRenderTarget=new Oi(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?ao:ri,minFilter:Pi,samples:4,stencilBuffer:s});const De=R.get(d.state.transmissionRenderTarget);De.__isTransmissionRenderTarget=!0}const ye=d.state.transmissionRenderTarget;x.getDrawingBufferSize(A),ye.setSize(A.x,A.y);const Re=x.getRenderTarget();x.setRenderTarget(ye),x.getClearColor(z),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear();const Pe=x.toneMapping;x.toneMapping=ii,pi(D,ae,ue),v.updateMultisampleRenderTarget(ye),v.updateRenderTargetMipmap(ye);let Ne=!1;for(let De=0,Ie=te.length;De<Ie;De++){const Ue=te[De],at=Ue.object,Ht=Ue.geometry,_t=Ue.material,wn=Ue.group;if(_t.side===un&&at.layers.test(ue.layers)){const nt=_t.side;_t.side=It,_t.needsUpdate=!0,Il(at,ae,ue,Ht,_t,wn),_t.side=nt,_t.needsUpdate=!0,Ne=!0}}Ne===!0&&(v.updateMultisampleRenderTarget(ye),v.updateRenderTargetMipmap(ye)),x.setRenderTarget(Re),x.setClearColor(z,$),x.toneMapping=Pe}function pi(D,te,ae){const ue=te.isScene===!0?te.overrideMaterial:null;for(let oe=0,ye=D.length;oe<ye;oe++){const Re=D[oe],Pe=Re.object,Ne=Re.geometry,De=ue===null?Re.material:ue,Ie=Re.group;Pe.layers.test(ae.layers)&&Il(Pe,te,ae,Ne,De,Ie)}}function Il(D,te,ae,ue,oe,ye){D.onBeforeRender(x,te,ae,ue,oe,ye),D.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),oe.onBeforeRender(x,te,ae,ue,D,ye),oe.transparent===!0&&oe.side===un&&oe.forceSinglePass===!1?(oe.side=It,oe.needsUpdate=!0,x.renderBufferDirect(ae,te,ue,oe,D,ye),oe.side=ai,oe.needsUpdate=!0,x.renderBufferDirect(ae,te,ue,oe,D,ye),oe.side=un):x.renderBufferDirect(ae,te,ue,oe,D,ye),D.onAfterRender(x,te,ae,ue,oe,ye)}function As(D,te,ae){te.isScene!==!0&&(te=le);const ue=R.get(D),oe=d.state.lights,ye=d.state.shadowsArray,Re=oe.state.version,Pe=de.getParameters(D,oe.state,ye,te,ae),Ne=de.getProgramCacheKey(Pe);let De=ue.programs;ue.environment=D.isMeshStandardMaterial?te.environment:null,ue.fog=te.fog,ue.envMap=(D.isMeshStandardMaterial?j:b).get(D.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&D.envMap===null?te.environmentRotation:D.envMapRotation,De===void 0&&(D.addEventListener("dispose",Ee),De=new Map,ue.programs=De);let Ie=De.get(Ne);if(Ie!==void 0){if(ue.currentProgram===Ie&&ue.lightsStateVersion===Re)return Ul(D,Pe),Ie}else Pe.uniforms=de.getUniforms(D),D.onBuild(ae,Pe,x),D.onBeforeCompile(Pe,x),Ie=de.acquireProgram(Pe,Ne),De.set(Ne,Ie),ue.uniforms=Pe.uniforms;const Ue=ue.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ue.clippingPlanes=xe.uniform),Ul(D,Pe),ue.needsLights=Df(D),ue.lightsStateVersion=Re,ue.needsLights&&(Ue.ambientLightColor.value=oe.state.ambient,Ue.lightProbe.value=oe.state.probe,Ue.directionalLights.value=oe.state.directional,Ue.directionalLightShadows.value=oe.state.directionalShadow,Ue.spotLights.value=oe.state.spot,Ue.spotLightShadows.value=oe.state.spotShadow,Ue.rectAreaLights.value=oe.state.rectArea,Ue.ltc_1.value=oe.state.rectAreaLTC1,Ue.ltc_2.value=oe.state.rectAreaLTC2,Ue.pointLights.value=oe.state.point,Ue.pointLightShadows.value=oe.state.pointShadow,Ue.hemisphereLights.value=oe.state.hemi,Ue.directionalShadowMap.value=oe.state.directionalShadowMap,Ue.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ue.spotShadowMap.value=oe.state.spotShadowMap,Ue.spotLightMatrix.value=oe.state.spotLightMatrix,Ue.spotLightMap.value=oe.state.spotLightMap,Ue.pointShadowMap.value=oe.state.pointShadowMap,Ue.pointShadowMatrix.value=oe.state.pointShadowMatrix),ue.currentProgram=Ie,ue.uniformsList=null,Ie}function Dl(D){if(D.uniformsList===null){const te=D.currentProgram.getUniforms();D.uniformsList=to.seqWithValue(te.seq,D.uniforms)}return D.uniformsList}function Ul(D,te){const ae=R.get(D);ae.outputColorSpace=te.outputColorSpace,ae.batching=te.batching,ae.instancing=te.instancing,ae.instancingColor=te.instancingColor,ae.instancingMorph=te.instancingMorph,ae.skinning=te.skinning,ae.morphTargets=te.morphTargets,ae.morphNormals=te.morphNormals,ae.morphColors=te.morphColors,ae.morphTargetsCount=te.morphTargetsCount,ae.numClippingPlanes=te.numClippingPlanes,ae.numIntersection=te.numClipIntersection,ae.vertexAlphas=te.vertexAlphas,ae.vertexTangents=te.vertexTangents,ae.toneMapping=te.toneMapping}function Nf(D,te,ae,ue,oe){te.isScene!==!0&&(te=le),v.resetTextureUnits();const ye=te.fog,Re=ue.isMeshStandardMaterial?te.environment:null,Pe=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:fi,Ne=(ue.isMeshStandardMaterial?j:b).get(ue.envMap||Re),De=ue.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Ie=!!ae.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ue=!!ae.morphAttributes.position,at=!!ae.morphAttributes.normal,Ht=!!ae.morphAttributes.color;let _t=ii;ue.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(_t=x.toneMapping);const wn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,nt=wn!==void 0?wn.length:0,Fe=R.get(ue),No=d.state.lights;if(L===!0&&(N===!0||D!==M)){const Kt=D===M&&ue.id===F;xe.setState(ue,D,Kt)}let Qe=!1;ue.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==No.state.version||Fe.outputColorSpace!==Pe||oe.isBatchedMesh&&Fe.batching===!1||!oe.isBatchedMesh&&Fe.batching===!0||oe.isInstancedMesh&&Fe.instancing===!1||!oe.isInstancedMesh&&Fe.instancing===!0||oe.isSkinnedMesh&&Fe.skinning===!1||!oe.isSkinnedMesh&&Fe.skinning===!0||oe.isInstancedMesh&&Fe.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Fe.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Fe.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Fe.instancingMorph===!1&&oe.morphTexture!==null||Fe.envMap!==Ne||ue.fog===!0&&Fe.fog!==ye||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==xe.numPlanes||Fe.numIntersection!==xe.numIntersection)||Fe.vertexAlphas!==De||Fe.vertexTangents!==Ie||Fe.morphTargets!==Ue||Fe.morphNormals!==at||Fe.morphColors!==Ht||Fe.toneMapping!==_t||Fe.morphTargetsCount!==nt)&&(Qe=!0):(Qe=!0,Fe.__version=ue.version);let mi=Fe.currentProgram;Qe===!0&&(mi=As(ue,te,oe));let Fl=!1,qr=!1,Io=!1;const Et=mi.getUniforms(),Vn=Fe.uniforms;if(X.useProgram(mi.program)&&(Fl=!0,qr=!0,Io=!0),ue.id!==F&&(F=ue.id,qr=!0),Fl||M!==D){Et.setValue(B,"projectionMatrix",D.projectionMatrix),Et.setValue(B,"viewMatrix",D.matrixWorldInverse);const Kt=Et.map.cameraPosition;Kt!==void 0&&Kt.setValue(B,Q.setFromMatrixPosition(D.matrixWorld)),W.logarithmicDepthBuffer&&Et.setValue(B,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Et.setValue(B,"isOrthographic",D.isOrthographicCamera===!0),M!==D&&(M=D,qr=!0,Io=!0)}if(oe.isSkinnedMesh){Et.setOptional(B,oe,"bindMatrix"),Et.setOptional(B,oe,"bindMatrixInverse");const Kt=oe.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Et.setValue(B,"boneTexture",Kt.boneTexture,v))}oe.isBatchedMesh&&(Et.setOptional(B,oe,"batchingTexture"),Et.setValue(B,"batchingTexture",oe._matricesTexture,v));const Do=ae.morphAttributes;if((Do.position!==void 0||Do.normal!==void 0||Do.color!==void 0)&&Te.update(oe,ae,mi),(qr||Fe.receiveShadow!==oe.receiveShadow)&&(Fe.receiveShadow=oe.receiveShadow,Et.setValue(B,"receiveShadow",oe.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Vn.envMap.value=Ne,Vn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&te.environment!==null&&(Vn.envMapIntensity.value=te.environmentIntensity),qr&&(Et.setValue(B,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&If(Vn,Io),ye&&ue.fog===!0&&Me.refreshFogUniforms(Vn,ye),Me.refreshMaterialUniforms(Vn,ue,G,O,d.state.transmissionRenderTarget),to.upload(B,Dl(Fe),Vn,v)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(to.upload(B,Dl(Fe),Vn,v),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Et.setValue(B,"center",oe.center),Et.setValue(B,"modelViewMatrix",oe.modelViewMatrix),Et.setValue(B,"normalMatrix",oe.normalMatrix),Et.setValue(B,"modelMatrix",oe.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Kt=ue.uniformsGroups;for(let Uo=0,Uf=Kt.length;Uo<Uf;Uo++){const Ol=Kt[Uo];qe.update(Ol,mi),qe.bind(Ol,mi)}}return mi}function If(D,te){D.ambientLightColor.needsUpdate=te,D.lightProbe.needsUpdate=te,D.directionalLights.needsUpdate=te,D.directionalLightShadows.needsUpdate=te,D.pointLights.needsUpdate=te,D.pointLightShadows.needsUpdate=te,D.spotLights.needsUpdate=te,D.spotLightShadows.needsUpdate=te,D.rectAreaLights.needsUpdate=te,D.hemisphereLights.needsUpdate=te}function Df(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(D,te,ae){R.get(D.texture).__webglTexture=te,R.get(D.depthTexture).__webglTexture=ae;const ue=R.get(D);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=ae===void 0,ue.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,te){const ae=R.get(D);ae.__webglFramebuffer=te,ae.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(D,te=0,ae=0){w=D,I=te,C=ae;let ue=!0,oe=null,ye=!1,Re=!1;if(D){const Ne=R.get(D);Ne.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(B.FRAMEBUFFER,null),ue=!1):Ne.__webglFramebuffer===void 0?v.setupRenderTarget(D):Ne.__hasExternalTextures&&v.rebindTextures(D,R.get(D.texture).__webglTexture,R.get(D.depthTexture).__webglTexture);const De=D.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);const Ie=R.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ie[te])?oe=Ie[te][ae]:oe=Ie[te],ye=!0):D.samples>0&&v.useMultisampledRTT(D)===!1?oe=R.get(D).__webglMultisampledFramebuffer:Array.isArray(Ie)?oe=Ie[ae]:oe=Ie,S.copy(D.viewport),V.copy(D.scissor),H=D.scissorTest}else S.copy(J).multiplyScalar(G).floor(),V.copy(re).multiplyScalar(G).floor(),H=ce;if(X.bindFramebuffer(B.FRAMEBUFFER,oe)&&ue&&X.drawBuffers(D,oe),X.viewport(S),X.scissor(V),X.setScissorTest(H),ye){const Ne=R.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne.__webglTexture,ae)}else if(Re){const Ne=R.get(D.texture),De=te||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.__webglTexture,ae||0,De)}F=-1},this.readRenderTargetPixels=function(D,te,ae,ue,oe,ye,Re){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=R.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){X.bindFramebuffer(B.FRAMEBUFFER,Pe);try{const Ne=D.texture,De=Ne.format,Ie=Ne.type;if(De!==yn&&We.convert(De)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ie===ao&&(Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float"));if(Ie!==ri&&We.convert(Ie)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&Ie!==$n&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=D.width-ue&&ae>=0&&ae<=D.height-oe&&B.readPixels(te,ae,ue,oe,We.convert(De),We.convert(Ie),ye)}finally{const Ne=w!==null?R.get(w).__webglFramebuffer:null;X.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(D,te,ae=0){const ue=Math.pow(2,-ae),oe=Math.floor(te.image.width*ue),ye=Math.floor(te.image.height*ue);v.setTexture2D(te,0),B.copyTexSubImage2D(B.TEXTURE_2D,ae,0,0,D.x,D.y,oe,ye),X.unbindTexture()},this.copyTextureToTexture=function(D,te,ae,ue=0){const oe=te.image.width,ye=te.image.height,Re=We.convert(ae.format),Pe=We.convert(ae.type);v.setTexture2D(ae,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ae.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ae.unpackAlignment),te.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ue,D.x,D.y,oe,ye,Re,Pe,te.image.data):te.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ue,D.x,D.y,te.mipmaps[0].width,te.mipmaps[0].height,Re,te.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,ue,D.x,D.y,Re,Pe,te.image),ue===0&&ae.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(D,te,ae,ue,oe=0){const ye=Math.round(D.max.x-D.min.x),Re=Math.round(D.max.y-D.min.y),Pe=D.max.z-D.min.z+1,Ne=We.convert(ue.format),De=We.convert(ue.type);let Ie;if(ue.isData3DTexture)v.setTexture3D(ue,0),Ie=B.TEXTURE_3D;else if(ue.isDataArrayTexture||ue.isCompressedArrayTexture)v.setTexture2DArray(ue,0),Ie=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ue.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ue.unpackAlignment);const Ue=B.getParameter(B.UNPACK_ROW_LENGTH),at=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ht=B.getParameter(B.UNPACK_SKIP_PIXELS),_t=B.getParameter(B.UNPACK_SKIP_ROWS),wn=B.getParameter(B.UNPACK_SKIP_IMAGES),nt=ae.isCompressedTexture?ae.mipmaps[oe]:ae.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,D.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,D.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,D.min.z),ae.isDataTexture||ae.isData3DTexture?B.texSubImage3D(Ie,oe,te.x,te.y,te.z,ye,Re,Pe,Ne,De,nt.data):ue.isCompressedArrayTexture?B.compressedTexSubImage3D(Ie,oe,te.x,te.y,te.z,ye,Re,Pe,Ne,nt.data):B.texSubImage3D(Ie,oe,te.x,te.y,te.z,ye,Re,Pe,Ne,De,nt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ue),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,at),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ht),B.pixelStorei(B.UNPACK_SKIP_ROWS,_t),B.pixelStorei(B.UNPACK_SKIP_IMAGES,wn),oe===0&&ue.generateMipmaps&&B.generateMipmap(Ie),X.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?v.setTextureCube(D,0):D.isData3DTexture?v.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?v.setTexture2DArray(D,0):v.setTexture2D(D,0),X.unbindTexture()},this.resetState=function(){I=0,C=0,w=null,X.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===il?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===Mo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pv extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,p=(o-u)/f;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new he:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new q,i=[],s=[],o=[],a=new q,l=new tt;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new q)}s[0]=new q,o[0]=new q;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(vt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(vt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ll extends An{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mv extends ll{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cl(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,i(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Js=new q,da=new cl,pa=new cl,ma=new cl;class _v extends An{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new q){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Js.subVectors(i[0],i[1]).add(i[0]),c=Js);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Js.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Js),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),da.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,d),pa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,d),ma.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,d)}else this.curveType==="catmullrom"&&(da.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),pa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ma.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(da.calc(l),pa.calc(l),ma.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new q().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ru(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function gv(r,e){const t=1-r;return t*t*e}function vv(r,e){return 2*(1-r)*r*e}function xv(r,e){return r*r*e}function is(r,e,t,n){return gv(r,e)+vv(r,t)+xv(r,n)}function yv(r,e){const t=1-r;return t*t*t*e}function Sv(r,e){const t=1-r;return 3*t*t*r*e}function Mv(r,e){return 3*(1-r)*r*r*e}function Ev(r,e){return r*r*r*e}function rs(r,e,t,n,i){return yv(r,e)+Sv(r,t)+Mv(r,n)+Ev(r,i)}class _h extends An{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rs(e,i.x,s.x,o.x,a.x),rs(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tv extends An{constructor(e=new q,t=new q,n=new q,i=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new q){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rs(e,i.x,s.x,o.x,a.x),rs(e,i.y,s.y,o.y,a.y),rs(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gh extends An{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bv extends An{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vh extends An{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(is(e,i.x,s.x,o.x),is(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Av extends An{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(is(e,i.x,s.x,o.x),is(e,i.y,s.y,o.y),is(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xh extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(ru(a,l.x,c.x,u.x,h.x),ru(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var Da=Object.freeze({__proto__:null,ArcCurve:mv,CatmullRomCurve3:_v,CubicBezierCurve:_h,CubicBezierCurve3:Tv,EllipseCurve:ll,LineCurve:gh,LineCurve3:bv,QuadraticBezierCurve:vh,QuadraticBezierCurve3:Av,SplineCurve:xh});class wv extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Da[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Da[i.type]().fromJSON(i))}return this}}class Rr extends wv{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new gh(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new vh(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new _h(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new xh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new ll(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cr extends Rr{constructor(e){super(e),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Rr().fromJSON(i))}return this}}const Rv={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=yh(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,p;if(n&&(s=Iv(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)h=r[g],f=r[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return us(s,o,t,a,l,p,0),o}};function yh(r,e,t,n,i){let s,o;if(i===Wv(r,e,t,n)>0)for(s=e;s<t;s+=n)o=su(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=su(s,r[s],r[s+1],o);return o&&bo(o,o.next)&&(fs(o),o=o.next),o}function zi(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(bo(t,t.next)||rt(t.prev,t,t.next)===0)){if(fs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function us(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Bv(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Pv(r,n,i,s):Cv(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),fs(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Lv(zi(r),e,t),us(r,e,t,n,i,s,2)):o===2&&Nv(r,e,t,n,i,s):us(zi(r),e,t,n,i,s,1);break}}}function Cv(r){const e=r.prev,t=r,n=r.next;if(rt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&gr(i,a,s,l,o,c,g.x,g.y)&&rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pv(r,e,t,n){const i=r.prev,s=r,o=r.next;if(rt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,m=Ua(p,g,e,t,n),E=Ua(_,d,e,t,n);let x=r.prevZ,T=r.nextZ;for(;x&&x.z>=m&&T&&T.z<=E;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=d&&x!==i&&x!==o&&gr(a,u,l,h,c,f,x.x,x.y)&&rt(x.prev,x,x.next)>=0||(x=x.prevZ,T.x>=p&&T.x<=_&&T.y>=g&&T.y<=d&&T!==i&&T!==o&&gr(a,u,l,h,c,f,T.x,T.y)&&rt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;x&&x.z>=m;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=d&&x!==i&&x!==o&&gr(a,u,l,h,c,f,x.x,x.y)&&rt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;T&&T.z<=E;){if(T.x>=p&&T.x<=_&&T.y>=g&&T.y<=d&&T!==i&&T!==o&&gr(a,u,l,h,c,f,T.x,T.y)&&rt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Lv(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!bo(i,s)&&Sh(i,n,n.next,s)&&hs(i,s)&&hs(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),fs(n),fs(n.next),n=r=s),n=n.next}while(n!==r);return zi(n)}function Nv(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hv(o,a)){let l=Mh(o,a);o=zi(o,o.next),l=zi(l,l.next),us(o,e,t,n,i,s,0),us(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Iv(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=yh(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(kv(c));for(i.sort(Dv),s=0;s<i.length;s++)t=Uv(i[s],t);return t}function Dv(r,e){return r.x-e.x}function Uv(r,e){const t=Fv(r,e);if(!t)return e;const n=Mh(t,r);return zi(n,n.next),zi(t,t.next)}function Fv(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&gr(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),hs(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&Ov(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function Ov(r,e){return rt(r.prev,r,e.prev)<0&&rt(e.next,r,r.next)<0}function Bv(r,e,t,n){let i=r;do i.z===0&&(i.z=Ua(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,zv(i)}function zv(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Ua(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function kv(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function gr(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Hv(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Gv(r,e)&&(hs(r,e)&&hs(e,r)&&Vv(r,e)&&(rt(r.prev,r,e.prev)||rt(r,e.prev,e))||bo(r,e)&&rt(r.prev,r,r.next)>0&&rt(e.prev,e,e.next)>0)}function rt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function bo(r,e){return r.x===e.x&&r.y===e.y}function Sh(r,e,t,n){const i=Ks(rt(r,e,t)),s=Ks(rt(r,e,n)),o=Ks(rt(t,n,r)),a=Ks(rt(t,n,e));return!!(i!==s&&o!==a||i===0&&Zs(r,t,e)||s===0&&Zs(r,n,e)||o===0&&Zs(t,r,n)||a===0&&Zs(t,e,n))}function Zs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ks(r){return r>0?1:r<0?-1:0}function Gv(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Sh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function hs(r,e){return rt(r.prev,r,r.next)<0?rt(r,e,r.next)>=0&&rt(r,r.prev,e)>=0:rt(r,e,r.prev)<0||rt(r,r.next,e)<0}function Vv(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Mh(r,e){const t=new Fa(r.i,r.x,r.y),n=new Fa(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function su(r,e,t,n){const i=new Fa(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Fa(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wv(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Mn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Mn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];ou(e),au(n,e);let o=e.length;t.forEach(ou);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,au(n,t[l]);const a=Rv.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ou(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function au(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ul extends mn{constructor(e=new Cr([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Nt(i,3)),this.setAttribute("uv",new Nt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Xv;let x,T=!1,I,C,w,F;m&&(x=m.getSpacedPoints(u),T=!0,f=!1,I=m.computeFrenetFrames(u,!1),C=new q,w=new q,F=new q),f||(d=0,p=0,g=0,_=0);const M=a.extractPoints(c);let S=M.shape;const V=M.holes;if(!Mn.isClockWise(S)){S=S.reverse();for(let K=0,Y=V.length;K<Y;K++){const W=V[K];Mn.isClockWise(W)&&(V[K]=W.reverse())}}const z=Mn.triangulateShape(S,V),$=S;for(let K=0,Y=V.length;K<Y;K++){const W=V[K];S=S.concat(W)}function k(K,Y,W){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(Y,W)}const O=S.length,G=z.length;function U(K,Y,W){let X,ie,R;const v=K.x-Y.x,b=K.y-Y.y,j=W.x-K.x,ne=W.y-K.y,fe=v*v+b*b,be=v*ne-b*j;if(Math.abs(be)>Number.EPSILON){const de=Math.sqrt(fe),Me=Math.sqrt(j*j+ne*ne),Ae=Y.x-b/de,me=Y.y+v/de,xe=W.x-ne/Me,Ce=W.y+j/Me,Se=((xe-Ae)*ne-(Ce-me)*j)/(v*ne-b*j);X=Ae+v*Se-K.x,ie=me+b*Se-K.y;const Te=X*X+ie*ie;if(Te<=2)return new he(X,ie);R=Math.sqrt(Te/2)}else{let de=!1;v>Number.EPSILON?j>Number.EPSILON&&(de=!0):v<-Number.EPSILON?j<-Number.EPSILON&&(de=!0):Math.sign(b)===Math.sign(ne)&&(de=!0),de?(X=-b,ie=v,R=Math.sqrt(fe)):(X=v,ie=b,R=Math.sqrt(fe/2))}return new he(X/R,ie/R)}const Z=[];for(let K=0,Y=$.length,W=Y-1,X=K+1;K<Y;K++,W++,X++)W===Y&&(W=0),X===Y&&(X=0),Z[K]=U($[K],$[W],$[X]);const J=[];let re,ce=Z.concat();for(let K=0,Y=V.length;K<Y;K++){const W=V[K];re=[];for(let X=0,ie=W.length,R=ie-1,v=X+1;X<ie;X++,R++,v++)R===ie&&(R=0),v===ie&&(v=0),re[X]=U(W[X],W[R],W[v]);J.push(re),ce=ce.concat(re)}for(let K=0;K<d;K++){const Y=K/d,W=p*Math.cos(Y*Math.PI/2),X=g*Math.sin(Y*Math.PI/2)+_;for(let ie=0,R=$.length;ie<R;ie++){const v=k($[ie],Z[ie],X);A(v.x,v.y,-W)}for(let ie=0,R=V.length;ie<R;ie++){const v=V[ie];re=J[ie];for(let b=0,j=v.length;b<j;b++){const ne=k(v[b],re[b],X);A(ne.x,ne.y,-W)}}}const _e=g+_;for(let K=0;K<O;K++){const Y=f?k(S[K],ce[K],_e):S[K];T?(w.copy(I.normals[0]).multiplyScalar(Y.x),C.copy(I.binormals[0]).multiplyScalar(Y.y),F.copy(x[0]).add(w).add(C),A(F.x,F.y,F.z)):A(Y.x,Y.y,0)}for(let K=1;K<=u;K++)for(let Y=0;Y<O;Y++){const W=f?k(S[Y],ce[Y],_e):S[Y];T?(w.copy(I.normals[K]).multiplyScalar(W.x),C.copy(I.binormals[K]).multiplyScalar(W.y),F.copy(x[K]).add(w).add(C),A(F.x,F.y,F.z)):A(W.x,W.y,h/u*K)}for(let K=d-1;K>=0;K--){const Y=K/d,W=p*Math.cos(Y*Math.PI/2),X=g*Math.sin(Y*Math.PI/2)+_;for(let ie=0,R=$.length;ie<R;ie++){const v=k($[ie],Z[ie],X);A(v.x,v.y,h+W)}for(let ie=0,R=V.length;ie<R;ie++){const v=V[ie];re=J[ie];for(let b=0,j=v.length;b<j;b++){const ne=k(v[b],re[b],X);T?A(ne.x,ne.y+x[u-1].y,x[u-1].x+W):A(ne.x,ne.y,h+W)}}}L(),N();function L(){const K=i.length/3;if(f){let Y=0,W=O*Y;for(let X=0;X<G;X++){const ie=z[X];Q(ie[2]+W,ie[1]+W,ie[0]+W)}Y=u+d*2,W=O*Y;for(let X=0;X<G;X++){const ie=z[X];Q(ie[0]+W,ie[1]+W,ie[2]+W)}}else{for(let Y=0;Y<G;Y++){const W=z[Y];Q(W[2],W[1],W[0])}for(let Y=0;Y<G;Y++){const W=z[Y];Q(W[0]+O*u,W[1]+O*u,W[2]+O*u)}}n.addGroup(K,i.length/3-K,0)}function N(){const K=i.length/3;let Y=0;P($,Y),Y+=$.length;for(let W=0,X=V.length;W<X;W++){const ie=V[W];P(ie,Y),Y+=ie.length}n.addGroup(K,i.length/3-K,1)}function P(K,Y){let W=K.length;for(;--W>=0;){const X=W;let ie=W-1;ie<0&&(ie=K.length-1);for(let R=0,v=u+d*2;R<v;R++){const b=O*R,j=O*(R+1),ne=Y+X+b,fe=Y+ie+b,be=Y+ie+j,de=Y+X+j;le(ne,fe,be,de)}}}function A(K,Y,W){l.push(K),l.push(Y),l.push(W)}function Q(K,Y,W){ee(K),ee(Y),ee(W);const X=i.length/3,ie=E.generateTopUV(n,i,X-3,X-2,X-1);B(ie[0]),B(ie[1]),B(ie[2])}function le(K,Y,W,X){ee(K),ee(Y),ee(X),ee(Y),ee(W),ee(X);const ie=i.length/3,R=E.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);B(R[0]),B(R[1]),B(R[3]),B(R[1]),B(R[2]),B(R[3])}function ee(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function B(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qv(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Da[i.type]().fromJSON(i)),new ul(n,e.options)}}const Xv={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new he(s,o),new he(a,l),new he(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],p=e[i*3+1],g=e[i*3+2],_=e[s*3],d=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-h),new he(f,1-g),new he(_,1-m)]:[new he(a,1-l),new he(u,1-h),new he(p,1-g),new he(d,1-m)]}};function qv(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class hl extends mn{constructor(e=new Cr([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Nt(i,3)),this.setAttribute("normal",new Nt(s,3)),this.setAttribute("uv",new Nt(o,2));function c(u){const h=i.length/3,f=u.extractPoints(t);let p=f.shape;const g=f.holes;Mn.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,m=g.length;d<m;d++){const E=g[d];Mn.isClockWise(E)===!0&&(g[d]=E.reverse())}const _=Mn.triangulateShape(p,g);for(let d=0,m=g.length;d<m;d++){const E=g[d];p=p.concat(E)}for(let d=0,m=p.length;d<m;d++){const E=p[d];i.push(E.x,E.y,0),s.push(0,0,1),o.push(E.x,E.y)}for(let d=0,m=_.length;d<m;d++){const E=_[d],x=E[0]+h,T=E[1]+h,I=E[2]+h;n.push(x,T,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Yv(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new hl(n,e.curveSegments)}}function Yv(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class jv extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lu extends Wr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const cu={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Jv{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Zv=new Jv;class fl{constructor(e){this.manager=e!==void 0?e:Zv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fl.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class Kv extends Error{constructor(e,t){super(e),this.response=t}}class $v extends fl{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=cu.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:n,onError:i});return}In[e]=[],In[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=In[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let _=0;const d=new ReadableStream({start(m){E();function E(){h.read().then(({done:x,value:T})=>{if(x)m.close();else{_+=T.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let C=0,w=u.length;C<w;C++){const F=u[C];F.onProgress&&F.onProgress(I)}m.enqueue(T),E()}})}}});return new Response(d)}else throw new Kv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{cu.add(e,c);const u=In[e];delete In[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=In[e];if(u===void 0)throw this.manager.itemError(e),c;delete In[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Eh extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _a=new tt,uu=new q,hu=new q;class Qv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ol,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hu),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ex extends Qv{constructor(){super(new ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tx extends Eh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new ex}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nx extends Eh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vr{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const fu=new he;class ix{constructor(e=new he(1/0,1/0),t=new he(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Mi{constructor(){this.type="ShapePath",this.color=new He,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Rr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const E=[];for(let x=0,T=m.length;x<T;x++){const I=m[x],C=new Cr;C.curves=I.curves,E.push(C)}return E}function n(m,E){const x=E.length;let T=!1;for(let I=x-1,C=0;C<x;I=C++){let w=E[I],F=E[C],M=F.x-w.x,S=F.y-w.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(w=E[C],M=-M,F=E[I],S=-S),m.y<w.y||m.y>F.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const V=S*(m.x-w.x)-M*(m.y-w.y);if(V===0)return!0;if(V<0)continue;T=!T}}else{if(m.y!==w.y)continue;if(F.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=F.x)return!0}}return T}const i=Mn.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Cr,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],g=0,_;f[g]=void 0,p[g]=[];for(let m=0,E=s.length;m<E;m++)a=s[m],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Cr,p:_},f[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:_[0]});if(!f[0])return t(s);if(f.length>1){let m=!1,E=0;for(let x=0,T=f.length;x<T;x++)h[x]=[];for(let x=0,T=f.length;x<T;x++){const I=p[x];for(let C=0;C<I.length;C++){const w=I[C];let F=!0;for(let M=0;M<f.length;M++)n(w.p,f[M].p)&&(x!==M&&E++,F?(F=!1,h[M].push(w)):m=!0);F&&h[x].push(w)}}E>0&&m===!1&&(p=h)}let d;for(let m=0,E=f.length;m<E;m++){l=f[m].s,c.push(l),d=p[m];for(let x=0,T=d.length;x<T;x++)l.holes.push(d[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);const rx=cn;class xr extends fl{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const s=this,o=new $v(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(L,N){if(L.nodeType!==1)return;const P=T(L);let A=!1,Q=null;switch(L.nodeName){case"svg":N=g(L,N);break;case"style":s(L);break;case"g":N=g(L,N);break;case"path":N=g(L,N),L.hasAttribute("d")&&(Q=i(L));break;case"rect":N=g(L,N),Q=l(L);break;case"polygon":N=g(L,N),Q=c(L);break;case"polyline":N=g(L,N),Q=u(L);break;case"circle":N=g(L,N),Q=h(L);break;case"ellipse":N=g(L,N),Q=f(L);break;case"line":N=g(L,N),Q=p(L);break;case"defs":A=!0;break;case"use":N=g(L,N);const B=(L.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),K=L.viewportElement.getElementById(B);K?n(K,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+B);break}Q&&(N.fill!==void 0&&N.fill!=="none"&&Q.color.setStyle(N.fill,rx),C(Q,re),H.push(Q),Q.userData={node:L,style:N});const le=L.childNodes;for(let ee=0;ee<le.length;ee++){const B=le[ee];A&&B.nodeName!=="style"&&B.nodeName!=="defs"||n(B,N)}P&&($.pop(),$.length>0?re.copy($[$.length-1]):re.identity())}function i(L){const N=new Mi,P=new he,A=new he,Q=new he;let le=!0,ee=!1;const B=L.getAttribute("d");if(B===""||B==="none")return null;const K=B.match(/[a-df-z][^a-df-z]*/ig);for(let Y=0,W=K.length;Y<W;Y++){const X=K[Y],ie=X.charAt(0),R=X.slice(1).trim();le===!0&&(ee=!0,le=!1);let v;switch(ie){case"M":v=d(R);for(let b=0,j=v.length;b<j;b+=2)P.x=v[b+0],P.y=v[b+1],A.x=P.x,A.y=P.y,b===0?N.moveTo(P.x,P.y):N.lineTo(P.x,P.y),b===0&&Q.copy(P);break;case"H":v=d(R);for(let b=0,j=v.length;b<j;b++)P.x=v[b],A.x=P.x,A.y=P.y,N.lineTo(P.x,P.y),b===0&&ee===!0&&Q.copy(P);break;case"V":v=d(R);for(let b=0,j=v.length;b<j;b++)P.y=v[b],A.x=P.x,A.y=P.y,N.lineTo(P.x,P.y),b===0&&ee===!0&&Q.copy(P);break;case"L":v=d(R);for(let b=0,j=v.length;b<j;b+=2)P.x=v[b+0],P.y=v[b+1],A.x=P.x,A.y=P.y,N.lineTo(P.x,P.y),b===0&&ee===!0&&Q.copy(P);break;case"C":v=d(R);for(let b=0,j=v.length;b<j;b+=6)N.bezierCurveTo(v[b+0],v[b+1],v[b+2],v[b+3],v[b+4],v[b+5]),A.x=v[b+2],A.y=v[b+3],P.x=v[b+4],P.y=v[b+5],b===0&&ee===!0&&Q.copy(P);break;case"S":v=d(R);for(let b=0,j=v.length;b<j;b+=4)N.bezierCurveTo(_(P.x,A.x),_(P.y,A.y),v[b+0],v[b+1],v[b+2],v[b+3]),A.x=v[b+0],A.y=v[b+1],P.x=v[b+2],P.y=v[b+3],b===0&&ee===!0&&Q.copy(P);break;case"Q":v=d(R);for(let b=0,j=v.length;b<j;b+=4)N.quadraticCurveTo(v[b+0],v[b+1],v[b+2],v[b+3]),A.x=v[b+0],A.y=v[b+1],P.x=v[b+2],P.y=v[b+3],b===0&&ee===!0&&Q.copy(P);break;case"T":v=d(R);for(let b=0,j=v.length;b<j;b+=2){const ne=_(P.x,A.x),fe=_(P.y,A.y);N.quadraticCurveTo(ne,fe,v[b+0],v[b+1]),A.x=ne,A.y=fe,P.x=v[b+0],P.y=v[b+1],b===0&&ee===!0&&Q.copy(P)}break;case"A":v=d(R,[3,4],7);for(let b=0,j=v.length;b<j;b+=7){if(v[b+5]==P.x&&v[b+6]==P.y)continue;const ne=P.clone();P.x=v[b+5],P.y=v[b+6],A.x=P.x,A.y=P.y,o(N,v[b],v[b+1],v[b+2],v[b+3],v[b+4],ne,P),b===0&&ee===!0&&Q.copy(P)}break;case"m":v=d(R);for(let b=0,j=v.length;b<j;b+=2)P.x+=v[b+0],P.y+=v[b+1],A.x=P.x,A.y=P.y,b===0?N.moveTo(P.x,P.y):N.lineTo(P.x,P.y),b===0&&Q.copy(P);break;case"h":v=d(R);for(let b=0,j=v.length;b<j;b++)P.x+=v[b],A.x=P.x,A.y=P.y,N.lineTo(P.x,P.y),b===0&&ee===!0&&Q.copy(P);break;case"v":v=d(R);for(let b=0,j=v.length;b<j;b++)P.y+=v[b],A.x=P.x,A.y=P.y,N.lineTo(P.x,P.y),b===0&&ee===!0&&Q.copy(P);break;case"l":v=d(R);for(let b=0,j=v.length;b<j;b+=2)P.x+=v[b+0],P.y+=v[b+1],A.x=P.x,A.y=P.y,N.lineTo(P.x,P.y),b===0&&ee===!0&&Q.copy(P);break;case"c":v=d(R);for(let b=0,j=v.length;b<j;b+=6)N.bezierCurveTo(P.x+v[b+0],P.y+v[b+1],P.x+v[b+2],P.y+v[b+3],P.x+v[b+4],P.y+v[b+5]),A.x=P.x+v[b+2],A.y=P.y+v[b+3],P.x+=v[b+4],P.y+=v[b+5],b===0&&ee===!0&&Q.copy(P);break;case"s":v=d(R);for(let b=0,j=v.length;b<j;b+=4)N.bezierCurveTo(_(P.x,A.x),_(P.y,A.y),P.x+v[b+0],P.y+v[b+1],P.x+v[b+2],P.y+v[b+3]),A.x=P.x+v[b+0],A.y=P.y+v[b+1],P.x+=v[b+2],P.y+=v[b+3],b===0&&ee===!0&&Q.copy(P);break;case"q":v=d(R);for(let b=0,j=v.length;b<j;b+=4)N.quadraticCurveTo(P.x+v[b+0],P.y+v[b+1],P.x+v[b+2],P.y+v[b+3]),A.x=P.x+v[b+0],A.y=P.y+v[b+1],P.x+=v[b+2],P.y+=v[b+3],b===0&&ee===!0&&Q.copy(P);break;case"t":v=d(R);for(let b=0,j=v.length;b<j;b+=2){const ne=_(P.x,A.x),fe=_(P.y,A.y);N.quadraticCurveTo(ne,fe,P.x+v[b+0],P.y+v[b+1]),A.x=ne,A.y=fe,P.x=P.x+v[b+0],P.y=P.y+v[b+1],b===0&&ee===!0&&Q.copy(P)}break;case"a":v=d(R,[3,4],7);for(let b=0,j=v.length;b<j;b+=7){if(v[b+5]==0&&v[b+6]==0)continue;const ne=P.clone();P.x+=v[b+5],P.y+=v[b+6],A.x=P.x,A.y=P.y,o(N,v[b],v[b+1],v[b+2],v[b+3],v[b+4],ne,P),b===0&&ee===!0&&Q.copy(P)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(P.copy(Q),N.currentPath.currentPoint.copy(P),le=!0);break;default:console.warn(X)}ee=!1}return N}function s(L){if(!(!L.sheet||!L.sheet.cssRules||!L.sheet.cssRules.length))for(let N=0;N<L.sheet.cssRules.length;N++){const P=L.sheet.cssRules[N];if(P.type!==1)continue;const A=P.selectorText.split(/,/gm).filter(Boolean).map(Q=>Q.trim());for(let Q=0;Q<A.length;Q++){const le=Object.fromEntries(Object.entries(P.style).filter(([,ee])=>ee!==""));z[A[Q]]=Object.assign(z[A[Q]]||{},le)}}}function o(L,N,P,A,Q,le,ee,B){if(N==0||P==0){L.lineTo(B.x,B.y);return}A=A*Math.PI/180,N=Math.abs(N),P=Math.abs(P);const K=(ee.x-B.x)/2,Y=(ee.y-B.y)/2,W=Math.cos(A)*K+Math.sin(A)*Y,X=-Math.sin(A)*K+Math.cos(A)*Y;let ie=N*N,R=P*P;const v=W*W,b=X*X,j=v/ie+b/R;if(j>1){const Se=Math.sqrt(j);N=Se*N,P=Se*P,ie=N*N,R=P*P}const ne=ie*b+R*v,fe=(ie*R-ne)/ne;let be=Math.sqrt(Math.max(0,fe));Q===le&&(be=-be);const de=be*N*X/P,Me=-be*P*W/N,Ae=Math.cos(A)*de-Math.sin(A)*Me+(ee.x+B.x)/2,me=Math.sin(A)*de+Math.cos(A)*Me+(ee.y+B.y)/2,xe=a(1,0,(W-de)/N,(X-Me)/P),Ce=a((W-de)/N,(X-Me)/P,(-W-de)/N,(-X-Me)/P)%(Math.PI*2);L.currentPath.absellipse(Ae,me,N,P,xe,xe+Ce,le===0,A)}function a(L,N,P,A){const Q=L*P+N*A,le=Math.sqrt(L*L+N*N)*Math.sqrt(P*P+A*A);let ee=Math.acos(Math.max(-1,Math.min(1,Q/le)));return L*A-N*P<0&&(ee=-ee),ee}function l(L){const N=x(L.getAttribute("x")||0),P=x(L.getAttribute("y")||0),A=x(L.getAttribute("rx")||L.getAttribute("ry")||0),Q=x(L.getAttribute("ry")||L.getAttribute("rx")||0),le=x(L.getAttribute("width")),ee=x(L.getAttribute("height")),B=1-.551915024494,K=new Mi;return K.moveTo(N+A,P),K.lineTo(N+le-A,P),(A!==0||Q!==0)&&K.bezierCurveTo(N+le-A*B,P,N+le,P+Q*B,N+le,P+Q),K.lineTo(N+le,P+ee-Q),(A!==0||Q!==0)&&K.bezierCurveTo(N+le,P+ee-Q*B,N+le-A*B,P+ee,N+le-A,P+ee),K.lineTo(N+A,P+ee),(A!==0||Q!==0)&&K.bezierCurveTo(N+A*B,P+ee,N,P+ee-Q*B,N,P+ee-Q),K.lineTo(N,P+Q),(A!==0||Q!==0)&&K.bezierCurveTo(N,P+Q*B,N+A*B,P,N+A,P),K}function c(L){function N(le,ee,B){const K=x(ee),Y=x(B);Q===0?A.moveTo(K,Y):A.lineTo(K,Y),Q++}const P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new Mi;let Q=0;return L.getAttribute("points").replace(P,N),A.currentPath.autoClose=!0,A}function u(L){function N(le,ee,B){const K=x(ee),Y=x(B);Q===0?A.moveTo(K,Y):A.lineTo(K,Y),Q++}const P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new Mi;let Q=0;return L.getAttribute("points").replace(P,N),A.currentPath.autoClose=!1,A}function h(L){const N=x(L.getAttribute("cx")||0),P=x(L.getAttribute("cy")||0),A=x(L.getAttribute("r")||0),Q=new Rr;Q.absarc(N,P,A,0,Math.PI*2);const le=new Mi;return le.subPaths.push(Q),le}function f(L){const N=x(L.getAttribute("cx")||0),P=x(L.getAttribute("cy")||0),A=x(L.getAttribute("rx")||0),Q=x(L.getAttribute("ry")||0),le=new Rr;le.absellipse(N,P,A,Q,0,Math.PI*2);const ee=new Mi;return ee.subPaths.push(le),ee}function p(L){const N=x(L.getAttribute("x1")||0),P=x(L.getAttribute("y1")||0),A=x(L.getAttribute("x2")||0),Q=x(L.getAttribute("y2")||0),le=new Mi;return le.moveTo(N,P),le.lineTo(A,Q),le.currentPath.autoClose=!1,le}function g(L,N){N=Object.assign({},N);let P={};if(L.hasAttribute("class")){const ee=L.getAttribute("class").split(/\s/).filter(Boolean).map(B=>B.trim());for(let B=0;B<ee.length;B++)P=Object.assign(P,z["."+ee[B]])}L.hasAttribute("id")&&(P=Object.assign(P,z["#"+L.getAttribute("id")]));function A(ee,B,K){K===void 0&&(K=function(W){return W.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),W}),L.hasAttribute(ee)&&(N[B]=K(L.getAttribute(ee))),P[ee]&&(N[B]=K(P[ee])),L.style&&L.style[ee]!==""&&(N[B]=K(L.style[ee]))}function Q(ee){return Math.max(0,Math.min(1,x(ee)))}function le(ee){return Math.max(0,x(ee))}return A("fill","fill"),A("fill-opacity","fillOpacity",Q),A("fill-rule","fillRule"),A("opacity","opacity",Q),A("stroke","stroke"),A("stroke-opacity","strokeOpacity",Q),A("stroke-width","strokeWidth",le),A("stroke-linejoin","strokeLineJoin"),A("stroke-linecap","strokeLineCap"),A("stroke-miterlimit","strokeMiterLimit",le),A("visibility","visibility"),N}function _(L,N){return L-(N-L)}function d(L,N,P){if(typeof L!="string")throw new TypeError("Invalid input: "+typeof L);const A={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},Q=0,le=1,ee=2,B=3;let K=Q,Y=!0,W="",X="";const ie=[];function R(ne,fe,be){const de=new SyntaxError('Unexpected character "'+ne+'" at index '+fe+".");throw de.partial=be,de}function v(){W!==""&&(X===""?ie.push(Number(W)):ie.push(Number(W)*Math.pow(10,Number(X)))),W="",X=""}let b;const j=L.length;for(let ne=0;ne<j;ne++){if(b=L[ne],Array.isArray(N)&&N.includes(ie.length%P)&&A.FLAGS.test(b)){K=le,W=b,v();continue}if(K===Q){if(A.WHITESPACE.test(b))continue;if(A.DIGIT.test(b)||A.SIGN.test(b)){K=le,W=b;continue}if(A.POINT.test(b)){K=ee,W=b;continue}A.COMMA.test(b)&&(Y&&R(b,ne,ie),Y=!0)}if(K===le){if(A.DIGIT.test(b)){W+=b;continue}if(A.POINT.test(b)){W+=b,K=ee;continue}if(A.EXP.test(b)){K=B;continue}A.SIGN.test(b)&&W.length===1&&A.SIGN.test(W[0])&&R(b,ne,ie)}if(K===ee){if(A.DIGIT.test(b)){W+=b;continue}if(A.EXP.test(b)){K=B;continue}A.POINT.test(b)&&W[W.length-1]==="."&&R(b,ne,ie)}if(K===B){if(A.DIGIT.test(b)){X+=b;continue}if(A.SIGN.test(b)){if(X===""){X+=b;continue}X.length===1&&A.SIGN.test(X)&&R(b,ne,ie)}}A.WHITESPACE.test(b)?(v(),K=Q,Y=!1):A.COMMA.test(b)?(v(),K=Q,Y=!0):A.SIGN.test(b)?(v(),K=le,W=b):A.POINT.test(b)?(v(),K=ee,W=b):R(b,ne,ie)}return v(),ie}const m=["mm","cm","in","pt","pc","px"],E={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(L){let N="px";if(typeof L=="string"||L instanceof String)for(let A=0,Q=m.length;A<Q;A++){const le=m[A];if(L.endsWith(le)){N=le,L=L.substring(0,L.length-le.length);break}}let P;return N==="px"&&t.defaultUnit!=="px"?P=E.in[t.defaultUnit]/t.defaultDPI:(P=E[N][t.defaultUnit],P<0&&(P=E[N].in*t.defaultDPI)),P*parseFloat(L)}function T(L){if(!(L.hasAttribute("transform")||L.nodeName==="use"&&(L.hasAttribute("x")||L.hasAttribute("y"))))return null;const N=I(L);return $.length>0&&N.premultiply($[$.length-1]),re.copy(N),$.push(N),N}function I(L){const N=new Le,P=k;if(L.nodeName==="use"&&(L.hasAttribute("x")||L.hasAttribute("y"))){const A=x(L.getAttribute("x")),Q=x(L.getAttribute("y"));N.translate(A,Q)}if(L.hasAttribute("transform")){const A=L.getAttribute("transform").split(")");for(let Q=A.length-1;Q>=0;Q--){const le=A[Q].trim();if(le==="")continue;const ee=le.indexOf("("),B=le.length;if(ee>0&&ee<B){const K=le.slice(0,ee),Y=d(le.slice(ee+1));switch(P.identity(),K){case"translate":if(Y.length>=1){const W=Y[0];let X=0;Y.length>=2&&(X=Y[1]),P.translate(W,X)}break;case"rotate":if(Y.length>=1){let W=0,X=0,ie=0;W=Y[0]*Math.PI/180,Y.length>=3&&(X=Y[1],ie=Y[2]),O.makeTranslation(-X,-ie),G.makeRotation(W),U.multiplyMatrices(G,O),O.makeTranslation(X,ie),P.multiplyMatrices(O,U)}break;case"scale":if(Y.length>=1){const W=Y[0];let X=W;Y.length>=2&&(X=Y[1]),P.scale(W,X)}break;case"skewX":Y.length===1&&P.set(1,Math.tan(Y[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Y.length===1&&P.set(1,0,0,Math.tan(Y[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Y.length===6&&P.set(Y[0],Y[2],Y[4],Y[1],Y[3],Y[5],0,0,1);break}}N.premultiply(P)}}return N}function C(L,N){function P(ee){J.set(ee.x,ee.y,1).applyMatrix3(N),ee.set(J.x,J.y)}function A(ee){const B=ee.xRadius,K=ee.yRadius,Y=Math.cos(ee.aRotation),W=Math.sin(ee.aRotation),X=new q(B*Y,B*W,0),ie=new q(-K*W,K*Y,0),R=X.applyMatrix3(N),v=ie.applyMatrix3(N),b=k.set(R.x,v.x,0,R.y,v.y,0,0,0,1),j=O.copy(b).invert(),be=G.copy(j).transpose().multiply(j).elements,de=V(be[0],be[1],be[4]),Me=Math.sqrt(de.rt1),Ae=Math.sqrt(de.rt2);if(ee.xRadius=1/Me,ee.yRadius=1/Ae,ee.aRotation=Math.atan2(de.sn,de.cs),!((ee.aEndAngle-ee.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const xe=O.set(Me,0,0,0,Ae,0,0,0,1),Ce=G.set(de.cs,de.sn,0,-de.sn,de.cs,0,0,0,1),Se=xe.multiply(Ce).multiply(b),Te=Be=>{const{x:ze,y:We}=new q(Math.cos(Be),Math.sin(Be),0).applyMatrix3(Se);return Math.atan2(We,ze)};ee.aStartAngle=Te(ee.aStartAngle),ee.aEndAngle=Te(ee.aEndAngle),w(N)&&(ee.aClockwise=!ee.aClockwise)}}function Q(ee){const B=M(N),K=S(N);ee.xRadius*=B,ee.yRadius*=K;const Y=B>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);ee.aRotation+=Y,w(N)&&(ee.aStartAngle*=-1,ee.aEndAngle*=-1,ee.aClockwise=!ee.aClockwise)}const le=L.subPaths;for(let ee=0,B=le.length;ee<B;ee++){const Y=le[ee].curves;for(let W=0;W<Y.length;W++){const X=Y[W];X.isLineCurve?(P(X.v1),P(X.v2)):X.isCubicBezierCurve?(P(X.v0),P(X.v1),P(X.v2),P(X.v3)):X.isQuadraticBezierCurve?(P(X.v0),P(X.v1),P(X.v2)):X.isEllipseCurve&&(Z.set(X.aX,X.aY),P(Z),X.aX=Z.x,X.aY=Z.y,F(N)?A(X):Q(X))}}}function w(L){const N=L.elements;return N[0]*N[4]-N[1]*N[3]<0}function F(L){const N=L.elements,P=N[0]*N[3]+N[1]*N[4];if(P===0)return!1;const A=M(L),Q=S(L);return Math.abs(P/(A*Q))>Number.EPSILON}function M(L){const N=L.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function S(L){const N=L.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function V(L,N,P){let A,Q,le,ee,B;const K=L+P,Y=L-P,W=Math.sqrt(Y*Y+4*N*N);return K>0?(A=.5*(K+W),B=1/A,Q=L*B*P-N*B*N):K<0?Q=.5*(K-W):(A=.5*W,Q=-.5*W),Y>0?le=Y+W:le=Y-W,Math.abs(le)>2*Math.abs(N)?(B=-2*N/le,ee=1/Math.sqrt(1+B*B),le=B*ee):Math.abs(N)===0?(le=1,ee=0):(B=-.5*le/N,le=1/Math.sqrt(1+B*B),ee=B*le),Y>0&&(B=le,le=-ee,ee=B),{rt1:A,rt2:Q,cs:le,sn:ee}}const H=[],z={},$=[],k=new Le,O=new Le,G=new Le,U=new Le,Z=new he,J=new q,re=new Le,ce=new DOMParser().parseFromString(e,"image/svg+xml");return n(ce.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:H,xml:ce.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(_,d,m,E){const x=_.x,T=d.x,I=m.x,C=E.x,w=_.y,F=d.y,M=m.y,S=E.y,V=(C-I)*(w-M)-(S-M)*(x-I),H=(T-x)*(w-M)-(F-w)*(x-I),z=(S-M)*(T-x)-(C-I)*(F-w),$=V/z,k=H/z;if(z===0&&V!==0||$<=0||$>=1||k<0||k>1)return null;if(V===0&&z===0){for(let O=0;O<2;O++)if(o(O===0?m:E,_,d),i.loc==n.ORIGIN){const G=O===0?m:E;return{x:G.x,y:G.y,t:i.t}}else if(i.loc==n.BETWEEN){const G=+(x+i.t*(T-x)).toPrecision(10),U=+(w+i.t*(F-w)).toPrecision(10);return{x:G,y:U,t:i.t}}return null}else{for(let U=0;U<2;U++)if(o(U===0?m:E,_,d),i.loc==n.ORIGIN){const Z=U===0?m:E;return{x:Z.x,y:Z.y,t:i.t}}const O=+(x+$*(T-x)).toPrecision(10),G=+(w+$*(F-w)).toPrecision(10);return{x:O,y:G,t:$}}}function o(_,d,m){const E=m.x-d.x,x=m.y-d.y,T=_.x-d.x,I=_.y-d.y,C=E*I-T*x;if(_.x===d.x&&_.y===d.y){i.loc=n.ORIGIN,i.t=0;return}if(_.x===m.x&&_.y===m.y){i.loc=n.DESTINATION,i.t=1;return}if(C<-Number.EPSILON){i.loc=n.LEFT;return}if(C>Number.EPSILON){i.loc=n.RIGHT;return}if(E*T<0||x*I<0){i.loc=n.BEHIND;return}if(Math.sqrt(E*E+x*x)<Math.sqrt(T*T+I*I)){i.loc=n.BEYOND;return}let w;E!==0?w=T/E:w=I/x,i.loc=n.BETWEEN,i.t=w}function a(_,d){const m=[],E=[];for(let x=1;x<_.length;x++){const T=_[x-1],I=_[x];for(let C=1;C<d.length;C++){const w=d[C-1],F=d[C],M=s(T,I,w,F);M!==null&&m.find(S=>S.t<=M.t+Number.EPSILON&&S.t>=M.t-Number.EPSILON)===void 0&&(m.push(M),E.push(new he(M.x,M.y)))}}return E}function l(_,d,m){const E=new he;d.getCenter(E);const x=[];return m.forEach(T=>{T.boundingBox.containsPoint(E)&&a(_,T.points).forEach(C=>{x.push({identifier:T.identifier,isCW:T.isCW,point:C})})}),x.sort((T,I)=>T.point.x-I.point.x),x}function c(_,d,m,E,x){(x==null||x==="")&&(x="nonzero");const T=new he;_.boundingBox.getCenter(T);const I=[new he(m,T.y),new he(E,T.y)],C=l(I,_.boundingBox,d);C.sort((H,z)=>H.point.x-z.point.x);const w=[],F=[];C.forEach(H=>{H.identifier===_.identifier?w.push(H):F.push(H)});const M=w[0].point.x,S=[];let V=0;for(;V<F.length&&F[V].point.x<M;)S.length>0&&S[S.length-1]===F[V].identifier?S.pop():S.push(F[V].identifier),V++;if(S.push(_.identifier),x==="evenodd"){const H=S.length%2===0,z=S[S.length-2];return{identifier:_.identifier,isHole:H,for:z}}else if(x==="nonzero"){let H=!0,z=null,$=null;for(let k=0;k<S.length;k++){const O=S[k];H?($=d[O].isCW,H=!1,z=O):$!==d[O].isCW&&($=d[O].isCW,H=!0)}return{identifier:_.identifier,isHole:H,for:z}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let u=999999999,h=-999999999,f=e.subPaths.map(_=>{const d=_.getPoints();let m=-999999999,E=999999999,x=-999999999,T=999999999;for(let I=0;I<d.length;I++){const C=d[I];C.y>m&&(m=C.y),C.y<E&&(E=C.y),C.x>x&&(x=C.x),C.x<T&&(T=C.x)}return h<=x&&(h=x+1),u>=T&&(u=T-1),{curves:_.curves,points:d,isCW:Mn.isClockWise(d),identifier:-1,boundingBox:new ix(new he(T,E),new he(x,m))}});f=f.filter(_=>_.points.length>1);for(let _=0;_<f.length;_++)f[_].identifier=_;const p=f.map(_=>c(_,f,u,h,e.userData?e.userData.style.fillRule:void 0)),g=[];return f.forEach(_=>{if(!p[_.identifier].isHole){const m=new Cr;m.curves=_.curves,p.filter(x=>x.isHole&&x.for===_.identifier).forEach(x=>{const T=f[x.identifier],I=new Rr;I.curves=T.curves,m.holes.push(I)}),g.push(m)}}),g}static getStrokeStyle(e,t,n,i,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(e,t,n,i){const s=[],o=[],a=[];if(xr.pointsToStrokeWithBuffers(e,t,n,i,s,o,a)===0)return null;const l=new mn;return l.setAttribute("position",new Nt(s,3)),l.setAttribute("normal",new Nt(o,3)),l.setAttribute("uv",new Nt(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,i,s,o,a,l){const c=new he,u=new he,h=new he,f=new he,p=new he,g=new he,_=new he,d=new he,m=new he,E=new he,x=new he,T=new he,I=new he,C=new he,w=new he,F=new he,M=new he;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,e=Y(e);const S=e.length;if(S<2)return 0;const V=e[0].equals(e[S-1]);let H,z=e[0],$;const k=t.strokeWidth/2,O=1/(S-1);let G=0,U,Z,J,re,ce=!1,_e=0,L=l*3,N=l*2;P(e[0],e[1],c).multiplyScalar(k),d.copy(e[0]).sub(c),m.copy(e[0]).add(c),E.copy(d),x.copy(m);for(let W=1;W<S;W++){H=e[W],W===S-1?V?$=e[1]:$=void 0:$=e[W+1];const X=c;if(P(z,H,X),h.copy(X).multiplyScalar(k),T.copy(H).sub(h),I.copy(H).add(h),U=G+O,Z=!1,$!==void 0){P(H,$,u),h.copy(u).multiplyScalar(k),C.copy(H).sub(h),w.copy(H).add(h),J=!0,h.subVectors($,z),X.dot(h)<0&&(J=!1),W===1&&(ce=J),h.subVectors($,H),h.normalize();const ie=Math.abs(X.dot(h));if(ie>Number.EPSILON){const R=k/ie;h.multiplyScalar(-R),f.subVectors(H,z),p.copy(f).setLength(R).add(h),F.copy(p).negate();const v=p.length(),b=f.length();f.divideScalar(b),g.subVectors($,H);const j=g.length();switch(g.divideScalar(j),f.dot(F)<b&&g.dot(F)<j&&(Z=!0),M.copy(p).add(H),F.add(H),re=!1,Z?J?(w.copy(F),I.copy(F)):(C.copy(F),T.copy(F)):le(),t.strokeLineJoin){case"bevel":ee(J,Z,U);break;case"round":B(J,Z),J?Q(H,T,C,U,0):Q(H,w,I,U,1);break;case"miter":case"miter-clip":default:const ne=k*t.strokeMiterLimit/v;if(ne<1)if(t.strokeLineJoin!=="miter-clip"){ee(J,Z,U);break}else B(J,Z),J?(g.subVectors(M,T).multiplyScalar(ne).add(T),_.subVectors(M,C).multiplyScalar(ne).add(C),A(T,U,0),A(g,U,0),A(H,U,.5),A(H,U,.5),A(g,U,0),A(_,U,0),A(H,U,.5),A(_,U,0),A(C,U,0)):(g.subVectors(M,I).multiplyScalar(ne).add(I),_.subVectors(M,w).multiplyScalar(ne).add(w),A(I,U,1),A(g,U,1),A(H,U,.5),A(H,U,.5),A(g,U,1),A(_,U,1),A(H,U,.5),A(_,U,1),A(w,U,1));else Z?(J?(A(m,G,1),A(d,G,0),A(M,U,0),A(m,G,1),A(M,U,0),A(F,U,1)):(A(m,G,1),A(d,G,0),A(M,U,1),A(d,G,0),A(F,U,0),A(M,U,1)),J?C.copy(M):w.copy(M)):J?(A(T,U,0),A(M,U,0),A(H,U,.5),A(H,U,.5),A(M,U,0),A(C,U,0)):(A(I,U,1),A(M,U,1),A(H,U,.5),A(H,U,.5),A(M,U,1),A(w,U,1)),re=!0;break}}else le()}else le();!V&&W===S-1&&K(e[0],E,x,J,!0,G),G=U,z=H,d.copy(C),m.copy(w)}if(!V)K(H,T,I,J,!1,U);else if(Z&&s){let W=M,X=F;ce!==J&&(W=F,X=M),J?(re||ce)&&(X.toArray(s,0*3),X.toArray(s,3*3),re&&W.toArray(s,1*3)):(re||!ce)&&(X.toArray(s,1*3),X.toArray(s,3*3),re&&W.toArray(s,0*3))}return _e;function P(W,X,ie){return ie.subVectors(X,W),ie.set(-ie.y,ie.x).normalize()}function A(W,X,ie){s&&(s[L]=W.x,s[L+1]=W.y,s[L+2]=0,o&&(o[L]=0,o[L+1]=0,o[L+2]=1),L+=3,a&&(a[N]=X,a[N+1]=ie,N+=2)),_e+=3}function Q(W,X,ie,R,v){c.copy(X).sub(W).normalize(),u.copy(ie).sub(W).normalize();let b=Math.PI;const j=c.dot(u);Math.abs(j)<1&&(b=Math.abs(Math.acos(j))),b/=n,h.copy(X);for(let ne=0,fe=n-1;ne<fe;ne++)f.copy(h).rotateAround(W,b),A(h,R,v),A(f,R,v),A(W,R,.5),h.copy(f);A(f,R,v),A(ie,R,v),A(W,R,.5)}function le(){A(m,G,1),A(d,G,0),A(T,U,0),A(m,G,1),A(T,U,0),A(I,U,1)}function ee(W,X,ie){X?W?(A(m,G,1),A(d,G,0),A(T,U,0),A(m,G,1),A(T,U,0),A(F,U,1),A(T,ie,0),A(C,ie,0),A(F,ie,.5)):(A(m,G,1),A(d,G,0),A(I,U,1),A(d,G,0),A(F,U,0),A(I,U,1),A(I,ie,1),A(F,ie,0),A(w,ie,1)):W?(A(T,ie,0),A(C,ie,0),A(H,ie,.5)):(A(I,ie,1),A(w,ie,0),A(H,ie,.5))}function B(W,X){X&&(W?(A(m,G,1),A(d,G,0),A(T,U,0),A(m,G,1),A(T,U,0),A(F,U,1),A(T,G,0),A(H,U,.5),A(F,U,1),A(H,U,.5),A(C,G,0),A(F,U,1)):(A(m,G,1),A(d,G,0),A(I,U,1),A(d,G,0),A(F,U,0),A(I,U,1),A(I,G,1),A(F,U,0),A(H,U,.5),A(H,U,.5),A(F,U,0),A(w,G,1)))}function K(W,X,ie,R,v,b){switch(t.strokeLineCap){case"round":v?Q(W,ie,X,b,.5):Q(W,X,ie,b,.5);break;case"square":if(v)c.subVectors(X,W),u.set(c.y,-c.x),h.addVectors(c,u).add(W),f.subVectors(u,c).add(W),R?(h.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(h.toArray(s,1*3),a[3*2+1]===1?f.toArray(s,3*3):h.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(ie,W),u.set(c.y,-c.x),h.addVectors(c,u).add(W),f.subVectors(u,c).add(W);const j=s.length;R?(h.toArray(s,j-1*3),f.toArray(s,j-2*3),f.toArray(s,j-4*3)):(f.toArray(s,j-2*3),h.toArray(s,j-1*3),f.toArray(s,j-4*3))}break}}function Y(W){let X=!1;for(let R=1,v=W.length-1;R<v;R++)if(W[R].distanceTo(W[R+1])<i){X=!0;break}if(!X)return W;const ie=[];ie.push(W[0]);for(let R=1,v=W.length-1;R<v;R++)W[R].distanceTo(W[R+1])>=i&&ie.push(W[R]);return ie.push(W[W.length-1]),ie}}}const du={type:"change"},ga={type:"start"},pu={type:"end"},$s=new Qu,mu=new Zn,sx=Math.cos(70*ip.DEG2RAD);class ox extends Gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",xe),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(du),n.update(),s=i.NONE},this.update=function(){const y=new q,se=new Bi().setFromUnitVectors(e.up,new q(0,1,0)),pe=se.clone().invert(),ge=new q,Ee=new Bi,Ge=new q,ke=2*Math.PI;return function(mt=null){const Ye=n.object.position;y.copy(Ye).sub(n.target),y.applyQuaternion(se),a.setFromVector3(y),n.autoRotate&&s===i.NONE&&H(S(mt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ct=n.minAzimuthAngle,ut=n.maxAzimuthAngle;isFinite(ct)&&isFinite(ut)&&(ct<-Math.PI?ct+=ke:ct>Math.PI&&(ct-=ke),ut<-Math.PI?ut+=ke:ut>Math.PI&&(ut-=ke),ct<=ut?a.theta=Math.max(ct,Math.min(ut,a.theta)):a.theta=a.theta>(ct+ut)/2?Math.max(ct,a.theta):Math.min(ut,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let kt=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)a.radius=J(a.radius);else{const Zt=a.radius;a.radius=J(a.radius*c),kt=Zt!=a.radius}if(y.setFromSpherical(a),y.applyQuaternion(pe),Ye.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&C){let Zt=null;if(n.object.isPerspectiveCamera){const Gn=y.length();Zt=J(Gn*c);const Xi=Gn-Zt;n.object.position.addScaledVector(T,Xi),n.object.updateMatrixWorld(),kt=!!Xi}else if(n.object.isOrthographicCamera){const Gn=new q(I.x,I.y,0);Gn.unproject(n.object);const Xi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),kt=Xi!==n.object.zoom;const pi=new q(I.x,I.y,0);pi.unproject(n.object),n.object.position.sub(pi).add(Gn),n.object.updateMatrixWorld(),Zt=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Zt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Zt).add(n.object.position):($s.origin.copy(n.object.position),$s.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot($s.direction))<sx?e.lookAt(n.target):(mu.setFromNormalAndCoplanarPoint(n.object.up,n.target),$s.intersectPlane(mu,n.target))))}else if(n.object.isOrthographicCamera){const Zt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Zt!==n.object.zoom&&(n.object.updateProjectionMatrix(),kt=!0)}return c=1,C=!1,kt||ge.distanceToSquared(n.object.position)>o||8*(1-Ee.dot(n.object.quaternion))>o||Ge.distanceToSquared(n.target)>o?(n.dispatchEvent(du),ge.copy(n.object.position),Ee.copy(n.object.quaternion),Ge.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Te),n.domElement.removeEventListener("pointerdown",b),n.domElement.removeEventListener("pointercancel",ne),n.domElement.removeEventListener("wheel",de),n.domElement.removeEventListener("pointermove",j),n.domElement.removeEventListener("pointerup",ne),n.domElement.getRootNode().removeEventListener("keydown",Ae,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",xe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new vr,l=new vr;let c=1;const u=new q,h=new he,f=new he,p=new he,g=new he,_=new he,d=new he,m=new he,E=new he,x=new he,T=new q,I=new he;let C=!1;const w=[],F={};let M=!1;function S(y){return y!==null?2*Math.PI/60*n.autoRotateSpeed*y:2*Math.PI/60/60*n.autoRotateSpeed}function V(y){const se=Math.abs(y*.01);return Math.pow(.95,n.zoomSpeed*se)}function H(y){l.theta-=y}function z(y){l.phi-=y}const $=function(){const y=new q;return function(pe,ge){y.setFromMatrixColumn(ge,0),y.multiplyScalar(-pe),u.add(y)}}(),k=function(){const y=new q;return function(pe,ge){n.screenSpacePanning===!0?y.setFromMatrixColumn(ge,1):(y.setFromMatrixColumn(ge,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(pe),u.add(y)}}(),O=function(){const y=new q;return function(pe,ge){const Ee=n.domElement;if(n.object.isPerspectiveCamera){const Ge=n.object.position;y.copy(Ge).sub(n.target);let ke=y.length();ke*=Math.tan(n.object.fov/2*Math.PI/180),$(2*pe*ke/Ee.clientHeight,n.object.matrix),k(2*ge*ke/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(pe*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),k(ge*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(y,se){if(!n.zoomToCursor)return;C=!0;const pe=n.domElement.getBoundingClientRect(),ge=y-pe.left,Ee=se-pe.top,Ge=pe.width,ke=pe.height;I.x=ge/Ge*2-1,I.y=-(Ee/ke)*2+1,T.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(y){return Math.max(n.minDistance,Math.min(n.maxDistance,y))}function re(y){h.set(y.clientX,y.clientY)}function ce(y){Z(y.clientX,y.clientX),m.set(y.clientX,y.clientY)}function _e(y){g.set(y.clientX,y.clientY)}function L(y){f.set(y.clientX,y.clientY),p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const se=n.domElement;H(2*Math.PI*p.x/se.clientHeight),z(2*Math.PI*p.y/se.clientHeight),h.copy(f),n.update()}function N(y){E.set(y.clientX,y.clientY),x.subVectors(E,m),x.y>0?G(V(x.y)):x.y<0&&U(V(x.y)),m.copy(E),n.update()}function P(y){_.set(y.clientX,y.clientY),d.subVectors(_,g).multiplyScalar(n.panSpeed),O(d.x,d.y),g.copy(_),n.update()}function A(y){Z(y.clientX,y.clientY),y.deltaY<0?U(V(y.deltaY)):y.deltaY>0&&G(V(y.deltaY)),n.update()}function Q(y){let se=!1;switch(y.code){case n.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),se=!0;break}se&&(y.preventDefault(),n.update())}function le(y){if(w.length===1)h.set(y.pageX,y.pageY);else{const se=qe(y),pe=.5*(y.pageX+se.x),ge=.5*(y.pageY+se.y);h.set(pe,ge)}}function ee(y){if(w.length===1)g.set(y.pageX,y.pageY);else{const se=qe(y),pe=.5*(y.pageX+se.x),ge=.5*(y.pageY+se.y);g.set(pe,ge)}}function B(y){const se=qe(y),pe=y.pageX-se.x,ge=y.pageY-se.y,Ee=Math.sqrt(pe*pe+ge*ge);m.set(0,Ee)}function K(y){n.enableZoom&&B(y),n.enablePan&&ee(y)}function Y(y){n.enableZoom&&B(y),n.enableRotate&&le(y)}function W(y){if(w.length==1)f.set(y.pageX,y.pageY);else{const pe=qe(y),ge=.5*(y.pageX+pe.x),Ee=.5*(y.pageY+pe.y);f.set(ge,Ee)}p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const se=n.domElement;H(2*Math.PI*p.x/se.clientHeight),z(2*Math.PI*p.y/se.clientHeight),h.copy(f)}function X(y){if(w.length===1)_.set(y.pageX,y.pageY);else{const se=qe(y),pe=.5*(y.pageX+se.x),ge=.5*(y.pageY+se.y);_.set(pe,ge)}d.subVectors(_,g).multiplyScalar(n.panSpeed),O(d.x,d.y),g.copy(_)}function ie(y){const se=qe(y),pe=y.pageX-se.x,ge=y.pageY-se.y,Ee=Math.sqrt(pe*pe+ge*ge);E.set(0,Ee),x.set(0,Math.pow(E.y/m.y,n.zoomSpeed)),G(x.y),m.copy(E);const Ge=(y.pageX+se.x)*.5,ke=(y.pageY+se.y)*.5;Z(Ge,ke)}function R(y){n.enableZoom&&ie(y),n.enablePan&&X(y)}function v(y){n.enableZoom&&ie(y),n.enableRotate&&W(y)}function b(y){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",j),n.domElement.addEventListener("pointerup",ne)),!We(y)&&(Be(y),y.pointerType==="touch"?Ce(y):fe(y)))}function j(y){n.enabled!==!1&&(y.pointerType==="touch"?Se(y):be(y))}function ne(y){switch(ze(y),w.length){case 0:n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",j),n.domElement.removeEventListener("pointerup",ne),n.dispatchEvent(pu),s=i.NONE;break;case 1:const se=w[0],pe=F[se];Ce({pointerId:se,pageX:pe.x,pageY:pe.y});break}}function fe(y){let se;switch(y.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case qi.DOLLY:if(n.enableZoom===!1)return;ce(y),s=i.DOLLY;break;case qi.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;_e(y),s=i.PAN}else{if(n.enableRotate===!1)return;re(y),s=i.ROTATE}break;case qi.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;re(y),s=i.ROTATE}else{if(n.enablePan===!1)return;_e(y),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ga)}function be(y){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;L(y);break;case i.DOLLY:if(n.enableZoom===!1)return;N(y);break;case i.PAN:if(n.enablePan===!1)return;P(y);break}}function de(y){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(y.preventDefault(),n.dispatchEvent(ga),A(Me(y)),n.dispatchEvent(pu))}function Me(y){const se=y.deltaMode,pe={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(se){case 1:pe.deltaY*=16;break;case 2:pe.deltaY*=100;break}return y.ctrlKey&&!M&&(pe.deltaY*=10),pe}function Ae(y){y.key==="Control"&&(M=!0,n.domElement.getRootNode().addEventListener("keyup",me,{passive:!0,capture:!0}))}function me(y){y.key==="Control"&&(M=!1,n.domElement.getRootNode().removeEventListener("keyup",me,{passive:!0,capture:!0}))}function xe(y){n.enabled===!1||n.enablePan===!1||Q(y)}function Ce(y){switch(Xe(y),w.length){case 1:switch(n.touches.ONE){case Yi.ROTATE:if(n.enableRotate===!1)return;le(y),s=i.TOUCH_ROTATE;break;case Yi.PAN:if(n.enablePan===!1)return;ee(y),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;K(y),s=i.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Y(y),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ga)}function Se(y){switch(Xe(y),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;W(y),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;X(y),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;R(y),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;v(y),n.update();break;default:s=i.NONE}}function Te(y){n.enabled!==!1&&y.preventDefault()}function Be(y){w.push(y.pointerId)}function ze(y){delete F[y.pointerId];for(let se=0;se<w.length;se++)if(w[se]==y.pointerId){w.splice(se,1);return}}function We(y){for(let se=0;se<w.length;se++)if(w[se]==y.pointerId)return!0;return!1}function Xe(y){let se=F[y.pointerId];se===void 0&&(se=new he,F[y.pointerId]=se),se.set(y.pageX,y.pageY)}function qe(y){const se=y.pointerId===w[0]?w[1]:w[0];return F[se]}n.domElement.addEventListener("contextmenu",Te),n.domElement.addEventListener("pointerdown",b),n.domElement.addEventListener("pointercancel",ne),n.domElement.addEventListener("wheel",de,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ae,{passive:!0,capture:!0}),this.update()}}function Qs(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new mn;let c=0;for(let u=0;u<r.length;++u){const h=r[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let f=0;f<r.length;++f){const p=r[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=r[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=_u(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][f]);const g=_u(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function _u(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){const u=r[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new dn(o,t,n);let l=0;for(let c=0;c<r.length;++c){const u=r[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){const _=u.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}class Th extends Mt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new he(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const hr=new q,gu=new tt,vu=new tt,xu=new q,yu=new q;class ax{constructor(e={}){const t=this;let n,i,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),gu.copy(g.matrixWorldInverse),vu.multiplyMatrices(g.projectionMatrix,gu),c(p,p,g),f(p)},this.setSize=function(p,g){n=p,i=g,s=n/2,o=i/2,l.style.width=p+"px",l.style.height=g+"px"};function c(p,g,_){if(p.isCSS2DObject){hr.setFromMatrixPosition(p.matrixWorld),hr.applyMatrix4(vu);const d=p.visible===!0&&hr.z>=-1&&hr.z<=1&&p.layers.test(_.layers)===!0;if(p.element.style.display=d===!0?"":"none",d===!0){p.onBeforeRender(t,g,_);const E=p.element;E.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(hr.x*s+s)+"px,"+(-hr.y*o+o)+"px)",E.parentNode!==l&&l.appendChild(E),p.onAfterRender(t,g,_)}const m={distanceToCameraSquared:u(_,p)};a.objects.set(p,m)}for(let d=0,m=p.children.length;d<m;d++)c(p.children[d],g,_)}function u(p,g){return xu.setFromMatrixPosition(p.matrixWorld),yu.setFromMatrixPosition(g.matrixWorld),xu.distanceToSquared(yu)}function h(p){const g=[];return p.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function f(p){const g=h(p).sort(function(d,m){if(d.renderOrder!==m.renderOrder)return m.renderOrder-d.renderOrder;const E=a.objects.get(d).distanceToCameraSquared,x=a.objects.get(m).distanceToCameraSquared;return E-x}),_=g.length;for(let d=0,m=g.length;d<m;d++)g[d].element.style.zIndex=_-d}}}var Pr=Object.freeze({Linear:Object.freeze({None:function(r){return r},In:function(r){return this.None(r)},Out:function(r){return this.None(r)},InOut:function(r){return this.None(r)}}),Quadratic:Object.freeze({In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}}),Cubic:Object.freeze({In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}}),Quartic:Object.freeze({In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}}),Quintic:Object.freeze({In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}}),Sinusoidal:Object.freeze({In:function(r){return 1-Math.sin((1-r)*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.sin(Math.PI*(.5-r)))}}),Exponential:Object.freeze({In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}}),Circular:Object.freeze({In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}}),Elastic:Object.freeze({In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(r){var e=1.70158;return r===1?1:r*r*((e+1)*r-e)},Out:function(r){var e=1.70158;return r===0?0:--r*r*((e+1)*r+e)+1},InOut:function(r){var e=2.5949095;return(r*=2)<1?.5*(r*r*((e+1)*r-e)):.5*((r-=2)*r*((e+1)*r+e)+2)}}),Bounce:Object.freeze({In:function(r){return 1-Pr.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?Pr.Bounce.In(r*2)*.5:Pr.Bounce.Out(r*2-1)*.5+.5}}),generatePow:function(r){return r===void 0&&(r=4),r=r<Number.EPSILON?Number.EPSILON:r,r=r>1e4?1e4:r,{In:function(e){return Math.pow(e,r)},Out:function(e){return 1-Math.pow(1-e,r)},InOut:function(e){return e<.5?Math.pow(e*2,r)/2:(1-Math.pow(2-e*2,r))/2+.5}}}}),yr=function(){return performance.now()},bh=function(){function r(){this._tweens={},this._tweensAddedDuringUpdate={}}return r.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},r.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},r.prototype.update=function(e,t){e===void 0&&(e=yr()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var s=this._tweens[n[i]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},r}(),Li={Linear:function(r,e){var t=r.length-1,n=t*e,i=Math.floor(n),s=Li.Utils.Linear;return e<0?s(r[0],r[1],n):e>1?s(r[t],r[t-1],t-n):s(r[i],r[i+1>t?t:i+1],n-i)},Bezier:function(r,e){for(var t=0,n=r.length-1,i=Math.pow,s=Li.Utils.Bernstein,o=0;o<=n;o++)t+=i(1-e,n-o)*i(e,o)*r[o]*s(n,o);return t},CatmullRom:function(r,e){var t=r.length-1,n=t*e,i=Math.floor(n),s=Li.Utils.CatmullRom;return r[0]===r[t]?(e<0&&(i=Math.floor(n=t*(1+e))),s(r[(i-1+t)%t],r[i],r[(i+1)%t],r[(i+2)%t],n-i)):e<0?r[0]-(s(r[0],r[0],r[1],r[1],-n)-r[0]):e>1?r[t]-(s(r[t],r[t],r[t-1],r[t-1],n-t)-r[t]):s(r[i?i-1:0],r[i],r[t<i+1?t:i+1],r[t<i+2?t:i+2],n-i)},Utils:{Linear:function(r,e,t){return(e-r)*t+r},Bernstein:function(r,e){var t=Li.Utils.Factorial;return t(r)/t(e)/t(r-e)},Factorial:function(){var r=[1];return function(e){var t=1;if(r[e])return r[e];for(var n=e;n>1;n--)t*=n;return r[e]=t,t}}(),CatmullRom:function(r,e,t,n,i){var s=(t-r)*.5,o=(n-e)*.5,a=i*i,l=i*a;return(2*e-2*t+s+o)*l+(-3*e+3*t-2*s-o)*a+s*i+e}}},dl=function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r}(),Oa=new bh,lx=function(){function r(e,t){t===void 0&&(t=Oa),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Pr.Linear.None,this._interpolationFunction=Li.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=dl.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.getDuration=function(){return this._duration},r.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},r.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},r.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},r.prototype.start=function(e,t){if(e===void 0&&(e=yr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var i={};for(var s in this._valuesEnd)i[s]=this._valuesEnd[s];this._valuesEnd=i}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},r.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},r.prototype._setupProperties=function(e,t,n,i,s){for(var o in n){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,u=!l&&Array.isArray(n[o]);if(!(c==="undefined"||c==="function")){if(u){var h=n[o];if(h.length===0)continue;for(var f=[a],p=0,g=h.length;p<g;p+=1){var _=this._handleRelativeValue(a,h[p]);if(isNaN(_)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(_)}u&&(n[o]=f)}if((c==="object"||l)&&a&&!u){t[o]=l?[]:{};var d=a;for(var m in d)t[o][m]=d[m];i[o]=l?[]:{};var h=n[o];if(!this._isDynamic){var E={};for(var m in h)E[m]=h[m];n[o]=h=E}this._setupProperties(d,t[o],h,i[o],s)}else(typeof t[o]>"u"||s)&&(t[o]=a),l||(t[o]*=1),u?i[o]=n[o].slice().reverse():i[o]=t[o]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},r.prototype.pause=function(e){return e===void 0&&(e=yr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},r.prototype.resume=function(e){return e===void 0&&(e=yr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},r.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},r.prototype.group=function(e){return e===void 0&&(e=Oa),this._group=e,this},r.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},r.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},r.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},r.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},r.prototype.easing=function(e){return e===void 0&&(e=Pr.Linear.None),this._easingFunction=e,this},r.prototype.interpolation=function(e){return e===void 0&&(e=Li.Linear),this._interpolationFunction=e,this},r.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},r.prototype.onStart=function(e){return this._onStartCallback=e,this},r.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},r.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},r.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},r.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},r.prototype.onStop=function(e){return this._onStopCallback=e,this},r.prototype.update=function(e,t){var n=this,i;if(e===void 0&&(e=yr()),t===void 0&&(t=!0),this._isPaused)return!0;var s,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,l=this._duration+((i=this._repeatDelayTime)!==null&&i!==void 0?i:this._delayTime),c=this._duration+this._repeat*l,u=function(){if(n._duration===0||a>c)return 1;var d=Math.trunc(a/l),m=a-d*l,E=Math.min(m/n._duration,1);return E===0&&a===n._duration?1:E},h=u(),f=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||a>=this._duration)if(this._repeat>0){var p=Math.min(Math.trunc((a-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=p);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*p,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,_=this._chainedTweens.length;g<_;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(e,t,n,i){for(var s in n)if(t[s]!==void 0){var o=t[s]||0,a=n[s],l=Array.isArray(e[s]),c=Array.isArray(a),u=!l&&c;u?e[s]=this._interpolationFunction(a,i):typeof a=="object"&&a?this._updateProperties(e[s],o,a,i):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*i))}},r.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},r.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},r}(),cx="23.1.1",ux=dl.nextId,Tn=Oa,hx=Tn.getAll.bind(Tn),fx=Tn.removeAll.bind(Tn),dx=Tn.add.bind(Tn),px=Tn.remove.bind(Tn),mx=Tn.update.bind(Tn),pl={Easing:Pr,Group:bh,Interpolation:Li,now:yr,Sequence:dl,nextId:ux,Tween:lx,VERSION:cx,getAll:hx,removeAll:fx,add:dx,remove:px,update:mx};function Un(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ah(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Br={duration:.5,overwrite:!1,delay:0},ml,wt,et,nn=1e8,Ze=1/nn,Ba=Math.PI*2,_x=Ba/4,gx=0,wh=Math.sqrt,vx=Math.cos,xx=Math.sin,St=function(e){return typeof e=="string"},ot=function(e){return typeof e=="function"},Bn=function(e){return typeof e=="number"},_l=function(e){return typeof e>"u"},bn=function(e){return typeof e=="object"},Ut=function(e){return e!==!1},gl=function(){return typeof window<"u"},eo=function(e){return ot(e)||St(e)},Rh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rt=Array.isArray,za=/(?:-?\.?\d|\.)+/gi,Ch=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,va=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ph=/[+-]=-?[.\d]+/,Lh=/[^,'"\[\]\s]+/gi,yx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,it,_n,ka,vl,Jt={},po={},Nh,Ih=function(e){return(po=ki(e,Jt))&&zt},xl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ds=function(e,t){return!t&&console.warn(e)},Dh=function(e,t){return e&&(Jt[e]=t)&&po&&(po[e]=t)||Jt},ps=function(){return 0},Sx={suppressEvents:!0,isStart:!0,kill:!1},no={suppressEvents:!0,kill:!1},Mx={suppressEvents:!0},yl={},si=[],Ha={},Uh,Wt={},xa={},Su=30,io=[],Sl="",Ml=function(e){var t=e[0],n,i;if(bn(t)||ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=io.length;i--&&!io[i].targetTest(t););n=io[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new of(e[i],n)))||e.splice(i,1);return e},Ii=function(e){return e._gsap||Ml(rn(e))[0]._gsap},Fh=function(e,t,n){return(n=e[t])&&ot(n)?e[t]():_l(n)&&e.getAttribute&&e.getAttribute(t)||n},Ft=function(e,t){return(e=e.split(",")).forEach(t)||e},lt=function(e){return Math.round(e*1e5)/1e5||0},xt=function(e){return Math.round(e*1e7)/1e7||0},Lr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ex=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},mo=function(){var e=si.length,t=si.slice(0),n,i;for(Ha={},si.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Oh=function(e,t,n,i){si.length&&!wt&&mo(),e.render(t,n,i||wt&&t<0&&(e._initted||e._startAt)),si.length&&!wt&&mo()},Bh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Lh).length<2?t:St(e)?e.trim():e},zh=function(e){return e},sn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Tx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ki=function(e,t){for(var n in t)e[n]=t[n];return e},Mu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=bn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},_o=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ss=function(e){var t=e.parent||it,n=e.keyframes?Tx(Rt(e.keyframes)):sn;if(Ut(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},bx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},kh=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ao=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ci=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Di=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ax=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ga=function(e,t,n,i){return e._startAt&&(wt?e._startAt.revert(no):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},wx=function r(e){return!e||e._ts&&r(e.parent)},Eu=function(e){return e._repeat?zr(e._tTime,e=e.duration()+e._rDelay)*e:0},zr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},go=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},wo=function(e){return e._end=xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ze)||0))},Ro=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),wo(e),n._dirty||Di(n,e)),e},Hh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=go(e.rawTime(),t),(!t._dur||Ts(0,t.totalDuration(),n)-t._tTime>Ze)&&t.render(n,!0)),Di(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ze}},xn=function(e,t,n,i){return t.parent&&ci(t),t._start=xt((Bn(n)?n:n||e!==it?Qt(e,n,t):e._time)+t._delay),t._end=xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),kh(e,t,"_first","_last",e._sort?"_start":0),Va(t)||(e._recent=t),i||Hh(e,t),e._ts<0&&Ro(e,e._tTime),e},Gh=function(e,t){return(Jt.ScrollTrigger||xl("scrollTrigger",t))&&Jt.ScrollTrigger.create(t,e)},Vh=function(e,t,n,i,s){if(Tl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Uh!==Xt.frame)return si.push(e),e._lazy=[s,i],1},Rx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Va=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Cx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Rx(e)&&!(!e._initted&&Va(e))||(e._ts<0||e._dp._ts<0)&&!Va(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ts(0,e._tDur,t),u=zr(l,a),e._yoyo&&u&1&&(o=1-o),u!==zr(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||wt||i||e._zTime===Ze||!t&&e._zTime){if(!e._initted&&Vh(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ze:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ga(e,t,n,!0),e._onUpdate&&!n&&Yt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Yt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ci(e,1),!n&&!wt&&(Yt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Px=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},kr=function(e,t,n,i){var s=e._repeat,o=xt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:xt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Ro(e,e._tTime=e._tDur*a),e.parent&&wo(e),n||Di(e.parent,e),e},Tu=function(e){return e instanceof Lt?Di(e):kr(e,e._dur)},Lx={_start:0,endTime:ps,totalDuration:ps},Qt=function r(e,t,n){var i=e.labels,s=e._recent||Lx,o=e.duration()>=nn?s.endTime(!1):e._dur,a,l,c;return St(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Rt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},os=function(e,t,n){var i=Bn(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ut(l.vars.inherit)&&l.parent;o.immediateRender=Ut(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ft(t[0],o,t[s+1])},di=function(e,t){return e||e===0?t(e):t},Ts=function(e,t,n){return n<e?e:n>t?t:n},At=function(e,t){return!St(e)||!(t=yx.exec(e))?"":t[1]},Nx=function(e,t,n){return di(n,function(i){return Ts(e,t,i)})},Wa=[].slice,Wh=function(e,t){return e&&bn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&bn(e[0]))&&!e.nodeType&&e!==_n},Ix=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return St(i)&&!t||Wh(i,1)?(s=n).push.apply(s,rn(i)):n.push(i)})||n},rn=function(e,t,n){return et&&!t&&et.selector?et.selector(e):St(e)&&!n&&(ka||!Hr())?Wa.call((t||vl).querySelectorAll(e),0):Rt(e)?Ix(e,n):Wh(e)?Wa.call(e,0):e?[e]:[]},Xa=function(e){return e=rn(e)[0]||ds("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return rn(t,n.querySelectorAll?n:n===e?ds("Invalid scope")||vl.createElement("div"):e)}},Xh=function(e){return e.sort(function(){return .5-Math.random()})},qh=function(e){if(ot(e))return e;var t=bn(e)?e:{each:e},n=Ui(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return St(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,p,g){var _=(g||t).length,d=o[_],m,E,x,T,I,C,w,F,M;if(!d){if(M=t.grid==="auto"?0:(t.grid||[1,nn])[1],!M){for(w=-nn;w<(w=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(d=o[_]=[],m=l?Math.min(M,_)*u-.5:i%M,E=M===nn?0:l?_*h/M-.5:i/M|0,w=0,F=nn,C=0;C<_;C++)x=C%M-m,T=E-(C/M|0),d[C]=I=c?Math.abs(c==="y"?T:x):wh(x*x+T*T),I>w&&(w=I),I<F&&(F=I);i==="random"&&Xh(d),d.max=w-F,d.min=F,d.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),d.b=_<0?s-_:s,d.u=At(t.amount||t.each)||0,n=n&&_<0?nf(n):n}return _=(d[f]-d.min)/d.max||0,xt(d.b+(n?n(_):_)*d.v)+d.u}},qa=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Bn(n)?0:At(n))}},Yh=function(e,t){var n=Rt(e),i,s;return!n&&bn(e)&&(i=n=e.radius||nn,e.values?(e=rn(e.values),(s=!Bn(e[0]))&&(i*=i)):e=qa(e.increment)),di(t,n?ot(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=nn,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Bn(o)?u:u+At(o)}:qa(e))},jh=function(e,t,n,i){return di(Rt(e)?!t:n===!0?!!(n=0):!i,function(){return Rt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Dx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Ux=function(e,t){return function(n){return e(parseFloat(n))+(t||At(n))}},Fx=function(e,t,n){return Zh(e,t,0,1,n)},Jh=function(e,t,n){return di(n,function(i){return e[~~t(i)]})},Ox=function r(e,t,n){var i=t-e;return Rt(e)?Jh(e,r(0,e.length),t):di(n,function(s){return(i+(s-e)%i)%i+e})},Bx=function r(e,t,n){var i=t-e,s=i*2;return Rt(e)?Jh(e,r(0,e.length-1),t):di(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ms=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Lh:za),n+=e.substr(t,i-t)+jh(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Zh=function(e,t,n,i,s){var o=t-e,a=i-n;return di(s,function(l){return n+((l-e)/o*a||0)})},zx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=St(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Rt(e)&&!Rt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=ki(Rt(e)?[]:{},e));if(!u){for(l in t)El.call(a,e,l,"get",t[l]);s=function(g){return wl(g,a)||(o?e.p:e)}}}return di(n,s)},bu=function(e,t,n){var i=e.labels,s=nn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Yt=function(e,t,n){var i=e.vars,s=i[t],o=et,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&si.length&&mo(),a&&(et=a),u=l?s.apply(c,l):s.call(c),et=o,u},Qr=function(e){return ci(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wt),e.progress()<1&&Yt(e,"onInterrupt"),e},Mr,Kh=[],$h=function(e){if(e)if(e=!e.name&&e.default||e,gl()||e.headless){var t=e.name,n=ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ps,render:wl,add:El,kill:ty,modifier:ey,rawVars:0},o={targetTest:0,get:0,getSetter:Al,aliases:{},register:0};if(Hr(),e!==i){if(Wt[t])return;sn(i,sn(_o(e,s),o)),ki(i.prototype,ki(s,_o(e,o))),Wt[i.prop=t]=i,e.targetTest&&(io.push(i),yl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Dh(t,i),e.register&&e.register(zt,i,Ot)}else Kh.push(e)},Je=255,es={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},ya=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Je+.5|0},Qh=function(e,t,n){var i=e?Bn(e)?[e>>16,e>>8&Je,e&Je]:0:es.black,s,o,a,l,c,u,h,f,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),es[e])i=es[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Je,i&Je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Je,e&Je]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(za),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=ya(l+1/3,s,o),i[1]=ya(l,s,o),i[2]=ya(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Ch),n&&i.length<4&&(i[3]=1),i}else i=e.match(za)||es.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Je,o=i[1]/Je,a=i[2]/Je,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ef=function(e){var t=[],n=[],i=-1;return e.split(oi).forEach(function(s){var o=s.match(Sr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Au=function(e,t,n){var i="",s=(e+i).match(oi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Qh(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=ef(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(oi,"1").split(Sr),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(oi),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},oi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in es)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),kx=/hsl[a]?\(/,tf=function(e){var t=e.join(" "),n;if(oi.lastIndex=0,oi.test(t))return n=kx.test(t),e[1]=Au(e[1],n),e[0]=Au(e[0],n,ef(e[1])),!0},_s,Xt=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,p,g=function _(d){var m=r()-i,E=d===!0,x,T,I,C;if((m>e||m<0)&&(n+=m-t),i+=m,I=i-n,x=I-o,(x>0||E)&&(C=++h.frame,f=I-h.time*1e3,h.time=I=I/1e3,o+=x+(x>=s?4:s-x),T=1),E||(l=c(_)),T)for(p=0;p<a.length;p++)a[p](I,f,C,d)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return f/(1e3/(d||60))},wake:function(){Nh&&(!ka&&gl()&&(_n=ka=window,vl=_n.document||{},Jt.gsap=zt,(_n.gsapVersions||(_n.gsapVersions=[])).push(zt.version),Ih(po||_n.GreenSockGlobals||!_n.gsap&&_n||{}),Kh.forEach($h)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(d){return setTimeout(d,o-h.time*1e3+1|0)},_s=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),_s=0,c=ps},lagSmoothing:function(d,m){e=d||1/0,t=Math.min(m||33,e)},fps:function(d){s=1e3/(d||240),o=h.time*1e3+s},add:function(d,m,E){var x=m?function(T,I,C,w){d(T,I,C,w),h.remove(x)}:d;return h.remove(d),a[E?"unshift":"push"](x),Hr(),x},remove:function(d,m){~(m=a.indexOf(d))&&a.splice(m,1)&&p>=m&&p--},_listeners:a},h}(),Hr=function(){return!_s&&Xt.wake()},Ve={},Hx=/^[\d.\-M][\d.\-,\s]/,Gx=/["']/g,Vx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Gx,"").trim():+c,i=l.substr(a+1).trim();return t},Wx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Xx=function(e){var t=(e+"").split("("),n=Ve[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Vx(t[1])]:Wx(e).split(",").map(Bh)):Ve._CE&&Hx.test(e)?Ve._CE("",e):n},nf=function(e){return function(t){return 1-e(1-t)}},rf=function r(e,t){for(var n=e._first,i;n;)n instanceof Lt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ui=function(e,t){return e&&(ot(e)?e:Ve[e]||Xx(e))||t},Wi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Ft(e,function(a){Ve[a]=Jt[a]=s,Ve[o=a.toLowerCase()]=n;for(var l in s)Ve[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ve[a+"."+l]=s[l]}),s},sf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Sa=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Ba*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*xx((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:sf(a);return s=Ba/s,l.config=function(c,u){return r(e,c,u)},l},Ma=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:sf(n);return i.config=function(s){return r(e,s)},i};Ft("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Wi(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;Wi("Elastic",Sa("in"),Sa("out"),Sa());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Wi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Wi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Wi("Circ",function(r){return-(wh(1-r*r)-1)});Wi("Sine",function(r){return r===1?1:-vx(r*_x)+1});Wi("Back",Ma("in"),Ma("out"),Ma());Ve.SteppedEase=Ve.steps=Jt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Ze;return function(a){return((i*Ts(0,o,a)|0)+s)*n}}};Br.ease=Ve["quad.out"];Ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Sl+=r+","+r+"Params,"});var of=function(e,t){this.id=gx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Fh,this.set=t?t.getSetter:Al},gs=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,kr(this,+t.duration,1,1),this.data=t.data,et&&(this._ctx=et,et.data.push(this)),_s||Xt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,kr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Hr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ro(this,n),!s._dp||s.parent||Hh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ze||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Oh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Eu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Eu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?zr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ze?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?go(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ze?0:this._rts,this.totalTime(Ts(-Math.abs(this._delay),this._tDur,s),i!==!1),wo(this),Ax(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ze&&(this._tTime-=Ze)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ut(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?go(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Mx);var i=wt;return wt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Tu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Tu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Qt(this,n),Ut(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ut(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ze:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ze,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ze)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=ot(n)?n:zh,a=function(){var c=i.then;i.then=null,ot(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Qr(this)},r}();sn(gs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ze,_prom:0,_ps:!1,_rts:1});var Lt=function(r){Ah(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ut(n.sortChildren),it&&xn(n.parent||it,Un(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Gh(Un(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return os(0,arguments,this),this},t.from=function(i,s,o){return os(1,arguments,this),this},t.fromTo=function(i,s,o,a){return os(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ss(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ft(i,s,Qt(this,o),1),this},t.call=function(i,s,o){return xn(this,ft.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ft(i,o,Qt(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ss(o).immediateRender=Ut(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ss(a).immediateRender=Ut(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:xt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,_,d,m,E,x,T,I,C,w;if(this!==it&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,T=this._start,x=this._ts,m=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,d=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(d*100+i,s,o);if(f=xt(u%d),u===l?(_=this._repeat,f=c):(_=~~(u/d),_&&_===u/d&&(f=c,_--),f>c&&(f=c)),I=zr(this._tTime,d),!a&&this._tTime&&I!==_&&this._tTime-I*d-this._dur<=0&&(I=_),C&&_&1&&(f=c-f,w=1),_!==I&&!this._lock){var F=C&&I&1,M=F===(C&&_&1);if(_<I&&(F=!F),a=F?0:u%c?c:u,this._lock=1,this.render(a||(w?0:xt(_*d)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Yt(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=F?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;rf(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Px(this,xt(a),xt(f)),E&&(u-=f-(f=E._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(Yt(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&E!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!m){E=0,g&&(u+=this._zTime=-Ze);break}}p=g}else{p=this._last;for(var S=i<0?i:f;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&E!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||wt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!m){E=0,g&&(u+=this._zTime=S?-Ze:Ze);break}}p=g}}if(E&&!s&&(this.pause(),E.render(f>=a?0:-Ze)._zTime=f>=a?1:-1,this._ts))return this._start=T,wo(this),this.render(i,s,o);this._onUpdate&&!s&&Yt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(T===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ci(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Yt(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Bn(s)||(s=Qt(this,s,i)),!(i instanceof gs)){if(Rt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(St(i))return this.addLabel(i,s);if(ot(i))i=ft.delayedCall(0,i);else return this}return this!==i?xn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-nn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ft?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return St(i)?this.removeLabel(i):ot(i)?this.killTweensOf(i):(Ao(this,i),i===this._recent&&(this._recent=this._last),Di(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xt(Xt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Qt(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=ft.delayedCall(0,s||ps,o);return a.data="isPause",this._hasPause=1,xn(this,a,Qt(this,i))},t.removePause=function(i){var s=this._first;for(i=Qt(this,i);s;)s._start===i&&s.data==="isPause"&&ci(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Qn!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=rn(i),l=this._first,c=Bn(s),u;l;)l instanceof ft?Ex(l._targets,a)&&(c?(!Qn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Qt(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=ft.to(o,sn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ze,onStart:function(){if(o.pause(),!p){var d=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==d&&kr(g,d,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,sn({startAt:{time:Qt(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),bu(this,Qt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),bu(this,Qt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ze)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Di(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Di(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=nn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;kr(o,o===it&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(it._ts&&(Oh(it,go(i,it)),Uh=Xt.frame),Xt.frame>=Su){Su+=jt.autoSleep||120;var s=it._first;if((!s||!s._ts)&&jt.autoSleep&&Xt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xt.sleep()}}},e}(gs);sn(Lt.prototype,{_lock:0,_hasPause:0,_forcing:0});var qx=function(e,t,n,i,s,o,a){var l=new Ot(this._pt,e,t,0,1,ff,null,s),c=0,u=0,h,f,p,g,_,d,m,E;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ms(i)),o&&(E=[n,i],o(E,e,t),n=E[0],i=E[1]),f=n.match(va)||[];h=va.exec(i);)g=h[0],_=i.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(d=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:d,c:g.charAt(1)==="="?Lr(d,g)-d:parseFloat(g)-d,m:p&&p<4?Math.round:0},c=va.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Ph.test(i)||m)&&(l.e=0),this._pt=l,l},El=function(e,t,n,i,s,o,a,l,c,u){ot(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:ot(h)?c?e[t.indexOf("set")||!ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=ot(h)?c?Kx:uf:bl,g;if(St(i)&&(~i.indexOf("random(")&&(i=ms(i)),i.charAt(1)==="="&&(g=Lr(f,i)+(At(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ya)return!isNaN(f*i)&&i!==""?(g=new Ot(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Qx:hf,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&xl(t,i),qx.call(this,e,t,f,i,p,l||jt.stringFilter,c))},Yx=function(e,t,n,i,s){if(ot(e)&&(e=as(e,s,t,n,i)),!bn(e)||e.style&&e.nodeType||Rt(e)||Rh(e))return St(e)?as(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=as(e[a],s,t,n,i);return o},af=function(e,t,n,i,s,o){var a,l,c,u;if(Wt[e]&&(a=new Wt[e]).init(s,a.rawVars?t[e]:Yx(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Ot(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Mr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Qn,Ya,Tl=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,p=i.autoRevert,g=e._dur,_=e._startAt,d=e._targets,m=e.parent,E=m&&m.data==="nested"?m.vars.targets:d,x=e._overwrite==="auto"&&!ml,T=e.timeline,I,C,w,F,M,S,V,H,z,$,k,O,G;if(T&&(!f||!s)&&(s="none"),e._ease=Ui(s,Br.ease),e._yEase=h?nf(Ui(h===!0?s:h,Br.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!T&&!!i.runBackwards,!T||f&&!i.stagger){if(H=d[0]?Ii(d[0]).harness:0,O=H&&i[H.prop],I=_o(i,yl),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!p?_.render(-1,!0):_.revert(u&&g?no:Sx),_._lazy=0),o){if(ci(e._startAt=ft.set(d,sn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Ut(l),startAt:null,delay:0,onUpdate:c&&function(){return Yt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wt||!a&&!p)&&e._startAt.revert(no),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),w=sn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ut(l),immediateRender:a,stagger:0,parent:m},I),O&&(w[H.prop]=O),ci(e._startAt=ft.set(d,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wt?e._startAt.revert(no):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Ze,Ze);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ut(l)||l&&!g,C=0;C<d.length;C++){if(M=d[C],V=M._gsap||Ml(d)[C]._gsap,e._ptLookup[C]=$={},Ha[V.id]&&si.length&&mo(),k=E===d?C:E.indexOf(M),H&&(z=new H).init(M,O||I,e,k,E)!==!1&&(e._pt=F=new Ot(e._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(U){$[U]=F}),z.priority&&(S=1)),!H||O)for(w in I)Wt[w]&&(z=af(w,I,e,k,M,E))?z.priority&&(S=1):$[w]=F=El.call(e,M,w,"get",I[w],k,E,0,i.stringFilter);e._op&&e._op[C]&&e.kill(M,e._op[C]),x&&e._pt&&(Qn=e,it.killTweensOf(M,$,e.globalTime(t)),G=!e.parent,Qn=0),e._pt&&l&&(Ha[V.id]=1)}S&&df(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,f&&t<=0&&T.render(nn,!0,!0)},jx=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,p;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(u=f[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ya=1,e.vars[t]="+=0",Tl(e,a),Ya=0,l?ds(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=lt(n)+At(h.e)),h.b&&(h.b=u.s+At(h.b))},Jx=function(e,t){var n=e[0]?Ii(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ki({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Zx=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Rt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},as=function(e,t,n,i,s){return ot(e)?e.call(t,n,i,s):St(e)&&~e.indexOf("random(")?ms(e):e},lf=Sl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",cf={};Ft(lf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return cf[r]=1});var ft=function(r){Ah(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ss(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,d=l.scrollTrigger,m=l.yoyoEase,E=i.parent||it,x=(Rt(n)||Rh(n)?Bn(n[0]):"length"in i)?[n]:rn(n),T,I,C,w,F,M,S,V;if(a._targets=x.length?Ml(x):ds("GSAP target "+n+" not found. https://gsap.com",!jt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||eo(c)||eo(u)){if(i=a.vars,T=a.timeline=new Lt({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:x}),T.kill(),T.parent=T._dp=Un(a),T._start=0,f||eo(c)||eo(u)){if(w=x.length,S=f&&qh(f),bn(f))for(F in f)~lf.indexOf(F)&&(V||(V={}),V[F]=f[F]);for(I=0;I<w;I++)C=_o(i,cf),C.stagger=0,m&&(C.yoyoEase=m),V&&ki(C,V),M=x[I],C.duration=+as(c,Un(a),I,M,x),C.delay=(+as(u,Un(a),I,M,x)||0)-a._delay,!f&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),T.to(M,C,S?S(I,M,x):0),T._ease=Ve.none;T.duration()?c=u=0:a.timeline=0}else if(g){ss(sn(T.vars.defaults,{ease:"none"})),T._ease=Ui(g.ease||i.ease||"none");var H=0,z,$,k;if(Rt(g))g.forEach(function(O){return T.to(x,O,">")}),T.duration();else{C={};for(F in g)F==="ease"||F==="easeEach"||Zx(F,g[F],C,g.easeEach);for(F in C)for(z=C[F].sort(function(O,G){return O.t-G.t}),H=0,I=0;I<z.length;I++)$=z[I],k={ease:$.e,duration:($.t-(I?z[I-1].t:0))/100*c},k[F]=$.v,T.to(x,k,H),H+=k.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return p===!0&&!ml&&(Qn=Un(a),it.killTweensOf(x),Qn=0),xn(E,Un(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===xt(E._time)&&Ut(h)&&wx(Un(a))&&E.data!=="nested")&&(a._tTime=-Ze,a.render(Math.max(0,-u)||0)),d&&Gh(Un(a),d),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ze&&!u?l:i<Ze?0:i,f,p,g,_,d,m,E,x,T;if(!c)Cx(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=xt(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===xt(h/_)&&(f=c,g--),f>c&&(f=c)),m=this._yoyo&&g&1,m&&(T=this._yEase,f=c-f),d=zr(this._tTime,_),f===a&&!o&&this._initted&&g===d)return this._tTime=h,this;g!==d&&(x&&this._yEase&&rf(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(xt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Vh(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==d))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(T||this._ease)(f/c),this._from&&(this.ratio=E=1-E),f&&!a&&!s&&!g&&(Yt(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(E,p.d),p=p._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ga(this,i,s,o),Yt(this,"onUpdate")),this._repeat&&g!==d&&this.vars.onRepeat&&!s&&this.parent&&Yt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ga(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ci(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Yt(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){_s||Xt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Tl(this,c),u=this._ease(c/this._dur),jx(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Ro(this,0),this.parent||kh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Qr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qn&&Qn.vars.overwrite!==!0)._first||Qr(this),this.parent&&o!==this.timeline.totalDuration()&&kr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?rn(i):a,c=this._ptLookup,u=this._pt,h,f,p,g,_,d,m;if((!s||s==="all")&&bx(a,l))return s==="all"&&(this._pt=0),Qr(this);for(h=this._op=this._op||[],s!=="all"&&(St(s)&&(_={},Ft(s,function(E){return _[E]=1}),s=_),s=Jx(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,g=f,p={}):(p=h[m]=h[m]||{},g=s);for(_ in g)d=f&&f[_],d&&((!("kill"in d.d)||d.d.kill(_)===!0)&&Ao(this,d,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Qr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return os(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return os(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return it.killTweensOf(i,s,o)},e}(gs);sn(ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ft("staggerTo,staggerFrom,staggerFromTo",function(r){ft[r]=function(){var e=new Lt,t=Wa.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var bl=function(e,t,n){return e[t]=n},uf=function(e,t,n){return e[t](n)},Kx=function(e,t,n,i){return e[t](i.fp,n)},$x=function(e,t,n){return e.setAttribute(t,n)},Al=function(e,t){return ot(e[t])?uf:_l(e[t])&&e.setAttribute?$x:bl},hf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Qx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ff=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},wl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ey=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},ty=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ao(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ny=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},df=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Ot=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||hf,this.d=l||this,this.set=c||bl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ny,this.m=n,this.mt=s,this.tween=i},r}();Ft(Sl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return yl[r]=1});Jt.TweenMax=Jt.TweenLite=ft;Jt.TimelineLite=Jt.TimelineMax=Lt;it=new Lt({sortChildren:!1,defaults:Br,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jt.stringFilter=tf;var Fi=[],ro={},iy=[],wu=0,ry=0,Ea=function(e){return(ro[e]||iy).map(function(t){return t()})},ja=function(){var e=Date.now(),t=[];e-wu>2&&(Ea("matchMediaInit"),Fi.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=_n.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ea("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),wu=e,Ea("matchMedia"))},pf=function(){function r(t,n){this.selector=n&&Xa(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ry++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ot(n)&&(s=i,i=n,n=ot);var o=this,a=function(){var c=et,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Xa(s)),et=o,h=i.apply(o,arguments),ot(h)&&o._r.push(h),et=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===ot?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=et;et=null,n(this),et=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ft&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Lt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ft)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Fi.length;o--;)Fi[o].id===this.id&&Fi.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),sy=function(){function r(t){this.contexts=[],this.scope=t,et&&et.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){bn(n)||(n={matches:n});var o=new pf(0,s||this.scope),a=o.conditions={},l,c,u;et&&!o.selector&&(o.selector=et.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=_n.matchMedia(n[c]),l&&(Fi.indexOf(o)<0&&Fi.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ja):l.addEventListener("change",ja)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),vo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return $h(i)})},timeline:function(e){return new Lt(e)},getTweensOf:function(e,t){return it.getTweensOf(e,t)},getProperty:function(e,t,n,i){St(e)&&(e=rn(e)[0]);var s=Ii(e||{}).get,o=n?zh:Bh;return n==="native"&&(n=""),e&&(t?o((Wt[t]&&Wt[t].get||s)(e,t,n,i)):function(a,l,c){return o((Wt[a]&&Wt[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=rn(e),e.length>1){var i=e.map(function(u){return zt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Wt[t],a=Ii(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Mr._pt=0,h.init(e,n?u+n:u,Mr,0,[e]),h.render(1,h),Mr._pt&&wl(1,Mr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=zt.to(e,ki((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return it.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ui(e.ease,Br.ease)),Mu(Br,e||{})},config:function(e){return Mu(jt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Wt[a]&&!Jt[a]&&ds(t+" effect requires "+a+" plugin.")}),xa[t]=function(a,l,c){return n(rn(a),sn(l||{},s),c)},o&&(Lt.prototype[t]=function(a,l,c){return this.add(xa[t](a,bn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ve[e]=Ui(t)},parseEase:function(e,t){return arguments.length?Ui(e,t):Ve},getById:function(e){return it.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Lt(e),i,s;for(n.smoothChildTiming=Ut(e.smoothChildTiming),it.remove(n),n._dp=0,n._time=n._tTime=it._time,i=it._first;i;)s=i._next,(t||!(!i._dur&&i instanceof ft&&i.vars.onComplete===i._targets[0]))&&xn(n,i,i._start-i._delay),i=s;return xn(it,n,0),n},context:function(e,t){return e?new pf(e,t):et},matchMedia:function(e){return new sy(e)},matchMediaRefresh:function(){return Fi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ja()},addEventListener:function(e,t){var n=ro[e]||(ro[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ro[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ox,wrapYoyo:Bx,distribute:qh,random:jh,snap:Yh,normalize:Fx,getUnit:At,clamp:Nx,splitColor:Qh,toArray:rn,selector:Xa,mapRange:Zh,pipe:Dx,unitize:Ux,interpolate:zx,shuffle:Xh},install:Ih,effects:xa,ticker:Xt,updateRoot:Lt.updateRoot,plugins:Wt,globalTimeline:it,core:{PropTween:Ot,globals:Dh,Tween:ft,Timeline:Lt,Animation:gs,getCache:Ii,_removeLinkedListItem:Ao,reverting:function(){return wt},context:function(e){return e&&et&&(et.data.push(e),e._ctx=et),et},suppressOverwrites:function(e){return ml=e}}};Ft("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return vo[r]=ft[r]});Xt.add(Lt.updateRoot);Mr=vo.to({},{duration:0});var oy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ay=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=oy(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Ta=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(St(s)&&(l={},Ft(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ay(a,s)}}}},zt=vo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)wt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ta("roundProps",qa),Ta("modifiers"),Ta("snap",Yh))||vo;ft.version=Lt.version=zt.version="3.12.5";Nh=1;gl()&&Hr();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ru,ei,Nr,Rl,Ni,Cu,Cl,ly=function(){return typeof window<"u"},zn={},Ai=180/Math.PI,Ir=Math.PI/180,fr=Math.atan2,Pu=1e8,Pl=/([A-Z])/g,cy=/(left|right|width|margin|padding|x)/i,uy=/[\s,\(]\S/,Sn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ja=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},dy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},mf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_f=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},py=function(e,t,n){return e.style[t]=n},my=function(e,t,n){return e.style.setProperty(t,n)},_y=function(e,t,n){return e._gsap[t]=n},gy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},vy=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},xy=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},st="transform",Bt=st+"Origin",yy=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in zn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Sn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Fn(i,a)}):this.tfm[e]=o.x?o[e]:Fn(i,e),e===Bt&&(this.tfm.zOrigin=o.zOrigin);else return Sn.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(st)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Bt,t,"")),e=st}(s||t)&&this.props.push(e,t,s[e])},gf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Sy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Pl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Cl(),(!s||!s.isStart)&&!n[st]&&(gf(n),i.zOrigin&&n[Bt]&&(n[Bt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},vf=function(e,t){var n={target:e,props:[],revert:Sy,save:yy};return e._gsap||zt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},xf,Za=function(e,t){var n=ei.createElementNS?ei.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ei.createElement(e);return n&&n.style?n:ei.createElement(e)},En=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Pl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Gr(t)||t,1)||""},Lu="O,Moz,ms,Ms,Webkit".split(","),Gr=function(e,t,n){var i=t||Ni,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Lu[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Lu[o]:"")+e},Ka=function(){ly()&&window.document&&(Ru=window,ei=Ru.document,Nr=ei.documentElement,Ni=Za("div")||{style:{}},Za("div"),st=Gr(st),Bt=st+"Origin",Ni.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xf=!!Gr("perspective"),Cl=zt.core.reverting,Rl=1)},ba=function r(e){var t=Za("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Nr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Nr.removeChild(t),this.style.cssText=s,o},Nu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},yf=function(e){var t;try{t=e.getBBox()}catch{t=ba.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ba||(t=ba.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Nu(e,["x","cx","x1"])||0,y:+Nu(e,["y","cy","y1"])||0,width:0,height:0}:t},Sf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&yf(e))},Hi=function(e,t){if(t){var n=e.style,i;t in zn&&t!==Bt&&(t=st),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Pl,"-$1").toLowerCase())):n.removeAttribute(t)}},ti=function(e,t,n,i,s,o){var a=new Ot(e._pt,t,n,0,1,o?_f:mf);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Iu={deg:1,rad:1,turn:1},My={grid:1,flex:1},ui=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ni.style,l=cy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,_,d,m;if(i===o||!s||Iu[i]||Iu[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Sf(e),(p||o==="%")&&(zn[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],lt(p?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ei||!_.appendChild)&&(_=ei.body),d=_._gsap,d&&p&&d.width&&l&&d.time===Xt.time&&!d.uncache)return lt(s/d.width*h);if(p&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=h+i,g=e[u],E?e.style[t]=E:Hi(e,t)}else(p||o==="%")&&!My[En(_,"display")]&&(a.position=En(e,"position")),_===e&&(a.position="static"),_.appendChild(Ni),g=Ni[u],_.removeChild(Ni),a.position="absolute";return l&&p&&(d=Ii(_),d.time=Xt.time,d.width=_[u]),lt(f?g*s/h:g&&s?h/g*s:0)},Fn=function(e,t,n,i){var s;return Rl||Ka(),t in Sn&&t!=="transform"&&(t=Sn[t],~t.indexOf(",")&&(t=t.split(",")[0])),zn[t]&&t!=="transform"?(s=xs(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yo(En(e,Bt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=xo[t]&&xo[t](e,t,n)||En(e,t)||Fh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ui(e,t,s,n)+n:s},Ey=function(e,t,n,i){if(!n||n==="none"){var s=Gr(t,e,1),o=s&&En(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=En(e,"borderTopColor"))}var a=new Ot(this._pt,e.style,t,0,1,ff),l=0,c=0,u,h,f,p,g,_,d,m,E,x,T,I;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=En(e,t)||i,_?e.style[t]=_:Hi(e,t)),u=[n,i],tf(u),n=u[0],i=u[1],f=n.match(Sr)||[],I=i.match(Sr)||[],I.length){for(;h=Sr.exec(i);)d=h[0],E=i.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),d!==(_=f[c++]||"")&&(p=parseFloat(_)||0,T=_.substr((p+"").length),d.charAt(1)==="="&&(d=Lr(p,d)+T),m=parseFloat(d),x=d.substr((m+"").length),l=Sr.lastIndex-x.length,x||(x=x||jt.units[t]||T,l===i.length&&(i+=x,a.e+=x)),T!==x&&(p=ui(e,t,_,x)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:p,c:m-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?_f:mf;return Ph.test(i)&&(a.e=0),this._pt=a,a},Du={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ty=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Du[n]||n,t[1]=Du[i]||i,t.join(" ")},by=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],zn[a]&&(l=1,a=a==="transformOrigin"?Bt:st),Hi(n,a);l&&(Hi(n,st),o&&(o.svg&&n.removeAttribute("transform"),xs(n,1),o.uncache=1,gf(i)))}},xo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Ot(e._pt,t,n,0,0,by);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},vs=[1,0,0,1,0,0],Mf={},Ef=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Uu=function(e){var t=En(e,st);return Ef(t)?vs:t.substr(7).match(Ch).map(lt)},Ll=function(e,t){var n=e._gsap||Ii(e),i=e.style,s=Uu(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?vs:s):(s===vs&&!e.offsetParent&&e!==Nr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Nr.appendChild(e)),s=Uu(e),l?i.display=l:Hi(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Nr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$a=function(e,t,n,i,s,o){var a=e._gsap,l=s||Ll(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],_=l[2],d=l[3],m=l[4],E=l[5],x=t.split(" "),T=parseFloat(x[0])||0,I=parseFloat(x[1])||0,C,w,F,M;n?l!==vs&&(w=p*d-g*_)&&(F=T*(d/w)+I*(-_/w)+(_*E-d*m)/w,M=T*(-g/w)+I*(p/w)-(p*E-g*m)/w,T=F,I=M):(C=yf(e),T=C.x+(~x[0].indexOf("%")?T/100*C.width:T),I=C.y+(~(x[1]||x[0]).indexOf("%")?I/100*C.height:I)),i||i!==!1&&a.smooth?(m=T-c,E=I-u,a.xOffset=h+(m*p+E*_)-m,a.yOffset=f+(m*g+E*d)-E):a.xOffset=a.yOffset=0,a.xOrigin=T,a.yOrigin=I,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Bt]="0px 0px",o&&(ti(o,a,"xOrigin",c,T),ti(o,a,"yOrigin",u,I),ti(o,a,"xOffset",h,a.xOffset),ti(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",T+" "+I)},xs=function(e,t){var n=e._gsap||new of(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=En(e,Bt)||"0",u,h,f,p,g,_,d,m,E,x,T,I,C,w,F,M,S,V,H,z,$,k,O,G,U,Z,J,re,ce,_e,L,N;return u=h=f=_=d=m=E=x=T=0,p=g=1,n.svg=!!(e.getCTM&&Sf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[st]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[st]!=="none"?l[st]:"")),i.scale=i.rotate=i.translate="none"),w=Ll(e,n.svg),n.svg&&(n.uncache?(U=e.getBBox(),c=n.xOrigin-U.x+"px "+(n.yOrigin-U.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),$a(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,w)),I=n.xOrigin||0,C=n.yOrigin||0,w!==vs&&(V=w[0],H=w[1],z=w[2],$=w[3],u=k=w[4],h=O=w[5],w.length===6?(p=Math.sqrt(V*V+H*H),g=Math.sqrt($*$+z*z),_=V||H?fr(H,V)*Ai:0,E=z||$?fr(z,$)*Ai+_:0,E&&(g*=Math.abs(Math.cos(E*Ir))),n.svg&&(u-=I-(I*V+C*z),h-=C-(I*H+C*$))):(N=w[6],_e=w[7],J=w[8],re=w[9],ce=w[10],L=w[11],u=w[12],h=w[13],f=w[14],F=fr(N,ce),d=F*Ai,F&&(M=Math.cos(-F),S=Math.sin(-F),G=k*M+J*S,U=O*M+re*S,Z=N*M+ce*S,J=k*-S+J*M,re=O*-S+re*M,ce=N*-S+ce*M,L=_e*-S+L*M,k=G,O=U,N=Z),F=fr(-z,ce),m=F*Ai,F&&(M=Math.cos(-F),S=Math.sin(-F),G=V*M-J*S,U=H*M-re*S,Z=z*M-ce*S,L=$*S+L*M,V=G,H=U,z=Z),F=fr(H,V),_=F*Ai,F&&(M=Math.cos(F),S=Math.sin(F),G=V*M+H*S,U=k*M+O*S,H=H*M-V*S,O=O*M-k*S,V=G,k=U),d&&Math.abs(d)+Math.abs(_)>359.9&&(d=_=0,m=180-m),p=lt(Math.sqrt(V*V+H*H+z*z)),g=lt(Math.sqrt(O*O+N*N)),F=fr(k,O),E=Math.abs(F)>2e-4?F*Ai:0,T=L?1/(L<0?-L:L):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ef(En(e,st)),G&&e.setAttribute("transform",G))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(p*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=lt(p),n.scaleY=lt(g),n.rotation=lt(_)+a,n.rotationX=lt(d)+a,n.rotationY=lt(m)+a,n.skewX=E+a,n.skewY=x+a,n.transformPerspective=T+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Bt]=yo(c)),n.xOffset=n.yOffset=0,n.force3D=jt.force3D,n.renderTransform=n.svg?wy:xf?Tf:Ay,n.uncache=0,n},yo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Aa=function(e,t,n){var i=At(t);return lt(parseFloat(t)+parseFloat(ui(e,"x",n+"px",i)))+i},Ay=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tf(e,t)},Ei="0deg",Kr="0px",Ti=") ",Tf=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,d=n.transformPerspective,m=n.force3D,E=n.target,x=n.zOrigin,T="",I=m==="auto"&&e&&e!==1||m===!0;if(x&&(h!==Ei||u!==Ei)){var C=parseFloat(u)*Ir,w=Math.sin(C),F=Math.cos(C),M;C=parseFloat(h)*Ir,M=Math.cos(C),o=Aa(E,o,w*M*-x),a=Aa(E,a,-Math.sin(C)*-x),l=Aa(E,l,F*M*-x+x)}d!==Kr&&(T+="perspective("+d+Ti),(i||s)&&(T+="translate("+i+"%, "+s+"%) "),(I||o!==Kr||a!==Kr||l!==Kr)&&(T+=l!==Kr||I?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ti),c!==Ei&&(T+="rotate("+c+Ti),u!==Ei&&(T+="rotateY("+u+Ti),h!==Ei&&(T+="rotateX("+h+Ti),(f!==Ei||p!==Ei)&&(T+="skew("+f+", "+p+Ti),(g!==1||_!==1)&&(T+="scale("+g+", "+_+Ti),E.style[st]=T||"translate(0, 0)"},wy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,d=n.xOffset,m=n.yOffset,E=n.forceCSS,x=parseFloat(o),T=parseFloat(a),I,C,w,F,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ir,c*=Ir,I=Math.cos(l)*h,C=Math.sin(l)*h,w=Math.sin(l-c)*-f,F=Math.cos(l-c)*f,c&&(u*=Ir,M=Math.tan(c-u),M=Math.sqrt(1+M*M),w*=M,F*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),I*=M,C*=M)),I=lt(I),C=lt(C),w=lt(w),F=lt(F)):(I=h,F=f,C=w=0),(x&&!~(o+"").indexOf("px")||T&&!~(a+"").indexOf("px"))&&(x=ui(p,"x",o,"px"),T=ui(p,"y",a,"px")),(g||_||d||m)&&(x=lt(x+g-(g*I+_*w)+d),T=lt(T+_-(g*C+_*F)+m)),(i||s)&&(M=p.getBBox(),x=lt(x+i/100*M.width),T=lt(T+s/100*M.height)),M="matrix("+I+","+C+","+w+","+F+","+x+","+T+")",p.setAttribute("transform",M),E&&(p.style[st]=M)},Ry=function(e,t,n,i,s){var o=360,a=St(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ai:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Pu)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Pu)%o-~~(c/o)*o)),e._pt=f=new Ot(e._pt,t,n,i,c,hy),f.e=u,f.u="deg",e._props.push(n),f},Fu=function(e,t){for(var n in t)e[n]=t[n];return e},Cy=function(e,t,n){var i=Fu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[st]=t,a=xs(n,1),Hi(n,st),n.setAttribute("transform",c)):(c=getComputedStyle(n)[st],o[st]=t,a=xs(n,1),o[st]=c);for(l in zn)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=At(c),g=At(u),h=p!==g?ui(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Ot(e._pt,a,l,h,f-h,Ja),e._pt.u=g||0,e._props.push(l));Fu(a,i)};Ft("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});xo[e>1?"border"+r:r]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return Fn(a,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,h)}});var bf={name:"css",register:Ka,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,p,g,_,d,m,E,x,T,I,C,w,F;Rl||Ka(),this.styles=this.styles||vf(e),F=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Wt[_]&&af(_,t,n,i,e,s)))){if(p=typeof u,g=xo[_],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=ms(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",oi.lastIndex=0,oi.test(c)||(d=At(c),m=At(u)),m?d!==m&&(c=ui(e,_,c,m)+m):d&&(u+=d),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),F.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],St(c)&&~c.indexOf("random(")&&(c=ms(c)),At(c+"")||c==="auto"||(c+=jt.units[_]||At(Fn(e,_))||""),(c+"").charAt(1)==="="&&(c=Fn(e,_))):c=Fn(e,_),f=parseFloat(c),E=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),_ in Sn&&(_==="autoAlpha"&&(f===1&&Fn(e,"visibility")==="hidden"&&h&&(f=0),F.push("visibility",0,a.visibility),ti(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Sn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in zn,x){if(this.styles.save(_),T||(I=e._gsap,I.renderTransform&&!t.parseTransform||xs(e,t.parseTransform),C=t.smoothOrigin!==!1&&I.smooth,T=this._pt=new Ot(this._pt,a,st,0,1,I.renderTransform,I,0,-1),T.dep=1),_==="scale")this._pt=new Ot(this._pt,I,"scaleY",I.scaleY,(E?Lr(I.scaleY,E+h):h)-I.scaleY||0,Ja),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){F.push(Bt,0,a[Bt]),u=Ty(u),I.svg?$a(e,u,0,C,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==I.zOrigin&&ti(this,I,"zOrigin",I.zOrigin,m),ti(this,a,_,yo(c),yo(u)));continue}else if(_==="svgOrigin"){$a(e,u,1,C,0,this);continue}else if(_ in Mf){Ry(this,I,_,f,E?Lr(f,E+u):u);continue}else if(_==="smoothOrigin"){ti(this,I,"smooth",I.smooth,u);continue}else if(_==="force3D"){I[_]=u;continue}else if(_==="transform"){Cy(this,u,e);continue}}else _ in a||(_=Gr(_)||_);if(x||(h||h===0)&&(f||f===0)&&!uy.test(u)&&_ in a)d=(c+"").substr((f+"").length),h||(h=0),m=At(u)||(_ in jt.units?jt.units[_]:d),d!==m&&(f=ui(e,_,c,m)),this._pt=new Ot(this._pt,x?I:a,_,f,(E?Lr(f,E+h):h)-f,!x&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?dy:Ja),this._pt.u=m||0,d!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=fy);else if(_ in a)Ey.call(this,e,_,c,E?E+u:u);else if(_ in e)this.add(e,_,c||e[_],E?E+u:u,i,s);else if(_!=="parseTransform"){xl(_,u);continue}x||(_ in a?F.push(_,0,a[_]):F.push(_,1,c||e[_])),o.push(_)}}w&&df(this)},render:function(e,t){if(t.tween._time||!Cl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Fn,aliases:Sn,getSetter:function(e,t,n){var i=Sn[t];return i&&i.indexOf(",")<0&&(t=i),t in zn&&t!==Bt&&(e._gsap.x||Fn(e,"x"))?n&&Cu===n?t==="scale"?gy:_y:(Cu=n||{})&&(t==="scale"?vy:xy):e.style&&!_l(e.style[t])?py:~t.indexOf("-")?my:Al(e,t)},core:{_removeProperty:Hi,_getMatrix:Ll}};zt.utils.checkPrefix=Gr;zt.core.getStyleSaver=vf;(function(r,e,t,n){var i=Ft(r+","+e+","+t,function(s){zn[s]=1});Ft(e,function(s){jt.units[s]="deg",Mf[s]=1}),Sn[i[13]]=r+","+e,Ft(n,function(s){var o=s.split(":");Sn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){jt.units[r]="px"});zt.registerPlugin(bf);var ys=zt.registerPlugin(bf)||zt;ys.core.Tween;var Py=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ly(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Af={exports:{}};(function(r){((e,t)=>{r.exports?r.exports=t():e.fuzzysort=t()})(Py,e=>{var t=(k,O)=>{if(k=="farzher")return{target:"farzher was here (^-^*)/",score:0,_indexes:[0]};if(!k||!O)return H;var G=u(k);F(O)||(O=c(O));var U=G.bitflags;return(U&O._bitflags)!==U?H:f(G,O)},n=(k,O,G)=>{if(k=="farzher")return[{target:"farzher was here (^-^*)/",score:0,_indexes:[0],obj:O?O[0]:H}];if(!k)return G&&G.all?h(k,O,G):V;var U=u(k),Z=U.bitflags;U.containsSpace;var J=G&&G.threshold||S,re=G&&G.limit||M,ce=0,_e=0,L=O.length;if(G&&G.key)for(var N=G.key,P=0;P<L;++P){var A=O[P],Q=w(A,N);if(Q&&(F(Q)||(Q=c(Q)),(Z&Q._bitflags)===Z)){var le=f(U,Q);le!==H&&(le.score<J||(le={target:le.target,_targetLower:"",_targetLowerCodes:H,_nextBeginningIndexes:H,_bitflags:0,score:le.score,_indexes:le._indexes,obj:A},ce<re?($.add(le),++ce):(++_e,le.score>$.peek().score&&$.replaceTop(le))))}}else if(G&&G.keys)for(var ee=G.scoreFn||C,B=G.keys,K=B.length,P=0;P<L;++P){for(var A=O[P],Y=new Array(K),W=0;W<K;++W){var N=B[W],Q=w(A,N);if(!Q){Y[W]=H;continue}F(Q)||(Q=c(Q)),(Z&Q._bitflags)!==Z?Y[W]=H:Y[W]=f(U,Q)}Y.obj=A;var X=ee(Y);X!==H&&(X<J||(Y.score=X,ce<re?($.add(Y),++ce):(++_e,X>$.peek().score&&$.replaceTop(Y))))}else for(var P=0;P<L;++P){var Q=O[P];if(Q&&(F(Q)||(Q=c(Q)),(Z&Q._bitflags)===Z)){var le=f(U,Q);le!==H&&(le.score<J||(ce<re?($.add(le),++ce):(++_e,le.score>$.peek().score&&$.replaceTop(le))))}}if(ce===0)return V;for(var ie=new Array(ce),P=ce-1;P>=0;--P)ie[P]=$.poll();return ie.total=ce+_e,ie},i=(k,O,G)=>{if(typeof O=="function")return s(k,O);if(k===H)return H;O===void 0&&(O="<b>"),G===void 0&&(G="</b>");var U="",Z=0,J=!1,re=k.target,ce=re.length,_e=k._indexes;_e=_e.slice(0,_e.len).sort((P,A)=>P-A);for(var L=0;L<ce;++L){var N=re[L];if(_e[Z]===L){if(++Z,J||(J=!0,U+=O),Z===_e.length){U+=N+G+re.substr(L+1);break}}else J&&(J=!1,U+=G);U+=N}return U},s=(L,O)=>{if(L===H)return H;var G=L.target,U=G.length,Z=L._indexes;Z=Z.slice(0,Z.len).sort((A,Q)=>A-Q);for(var J="",re=0,ce=0,_e=!1,L=[],N=0;N<U;++N){var P=G[N];if(Z[ce]===N){if(++ce,_e||(_e=!0,L.push(J),J=""),ce===Z.length){J+=P,L.push(O(J,re++)),J="",L.push(G.substr(N+1));break}}else _e&&(_e=!1,L.push(O(J,re++)),J="");J+=P}return L},o=k=>k._indexes.slice(0,k._indexes.len).sort((O,G)=>O-G),a=k=>{typeof k!="string"&&(k="");var O=g(k);return{target:k,_targetLower:O._lower,_targetLowerCodes:O.lowerCodes,_nextBeginningIndexes:H,_bitflags:O.bitflags,score:H,_indexes:[0],obj:H}},l=k=>{typeof k!="string"&&(k=""),k=k.trim();var O=g(k),G=[];if(O.containsSpace){var U=k.split(/\s+/);U=[...new Set(U)];for(var Z=0;Z<U.length;Z++)if(U[Z]!==""){var J=g(U[Z]);G.push({lowerCodes:J.lowerCodes,_lower:U[Z].toLowerCase(),containsSpace:!1})}}return{lowerCodes:O.lowerCodes,bitflags:O.bitflags,containsSpace:O.containsSpace,_lower:O._lower,spaceSearches:G}},c=k=>{if(k.length>999)return a(k);var O=E.get(k);return O!==void 0||(O=a(k),E.set(k,O)),O},u=k=>{if(k.length>999)return l(k);var O=x.get(k);return O!==void 0||(O=l(k),x.set(k,O)),O},h=(k,O,G)=>{var U=[];U.total=O.length;var Z=G&&G.limit||M;if(G&&G.key)for(var J=0;J<O.length;J++){var re=O[J],ce=w(re,G.key);if(ce){F(ce)||(ce=c(ce)),ce.score=S,ce._indexes.len=0;var _e=ce;if(_e={target:_e.target,_targetLower:"",_targetLowerCodes:H,_nextBeginningIndexes:H,_bitflags:0,score:ce.score,_indexes:H,obj:re},U.push(_e),U.length>=Z)return U}}else if(G&&G.keys)for(var J=0;J<O.length;J++){for(var re=O[J],L=new Array(G.keys.length),N=G.keys.length-1;N>=0;--N){var ce=w(re,G.keys[N]);if(!ce){L[N]=H;continue}F(ce)||(ce=c(ce)),ce.score=S,ce._indexes.len=0,L[N]=ce}if(L.obj=re,L.score=S,U.push(L),U.length>=Z)return U}else for(var J=0;J<O.length;J++){var ce=O[J];if(ce&&(F(ce)||(ce=c(ce)),ce.score=S,ce._indexes.len=0,U.push(ce),U.length>=Z))return U}return U},f=(k,O,G=!1)=>{if(G===!1&&k.containsSpace)return p(k,O);for(var U=k._lower,Z=k.lowerCodes,J=Z[0],re=O._targetLowerCodes,ce=Z.length,_e=re.length,A=0,L=0,N=0;;){var P=J===re[L];if(P){if(T[N++]=L,++A,A===ce)break;J=Z[A]}if(++L,L>=_e)return H}var A=0,Q=!1,le=0,ee=O._nextBeginningIndexes;ee===H&&(ee=O._nextBeginningIndexes=d(O.target)),L=T[0]===0?0:ee[T[0]-1];var B=0;if(L!==_e)for(;;)if(L>=_e){if(A<=0||(++B,B>200))break;--A;var K=I[--le];L=ee[K]}else{var P=Z[A]===re[L];if(P){if(I[le++]=L,++A,A===ce){Q=!0;break}++L}else L=ee[L]}var Y=O._targetLower.indexOf(U,T[0]),W=~Y;if(W&&!Q)for(var X=0;X<N;++X)T[X]=Y+X;var ie=!1;W&&(ie=O._nextBeginningIndexes[Y-1]===Y);{if(Q)var R=I,v=le;else var R=T,v=N;for(var b=0,j=0,X=1;X<ce;++X)R[X]-R[X-1]!==1&&(b-=R[X],++j);var ne=R[ce-1]-R[0]-(ce-1);if(b-=(12+ne)*j,R[0]!==0&&(b-=R[0]*R[0]*.2),!Q)b*=1e3;else{for(var fe=1,X=ee[0];X<_e;X=ee[X])++fe;fe>24&&(b*=(fe-24)*10)}W&&(b/=1+ce*ce*1),ie&&(b/=1+ce*ce*1),b-=_e-ce,O.score=b;for(var X=0;X<v;++X)O._indexes[X]=R[X];return O._indexes.len=v,O}},p=(k,O)=>{for(var G=new Set,U=0,Z=H,J=0,re=k.spaceSearches,N=0;N<re.length;++N){var ce=re[N];if(Z=f(ce,O),Z===H)return H;U+=Z.score,Z._indexes[0]<J&&(U-=J-Z._indexes[0]),J=Z._indexes[0];for(var _e=0;_e<Z._indexes.len;++_e)G.add(Z._indexes[_e])}var L=f(k,O,!0);if(L!==H&&L.score>U)return L;Z.score=U;var N=0;for(let P of G)Z._indexes[N++]=P;return Z._indexes.len=N,Z},g=k=>{for(var O=k.length,G=k.toLowerCase(),U=[],Z=0,J=!1,re=0;re<O;++re){var ce=U[re]=G.charCodeAt(re);if(ce===32){J=!0;continue}var _e=ce>=97&&ce<=122?ce-97:ce>=48&&ce<=57?26:ce<=127?30:31;Z|=1<<_e}return{lowerCodes:U,bitflags:Z,containsSpace:J,_lower:G}},_=k=>{for(var O=k.length,G=[],U=0,Z=!1,J=!1,re=0;re<O;++re){var ce=k.charCodeAt(re),_e=ce>=65&&ce<=90,L=_e||ce>=97&&ce<=122||ce>=48&&ce<=57,N=_e&&!Z||!J||!L;Z=_e,J=L,N&&(G[U++]=re)}return G},d=k=>{for(var O=k.length,G=_(k),U=[],Z=G[0],J=0,re=0;re<O;++re)Z>re?U[re]=Z:(Z=G[++J],U[re]=Z===void 0?O:Z);return U},m=()=>{E.clear(),x.clear(),T=[],I=[]},E=new Map,x=new Map,T=[],I=[],C=k=>{for(var O=S,G=k.length,U=0;U<G;++U){var Z=k[U];if(Z!==H){var J=Z.score;J>O&&(O=J)}}return O===S?H:O},w=(k,O)=>{var G=k[O];if(G!==void 0)return G;var U=O;Array.isArray(O)||(U=O.split("."));for(var Z=U.length,J=-1;k&&++J<Z;)k=k[U[J]];return k},F=k=>typeof k=="object",M=1/0,S=-M,V=[];V.total=0;var H=null,z=k=>{var O=[],G=0,U={},Z=J=>{for(var re=0,ce=O[re],_e=1;_e<G;){var L=_e+1;re=_e,L<G&&O[L].score<O[_e].score&&(re=L),O[re-1>>1]=O[re],_e=1+(re<<1)}for(var N=re-1>>1;re>0&&ce.score<O[N].score;N=(re=N)-1>>1)O[re]=O[N];O[re]=ce};return U.add=J=>{var re=G;O[G++]=J;for(var ce=re-1>>1;re>0&&J.score<O[ce].score;ce=(re=ce)-1>>1)O[re]=O[ce];O[re]=J},U.poll=J=>{if(G!==0){var re=O[0];return O[0]=O[--G],Z(),re}},U.peek=J=>{if(G!==0)return O[0]},U.replaceTop=J=>{O[0]=J,Z()},U},$=z();return{single:t,go:n,highlight:i,prepare:a,indexes:o,cleanup:m}})})(Af);var Ny=Af.exports;const Iy=Ly(Ny),hi=[{name:"Basement",svg:"https://aohkolcopromuzleqove.supabase.co/storage/v1/object/sign/Maps/Library-B.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJNYXBzL0xpYnJhcnktQi5zdmciLCJpYXQiOjE3MTMyODcwNDIsImV4cCI6MTc0NDgyMzA0Mn0.i4ACUeQrptv0ceCCtGfE0J8BaIl3lU2rL7iBIIcVlHw&t=2024-04-16T17%3A04%3A02.170Z",svgScale:.01,position:[0,0],extrudedSections:["A-WALL-FULL"],floorLayer:{layer:"A-FLOOR-OUTLINE",enabled:!0},excludedSections:[],extrudeDepth:30,locations:[{name:"19A",type:"Room",position:[431.09,239.46],floorName:"Basement"},{name:"40",type:"Room",position:[211.24,185.63],floorName:"Basement"},{name:"19",type:"Room",position:[355.41,241.82],floorName:"Basement"},{name:"17",type:"Room",position:[315.34,269.6],floorName:"Basement"},{name:"7",type:"Room",position:[272.32,167.07],floorName:"Basement"},{name:"2",type:"Room",position:[150.61,177.13],floorName:"Basement"},{name:"T-0A",type:"Room",position:[230.7,240.69],floorName:"Basement"},{name:"8",type:"Room",position:[235.1,176.26],floorName:"Basement"},{name:"6",type:"Room",position:[232.56,147.96],floorName:"Basement"},{name:"44",type:"Room",position:[209.64,147.71],floorName:"Basement"},{name:"S-0C",type:"Room",position:[93.7,76.3],floorName:"Basement"},{name:"S-0B",type:"Room",position:[58.53,315.87],floorName:"Basement"},{name:"S-0A",type:"Room",position:[272.71,266.81],floorName:"Basement"},{name:"64",type:"Room",position:[527.02,318.54],floorName:"Basement"},{name:"EL-0A",type:"Room",position:[226.41,256.11],floorName:"Basement"},{name:"C-0A",type:"Room",position:[226.19,322.07],floorName:"Basement"},{name:"C-0B",type:"Room",position:[261.23,151.08],floorName:"Basement"},{name:"[BG]01",type:"Room",position:[67.13,78.86],floorName:"Basement"},{name:"[BG]02",type:"Room",position:[528.76,290.97],floorName:"Basement"},{name:"[CG]01",type:"Room",position:[56.3,62.49],floorName:"Basement"},{name:"[CG]02",type:"Room",position:[270.66,117.31],floorName:"Basement"},{name:"H-0A",type:"Room",position:[123.4,244.34],floorName:"Basement"},{name:"S-0D",type:"Room",position:[426.57,201.27],floorName:"Basement"},{name:"S-0E",type:"Room",position:[522.56,356.76],floorName:"Basement"},{name:"RR-W-0",type:"Room",position:[247.13,327.68],floorName:"Basement"},{name:"RR-M-0",type:"Room",position:[238.73,306.8],floorName:"Basement"},{name:"H-0B",type:"Room",position:[175.55,134.86],floorName:"Basement"},{name:"H-0E",type:"Room",position:[190.75,214.86],floorName:"Basement"},{name:"L-0C",type:"Room",position:[244.23,267.16],floorName:"Basement"},{name:"H-0D",type:"Room",position:[197.48,299.9],floorName:"Basement"},{name:"[SA]B-I4",type:"Room",position:[378.9,347.09],floorName:"Basement"},{name:"[SA]B-H7",type:"Room",position:[340.58,232.29],floorName:"Basement"},{name:"[SA]B-H6",type:"Room",position:[340.58,270.55],floorName:"Basement"},{name:"[SA]B-I6",type:"Room",position:[378.9,270.55],floorName:"Basement"},{name:"[SA]B-I7",type:"Room",position:[378.9,232.29],floorName:"Basement"},{name:"5",type:"Room",position:[234.54,99.07],floorName:"Basement"},{name:"5B",type:"Room",position:[193.48,93.77],floorName:"Basement"},{name:"5C",type:"Room",position:[212.61,89.75],floorName:"Basement"},{name:"5E",type:"Room",position:[232.09,118.86],floorName:"Basement"},{name:"5D",type:"Room",position:[251.21,118.84],floorName:"Basement"},{name:"5A",type:"Room",position:[193.58,117.28],floorName:"Basement"},{name:"M-0A",type:"Room",position:[90.51,93.66],floorName:"Basement"},{name:"3",type:"Room",position:[166.56,102.56],floorName:"Basement"},{name:"3A",type:"Room",position:[117.18,115.28],floorName:"Basement"},{name:"3B",type:"Room",position:[117.08,91.72],floorName:"Basement"},{name:"1",type:"Room",position:[92.22,177.23],floorName:"Basement"},{name:"1A",type:"Room",position:[81.02,147.84],floorName:"Basement"},{name:"1B",type:"Room",position:[80.91,128.98],floorName:"Basement"},{name:"1C",type:"Room",position:[81.22,109.27],floorName:"Basement"},{name:"37",type:"Room",position:[180.73,176.95],floorName:"Basement"},{name:"39",type:"Room",position:[179.31,147.86],floorName:"Basement"},{name:"4",type:"Room",position:[150.51,148.73],floorName:"Basement"},{name:"42",type:"Room",position:[211.62,168.17],floorName:"Basement"},{name:"7A",type:"Room",position:[288.43,166.73],floorName:"Basement"},{name:"9",type:"Room",position:[280.7,186.78],floorName:"Basement"},{name:"11",type:"Room",position:[278.01,206.91],floorName:"Basement"},{name:"13",type:"Room",position:[267.94,224.02],floorName:"Basement"},{name:"13A",type:"Room",position:[284.48,224.02],floorName:"Basement"},{name:"15",type:"Room",position:[278.58,240.98],floorName:"Basement"},{name:"10",type:"Room",position:[234.97,214.19],floorName:"Basement"},{name:"35",type:"Room",position:[176.5,206.3],floorName:"Basement"},{name:"33",type:"Room",position:[176.63,225.27],floorName:"Basement"},{name:"38",type:"Room",position:[214.43,207.4],floorName:"Basement"},{name:"36",type:"Room",position:[213.76,224.64],floorName:"Basement"},{name:"L-0A",type:"Room",position:[89.55,215.35],floorName:"Basement"},{name:"28",type:"Room",position:[147.64,214.93],floorName:"Basement"},{name:"26",type:"Room",position:[140.22,262.71],floorName:"Basement"},{name:"26A",type:"Room",position:[156.9,244.14],floorName:"Basement"},{name:"31",type:"Room",position:[180.92,250.81],floorName:"Basement"},{name:"29",type:"Room",position:[178.6,281.47],floorName:"Basement"},{name:"22",type:"Room",position:[158.55,282.52],floorName:"Basement"},{name:"24",type:"Room",position:[137.98,281.34],floorName:"Basement"},{name:"34",type:"Room",position:[210.94,244.02],floorName:"Basement"},{name:"32",type:"Room",position:[211.44,261.63],floorName:"Basement"},{name:"30",type:"Room",position:[212.25,280.96],floorName:"Basement"},{name:"26B",type:"Room",position:[161.31,263.02],floorName:"Basement"},{name:"27",type:"Room",position:[81.8,272.29],floorName:"Basement"},{name:"27E",type:"Room",position:[112.36,246.43],floorName:"Basement"},{name:"27A",type:"Room",position:[103.97,262.44],floorName:"Basement"},{name:"27B",type:"Room",position:[103.49,282.31],floorName:"Basement"},{name:"27C",type:"Room",position:[102.87,299.84],floorName:"Basement"},{name:"27D",type:"Room",position:[79.97,322.99],floorName:"Basement"},{name:"27F",type:"Room",position:[76.14,337.8],floorName:"Basement"},{name:"25",type:"Room",position:[116.33,331.61],floorName:"Basement"},{name:"25A",type:"Room",position:[133.2,310.85],floorName:"Basement"},{name:"23",type:"Room",position:[154.06,310.64],floorName:"Basement"},{name:"21",type:"Room",position:[174,310.8],floorName:"Basement"},{name:"M-0B",type:"Room",position:[200.14,337.7],floorName:"Basement"},{name:"M-0C",type:"Room",position:[161.71,338.11],floorName:"Basement"},{name:"M-0D",type:"Room",position:[188.11,372.77],floorName:"Basement"},{name:"M-0M",type:"Room",position:[379.06,364.6],floorName:"Basement"},{name:"19D",type:"Room",position:[430.65,368.1],floorName:"Basement"},{name:"19C",type:"Room",position:[437.05,340.79],floorName:"Basement"},{name:"M-0P",type:"Room",position:[315.44,325.74],floorName:"Basement"},{name:"M-0N",type:"Room",position:[348.79,340.1],floorName:"Basement"},{name:"M-0O",type:"Room",position:[348.58,362.08],floorName:"Basement"},{name:"M-0Q",type:"Room",position:[324.13,369.59],floorName:"Basement"},{name:"M-0K",type:"Room",position:[247.14,344.24],floorName:"Basement"},{name:"M-0E",type:"Room",position:[213.94,362.37],floorName:"Basement"},{name:"M-0F",type:"Room",position:[218.59,375.49],floorName:"Basement"},{name:"M-0G",type:"Room",position:[218.51,391.47],floorName:"Basement"},{name:"M-0H",type:"Room",position:[218.79,401.39],floorName:"Basement"},{name:"M-0I",type:"Room",position:[250.74,382.27],floorName:"Basement"},{name:"M-0J",type:"Room",position:[268.55,370.33],floorName:"Basement"},{name:"M-0L",type:"Room",position:[228.61,"343.34)","rotate(-90"],floorName:"Basement"},{name:"M-0R",type:"Room",position:[306.71,370.48],floorName:"Basement"},{name:"H-0C",type:"Room",position:[251.82,202.55],floorName:"Basement"},{name:"L-0B",type:"Room",position:[247.92,141.81],floorName:"Basement"},{name:"EL/M-0A",type:"Room",position:[227.44,266.74],floorName:"Basement"},{name:"19B",type:"Room",position:[431.01,193.07],floorName:"Basement"}]},{name:"Floor 1",svg:"https://aohkolcopromuzleqove.supabase.co/storage/v1/object/sign/Maps/Library-1.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJNYXBzL0xpYnJhcnktMS5zdmciLCJpYXQiOjE3MTMyODcwNjEsImV4cCI6MTc0NDgyMzA2MX0.jBoD_VdDGTNUmb0xSS5Y1IX_x7kbmHU_fXUK2i1LeeQ&t=2024-04-16T17%3A04%3A21.826Z",svgScale:.01,position:[.15,-.05],extrudedSections:["A-WALL-FULL"],floorLayer:{layer:"A-FLOOR-OUTLINE",enabled:!0},extrudeDepth:30,locations:[{name:"101A",type:"Room",position:[352.49,225.03],floorName:"Floor 1"},{name:"111B",type:"Room",position:[496.54,271.4],floorName:"Floor 1"},{name:"111H",type:"Room",position:[549.66,287.6],floorName:"Floor 1"},{name:"111G",type:"Room",position:[545.64,228.35],floorName:"Floor 1"},{name:"111F",type:"Room",position:[499.23,171.64],floorName:"Floor 1"},{name:"111K",type:"Room",position:[540.15,174.39],floorName:"Floor 1"},{name:"111E",type:"Room",position:[505.07,201.68],floorName:"Floor 1"},{name:"111J",type:"Room",position:[495.09,221.98],floorName:"Floor 1"},{name:"110",type:"Room",position:[431.83,278.75],floorName:"Floor 1"},{name:"111A",type:"Room",position:[469.75,221.2],floorName:"Floor 1"},{name:"111C",type:"Room",position:[455.27,202.88],floorName:"Floor 1"},{name:"111D",type:"Room",position:[475,202.88],floorName:"Floor 1"},{name:"111I",type:"Room",position:[467.86,271.86],floorName:"Floor 1"},{name:"110C",type:"Room",position:[440.39,214.15],floorName:"Floor 1"},{name:"110B",type:"Room",position:[441.11,231.28],floorName:"Floor 1"},{name:"110A",type:"Room",position:[421.21,225.16],floorName:"Floor 1"},{name:"T-1A",type:"Room",position:[227.08,240.02],floorName:"Floor 1"},{name:"122",type:"Room",position:[104.03,292.2],floorName:"Floor 1"},{name:"121",type:"Room",position:[181.67,326.55],floorName:"Floor 1"},{name:"115",type:"Room",position:[236.01,148.21],floorName:"Floor 1"},{name:"117",type:"Room",position:[240.55,110.23],floorName:"Floor 1"},{name:"118",type:"Room",position:[241,88.43],floorName:"Floor 1"},{name:"116",type:"Room",position:[238.59,130.67],floorName:"Floor 1"},{name:"112",type:"Room",position:[276.16,185.18],floorName:"Floor 1"},{name:"112A",type:"Room",position:[283.37,166.41],floorName:"Floor 1"},{name:"113",type:"Room",position:[267.47,166.41],floorName:"Floor 1"},{name:"114",type:"Room",position:[264.16,138.89],floorName:"Floor 1"},{name:"101B",type:"Room",position:[256.98,140.65],floorName:"Floor 1"},{name:"120",type:"Room",position:[248.83,318.38],floorName:"Floor 1"},{name:"C-1A",type:"Room",position:[228.18,282.11],floorName:"Floor 1"},{name:"E-1",type:"Room",position:[228.11,272.82],floorName:"Floor 1"},{name:"C-1B",type:"Room",position:[409.44,354.09],floorName:"Floor 1"},{name:"109A",type:"Room",position:[493.26,338.85],floorName:"Floor 1"},{name:"106",type:"Room",position:[440.77,339.77],floorName:"Floor 1"},{name:"106B",type:"Room",position:[439.5,362.25],floorName:"Floor 1"},{name:"106C",type:"Room",position:[446.02,385.65],floorName:"Floor 1"},{name:"109B",type:"Room",position:[493.97,358.5],floorName:"Floor 1"},{name:"109",type:"Room",position:[550.47,366.03],floorName:"Floor 1"},{name:"107",type:"Room",position:[462.63,339.17],floorName:"Floor 1"},{name:"108A",type:"Room",position:[458.54,367.96],floorName:"Floor 1"},{name:"108",type:"Room",position:[477.64,363.92],floorName:"Floor 1"},{name:"101",type:"Room",position:[130.34,174.95],floorName:"Floor 1"},{name:"102",type:"Room",position:[336.37,290.47],floorName:"Floor 1"},{name:"111",type:"Room",position:[505.75,240.97],floorName:"Floor 1"},{name:"E-1B",type:"Room",position:[455.91,223.83],floorName:"Floor 1"},{name:"104",type:"Room",position:[381.4,385.43],floorName:"Floor 1"},{name:"S-1C",type:"Room",position:[93.43,74.17],floorName:"Floor 1"},{name:"S-1B",type:"Room",position:[56.69,316.25],floorName:"Floor 1"},{name:"S-1E",type:"Room",position:[522.61,358.35],floorName:"Floor 1"},{name:"S-1D",type:"Room",position:[428.47,192.66],floorName:"Floor 1"},{name:"S-1A",type:"Room",position:[272.29,266.92],floorName:"Floor 1"},{name:"[BG]100",type:"Room",position:[57.79,347.73],floorName:"Floor 1"},{name:"[CG]100",type:"Room",position:[71.11,349.31],floorName:"Floor 1"},{name:"[CG]101",type:"Room",position:[188.87,377],floorName:"Floor 1"},{name:"[CG]102",type:"Room",position:[242.57,408.18],floorName:"Floor 1"},{name:"[CG]103",type:"Room",position:[457.29,186.73],floorName:"Floor 1"},{name:"EL-1A",type:"Room",position:[226.86,256.67],floorName:"Floor 1"},{name:"[XX]101",type:"Room",position:[434.93,331.67],floorName:"Floor 1"},{name:"EL-1B",type:"Room",position:[528.83,301.18],floorName:"Floor 1"},{name:"M-1A",type:"Room",position:[228.14,366.85],floorName:"Floor 1"},{name:"RR-M-1",type:"Room",position:[419.6,374.59],floorName:"Floor 1"},{name:"RR-W-1",type:"Room",position:[394.16,374.59],floorName:"Floor 1"},{name:"101C",type:"Room",position:[398.73,222.09],floorName:"Floor 1"}]},{name:"Floor 2",svg:"https://aohkolcopromuzleqove.supabase.co/storage/v1/object/sign/Maps/Library-2.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJNYXBzL0xpYnJhcnktMi5zdmciLCJpYXQiOjE3MTMyODcwNzcsImV4cCI6MTc0NDgyMzA3N30.GhUQVGrb2BgcIY8S6K6pGFozOATOmlmm9MD4KadKZOg&t=2024-04-16T17%3A04%3A37.265Z",svgScale:.01,position:[.21,0],extrudedSections:["A-WALL-FULL"],floorLayer:{layer:"A-FLOOR-OUTLINE",enabled:!0},extrudeDepth:30,locations:[{name:"T-2B",type:"Room",position:[227.04,240.89],floorName:"Floor 2"},{name:"204",type:"Room",position:[487.58,319.83],floorName:"Floor 2"},{name:"203",type:"Room",position:[482.01,338.73],floorName:"Floor 2"},{name:"208",type:"Room",position:[276.81,139.04],floorName:"Floor 2"},{name:"206",type:"Room",position:[275.73,187.74],floorName:"Floor 2"},{name:"207",type:"Room",position:[275.57,169.99],floorName:"Floor 2"},{name:"205",type:"Room",position:[425.08,219.18],floorName:"Floor 2"},{name:"C-2A",type:"Room",position:[227.23,322.4],floorName:"Floor 2"},{name:"205B",type:"Room",position:[455.74,207.7],floorName:"Floor 2"},{name:"209",type:"Room",position:[271.12,375.57],floorName:"Floor 2"},{name:"E-2A",type:"Room",position:[227.75,271.88],floorName:"Floor 2"},{name:"EL-2A",type:"Room",position:[226.71,256.96],floorName:"Floor 2"},{name:"S-2C",type:"Room",position:[81.4,70.2],floorName:"Floor 2"},{name:"S-2B",type:"Room",position:[58.37,316.06],floorName:"Floor 2"},{name:"S-2E",type:"Room",position:[522.75,357.02],floorName:"Floor 2"},{name:"S-2D",type:"Room",position:[428.29,193.78],floorName:"Floor 2"},{name:"S-2A",type:"Room",position:[278.85,278.92],floorName:"Floor 2"},{name:"L-2",type:"Room",position:[247.92,278.25],floorName:"Floor 2"},{name:"T-2A",type:"Room",position:[229.48,282.04],floorName:"Floor 2"},{name:"M-2A",type:"Room",position:[455.83,225.63],floorName:"Floor 2"},{name:"[XX]201",type:"Room",position:[284.11,265.34],floorName:"Floor 2"},{name:"[SA]202",type:"Room",position:[520.44,309.89],floorName:"Floor 2"},{name:"[BG]200",type:"Room",position:[226.03,353.69],floorName:"Floor 2"},{name:"EL-2B",type:"Room",position:[529.11,301.18],floorName:"Floor 2"},{name:"RR-M-2",type:"Room",position:[241.22,307.84],floorName:"Floor 2"},{name:"RR-2",type:"Room",position:[250.11,328.32],floorName:"Floor 2"},{name:"FPS-2",type:"Room",position:[292.21,290.26],floorName:"Floor 2"},{name:"[SA]2-B10",type:"Room",position:[110.96,118.4],floorName:"Floor 2"},{name:"[SA]2-C10",type:"Room",position:[149.23,118.4],floorName:"Floor 2"},{name:"[SA]2-D10",type:"Room",position:[187.49,118.4],floorName:"Floor 2"},{name:"[SA]2-E10",type:"Room",position:[225.77,118.4],floorName:"Floor 2"},{name:"[SA]2-B9",type:"Room",position:[111.03,156.67],floorName:"Floor 2"},{name:"[SA]2-C9",type:"Room",position:[149.3,156.67],floorName:"Floor 2"},{name:"[SA]2-D9",type:"Room",position:[187.56,156.67],floorName:"Floor 2"},{name:"[SA]2-E9",type:"Room",position:[225.84,156.67],floorName:"Floor 2"},{name:"[SA]2-B8",type:"Room",position:[111.03,194.94],floorName:"Floor 2"},{name:"[SA]2-C8",type:"Room",position:[149.29,194.94],floorName:"Floor 2"},{name:"[SA]2-D8",type:"Room",position:[187.56,194.94],floorName:"Floor 2"},{name:"[SA]2-E8",type:"Room",position:[225.84,194.94],floorName:"Floor 2"},{name:"[SA]2-H8",type:"Room",position:[340.63,194.94],floorName:"Floor 2"},{name:"[SA]2-I8",type:"Room",position:[378.94,194.94],floorName:"Floor 2"},{name:"[SA]2-B7",type:"Room",position:[111.03,233.21],floorName:"Floor 2"},{name:"[SA]2-C7",type:"Room",position:[149.29,233.21],floorName:"Floor 2"},{name:"[SA]2-D7",type:"Room",position:[187.56,233.21],floorName:"Floor 2"},{name:"[SA]2-F7",type:"Room",position:[264.11,233.21],floorName:"Floor 2"},{name:"[SA]2-H7",type:"Room",position:[340.63,233.21],floorName:"Floor 2"},{name:"[SA]2-I7",type:"Room",position:[378.94,233.21],floorName:"Floor 2"},{name:"[SA]2-L8",type:"Room",position:[493.72,194.94],floorName:"Floor 2"},{name:"[SA]2-L7",type:"Room",position:[493.72,233.21],floorName:"Floor 2"},{name:"[SA]2-B6",type:"Room",position:[111.03,271.47],floorName:"Floor 2"},{name:"[SA]2-C6",type:"Room",position:[149.29,271.47],floorName:"Floor 2"},{name:"[SA]2-D6",type:"Room",position:[187.56,271.47],floorName:"Floor 2"},{name:"[SA]2-L6",type:"Room",position:[493.72,271.47],floorName:"Floor 2"},{name:"[SA]2-H6",type:"Room",position:[340.63,271.47],floorName:"Floor 2"},{name:"[SA]2-I6",type:"Room",position:[378.94,271.47],floorName:"Floor 2"},{name:"[SA]2-J6",type:"Room",position:[417.18,271.47],floorName:"Floor 2"},{name:"[SA]2-K6",type:"Room",position:[455.43,271.47],floorName:"Floor 2"},{name:"[SA]2-B5",type:"Room",position:[111.03,309.74],floorName:"Floor 2"},{name:"[SA]2-C5",type:"Room",position:[149.29,309.74],floorName:"Floor 2"},{name:"[SA]2-D5",type:"Room",position:[187.56,309.74],floorName:"Floor 2"},{name:"[SA]2-H5",type:"Room",position:[340.63,309.74],floorName:"Floor 2"},{name:"[SA]2-I5",type:"Room",position:[378.94,309.74],floorName:"Floor 2"},{name:"[SA]2-J5",type:"Room",position:[417.18,309.74],floorName:"Floor 2"},{name:"[SA]2-H4",type:"Room",position:[340.62,348.01],floorName:"Floor 2"},{name:"[SA]2-I4",type:"Room",position:[378.94,348.01],floorName:"Floor 2"},{name:"[SA]2-J4",type:"Room",position:[417.18,348.01],floorName:"Floor 2"},{name:"[SA]2-G7",type:"Room",position:[302.36,233.21],floorName:"Floor 2"},{name:"210",type:"Room",position:[552.92,178.15],floorName:"Floor 2"},{name:"201",type:"Room",position:[248.59,216.99],floorName:"Floor 2"},{name:"[SA]2-M6",type:"Room",position:[531.96,271.47],floorName:"Floor 2"},{name:"202",type:"Room",position:[392.55,254.48],floorName:"Floor 2"}]},{name:"Floor 3",svg:"https://aohkolcopromuzleqove.supabase.co/storage/v1/object/sign/Maps/Library-3.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJNYXBzL0xpYnJhcnktMy5zdmciLCJpYXQiOjE3MTMyODcxMTUsImV4cCI6MTc0NDgyMzExNX0.5wNF7SAq_3XIOwycrQhEba6YAUr1X_OMP_LH9YbOi2A&t=2024-04-16T17%3A05%3A15.724Z",svgScale:.01,position:[-.05,.17],extrudedSections:["A-WALL-FULL"],floorLayer:{layer:"A-FLOOR-OUTLINE",enabled:!0},extrudeDepth:30,locations:[{name:"S-3C",type:"Room",position:[82.15,78.27],floorName:"Floor 3"},{name:"S-3B",type:"Room",position:[60.25,316.06],floorName:"Floor 3"},{name:"S-3E",type:"Room",position:[522.61,357.3],floorName:"Floor 3"},{name:"S-3D",type:"Room",position:[428.05,194.66],floorName:"Floor 3"},{name:"S-3A",type:"Room",position:[278.71,278.92],floorName:"Floor 3"},{name:"EL-3A",type:"Room",position:[226.71,256.67],floorName:"Floor 3"},{name:"L-3",type:"Room",position:[247.66,267.11],floorName:"Floor 3"},{name:"301",type:"Room",position:[276.06,234.93],floorName:"Floor 3"},{name:"314",type:"Room",position:[276.43,128.87],floorName:"Floor 3"},{name:"312",type:"Room",position:[276.83,168.16],floorName:"Floor 3"},{name:"313",type:"Room",position:[276.83,148.35],floorName:"Floor 3"},{name:"315A",type:"Room",position:[246.52,94.78],floorName:"Floor 3"},{name:"315B",type:"Room",position:[227.36,94.78],floorName:"Floor 3"},{name:"311",type:"Room",position:[277.26,187.83],floorName:"Floor 3"},{name:"310",type:"Room",position:[276.09,208.8],floorName:"Floor 3"},{name:"C-3B",type:"Room",position:[495.88,309.31],floorName:"Floor 3"},{name:"306",type:"Room",position:[493.35,294.66],floorName:"Floor 3"},{name:"307",type:"Room",position:[468.21,296.85],floorName:"Floor 3"},{name:"305",type:"Room",position:[488.71,322.57],floorName:"Floor 3"},{name:"304",type:"Room",position:[460.51,324.18],floorName:"Floor 3"},{name:"309",type:"Room",position:[438.63,221.52],floorName:"Floor 3"},{name:"308",type:"Room",position:[488,220.47],floorName:"Floor 3"},{name:"E-3A",type:"Room",position:[228.13,271.76],floorName:"Floor 3"},{name:"T-3B",type:"Room",position:[226.73,240.53],floorName:"Floor 3"},{name:"C-3A",type:"Room",position:[227.04,322.01],floorName:"Floor 3"},{name:"T-3A",type:"Room",position:[229.34,282.18],floorName:"Floor 3"},{name:"301B",type:"Room",position:[78.29,356.81],floorName:"Floor 3"},{name:"301A",type:"Room",position:[244.34,74.71],floorName:"Floor 3"},{name:"301C",type:"Room",position:[61.53,252.98],floorName:"Floor 3"},{name:"301D",type:"Room",position:[61.54,94.27],floorName:"Floor 3"},{name:"301E",type:"Room",position:[161.13,75.7],floorName:"Floor 3"},{name:"[XX]301",type:"Room",position:[283.97,265.24],floorName:"Floor 3"},{name:"H-3",type:"Room",position:[474.2,346.4],floorName:"Floor 3"},{name:"[BG]300",type:"Room",position:[59.99,67.05],floorName:"Floor 3"},{name:"EL-3B",type:"Room",position:[528.83,300.89],floorName:"Floor 3"},{name:"RR-M-3",type:"Room",position:[243.86,304.47],floorName:"Floor 3"},{name:"RR-W-3",type:"Room",position:[243.86,325.2],floorName:"Floor 3"},{name:"M-3A",type:"Room",position:[455.1,224.78],floorName:"Floor 3"},{name:"315",type:"Room",position:[239.26,113.03],floorName:"Floor 3"},{name:"316",type:"Room",position:[200.92,109.08],floorName:"Floor 3"},{name:"317",type:"Room",position:[201.49,199.57],floorName:"Floor 3"},{name:"[SA]3-B10",type:"Room",position:[110.82,118.4],floorName:"Floor 3"},{name:"[SA]3-B9",type:"Room",position:[110.89,156.67],floorName:"Floor 3"},{name:"[SA]3-B8",type:"Room",position:[110.88,194.94],floorName:"Floor 3"},{name:"[SA]3-B7",type:"Room",position:[110.88,233.21],floorName:"Floor 3"},{name:"[SA]3-B6",type:"Room",position:[110.88,271.47],floorName:"Floor 3"},{name:"[SA]3-B5",type:"Room",position:[110.88,309.74],floorName:"Floor 3"},{name:"[SA]3-A9",type:"Room",position:[72.63,156.67],floorName:"Floor 3"},{name:"[SA]3-A8",type:"Room",position:[72.63,194.94],floorName:"Floor 3"},{name:"[SA]3-C10",type:"Room",position:[149.08,118.4],floorName:"Floor 3"},{name:"[SA]3-C9",type:"Room",position:[149.15,156.67],floorName:"Floor 3"},{name:"[SA]3-C8",type:"Room",position:[149.15,194.94],floorName:"Floor 3"},{name:"[SA]3-C7",type:"Room",position:[149.15,233.21],floorName:"Floor 3"},{name:"[SA]3-C6",type:"Room",position:[149.15,271.47],floorName:"Floor 3"},{name:"[SA]3-C5",type:"Room",position:[149.15,309.74],floorName:"Floor 3"},{name:"[SA]3-C4",type:"Room",position:[149.15,348.01],floorName:"Floor 3"},{name:"[SA]3-D7",type:"Room",position:[187.42,233.21],floorName:"Floor 3"},{name:"[SA]3-D6",type:"Room",position:[187.42,271.47],floorName:"Floor 3"},{name:"[SA]3-D5",type:"Room",position:[187.42,309.74],floorName:"Floor 3"},{name:"[SA]3-D4",type:"Room",position:[187.42,348.01],floorName:"Floor 3"},{name:"[SA]3-317",type:"Room",position:[230.39,155.7],floorName:"Floor 3"},{name:"[SA]3-F7",type:"Room",position:[263.96,233.21],floorName:"Floor 3"},{name:"[SA]3-H7",type:"Room",position:[340.49,233.21],floorName:"Floor 3"},{name:"[SA]3-H8",type:"Room",position:[340.49,194.94],floorName:"Floor 3"},{name:"[SA]3-H5",type:"Room",position:[340.49,309.74],floorName:"Floor 3"},{name:"[SA]3-I7",type:"Room",position:[378.8,233.21],floorName:"Floor 3"},{name:"[SA]3-I8",type:"Room",position:[378.8,194.94],floorName:"Floor 3"},{name:"[SA]3-I5",type:"Room",position:[378.8,309.74],floorName:"Floor 3"},{name:"[SA]3-J7",type:"Room",position:[417.04,233.21],floorName:"Floor 3"},{name:"[SA]3-J5",type:"Room",position:[417.04,309.74],floorName:"Floor 3"},{name:"[SA]3-L6",type:"Room",position:[493.57,271.47],floorName:"Floor 3"},{name:"302",type:"Room",position:[391.48,248.45],floorName:"Floor 3"},{name:"303",type:"Room",position:[392.01,294.12],floorName:"Floor 3"},{name:"FPS-3",type:"Room",position:[292.07,290.26],floorName:"Floor 3"}]},{name:"Roof",svg:"https://aohkolcopromuzleqove.supabase.co/storage/v1/object/sign/Maps/Library-4.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJNYXBzL0xpYnJhcnktNC5zdmciLCJpYXQiOjE3MTMyODcxMjMsImV4cCI6MTc0NDgyMzEyM30.ZBPiaevWngeuYsgxcaJNsUyOixKoTBnCrc6P0BIqFgQ&t=2024-04-16T17%3A05%3A23.294Z",svgScale:.01,position:[.2,-.25],extrudedSections:[],floorLayer:{layer:"",enabled:!1},extrudeDepth:0,locations:[]}],Ss=document.querySelector("#c"),Ou=new dv({antialias:!0,canvas:Ss}),kn=new ax;kn.setSize(window.innerWidth,window.innerHeight);kn.domElement.style.position="absolute";kn.domElement.style.top="0px";kn.domElement.style.zIndex=1;document.body.appendChild(kn.domElement);const Dy=75,Uy=2,Fy=.01,Oy=500,fn=new en(Dy,Uy,Fy,Oy),Co={x:0,y:4,z:4};fn.position.x=Co.x;fn.position.y=Co.y;fn.position.z=Co.z;fn.lookAt(0,0,0);const Hn=new pv;Hn.background=new He(13624035);const Er=new ox(fn,kn.domElement);Er.addEventListener("change",bs);Er.screenSpacePanning=!0;window.addEventListener("resize",bs);const By=16777215,zy=2.5,wf=new tx(By,zy);wf.position.set(-1,2,4);Hn.add(wf);const ky=new nx(13624035);Hn.add(ky);let dr;Hy(hi).then(r=>Vy(r)).then(r=>{Gy(),Wy(r),bs()});function Rf(){requestAnimationFrame(Rf),pl.update(),bs()}Rf();function bs(){(Bu(Ou)||Bu(kn))&&(fn.aspect=Ss.clientWidth/Ss.clientHeight,fn.updateProjectionMatrix()),Ou.render(Hn,fn),kn.render(Hn,fn)}function Bu(r){const e=window.innerWidth,t=window.innerHeight,n=Ss.width!==e||Ss.height!==t;return n&&(r.setSize(e,t,!1),kn.setSize(e,t)),n}function Hy(r){return new Promise((e,t)=>{const n=new xr;let i=[];r.forEach((s,o,a)=>{const l={extruded:{},nonExtruded:{other:[]},floorGeometries:[]};s.extrudedSections.forEach(c=>{l.extruded[c]={pathGeometries:[],extrudeGeometries:[]}}),n.load(s.svg,function(c){for(const E of c.paths){const x=E.userData.style.fill,C=E.userData.node.parentElement.parentElement.id;if(x!==void 0&&x!=="none"){const M=xr.createShapes(E);for(const S of M){const V=new hl(S).toNonIndexed();s.extrudedSections.includes(C)?l.extruded[C].pathGeometries.push(V):s.floorLayer.layer.length>0&&s.floorLayer.layer==C?l.floorGeometries.push(V):l.nonExtruded.other.push(V)}}const w=E.userData.style.stroke;if(w!==void 0&&w!=="none")for(const M of E.subPaths){const S=xr.pointsToStroke(M.getPoints(),E.userData.style);S&&(s.extrudedSections.includes(C)?l.extruded[C].pathGeometries.push(S):s.floorLayer.layer.length>0&&s.floorLayer==C?l.floorGeometries.push(S):l.nonExtruded.other.push(S))}const F=xr.createShapes(E);s.extrudeDepth>0&&F.forEach((M,S)=>{if(s.extrudedSections.includes(C)){const V=new ul(M,{depth:s.extrudeDepth,bevelEnabled:!1});V.computeVertexNormals(),l.extruded[C].extrudeGeometries.push(V)}})}const u=new _r;u.name=s.name;let h=new jv({color:0,side:un});const f=new lu({transparent:!0,opacity:.5}),p=new lu({side:un});s.extrudedSections.forEach(E=>{if(s.extrudeDepth>0){const I=Qs(l.extruded[E].extrudeGeometries);I.computeBoundingSphere();const C=new qt(I,f);C.scale.multiplyScalar(s.svgScale),C.scale.y*=-1,C.name="extruded_mesh",u.add(C)}const x=Qs(l.extruded[E].pathGeometries);x.computeBoundingSphere();const T=new qt(x,h);T.scale.multiplyScalar(s.svgScale),T.scale.y*=-1,s.extrudeDepth>0&&(T.position.z=(s.extrudeDepth+1)*s.svgScale),T.name="extruded_path",u.add(T)});const g=Qs(l.nonExtruded.other);g.computeBoundingSphere();const _=new qt(g,h);if(_.scale.multiplyScalar(s.svgScale),_.scale.y*=-1,_.position.z+=1/100,_.name="other_path",u.add(_),l.floorGeometries.length>0&&s.floorLayer.enabled){const E=Qs(l.floorGeometries);E.computeBoundingSphere();const x=new qt(E,p);x.scale.multiplyScalar(s.svgScale),x.scale.y*=-1,x.name="lower_floor",u.add(x);const T=x.clone();T.position.z+=s.extrudeDepth*s.svgScale,T.name="upper_floor",u.add(T)}u.rotateX(-Math.PI/2);const m=new Vr().setFromObject(u).getSize(new q);if(u.position.x=-m.x/2,u.position.z=-m.z/2,u.position.x+=s.position[0],u.position.z-=s.position[1],o>0){let E=0;for(let x=0;x<o;x++)E+=a[x].extrudeDepth*s.svgScale+3/100;u.position.y=E}Hn.add(u),i.push(u),i.length==a.length&&e(i)},function(c){console.log("SVG "+c.loaded/c.total*100+"% loaded")},function(c){console.log("An error happened: "+c)})})})}function Gy(){hi.forEach(r=>{let e=Hn.getObjectByName(r.name);if(typeof e<"u"){let t=new _r;r.locations.forEach(n=>{const i=document.createElement("div");let s=document.createElement("BUTTON");s.setAttribute("class","label highlight-onselect"),s.appendChild(document.createTextNode(n.name)),i.appendChild(s),s.addEventListener("pointerdown",function(){Cf(n),Nl(!0),Po(n,!0)}),i.style.backgroundColor="transparent";const o=new Th(i);o.position.set(n.position[0]*r.svgScale,n.position[1]*-1*r.svgScale,0),o.center.set(0,1),t.add(o),o.layers.set(0)}),t.name="locations",e.add(t),Lo(e,!1)}})}function Vy(r){return r.slice().sort(function(t,n){let i=hi.findIndex(o=>o.name==t.name),s=hi.findIndex(o=>o.name==n.name);return i-s})}function Wy(r){document.getElementById("back-arrow").onclick=()=>{jy(r)};const e=document.getElementById("information-panel");e.style.display="none";const t=document.getElementById("search-bar");t.addEventListener("input",function(i){i.target.value.length>0?(so(!0),Tr(i.target.value,!0)):(document.getElementById("information-panel").style.display=="none"&&so(!1),Tr("",!1))}),t.addEventListener("focusin",function(i){t.value.length>0&&Tr(t.value,!0)}),t.addEventListener("focusout",function(i){(!i.relatedTarget||i.relatedTarget&&!i.relatedTarget.classList.contains("search-result-button"))&&Tr("",!1)});const n=document.getElementById("clear-search");n.onclick=()=>{t.value="",Nl(!1),so(!1),Po("",!1)},qy(r)}function Po(r,e){if(e){Po("",!1);const t=document.createElement("div");t.className="location-point";const n=hi.find(s=>s.name==r.floorName);let i=Hn.getObjectByName(r.floorName);dr=new Th(t),dr.position.set(r.position[0]*n.svgScale+i.position.x,i.position.y,r.position[1]*n.svgScale+i.position.z),Hn.add(dr),dr.layers.set(0)}else dr!==void 0&&dr.removeFromParent()}function Cf(r){const e=document.getElementById("information-panel-img"),t=document.getElementById("information-panel-name"),n=document.getElementById("information-panel-description"),i=document.getElementById("search-bar");r.img||(e.style.display="none"),r.name&&(t.textContent=r.name,i.value=r.name,so(!0),r.type=="Room"&&(t.textContent="Room "+r.name)),r.type=="Room"&&(n.textContent="Room"),r.description&&(n.textContent=r.description)}function Nl(r){const e=document.getElementById("information-panel");r?(e.style.display="block",ys.to("#information-panel",{left:0,duration:.25})):ys.to("#information-panel",{left:-360,duration:.25,onComplete:function(){e.style.display="none"}})}function so(r){const e=document.getElementById("clear-search-div");r?e.style.display="block":e.style.display="none"}function Xy(r,e){let t=[];return hi.forEach(i=>{t=t.concat(i.locations)}),Iy.go(r,t,{key:"name",limit:e}).map(i=>i.obj)}function Tr(r,e){const t=document.getElementById("search-items"),n=document.getElementById("search-bar");if(e)Tr("",!1),Xy(r,5).forEach(s=>{const o=document.createElement("li"),a=document.createElement("BUTTON");a.setAttribute("class","search-result-button highlight-onselect"),a.appendChild(document.createTextNode(s.name)),a.onclick=()=>{Cf(s),Nl(!0),Tr("",!1),Po(s,!0)},o.appendChild(a),t.appendChild(o)}),n.style.borderRadius="15px 15px 0 0",t.style.boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset";else{for(;t.firstChild;)t.removeChild(t.firstChild);n.style.borderRadius="25px",t.style.boxShadow="none"}}function qy(r){const e=document.getElementById("floor-buttons");r.forEach(t=>{let n=document.createElement("BUTTON");n.setAttribute("class","highlight-onselect"),n.appendChild(document.createTextNode(t.name)),n.onclick=()=>{Yy(r,t)},e.appendChild(n)})}function Qa(r,e){r.visible=e,Lo(r,e)}function Lo(r,e){r.children.forEach(t=>{t.name=="locations"&&t.children.forEach(n=>{n.visible=e})})}function Pf(r,e){let t=r.getObjectByName("extruded_mesh"),n=r.getObjectByName("upper_floor"),i=r.getObjectByName("extruded_path"),s=r.getObjectByName("other_path");if(t&&n&&i&&s)if(!e)t.visible=!1,n.visible=!1,i.position.z=s.position.z;else{let o=hi[hi.findIndex(a=>a.name==r.name)];t.visible=!0,n.visible=!0,i.position.z=(o.extrudeDepth+1)*o.svgScale}}function Lf(r,e,t){const n=new vr().setFromVector3(fn.position),i=new vr().setFromVector3(Er.target),s=new vr().setFromCartesianCoords(r.x,r.y,r.z);ys.to(n,{duration:t,radius:s.radius,phi:s.phi,theta:s.theta,onUpdate:function(){const a=new q().setFromSpherical(n);fn.position.set(a.x,a.y,a.z),Er.update()}});const o=new vr().setFromCartesianCoords(e.x,e.y,e.z);o.radius=0,o.phi=1e-4,o.theta=0,ys.to(i,{duration:t,radius:o.radius,phi:o.phi,theta:o.theta,onUpdate:function(){Er.target=new q().setFromSpherical(i),Er.update()}})}function Yy(r,e){r.forEach(i=>{Qa(i,!1)}),Qa(e,!0),Lo(e,!0),Pf(e,!1);let n={x:0,y:e.position.y+4,z:0};Lf(n,{x:0,y:0,z:0},1),bs()}function jy(r){r.forEach(e=>{Qa(e,!0),Lo(e,!1),Pf(e,!0),Lf(Co,{x:0,y:0,z:0},1)})}});export default Jy();
