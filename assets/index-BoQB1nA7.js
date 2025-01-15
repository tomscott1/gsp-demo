var Nc=Object.defineProperty;var Oc=(s,e,t)=>e in s?Nc(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ae=(s,e,t)=>Oc(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="160",si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hc=0,ja=1,zc=2,Wl=1,kc=2,vn=3,fn=0,Nt=1,jt=2,Un=0,Nn=1,Ja=2,Za=3,$a=4,Xl=5,Kn=100,Gc=101,Vc=102,eo=103,to=104,Wc=200,Xc=201,Qc=202,qc=203,or=204,lr=205,Yc=206,Kc=207,jc=208,Jc=209,Zc=210,$c=211,eh=212,th=213,nh=214,ih=0,rh=1,sh=2,Kr=3,ah=4,oh=5,lh=6,ch=7,Ql=0,hh=1,uh=2,On=0,dh=1,fh=2,ph=3,mh=4,gh=5,Ah=6,ql=300,Ni=301,Oi=302,ta=303,na=304,cs=306,ia=1e3,an=1001,ra=1002,yt=1003,no=1004,xs=1005,qt=1006,Sh=1007,cr=1008,Cn=1009,xh=1010,vh=1011,Aa=1012,Yl=1013,Vt=1014,un=1015,Hi=1016,Kl=1017,jl=1018,ti=1020,_h=1021,Ut=1023,yh=1024,Mh=1025,Hn=1026,zi=1027,Eh=1028,Sa=1029,Jl=1030,Zl=1031,Ji=1033,vs=33776,_s=33777,ys=33778,Ms=33779,io=35840,ro=35841,so=35842,ao=35843,$l=36196,oo=37492,lo=37496,co=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,go=37814,Ao=37815,So=37816,xo=37817,vo=37818,_o=37819,yo=37820,Mo=37821,Es=36492,Eo=36494,Co=36495,Ch=36283,To=36284,bo=36285,wo=36286,ec=3e3,ni=3001,Th=3200,bh=3201,wh=0,Rh=1,Jt="",Mt="srgb",Tn="srgb-linear",xa="display-p3",hs="display-p3-linear",jr="linear",rt="srgb",Jr="rec709",Zr="p3",oi=7680,Ro=519,Ih=512,Dh=513,Ph=514,tc=515,Lh=516,Bh=517,Fh=518,Uh=519,Io=35044,Nh=35048,Do="300 es",sa=1035,En=2e3,$r=2001;class ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Po=1234567;const Zi=Math.PI/180,hr=180/Math.PI;function Vi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[s&255]+wt[s>>8&255]+wt[s>>16&255]+wt[s>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function va(s,e){return(s%e+e)%e}function Oh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Hh(s,e,t){return s!==e?(t-s)/(e-s):0}function $i(s,e,t){return(1-t)*s+t*e}function zh(s,e,t,n){return $i(s,e,1-Math.exp(-t*n))}function kh(s,e=1){return e-Math.abs(va(s,e*2)-e)}function Gh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Vh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Wh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Xh(s,e){return s+Math.random()*(e-s)}function Qh(s){return s*(.5-Math.random())}function qh(s){s!==void 0&&(Po=s);let e=Po+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yh(s){return s*Zi}function Kh(s){return s*hr}function aa(s){return(s&s-1)===0&&s!==0}function jh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function es(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Jh(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),A=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*A,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*A,o*c);break;case"ZYZ":s.set(l*A,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nc={DEG2RAD:Zi,RAD2DEG:hr,generateUUID:Vi,clamp:Ct,euclideanModulo:va,mapLinear:Oh,inverseLerp:Hh,lerp:$i,damp:zh,pingpong:kh,smoothstep:Gh,smootherstep:Vh,randInt:Wh,randFloat:Xh,randFloatSpread:Qh,seededRandom:qh,degToRad:Yh,radToDeg:Kh,isPowerOfTwo:aa,ceilPowerOfTwo:jh,floorPowerOfTwo:es,setQuaternionFromProperEuler:Jh,normalize:Bt,denormalize:bi};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,i,r,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],A=n[8],g=i[0],m=i[3],f=i[6],x=i[1],S=i[4],v=i[7],T=i[2],E=i[5],_=i[8];return r[0]=a*g+o*x+l*T,r[3]=a*m+o*S+l*E,r[6]=a*f+o*v+l*_,r[1]=c*g+h*x+u*T,r[4]=c*m+h*S+u*E,r[7]=c*f+h*v+u*_,r[2]=d*g+p*x+A*T,r[5]=d*m+p*S+A*E,r[8]=d*f+p*v+A*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,A=t*u+n*d+i*p;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/A;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cs.makeScale(e,t)),this}rotate(e){return this.premultiply(Cs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cs=new Fe;function ic(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ts(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zh(){const s=ts("canvas");return s.style.display="block",s}const Lo={};function er(s){s in Lo||(Lo[s]=!0,console.warn(s))}const Bo=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fo=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ar={[Tn]:{transfer:jr,primaries:Jr,toReference:s=>s,fromReference:s=>s},[Mt]:{transfer:rt,primaries:Jr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[hs]:{transfer:jr,primaries:Zr,toReference:s=>s.applyMatrix3(Fo),fromReference:s=>s.applyMatrix3(Bo)},[xa]:{transfer:rt,primaries:Zr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Fo),fromReference:s=>s.applyMatrix3(Bo).convertLinearToSRGB()}},$h=new Set([Tn,hs]),et={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!$h.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ar[e].toReference,i=Ar[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ar[s].primaries},getTransfer:function(s){return s===Jt?jr:Ar[s].transfer}};function Pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let li;class rc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=ts("canvas")),li.width=e.width,li.height=e.height;const n=li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ts("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eu=0;class sc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Vi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(bs(i[a].image)):r.push(bs(i[a]))}else r=bs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function bs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tu=0;class Ot extends ri{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=an,i=an,r=qt,a=cr,o=Ut,l=Cn,c=Ot.DEFAULT_ANISOTROPY,h=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Vi(),this.name="",this.source=new sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ni?Mt:Jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?ni:ec}set encoding(e){er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ni?Mt:Jt}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=ql;Ot.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],A=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(A-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(A+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(p+1)/2,T=(f+1)/2,E=(h+d)/4,_=(u+g)/4,I=(A+m)/4;return S>v&&S>T?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=_/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=I/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=_/r,i=I/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-A)*(m-A)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-A)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nu extends ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ni?Mt:Jt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends nu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ac extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iu extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ot{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],A=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=A,e[t+3]=g;return}if(u!==g||l!==d||c!==p||h!==A){let m=1-o;const f=l*d+c*p+h*A+u*g,x=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const T=Math.sqrt(S),E=Math.atan2(T,f*x);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}const v=o*x;if(l=l*m+d*v,c=c*m+p*v,h=h*m+A*v,u=u*m+g*v,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],A=r[a+3];return e[t]=o*A+h*u+l*p-c*d,e[t+1]=l*A+h*d+c*u-o*p,e[t+2]=c*A+h*p+o*d-l*u,e[t+3]=h*A-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),A=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*A,this._y=c*p*u-d*h*A,this._z=c*h*A+d*p*u,this._w=c*h*u-d*p*A;break;case"YXZ":this._x=d*h*u+c*p*A,this._y=c*p*u-d*h*A,this._z=c*h*A-d*p*u,this._w=c*h*u+d*p*A;break;case"ZXY":this._x=d*h*u-c*p*A,this._y=c*p*u+d*h*A,this._z=c*h*A+d*p*u,this._w=c*h*u-d*p*A;break;case"ZYX":this._x=d*h*u-c*p*A,this._y=c*p*u+d*h*A,this._z=c*h*A-d*p*u,this._w=c*h*u+d*p*A;break;case"YZX":this._x=d*h*u+c*p*A,this._y=c*p*u+d*h*A,this._z=c*h*A-d*p*u,this._w=c*h*u-d*p*A;break;case"XZY":this._x=d*h*u-c*p*A,this._y=c*p*u-d*h*A,this._z=c*h*A+d*p*u,this._w=c*h*u+d*p*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ws.copy(this).projectOnVector(e),this.sub(ws)}reflect(e){return this.sub(ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ws=new D,Uo=new ot;class dn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),xr.subVectors(this.max,qi),ci.subVectors(e.a,qi),hi.subVectors(e.b,qi),ui.subVectors(e.c,qi),bn.subVectors(hi,ci),wn.subVectors(ui,hi),Wn.subVectors(ci,ui);let t=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-Wn.z,Wn.y,bn.z,0,-bn.x,wn.z,0,-wn.x,Wn.z,0,-Wn.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-Wn.y,Wn.x,0];return!Rs(t,ci,hi,ui,xr)||(t=[1,0,0,0,1,0,0,0,1],!Rs(t,ci,hi,ui,xr))?!1:(vr.crossVectors(bn,wn),t=[vr.x,vr.y,vr.z],Rs(t,ci,hi,ui,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new D,new D,new D,new D,new D,new D,new D,new D],tn=new D,Sr=new dn,ci=new D,hi=new D,ui=new D,bn=new D,wn=new D,Wn=new D,qi=new D,xr=new D,vr=new D,Xn=new D;function Rs(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Xn.fromArray(s,r);const o=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ru=new dn,Yi=new D,Is=new D;class _a{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ru.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const t=Yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Is.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(Is)),this.expandByPoint(Yi.copy(e.center).sub(Is))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new D,Ds=new D,_r=new D,Rn=new D,Ps=new D,yr=new D,Ls=new D;class oc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ds.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(Ds);const r=e.distanceTo(t)*.5,a=-this.direction.dot(_r),o=Rn.dot(this.direction),l=-Rn.dot(_r),c=Rn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,A;if(h>0)if(u=a*l-o,d=a*o-l,A=r*h,u>=0)if(d>=-A)if(d<=A){const g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-A?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=A?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ds).addScaledVector(_r,d),p}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),i=gn.dot(gn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,i,r){Ps.subVectors(t,e),yr.subVectors(n,e),Ls.crossVectors(Ps,yr);let a=this.direction.dot(Ls),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);const l=o*this.direction.dot(yr.crossVectors(Rn,yr));if(l<0)return null;const c=o*this.direction.dot(Ps.cross(Rn));if(c<0||l+c>a)return null;const h=-o*Rn.dot(Ls);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,i,r,a,o,l,c,h,u,d,p,A,g,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,p,A,g,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,p,A,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=A,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/di.setFromMatrixColumn(e,0).length(),r=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,A=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+A*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=A+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,A=c*h,g=c*u;t[0]=d+g*o,t[4]=A*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-A,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,A=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=A+p*o,t[1]=p+A*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,A=o*h,g=o*u;t[0]=l*h,t[4]=A*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-A,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,A=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=A*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+A,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*l,p=a*c,A=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=p*u-A,t[2]=A*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(su,e,au)}lookAt(e,t,n){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),In.crossVectors(n,zt),In.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),In.crossVectors(n,zt)),In.normalize(),Mr.crossVectors(zt,In),i[0]=In.x,i[4]=Mr.x,i[8]=zt.x,i[1]=In.y,i[5]=Mr.y,i[9]=zt.y,i[2]=In.z,i[6]=Mr.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],A=n[2],g=n[6],m=n[10],f=n[14],x=n[3],S=n[7],v=n[11],T=n[15],E=i[0],_=i[4],I=i[8],M=i[12],y=i[1],P=i[5],F=i[9],N=i[13],R=i[2],L=i[6],B=i[10],O=i[14],W=i[3],j=i[7],J=i[11],ee=i[15];return r[0]=a*E+o*y+l*R+c*W,r[4]=a*_+o*P+l*L+c*j,r[8]=a*I+o*F+l*B+c*J,r[12]=a*M+o*N+l*O+c*ee,r[1]=h*E+u*y+d*R+p*W,r[5]=h*_+u*P+d*L+p*j,r[9]=h*I+u*F+d*B+p*J,r[13]=h*M+u*N+d*O+p*ee,r[2]=A*E+g*y+m*R+f*W,r[6]=A*_+g*P+m*L+f*j,r[10]=A*I+g*F+m*B+f*J,r[14]=A*M+g*N+m*O+f*ee,r[3]=x*E+S*y+v*R+T*W,r[7]=x*_+S*P+v*L+T*j,r[11]=x*I+S*F+v*B+T*J,r[15]=x*M+S*N+v*O+T*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],A=e[3],g=e[7],m=e[11],f=e[15];return A*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+g*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],A=e[12],g=e[13],m=e[14],f=e[15],x=u*m*c-g*d*c+g*l*p-o*m*p-u*l*f+o*d*f,S=A*d*c-h*m*c-A*l*p+a*m*p+h*l*f-a*d*f,v=h*g*c-A*u*c+A*o*p-a*g*p-h*o*f+a*u*f,T=A*u*l-h*g*l-A*o*d+a*g*d+h*o*m-a*u*m,E=t*x+n*S+i*v+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/E;return e[0]=x*_,e[1]=(g*d*r-u*m*r-g*i*p+n*m*p+u*i*f-n*d*f)*_,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*f+n*l*f)*_,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*_,e[4]=S*_,e[5]=(h*m*r-A*d*r+A*i*p-t*m*p-h*i*f+t*d*f)*_,e[6]=(A*l*r-a*m*r-A*i*c+t*m*c+a*i*f-t*l*f)*_,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*p+t*l*p)*_,e[8]=v*_,e[9]=(A*u*r-h*g*r-A*n*p+t*g*p+h*n*f-t*u*f)*_,e[10]=(a*g*r-A*o*r+A*n*c-t*g*c-a*n*f+t*o*f)*_,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*_,e[12]=T*_,e[13]=(h*g*i-A*u*i+A*n*d-t*g*d-h*n*m+t*u*m)*_,e[14]=(A*o*i-a*g*i-A*n*l+t*g*l+a*n*m-t*o*m)*_,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*_,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,A=r*u,g=a*h,m=a*u,f=o*u,x=l*c,S=l*h,v=l*u,T=n.x,E=n.y,_=n.z;return i[0]=(1-(g+f))*T,i[1]=(p+v)*T,i[2]=(A-S)*T,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(d+f))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(A+S)*_,i[9]=(m-x)*_,i[10]=(1-(d+g))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=di.set(i[0],i[1],i[2]).length();const a=di.set(i[4],i[5],i[6]).length(),o=di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],nn.copy(this);const c=1/r,h=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=En){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,A;if(o===En)p=-(a+r)/(a-r),A=-2*a*r/(a-r);else if(o===$r)p=-a/(a-r),A=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=En){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,p=(n+i)*h;let A,g;if(o===En)A=(a+r)*u,g=-2*u;else if(o===$r)A=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new D,nn=new Ue,su=new D(0,0,0),au=new D(1,1,1),In=new D,Mr=new D,zt=new D,No=new Ue,Oo=new ot;class us{constructor(e=0,t=0,n=0,i=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return No.makeRotationFromQuaternion(e),this.setFromRotationMatrix(No,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oo.setFromEuler(this),this.setFromQuaternion(Oo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class lc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ou=0;const Ho=new D,fi=new ot,An=new Ue,Er=new D,Ki=new D,lu=new D,cu=new ot,zo=new D(1,0,0),ko=new D(0,1,0),Go=new D(0,0,1),hu={type:"added"},uu={type:"removed"};class mt extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new D,t=new us,n=new ot,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Fe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(zo,e)}rotateY(e){return this.rotateOnAxis(ko,e)}rotateZ(e){return this.rotateOnAxis(Go,e)}translateOnAxis(e,t){return Ho.copy(e).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zo,e)}translateY(e){return this.translateOnAxis(ko,e)}translateZ(e){return this.translateOnAxis(Go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Ki,Er,this.up):An.lookAt(Er,Ki,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),fi.setFromRotationMatrix(An),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),A=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),A.length>0&&(n.nodes=A)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new D(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new D,Sn=new D,Bs=new D,xn=new D,pi=new D,mi=new D,Vo=new D,Fs=new D,Us=new D,Ns=new D;let Cr=!1;class sn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){rn.subVectors(i,t),Sn.subVectors(n,t),Bs.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Sn),l=rn.dot(Bs),c=Sn.dot(Sn),h=Sn.dot(Bs),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,A=(a*h-o*l)*d;return r.set(1-p-A,A,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,n,i,r,a,o,l){return Cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cr=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),Sn.subVectors(e,t),rn.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cr=!0),sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;pi.subVectors(i,n),mi.subVectors(r,n),Fs.subVectors(e,n);const l=pi.dot(Fs),c=mi.dot(Fs);if(l<=0&&c<=0)return t.copy(n);Us.subVectors(e,i);const h=pi.dot(Us),u=mi.dot(Us);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(pi,a);Ns.subVectors(e,r);const p=pi.dot(Ns),A=mi.dot(Ns);if(A>=0&&p<=A)return t.copy(r);const g=p*c-l*A;if(g<=0&&c>=0&&A<=0)return o=c/(c-A),t.copy(n).addScaledVector(mi,o);const m=h*A-p*u;if(m<=0&&u-h>=0&&p-A>=0)return Vo.subVectors(r,i),o=(u-h)/(u-h+(p-A)),t.copy(i).addScaledVector(Vo,o);const f=1/(m+g+d);return a=g*f,o=d*f,t.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Os(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=va(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Os(a,r,e+1/3),this.g=Os(a,r,e),this.b=Os(a,r,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=cc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return et.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Ct(Rt.r*255,0,255))*65536+Math.round(Ct(Rt.g*255,0,255))*256+Math.round(Ct(Rt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,i=Rt.g,r=Rt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Mt){et.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,i=Rt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Tr);const n=$i(Dn.h,Tr.h,t),i=$i(Dn.s,Tr.s,t),r=$i(Dn.l,Tr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Ke;Ke.NAMES=cc;let du=0;class ds extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Nn,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=or,this.blendDst=lr,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Nn&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==or&&(n.blendSrc=this.blendSrc),this.blendDst!==lr&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ro&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ii extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mn=fu();function fu(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function pu(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ct(s,-65504,65504),Mn.floatView[0]=s;const e=Mn.uint32View[0],t=e>>23&511;return Mn.baseTable[t]+((e&8388607)>>Mn.shiftTable[t])}function mu(s){const e=s>>10;return Mn.uint32View[0]=Mn.mantissaTable[Mn.offsetTable[e]+(s&1023)]+Mn.exponentTable[e],Mn.floatView[0]}const ur={toHalfFloat:pu,fromHalfFloat:mu},ut=new D,br=new xe;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Io&&(e.usage=this.usage),e}}class hc extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uc extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gu=0;const Qt=new Ue,Hs=new mt,gi=new D,kt=new dn,ji=new dn,vt=new D;class en extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ic(e)?uc:hc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Hs.lookAt(e),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(kt.min,ji.min),kt.expandByPoint(vt),vt.addVectors(kt.max,ji.max),kt.expandByPoint(vt)):(kt.expandByPoint(ji.min),kt.expandByPoint(ji.max))}kt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(e,c),vt.add(gi)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let y=0;y<o;y++)c[y]=new D,h[y]=new D;const u=new D,d=new D,p=new D,A=new xe,g=new xe,m=new xe,f=new D,x=new D;function S(y,P,F){u.fromArray(i,y*3),d.fromArray(i,P*3),p.fromArray(i,F*3),A.fromArray(a,y*2),g.fromArray(a,P*2),m.fromArray(a,F*2),d.sub(u),p.sub(u),g.sub(A),m.sub(A);const N=1/(g.x*m.y-m.x*g.y);isFinite(N)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(N),x.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(N),c[y].add(f),c[P].add(f),c[F].add(f),h[y].add(x),h[P].add(x),h[F].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let y=0,P=v.length;y<P;++y){const F=v[y],N=F.start,R=F.count;for(let L=N,B=N+R;L<B;L+=3)S(n[L+0],n[L+1],n[L+2])}const T=new D,E=new D,_=new D,I=new D;function M(y){_.fromArray(r,y*3),I.copy(_);const P=c[y];T.copy(P),T.sub(_.multiplyScalar(_.dot(P))).normalize(),E.crossVectors(I,P);const N=E.dot(h[y])<0?-1:1;l[y*4]=T.x,l[y*4+1]=T.y,l[y*4+2]=T.z,l[y*4+3]=N}for(let y=0,P=v.length;y<P;++y){const F=v[y],N=F.start,R=F.count;for(let L=N,B=N+R;L<B;L+=3)M(n[L+0]),M(n[L+1]),M(n[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const A=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,A),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(A,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,A=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let f=0;f<h;f++)d[A++]=c[p++]}return new Zt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new Ue,Qn=new oc,wr=new _a,Xo=new D,Ai=new D,Si=new D,xi=new D,zs=new D,Rr=new D,Ir=new xe,Dr=new xe,Pr=new xe,Qo=new D,qo=new D,Yo=new D,Lr=new D,Br=new D;class dt extends mt{constructor(e=new en,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(zs.fromBufferAttribute(u,e),a?Rr.addScaledVector(zs,h):Rr.addScaledVector(zs.sub(t),h))}t.add(Rr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(wr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(wr,Xo)===null||Qn.origin.distanceToSquared(Xo)>(e.far-e.near)**2))&&(Wo.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(Wo),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let A=0,g=d.length;A<g;A++){const m=d[A],f=a[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,T=S;v<T;v+=3){const E=o.getX(v),_=o.getX(v+1),I=o.getX(v+2);i=Fr(this,f,e,n,c,h,u,E,_,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const A=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=A,f=g;m<f;m+=3){const x=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);i=Fr(this,a,e,n,c,h,u,x,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let A=0,g=d.length;A<g;A++){const m=d[A],f=a[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,T=S;v<T;v+=3){const E=v,_=v+1,I=v+2;i=Fr(this,f,e,n,c,h,u,E,_,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const A=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=A,f=g;m<f;m+=3){const x=m,S=m+1,v=m+2;i=Fr(this,a,e,n,c,h,u,x,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Au(s,e,t,n,i,r,a,o){let l;if(e.side===Nt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===fn,o),l===null)return null;Br.copy(o),Br.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:s}}function Fr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ai),s.getVertexPosition(l,Si),s.getVertexPosition(c,xi);const h=Au(s,e,t,n,Ai,Si,xi,Lr);if(h){i&&(Ir.fromBufferAttribute(i,o),Dr.fromBufferAttribute(i,l),Pr.fromBufferAttribute(i,c),h.uv=sn.getInterpolation(Lr,Ai,Si,xi,Ir,Dr,Pr,new xe)),r&&(Ir.fromBufferAttribute(r,o),Dr.fromBufferAttribute(r,l),Pr.fromBufferAttribute(r,c),h.uv1=sn.getInterpolation(Lr,Ai,Si,xi,Ir,Dr,Pr,new xe),h.uv2=h.uv1),a&&(Qo.fromBufferAttribute(a,o),qo.fromBufferAttribute(a,l),Yo.fromBufferAttribute(a,c),h.normal=sn.getInterpolation(Lr,Ai,Si,xi,Qo,qo,Yo,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};sn.getNormal(Ai,Si,xi,u.normal),h.face=u}return h}class Wi extends en{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;A("z","y","x",-1,-1,n,t,e,a,r,0),A("z","y","x",1,-1,n,t,-e,a,r,1),A("x","z","y",1,1,e,n,t,i,a,2),A("x","z","y",1,-1,e,n,-t,i,a,3),A("x","y","z",1,-1,e,t,n,i,r,4),A("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function A(g,m,f,x,S,v,T,E,_,I,M){const y=v/_,P=T/I,F=v/2,N=T/2,R=E/2,L=_+1,B=I+1;let O=0,W=0;const j=new D;for(let J=0;J<B;J++){const ee=J*P-N;for(let Z=0;Z<L;Z++){const Q=Z*y-F;j[g]=Q*x,j[m]=ee*S,j[f]=R,c.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[f]=E>0?1:-1,h.push(j.x,j.y,j.z),u.push(Z/_),u.push(1-J/I),O+=1}}for(let J=0;J<I;J++)for(let ee=0;ee<_;ee++){const Z=d+ee+L*J,Q=d+ee+L*(J+1),K=d+(ee+1)+L*(J+1),ie=d+(ee+1)+L*J;l.push(Z,Q,ie),l.push(Q,K,ie),W+=6}o.addGroup(p,W,M),p+=W,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(s){const e={};for(let t=0;t<s.length;t++){const n=ki(s[t]);for(const i in n)e[i]=n[i]}return e}function Su(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function dc(s){return s.getRenderTarget()===null?s.outputColorSpace:et.workingColorSpace}const xu={clone:ki,merge:Ft};var vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Su(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fc extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends fc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,_i=1;class yu extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(vi,_i,e,t);i.layers=this.layers,this.add(i);const r=new Yt(vi,_i,e,t);r.layers=this.layers,this.add(r);const a=new Yt(vi,_i,e,t);a.layers=this.layers,this.add(a);const o=new Yt(vi,_i,e,t);o.layers=this.layers,this.add(o);const l=new Yt(vi,_i,e,t);l.layers=this.layers,this.add(l);const c=new Yt(vi,_i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class pc extends Ot{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mu extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ni?Mt:Jt),this.texture=new pc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wi(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Un});r.uniforms.tEquirect.value=t;const a=new dt(i,r),o=t.minFilter;return t.minFilter===cr&&(t.minFilter=qt),new yu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const ks=new D,Eu=new D,Cu=new Fe;class Ln{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ks.subVectors(n,t).cross(Eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ks),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cu.getNormalMatrix(e),i=this.coplanarPoint(ks).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new _a,Ur=new D;class mc{constructor(e=new Ln,t=new Ln,n=new Ln,i=new Ln,r=new Ln,a=new Ln){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],A=i[9],g=i[10],m=i[11],f=i[12],x=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+a,d+h,m+A,v+x).normalize(),n[3].setComponents(l-a,d-h,m-A,v-x).normalize(),n[4].setComponents(l-o,d-u,m-g,v-S).normalize(),t===En)n[5].setComponents(l+o,d+u,m+g,v+S).normalize();else if(t===$r)n[5].setComponents(o,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ur.x=i.normal.x>0?e.max.x:e.min.x,Ur.y=i.normal.y>0?e.max.y:e.min.y,Ur.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Tu(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=u.byteLength,A=s.createBuffer();s.bindBuffer(h,A),s.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:A,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const d=h.array,p=h._updateRange,A=h.updateRanges;if(s.bindBuffer(u,c),p.count===-1&&A.length===0&&s.bufferSubData(u,0,d),A.length!==0){for(let g=0,m=A.length;g<m;g++){const f=A[g];t?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class dr extends en{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],A=[],g=[],m=[];for(let f=0;f<h;f++){const x=f*d-a;for(let S=0;S<c;S++){const v=S*u-r;A.push(v,-x,0),g.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const S=x+c*f,v=x+c*(f+1),T=x+1+c*(f+1),E=x+1+c*f;p.push(S,v,E),p.push(v,T,E)}this.setIndex(p),this.setAttribute("position",new Wt(A,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.widthSegments,e.heightSegments)}}var bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wu=`#ifdef USE_ALPHAHASH
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
#endif`,Ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
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
#endif`,Uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Nu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zu=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ju=`#define PI 3.141592653589793
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
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zu=`vec3 transformedNormal = objectNormal;
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
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`
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
}`,sd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
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
}`,md=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
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
#endif`,vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,_d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cd=`PhysicalMaterial material;
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
#endif`,Td=`struct PhysicalMaterial {
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
}`,bd=`
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nd=`#if defined( USE_POINTS_UV )
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
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kd=`#ifdef USE_MORPHNORMALS
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
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,Vd=`#ifdef USE_MORPHTARGETS
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
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,df=`float getShadowMask() {
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
}`,ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,Af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_f=`#ifdef USE_TRANSMISSION
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
#endif`,yf=`#ifdef USE_TRANSMISSION
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wf=`uniform sampler2D t2D;
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,Ff=`#define DISTANCE
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
}`,Uf=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vf=`#define LAMBERT
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
}`,Wf=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xf=`#define MATCAP
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
}`,Qf=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qf=`#define NORMAL
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
}`,Yf=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kf=`#define PHONG
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
}`,jf=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Jf=`#define STANDARD
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
}`,Zf=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$f=`#define TOON
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
}`,ep=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tp=`uniform float size;
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
}`,np=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,rp=`uniform vec3 color;
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
}`,sp=`uniform float rotation;
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
}`,ap=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ge={alphahash_fragment:bu,alphahash_pars_fragment:wu,alphamap_fragment:Ru,alphamap_pars_fragment:Iu,alphatest_fragment:Du,alphatest_pars_fragment:Pu,aomap_fragment:Lu,aomap_pars_fragment:Bu,batching_pars_vertex:Fu,batching_vertex:Uu,begin_vertex:Nu,beginnormal_vertex:Ou,bsdfs:Hu,iridescence_fragment:zu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Vu,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:Qu,color_pars_fragment:qu,color_pars_vertex:Yu,color_vertex:Ku,common:ju,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Zu,displacementmap_pars_vertex:$u,displacementmap_vertex:ed,emissivemap_fragment:td,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:rd,envmap_fragment:sd,envmap_common_pars_fragment:ad,envmap_pars_fragment:od,envmap_pars_vertex:ld,envmap_physical_pars_fragment:vd,envmap_vertex:cd,fog_vertex:hd,fog_pars_vertex:ud,fog_fragment:dd,fog_pars_fragment:fd,gradientmap_pars_fragment:pd,lightmap_fragment:md,lightmap_pars_fragment:gd,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:Sd,lights_pars_begin:xd,lights_toon_fragment:_d,lights_toon_pars_fragment:yd,lights_phong_fragment:Md,lights_phong_pars_fragment:Ed,lights_physical_fragment:Cd,lights_physical_pars_fragment:Td,lights_fragment_begin:bd,lights_fragment_maps:wd,lights_fragment_end:Rd,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Pd,logdepthbuf_vertex:Ld,map_fragment:Bd,map_pars_fragment:Fd,map_particle_fragment:Ud,map_particle_pars_fragment:Nd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:Hd,morphcolor_vertex:zd,morphnormal_vertex:kd,morphtarget_pars_vertex:Gd,morphtarget_vertex:Vd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:Qd,normal_pars_vertex:qd,normal_vertex:Yd,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:Zd,iridescence_pars_fragment:$d,opaque_fragment:ef,packing:tf,premultiplied_alpha_fragment:nf,project_vertex:rf,dithering_fragment:sf,dithering_pars_fragment:af,roughnessmap_fragment:of,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:hf,shadowmap_vertex:uf,shadowmask_pars_fragment:df,skinbase_vertex:ff,skinning_pars_vertex:pf,skinning_vertex:mf,skinnormal_vertex:gf,specularmap_fragment:Af,specularmap_pars_fragment:Sf,tonemapping_fragment:xf,tonemapping_pars_fragment:vf,transmission_fragment:_f,transmission_pars_fragment:yf,uv_pars_fragment:Mf,uv_pars_vertex:Ef,uv_vertex:Cf,worldpos_vertex:Tf,background_vert:bf,background_frag:wf,backgroundCube_vert:Rf,backgroundCube_frag:If,cube_vert:Df,cube_frag:Pf,depth_vert:Lf,depth_frag:Bf,distanceRGBA_vert:Ff,distanceRGBA_frag:Uf,equirect_vert:Nf,equirect_frag:Of,linedashed_vert:Hf,linedashed_frag:zf,meshbasic_vert:kf,meshbasic_frag:Gf,meshlambert_vert:Vf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:Qf,meshnormal_vert:qf,meshnormal_frag:Yf,meshphong_vert:Kf,meshphong_frag:jf,meshphysical_vert:Jf,meshphysical_frag:Zf,meshtoon_vert:$f,meshtoon_frag:ep,points_vert:tp,points_frag:np,shadow_vert:ip,shadow_frag:rp,sprite_vert:sp,sprite_frag:ap},ce={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},hn={basic:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ft([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ft([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ft([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ft([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ft([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ft([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ft([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ft([ce.lights,ce.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};hn.physical={uniforms:Ft([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Nr={r:0,b:0,g:0};function op(s,e,t,n,i,r,a){const o=new Ke(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function A(m,f){let x=!1,S=f.isScene===!0?f.background:null;S&&S.isTexture&&(S=(f.backgroundBlurriness>0?t:e).get(S)),S===null?g(o,l):S&&S.isColor&&(g(S,1),x=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),S&&(S.isCubeTexture||S.mapping===cs)?(h===void 0&&(h=new dt(new Wi(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:ki(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=et.getTransfer(S.colorSpace)!==rt,(u!==S||d!==S.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new dt(new dr(2,2),new $t({name:"BackgroundMaterial",uniforms:ki(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Nr,dc(s)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:A}}function lp(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(R,L,B,O,W){let j=!1;if(a){const J=g(O,B,L);c!==J&&(c=J,p(c.object)),j=f(R,O,B,W),j&&x(R,O,B,W)}else{const J=L.wireframe===!0;(c.geometry!==O.id||c.program!==B.id||c.wireframe!==J)&&(c.geometry=O.id,c.program=B.id,c.wireframe=J,j=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,I(R,L,B,O),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function A(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function g(R,L,B){const O=B.wireframe===!0;let W=o[R.id];W===void 0&&(W={},o[R.id]=W);let j=W[L.id];j===void 0&&(j={},W[L.id]=j);let J=j[O];return J===void 0&&(J=m(d()),j[O]=J),J}function m(R){const L=[],B=[],O=[];for(let W=0;W<i;W++)L[W]=0,B[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:O,object:R,attributes:{},index:null}}function f(R,L,B,O){const W=c.attributes,j=L.attributes;let J=0;const ee=B.getAttributes();for(const Z in ee)if(ee[Z].location>=0){const K=W[Z];let ie=j[Z];if(ie===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),K===void 0||K.attribute!==ie||ie&&K.data!==ie.data)return!0;J++}return c.attributesNum!==J||c.index!==O}function x(R,L,B,O){const W={},j=L.attributes;let J=0;const ee=B.getAttributes();for(const Z in ee)if(ee[Z].location>=0){let K=j[Z];K===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(K=R.instanceColor));const ie={};ie.attribute=K,K&&K.data&&(ie.data=K.data),W[Z]=ie,J++}c.attributes=W,c.attributesNum=J,c.index=O}function S(){const R=c.newAttributes;for(let L=0,B=R.length;L<B;L++)R[L]=0}function v(R){T(R,0)}function T(R,L){const B=c.newAttributes,O=c.enabledAttributes,W=c.attributeDivisors;B[R]=1,O[R]===0&&(s.enableVertexAttribArray(R),O[R]=1),W[R]!==L&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,L),W[R]=L)}function E(){const R=c.newAttributes,L=c.enabledAttributes;for(let B=0,O=L.length;B<O;B++)L[B]!==R[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function _(R,L,B,O,W,j,J){J===!0?s.vertexAttribIPointer(R,L,B,W,j):s.vertexAttribPointer(R,L,B,O,W,j)}function I(R,L,B,O){if(n.isWebGL2===!1&&(R.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const W=O.attributes,j=B.getAttributes(),J=L.defaultAttributeValues;for(const ee in j){const Z=j[ee];if(Z.location>=0){let Q=W[ee];if(Q===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const K=Q.normalized,ie=Q.itemSize,oe=t.get(Q);if(oe===void 0)continue;const de=oe.buffer,Me=oe.type,be=oe.bytesPerElement,ge=n.isWebGL2===!0&&(Me===s.INT||Me===s.UNSIGNED_INT||Q.gpuType===Yl);if(Q.isInterleavedBufferAttribute){const ve=Q.data,z=ve.stride,Ne=Q.offset;if(ve.isInstancedInterleavedBuffer){for(let me=0;me<Z.locationSize;me++)T(Z.location+me,ve.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let me=0;me<Z.locationSize;me++)v(Z.location+me);s.bindBuffer(s.ARRAY_BUFFER,de);for(let me=0;me<Z.locationSize;me++)_(Z.location+me,ie/Z.locationSize,Me,K,z*be,(Ne+ie/Z.locationSize*me)*be,ge)}else{if(Q.isInstancedBufferAttribute){for(let ve=0;ve<Z.locationSize;ve++)T(Z.location+ve,Q.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<Z.locationSize;ve++)v(Z.location+ve);s.bindBuffer(s.ARRAY_BUFFER,de);for(let ve=0;ve<Z.locationSize;ve++)_(Z.location+ve,ie/Z.locationSize,Me,K,ie*be,ie/Z.locationSize*ve*be,ge)}}else if(J!==void 0){const K=J[ee];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(Z.location,K);break;case 3:s.vertexAttrib3fv(Z.location,K);break;case 4:s.vertexAttrib4fv(Z.location,K);break;default:s.vertexAttrib1fv(Z.location,K)}}}}E()}function M(){F();for(const R in o){const L=o[R];for(const B in L){const O=L[B];for(const W in O)A(O[W].object),delete O[W];delete L[B]}delete o[R]}}function y(R){if(o[R.id]===void 0)return;const L=o[R.id];for(const B in L){const O=L[B];for(const W in O)A(O[W].object),delete O[W];delete L[B]}delete o[R.id]}function P(R){for(const L in o){const B=o[L];if(B[R.id]===void 0)continue;const O=B[R.id];for(const W in O)A(O[W].object),delete O[W];delete B[R.id]}}function F(){N(),h=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:v,disableUnusedAttributes:E}}function cp(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,A;if(i)p=s,A="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[A](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let A=0;A<d;A++)this.render(h[A],u[A]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let A=0;for(let g=0;g<d;g++)A+=u[g];t.update(A,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function hp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),A=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,v=a||e.has("OES_texture_float"),T=S&&v,E=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:A,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:S,floatFragmentTextures:v,floatVertexTextures:T,maxSamples:E}}function up(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ln,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const A=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||A===null||A.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,S=x*4;let v=f.clippingState||null;l.value=v,v=h(A,d,S,p);for(let T=0;T!==S;++T)v[T]=t[T];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,A){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,A!==!0||m===null){const f=p+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,v=p;S!==g;++S,v+=4)a.copy(u[S]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function dp(s){let e=new WeakMap;function t(a,o){return o===ta?a.mapping=Ni:o===na&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ta||o===na)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mu(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ya extends fc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,Ko=[.125,.215,.35,.446,.526,.582],jn=20,Gs=new ya,jo=new Ke;let Vs=null,Ws=0,Xs=0;const Yn=(1+Math.sqrt(5))/2,yi=1/Yn,Jo=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Yn,yi),new D(0,Yn,-yi),new D(yi,0,Yn),new D(-yi,0,Yn),new D(Yn,yi,0),new D(-Yn,yi,0)];class Zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Vs=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vs,Ws,Xs),e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vs=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Hi,format:Ut,colorSpace:Tn,depthBuffer:!1},i=$o(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fp(r)),this._blurMaterial=pp(r,e,t)}return i}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Gs)}_sceneToCubeUV(e,t,n,i){const o=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jo),h.toneMapping=On,h.autoClear=!1;const p=new ii({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),A=new dt(new Wi,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(jo),g=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;Or(i,x*S,f>2?S:0,S,S),h.setRenderTarget(i),g&&h.render(A,o),h.render(e,o)}A.geometry.dispose(),A.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ni||e.mapping===Oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Or(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Gs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Jo[(i-1)%Jo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,A=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),g=r/A,m=isFinite(r)?1+Math.floor(h*g):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const f=[];let x=0;for(let _=0;_<jn;++_){const I=_/g,M=Math.exp(-I*I/2);f.push(M),_===0?x+=M:_<m&&(x+=2*M)}for(let _=0;_<f.length;_++)f[_]=f[_]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=A,d.mipInt.value=S-n;const v=this._sizeLods[i],T=3*v*(i>S-Ri?i-S+Ri:0),E=4*(this._cubeSize-v);Or(t,T,E,3*v,2*v),l.setRenderTarget(t),l.render(u,Gs)}}function fp(s){const e=[],t=[],n=[];let i=s;const r=s-Ri+1+Ko.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ri?l=Ko[a-s+Ri-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,A=6,g=3,m=2,f=1,x=new Float32Array(g*A*p),S=new Float32Array(m*A*p),v=new Float32Array(f*A*p);for(let E=0;E<p;E++){const _=E%3*2/3-1,I=E>2?0:-1,M=[_,I,0,_+2/3,I,0,_+2/3,I+1,0,_,I,0,_+2/3,I+1,0,_,I+1,0];x.set(M,g*A*E),S.set(d,m*A*E);const y=[E,E,E,E,E,E];v.set(y,f*A*E)}const T=new en;T.setAttribute("position",new Zt(x,g)),T.setAttribute("uv",new Zt(S,m)),T.setAttribute("faceIndex",new Zt(v,f)),e.push(T),i>Ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $o(s,e,t){const n=new zn(s,e,t);return n.texture.mapping=cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function pp(s,e,t){const n=new Float32Array(jn),i=new D(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function el(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function tl(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ma(){return`

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
	`}function mp(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ta||l===na,h=l===Ni||l===Oi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Zo(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Zo(s));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ap(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const A in d.attributes)e.remove(d.attributes[A]);for(const A in d.morphAttributes){const g=d.morphAttributes[A];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const A in d)e.update(d[A],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const A in p){const g=p[A];for(let m=0,f=g.length;m<f;m++)e.update(g[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,A=u.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let S=0,v=x.length;S<v;S+=3){const T=x[S+0],E=x[S+1],_=x[S+2];d.push(T,E,E,_,_,T)}}else if(A!==void 0){const x=A.array;g=A.version;for(let S=0,v=x.length/3-1;S<v;S+=3){const T=S+0,E=S+1,_=S+2;d.push(T,E,E,_,_,T)}}else return;const m=new(ic(d)?uc:hc)(d,1);m.version=g;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Sp(s,e,t,n){const i=n.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,A){s.drawElements(r,A,o,p*l),t.update(A,r,1)}function u(p,A,g){if(g===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,A,o,p*l,g),t.update(A,r,g)}function d(p,A,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,A[f]);else{m.multiDrawElementsWEBGL(r,A,0,o,p,0,g);let f=0;for(let x=0;x<g;x++)f+=A[x];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function xp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vp(s,e){return s[0]-e[0]}function _p(s,e){return Math.abs(e[1])-Math.abs(s[1])}function yp(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const A=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=A!==void 0?A.length:0;let m=r.get(h);if(m===void 0||m.count!==g){let L=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",L)};var p=L;m!==void 0&&m.texture.dispose();const S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let M=0;S===!0&&(M=1),v===!0&&(M=2),T===!0&&(M=3);let y=h.attributes.position.count*M,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const F=new Float32Array(y*P*4*g),N=new ac(F,y,P,g);N.type=un,N.needsUpdate=!0;const R=M*4;for(let B=0;B<g;B++){const O=E[B],W=_[B],j=I[B],J=y*P*4*B;for(let ee=0;ee<O.count;ee++){const Z=ee*R;S===!0&&(a.fromBufferAttribute(O,ee),F[J+Z+0]=a.x,F[J+Z+1]=a.y,F[J+Z+2]=a.z,F[J+Z+3]=0),v===!0&&(a.fromBufferAttribute(W,ee),F[J+Z+4]=a.x,F[J+Z+5]=a.y,F[J+Z+6]=a.z,F[J+Z+7]=0),T===!0&&(a.fromBufferAttribute(j,ee),F[J+Z+8]=a.x,F[J+Z+9]=a.y,F[J+Z+10]=a.z,F[J+Z+11]=j.itemSize===4?a.w:1)}}m={count:g,texture:N,size:new xe(y,P)},r.set(h,m),h.addEventListener("dispose",L)}let f=0;for(let S=0;S<d.length;S++)f+=d[S];const x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const A=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==A){g=[];for(let v=0;v<A;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<A;v++){const T=g[v];T[0]=v,T[1]=d[v]}g.sort(_p);for(let v=0;v<8;v++)v<A&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(vp);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let x=0;for(let v=0;v<8;v++){const T=o[v],E=T[0],_=T[1];E!==Number.MAX_SAFE_INTEGER&&_?(m&&h.getAttribute("morphTarget"+v)!==m[E]&&h.setAttribute("morphTarget"+v,m[E]),f&&h.getAttribute("morphNormal"+v)!==f[E]&&h.setAttribute("morphNormal"+v,f[E]),i[v]=_,x+=_):(m&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),f&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const S=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Mp(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Ea extends Ot{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Hn,h!==Hn&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hn&&(n=Vt),n===void 0&&h===zi&&(n=ti),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ac=new Ot,Sc=new Ea(1,1);Sc.compareFunction=tc;const xc=new ac,vc=new iu,_c=new pc,nl=[],il=[],rl=new Float32Array(16),sl=new Float32Array(9),al=new Float32Array(4);function Xi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=nl[i];if(r===void 0&&(r=new Float32Array(i),nl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function At(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function fs(s,e){let t=il[e];t===void 0&&(t=new Int32Array(e),il[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ep(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Cp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),At(t,e)}}function Tp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),At(t,e)}}function bp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),At(t,e)}}function wp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(gt(t,n))return;al.set(n),s.uniformMatrix2fv(this.addr,!1,al),At(t,n)}}function Rp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(gt(t,n))return;sl.set(n),s.uniformMatrix3fv(this.addr,!1,sl),At(t,n)}}function Ip(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(gt(t,n))return;rl.set(n),s.uniformMatrix4fv(this.addr,!1,rl),At(t,n)}}function Dp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),At(t,e)}}function Lp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),At(t,e)}}function Bp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),At(t,e)}}function Fp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),At(t,e)}}function Np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),At(t,e)}}function Op(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),At(t,e)}}function Hp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Sc:Ac;t.setTexture2D(e||r,i)}function zp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vc,i)}function kp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_c,i)}function Gp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xc,i)}function Vp(s){switch(s){case 5126:return Ep;case 35664:return Cp;case 35665:return Tp;case 35666:return bp;case 35674:return wp;case 35675:return Rp;case 35676:return Ip;case 5124:case 35670:return Dp;case 35667:case 35671:return Pp;case 35668:case 35672:return Lp;case 35669:case 35673:return Bp;case 5125:return Fp;case 36294:return Up;case 36295:return Np;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Wp(s,e){s.uniform1fv(this.addr,e)}function Xp(s,e){const t=Xi(e,this.size,2);s.uniform2fv(this.addr,t)}function Qp(s,e){const t=Xi(e,this.size,3);s.uniform3fv(this.addr,t)}function qp(s,e){const t=Xi(e,this.size,4);s.uniform4fv(this.addr,t)}function Yp(s,e){const t=Xi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Kp(s,e){const t=Xi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jp(s,e){const t=Xi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Jp(s,e){s.uniform1iv(this.addr,e)}function Zp(s,e){s.uniform2iv(this.addr,e)}function $p(s,e){s.uniform3iv(this.addr,e)}function em(s,e){s.uniform4iv(this.addr,e)}function tm(s,e){s.uniform1uiv(this.addr,e)}function nm(s,e){s.uniform2uiv(this.addr,e)}function im(s,e){s.uniform3uiv(this.addr,e)}function rm(s,e){s.uniform4uiv(this.addr,e)}function sm(s,e,t){const n=this.cache,i=e.length,r=fs(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ac,r[a])}function am(s,e,t){const n=this.cache,i=e.length,r=fs(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||vc,r[a])}function om(s,e,t){const n=this.cache,i=e.length,r=fs(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||_c,r[a])}function lm(s,e,t){const n=this.cache,i=e.length,r=fs(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||xc,r[a])}function cm(s){switch(s){case 5126:return Wp;case 35664:return Xp;case 35665:return Qp;case 35666:return qp;case 35674:return Yp;case 35675:return Kp;case 35676:return jp;case 5124:case 35670:return Jp;case 35667:case 35671:return Zp;case 35668:case 35672:return $p;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return lm}}class hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vp(t.type)}}class um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cm(t.type)}}class dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function ol(s,e){s.seq.push(e),s.map[e.id]=e}function fm(s,e,t){const n=s.name,i=n.length;for(Qs.lastIndex=0;;){const r=Qs.exec(n),a=Qs.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ol(t,c===void 0?new hm(o,s,e):new um(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new dm(o),ol(t,u)),t=u}}}class qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);fm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ll(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const pm=37297;let mm=0;function gm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Am(s){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(s);let n;switch(e===t?n="":e===Zr&&t===Jr?n="LinearDisplayP3ToLinearSRGB":e===Jr&&t===Zr&&(n="LinearSRGBToLinearDisplayP3"),s){case Tn:case hs:return[n,"LinearTransferOETF"];case Mt:case xa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function cl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+gm(s.getShaderSource(e),a)}else return i}function Sm(s,e){const t=Am(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xm(s,e){let t;switch(e){case dh:t="Linear";break;case fh:t="Reinhard";break;case ph:t="OptimizedCineon";break;case mh:t="ACESFilmic";break;case Ah:t="AgX";break;case gh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vm(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function _m(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ii).join(`
`)}function ym(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ii(s){return s!==""}function hl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ul(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Em=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(s){return s.replace(Em,Tm)}const Cm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Tm(s,e){let t=Ge[e];if(t===void 0){const n=Cm.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oa(t)}const bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(s){return s.replace(bm,wm)}function wm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Im(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ni:case Oi:e="ENVMAP_TYPE_CUBE";break;case cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Pm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case hh:e="ENVMAP_BLENDING_MIX";break;case uh:e="ENVMAP_BLENDING_ADD";break}return e}function Lm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bm(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Rm(t),c=Im(t),h=Dm(t),u=Pm(t),d=Lm(t),p=t.isWebGL2?"":vm(t),A=_m(t),g=ym(r),m=i.createProgram();let f,x,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ii).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ii).join(`
`),x.length>0&&(x+=`
`)):(f=[fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),x=[p,fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ge.tonemapping_pars_fragment:"",t.toneMapping!==On?xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Sm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),a=oa(a),a=hl(a,t),a=ul(a,t),o=oa(o),o=hl(o,t),o=ul(o,t),a=dl(a),o=dl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const v=S+f+a,T=S+x+o,E=ll(i,i.VERTEX_SHADER,v),_=ll(i,i.FRAGMENT_SHADER,T);i.attachShader(m,E),i.attachShader(m,_),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(F){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(E).trim(),L=i.getShaderInfoLog(_).trim();let B=!0,O=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,E,_);else{const W=cl(i,E,"vertex"),j=cl(i,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+W+`
`+j)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(R===""||L==="")&&(O=!1);O&&(F.diagnostics={runnable:B,programLog:N,vertexShader:{log:R,prefix:f},fragmentShader:{log:L,prefix:x}})}i.deleteShader(E),i.deleteShader(_),M=new qr(i,m),y=Mm(i,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,pm)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=_,this}let Fm=0;class Um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Nm(e),t.set(e,n)),n}}class Nm{constructor(e){this.id=Fm++,this.code=e,this.usedTimes=0}}function Om(s,e,t,n,i,r,a){const o=new lc,l=new Um,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,y,P,F,N){const R=F.fog,L=N.geometry,B=M.isMeshStandardMaterial?F.environment:null,O=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),W=O&&O.mapping===cs?O.image.height:null,j=A[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=J!==void 0?J.length:0;let Z=0;L.morphAttributes.position!==void 0&&(Z=1),L.morphAttributes.normal!==void 0&&(Z=2),L.morphAttributes.color!==void 0&&(Z=3);let Q,K,ie,oe;if(j){const Pt=hn[j];Q=Pt.vertexShader,K=Pt.fragmentShader}else Q=M.vertexShader,K=M.fragmentShader,l.update(M),ie=l.getVertexShaderID(M),oe=l.getFragmentShaderID(M);const de=s.getRenderTarget(),Me=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,ge=!!M.map,ve=!!M.matcap,z=!!O,Ne=!!M.aoMap,me=!!M.lightMap,k=!!M.bumpMap,G=!!M.normalMap,he=!!M.displacementMap,_e=!!M.emissiveMap,w=!!M.metalnessMap,C=!!M.roughnessMap,V=M.anisotropy>0,se=M.clearcoat>0,te=M.iridescence>0,ne=M.sheen>0,Ee=M.transmission>0,ue=V&&!!M.anisotropyMap,Ae=se&&!!M.clearcoatMap,Re=se&&!!M.clearcoatNormalMap,Ve=se&&!!M.clearcoatRoughnessMap,re=te&&!!M.iridescenceMap,$e=te&&!!M.iridescenceThicknessMap,qe=ne&&!!M.sheenColorMap,Oe=ne&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,ye=!!M.specularColorMap,ke=!!M.specularIntensityMap,Je=Ee&&!!M.transmissionMap,lt=Ee&&!!M.thicknessMap,Xe=!!M.gradientMap,le=!!M.alphaMap,U=M.alphaTest>0,fe=!!M.alphaHash,pe=!!M.extensions,Le=!!L.attributes.uv1,De=!!L.attributes.uv2,tt=!!L.attributes.uv3;let nt=On;return M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(nt=s.toneMapping),{isWebGL2:h,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Q,fragmentShader:K,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:be,instancing:Me,instancingColor:Me&&N.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Tn,map:ge,matcap:ve,envMap:z,envMapMode:z&&O.mapping,envMapCubeUVHeight:W,aoMap:Ne,lightMap:me,bumpMap:k,normalMap:G,displacementMap:d&&he,emissiveMap:_e,normalMapObjectSpace:G&&M.normalMapType===Rh,normalMapTangentSpace:G&&M.normalMapType===wh,metalnessMap:w,roughnessMap:C,anisotropy:V,anisotropyMap:ue,clearcoat:se,clearcoatMap:Ae,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ve,iridescence:te,iridescenceMap:re,iridescenceThicknessMap:$e,sheen:ne,sheenColorMap:qe,sheenRoughnessMap:Oe,specularMap:Ie,specularColorMap:ye,specularIntensityMap:ke,transmission:Ee,transmissionMap:Je,thicknessMap:lt,gradientMap:Xe,opaque:M.transparent===!1&&M.blending===Nn,alphaMap:le,alphaTest:U,alphaHash:fe,combine:M.combine,mapUv:ge&&g(M.map.channel),aoMapUv:Ne&&g(M.aoMap.channel),lightMapUv:me&&g(M.lightMap.channel),bumpMapUv:k&&g(M.bumpMap.channel),normalMapUv:G&&g(M.normalMap.channel),displacementMapUv:he&&g(M.displacementMap.channel),emissiveMapUv:_e&&g(M.emissiveMap.channel),metalnessMapUv:w&&g(M.metalnessMap.channel),roughnessMapUv:C&&g(M.roughnessMap.channel),anisotropyMapUv:ue&&g(M.anisotropyMap.channel),clearcoatMapUv:Ae&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Re&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&g(M.sheenRoughnessMap.channel),specularMapUv:Ie&&g(M.specularMap.channel),specularColorMapUv:ye&&g(M.specularColorMap.channel),specularIntensityMapUv:ke&&g(M.specularIntensityMap.channel),transmissionMapUv:Je&&g(M.transmissionMap.channel),thicknessMapUv:lt&&g(M.thicknessMap.channel),alphaMapUv:le&&g(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(G||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:De,vertexUv3s:tt,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(ge||le),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Z,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ge&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jt,flipSided:M.side===Nt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(x(y,M),S(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function x(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function S(M,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function v(M){const y=A[M.type];let P;if(y){const F=hn[y];P=xu.clone(F.uniforms)}else P=M.uniforms;return P}function T(M,y){let P;for(let F=0,N=c.length;F<N;F++){const R=c[F];if(R.cacheKey===y){P=R,++P.usedTimes;break}}return P===void 0&&(P=new Bm(s,y,M,r),c.push(P)),P}function E(M){if(--M.usedTimes===0){const y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function _(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:T,releaseProgram:E,releaseShaderCache:_,programs:c,dispose:I}}function Hm(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ml(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,A,g,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:A,renderOrder:u.renderOrder,z:g,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=A,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function o(u,d,p,A,g,m){const f=a(u,d,p,A,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,A,g,m){const f=a(u,d,p,A,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||zm),n.length>1&&n.sort(d||pl),i.length>1&&i.sort(d||pl)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function km(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new ml,s.set(n,[a])):i>=r.length?(a=new ml,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ke};break;case"SpotLight":t={position:new D,direction:new D,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Vm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Wm=0;function Xm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qm(s,e){const t=new Gm,n=Vm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const r=new D,a=new Ue,o=new Ue;function l(h,u){let d=0,p=0,A=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let g=0,m=0,f=0,x=0,S=0,v=0,T=0,E=0,_=0,I=0,M=0;h.sort(Xm);const y=u===!0?Math.PI:1;for(let F=0,N=h.length;F<N;F++){const R=h[F],L=R.color,B=R.intensity,O=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=L.r*B*y,p+=L.g*B*y,A+=L.b*B*y;else if(R.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(R.sh.coefficients[j],B);M++}else if(R.isDirectionalLight){const j=t.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity*y),R.castShadow){const J=R.shadow,ee=n.get(R);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=W,i.directionalShadowMatrix[g]=R.shadow.matrix,v++}i.directional[g]=j,g++}else if(R.isSpotLight){const j=t.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(L).multiplyScalar(B*y),j.distance=O,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,i.spot[f]=j;const J=R.shadow;if(R.map&&(i.spotLightMap[_]=R.map,_++,J.updateMatrices(R),R.castShadow&&I++),i.spotLightMatrix[f]=J.matrix,R.castShadow){const ee=n.get(R);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.spotShadow[f]=ee,i.spotShadowMap[f]=W,E++}f++}else if(R.isRectAreaLight){const j=t.get(R);j.color.copy(L).multiplyScalar(B),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),i.rectArea[x]=j,x++}else if(R.isPointLight){const j=t.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity*y),j.distance=R.distance,j.decay=R.decay,R.castShadow){const J=R.shadow,ee=n.get(R);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=R.shadow.matrix,T++}i.point[m]=j,m++}else if(R.isHemisphereLight){const j=t.get(R);j.skyColor.copy(R.color).multiplyScalar(B*y),j.groundColor.copy(R.groundColor).multiplyScalar(B*y),i.hemi[S]=j,S++}}x>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=A;const P=i.hash;(P.directionalLength!==g||P.pointLength!==m||P.spotLength!==f||P.rectAreaLength!==x||P.hemiLength!==S||P.numDirectionalShadows!==v||P.numPointShadows!==T||P.numSpotShadows!==E||P.numSpotMaps!==_||P.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=f,i.rectArea.length=x,i.point.length=m,i.hemi.length=S,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+_-I,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=M,P.directionalLength=g,P.pointLength=m,P.spotLength=f,P.rectAreaLength=x,P.hemiLength=S,P.numDirectionalShadows=v,P.numPointShadows=T,P.numSpotShadows=E,P.numSpotMaps=_,P.numLightProbes=M,i.version=Wm++)}function c(h,u){let d=0,p=0,A=0,g=0,m=0;const f=u.matrixWorldInverse;for(let x=0,S=h.length;x<S;x++){const v=h[x];if(v.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),d++}else if(v.isSpotLight){const T=i.spot[A];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),A++}else if(v.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),o.identity(),a.copy(v.matrixWorld),a.premultiply(f),o.extractRotation(a),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function gl(s,e){const t=new Qm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function qm(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new gl(s,e),t.set(r,[l])):a>=o.length?(l=new gl(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ym extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Km extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jm=`uniform sampler2D shadow_pass;
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
}`;function Zm(s,e,t){let n=new mc;const i=new xe,r=new xe,a=new ft,o=new Ym({depthPacking:bh}),l=new Km,c={},h=t.maxTextureSize,u={[fn]:Nt,[Nt]:fn,[jt]:jt},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:jm,fragmentShader:Jm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const A=new en;A.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new dt(A,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let f=this.type;this.render=function(E,_,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Un),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=f!==vn&&this.type===vn,R=f===vn&&this.type!==vn;for(let L=0,B=E.length;L<B;L++){const O=E[L],W=O.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const j=W.getFrameExtents();if(i.multiply(j),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,W.mapSize.y=r.y)),W.map===null||N===!0||R===!0){const ee=this.type!==vn?{minFilter:yt,magFilter:yt}:{};W.map!==null&&W.map.dispose(),W.map=new zn(i.x,i.y,ee),W.map.texture.name=O.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const J=W.getViewportCount();for(let ee=0;ee<J;ee++){const Z=W.getViewport(ee);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),F.viewport(a),W.updateMatrices(O,ee),n=W.getFrustum(),v(_,I,W.camera,O,this.type)}W.isPointLightShadow!==!0&&this.type===vn&&x(W,I),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,P)};function x(E,_){const I=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,I,d,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,I,p,g,null)}function S(E,_,I,M){let y=null;const P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=I.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const F=y.uuid,N=_.uuid;let R=c[F];R===void 0&&(R={},c[F]=R);let L=R[N];L===void 0&&(L=y.clone(),R[N]=L,_.addEventListener("dispose",T)),y=L}if(y.visible=_.visible,y.wireframe=_.wireframe,M===vn?y.side=_.shadowSide!==null?_.shadowSide:_.side:y.side=_.shadowSide!==null?_.shadowSide:u[_.side],y.alphaMap=_.alphaMap,y.alphaTest=_.alphaTest,y.map=_.map,y.clipShadows=_.clipShadows,y.clippingPlanes=_.clippingPlanes,y.clipIntersection=_.clipIntersection,y.displacementMap=_.displacementMap,y.displacementScale=_.displacementScale,y.displacementBias=_.displacementBias,y.wireframeLinewidth=_.wireframeLinewidth,y.linewidth=_.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=s.properties.get(y);F.light=I}return y}function v(E,_,I,M,y){if(E.visible===!1)return;if(E.layers.test(_.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===vn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const N=e.update(E),R=E.material;if(Array.isArray(R)){const L=N.groups;for(let B=0,O=L.length;B<O;B++){const W=L[B],j=R[W.materialIndex];if(j&&j.visible){const J=S(E,j,M,y);E.onBeforeShadow(s,E,_,I,N,J,W),s.renderBufferDirect(I,null,N,J,E,W),E.onAfterShadow(s,E,_,I,N,J,W)}}}else if(R.visible){const L=S(E,R,M,y);E.onBeforeShadow(s,E,_,I,N,L,null),s.renderBufferDirect(I,null,N,L,E,null),E.onAfterShadow(s,E,_,I,N,L,null)}}const F=E.children;for(let N=0,R=F.length;N<R;N++)v(F[N],_,I,M,y)}function T(E){E.target.removeEventListener("dispose",T);for(const I in c){const M=c[I],y=E.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function $m(s,e,t){const n=t.isWebGL2;function i(){let U=!1;const fe=new ft;let pe=null;const Le=new ft(0,0,0,0);return{setMask:function(De){pe!==De&&!U&&(s.colorMask(De,De,De,De),pe=De)},setLocked:function(De){U=De},setClear:function(De,tt,nt,St,Pt){Pt===!0&&(De*=St,tt*=St,nt*=St),fe.set(De,tt,nt,St),Le.equals(fe)===!1&&(s.clearColor(De,tt,nt,St),Le.copy(fe))},reset:function(){U=!1,pe=null,Le.set(-1,0,0,0)}}}function r(){let U=!1,fe=null,pe=null,Le=null;return{setTest:function(De){De?be(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(De){fe!==De&&!U&&(s.depthMask(De),fe=De)},setFunc:function(De){if(pe!==De){switch(De){case ih:s.depthFunc(s.NEVER);break;case rh:s.depthFunc(s.ALWAYS);break;case sh:s.depthFunc(s.LESS);break;case Kr:s.depthFunc(s.LEQUAL);break;case ah:s.depthFunc(s.EQUAL);break;case oh:s.depthFunc(s.GEQUAL);break;case lh:s.depthFunc(s.GREATER);break;case ch:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=De}},setLocked:function(De){U=De},setClear:function(De){Le!==De&&(s.clearDepth(De),Le=De)},reset:function(){U=!1,fe=null,pe=null,Le=null}}}function a(){let U=!1,fe=null,pe=null,Le=null,De=null,tt=null,nt=null,St=null,Pt=null;return{setTest:function(it){U||(it?be(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(it){fe!==it&&!U&&(s.stencilMask(it),fe=it)},setFunc:function(it,Lt,ln){(pe!==it||Le!==Lt||De!==ln)&&(s.stencilFunc(it,Lt,ln),pe=it,Le=Lt,De=ln)},setOp:function(it,Lt,ln){(tt!==it||nt!==Lt||St!==ln)&&(s.stencilOp(it,Lt,ln),tt=it,nt=Lt,St=ln)},setLocked:function(it){U=it},setClear:function(it){Pt!==it&&(s.clearStencil(it),Pt=it)},reset:function(){U=!1,fe=null,pe=null,Le=null,De=null,tt=null,nt=null,St=null,Pt=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},p={},A=new WeakMap,g=[],m=null,f=!1,x=null,S=null,v=null,T=null,E=null,_=null,I=null,M=new Ke(0,0,0),y=0,P=!1,F=null,N=null,R=null,L=null,B=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=j>=1):J.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=j>=2);let ee=null,Z={};const Q=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ie=new ft().fromArray(Q),oe=new ft().fromArray(K);function de(U,fe,pe,Le){const De=new Uint8Array(4),tt=s.createTexture();s.bindTexture(U,tt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<pe;nt++)n&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(fe,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(fe+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return tt}const Me={};Me[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(s.DEPTH_TEST),l.setFunc(Kr),_e(!1),w(ja),be(s.CULL_FACE),G(Un);function be(U){d[U]!==!0&&(s.enable(U),d[U]=!0)}function ge(U){d[U]!==!1&&(s.disable(U),d[U]=!1)}function ve(U,fe){return p[U]!==fe?(s.bindFramebuffer(U,fe),p[U]=fe,n&&(U===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=fe),U===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=fe)),!0):!1}function z(U,fe){let pe=g,Le=!1;if(U)if(pe=A.get(fe),pe===void 0&&(pe=[],A.set(fe,pe)),U.isWebGLMultipleRenderTargets){const De=U.texture;if(pe.length!==De.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,nt=De.length;tt<nt;tt++)pe[tt]=s.COLOR_ATTACHMENT0+tt;pe.length=De.length,Le=!0}}else pe[0]!==s.COLOR_ATTACHMENT0&&(pe[0]=s.COLOR_ATTACHMENT0,Le=!0);else pe[0]!==s.BACK&&(pe[0]=s.BACK,Le=!0);Le&&(t.isWebGL2?s.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Ne(U){return m!==U?(s.useProgram(U),m=U,!0):!1}const me={[Kn]:s.FUNC_ADD,[Gc]:s.FUNC_SUBTRACT,[Vc]:s.FUNC_REVERSE_SUBTRACT};if(n)me[eo]=s.MIN,me[to]=s.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(me[eo]=U.MIN_EXT,me[to]=U.MAX_EXT)}const k={[Wc]:s.ZERO,[Xc]:s.ONE,[Qc]:s.SRC_COLOR,[or]:s.SRC_ALPHA,[Zc]:s.SRC_ALPHA_SATURATE,[jc]:s.DST_COLOR,[Yc]:s.DST_ALPHA,[qc]:s.ONE_MINUS_SRC_COLOR,[lr]:s.ONE_MINUS_SRC_ALPHA,[Jc]:s.ONE_MINUS_DST_COLOR,[Kc]:s.ONE_MINUS_DST_ALPHA,[$c]:s.CONSTANT_COLOR,[eh]:s.ONE_MINUS_CONSTANT_COLOR,[th]:s.CONSTANT_ALPHA,[nh]:s.ONE_MINUS_CONSTANT_ALPHA};function G(U,fe,pe,Le,De,tt,nt,St,Pt,it){if(U===Un){f===!0&&(ge(s.BLEND),f=!1);return}if(f===!1&&(be(s.BLEND),f=!0),U!==Xl){if(U!==x||it!==P){if((S!==Kn||E!==Kn)&&(s.blendEquation(s.FUNC_ADD),S=Kn,E=Kn),it)switch(U){case Nn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ja:s.blendFunc(s.ONE,s.ONE);break;case Za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $a:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Nn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ja:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $a:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,T=null,_=null,I=null,M.set(0,0,0),y=0,x=U,P=it}return}De=De||fe,tt=tt||pe,nt=nt||Le,(fe!==S||De!==E)&&(s.blendEquationSeparate(me[fe],me[De]),S=fe,E=De),(pe!==v||Le!==T||tt!==_||nt!==I)&&(s.blendFuncSeparate(k[pe],k[Le],k[tt],k[nt]),v=pe,T=Le,_=tt,I=nt),(St.equals(M)===!1||Pt!==y)&&(s.blendColor(St.r,St.g,St.b,Pt),M.copy(St),y=Pt),x=U,P=!1}function he(U,fe){U.side===jt?ge(s.CULL_FACE):be(s.CULL_FACE);let pe=U.side===Nt;fe&&(pe=!pe),_e(pe),U.blending===Nn&&U.transparent===!1?G(Un):G(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const Le=U.stencilWrite;c.setTest(Le),Le&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),V(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(U){F!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),F=U)}function w(U){U!==Hc?(be(s.CULL_FACE),U!==N&&(U===ja?s.cullFace(s.BACK):U===zc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),N=U}function C(U){U!==R&&(W&&s.lineWidth(U),R=U)}function V(U,fe,pe){U?(be(s.POLYGON_OFFSET_FILL),(L!==fe||B!==pe)&&(s.polygonOffset(fe,pe),L=fe,B=pe)):ge(s.POLYGON_OFFSET_FILL)}function se(U){U?be(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function te(U){U===void 0&&(U=s.TEXTURE0+O-1),ee!==U&&(s.activeTexture(U),ee=U)}function ne(U,fe,pe){pe===void 0&&(ee===null?pe=s.TEXTURE0+O-1:pe=ee);let Le=Z[pe];Le===void 0&&(Le={type:void 0,texture:void 0},Z[pe]=Le),(Le.type!==U||Le.texture!==fe)&&(ee!==pe&&(s.activeTexture(pe),ee=pe),s.bindTexture(U,fe||Me[U]),Le.type=U,Le.texture=fe)}function Ee(){const U=Z[ee];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ue(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){ie.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ie.copy(U))}function Je(U){oe.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),oe.copy(U))}function lt(U,fe){let pe=u.get(fe);pe===void 0&&(pe=new WeakMap,u.set(fe,pe));let Le=pe.get(U);Le===void 0&&(Le=s.getUniformBlockIndex(fe,U.name),pe.set(U,Le))}function Xe(U,fe){const Le=u.get(fe).get(U);h.get(fe)!==Le&&(s.uniformBlockBinding(fe,Le,U.__bindingPointIndex),h.set(fe,Le))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ee=null,Z={},p={},A=new WeakMap,g=[],m=null,f=!1,x=null,S=null,v=null,T=null,E=null,_=null,I=null,M=new Ke(0,0,0),y=0,P=!1,F=null,N=null,R=null,L=null,B=null,ie.set(0,0,s.canvas.width,s.canvas.height),oe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:be,disable:ge,bindFramebuffer:ve,drawBuffers:z,useProgram:Ne,setBlending:G,setMaterial:he,setFlipSided:_e,setCullFace:w,setLineWidth:C,setPolygonOffset:V,setScissorTest:se,activeTexture:te,bindTexture:ne,unbindTexture:Ee,compressedTexImage2D:ue,compressedTexImage3D:Ae,texImage2D:Ie,texImage3D:ye,updateUBOMapping:lt,uniformBlockBinding:Xe,texStorage2D:qe,texStorage3D:Oe,texSubImage2D:Re,texSubImage3D:Ve,compressedTexSubImage2D:re,compressedTexSubImage3D:$e,scissor:ke,viewport:Je,reset:le}}function eg(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,C){return p?new OffscreenCanvas(w,C):ts("canvas")}function g(w,C,V,se){let te=1;if((w.width>se||w.height>se)&&(te=se/Math.max(w.width,w.height)),te<1||C===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ne=C?es:Math.floor,Ee=ne(te*w.width),ue=ne(te*w.height);u===void 0&&(u=A(Ee,ue));const Ae=V?A(Ee,ue):u;return Ae.width=Ee,Ae.height=ue,Ae.getContext("2d").drawImage(w,0,0,Ee,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ee+"x"+ue+")."),Ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return aa(w.width)&&aa(w.height)}function f(w){return o?!1:w.wrapS!==an||w.wrapT!==an||w.minFilter!==yt&&w.minFilter!==qt}function x(w,C){return w.generateMipmaps&&C&&w.minFilter!==yt&&w.minFilter!==qt}function S(w){s.generateMipmap(w)}function v(w,C,V,se,te=!1){if(o===!1)return C;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ne=C;if(C===s.RED&&(V===s.FLOAT&&(ne=s.R32F),V===s.HALF_FLOAT&&(ne=s.R16F),V===s.UNSIGNED_BYTE&&(ne=s.R8)),C===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(ne=s.R8UI),V===s.UNSIGNED_SHORT&&(ne=s.R16UI),V===s.UNSIGNED_INT&&(ne=s.R32UI),V===s.BYTE&&(ne=s.R8I),V===s.SHORT&&(ne=s.R16I),V===s.INT&&(ne=s.R32I)),C===s.RG&&(V===s.FLOAT&&(ne=s.RG32F),V===s.HALF_FLOAT&&(ne=s.RG16F),V===s.UNSIGNED_BYTE&&(ne=s.RG8)),C===s.RGBA){const Ee=te?jr:et.getTransfer(se);V===s.FLOAT&&(ne=s.RGBA32F),V===s.HALF_FLOAT&&(ne=s.RGBA16F),V===s.UNSIGNED_BYTE&&(ne=Ee===rt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(w,C,V){return x(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==yt&&w.minFilter!==qt?Math.log2(Math.max(C.width,C.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?C.mipmaps.length:1}function E(w){return w===yt||w===no||w===xs?s.NEAREST:s.LINEAR}function _(w){const C=w.target;C.removeEventListener("dispose",_),M(C),C.isVideoTexture&&h.delete(C)}function I(w){const C=w.target;C.removeEventListener("dispose",I),P(C)}function M(w){const C=n.get(w);if(C.__webglInit===void 0)return;const V=w.source,se=d.get(V);if(se){const te=se[C.__cacheKey];te.usedTimes--,te.usedTimes===0&&y(w),Object.keys(se).length===0&&d.delete(V)}n.remove(w)}function y(w){const C=n.get(w);s.deleteTexture(C.__webglTexture);const V=w.source,se=d.get(V);delete se[C.__cacheKey],a.memory.textures--}function P(w){const C=w.texture,V=n.get(w),se=n.get(C);if(se.__webglTexture!==void 0&&(s.deleteTexture(se.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(V.__webglFramebuffer[te]))for(let ne=0;ne<V.__webglFramebuffer[te].length;ne++)s.deleteFramebuffer(V.__webglFramebuffer[te][ne]);else s.deleteFramebuffer(V.__webglFramebuffer[te]);V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[te])}else{if(Array.isArray(V.__webglFramebuffer))for(let te=0;te<V.__webglFramebuffer.length;te++)s.deleteFramebuffer(V.__webglFramebuffer[te]);else s.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let te=0;te<V.__webglColorRenderbuffer.length;te++)V.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[te]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let te=0,ne=C.length;te<ne;te++){const Ee=n.get(C[te]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(C[te])}n.remove(C),n.remove(w)}let F=0;function N(){F=0}function R(){const w=F;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),F+=1,w}function L(w){const C=[];return C.push(w.wrapS),C.push(w.wrapT),C.push(w.wrapR||0),C.push(w.magFilter),C.push(w.minFilter),C.push(w.anisotropy),C.push(w.internalFormat),C.push(w.format),C.push(w.type),C.push(w.generateMipmaps),C.push(w.premultiplyAlpha),C.push(w.flipY),C.push(w.unpackAlignment),C.push(w.colorSpace),C.join()}function B(w,C){const V=n.get(w);if(w.isVideoTexture&&he(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const se=w.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(V,w,C);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+C)}function O(w,C){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ie(V,w,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+C)}function W(w,C){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ie(V,w,C);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+C)}function j(w,C){const V=n.get(w);if(w.version>0&&V.__version!==w.version){oe(V,w,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+C)}const J={[ia]:s.REPEAT,[an]:s.CLAMP_TO_EDGE,[ra]:s.MIRRORED_REPEAT},ee={[yt]:s.NEAREST,[no]:s.NEAREST_MIPMAP_NEAREST,[xs]:s.NEAREST_MIPMAP_LINEAR,[qt]:s.LINEAR,[Sh]:s.LINEAR_MIPMAP_NEAREST,[cr]:s.LINEAR_MIPMAP_LINEAR},Z={[Ih]:s.NEVER,[Uh]:s.ALWAYS,[Dh]:s.LESS,[tc]:s.LEQUAL,[Ph]:s.EQUAL,[Fh]:s.GEQUAL,[Lh]:s.GREATER,[Bh]:s.NOTEQUAL};function Q(w,C,V){if(V?(s.texParameteri(w,s.TEXTURE_WRAP_S,J[C.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,J[C.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,J[C.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ee[C.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ee[C.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(C.wrapS!==an||C.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,E(C.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,E(C.minFilter)),C.minFilter!==yt&&C.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Z[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===yt||C.minFilter!==xs&&C.minFilter!==cr||C.type===un&&e.has("OES_texture_float_linear")===!1||o===!1&&C.type===Hi&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(s.texParameterf(w,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function K(w,C){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,C.addEventListener("dispose",_));const se=C.source;let te=d.get(se);te===void 0&&(te={},d.set(se,te));const ne=L(C);if(ne!==w.__cacheKey){te[ne]===void 0&&(te[ne]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[ne].usedTimes++;const Ee=te[w.__cacheKey];Ee!==void 0&&(te[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(C)),w.__cacheKey=ne,w.__webglTexture=te[ne].texture}return V}function ie(w,C,V){let se=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(se=s.TEXTURE_3D);const te=K(w,C),ne=C.source;t.bindTexture(se,w.__webglTexture,s.TEXTURE0+V);const Ee=n.get(ne);if(ne.version!==Ee.__version||te===!0){t.activeTexture(s.TEXTURE0+V);const ue=et.getPrimaries(et.workingColorSpace),Ae=C.colorSpace===Jt?null:et.getPrimaries(C.colorSpace),Re=C.colorSpace===Jt||ue===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ve=f(C)&&m(C.image)===!1;let re=g(C.image,Ve,!1,i.maxTextureSize);re=_e(C,re);const $e=m(re)||o,qe=r.convert(C.format,C.colorSpace);let Oe=r.convert(C.type),Ie=v(C.internalFormat,qe,Oe,C.colorSpace,C.isVideoTexture);Q(se,C,$e);let ye;const ke=C.mipmaps,Je=o&&C.isVideoTexture!==!0&&Ie!==$l,lt=Ee.__version===void 0||te===!0,Xe=T(C,re,$e);if(C.isDepthTexture)Ie=s.DEPTH_COMPONENT,o?C.type===un?Ie=s.DEPTH_COMPONENT32F:C.type===Vt?Ie=s.DEPTH_COMPONENT24:C.type===ti?Ie=s.DEPTH24_STENCIL8:Ie=s.DEPTH_COMPONENT16:C.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Hn&&Ie===s.DEPTH_COMPONENT&&C.type!==Aa&&C.type!==Vt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Vt,Oe=r.convert(C.type)),C.format===zi&&Ie===s.DEPTH_COMPONENT&&(Ie=s.DEPTH_STENCIL,C.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=ti,Oe=r.convert(C.type))),lt&&(Je?t.texStorage2D(s.TEXTURE_2D,1,Ie,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Ie,re.width,re.height,0,qe,Oe,null));else if(C.isDataTexture)if(ke.length>0&&$e){Je&&lt&&t.texStorage2D(s.TEXTURE_2D,Xe,Ie,ke[0].width,ke[0].height);for(let le=0,U=ke.length;le<U;le++)ye=ke[le],Je?t.texSubImage2D(s.TEXTURE_2D,le,0,0,ye.width,ye.height,qe,Oe,ye.data):t.texImage2D(s.TEXTURE_2D,le,Ie,ye.width,ye.height,0,qe,Oe,ye.data);C.generateMipmaps=!1}else Je?(lt&&t.texStorage2D(s.TEXTURE_2D,Xe,Ie,re.width,re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,qe,Oe,re.data)):t.texImage2D(s.TEXTURE_2D,0,Ie,re.width,re.height,0,qe,Oe,re.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Je&&lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,Ie,ke[0].width,ke[0].height,re.depth);for(let le=0,U=ke.length;le<U;le++)ye=ke[le],C.format!==Ut?qe!==null?Je?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,re.depth,qe,ye.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,Ie,ye.width,ye.height,re.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,re.depth,qe,Oe,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,Ie,ye.width,ye.height,re.depth,0,qe,Oe,ye.data)}else{Je&&lt&&t.texStorage2D(s.TEXTURE_2D,Xe,Ie,ke[0].width,ke[0].height);for(let le=0,U=ke.length;le<U;le++)ye=ke[le],C.format!==Ut?qe!==null?Je?t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,ye.width,ye.height,qe,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,le,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(s.TEXTURE_2D,le,0,0,ye.width,ye.height,qe,Oe,ye.data):t.texImage2D(s.TEXTURE_2D,le,Ie,ye.width,ye.height,0,qe,Oe,ye.data)}else if(C.isDataArrayTexture)Je?(lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,Ie,re.width,re.height,re.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,qe,Oe,re.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,re.width,re.height,re.depth,0,qe,Oe,re.data);else if(C.isData3DTexture)Je?(lt&&t.texStorage3D(s.TEXTURE_3D,Xe,Ie,re.width,re.height,re.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,qe,Oe,re.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,re.width,re.height,re.depth,0,qe,Oe,re.data);else if(C.isFramebufferTexture){if(lt)if(Je)t.texStorage2D(s.TEXTURE_2D,Xe,Ie,re.width,re.height);else{let le=re.width,U=re.height;for(let fe=0;fe<Xe;fe++)t.texImage2D(s.TEXTURE_2D,fe,Ie,le,U,0,qe,Oe,null),le>>=1,U>>=1}}else if(ke.length>0&&$e){Je&&lt&&t.texStorage2D(s.TEXTURE_2D,Xe,Ie,ke[0].width,ke[0].height);for(let le=0,U=ke.length;le<U;le++)ye=ke[le],Je?t.texSubImage2D(s.TEXTURE_2D,le,0,0,qe,Oe,ye):t.texImage2D(s.TEXTURE_2D,le,Ie,qe,Oe,ye);C.generateMipmaps=!1}else Je?(lt&&t.texStorage2D(s.TEXTURE_2D,Xe,Ie,re.width,re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,qe,Oe,re)):t.texImage2D(s.TEXTURE_2D,0,Ie,qe,Oe,re);x(C,$e)&&S(se),Ee.__version=ne.version,C.onUpdate&&C.onUpdate(C)}w.__version=C.version}function oe(w,C,V){if(C.image.length!==6)return;const se=K(w,C),te=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+V);const ne=n.get(te);if(te.version!==ne.__version||se===!0){t.activeTexture(s.TEXTURE0+V);const Ee=et.getPrimaries(et.workingColorSpace),ue=C.colorSpace===Jt?null:et.getPrimaries(C.colorSpace),Ae=C.colorSpace===Jt||Ee===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Re=C.isCompressedTexture||C.image[0].isCompressedTexture,Ve=C.image[0]&&C.image[0].isDataTexture,re=[];for(let le=0;le<6;le++)!Re&&!Ve?re[le]=g(C.image[le],!1,!0,i.maxCubemapSize):re[le]=Ve?C.image[le].image:C.image[le],re[le]=_e(C,re[le]);const $e=re[0],qe=m($e)||o,Oe=r.convert(C.format,C.colorSpace),Ie=r.convert(C.type),ye=v(C.internalFormat,Oe,Ie,C.colorSpace),ke=o&&C.isVideoTexture!==!0,Je=ne.__version===void 0||se===!0;let lt=T(C,$e,qe);Q(s.TEXTURE_CUBE_MAP,C,qe);let Xe;if(Re){ke&&Je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,lt,ye,$e.width,$e.height);for(let le=0;le<6;le++){Xe=re[le].mipmaps;for(let U=0;U<Xe.length;U++){const fe=Xe[U];C.format!==Ut?Oe!==null?ke?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,U,0,0,fe.width,fe.height,Oe,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,U,ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,U,0,0,fe.width,fe.height,Oe,Ie,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,U,ye,fe.width,fe.height,0,Oe,Ie,fe.data)}}}else{Xe=C.mipmaps,ke&&Je&&(Xe.length>0&&lt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,lt,ye,re[0].width,re[0].height));for(let le=0;le<6;le++)if(Ve){ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,re[le].width,re[le].height,Oe,Ie,re[le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ye,re[le].width,re[le].height,0,Oe,Ie,re[le].data);for(let U=0;U<Xe.length;U++){const pe=Xe[U].image[le].image;ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,U+1,0,0,pe.width,pe.height,Oe,Ie,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,U+1,ye,pe.width,pe.height,0,Oe,Ie,pe.data)}}else{ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Oe,Ie,re[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ye,Oe,Ie,re[le]);for(let U=0;U<Xe.length;U++){const fe=Xe[U];ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,U+1,0,0,Oe,Ie,fe.image[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,U+1,ye,Oe,Ie,fe.image[le])}}}x(C,qe)&&S(s.TEXTURE_CUBE_MAP),ne.__version=te.version,C.onUpdate&&C.onUpdate(C)}w.__version=C.version}function de(w,C,V,se,te,ne){const Ee=r.convert(V.format,V.colorSpace),ue=r.convert(V.type),Ae=v(V.internalFormat,Ee,ue,V.colorSpace);if(!n.get(C).__hasExternalTextures){const Ve=Math.max(1,C.width>>ne),re=Math.max(1,C.height>>ne);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,ne,Ae,Ve,re,C.depth,0,Ee,ue,null):t.texImage2D(te,ne,Ae,Ve,re,0,Ee,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),G(C)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,te,n.get(V).__webglTexture,0,k(C)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,te,n.get(V).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(w,C,V){if(s.bindRenderbuffer(s.RENDERBUFFER,w),C.depthBuffer&&!C.stencilBuffer){let se=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||G(C)){const te=C.depthTexture;te&&te.isDepthTexture&&(te.type===un?se=s.DEPTH_COMPONENT32F:te.type===Vt&&(se=s.DEPTH_COMPONENT24));const ne=k(C);G(C)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,se,C.width,C.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,se,C.width,C.height)}else s.renderbufferStorage(s.RENDERBUFFER,se,C.width,C.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(C.depthBuffer&&C.stencilBuffer){const se=k(C);V&&G(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,C.width,C.height):G(C)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const se=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0;te<se.length;te++){const ne=se[te],Ee=r.convert(ne.format,ne.colorSpace),ue=r.convert(ne.type),Ae=v(ne.internalFormat,Ee,ue,ne.colorSpace),Re=k(C);V&&G(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,Ae,C.width,C.height):G(C)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,Ae,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(w,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),B(C.depthTexture,0);const se=n.get(C.depthTexture).__webglTexture,te=k(C);if(C.depthTexture.format===Hn)G(C)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(C.depthTexture.format===zi)G(C)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ge(w){const C=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!C.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");be(C.__webglFramebuffer,w)}else if(V){C.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[se]),C.__webglDepthbuffer[se]=s.createRenderbuffer(),Me(C.__webglDepthbuffer[se],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),Me(C.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(w,C,V){const se=n.get(w);C!==void 0&&de(se.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&ge(w)}function z(w){const C=w.texture,V=n.get(w),se=n.get(C);w.addEventListener("dispose",I),w.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=C.version,a.memory.textures++);const te=w.isWebGLCubeRenderTarget===!0,ne=w.isWebGLMultipleRenderTargets===!0,Ee=m(w)||o;if(te){V.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&C.mipmaps&&C.mipmaps.length>0){V.__webglFramebuffer[ue]=[];for(let Ae=0;Ae<C.mipmaps.length;Ae++)V.__webglFramebuffer[ue][Ae]=s.createFramebuffer()}else V.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(o&&C.mipmaps&&C.mipmaps.length>0){V.__webglFramebuffer=[];for(let ue=0;ue<C.mipmaps.length;ue++)V.__webglFramebuffer[ue]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(ne)if(i.drawBuffers){const ue=w.texture;for(let Ae=0,Re=ue.length;Ae<Re;Ae++){const Ve=n.get(ue[Ae]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&G(w)===!1){const ue=ne?C:[C];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ue.length;Ae++){const Re=ue[Ae];V.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[Ae]);const Ve=r.convert(Re.format,Re.colorSpace),re=r.convert(Re.type),$e=v(Re.internalFormat,Ve,re,Re.colorSpace,w.isXRRenderTarget===!0),qe=k(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,$e,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,V.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Me(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),Q(s.TEXTURE_CUBE_MAP,C,Ee);for(let ue=0;ue<6;ue++)if(o&&C.mipmaps&&C.mipmaps.length>0)for(let Ae=0;Ae<C.mipmaps.length;Ae++)de(V.__webglFramebuffer[ue][Ae],w,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae);else de(V.__webglFramebuffer[ue],w,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(C,Ee)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const ue=w.texture;for(let Ae=0,Re=ue.length;Ae<Re;Ae++){const Ve=ue[Ae],re=n.get(Ve);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),Q(s.TEXTURE_2D,Ve,Ee),de(V.__webglFramebuffer,w,Ve,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),x(Ve,Ee)&&S(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?ue=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,se.__webglTexture),Q(ue,C,Ee),o&&C.mipmaps&&C.mipmaps.length>0)for(let Ae=0;Ae<C.mipmaps.length;Ae++)de(V.__webglFramebuffer[Ae],w,C,s.COLOR_ATTACHMENT0,ue,Ae);else de(V.__webglFramebuffer,w,C,s.COLOR_ATTACHMENT0,ue,0);x(C,Ee)&&S(ue),t.unbindTexture()}w.depthBuffer&&ge(w)}function Ne(w){const C=m(w)||o,V=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0,te=V.length;se<te;se++){const ne=V[se];if(x(ne,C)){const Ee=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ue=n.get(ne).__webglTexture;t.bindTexture(Ee,ue),S(Ee),t.unbindTexture()}}}function me(w){if(o&&w.samples>0&&G(w)===!1){const C=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],V=w.width,se=w.height;let te=s.COLOR_BUFFER_BIT;const ne=[],Ee=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(w),Ae=w.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Re=0;Re<C.length;Re++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Re=0;Re<C.length;Re++){ne.push(s.COLOR_ATTACHMENT0+Re),w.depthBuffer&&ne.push(Ee);const Ve=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Ve===!1&&(w.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),Ae&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[Re]),Ve===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ee]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ee])),Ae){const re=n.get(C[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,re,0)}s.blitFramebuffer(0,0,V,se,0,0,V,se,te,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Re=0;Re<C.length;Re++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,ue.__webglColorRenderbuffer[Re]);const Ve=n.get(C[Re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function k(w){return Math.min(i.maxSamples,w.samples)}function G(w){const C=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function he(w){const C=a.render.frame;h.get(w)!==C&&(h.set(w,C),w.update())}function _e(w,C){const V=w.colorSpace,se=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===sa||V!==Tn&&V!==Jt&&(et.getTransfer(V)===rt?o===!1?e.has("EXT_sRGB")===!0&&se===Ut?(w.format=sa,w.minFilter=qt,w.generateMipmaps=!1):C=rc.sRGBToLinear(C):(se!==Ut||te!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),C}this.allocateTextureUnit=R,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=ve,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=de,this.useMultisampledRTT=G}function yc(s,e,t){const n=t.isWebGL2;function i(r,a=Jt){let o;const l=et.getTransfer(a);if(r===Cn)return s.UNSIGNED_BYTE;if(r===Kl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===jl)return s.UNSIGNED_SHORT_5_5_5_1;if(r===xh)return s.BYTE;if(r===vh)return s.SHORT;if(r===Aa)return s.UNSIGNED_SHORT;if(r===Yl)return s.INT;if(r===Vt)return s.UNSIGNED_INT;if(r===un)return s.FLOAT;if(r===Hi)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===_h)return s.ALPHA;if(r===Ut)return s.RGBA;if(r===yh)return s.LUMINANCE;if(r===Mh)return s.LUMINANCE_ALPHA;if(r===Hn)return s.DEPTH_COMPONENT;if(r===zi)return s.DEPTH_STENCIL;if(r===sa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Eh)return s.RED;if(r===Sa)return s.RED_INTEGER;if(r===Jl)return s.RG;if(r===Zl)return s.RG_INTEGER;if(r===Ji)return s.RGBA_INTEGER;if(r===vs||r===_s||r===ys||r===Ms)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===vs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===vs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_s)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ys)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ms)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===io||r===ro||r===so||r===ao)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===io)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ro)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===so)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ao)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$l)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===oo||r===lo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===oo)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===lo)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===co||r===ho||r===uo||r===fo||r===po||r===mo||r===go||r===Ao||r===So||r===xo||r===vo||r===_o||r===yo||r===Mo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===co)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ho)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uo)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fo)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===po)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mo)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===go)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ao)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===So)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xo)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vo)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_o)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yo)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mo)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Es||r===Eo||r===Co)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Es)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Eo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Co)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ch||r===To||r===bo||r===wo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Es)return o.COMPRESSED_RED_RGTC1_EXT;if(r===To)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ti?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class tg extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hr extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ng={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,A=.005;c.inputState.pinching&&d>p+A?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-A&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ng)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ig extends ri{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,A=null;const g=t.getContextAttributes();let m=null,f=null;const x=[],S=[],v=new xe;let T=null;const E=new Yt;E.layers.enable(1),E.viewport=new ft;const _=new Yt;_.layers.enable(2),_.viewport=new ft;const I=[E,_],M=new tg;M.layers.enable(1),M.layers.enable(2);let y=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let K=x[Q];return K===void 0&&(K=new qs,x[Q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Q){let K=x[Q];return K===void 0&&(K=new qs,x[Q]=K),K.getGripSpace()},this.getHand=function(Q){let K=x[Q];return K===void 0&&(K=new qs,x[Q]=K),K.getHandSpace()};function F(Q){const K=S.indexOf(Q.inputSource);if(K===-1)return;const ie=x[K];ie!==void 0&&(ie.update(Q.inputSource,Q.frame,c||a),ie.dispatchEvent({type:Q.type,data:Q.inputSource}))}function N(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",R);for(let Q=0;Q<x.length;Q++){const K=S[Q];K!==null&&(S[Q]=null,x[Q].disconnect(K))}y=null,P=null,e.setRenderTarget(m),p=null,d=null,u=null,i=null,f=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return A},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",N),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(v),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new zn(p.framebufferWidth,p.framebufferHeight,{format:Ut,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ie=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?zi:Hn,ie=g.stencil?ti:Vt);const de={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(de),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new zn(d.textureWidth,d.textureHeight,{format:Ut,type:Cn,depthTexture:new Ea(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Me=e.properties.get(f);Me.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(Q){for(let K=0;K<Q.removed.length;K++){const ie=Q.removed[K],oe=S.indexOf(ie);oe>=0&&(S[oe]=null,x[oe].disconnect(ie))}for(let K=0;K<Q.added.length;K++){const ie=Q.added[K];let oe=S.indexOf(ie);if(oe===-1){for(let Me=0;Me<x.length;Me++)if(Me>=S.length){S.push(ie),oe=Me;break}else if(S[Me]===null){S[Me]=ie,oe=Me;break}if(oe===-1)break}const de=x[oe];de&&de.connect(ie)}}const L=new D,B=new D;function O(Q,K,ie){L.setFromMatrixPosition(K.matrixWorld),B.setFromMatrixPosition(ie.matrixWorld);const oe=L.distanceTo(B),de=K.projectionMatrix.elements,Me=ie.projectionMatrix.elements,be=de[14]/(de[10]-1),ge=de[14]/(de[10]+1),ve=(de[9]+1)/de[5],z=(de[9]-1)/de[5],Ne=(de[8]-1)/de[0],me=(Me[8]+1)/Me[0],k=be*Ne,G=be*me,he=oe/(-Ne+me),_e=he*-Ne;K.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_e),Q.translateZ(he),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const w=be+he,C=ge+he,V=k-_e,se=G+(oe-_e),te=ve*ge/C*w,ne=z*ge/C*w;Q.projectionMatrix.makePerspective(V,se,te,ne,w,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function W(Q,K){K===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(K.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;M.near=_.near=E.near=Q.near,M.far=_.far=E.far=Q.far,(y!==M.near||P!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),y=M.near,P=M.far);const K=Q.parent,ie=M.cameras;W(M,K);for(let oe=0;oe<ie.length;oe++)W(ie[oe],K);ie.length===2?O(M,E,_):M.projectionMatrix.copy(E.projectionMatrix),j(Q,M,K)};function j(Q,K,ie){ie===null?Q.matrix.copy(K.matrixWorld):(Q.matrix.copy(ie.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(K.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=hr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)};let J=null;function ee(Q,K){if(h=K.getViewerPose(c||a),A=K,h!==null){const ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let oe=!1;ie.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let de=0;de<ie.length;de++){const Me=ie[de];let be=null;if(p!==null)be=p.getViewport(Me);else{const ve=u.getViewSubImage(d,Me);be=ve.viewport,de===0&&(e.setRenderTargetTextures(f,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(f))}let ge=I[de];ge===void 0&&(ge=new Yt,ge.layers.enable(de),ge.viewport=new ft,I[de]=ge),ge.matrix.fromArray(Me.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Me.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(be.x,be.y,be.width,be.height),de===0&&(M.matrix.copy(ge.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(ge)}}for(let ie=0;ie<x.length;ie++){const oe=S[ie],de=x[ie];oe!==null&&de!==void 0&&de.update(oe,K,c||a)}J&&J(Q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),A=null}const Z=new gc;Z.setAnimationLoop(ee),this.setAnimationLoop=function(Q){J=Q},this.dispose=function(){}}}function rg(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,dc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,S,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),A(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Nt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Nt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const S=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*S,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function A(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sg(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,S){const v=S.program;n.uniformBlockBinding(x,v)}function c(x,S){let v=i[x.id];v===void 0&&(A(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(x,T);const E=e.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){const S=u();x.__bindingPointIndex=S;const v=s.createBuffer(),T=x.__size,E=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=i[x.id],v=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,_=v.length;E<_;E++){const I=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,y=I.length;M<y;M++){const P=I[M];if(p(P,E,M,T)===!0){const F=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let R=0;for(let L=0;L<N.length;L++){const B=N[L],O=g(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,F+R,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,R),R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,S,v,T){const E=x.value,_=S+"_"+v;if(T[_]===void 0)return typeof E=="number"||typeof E=="boolean"?T[_]=E:T[_]=E.clone(),!0;{const I=T[_];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return T[_]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function A(x){const S=x.uniforms;let v=0;const T=16;for(let _=0,I=S.length;_<I;_++){const M=Array.isArray(S[_])?S[_]:[S[_]];for(let y=0,P=M.length;y<P;y++){const F=M[y],N=Array.isArray(F.value)?F.value:[F.value];for(let R=0,L=N.length;R<L;R++){const B=N[R],O=g(B),W=v%T;W!==0&&T-W<O.boundary&&(v+=T-W),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=O.storage}}}const E=v%T;return E>0&&(v+=T-E),x.__size=v,x.__cache={},this}function g(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Mc{constructor(e={}){const{canvas:t=Zh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),A=new Int32Array(4);let g=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const S=this;let v=!1,T=0,E=0,_=null,I=-1,M=null;const y=new ft,P=new ft;let F=null;const N=new Ke(0);let R=0,L=t.width,B=t.height,O=1,W=null,j=null;const J=new ft(0,0,L,B),ee=new ft(0,0,L,B);let Z=!1;const Q=new mc;let K=!1,ie=!1,oe=null;const de=new Ue,Me=new xe,be=new D,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return _===null?O:1}let z=n;function Ne(b,H){for(let q=0;q<b.length;q++){const Y=b[q],X=t.getContext(Y,H);if(X!==null)return X}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ga}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",fe,!1),z===null){const H=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&H.shift(),z=Ne(H,b),z===null)throw Ne(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let me,k,G,he,_e,w,C,V,se,te,ne,Ee,ue,Ae,Re,Ve,re,$e,qe,Oe,Ie,ye,ke,Je;function lt(){me=new gp(z),k=new hp(z,me,e),me.init(k),ye=new yc(z,me,k),G=new $m(z,me,k),he=new xp(z),_e=new Hm,w=new eg(z,me,G,_e,k,ye,he),C=new dp(S),V=new mp(S),se=new Tu(z,k),ke=new lp(z,me,se,k),te=new Ap(z,se,he,ke),ne=new Mp(z,te,se,he),qe=new yp(z,k,w),Ve=new up(_e),Ee=new Om(S,C,V,me,k,ke,Ve),ue=new rg(S,_e),Ae=new km,Re=new qm(me,k),$e=new op(S,C,V,G,ne,d,l),re=new Zm(S,ne,k),Je=new sg(z,he,k,G),Oe=new cp(z,me,he,k),Ie=new Sp(z,me,he,k),he.programs=Ee.programs,S.capabilities=k,S.extensions=me,S.properties=_e,S.renderLists=Ae,S.shadowMap=re,S.state=G,S.info=he}lt();const Xe=new ig(S,z);this.xr=Xe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(b){b!==void 0&&(O=b,this.setSize(L,B,!1))},this.getSize=function(b){return b.set(L,B)},this.setSize=function(b,H,q=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=b,B=H,t.width=Math.floor(b*O),t.height=Math.floor(H*O),q===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(L*O,B*O).floor()},this.setDrawingBufferSize=function(b,H,q){L=b,B=H,O=q,t.width=Math.floor(b*q),t.height=Math.floor(H*q),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,H,q,Y){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,H,q,Y),G.viewport(y.copy(J).multiplyScalar(O).floor())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,H,q,Y){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,H,q,Y),G.scissor(P.copy(ee).multiplyScalar(O).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(b){G.setScissorTest(Z=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(b=!0,H=!0,q=!0){let Y=0;if(b){let X=!1;if(_!==null){const Se=_.texture.format;X=Se===Ji||Se===Zl||Se===Sa}if(X){const Se=_.texture.type,we=Se===Cn||Se===Vt||Se===Aa||Se===ti||Se===Kl||Se===jl,Pe=$e.getClearColor(),Be=$e.getClearAlpha(),We=Pe.r,He=Pe.g,ze=Pe.b;we?(p[0]=We,p[1]=He,p[2]=ze,p[3]=Be,z.clearBufferuiv(z.COLOR,0,p)):(A[0]=We,A[1]=He,A[2]=ze,A[3]=Be,z.clearBufferiv(z.COLOR,0,A))}else Y|=z.COLOR_BUFFER_BIT}H&&(Y|=z.DEPTH_BUFFER_BIT),q&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ae.dispose(),Re.dispose(),_e.dispose(),C.dispose(),V.dispose(),ne.dispose(),ke.dispose(),Je.dispose(),Ee.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Pt),Xe.removeEventListener("sessionend",it),oe&&(oe.dispose(),oe=null),Lt.stop()};function le(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const b=he.autoReset,H=re.enabled,q=re.autoUpdate,Y=re.needsUpdate,X=re.type;lt(),he.autoReset=b,re.enabled=H,re.autoUpdate=q,re.needsUpdate=Y,re.type=X}function fe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pe(b){const H=b.target;H.removeEventListener("dispose",pe),Le(H)}function Le(b){De(b),_e.remove(b)}function De(b){const H=_e.get(b).programs;H!==void 0&&(H.forEach(function(q){Ee.releaseProgram(q)}),b.isShaderMaterial&&Ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,q,Y,X,Se){H===null&&(H=ge);const we=X.isMesh&&X.matrixWorld.determinant()<0,Pe=Lc(b,H,q,Y,X);G.setMaterial(Y,we);let Be=q.index,We=1;if(Y.wireframe===!0){if(Be=te.getWireframeAttribute(q),Be===void 0)return;We=2}const He=q.drawRange,ze=q.attributes.position;let ht=He.start*We,Ht=(He.start+He.count)*We;Se!==null&&(ht=Math.max(ht,Se.start*We),Ht=Math.min(Ht,(Se.start+Se.count)*We)),Be!==null?(ht=Math.max(ht,0),Ht=Math.min(Ht,Be.count)):ze!=null&&(ht=Math.max(ht,0),Ht=Math.min(Ht,ze.count));const xt=Ht-ht;if(xt<0||xt===1/0)return;ke.setup(X,Y,Pe,q,Be);let pn,at=Oe;if(Be!==null&&(pn=se.get(Be),at=Ie,at.setIndex(pn)),X.isMesh)Y.wireframe===!0?(G.setLineWidth(Y.wireframeLinewidth*ve()),at.setMode(z.LINES)):at.setMode(z.TRIANGLES);else if(X.isLine){let Qe=Y.linewidth;Qe===void 0&&(Qe=1),G.setLineWidth(Qe*ve()),X.isLineSegments?at.setMode(z.LINES):X.isLineLoop?at.setMode(z.LINE_LOOP):at.setMode(z.LINE_STRIP)}else X.isPoints?at.setMode(z.POINTS):X.isSprite&&at.setMode(z.TRIANGLES);if(X.isBatchedMesh)at.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)at.renderInstances(ht,xt,X.count);else if(q.isInstancedBufferGeometry){const Qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ms=Math.min(q.instanceCount,Qe);at.renderInstances(ht,xt,ms)}else at.render(ht,xt)};function tt(b,H,q){b.transparent===!0&&b.side===jt&&b.forceSinglePass===!1?(b.side=Nt,b.needsUpdate=!0,gr(b,H,q),b.side=fn,b.needsUpdate=!0,gr(b,H,q),b.side=jt):gr(b,H,q)}this.compile=function(b,H,q=null){q===null&&(q=b),m=Re.get(q),m.init(),x.push(m),q.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),b!==q&&b.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(S._useLegacyLights);const Y=new Set;return b.traverse(function(X){const Se=X.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const Pe=Se[we];tt(Pe,q,X),Y.add(Pe)}else tt(Se,q,X),Y.add(Se)}),x.pop(),m=null,Y},this.compileAsync=function(b,H,q=null){const Y=this.compile(b,H,q);return new Promise(X=>{function Se(){if(Y.forEach(function(we){_e.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){X(b);return}setTimeout(Se,10)}me.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let nt=null;function St(b){nt&&nt(b)}function Pt(){Lt.stop()}function it(){Lt.start()}const Lt=new gc;Lt.setAnimationLoop(St),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(b){nt=b,Xe.setAnimationLoop(b),b===null?Lt.stop():Lt.start()},Xe.addEventListener("sessionstart",Pt),Xe.addEventListener("sessionend",it),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(H),H=Xe.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,H,_),m=Re.get(b,x.length),m.init(),x.push(m),de.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(de),ie=this.localClippingEnabled,K=Ve.init(this.clippingPlanes,ie),g=Ae.get(b,f.length),g.init(),f.push(g),ln(b,H,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(W,j),this.info.render.frame++,K===!0&&Ve.beginShadows();const q=m.state.shadowsArray;if(re.render(q,b,H),K===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(g,b),m.setupLights(S._useLegacyLights),H.isArrayCamera){const Y=H.cameras;for(let X=0,Se=Y.length;X<Se;X++){const we=Y[X];Wa(g,b,we,we.viewport)}}else Wa(g,b,H);_!==null&&(w.updateMultisampleRenderTarget(_),w.updateRenderTargetMipmap(_)),b.isScene===!0&&b.onAfterRender(S,b,H),ke.resetDefaultState(),I=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function ln(b,H,q,Y){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){Y&&be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const we=ne.update(b),Pe=b.material;Pe.visible&&g.push(b,we,Pe,q,be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const we=ne.update(b),Pe=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),be.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),be.copy(we.boundingSphere.center)),be.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(Pe)){const Be=we.groups;for(let We=0,He=Be.length;We<He;We++){const ze=Be[We],ht=Pe[ze.materialIndex];ht&&ht.visible&&g.push(b,we,ht,q,be.z,ze)}}else Pe.visible&&g.push(b,we,Pe,q,be.z,null)}}const Se=b.children;for(let we=0,Pe=Se.length;we<Pe;we++)ln(Se[we],H,q,Y)}function Wa(b,H,q,Y){const X=b.opaque,Se=b.transmissive,we=b.transparent;m.setupLightsView(q),K===!0&&Ve.setGlobalState(S.clippingPlanes,q),Se.length>0&&Pc(X,Se,H,q),Y&&G.viewport(y.copy(Y)),X.length>0&&mr(X,H,q),Se.length>0&&mr(Se,H,q),we.length>0&&mr(we,H,q),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Pc(b,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Se=k.isWebGL2;oe===null&&(oe=new zn(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Hi:Cn,minFilter:cr,samples:Se?4:0})),S.getDrawingBufferSize(Me),Se?oe.setSize(Me.x,Me.y):oe.setSize(es(Me.x),es(Me.y));const we=S.getRenderTarget();S.setRenderTarget(oe),S.getClearColor(N),R=S.getClearAlpha(),R<1&&S.setClearColor(16777215,.5),S.clear();const Pe=S.toneMapping;S.toneMapping=On,mr(b,q,Y),w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe);let Be=!1;for(let We=0,He=H.length;We<He;We++){const ze=H[We],ht=ze.object,Ht=ze.geometry,xt=ze.material,pn=ze.group;if(xt.side===jt&&ht.layers.test(Y.layers)){const at=xt.side;xt.side=Nt,xt.needsUpdate=!0,Xa(ht,q,Y,Ht,xt,pn),xt.side=at,xt.needsUpdate=!0,Be=!0}}Be===!0&&(w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe)),S.setRenderTarget(we),S.setClearColor(N,R),S.toneMapping=Pe}function mr(b,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let X=0,Se=b.length;X<Se;X++){const we=b[X],Pe=we.object,Be=we.geometry,We=Y===null?we.material:Y,He=we.group;Pe.layers.test(q.layers)&&Xa(Pe,H,q,Be,We,He)}}function Xa(b,H,q,Y,X,Se){b.onBeforeRender(S,H,q,Y,X,Se),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(S,H,q,Y,b,Se),X.transparent===!0&&X.side===jt&&X.forceSinglePass===!1?(X.side=Nt,X.needsUpdate=!0,S.renderBufferDirect(q,H,Y,X,b,Se),X.side=fn,X.needsUpdate=!0,S.renderBufferDirect(q,H,Y,X,b,Se),X.side=jt):S.renderBufferDirect(q,H,Y,X,b,Se),b.onAfterRender(S,H,q,Y,X,Se)}function gr(b,H,q){H.isScene!==!0&&(H=ge);const Y=_e.get(b),X=m.state.lights,Se=m.state.shadowsArray,we=X.state.version,Pe=Ee.getParameters(b,X.state,Se,H,q),Be=Ee.getProgramCacheKey(Pe);let We=Y.programs;Y.environment=b.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(b.isMeshStandardMaterial?V:C).get(b.envMap||Y.environment),We===void 0&&(b.addEventListener("dispose",pe),We=new Map,Y.programs=We);let He=We.get(Be);if(He!==void 0){if(Y.currentProgram===He&&Y.lightsStateVersion===we)return qa(b,Pe),He}else Pe.uniforms=Ee.getUniforms(b),b.onBuild(q,Pe,S),b.onBeforeCompile(Pe,S),He=Ee.acquireProgram(Pe,Be),We.set(Be,He),Y.uniforms=Pe.uniforms;const ze=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=Ve.uniform),qa(b,Pe),Y.needsLights=Fc(b),Y.lightsStateVersion=we,Y.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMap.value=X.state.directionalShadowMap,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotShadowMap.value=X.state.spotShadowMap,ze.spotLightMatrix.value=X.state.spotLightMatrix,ze.spotLightMap.value=X.state.spotLightMap,ze.pointShadowMap.value=X.state.pointShadowMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=He,Y.uniformsList=null,He}function Qa(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=qr.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function qa(b,H){const q=_e.get(b);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Lc(b,H,q,Y,X){H.isScene!==!0&&(H=ge),w.resetTextureUnits();const Se=H.fog,we=Y.isMeshStandardMaterial?H.environment:null,Pe=_===null?S.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Tn,Be=(Y.isMeshStandardMaterial?V:C).get(Y.envMap||we),We=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,He=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ze=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,Ht=!!q.morphAttributes.color;let xt=On;Y.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(xt=S.toneMapping);const pn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,at=pn!==void 0?pn.length:0,Qe=_e.get(Y),ms=m.state.lights;if(K===!0&&(ie===!0||b!==M)){const Xt=b===M&&Y.id===I;Ve.setState(Y,b,Xt)}let ct=!1;Y.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ms.state.version||Qe.outputColorSpace!==Pe||X.isBatchedMesh&&Qe.batching===!1||!X.isBatchedMesh&&Qe.batching===!0||X.isInstancedMesh&&Qe.instancing===!1||!X.isInstancedMesh&&Qe.instancing===!0||X.isSkinnedMesh&&Qe.skinning===!1||!X.isSkinnedMesh&&Qe.skinning===!0||X.isInstancedMesh&&Qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Qe.instancingColor===!1&&X.instanceColor!==null||Qe.envMap!==Be||Y.fog===!0&&Qe.fog!==Se||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ve.numPlanes||Qe.numIntersection!==Ve.numIntersection)||Qe.vertexAlphas!==We||Qe.vertexTangents!==He||Qe.morphTargets!==ze||Qe.morphNormals!==ht||Qe.morphColors!==Ht||Qe.toneMapping!==xt||k.isWebGL2===!0&&Qe.morphTargetsCount!==at)&&(ct=!0):(ct=!0,Qe.__version=Y.version);let Gn=Qe.currentProgram;ct===!0&&(Gn=gr(Y,H,X));let Ya=!1,Qi=!1,gs=!1;const bt=Gn.getUniforms(),Vn=Qe.uniforms;if(G.useProgram(Gn.program)&&(Ya=!0,Qi=!0,gs=!0),Y.id!==I&&(I=Y.id,Qi=!0),Ya||M!==b){bt.setValue(z,"projectionMatrix",b.projectionMatrix),bt.setValue(z,"viewMatrix",b.matrixWorldInverse);const Xt=bt.map.cameraPosition;Xt!==void 0&&Xt.setValue(z,be.setFromMatrixPosition(b.matrixWorld)),k.logarithmicDepthBuffer&&bt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&bt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Qi=!0,gs=!0)}if(X.isSkinnedMesh){bt.setOptional(z,X,"bindMatrix"),bt.setOptional(z,X,"bindMatrixInverse");const Xt=X.skeleton;Xt&&(k.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),bt.setValue(z,"boneTexture",Xt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(bt.setOptional(z,X,"batchingTexture"),bt.setValue(z,"batchingTexture",X._matricesTexture,w));const As=q.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&k.isWebGL2===!0)&&qe.update(X,q,Gn),(Qi||Qe.receiveShadow!==X.receiveShadow)&&(Qe.receiveShadow=X.receiveShadow,bt.setValue(z,"receiveShadow",X.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Vn.envMap.value=Be,Vn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Qi&&(bt.setValue(z,"toneMappingExposure",S.toneMappingExposure),Qe.needsLights&&Bc(Vn,gs),Se&&Y.fog===!0&&ue.refreshFogUniforms(Vn,Se),ue.refreshMaterialUniforms(Vn,Y,O,B,oe),qr.upload(z,Qa(Qe),Vn,w)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(qr.upload(z,Qa(Qe),Vn,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&bt.setValue(z,"center",X.center),bt.setValue(z,"modelViewMatrix",X.modelViewMatrix),bt.setValue(z,"normalMatrix",X.normalMatrix),bt.setValue(z,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Xt=Y.uniformsGroups;for(let Ss=0,Uc=Xt.length;Ss<Uc;Ss++)if(k.isWebGL2){const Ka=Xt[Ss];Je.update(Ka,Gn),Je.bind(Ka,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function Bc(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Fc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(b,H,q){_e.get(b.texture).__webglTexture=H,_e.get(b.depthTexture).__webglTexture=q;const Y=_e.get(b);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,H){const q=_e.get(b);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,q=0){_=b,T=H,E=q;let Y=!0,X=null,Se=!1,we=!1;if(b){const Be=_e.get(b);Be.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1):Be.__webglFramebuffer===void 0?w.setupRenderTarget(b):Be.__hasExternalTextures&&w.rebindTextures(b,_e.get(b.texture).__webglTexture,_e.get(b.depthTexture).__webglTexture);const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const He=_e.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[H])?X=He[H][q]:X=He[H],Se=!0):k.isWebGL2&&b.samples>0&&w.useMultisampledRTT(b)===!1?X=_e.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?X=He[q]:X=He,y.copy(b.viewport),P.copy(b.scissor),F=b.scissorTest}else y.copy(J).multiplyScalar(O).floor(),P.copy(ee).multiplyScalar(O).floor(),F=Z;if(G.bindFramebuffer(z.FRAMEBUFFER,X)&&k.drawBuffers&&Y&&G.drawBuffers(b,X),G.viewport(y),G.scissor(P),G.setScissorTest(F),Se){const Be=_e.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Be.__webglTexture,q)}else if(we){const Be=_e.get(b.texture),We=H||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.__webglTexture,q||0,We)}I=-1},this.readRenderTargetPixels=function(b,H,q,Y,X,Se,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=_e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){G.bindFramebuffer(z.FRAMEBUFFER,Pe);try{const Be=b.texture,We=Be.format,He=Be.type;if(We!==Ut&&ye.convert(We)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=He===Hi&&(me.has("EXT_color_buffer_half_float")||k.isWebGL2&&me.has("EXT_color_buffer_float"));if(He!==Cn&&ye.convert(He)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===un&&(k.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Y&&q>=0&&q<=b.height-X&&z.readPixels(H,q,Y,X,ye.convert(We),ye.convert(He),Se)}finally{const Be=_!==null?_e.get(_).__webglFramebuffer:null;G.bindFramebuffer(z.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(b,H,q=0){const Y=Math.pow(2,-q),X=Math.floor(H.image.width*Y),Se=Math.floor(H.image.height*Y);w.setTexture2D(H,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,b.x,b.y,X,Se),G.unbindTexture()},this.copyTextureToTexture=function(b,H,q,Y=0){const X=H.image.width,Se=H.image.height,we=ye.convert(q.format),Pe=ye.convert(q.type);w.setTexture2D(q,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment),H.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Y,b.x,b.y,X,Se,we,Pe,H.image.data):H.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Y,b.x,b.y,H.mipmaps[0].width,H.mipmaps[0].height,we,H.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,Y,b.x,b.y,we,Pe,H.image),Y===0&&q.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(b,H,q,Y,X=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=b.max.x-b.min.x+1,we=b.max.y-b.min.y+1,Pe=b.max.z-b.min.z+1,Be=ye.convert(Y.format),We=ye.convert(Y.type);let He;if(Y.isData3DTexture)w.setTexture3D(Y,0),He=z.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)w.setTexture2DArray(Y,0),He=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const ze=z.getParameter(z.UNPACK_ROW_LENGTH),ht=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ht=z.getParameter(z.UNPACK_SKIP_PIXELS),xt=z.getParameter(z.UNPACK_SKIP_ROWS),pn=z.getParameter(z.UNPACK_SKIP_IMAGES),at=q.isCompressedTexture?q.mipmaps[X]:q.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,at.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,at.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,b.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,b.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,b.min.z),q.isDataTexture||q.isData3DTexture?z.texSubImage3D(He,X,H.x,H.y,H.z,Se,we,Pe,Be,We,at.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(He,X,H.x,H.y,H.z,Se,we,Pe,Be,at.data)):z.texSubImage3D(He,X,H.x,H.y,H.z,Se,we,Pe,Be,We,at),z.pixelStorei(z.UNPACK_ROW_LENGTH,ze),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ht),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ht),z.pixelStorei(z.UNPACK_SKIP_ROWS,xt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,pn),X===0&&Y.generateMipmaps&&z.generateMipmap(He),G.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),G.unbindTexture()},this.resetState=function(){T=0,E=0,_=null,G.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xa?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===hs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?ni:ec}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ni?Mt:Tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ag extends Mc{}ag.prototype.isWebGL1Renderer=!0;class og extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Pn extends Ot{constructor(e=null,t=1,n=1,i,r,a,o,l,c=yt,h=yt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lg extends Zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class fr extends en{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let A=0;const g=[],m=n/2;let f=0;x(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(p,2));function x(){const v=new D,T=new D;let E=0;const _=(t-e)/n;for(let I=0;I<=r;I++){const M=[],y=I/r,P=y*(t-e)+e;for(let F=0;F<=i;F++){const N=F/i,R=N*l+o,L=Math.sin(R),B=Math.cos(R);T.x=P*L,T.y=-y*n+m,T.z=P*B,u.push(T.x,T.y,T.z),v.set(L,_,B).normalize(),d.push(v.x,v.y,v.z),p.push(N,1-y),M.push(A++)}g.push(M)}for(let I=0;I<i;I++)for(let M=0;M<r;M++){const y=g[M][I],P=g[M+1][I],F=g[M+1][I+1],N=g[M][I+1];h.push(y,P,N),h.push(P,F,N),E+=6}c.addGroup(f,E,0),f+=E}function S(v){const T=A,E=new xe,_=new D;let I=0;const M=v===!0?e:t,y=v===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),A++;const P=A;for(let F=0;F<=i;F++){const R=F/i*l+o,L=Math.cos(R),B=Math.sin(R);_.x=M*B,_.y=m*y,_.z=M*L,u.push(_.x,_.y,_.z),d.push(0,y,0),E.x=L*.5+.5,E.y=B*.5*y+.5,p.push(E.x,E.y),A++}for(let F=0;F<i;F++){const N=T+F,R=P+F;v===!0?h.push(R,R+1,N):h.push(R+1,R,N),I+=3}c.addGroup(f,I,v===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ca extends fr{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ca(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ns extends en{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,p=[],A=[],g=[],m=[];for(let f=0;f<=n;f++){const x=[],S=f/n;let v=0;f===0&&a===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const E=T/t;u.x=-e*Math.cos(i+E*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(i+E*r)*Math.sin(a+S*o),A.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+v,1-S),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const S=h[f][x+1],v=h[f][x],T=h[f+1][x],E=h[f+1][x+1];(f!==0||a>0)&&p.push(S,v,E),(f!==n-1||l<Math.PI)&&p.push(v,T,E)}this.setIndex(p),this.setAttribute("position",new Wt(A,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cg extends en{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Al{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);const Zn=class Zn{constructor(e,t){let n,i;this.promise=new Promise((o,l)=>{n=o,i=l});const r=n.bind(this),a=i.bind(this);e(((...o)=>{r(...o)}).bind(this),(o=>{a(o)}).bind(this)),this.abortHandler=t,this.id=Zn.idGen++}then(e){return new Zn((t,n)=>{this.promise=this.promise.then((...i)=>{const r=e(...i);r instanceof Promise||r instanceof Zn?r.then((...a)=>{t(...a)}):t(r)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new Zn(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}};ae(Zn,"idGen",0);let pr=Zn;class Yr extends Error{constructor(e){super(e)}}(function(){const s=new Float32Array(1);new Int32Array(s.buffer)})();const Ys=function(){const s=new Float32Array(1),e=new Int32Array(s.buffer);return function(t){return s[0]=t,e[0]}}(),Ta=function(s,e,t=!0,n){const i=new AbortController,r=i.signal;let a=!1;return new pr((o,l)=>{const c={signal:r};n&&(c.headers=n),fetch(s,c).then(async h=>{if(!h.ok){const m=await h.text();return void l(new Error(`Fetch failed: ${h.status} ${h.statusText} ${m}`))}const u=h.body.getReader();let d=0,p=h.headers.get("Content-Length"),A=p?parseInt(p):void 0;const g=[];for(;!a;)try{const{value:m,done:f}=await u.read();if(f){if(e&&e(100,"100%",m,A),t){const v=new Blob(g).arrayBuffer();o(v)}else o();break}let x,S;d+=m.length,A!==void 0&&(x=d/A*100,S=`${x.toFixed(2)}%`),t&&g.push(m),e&&e(x,S,m,A)}catch(m){return void l(m)}}).catch(h=>{l(new Yr(h))})},o=>{i.abort(o),a=!0})},Tt=function(s,e,t){return Math.max(Math.min(s,t),e)},Mi=function(){return performance.now()/1e3},wi=s=>{if(s.geometry&&(s.geometry.dispose(),s.geometry=null),s.material&&(s.material.dispose(),s.material=null),s.children)for(let e of s.children)wi(e)},on=(s,e)=>new Promise(t=>{window.setTimeout(()=>{t(s())},e?1:50)}),Li=(s=0)=>{switch(s){case 1:return 9;case 2:return 24}return 0},ba=()=>{let s,e;return{promise:new Promise((t,n)=>{s=t,e=n}),resolve:s,reject:e}},Ks=s=>{let e,t;return s||(s=()=>{}),{promise:new pr((n,i)=>{e=n,t=i},s),resolve:e,reject:t}};class hg{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function la(){const s=navigator.userAgent;return s.indexOf("iPhone")>0||s.indexOf("iPad")>0}function Sl(){if(la()){const s=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new hg(parseInt(s[1]||0,10),parseInt(s[2]||0,10),parseInt(s[3]||0,10))}return null}const sr=class sr{constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=Li(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+14,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=Li(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=sr.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,r,a,o,l,c,h,u,d,p,A,...g){const m=[e,t,n,i,r,a,o,l,c,h,u,d,p,A,...this.defaultSphericalHarmonics];for(let f=0;f<g.length&&f<this.sphericalHarmonicsCount;f++)m[f]=g[f];return this.addSplat(m),m}addSplatFromArray(e,t){const n=e.splats[t],i=sr.createSplat(this.sphericalHarmonicsDegree);for(let r=0;r<this.componentCount&&r<n.length;r++)i[r]=n[r];this.addSplat(i)}};ae(sr,"OFFSET",{X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37});let Ce=sr;class Ye{}ae(Ye,"DefaultSplatSortDistanceMapPrecision",16),ae(Ye,"MemoryPageSize",65536),ae(Ye,"BytesPerFloat",4),ae(Ye,"BytesPerInt",4),ae(Ye,"MaxScenes",32),ae(Ye,"ProgressiveLoadSectionSize",262144),ae(Ye,"ProgressiveLoadSectionDelayDuration",15),ae(Ye,"SphericalHarmonics8BitCompressionRange",3);const zr=Ye.SphericalHarmonics8BitCompressionRange/2,pt=ur.toHalfFloat.bind(ur),wa=ur.fromHalfFloat.bind(ur),st=(s,e,t=!1,n,i)=>e===0?s:e===1||e===2&&!t?ur.fromHalfFloat(s):e===2?Ra(s,n,i):void 0,tr=(s,e,t)=>{s=Tt(s,e,t);const n=t-e;return Tt(Math.floor((s-e)/n*255),0,255)},Ra=(s,e,t)=>s/255*(t-e)+e,Ec=(s,e,t)=>tr(wa(s,e,t)),ug=(s,e,t)=>pt(Ra(s,e,t)),je=(s,e,t,n=!1)=>t===0?s.getFloat32(4*e,!0):t===1||t===2&&!n?s.getUint16(2*e,!0):s.getUint8(e,!0),dg=function(){const s=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let r=s;return t===2&&i?n===1?r=ug:n==0&&(r=Ra):t===2||t===1?n===0?r=wa:n==2&&(r=i?Ec:s):t===0&&(n===1?r=pt:n==2&&(r=i?tr:pt)),r(e)}}(),Ei=(s,e,t,n,i=0)=>{const r=new Uint8Array(s,e),a=new Uint8Array(t,n);for(let o=0;o<i;o++)a[o]=r[o]},$=class ${constructor(e,t=!0){ae(this,"getSplatScaleAndRotation",function(){const e=new Ue,t=new Ue,n=new Ue,i=new D,r=new D,a=new ot;return function(o,l,c,h,u){const d=this.globalSplatIndexToSectionMap[o],p=this.sections[d],A=o-p.splatCountOffset,g=p.bytesPerSplat*A+$.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,p.dataBase+g);r.set(st(je(m,0,this.compressionLevel),this.compressionLevel),st(je(m,1,this.compressionLevel),this.compressionLevel),st(je(m,2,this.compressionLevel),this.compressionLevel)),u&&(u.x!==void 0&&(r.x=u.x),u.y!==void 0&&(r.y=u.y),u.z!==void 0&&(r.z=u.z)),a.set(st(je(m,4,this.compressionLevel),this.compressionLevel),st(je(m,5,this.compressionLevel),this.compressionLevel),st(je(m,6,this.compressionLevel),this.compressionLevel),st(je(m,3,this.compressionLevel),this.compressionLevel)),h?(e.makeScale(r.x,r.y,r.z),t.makeRotationFromQuaternion(a),n.copy(e).multiply(t).multiply(h),n.decompose(i,c,l)):(l.copy(r),c.copy(a))}}());ae(this,"fillSplatScaleRotationArray",function(){const e=new Ue,t=new Ue,n=new Ue,i=new D,r=new ot,a=new D,o=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,h,u,d,p,A,g){const m=this.splatCount;u=u||0,d=d||m-1,p===void 0&&(p=u);const f=(x,S)=>dg(x,S,A);for(let x=u;x<=d;x++){const S=this.globalSplatIndexToSectionMap[x],v=this.sections[S],T=x-v.splatCountOffset,E=v.bytesPerSplat*T+$.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,_=(x-u+p)*$.ScaleComponentCount,I=(x-u+p)*$.RotationComponentCount,M=new DataView(this.bufferData,v.dataBase+E),y=g&&g.x!==void 0?g.x:je(M,0,this.compressionLevel),P=g&&g.y!==void 0?g.y:je(M,1,this.compressionLevel),F=g&&g.z!==void 0?g.z:je(M,2,this.compressionLevel),N=je(M,3,this.compressionLevel),R=je(M,4,this.compressionLevel),L=je(M,5,this.compressionLevel),B=je(M,6,this.compressionLevel);i.set(st(y,this.compressionLevel),st(P,this.compressionLevel),st(F,this.compressionLevel)),r.set(st(R,this.compressionLevel),st(L,this.compressionLevel),st(B,this.compressionLevel),st(N,this.compressionLevel)).normalize(),h&&(a.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(r),n.identity().premultiply(e).premultiply(t),n.premultiply(h),n.decompose(a,r,i),r.normalize()),o(r),l&&(l[_]=f(i.x,0),l[_+1]=f(i.y,0),l[_+2]=f(i.z,0)),c&&(c[I]=f(r.x,0),c[I+1]=f(r.y,0),c[I+2]=f(r.z,0),c[I+3]=f(r.w,0))}}}());ae(this,"fillSphericalHarmonicsArray",function(){for(let R=0;R<15;R++)new D;const e=new Fe,t=new Ue,n=new D,i=new D,r=new ot,a=[],o=[],l=[],c=[],h=[],u=[],d=[],p=[],A=[],g=[],m=[],f=[],x=[],S=[],v=[],T=[],E=[],_=[],I=R=>R,M=(R,L,B,O)=>{R[0]=L,R[1]=B,R[2]=O},y=(R,L,B,O,W)=>{R[0]=je(L,O,W,!0),R[1]=je(L,O+B,W,!0),R[2]=je(L,O+B+B,W,!0)},P=(R,L)=>{L[0]=R[0],L[1]=R[1],L[2]=R[2]},F=(R,L,B,O)=>{L[B]=O(R[0]),L[B+1]=O(R[1]),L[B+2]=O(R[2])},N=(R,L,B,O,W)=>(L[0]=st(R[0],B,!0,O,W),L[1]=st(R[1],B,!0,O,W),L[2]=st(R[2],B,!0,O,W),L);return function(R,L,B,O,W,j,J){const ee=this.splatCount;O=O||0,W=W||ee-1,j===void 0&&(j=O),B&&L>=1&&(t.copy(B),t.decompose(n,r,i),r.normalize(),t.makeRotationFromQuaternion(r),e.setFromMatrix4(t),M(a,e.elements[4],-e.elements[7],e.elements[1]),M(o,-e.elements[5],e.elements[8],-e.elements[2]),M(l,e.elements[3],-e.elements[6],e.elements[0]));const Z=K=>Ec(K,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),Q=K=>tr(K,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let K=O;K<=W;K++){const ie=this.globalSplatIndexToSectionMap[K],oe=this.sections[ie];L=Math.min(L,oe.sphericalHarmonicsDegree);const de=Li(L),Me=K-oe.splatCountOffset,be=oe.bytesPerSplat*Me+$.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,ge=new DataView(this.bufferData,oe.dataBase+be),ve=(K-O+j)*de;let z=B?0:this.compressionLevel,Ne=I;z!==J&&(z===1?J===0?Ne=wa:J==2&&(Ne=Z):z===0&&(J===1?Ne=pt:J==2&&(Ne=Q)));const me=this.minSphericalHarmonicsCoeff,k=this.maxSphericalHarmonicsCoeff;L>=1&&(y(A,ge,3,0,this.compressionLevel),y(g,ge,3,1,this.compressionLevel),y(m,ge,3,2,this.compressionLevel),B?(N(A,A,this.compressionLevel,me,k),N(g,g,this.compressionLevel,me,k),N(m,m,this.compressionLevel,me,k),$.rotateSphericalHarmonics3(A,g,m,a,o,l,S,v,T)):(P(A,S),P(g,v),P(m,T)),F(S,R,ve,Ne),F(v,R,ve+3,Ne),F(T,R,ve+6,Ne),L>=2&&(y(A,ge,5,9,this.compressionLevel),y(g,ge,5,10,this.compressionLevel),y(m,ge,5,11,this.compressionLevel),y(f,ge,5,12,this.compressionLevel),y(x,ge,5,13,this.compressionLevel),B?(N(A,A,this.compressionLevel,me,k),N(g,g,this.compressionLevel,me,k),N(m,m,this.compressionLevel,me,k),N(f,f,this.compressionLevel,me,k),N(x,x,this.compressionLevel,me,k),$.rotateSphericalHarmonics5(A,g,m,f,x,a,o,l,c,h,u,d,p,S,v,T,E,_)):(P(A,S),P(g,v),P(m,T),P(f,E),P(x,_)),F(S,R,ve+9,Ne),F(v,R,ve+12,Ne),F(T,R,ve+15,Ne),F(E,R,ve+18,Ne),F(_,R,ve+21,Ne)))}}}());this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let r=i;n=e.fullBucketCount;let a=0;for(;r<e.splatCount;){let o=e.partiallyFilledBucketLengths[a];if(t>=r&&t<r+o)break;r+=o,n++,a++}}return n}getSplatCenter(e,t,n){const i=this.globalSplatIndexToSectionMap[e],r=this.sections[i],a=e-r.splatCountOffset,o=r.bytesPerSplat*a,l=new DataView(this.bufferData,r.dataBase+o),c=je(l,0,this.compressionLevel),h=je(l,1,this.compressionLevel),u=je(l,2,this.compressionLevel);if(this.compressionLevel>=1){const d=this.getBucketIndex(r,a)*$.BucketStorageSizeFloats,p=r.compressionScaleFactor,A=r.compressionScaleRange;t.x=(c-A)*p+r.bucketArray[d],t.y=(h-A)*p+r.bucketArray[d+1],t.z=(u-A)*p+r.bucketArray[d+2]}else t.x=c,t.y=h,t.z=u;n&&t.applyMatrix4(n)}getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],r=e-i.splatCountOffset,a=i.bytesPerSplat*r+$.CompressionLevels[this.compressionLevel].ColorOffsetBytes,o=new Uint8Array(this.bufferData,i.dataBase+a,4);t.set(o[0],o[1],o[2],o[3])}fillSplatCenterArray(e,t,n,i,r){const a=this.splatCount;n=n||0,i=i||a-1,r===void 0&&(r=n);const o=new D;for(let l=n;l<=i;l++){const c=this.globalSplatIndexToSectionMap[l],h=this.sections[c],u=l-h.splatCountOffset,d=(l-n+r)*$.CenterComponentCount,p=h.bytesPerSplat*u,A=new DataView(this.bufferData,h.dataBase+p),g=je(A,0,this.compressionLevel),m=je(A,1,this.compressionLevel),f=je(A,2,this.compressionLevel);if(this.compressionLevel>=1){const x=this.getBucketIndex(h,u)*$.BucketStorageSizeFloats,S=h.compressionScaleFactor,v=h.compressionScaleRange;o.x=(g-v)*S+h.bucketArray[x],o.y=(m-v)*S+h.bucketArray[x+1],o.z=(f-v)*S+h.bucketArray[x+2]}else o.x=g,o.y=m,o.z=f;t&&o.applyMatrix4(t),e[d]=o.x,e[d+1]=o.y,e[d+2]=o.z}}fillSplatCovarianceArray(e,t,n,i,r,a){const o=this.splatCount,l=new D,c=new ot;n=n||0,i=i||o-1,r===void 0&&(r=n);for(let h=n;h<=i;h++){const u=this.globalSplatIndexToSectionMap[h],d=this.sections[u],p=h-d.splatCountOffset,A=(h-n+r)*$.CovarianceComponentCount,g=d.bytesPerSplat*p+$.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,d.dataBase+g);l.set(st(je(m,0,this.compressionLevel),this.compressionLevel),st(je(m,1,this.compressionLevel),this.compressionLevel),st(je(m,2,this.compressionLevel),this.compressionLevel)),c.set(st(je(m,4,this.compressionLevel),this.compressionLevel),st(je(m,5,this.compressionLevel),this.compressionLevel),st(je(m,6,this.compressionLevel),this.compressionLevel),st(je(m,3,this.compressionLevel),this.compressionLevel)),$.computeCovariance(l,c,t,e,A,a)}}fillSplatColorArray(e,t,n,i,r){const a=this.splatCount;n=n||0,i=i||a-1,r===void 0&&(r=n);for(let o=n;o<=i;o++){const l=this.globalSplatIndexToSectionMap[o],c=this.sections[l],h=o-c.splatCountOffset,u=(o-n+r)*$.ColorComponentCount,d=c.bytesPerSplat*h+$.CompressionLevels[this.compressionLevel].ColorOffsetBytes,p=new Uint8Array(this.bufferData,c.dataBase+d);let A=p[3];A=A>=t?A:0,e[u]=p[0],e[u+1]=p[1],e[u+2]=p[2],e[u+3]=A}}static parseHeader(e){const t=new Uint8Array(e,0,$.HeaderSizeBytes),n=new Uint16Array(e,0,$.HeaderSizeBytes/2),i=new Uint32Array(e,0,$.HeaderSizeBytes/4),r=new Float32Array(e,0,$.HeaderSizeBytes/4);return{versionMajor:t[0],versionMinor:t[1],maxSectionCount:i[1],sectionCount:i[2],maxSplatCount:i[3],splatCount:i[4],compressionLevel:n[10],sceneCenter:new D(r[6],r[7],r[8]),minSphericalHarmonicsCoeff:r[9]||-1.5,maxSphericalHarmonicsCoeff:r[10]||zr}}static writeHeaderCountsToBuffer(e,t,n){const i=new Uint32Array(n,0,$.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,$.HeaderSizeBytes),i=new Uint16Array(t,0,$.HeaderSizeBytes/2),r=new Uint32Array(t,0,$.HeaderSizeBytes/4),a=new Float32Array(t,0,$.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,r[1]=e.maxSectionCount,r[2]=e.sectionCount,r[3]=e.maxSplatCount,r[4]=e.splatCount,i[10]=e.compressionLevel,a[6]=e.sceneCenter.x,a[7]=e.sceneCenter.y,a[8]=e.sceneCenter.z,a[9]=e.minSphericalHarmonicsCoeff||-1.5,a[10]=e.maxSphericalHarmonicsCoeff||zr}static parseSectionHeaders(e,t,n=0,i){const r=e.compressionLevel,a=e.maxSectionCount,o=new Uint16Array(t,n,a*$.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,a*$.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,a*$.SectionHeaderSizeBytes/4),h=[];let u=0,d=u/2,p=u/4,A=$.HeaderSizeBytes+e.maxSectionCount*$.SectionHeaderSizeBytes,g=0;for(let m=0;m<a;m++){const f=l[p+1],x=l[p+2],S=l[p+3],v=c[p+4],T=v/2,E=o[d+10],_=l[p+6]||$.CompressionLevels[r].ScaleRange,I=l[p+8],M=l[p+9],y=4*M,P=E*S+y,F=o[d+20],{bytesPerSplat:N}=$.calculateComponentStorage(r,F),R=N*f,L=R+P,B={bytesPerSplat:N,splatCountOffset:g,splatCount:i?f:0,maxSplatCount:f,bucketSize:x,bucketCount:S,bucketBlockSize:v,halfBucketBlockSize:T,bucketStorageSizeBytes:E,bucketsStorageSizeBytes:P,splatDataStorageSizeBytes:R,storageSizeBytes:L,compressionScaleRange:_,compressionScaleFactor:T/_,base:A,bucketsBase:A+y,dataBase:A+P,fullBucketCount:I,partiallyFilledBucketCount:M,sphericalHarmonicsDegree:F};h[m]=B,A+=L,u+=$.SectionHeaderSizeBytes,d=u/2,p=u/4,g+=f}return h}static writeSectionHeaderToBuffer(e,t,n,i=0){const r=new Uint16Array(n,i,$.SectionHeaderSizeBytes/2),a=new Uint32Array(n,i,$.SectionHeaderSizeBytes/4),o=new Float32Array(n,i,$.SectionHeaderSizeBytes/4);a[0]=e.splatCount,a[1]=e.maxSplatCount,a[2]=t>=1?e.bucketSize:0,a[3]=t>=1?e.bucketCount:0,o[4]=t>=1?e.bucketBlockSize:0,r[10]=t>=1?$.BucketStorageSizeBytes:0,a[6]=t>=1?e.compressionScaleRange:0,a[7]=e.storageSizeBytes,a[8]=t>=1?e.fullBucketCount:0,a[9]=t>=1?e.partiallyFilledBucketCount:0,r[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){new Uint32Array(t,n,$.SectionHeaderSizeBytes/4)[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=$.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new D().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=$.parseSectionHeaders(n,this.bufferData,$.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=$.CompressionLevels[e].BytesPerCenter,i=$.CompressionLevels[e].BytesPerScale,r=$.CompressionLevels[e].BytesPerRotation,a=$.CompressionLevels[e].BytesPerColor,o=Li(t),l=$.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*o;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:r,bytesPerColor:a,sphericalHarmonicsComponentsPerSplat:o,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:n+i+r+a+l}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*$.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){const r=e+i;this.globalSplatIndexToLocalSplatIndexMap[r]=i,this.globalSplatIndexToSectionMap[r]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){$.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=$.HeaderSizeBytes+$.SectionHeaderSizeBytes*e;$.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static generateFromUncompressedSplatArrays(e,t,n,i,r,a,o=[]){let l,c,h=0;for(let v=0;v<e.length;v++){const T=e[v];h=Math.max(T.sphericalHarmonicsDegree,h)}for(let v=0;v<e.length;v++){const T=e[v];for(let E=0;E<T.splats.length;E++){const _=T.splats[E];for(let I=Ce.OFFSET.FRC0;I<Ce.OFFSET.FRC23&&I<_.length;I++)(!l||_[I]<l)&&(l=_[I]),(!c||_[I]>c)&&(c=_[I])}}l=l||-1.5,c=c||zr;const{bytesPerSplat:u}=$.calculateComponentStorage(n,h),d=$.CompressionLevels[n].ScaleRange,p=[],A=[];let g=0;for(let v=0;v<e.length;v++){const T=e[v],E=new Ce(h);for(let K=0;K<T.splatCount;K++){const ie=T.splats[K];(ie[Ce.OFFSET.OPACITY]||0)>=t&&E.addSplat(ie)}const _=o[v]||{},I=(_.blockSizeFactor||1)*(r||$.BucketBlockSize),M=Math.ceil((_.bucketSizeFactor||1)*(a||$.BucketSize)),y=$.computeBucketsForUncompressedSplatArray(E,I,M),P=y.fullBuckets.length,F=y.partiallyFullBuckets.map(K=>K.splats.length),N=F.length,R=[...y.fullBuckets,...y.partiallyFullBuckets],L=E.splats.length*u,B=4*N,O=n>=1?R.length*$.BucketStorageSizeBytes+B:0,W=L+O,j=new ArrayBuffer(W),J=d/(.5*I),ee=new D;let Z=0;for(let K=0;K<R.length;K++){const ie=R[K];ee.fromArray(ie.center);for(let oe=0;oe<ie.splats.length;oe++){let de=ie.splats[oe];const Me=E.splats[de],be=O+Z*u;$.writeSplatDataToSectionBuffer(Me,j,be,n,h,ee,J,d,l,c),Z++}}if(g+=Z,n>=1){const K=new Uint32Array(j,0,4*F.length);for(let oe=0;oe<F.length;oe++)K[oe]=F[oe];const ie=new Float32Array(j,B,R.length*$.BucketStorageSizeFloats);for(let oe=0;oe<R.length;oe++){const de=R[oe],Me=3*oe;ie[Me]=de.center[0],ie[Me+1]=de.center[1],ie[Me+2]=de.center[2]}}p.push(j);const Q=new ArrayBuffer($.SectionHeaderSizeBytes);$.writeSectionHeaderToBuffer({maxSplatCount:Z,splatCount:Z,bucketSize:M,bucketCount:R.length,bucketBlockSize:I,compressionScaleRange:d,storageSizeBytes:W,fullBucketCount:P,partiallyFilledBucketCount:N,sphericalHarmonicsDegree:h},n,Q,0),A.push(Q)}let m=0;for(let v of p)m+=v.byteLength;const f=$.HeaderSizeBytes+$.SectionHeaderSizeBytes*p.length+m,x=new ArrayBuffer(f);$.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:p.length,sectionCount:p.length,maxSplatCount:g,splatCount:g,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:l,maxSphericalHarmonicsCoeff:c},x);let S=$.HeaderSizeBytes;for(let v of A)new Uint8Array(x,S,$.SectionHeaderSizeBytes).set(new Uint8Array(v)),S+=$.SectionHeaderSizeBytes;for(let v of p)new Uint8Array(x,S,v.byteLength).set(new Uint8Array(v)),S+=v.byteLength;return new $(x)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount;const r=t/2,a=new D,o=new D;for(let g=0;g<i;g++){const m=e.splats[g],f=[m[Ce.OFFSET.X],m[Ce.OFFSET.Y],m[Ce.OFFSET.Z]];(g===0||f[0]<a.x)&&(a.x=f[0]),(g===0||f[0]>o.x)&&(o.x=f[0]),(g===0||f[1]<a.y)&&(a.y=f[1]),(g===0||f[1]>o.y)&&(o.y=f[1]),(g===0||f[2]<a.z)&&(a.z=f[2]),(g===0||f[2]>o.z)&&(o.z=f[2])}const l=new D().copy(o).sub(a),c=Math.ceil(l.y/t),h=Math.ceil(l.z/t),u=new D,d=[],p={};for(let g=0;g<i;g++){const m=e.splats[g],f=[m[Ce.OFFSET.X],m[Ce.OFFSET.Y],m[Ce.OFFSET.Z]],x=Math.floor((f[0]-a.x)/t),S=Math.floor((f[1]-a.y)/t),v=Math.floor((f[2]-a.z)/t);u.x=x*t+a.x+r,u.y=S*t+a.y+r,u.z=v*t+a.z+r;const T=x*(c*h)+S*h+v;let E=p[T];E||(p[T]=E={splats:[],center:u.toArray()}),E.splats.push(g),E.splats.length>=n&&(d.push(E),p[T]=null)}const A=[];for(let g in p)if(p.hasOwnProperty(g)){const m=p[g];m&&A.push(m)}return{fullBuckets:d,partiallyFullBuckets:A}}};ae($,"CurrentMajorVersion",0),ae($,"CurrentMinorVersion",1),ae($,"CenterComponentCount",3),ae($,"ScaleComponentCount",3),ae($,"RotationComponentCount",4),ae($,"ColorComponentCount",4),ae($,"CovarianceComponentCount",6),ae($,"SplatScaleOffsetFloat",3),ae($,"SplatRotationOffsetFloat",6),ae($,"CompressionLevels",{0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}}),ae($,"CovarianceSizeFloats",6),ae($,"HeaderSizeBytes",4096),ae($,"SectionHeaderSizeBytes",1024),ae($,"BucketStorageSizeBytes",12),ae($,"BucketStorageSizeFloats",3),ae($,"BucketBlockSize",5),ae($,"BucketSize",256),ae($,"computeCovariance",function(){const e=new Ue,t=new Fe,n=new Fe,i=new Fe,r=new Fe,a=new Fe,o=new Fe;return function(l,c,h,u,d=0,p){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),i.copy(n).multiply(t),r.copy(i).transpose().premultiply(i),h&&(a.setFromMatrix4(h),o.copy(a).transpose(),r.multiply(o),r.premultiply(a)),p>=1?(u[d]=pt(r.elements[0]),u[d+1]=pt(r.elements[3]),u[d+2]=pt(r.elements[6]),u[d+3]=pt(r.elements[4]),u[d+4]=pt(r.elements[7]),u[d+5]=pt(r.elements[8])):(u[d]=r.elements[0],u[d+1]=r.elements[3],u[d+2]=r.elements[6],u[d+3]=r.elements[4],u[d+4]=r.elements[7],u[d+5]=r.elements[8])}}()),ae($,"dot3",(e,t,n,i,r)=>{r[0]=r[1]=r[2]=0;const a=i[0],o=i[1],l=i[2];$.addInto3(e[0]*a,e[1]*a,e[2]*a,r),$.addInto3(t[0]*o,t[1]*o,t[2]*o,r),$.addInto3(n[0]*l,n[1]*l,n[2]*l,r)}),ae($,"addInto3",(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n}),ae($,"dot5",(e,t,n,i,r,a,o)=>{o[0]=o[1]=o[2]=0;const l=a[0],c=a[1],h=a[2],u=a[3],d=a[4];$.addInto3(e[0]*l,e[1]*l,e[2]*l,o),$.addInto3(t[0]*c,t[1]*c,t[2]*c,o),$.addInto3(n[0]*h,n[1]*h,n[2]*h,o),$.addInto3(i[0]*u,i[1]*u,i[2]*u,o),$.addInto3(r[0]*d,r[1]*d,r[2]*d,o)}),ae($,"rotateSphericalHarmonics3",(e,t,n,i,r,a,o,l,c)=>{$.dot3(e,t,n,i,o),$.dot3(e,t,n,r,l),$.dot3(e,t,n,a,c)}),ae($,"rotateSphericalHarmonics5",(e,t,n,i,r,a,o,l,c,h,u,d,p,A,g,m,f,x)=>{const S=Math.sqrt(.25),v=Math.sqrt(3/4),T=Math.sqrt(1/3),E=Math.sqrt(4/3),_=Math.sqrt(1/12);c[0]=S*(l[2]*a[0]+l[0]*a[2]+(a[2]*l[0]+a[0]*l[2])),c[1]=l[1]*a[0]+a[1]*l[0],c[2]=v*(l[1]*a[1]+a[1]*l[1]),c[3]=l[1]*a[2]+a[1]*l[2],c[4]=S*(l[2]*a[2]-l[0]*a[0]+(a[2]*l[2]-a[0]*l[0])),$.dot5(e,t,n,i,r,c,A),h[0]=S*(o[2]*a[0]+o[0]*a[2]+(a[2]*o[0]+a[0]*o[2])),h[1]=o[1]*a[0]+a[1]*o[0],h[2]=v*(o[1]*a[1]+a[1]*o[1]),h[3]=o[1]*a[2]+a[1]*o[2],h[4]=S*(o[2]*a[2]-o[0]*a[0]+(a[2]*o[2]-a[0]*o[0])),$.dot5(e,t,n,i,r,h,g),u[0]=T*(o[2]*o[0]+o[0]*o[2])+-_*(l[2]*l[0]+l[0]*l[2]+(a[2]*a[0]+a[0]*a[2])),u[1]=E*o[1]*o[0]+-T*(l[1]*l[0]+a[1]*a[0]),u[2]=o[1]*o[1]+-S*(l[1]*l[1]+a[1]*a[1]),u[3]=E*o[1]*o[2]+-T*(l[1]*l[2]+a[1]*a[2]),u[4]=T*(o[2]*o[2]-o[0]*o[0])+-_*(l[2]*l[2]-l[0]*l[0]+(a[2]*a[2]-a[0]*a[0])),$.dot5(e,t,n,i,r,u,m),d[0]=S*(o[2]*l[0]+o[0]*l[2]+(l[2]*o[0]+l[0]*o[2])),d[1]=o[1]*l[0]+l[1]*o[0],d[2]=v*(o[1]*l[1]+l[1]*o[1]),d[3]=o[1]*l[2]+l[1]*o[2],d[4]=S*(o[2]*l[2]-o[0]*l[0]+(l[2]*o[2]-l[0]*o[0])),$.dot5(e,t,n,i,r,d,f),p[0]=S*(l[2]*l[0]+l[0]*l[2]-(a[2]*a[0]+a[0]*a[2])),p[1]=l[1]*l[0]-a[1]*a[0],p[2]=v*(l[1]*l[1]-a[1]*a[1]),p[3]=l[1]*l[2]-a[1]*a[2],p[4]=S*(l[2]*l[2]-l[0]*l[0]-(a[2]*a[2]-a[0]*a[0])),$.dot5(e,t,n,i,r,p,x)}),ae($,"writeSplatDataToSectionBuffer",function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),r=new ArrayBuffer(256),a=new ot,o=new D,l=new D,{X:c,Y:h,Z:u,SCALE0:d,SCALE1:p,SCALE2:A,ROTATION0:g,ROTATION1:m,ROTATION2:f,ROTATION3:x,FDC0:S,FDC1:v,FDC2:T,OPACITY:E,FRC0:_,FRC9:I}=Ce.OFFSET,M=(y,P,F)=>{const N=2*F+1;return y=Math.round(y*P)+F,Tt(y,0,N)};return function(y,P,F,N,R,L,B,O,W=-1.5,j=zr){const J=Li(R),ee=F,Z=ee+$.CompressionLevels[N].BytesPerCenter,Q=Z+$.CompressionLevels[N].BytesPerScale,K=Q+$.CompressionLevels[N].BytesPerRotation,ie=K+$.CompressionLevels[N].BytesPerColor;if(y[g]!==void 0?(a.set(y[g],y[m],y[f],y[x]),a.normalize()):a.set(1,0,0,0),y[d]!==void 0?o.set(y[d]||0,y[p]||0,y[A]||0):o.set(0,0,0),N===0){const de=new Float32Array(P,ee,$.CenterComponentCount),Me=new Float32Array(P,Q,$.RotationComponentCount),be=new Float32Array(P,Z,$.ScaleComponentCount);if(Me.set([a.x,a.y,a.z,a.w]),be.set([o.x,o.y,o.z]),de.set([y[c],y[h],y[u]]),R>0){const ge=new Float32Array(P,ie,J);if(R>=1){for(let ve=0;ve<9;ve++)ge[ve]=y[_+ve]||0;if(R>=2)for(let ve=0;ve<15;ve++)ge[ve+9]=y[I+ve]||0}}}else{const de=new Uint16Array(e,0,$.CenterComponentCount),Me=new Uint16Array(n,0,$.RotationComponentCount),be=new Uint16Array(t,0,$.ScaleComponentCount);if(Me.set([pt(a.x),pt(a.y),pt(a.z),pt(a.w)]),be.set([pt(o.x),pt(o.y),pt(o.z)]),l.set(y[c],y[h],y[u]).sub(L),l.x=M(l.x,B,O),l.y=M(l.y,B,O),l.z=M(l.z,B,O),de.set([l.x,l.y,l.z]),R>0){const ge=N===1?2:1,ve=new(N===1?Uint16Array:Uint8Array)(r,0,J);if(R>=1){for(let Ne=0;Ne<9;Ne++){const me=y[_+Ne]||0;ve[Ne]=N===1?pt(me):tr(me,W,j)}const z=9*ge;if(Ei(ve.buffer,0,P,ie,z),R>=2){for(let Ne=0;Ne<15;Ne++){const me=y[I+Ne]||0;ve[Ne+9]=N===1?pt(me):tr(me,W,j)}Ei(ve.buffer,z,P,ie+z,15*ge)}}}Ei(de.buffer,0,P,ee,6),Ei(be.buffer,0,P,Z,6),Ei(Me.buffer,0,P,Q,8)}const oe=new Uint8ClampedArray(i,0,4);oe.set([y[S]||0,y[v]||0,y[T]||0]),oe[3]=y[E]||0,Ei(oe.buffer,0,P,K,4)}}());let Te=$;const xl=new Uint8Array([112,108,121,10]),vl=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),_l="end_header",js=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),cn=(s,e)=>{const t=(1<<e)-1;return(s&t)/t},yl=(s,e)=>{s.x=cn(e>>>21,11),s.y=cn(e>>>11,10),s.z=cn(e,11)},Ci=(s,e,t)=>s*(1-t)+e*t,It=(s,e)=>{var t;return(t=s.properties.find(n=>n.name===e&&n.storage))==null?void 0:t.storage},Dt=class Dt{static decodeHeaderText(e){let t,n,i;const r=e.split(`
`).filter(l=>!l.startsWith("comment "));let a=0,o=!1;for(let l=1;l<r.length;++l){const c=r[l].split(" ");switch(c[0]){case"format":if(c[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:c[1],count:parseInt(c[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"&&(i=t);break;case"property":{if(!js.has(c[1]))throw new Error(`Unrecognized property data type '${c[1]}' in ply header`);const h=js.get(c[1]),u=h.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(a+=h.BYTES_PER_ELEMENT),t.properties.push({type:c[1],name:c[2],storage:null,byteSize:h.BYTES_PER_ELEMENT,storageSizeByes:u}),t.storageSizeBytes+=u;break}case _l:o=!0;break;default:throw new Error(`Unrecognized header value '${c[0]}' in ply header`)}if(o)break}return{chunkElement:n,vertexElement:i,bytesPerSplat:a,headerSizeBytes:e.indexOf(_l)+10+1,sphericalHarmonicsDegree:0}}static decodeHeader(e){let t,n=new Uint8Array(e);if(n.length>=xl.length&&!((l,c)=>{if(l.length<c.length)return!1;for(let h=0;h<c.length;++h)if(l[h]!==c[h])return!1;return!0})(n,xl))throw new Error("Invalid PLY header");if(t=((l,c)=>{const h=l.length-c.length;let u,d;for(u=0;u<=h;++u){for(d=0;d<c.length&&l[u+d]===c[d];++d);if(d===c.length)return u}return-1})(n,vl),t===-1)throw new Error("End of PLY header not found");const i=new TextDecoder("ascii").decode(n.slice(0,t)),{chunkElement:r,vertexElement:a,bytesPerSplat:o}=Dt.decodeHeaderText(i);return{headerSizeBytes:t+vl.length,bytesPerSplat:o,chunkElement:r,vertexElement:a}}static readElementData(e,t,n,i,r,a=null){let o=t instanceof DataView?t:new DataView(t);i=i||0,r=r||e.count-1;for(let l=i;l<=r;++l)for(let c=0;c<e.properties.length;++c){const h=e.properties[c],u=js.get(h.type),d=u.BYTES_PER_ELEMENT*e.count;if(h.storage&&!(h.storage.byteLength<d)||a&&!a(h.name)||(h.storage=new u(e.count)),h.storage)switch(h.type){case"char":h.storage[l]=o.getInt8(n);break;case"uchar":h.storage[l]=o.getUint8(n);break;case"short":h.storage[l]=o.getInt16(n,!0);break;case"ushort":h.storage[l]=o.getUint16(n,!0);break;case"int":h.storage[l]=o.getInt32(n,!0);break;case"uint":h.storage[l]=o.getUint32(n,!0);break;case"float":h.storage[l]=o.getFloat32(n,!0);break;case"double":h.storage[l]=o.getFloat64(n,!0)}n+=h.byteSize}return n}static readPly(e,t=null){const n=Dt.decodeHeader(e);let i=Dt.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return Dt.readElementData(n.vertexElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement}}static getElementStorageArrays(e,t){const n=It(e,"min_x"),i=It(e,"min_y"),r=It(e,"min_z"),a=It(e,"max_x"),o=It(e,"max_y"),l=It(e,"max_z"),c=It(e,"min_scale_x"),h=It(e,"min_scale_y"),u=It(e,"min_scale_z");return{positionExtremes:{minX:n,maxX:a,minY:i,maxY:o,minZ:r,maxZ:l},scaleExtremes:{minScaleX:c,maxScaleX:It(e,"max_scale_x"),minScaleY:h,maxScaleY:It(e,"max_scale_y"),minScaleZ:u,maxScaleZ:It(e,"max_scale_z")},position:It(t,"packed_position"),rotation:It(t,"packed_rotation"),scale:It(t,"packed_scale"),color:It(t,"packed_color")}}static parseToUncompressedSplatBufferSection(e,t,n,i,r,a,o,l,c,h=null){Dt.readElementData(t,a,o,n,i,h);const u=Te.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:d,scaleExtremes:p,position:A,rotation:g,scale:m,color:f}=Dt.getElementStorageArrays(e,t),x=Ce.createSplat();for(let S=n;S<=i;++S){Dt.decompressSplat(S,r,A,d,m,p,g,f,x);const v=S*u+c;Te.writeSplatDataToSectionBuffer(x,l,v,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,r,a,o,l,c=null){Dt.readElementData(t,a,o,n,i,c);const{positionExtremes:h,scaleExtremes:u,position:d,rotation:p,scale:A,color:g}=Dt.getElementStorageArrays(e,t);for(let m=n;m<=i;++m){const f=Ce.createSplat();Dt.decompressSplat(m,r,d,h,A,u,p,g,f),l.addSplat(f)}}static parseToUncompressedSplatArray(e){const{chunkElement:t,vertexElement:n}=Dt.readPly(e),i=new Ce,{positionExtremes:r,scaleExtremes:a,position:o,rotation:l,scale:c,color:h}=Dt.getElementStorageArrays(t,n);for(let u=0;u<n.count;++u){i.addDefaultSplat();const d=i.getSplat(i.splatCount-1);Dt.decompressSplat(u,0,o,r,c,a,l,h,d)}return new Ue().identity(),i}};ae(Dt,"decompressSplat",function(){const e=new D,t=new ot,n=new D,i=new ft,r=Ce.OFFSET;return function(a,o,l,c,h,u,d,p,A){A=A||Ce.createSplat();const g=Math.floor((o+a)/256);var m,f;return yl(e,l[a]),((x,S)=>{const v=1/(.5*Math.sqrt(2)),T=(cn(S>>>20,10)-.5)*v,E=(cn(S>>>10,10)-.5)*v,_=(cn(S,10)-.5)*v,I=Math.sqrt(1-(T*T+E*E+_*_));switch(S>>>30){case 0:x.set(I,T,E,_);break;case 1:x.set(T,I,E,_);break;case 2:x.set(T,E,I,_);break;case 3:x.set(T,E,_,I)}})(t,d[a]),yl(n,h[a]),m=i,f=p[a],m.x=cn(f>>>24,8),m.y=cn(f>>>16,8),m.z=cn(f>>>8,8),m.w=cn(f,8),A[r.X]=Ci(c.minX[g],c.maxX[g],e.x),A[r.Y]=Ci(c.minY[g],c.maxY[g],e.y),A[r.Z]=Ci(c.minZ[g],c.maxZ[g],e.z),A[r.ROTATION0]=t.x,A[r.ROTATION1]=t.y,A[r.ROTATION2]=t.z,A[r.ROTATION3]=t.w,A[r.SCALE0]=Math.exp(Ci(u.minScaleX[g],u.maxScaleX[g],n.x)),A[r.SCALE1]=Math.exp(Ci(u.minScaleY[g],u.maxScaleY[g],n.y)),A[r.SCALE2]=Math.exp(Ci(u.minScaleZ[g],u.maxScaleZ[g],n.z)),A[r.FDC0]=Tt(Math.floor(255*i.x),0,255),A[r.FDC1]=Tt(Math.floor(255*i.y),0,255),A[r.FDC2]=Tt(Math.floor(255*i.z),0,255),A[r.OPACITY]=Tt(Math.floor(255*i.w),0,255),A}}());let ei=Dt;const Ia=0,Cc=1,Da=2,[Tc,Pa,La,Ba,Fa,Ua,Na]=[0,1,2,3,4,5,6],Ml={double:Tc,int:Pa,uint:La,float:Ba,short:Fa,ushort:Ua,uchar:Na},fg={[Tc]:8,[Pa]:4,[La]:4,[Ba]:4,[Fa]:2,[Ua]:2,[Na]:1},Gt=class Gt{constructor(){}decodeSectionHeader(e,t,n=0){const i=[];let r=!1,a=-1,o=0,l=!1,c=null;const h=[],u=[],d=[],p={};for(let f=n;f<e.length;f++){const x=e[f].trim();if(x.startsWith("element")){if(r){a--;break}{r=!0,n=f,a=f;const S=x.split(" ");let v=0;for(let T of S){const E=T.trim();E.length>0&&(v++,v===2?c=E:v===3&&(o=parseInt(E)))}}}else if(x.startsWith("property")){const S=x.match(/(\w+)\s+(\w+)\s+(\w+)/);if(S){const v=S[2],T=S[3];d.push(T);const E=t[T];p[T]=v;const _=Ml[v];E!==void 0&&(h.push(E),u[E]=_)}}if(x===Gt.HeaderEndToken){l=!0;break}r&&(i.push(x),a++)}const A=[];let g=0;for(let f of d){const x=p[f];if(p.hasOwnProperty(f)){const S=t[f];S!==void 0&&(A[S]=g)}g+=fg[Ml[x]]}const m=this.decodeSphericalHarmonicsFromSectionHeader(d,t);return{headerLines:i,headerStartLine:n,headerEndLine:a,fieldTypes:u,fieldIds:h,fieldOffsets:A,bytesPerVertex:g,vertexCount:o,dataSizeBytes:g*o,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:m.degree,sphericalHarmonicsCoefficientsPerChannel:m.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:m.degree1Fields,sphericalHarmonicsDegree2Fields:m.degree2Fields}}decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let l of e)l.startsWith("f_rest")&&n++;i=n/3;let r=0;i>=3&&(r=1),i>=8&&(r=2);let a=[],o=[];for(let l=0;l<3;l++){if(r>=1)for(let c=0;c<3;c++)a.push(t["f_rest_"+(c+i*l)]);if(r>=2)for(let c=0;c<5;c++)o.push(t["f_rest_"+(c+i*l+3)])}return{degree:r,coefficientsPerChannel:i,degree1Fields:a,degree2Fields:o}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const i=n.split(" ");let r=0;for(let a of i){const o=a.trim();o.length>0&&(r++,r===2&&t.push(o))}}return t}static checkTextForEndHeader(e){return!!e.includes(Gt.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){const r=new Uint8Array(e,Math.max(0,t-n),n),a=i.decode(r);return Gt.checkTextForEndHeader(a)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,i="";const r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");const a=new Uint8Array(e,n,r);if(i+=t.decode(a),n+=r,Gt.checkBufferForEndHeader(e,n,200,t))break}return i}readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,i="";const r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");const a=new Uint8Array(e,n,r);if(i+=t.decode(a),n+=r,Gt.checkBufferForEndHeader(e,n,200,t))break}return i}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){const r=t[i].trim();if(n.push(r),r===Gt.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=Gt.convertHeaderTextToLines(e);let n=Ia;for(let i=0;i<t.length;i++){const r=t[i].trim();if(r.startsWith("element chunk")||r.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Da;else if(r.startsWith("element codebook_centers"))n=Cc;else if(r===Gt.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=Gt.extractHeaderFromBufferToText(e);return Gt.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,r,a,o=!0){const l=n*t.bytesPerVertex+i,c=t.fieldOffsets,h=t.fieldTypes;for(let u of r){const d=h[u];d===Ba?a[u]=e.getFloat32(l+c[u],!0):d===Fa?a[u]=e.getInt16(l+c[u],!0):d===Ua?a[u]=e.getUint16(l+c[u],!0):d===Pa?a[u]=e.getInt32(l+c[u],!0):d===La?a[u]=e.getUint32(l+c[u],!0):d===Na&&(a[u]=o?e.getUint8(l+c[u])/255:e.getUint8(l+c[u]))}}};ae(Gt,"HeaderEndToken","end_header");let Et=Gt;const bc=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],pg=bc.map((s,e)=>e),[El,mg,gg,Ag,Sg,xg,vg,_g,yg,Mg,Cl,Eg,Cg,Tl,bl,Tg,bg,wg]=pg,$n=class $n{constructor(){this.plyParserutils=new Et}decodeHeaderLines(e){let t=0;e.forEach(c=>{c.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let i=Array.from(Array(Math.max(n-1,0))).map((c,h)=>`f_rest_${h+1}`);const r=[...bc,...i],a=r.map((c,h)=>h),o=a.reduce((c,h)=>(c[r[h]]=h,c),{}),l=this.plyParserutils.decodeSectionHeader(e,o,0);return l.splatCount=l.vertexCount,l.bytesPerSplat=l.bytesPerVertex,l.fieldsToReadIndexes=a,l}decodeHeaderText(e){const t=Et.convertHeaderTextToLines(e),n=this.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(Et.HeaderEndToken)+Et.HeaderEndToken.length+1,n}decodeHeaderFromBuffer(e){const t=this.plyParserutils.readHeaderFromBuffer(e);return this.decodeHeaderText(t)}findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}parseToUncompressedSplatBufferSection(e,t,n,i,r,a,o,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=Te.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let h=t;h<=n;h++){const u=$n.parseToUncompressedSplat(i,h,e,r,l),d=h*c+o;Te.writeSplatDataToSectionBuffer(u,a,d,0,l)}}parseToUncompressedSplatArraySection(e,t,n,i,r,a,o=0){o=Math.min(o,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){const c=$n.parseToUncompressedSplat(i,l,e,r,o);a.addSplat(c)}}decodeSectionSplatData(e,t,n,i){i=Math.min(i,n.sphericalHarmonicsDegree);const r=new Ce(i);for(let a=0;a<t;a++){const o=$n.parseToUncompressedSplat(e,a,n,0,i);r.addSplat(o)}return r}static readSplat(e,t,n,i,r){return Et.readVertex(e,t,n,i,t.fieldsToReadIndexes,r,!0)}parseToUncompressedSplatArray(e,t=0){const n=this.decodeHeaderFromBuffer(e),i=n.splatCount,r=this.findSplatData(e,n);return this.decodeSectionSplatData(r,i,n,t)}};ae($n,"parseToUncompressedSplat",function(){let e=[];const t=new ot,n=Ce.OFFSET.X,i=Ce.OFFSET.Y,r=Ce.OFFSET.Z,a=Ce.OFFSET.SCALE0,o=Ce.OFFSET.SCALE1,l=Ce.OFFSET.SCALE2,c=Ce.OFFSET.ROTATION0,h=Ce.OFFSET.ROTATION1,u=Ce.OFFSET.ROTATION2,d=Ce.OFFSET.ROTATION3,p=Ce.OFFSET.FDC0,A=Ce.OFFSET.FDC1,g=Ce.OFFSET.FDC2,m=Ce.OFFSET.OPACITY,f=[];for(let x=0;x<45;x++)f[x]=Ce.OFFSET.FRC0+x;return function(x,S,v,T=0,E=0){E=Math.min(E,v.sphericalHarmonicsDegree),$n.readSplat(x,v,S,T,e);const _=Ce.createSplat(E);if(e[El]!==void 0?(_[a]=Math.exp(e[El]),_[o]=Math.exp(e[mg]),_[l]=Math.exp(e[gg])):(_[a]=.01,_[o]=.01,_[l]=.01),e[Cl]!==void 0){const I=.28209479177387814;_[p]=255*(.5+I*e[Cl]),_[A]=255*(.5+I*e[Eg]),_[g]=255*(.5+I*e[Cg])}else e[bl]!==void 0?(_[p]=255*e[bl],_[A]=255*e[Tg],_[g]=255*e[bg]):(_[p]=0,_[A]=0,_[g]=0);if(e[Tl]!==void 0&&(_[m]=1/(1+Math.exp(-e[Tl]))*255),_[p]=Tt(Math.floor(_[p]),0,255),_[A]=Tt(Math.floor(_[A]),0,255),_[g]=Tt(Math.floor(_[g]),0,255),_[m]=Tt(Math.floor(_[m]),0,255),E>=1&&e[wg]!==void 0){for(let I=0;I<9;I++)_[f[I]]=e[v.sphericalHarmonicsDegree1Fields[I]];if(E>=2)for(let I=0;I<15;I++)_[f[9+I]]=e[v.sphericalHarmonicsDegree2Fields[I]]}return t.set(e[Ag],e[Sg],e[xg],e[vg]),t.normalize(),_[c]=t.x,_[h]=t.y,_[u]=t.z,_[d]=t.w,_[n]=e[_g],_[i]=e[yg],_[r]=e[Mg],_}}());let is=$n;const wc=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],kr=wc.map((s,e)=>e),[Gr,Rg,Ig,wl,Vr,Dg,Js]=[0,1,4,16,17,18,19],Rc=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],ca=Rc.map((s,e)=>e),[Rl,Pg,Lg,Bg,Fg,Ug,Ng,Og,Hg,zg,ha,Ic,Dc,Il]=ca,Dl=ha,kg=Ic,Gg=Dc,Wr=s=>{const e=(31744&s)>>10,t=1023&s;return(s>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},ar=class ar{constructor(){this.plyParserutils=new Et}decodeSectionHeadersFromHeaderLines(e){const t=ca.reduce((h,u)=>(h[Rc[u]]=u,h),{}),n=kr.reduce((h,u)=>(h[wc[u]]=u,h),{}),i=Et.getHeaderSectionNames(e);let r;for(let h=0;h<i.length;h++)i[h]==="codebook_centers"&&(r=h);let a=0,o=!1;const l=[];let c=0;for(;!o;){let h;h=c===r?this.plyParserutils.decodeSectionHeader(e,n,a):this.plyParserutils.decodeSectionHeader(e,t,a),o=h.endOfHeader,a=h.headerEndLine+1,o||(h.splatCount=h.vertexCount,h.bytesPerSplat=h.bytesPerVertex),l.push(h),c++}return l}decodeSectionHeadersFromHeaderText(e){const t=Et.convertHeaderTextToLines(e);return this.decodeSectionHeadersFromHeaderLines(t)}getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}decodeHeaderFromHeaderText(e){const t=e.indexOf(Et.HeaderEndToken)+Et.HeaderEndToken.length+1,n=this.decodeSectionHeadersFromHeaderText(e);return{headerSizeBytes:t,sectionHeaders:n,splatCount:this.getSplatCountFromSectionHeaders(n)}}decodeHeaderFromBuffer(e){const t=this.plyParserutils.readHeaderFromBuffer(e);return this.decodeHeaderFromHeaderText(t)}findVertexData(e,t,n){let i=t.headerSizeBytes;for(let r=0;r<n&&r<t.sectionHeaders.length;r++)i+=t.sectionHeaders[r].dataSizeBytes;return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}decodeCodeBook(e,t){const n=[],i=[];for(let r=0;r<t.vertexCount;r++){Et.readVertex(e,t,r,0,kr,n);for(let a of kr){const o=kr[a];let l=i[o];l||(i[o]=l=[]),l.push(n[a])}}for(let r=0;r<i.length;r++){const a=i[r],o=.28209479177387814;for(let l=0;l<a.length;l++){const c=Wr(a[l]);a[l]=r===wl?Math.round(1/(1+Math.exp(-c))*255):r===Gr?Math.round(255*(.5+o*c)):r===Vr?Math.exp(c):c}}return i}decodeSectionSplatData(e,t,n,i,r){r=Math.min(r,n.sphericalHarmonicsDegree);const a=new Ce(r);for(let o=0;o<t;o++){const l=ar.parseToUncompressedSplat(e,o,n,i,0,r);a.addSplat(l)}return a}static readSplat(e,t,n,i,r){return Et.readVertex(e,t,n,i,ca,r,!1)}parseToUncompressedSplatArray(e,t=0){const n=[],i=this.decodeHeaderFromBuffer(e,t);let r;for(let o=0;o<i.sectionHeaders.length;o++){const l=i.sectionHeaders[o];if(l.sectionName==="codebook_centers"){const c=this.findVertexData(e,i,o);r=this.decodeCodeBook(c,l)}}for(let o=0;o<i.sectionHeaders.length;o++){const l=i.sectionHeaders[o];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,h=this.findVertexData(e,i,o),u=this.decodeSectionSplatData(h,c,l,r,t);n.push(u)}}const a=new Ce(t);for(let o of n)for(let l of o.splats)a.addSplat(l);return a}};ae(ar,"parseToUncompressedSplat",function(){let e=[];const t=new ot,n=Ce.OFFSET.X,i=Ce.OFFSET.Y,r=Ce.OFFSET.Z,a=Ce.OFFSET.SCALE0,o=Ce.OFFSET.SCALE1,l=Ce.OFFSET.SCALE2,c=Ce.OFFSET.ROTATION0,h=Ce.OFFSET.ROTATION1,u=Ce.OFFSET.ROTATION2,d=Ce.OFFSET.ROTATION3,p=Ce.OFFSET.FDC0,A=Ce.OFFSET.FDC1,g=Ce.OFFSET.FDC2,m=Ce.OFFSET.OPACITY,f=[];for(let x=0;x<45;x++)f[x]=Ce.OFFSET.FRC0+x;return function(x,S,v,T,E=0,_=0){_=Math.min(_,v.sphericalHarmonicsDegree),ar.readSplat(x,v,S,E,e);const I=Ce.createSplat(_);if(e[Rl]!==void 0?(I[a]=T[Vr][e[Rl]],I[o]=T[Vr][e[Pg]],I[l]=T[Vr][e[Lg]]):(I[a]=.01,I[o]=.01,I[l]=.01),e[ha]!==void 0?(I[p]=T[Gr][e[ha]],I[A]=T[Gr][e[Ic]],I[g]=T[Gr][e[Dc]]):e[Dl]!==void 0?(I[p]=255*e[Dl],I[A]=255*e[kg],I[g]=255*e[Gg]):(I[p]=0,I[A]=0,I[g]=0),e[Il]!==void 0&&(I[m]=T[wl][e[Il]]),I[p]=Tt(Math.floor(I[p]),0,255),I[A]=Tt(Math.floor(I[A]),0,255),I[g]=Tt(Math.floor(I[g]),0,255),I[m]=Tt(Math.floor(I[m]),0,255),_>=1&&v.sphericalHarmonicsDegree>=1){for(let N=0;N<9;N++){const R=T[Rg+N%3];I[f[N]]=R[e[v.sphericalHarmonicsDegree1Fields[N]]]}if(_>=2&&v.sphericalHarmonicsDegree>=2)for(let N=0;N<15;N++){const R=T[Ig+N%5];I[f[9+N]]=R[e[v.sphericalHarmonicsDegree2Fields[N]]]}}const M=T[Dg][e[Bg]],y=T[Js][e[Fg]],P=T[Js][e[Ug]],F=T[Js][e[Ng]];return t.set(M,y,P,F),t.normalize(),I[c]=t.x,I[h]=t.y,I[u]=t.z,I[d]=t.w,I[n]=Wr(e[Og]),I[i]=Wr(e[Hg]),I[r]=Wr(e[zg]),I}}());let ua=ar;class Vg{static parseToUncompressedSplatArray(e,t=0){const n=Et.determineHeaderFormatFromPlyBuffer(e);return n===Da?ei.parseToUncompressedSplatArray(e):n===Ia?new is().parseToUncompressedSplatArray(e,t):n===Cc?new ua().parseToUncompressedSplatArray(e,t):void 0}}class Oa{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){const a=this.partitionGenerator(e);t=a.groupingParameters,n=a.sectionCount,i=a.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;const r=[];for(let a=0;a<n;a++){const o=new Ce(e.sphericalHarmonicsDegree),l=i[a];for(let c=0;c<e.splatCount;c++)l(c)&&o.addSplat(e.splats[c]);r.push(o)}return{splatArrays:r,parameters:t}}static getStandardPartitioner(e=0,t=new D,n=Te.BucketBlockSize,i=Te.BucketSize){return new Oa(void 0,void 0,void 0,r=>{const a=Ce.OFFSET.X,o=Ce.OFFSET.Y,l=Ce.OFFSET.Z;e<=0&&(e=r.splatCount);const c=new D,h=.5;r.splats.forEach(g=>{var m;c.set(g[a],g[o],g[l]).sub(t),(m=c).x=Math.floor(m.x/h)*h,m.y=Math.floor(m.y/h)*h,m.z=Math.floor(m.z/h)*h,g.centerDist=c.lengthSq()}),r.splats.sort((g,m)=>g.centerDist>m.centerDist?1:-1);const u=[],d=[];e=Math.min(r.splatCount,e);const p=Math.ceil(r.splatCount/e);let A=0;for(let g=0;g<p;g++){let m=A;u.push(f=>f>=m&&f<m+e),d.push({blocksSize:n,bucketSize:i}),A+=e}return{sectionCount:u.length,sectionFilters:u,groupingParameters:d}})}}class ps{constructor(e,t,n,i,r,a,o){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=r?new D().copy(r):void 0,this.blockSize=a,this.bucketSize=o}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return Te.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new D,r=Te.BucketBlockSize,a=Te.BucketSize){const o=Oa.getStandardPartitioner(n,i,r,a);return new ps(o,e,t,n,i,r,a)}}const kn=0,Fn=1,Ha=2;class za extends Error{constructor(e){super(e)}}const Kt=0,rs=1,Bi=2;function Pl(s,e){let t=0;for(let i of s)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of s)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function Ll(s,e,t,n,i,r,a,o){return e?ps.getStandardGenerator(t,n,i,r,a,o).generateFromUncompressedSplatArray(s):Te.generateFromUncompressedSplatArrays([s],t,0,new D)}class ka{static loadFromURL(e,t,n,i,r,a,o=!0,l=0,c,h,u,d,p){let A=n?Kt:rs;o&&(A=rs);const g=Ye.ProgressiveLoadSectionSize,m=Te.HeaderSizeBytes+Te.SectionHeaderSizeBytes;let f,x,S,v,T=0,E=0,_=!1,I=!1,M=!1;const y=ba();let P,F=0,N=0,R=0,L="",B=null,O=[];const W=new TextDecoder,j=new is;return t&&t(0,"0%",kn),Ta(e,(J,ee,Z)=>{const Q=J>=100;if(Z&&(O.push({data:Z,sizeBytes:Z.byteLength,startBytes:R,endBytes:R+Z.byteLength}),R+=Z.byteLength),A===Bi)Q&&y.resolve(O);else{if(_){if(M&&!I){const K=B.headerSizeBytes+B.chunkElement.storageSizeBytes;v=Pl(O,v),v.byteLength>=K&&(ei.readElementData(B.chunkElement,v,B.headerSizeBytes),F=K,N=K,I=!0)}}else if(L+=W.decode(Z),Et.checkTextForEndHeader(L)){const K=Et.determineHeaderFormatFromHeaderText(L);if(K===Ia)B=j.decodeHeaderText(L),T=B.splatCount,I=!0,M=!1;else{if(K!==Da){if(n)throw new za("PlyLoader.loadFromURL() -> Selected Ply format cannot be directly loaded.");return void(A=Bi)}B=ei.decodeHeaderText(L),T=B.vertexElement.count,M=!0}l=Math.min(l,B.sphericalHarmonicsDegree);const ie=Te.CompressionLevels[0].SphericalHarmonicsDegrees[l],oe=m+ie.BytesPerSplat*T;A===Kt?(x=new ArrayBuffer(oe),Te.writeHeaderToBuffer({versionMajor:Te.CurrentMajorVersion,versionMinor:Te.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:T,splatCount:E,compressionLevel:0,sceneCenter:new D},x)):P=new Ce(l),F=B.headerSizeBytes,N=B.headerSizeBytes,_=!0}if(_&&I){if(O.length>0&&(f=Pl(O,f),R-F>g||Q)){const K=R-N,ie=Math.floor(K/B.bytesPerSplat),oe=ie*B.bytesPerSplat,de=K-oe,Me=E+ie,be=N-O[0].startBytes,ge=new DataView(f,be,oe),ve=Te.CompressionLevels[0].SphericalHarmonicsDegrees[l],z=E*ve.BytesPerSplat+m;if(A===Kt?M?ei.parseToUncompressedSplatBufferSection(B.chunkElement,B.vertexElement,0,ie-1,E,ge,0,x,z):j.parseToUncompressedSplatBufferSection(B,0,ie-1,ge,0,x,z,l):M?ei.parseToUncompressedSplatArraySection(B.chunkElement,B.vertexElement,0,ie-1,E,ge,0,P):j.parseToUncompressedSplatArraySection(B,0,ie-1,ge,0,P,l),E=Me,A===Kt&&(S||(Te.writeSectionHeaderToBuffer({maxSplatCount:T,splatCount:E,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,x,Te.HeaderSizeBytes),S=new Te(x,!1)),S.updateLoadedCounts(1,E),i&&i(S,Q)),F+=g,N+=oe,de===0)O=[];else{let Ne=[],me=0;for(let k=O.length-1;k>=0;k--){const G=O[k];if(me+=G.sizeBytes,Ne.unshift(G),me>=de)break}O=Ne}}Q&&(A===Kt?y.resolve(S):y.resolve(P))}}t&&t(J,ee,kn)},!1,c).then(()=>(t&&t(0,"0%",Fn),y.promise.then(J=>{if(t&&t(100,"100%",Ha),A===Bi){const ee=O.map(Z=>Z.data);return new Blob(ee).arrayBuffer().then(Z=>ka.loadFromFileData(Z,r,a,o,l,h,u,d,p))}return A===Kt?J:on(()=>Ll(J,o,r,a,h,u,d,p))})))}static loadFromFileData(e,t,n,i,r=0,a,o,l,c){return on(()=>Vg.parseToUncompressedSplatArray(e,r)).then(h=>Ll(h,i,t,n,a,o,l,c))}}const Ze=class Ze{static parseToUncompressedSplatBufferSection(e,t,n,i,r,a){const o=Te.CompressionLevels[0].BytesPerCenter,l=Te.CompressionLevels[0].BytesPerScale,c=Te.CompressionLevels[0].BytesPerRotation,h=Te.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let u=e;u<=t;u++){const d=u*Ze.RowSizeBytes+i,p=new Float32Array(n,d,3),A=new Float32Array(n,d+Ze.CenterSizeBytes,3),g=new Uint8Array(n,d+Ze.CenterSizeBytes+Ze.ScaleSizeBytes,4),m=new Uint8Array(n,d+Ze.CenterSizeBytes+Ze.ScaleSizeBytes+Ze.RotationSizeBytes,4),f=new ot((m[1]-128)/128,(m[2]-128)/128,(m[3]-128)/128,(m[0]-128)/128);f.normalize();const x=u*h+a,S=new Float32Array(r,x,3),v=new Float32Array(r,x+o,3),T=new Float32Array(r,x+o+l,4),E=new Uint8Array(r,x+o+l+c,4);S[0]=p[0],S[1]=p[1],S[2]=p[2],v[0]=A[0],v[1]=A[1],v[2]=A[2],T[0]=f.w,T[1]=f.x,T[2]=f.y,T[3]=f.z,E[0]=g[0],E[1]=g[1],E[2]=g[2],E[3]=g[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,r){for(let a=e;a<=t;a++){const o=a*Ze.RowSizeBytes+i,l=new Float32Array(n,o,3),c=new Float32Array(n,o+Ze.CenterSizeBytes,3),h=new Uint8Array(n,o+Ze.CenterSizeBytes+Ze.ScaleSizeBytes,4),u=new Uint8Array(n,o+Ze.CenterSizeBytes+Ze.ScaleSizeBytes+Ze.RotationSizeBytes,4),d=new ot((u[1]-128)/128,(u[2]-128)/128,(u[3]-128)/128,(u[0]-128)/128);d.normalize(),r.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],d.w,d.x,d.y,d.z,h[0],h[1],h[2],h[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/Ze.RowSizeBytes,n=new Ce;for(let i=0;i<t;i++){const r=i*Ze.RowSizeBytes,a=new Float32Array(e,r,3),o=new Float32Array(e,r+Ze.CenterSizeBytes,3),l=new Uint8Array(e,r+Ze.CenterSizeBytes+Ze.ScaleSizeBytes,4),c=new Uint8Array(e,r+Ze.CenterSizeBytes+Ze.ScaleSizeBytes+Ze.ColorSizeBytes,4),h=new ot((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);h.normalize(),n.addSplatFromComonents(a[0],a[1],a[2],o[0],o[1],o[2],h.w,h.x,h.y,h.z,l[0],l[1],l[2],l[3])}return n}};ae(Ze,"RowSizeBytes",32),ae(Ze,"CenterSizeBytes",12),ae(Ze,"ScaleSizeBytes",12),ae(Ze,"RotationSizeBytes",4),ae(Ze,"ColorSizeBytes",4);let Jn=Ze;function Bl(s,e,t,n,i,r,a,o){return e?ps.getStandardGenerator(t,n,i,r,a,o).generateFromUncompressedSplatArray(s):Te.generateFromUncompressedSplatArrays([s],t,0,new D)}class Ga{static loadFromURL(e,t,n,i,r,a,o=!0,l,c,h,u,d){let p=n?Kt:rs;o&&(p=rs);const A=Te.HeaderSizeBytes+Te.SectionHeaderSizeBytes,g=Ye.ProgressiveLoadSectionSize;let m,f,x,S,v=0,T=0;const E=ba();let _=0,I=0,M=[];return t&&t(0,"0%",kn),Ta(e,(y,P,F,N)=>{const R=y>=100;if(F&&M.push(F),p!==Bi)if(N){if(!m){v=N/Jn.RowSizeBytes,m=new ArrayBuffer(N);const L=Te.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;p===Kt?(f=new ArrayBuffer(A+L*v),Te.writeHeaderToBuffer({versionMajor:Te.CurrentMajorVersion,versionMinor:Te.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:v,splatCount:T,compressionLevel:0,sceneCenter:new D},f)):S=new Ce(0)}if(F){new Uint8Array(m,I,F.byteLength).set(new Uint8Array(F)),I+=F.byteLength;const L=I-_;if(L>g||R){const B=(R?L:g)/Jn.RowSizeBytes,O=T+B;p===Kt?Jn.parseToUncompressedSplatBufferSection(T,O-1,m,0,f,A):Jn.parseToUncompressedSplatArraySection(T,O-1,m,0,S),T=O,p===Kt&&(x||(Te.writeSectionHeaderToBuffer({maxSplatCount:v,splatCount:T,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,f,Te.HeaderSizeBytes),x=new Te(f,!1)),x.updateLoadedCounts(1,T),i&&i(x,R)),_+=g}}R&&(p===Kt?E.resolve(x):E.resolve(S)),t&&t(y,P,kn)}else{if(n)throw new za("Cannon directly load .splat because no file size info is available.");p=Bi}else R&&E.resolve(M)},!1,l).then(()=>(t&&t(0,"0%",Fn),E.promise.then(y=>(t&&t(100,"100%",Ha),p===Bi?new Blob(M).arrayBuffer().then(P=>Ga.loadFromFileData(P,r,a,o,c,h,u,d)):p===Kt?y:on(()=>Bl(y,o,r,a,c,h,u,d))))))}static loadFromFileData(e,t,n,i,r,a,o,l){return on(()=>Bl(Jn.parseStandardSplatToUncompressedSplatArray(e),i,t,n,r,a,o,l))}}const Di=class Di{static checkVersion(e){const t=Te.CurrentMajorVersion,n=Te.CurrentMinorVersion,i=Te.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i,r){let a,o,l,c,h,u=!1,d=!1,p=[],A=!1,g=!1,m=0,f=0,x=0,S=!1,v=!1,T=!1,E=[];const _=ba();let I=0;const M=()=>{const P=()=>{g=!0,new Blob(E).arrayBuffer().then(F=>{g=!1,A=!0,h=new ArrayBuffer(c.maxSectionCount*Te.SectionHeaderSizeBytes),new Uint8Array(h).set(new Uint8Array(F,Te.HeaderSizeBytes,c.maxSectionCount*Te.SectionHeaderSizeBytes)),p=Te.parseSectionHeaders(c,h,0,!1);let N=0;for(let L=0;L<c.maxSectionCount;L++)N+=p[L].storageSizeBytes;const R=Te.HeaderSizeBytes+c.maxSectionCount*Te.SectionHeaderSizeBytes+N;if(!a){a=new ArrayBuffer(R);let L=0;for(let B=0;B<E.length;B++){const O=E[B];new Uint8Array(a,L,O.byteLength).set(new Uint8Array(O)),L+=O.byteLength}}x=Te.HeaderSizeBytes+Te.SectionHeaderSizeBytes*c.maxSectionCount;for(let L=0;L<=p.length&&L<c.maxSectionCount;L++)x+=p[L].storageSizeBytes;I===0&&(I++,window.setTimeout(()=>{I--,y()},1))})};!g&&!A&&u&&m>=Te.HeaderSizeBytes+Te.SectionHeaderSizeBytes*c.maxSectionCount&&P()},y=()=>{T||(T=!0,window.setTimeout(()=>{if(T=!1,A){if(v)return;if(S=m>=x,m-f>Ye.ProgressiveLoadSectionSize||S){f+=Ye.ProgressiveLoadSectionSize,v=f>=x,o||(o=new Te(a,!1));const P=Te.HeaderSizeBytes+Te.SectionHeaderSizeBytes*c.maxSectionCount;let F=0,N=0,R=0;for(let O=0;O<c.maxSectionCount;O++){const W=p[O],j=P+(F+4*W.partiallyFilledBucketCount+W.bucketStorageSizeBytes*W.bucketCount);if(!(f>=j))break;{N++;const J=f-j,ee=Te.CompressionLevels[c.compressionLevel].SphericalHarmonicsDegrees[W.sphericalHarmonicsDegree].BytesPerSplat;let Z=Math.floor(J/ee);Z=Math.min(Z,W.maxSplatCount),R+=Z,o.updateLoadedCounts(N,R),o.updateSectionLoadedCounts(O,Z)}F+=W.storageSizeBytes}i(o,v);const L=f/x*100,B=L.toFixed(2)+"%";t&&t(L,B,kn),v?_.resolve(o):y()}}},Ye.ProgressiveLoadSectionDelayDuration))};return Ta(e,(P,F,N)=>{N&&(E.push(N),a&&new Uint8Array(a,m,N.byteLength).set(new Uint8Array(N)),m+=N.byteLength),n?(!u&&!d&&m>=Te.HeaderSizeBytes&&(d=!0,new Blob(E).arrayBuffer().then(R=>{l=new ArrayBuffer(Te.HeaderSizeBytes),new Uint8Array(l).set(new Uint8Array(R,0,Te.HeaderSizeBytes)),Di.checkVersion(l),d=!1,u=!0,c=Te.parseHeader(l),window.setTimeout(()=>{M()},1)})),M(),y()):t&&t(P,F,kn)},!n,r).then(P=>(t&&t(0,"0%",Fn),(n?_.promise:Di.loadFromFileData(P)).then(F=>(t&&t(100,"100%",Ha),F))))}static loadFromFileData(e){return on(()=>(Di.checkVersion(e),new Te(e)))}};ae(Di,"downloadFile",function(){let e;return function(t,n){const i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}}());let da=Di;const _n={Splat:0,KSplat:1,Ply:2},Fl=s=>s.endsWith(".ply")?_n.Ply:s.endsWith(".splat")?_n.Splat:s.endsWith(".ksplat")?_n.KSplat:null,Ul={type:"change"},Zs={type:"start"},Nl={type:"end"},Xr=new oc,Ol=new Ln,Wg=Math.cos(70*nc.DEG2RAD);class Qr extends ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",ve),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ve),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(Ul),n.update(),r=i.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){h.set(0,0,0)},this.update=function(){const k=new D,G=new ot().setFromUnitVectors(e.up,new D(0,1,0)),he=G.clone().invert(),_e=new D,w=new ot,C=new D,V=2*Math.PI;return function(){G.setFromUnitVectors(e.up,new D(0,1,0)),he.copy(G).invert();const se=n.object.position;k.copy(se).sub(n.target),k.applyQuaternion(G),o.setFromVector3(k),n.autoRotate&&r===i.NONE&&y(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let te=n.minAzimuthAngle,ne=n.maxAzimuthAngle;isFinite(te)&&isFinite(ne)&&(te<-Math.PI?te+=V:te>Math.PI&&(te-=V),ne<-Math.PI?ne+=V:ne>Math.PI&&(ne-=V),o.theta=te<=ne?Math.max(te,Math.min(ne,o.theta)):o.theta>(te+ne)/2?Math.max(te,o.theta):Math.min(ne,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&E||n.object.isOrthographicCamera?o.radius=W(o.radius):o.radius=W(o.radius*c),k.setFromSpherical(o),k.applyQuaternion(he),se.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ee=!1;if(n.zoomToCursor&&E){let ue=null;if(n.object.isPerspectiveCamera){const Ae=k.length();ue=W(Ae*c);const Re=Ae-ue;n.object.position.addScaledVector(v,Re),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ae=new D(T.x,T.y,0);Ae.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ee=!0;const Re=new D(T.x,T.y,0);Re.unproject(n.object),n.object.position.sub(Re).add(Ae),n.object.updateMatrixWorld(),ue=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ue!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ue).add(n.object.position):(Xr.origin.copy(n.object.position),Xr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Xr.direction))<Wg?e.lookAt(n.target):(Ol.setFromNormalAndCoplanarPoint(n.object.up,n.target),Xr.intersectPlane(Ol,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ee=!0);return c=1,E=!1,!!(Ee||_e.distanceToSquared(n.object.position)>a||8*(1-w.dot(n.object.quaternion))>a||C.distanceToSquared(n.target)>0)&&(n.dispatchEvent(Ul),_e.copy(n.object.position),w.copy(n.object.quaternion),C.copy(n.target),Ee=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",z),n.domElement.removeEventListener("pointerdown",de),n.domElement.removeEventListener("pointercancel",be),n.domElement.removeEventListener("wheel",ge),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",be),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ve),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Al,l=new Al;let c=1;const h=new D,u=new xe,d=new xe,p=new xe,A=new xe,g=new xe,m=new xe,f=new xe,x=new xe,S=new xe,v=new D,T=new xe;let E=!1;const _=[],I={};function M(){return Math.pow(.95,n.zoomSpeed)}function y(k){l.theta-=k}function P(k){l.phi-=k}const F=function(){const k=new D;return function(G,he){k.setFromMatrixColumn(he,0),k.multiplyScalar(-G),h.add(k)}}(),N=function(){const k=new D;return function(G,he){n.screenSpacePanning===!0?k.setFromMatrixColumn(he,1):(k.setFromMatrixColumn(he,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(G),h.add(k)}}(),R=function(){const k=new D;return function(G,he){const _e=n.domElement;if(n.object.isPerspectiveCamera){const w=n.object.position;k.copy(w).sub(n.target);let C=k.length();C*=Math.tan(n.object.fov/2*Math.PI/180),F(2*G*C/_e.clientHeight,n.object.matrix),N(2*he*C/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(G*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),N(he*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(k){if(!n.zoomToCursor)return;E=!0;const G=n.domElement.getBoundingClientRect(),he=k.clientX-G.left,_e=k.clientY-G.top,w=G.width,C=G.height;T.x=he/w*2-1,T.y=-_e/C*2+1,v.set(T.x,T.y,1).unproject(e).sub(e.position).normalize()}function W(k){return Math.max(n.minDistance,Math.min(n.maxDistance,k))}function j(k){u.set(k.clientX,k.clientY)}function J(k){A.set(k.clientX,k.clientY)}function ee(){if(_.length===1)u.set(_[0].pageX,_[0].pageY);else{const k=.5*(_[0].pageX+_[1].pageX),G=.5*(_[0].pageY+_[1].pageY);u.set(k,G)}}function Z(){if(_.length===1)A.set(_[0].pageX,_[0].pageY);else{const k=.5*(_[0].pageX+_[1].pageX),G=.5*(_[0].pageY+_[1].pageY);A.set(k,G)}}function Q(){const k=_[0].pageX-_[1].pageX,G=_[0].pageY-_[1].pageY,he=Math.sqrt(k*k+G*G);f.set(0,he)}function K(k){if(_.length==1)d.set(k.pageX,k.pageY);else{const he=me(k),_e=.5*(k.pageX+he.x),w=.5*(k.pageY+he.y);d.set(_e,w)}p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const G=n.domElement;y(2*Math.PI*p.x/G.clientHeight),P(2*Math.PI*p.y/G.clientHeight),u.copy(d)}function ie(k){if(_.length===1)g.set(k.pageX,k.pageY);else{const G=me(k),he=.5*(k.pageX+G.x),_e=.5*(k.pageY+G.y);g.set(he,_e)}m.subVectors(g,A).multiplyScalar(n.panSpeed),R(m.x,m.y),A.copy(g)}function oe(k){const G=me(k),he=k.pageX-G.x,_e=k.pageY-G.y,w=Math.sqrt(he*he+_e*_e);x.set(0,w),S.set(0,Math.pow(x.y/f.y,n.zoomSpeed)),L(S.y),f.copy(x)}function de(k){n.enabled!==!1&&(_.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",Me),n.domElement.addEventListener("pointerup",be)),function(G){_.push(G)}(k),k.pointerType==="touch"?function(G){switch(Ne(G),_.length){case 1:switch(n.touches.ONE){case ai.ROTATE:if(n.enableRotate===!1)return;ee(),r=i.TOUCH_ROTATE;break;case ai.PAN:if(n.enablePan===!1)return;Z(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ai.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;n.enableZoom&&Q(),n.enablePan&&Z(),r=i.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;n.enableZoom&&Q(),n.enableRotate&&ee(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Zs)}(k):function(G){let he;switch(G.button){case 0:he=n.mouseButtons.LEFT;break;case 1:he=n.mouseButtons.MIDDLE;break;case 2:he=n.mouseButtons.RIGHT;break;default:he=-1}switch(he){case si.DOLLY:if(n.enableZoom===!1)return;(function(_e){O(_e),f.set(_e.clientX,_e.clientY)})(G),r=i.DOLLY;break;case si.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enablePan===!1)return;J(G),r=i.PAN}else{if(n.enableRotate===!1)return;j(G),r=i.ROTATE}break;case si.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enableRotate===!1)return;j(G),r=i.ROTATE}else{if(n.enablePan===!1)return;J(G),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Zs)}(k))}function Me(k){n.enabled!==!1&&(k.pointerType==="touch"?function(G){switch(Ne(G),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;K(G),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ie(G),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;(function(he){n.enableZoom&&oe(he),n.enablePan&&ie(he)})(G),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;(function(he){n.enableZoom&&oe(he),n.enableRotate&&K(he)})(G),n.update();break;default:r=i.NONE}}(k):function(G){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;(function(he){d.set(he.clientX,he.clientY),p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const _e=n.domElement;y(2*Math.PI*p.x/_e.clientHeight),P(2*Math.PI*p.y/_e.clientHeight),u.copy(d),n.update()})(G);break;case i.DOLLY:if(n.enableZoom===!1)return;(function(he){x.set(he.clientX,he.clientY),S.subVectors(x,f),S.y>0?L(M()):S.y<0&&B(M()),f.copy(x),n.update()})(G);break;case i.PAN:if(n.enablePan===!1)return;(function(he){g.set(he.clientX,he.clientY),m.subVectors(g,A).multiplyScalar(n.panSpeed),R(m.x,m.y),A.copy(g),n.update()})(G)}}(k))}function be(k){(function(G){delete I[G.pointerId];for(let he=0;he<_.length;he++)if(_[he].pointerId==G.pointerId)return void _.splice(he,1)})(k),_.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",be)),n.dispatchEvent(Nl),r=i.NONE}function ge(k){n.enabled!==!1&&n.enableZoom!==!1&&r===i.NONE&&(k.preventDefault(),n.dispatchEvent(Zs),function(G){O(G),G.deltaY<0?B(M()):G.deltaY>0&&L(M()),n.update()}(k),n.dispatchEvent(Nl))}function ve(k){n.enabled!==!1&&n.enablePan!==!1&&function(G){let he=!1;switch(G.code){case n.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,n.keyPanSpeed),he=!0;break;case n.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,-n.keyPanSpeed),he=!0;break;case n.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(n.keyPanSpeed,0),he=!0;break;case n.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(-n.keyPanSpeed,0),he=!0}he&&(G.preventDefault(),n.update())}(k)}function z(k){n.enabled!==!1&&k.preventDefault()}function Ne(k){let G=I[k.pointerId];G===void 0&&(G=new xe,I[k.pointerId]=G),G.set(k.pageX,k.pageY)}function me(k){const G=k.pointerId===_[0].pointerId?_[1]:_[0];return I[G.pointerId]}n.domElement.addEventListener("contextmenu",z),n.domElement.addEventListener("pointerdown",de),n.domElement.addEventListener("pointercancel",be),n.domElement.addEventListener("wheel",ge,{passive:!1}),this.update()}}const os=class os{constructor(e,t){this.taskIDGen=0,this.elementID=os.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(i,r,a,o,l)=>{a?i.style.display=r?o:"none":this.fadeTransitions[l]=((c,h,u,d,p)=>{const A=performance.now();let g=c.style.display==="none"?0:parseFloat(c.style.opacity);isNaN(g)&&(g=1);const m=window.setInterval(()=>{const f=performance.now()-A;let x,S=Math.min(f/d,1);S>.999&&(S=1),h?(x=(1-S)*g,x<1e-4&&(x=0)):x=(1-g)*S+g,x>0?(c.style.display=u,c.style.opacity=x):c.style.display="none",S>=1&&(p(),window.clearInterval(m))},16);return m})(i,!r,o,500,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}};ae(os,"elementIDGen",0);let fa=os;class Xg{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class Qg{constructor(e){ae(this,"update",function(e,t,n,i,r,a,o,l,c,h,u,d,p,A){const g=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==g&&(this.infoCells.cameraPosition.innerHTML=g),n){const f=n,x=`${f.x.toFixed(5)}, ${f.y.toFixed(5)}, ${f.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==x&&(this.infoCells.cameraLookAt.innerHTML=x)}const m=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==m&&(this.infoCells.cameraUp.innerHTML=m),this.infoCells.orthographicCamera.innerHTML=r?"Orthographic":"Perspective",a){const f=a,x=`${f.x.toFixed(5)}, ${f.y.toFixed(5)}, ${f.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=x}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=o,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${h.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${u.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${d.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${p.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${A}`});this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const i=document.createElement("div");i.style.display="table";for(let r of t){const a=document.createElement("div");a.style.display="table-row",a.className="info-panel-row";const o=document.createElement("div");o.style.display="table-cell",o.innerHTML=`${r[0]}: `,o.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[r[1]]=c,a.appendChild(o),a.appendChild(l),a.appendChild(c),i.appendChild(a)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const Hl=new D;class qg extends mt{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=.1,r=16776960,a=.2*n,o=.2*a){super(),this.type="ArrowHelper";const l=new fr(i,i,n,32);l.translate(0,n/2,0);const c=new fr(0,o,a,32);c.translate(0,n,0),this.position.copy(t),this.line=new dt(l,new ii({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new dt(c,new ii({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Hl.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Hl,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class nr{constructor(e){ae(this,"updateFocusMarker",function(){const e=new D,t=new Ue,n=new D;return function(i,r,a){t.copy(r.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(r.matrixWorld),n.copy(r.position).sub(i);const o=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(o,o,o),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(a),this.focusMarker.material.uniformsNeedUpdate=!0}}());ae(this,"positionAndOrientControlPlane",function(){const e=new ot,t=new D(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}}());this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new zn(e,t,{format:Ut,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Ea(e,t),this.splatRenderTarget.depthTexture.format=Hn,this.splatRenderTarget.depthTexture.type=Vt}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e=new $t({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:{sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},depthWrite:!1,depthTest:!1,transparent:!0,blending:Xl,blendSrc:or,blendSrcAlpha:or,blendDst:lr,blendDstAlpha:lr});e.extensions.fragDepth=!0,this.renderTargetCopyQuad=new dt(new dr(2,2),e),this.renderTargetCopyCamera=new ya(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(wi(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new Ca(.5,1.5,32),t=new ii({color:16777215}),n=new dt(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const i=new dt(e,t);i.position.set(0,-1,0);const r=new dt(e,t);r.rotation.set(0,0,Math.PI/2),r.position.set(1,0,0);const a=new dt(e,t);a.rotation.set(0,0,-Math.PI/2),a.position.set(-1,0,0),this.meshCursor=new mt,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(r),this.meshCursor.add(a),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(wi(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new ns(.5,32,32),t=nr.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new dt(e,t)}}destroyFocusMarker(){this.focusMarker&&(wi(this.focusMarker),this.focusMarker=null)}setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new dr(1,1);e.rotateX(-Math.PI/2);const t=new ii({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=jt;const n=new dt(e,t),i=new D(0,1,0);i.normalize();const r=new D(0,0,0),a=new qg(i,r,.5,.01,56576,.1,.03);this.controlPlane=new mt,this.controlPlane.add(n),this.controlPlane.add(a)}}destroyControlPlane(){this.controlPlane&&(wi(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(wi(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new ns(1,32,32),n=new mt,i=(r,a)=>{let o=new dt(t,nr.buildDebugMaterial(r));o.renderOrder=e,n.add(o),o.position.fromArray(a)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new Wi(3,3,3),n=new mt,i=a=>{let o=new dt(t,nr.buildDebugMaterial(12303291));o.renderOrder=e,n.add(o),o.position.fromArray(a)};let r=10;return i([-10,0,-10]),i([-10,0,r]),i([r,0,-10]),i([r,0,r]),n}static buildDebugMaterial(e){const t={color:{type:"v3",value:new Ke(e)}},n=new $t({uniforms:t,vertexShader:`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,fragmentShader:`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,transparent:!1,depthTest:!0,depthWrite:!0,side:fn});return n.extensions.fragDepth=!0,n}static buildFocusMarkerMaterial(e){const t={color:{type:"v3",value:new Ke(e)},realFocusPosition:{type:"v3",value:new D},viewport:{type:"v2",value:new xe},opacity:{value:0}};return new $t({uniforms:t,vertexShader:`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,fragmentShader:`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,transparent:!0,depthTest:!1,depthWrite:!1,side:fn})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const Yg=new D(1,0,0),Kg=new D(0,1,0),jg=new D(0,0,1);class $s{constructor(e=new D,t=new D){ae(this,"intersectBox",function(){const e=new D,t=[],n=[],i=[];return function(r,a){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(r,this.origin,1e-4))return a&&(a.origin.copy(this.origin),a.normal.set(0,0,0),a.distance=-1),!0;for(let o=0;o<3;o++){if(i[o]==0)continue;const l=o==0?Yg:o==1?Kg:jg,c=i[o]<0?r.max:r.min;let h=-Math.sign(i[o]);t[0]=o==0?c.x:o==1?c.y:c.z;let u=t[0]-n[o];if(u*h<0){const d=(o+1)%3,p=(o+2)%3;if(t[2]=i[d]/i[o]*u+n[d],t[1]=i[p]/i[o]*u+n[p],e.set(t[o],t[p],t[d]),this.boxContainsPoint(r,e,1e-4))return a&&(a.origin.copy(e),a.normal.copy(l).multiplyScalar(h),a.distance=e.sub(this.origin).length()),!0}}return!1}}());ae(this,"intersectSphere",function(){const e=new D;return function(t,n,i){e.copy(t).sub(this.origin);const r=e.dot(this.direction),a=r*r,o=e.dot(e)-a,l=n*n;if(o>l)return!1;const c=Math.sqrt(l-o),h=r-c,u=r+c;if(u<0)return!1;let d=h<0?u:h;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,d),i.normal.copy(i.origin).sub(t).normalize(),i.distance=d),!0}}());this.origin=new D,this.direction=new D,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}}class Va{constructor(){this.origin=new D,this.normal=new D,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){const e=new Va;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const yn={ThreeD:0,TwoD:1};class Jg{constructor(e,t,n=!1){ae(this,"setFromCameraAndScreenPosition",function(){const e=new xe;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else{if(!t.isOrthographicCamera)throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type");this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t}}}());ae(this,"intersectSplatMesh",function(){const e=new Ue,t=new Ue,n=new Ue,i=new $s,r=new D;return function(a,o=[]){const l=a.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const h=l.subTrees[c];t.copy(a.matrixWorld),a.dynamicMode&&(a.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();const u=[];h.rootNode&&this.castRayAtSplatTreeNode(i,l,h.rootNode,u),u.forEach(d=>{d.origin.applyMatrix4(t),d.normal.applyMatrix4(t).normalize(),d.distance=r.copy(d.origin).sub(this.ray.origin).length()}),o.push(...u)}return o.sort((c,h)=>c.distance>h.distance?1:-1),o}}}());ae(this,"castRayAtSplatTreeNode",function(){const e=new ft,t=new D,n=new D,i=new ot,r=new Va,a=1e-7,o=new D(0,0,0),l=new Ue,c=new Ue,h=new Ue,u=new Ue,d=new Ue,p=new $s;return function(A,g,m,f=[]){if(A.intersectBox(m.boundingBox)){if(m.data&&m.data.indexes&&m.data.indexes.length>0)for(let x=0;x<m.data.indexes.length;x++){const S=m.data.indexes[x],v=g.splatMesh.getSceneIndexForSplat(S);if(g.splatMesh.getScene(v).visible&&(g.splatMesh.getSplatColor(S,e),g.splatMesh.getSplatCenter(S,t),g.splatMesh.getSplatScaleAndRotation(S,n,i),!(n.x<=a||n.y<=a||g.splatMesh.splatRenderMode===yn.ThreeD&&n.z<=a)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),h.makeRotationFromQuaternion(i);const T=2*Math.log10(e.w);if(l.makeScale(T,T,T),d.copy(l).multiply(h).multiply(c),u.copy(d).invert(),p.origin.copy(A.origin).sub(t).applyMatrix4(u),p.direction.copy(A.origin).add(A.direction).sub(t),p.direction.applyMatrix4(u).sub(p.origin).normalize(),p.intersectSphere(o,1,r)){const E=r.clone();E.splatIndex=S,E.origin.applyMatrix4(d).add(t),f.push(E)}}else{let T=n.x+n.y,E=2;if(g.splatMesh.splatRenderMode===yn.ThreeD&&(T+=n.z,E=3),T/=E,A.intersectSphere(t,T,r)){const _=r.clone();_.splatIndex=S,f.push(_)}}}if(m.children&&m.children.length>0)for(let x of m.children)this.castRayAtSplatTreeNode(A,g,x,f);return f}}}());this.ray=new $s(e,t),this.raycastAgainstTrueSplatEllipsoid=n}}class Fi{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let r=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(r+=`
            uniform float sceneOpacity[${Ye.MaxScenes}];
            uniform int sceneVisibility[${Ye.MaxScenes}];
        `),e&&(r+=`
            uniform highp mat4 transforms[${Ye.MaxScenes}];
        `),r+=`
        ${i}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${Ye.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${Ye.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(r+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),r+=e?`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:"mat4 transformModelViewMatrix = modelViewMatrix;",r+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(r+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,r+=e?`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,r+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(r+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?r+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(r+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),r+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(r+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(r+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),r+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),r+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),r}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,i=1,r=!1){const a={sceneCenter:{type:"v3",value:new D},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new xe},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new xe},basisViewport:{type:"v2",value:new xe},debugColor:{type:"v3",value:new Ke},centersColorsTextureSize:{type:"v2",value:new xe(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new xe(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:r?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new xe(1024,1024)},sceneCount:{type:"i",value:1}};for(let o=0;o<Ye.MaxScenes;o++)a.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),a.sphericalHarmonics8BitCompressionRangeMax.value.push(Ye.SphericalHarmonics8BitCompressionRange/2);if(t){const o=[];for(let c=0;c<Ye.MaxScenes;c++)o.push(1);a.sceneOpacity={type:"f",value:o};const l=[];for(let c=0;c<Ye.MaxScenes;c++)l.push(1);a.sceneVisibility={type:"i",value:l}}if(e){const o=[];for(let l=0;l<Ye.MaxScenes;l++)o.push(new Ue);a.transforms={type:"mat4",value:o}}return a}}class ss{static build(e=!1,t=!1,n=!1,i=2048,r=1,a=!1,o=0,l=.3){let c=Fi.buildVertexShaderBase(e,t,o,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);c+=ss.buildVertexShaderProjection(n,t,i,l);const h=ss.buildFragmentShader(),u=Fi.getUniforms(e,t,o,r,a);return u.covariancesTextureSize={type:"v2",value:new xe(1024,1024)},u.covariancesTexture={type:"t",value:null},u.covariancesTextureHalfFloat={type:"t",value:null},u.covariancesAreHalfFloat={type:"i",value:0},new $t({uniforms:u,vertexShader:c,fragmentShader:h,transparent:!0,alphaTest:1,blending:Nn,depthTest:!0,depthWrite:!1,side:jt})}static buildVertexShaderProjection(e,t,n,i){let r=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return r+=e?`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:`
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
            `,r+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(r+=`
                vColor.a *= splatOpacityFromScene;
            `),r+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,r+=Fi.getVertexShaderFadeIn(),r+="}",r}static buildFragmentShader(){return`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `}}class as{static build(e=!1,t=!1,n=1,i=!1,r=0){let a=Fi.buildVertexShaderBase(e,t,r,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);a+=as.buildVertexShaderProjection();const o=as.buildFragmentShader(),l=Fi.getUniforms(e,t,r,n,i);return l.scaleRotationsTexture={type:"t",value:null},l.scaleRotationsTextureSize={type:"v2",value:new xe(1024,1024)},new $t({uniforms:l,vertexShader:a,fragmentShader:o,transparent:!0,alphaTest:1,blending:Nn,depthTest:!0,depthWrite:!1,side:jt})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=Fi.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class Zg{static build(e){const t=new en;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(12),i=new Zt(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;const r=new cg().copy(t),a=new Uint32Array(e),o=new lg(a,1,!1);return o.setUsage(Nh),r.setAttribute("splatIndex",o),r.instanceCount=0,r}}class $g extends mt{constructor(e,t=new D,n=new ot,i=new D(1,1,1),r=1,a=1,o=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new Ue,this.minimumAlpha=r,this.opacity=a,this.visible=o}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}const ls=class ls{constructor(e,t,n,i){this.min=new D().copy(e),this.max=new D().copy(t),this.boundingBox=new dn(this.min,this.max),this.center=new D().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||ls.idGen++}};ae(ls,"idGen",0);let pa=ls;class ir{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new D,this.sceneMin=new D,this.sceneMax=new D,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new D().fromArray(e.min),n=new D().fromArray(e.max),i=new pa(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let r of e.data.indexes)i.data.indexes.push(r)}if(e.children)for(let r of e.children)i.children.push(ir.convertWorkerSubTreeNode(r));return i}static convertWorkerSubTree(e,t){const n=new ir(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new D().fromArray(e.sceneMin),n.sceneMax=new D().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=ir.convertWorkerSubTreeNode(e.rootNode);const i=(r,a)=>{r.children.length===0&&a(r);for(let o of r.children)i(o,a)};return n.nodesWithIndexes=[],i(n.rootNode,r=>{r.data&&r.data.indexes&&r.data.indexes.length>0&&n.nodesWithIndexes.push(r)}),n}}function e0(s){let e=0;class t{constructor(o,l){this.min=[o[0],o[1],o[2]],this.max=[l[0],l[1],l[2]]}containsPoint(o){return o[0]>=this.min[0]&&o[0]<=this.max[0]&&o[1]>=this.min[1]&&o[1]<=this.max[1]&&o[2]>=this.min[2]&&o[2]<=this.max[2]}}class n{constructor(o,l){this.maxDepth=o,this.maxCentersPerNode=l,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(o,l,c,h){this.min=[o[0],o[1],o[2]],this.max=[l[0],l[1],l[2]],this.center=[.5*(l[0]-o[0])+o[0],.5*(l[1]-o[1])+o[1],.5*(l[2]-o[2])+o[2]],this.depth=c,this.children=[],this.data=null,this.id=h||e++}}processSplatTreeNode=function(a,o,l,c){const h=o.data.indexes.length;if(h<a.maxCentersPerNode||o.depth>a.maxDepth){const f=[];for(let x=0;x<o.data.indexes.length;x++)a.addedIndexes[o.data.indexes[x]]||(f.push(o.data.indexes[x]),a.addedIndexes[o.data.indexes[x]]=!0);return o.data.indexes=f,o.data.indexes.sort((x,S)=>x>S?1:-1),void a.nodesWithIndexes.push(o)}const u=[o.max[0]-o.min[0],o.max[1]-o.min[1],o.max[2]-o.min[2]],d=[.5*u[0],.5*u[1],.5*u[2]],p=[o.min[0]+d[0],o.min[1]+d[1],o.min[2]+d[2]],A=[new t([p[0]-d[0],p[1],p[2]-d[2]],[p[0],p[1]+d[1],p[2]]),new t([p[0],p[1],p[2]-d[2]],[p[0]+d[0],p[1]+d[1],p[2]]),new t([p[0],p[1],p[2]],[p[0]+d[0],p[1]+d[1],p[2]+d[2]]),new t([p[0]-d[0],p[1],p[2]],[p[0],p[1]+d[1],p[2]+d[2]]),new t([p[0]-d[0],p[1]-d[1],p[2]-d[2]],[p[0],p[1],p[2]]),new t([p[0],p[1]-d[1],p[2]-d[2]],[p[0]+d[0],p[1],p[2]]),new t([p[0],p[1]-d[1],p[2]],[p[0]+d[0],p[1],p[2]+d[2]]),new t([p[0]-d[0],p[1]-d[1],p[2]],[p[0],p[1],p[2]+d[2]])],g=[];for(let f=0;f<A.length;f++)g[f]=[];const m=[0,0,0];for(let f=0;f<h;f++){const x=o.data.indexes[f],S=l[x];m[0]=c[S],m[1]=c[S+1],m[2]=c[S+2];for(let v=0;v<A.length;v++)A[v].containsPoint(m)&&g[v].push(x)}for(let f=0;f<A.length;f++){const x=new i(A[f].min,A[f].max,o.depth+1);x.data={indexes:g[f]},o.children.push(x)}o.data={};for(let f of o.children)processSplatTreeNode(a,f,l,c)};const r=(a,o,l)=>{const c=[0,0,0],h=[0,0,0],u=[],d=Math.floor(a.length/4);for(let A=0;A<d;A++){const g=4*A,m=a[g],f=a[g+1],x=a[g+2],S=Math.round(a[g+3]);(A===0||m<c[0])&&(c[0]=m),(A===0||m>h[0])&&(h[0]=m),(A===0||f<c[1])&&(c[1]=f),(A===0||f>h[1])&&(h[1]=f),(A===0||x<c[2])&&(c[2]=x),(A===0||x>h[2])&&(h[2]=x),u.push(S)}const p=new n(o,l);return p.sceneMin=c,p.sceneMax=h,p.rootNode=new i(p.sceneMin,p.sceneMax,0),p.rootNode.data={indexes:u},p};s.onmessage=a=>{a.data.process&&function(o,l,c){const h=[];for(let d of o){const p=Math.floor(d.length/4);for(let A=0;A<p;A++){const g=4*A;h[Math.round(d[g+3])]=g}}const u=[];for(let d of o){const p=r(d,l,c);u.push(p),processSplatTreeNode(p,p.rootNode,h,d)}s.postMessage({subTrees:u})}(a.data.process.centers,a.data.process.maxDepth,a.data.process.maxCentersPerNode)}}class t0{constructor(e,t){ae(this,"processSplatMesh",function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=new Worker(URL.createObjectURL(new Blob(["(",e0.toString(),")(self)"],{type:"application/javascript"})))),this.splatMesh=e,this.subTrees=[];const r=new D,a=(o,l)=>{const c=new Float32Array(4*l);let h=0;for(let u=0;u<l;u++){const d=u+o;if(t(d)){e.getSplatCenter(d,r);const p=4*h;c[p]=r.x,c[p+1]=r.y,c[p+2]=r.z,c[p+3]=d,h++}}return c};return new Promise(o=>{const l=()=>!!this.disposed&&(this.diposeSplatTreeWorker(),o(),!0);n&&n(!1),on(()=>{if(l())return;const c=[];if(e.dynamicMode){let h=0;for(let u=0;u<e.scenes.length;u++){const d=e.getScene(u).splatBuffer.getSplatCount(),p=a(h,d);c.push(p),h+=d}}else{const h=a(0,e.getSplatCount());c.push(h)}this.splatTreeWorker.onmessage=h=>{l()||h.data.subTrees&&(i&&i(!1),on(()=>{if(!l()){for(let u of h.data.subTrees){const d=ir.convertWorkerSubTree(u,e);this.subTrees.push(d)}this.diposeSplatTreeWorker(),i&&i(!0),on(()=>{o()})}}))},on(()=>{if(l())return;n&&n(!0);const h=c.map(u=>u.buffer);(function(u,d,p,A,g){u.postMessage({process:{centers:d,maxDepth:A,maxCentersPerNode:g}},p)})(this.splatTreeWorker,c,h,this.maxDepth,this.maxCentersPerNode)})})})});this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,i)=>{n.children.length===0&&i(n);for(let r of n.children)t(r,i)};for(let n of this.subTrees)t(n.rootNode,e)}}function n0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function i0(s,e,t){let n;function i(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=r||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),A=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),f=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,S=r||e.has("OES_texture_float");return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:A,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:f,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:x&&S,maxSamples:r?s.getParameter(s.MAX_SAMPLES):0}}const rr={Default:0,Gradual:1,Instant:2},Ui={None:0,Error:1,Warning:2,Info:3,Debug:4},zl=new en,r0=new ii,kl=16777216;class _t extends dt{constructor(t=yn.ThreeD,n=!1,i=!1,r=!1,a=1,o=!0,l=!1,c=!1,h=1024,u=Ui.None,d=0,p=1,A=.3){super(zl,r0);ae(this,"buildSplatTree",function(t=[],n,i){return new Promise(r=>{this.disposeSplatTree(),this.baseSplatTree=new t0(8,1e3);const a=performance.now(),o=new ft;this.baseSplatTree.processSplatMesh(this,l=>{this.getSplatColor(l,o);const c=this.getSceneIndexForSplat(l),h=t[c]||1;return o.w>=h},n,i).then(()=>{const l=performance.now()-a;if(this.logLevel>=Ui.Info&&console.log("SplatTree build: "+l+" ms"),this.disposed)r();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let c=0,h=0,u=0;this.splatTree.visitLeaves(d=>{const p=d.data.indexes.length;p>0&&(h+=p,u++,c++)}),this.logLevel>=Ui.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${c}`),h/=u,console.log(`Avg splat count per node: ${h}`),console.log(`Total splat count: ${this.getSplatCount()}`)),r()}})})});ae(this,"updateUniforms",function(){const t=new xe;return function(n,i,r,a,o,l){if(this.getSplatCount()>0){if(t.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(t),this.material.uniforms.basisViewport.value.set(1/t.x,1/t.y),this.material.uniforms.focal.value.set(i,r),this.material.uniforms.orthographicMode.value=a?1:0,this.material.uniforms.orthoZoom.value=o,this.material.uniforms.inverseFocalAdjustment.value=l,this.dynamicMode)for(let c=0;c<this.scenes.length;c++)this.material.uniforms.transforms.value[c].copy(this.getScene(c).transform);if(this.enableOptionalEffects)for(let c=0;c<this.scenes.length;c++)this.material.uniforms.sceneOpacity.value[c]=Tt(this.getScene(c).opacity,0,1),this.material.uniforms.sceneVisibility.value[c]=this.getScene(c).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}}());ae(this,"setupDistancesComputationTransformFeedback",function(){let t;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const i=this.lastRenderer!==this.renderer,r=t!==n;if(!i&&!r)return;i?this.disposeDistancesComputationGPUResources():r&&this.disposeDistancesComputationGPUBufferResources();const a=this.renderer.getContext(),o=(d,p,A)=>{const g=d.createShader(p);if(!g)return console.error("Fatal error: gl could not create a shader object."),null;if(d.shaderSource(g,A),d.compileShader(g),!d.getShaderParameter(g,d.COMPILE_STATUS)){let m="unknown";p===d.VERTEX_SHADER?m="vertex shader":p===d.FRAGMENT_SHADER&&(m="fragement shader");const f=d.getShaderInfoLog(g);return console.error("Failed to compile "+m+" with these errors:"+f),d.deleteShader(g),null}return g};let l;this.integerBasedDistancesComputation?(l=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${Ye.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:l+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(l=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${Ye.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:l+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const c=a.getParameter(a.VERTEX_ARRAY_BINDING),h=a.getParameter(a.CURRENT_PROGRAM),u=!!h&&a.getProgramParameter(h,a.DELETE_STATUS);if(i&&(this.distancesTransformFeedback.vao=a.createVertexArray()),a.bindVertexArray(this.distancesTransformFeedback.vao),i){const d=a.createProgram(),p=o(a,a.VERTEX_SHADER,l),A=o(a,a.FRAGMENT_SHADER,`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `);if(!p||!A)throw new Error("Could not compile shaders for distances computation on GPU.");if(a.attachShader(d,p),a.attachShader(d,A),a.transformFeedbackVaryings(d,["distance"],a.SEPARATE_ATTRIBS),a.linkProgram(d),!a.getProgramParameter(d,a.LINK_STATUS)){const g=a.getProgramInfoLog(d);throw console.error("Fatal error: Failed to link program: "+g),a.deleteProgram(d),a.deleteShader(A),a.deleteShader(p),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=d,this.distancesTransformFeedback.vertexShader=p,this.distancesTransformFeedback.vertexShader=A}if(a.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=a.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=a.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let d=0;d<this.scenes.length;d++)this.distancesTransformFeedback.transformsLocs[d]=a.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${d}]`)}else this.distancesTransformFeedback.modelViewProjLoc=a.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(i||r)&&(this.distancesTransformFeedback.centersBuffer=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),a.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?a.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,a.INT,0,0):a.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,a.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),a.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),a.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,a.UNSIGNED_INT,0,0))),(i||r)&&(this.distancesTransformFeedback.outDistancesBuffer=a.createBuffer()),a.bindBuffer(a.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),a.bufferData(a.ARRAY_BUFFER,4*n,a.STATIC_READ),i&&(this.distancesTransformFeedback.id=a.createTransformFeedback()),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),h&&u!==!0&&a.useProgram(h),c&&a.bindVertexArray(c),this.lastRenderer=this.renderer,t=n}}());ae(this,"fillTransformsArray",function(){const t=[];return function(n){t.length!==n.length&&(t.length=n.length);for(let i=0;i<this.scenes.length;i++){const r=this.getScene(i).transform.elements;for(let a=0;a<16;a++)t[16*i+a]=r[a]}n.set(t)}}());ae(this,"computeDistancesOnGPU",function(){const t=new Ue;return function(n,i){if(!this.renderer)return;const r=this.renderer.getContext(),a=r.getParameter(r.VERTEX_ARRAY_BINDING),o=r.getParameter(r.CURRENT_PROGRAM),l=!!o&&r.getProgramParameter(o,r.DELETE_STATUS);if(r.bindVertexArray(this.distancesTransformFeedback.vao),r.useProgram(this.distancesTransformFeedback.program),r.enable(r.RASTERIZER_DISCARD),this.dynamicMode)for(let u=0;u<this.scenes.length;u++)if(t.copy(this.getScene(u).transform),t.premultiply(n),this.integerBasedDistancesComputation){const d=_t.getIntegerMatrixArray(t),p=[d[2],d[6],d[10],d[14]];r.uniform4i(this.distancesTransformFeedback.transformsLocs[u],p[0],p[1],p[2],p[3])}else r.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[u],!1,t.elements);else if(this.integerBasedDistancesComputation){const u=_t.getIntegerMatrixArray(n),d=[u[2],u[6],u[10]];r.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,d[0],d[1],d[2])}else{const u=[n.elements[2],n.elements[6],n.elements[10]];r.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,u[0],u[1],u[2])}r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?r.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,r.INT,0,0):r.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,r.FLOAT,!1,0,0),this.dynamicMode&&(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),r.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,r.UNSIGNED_INT,0,0)),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),r.beginTransformFeedback(r.POINTS),r.drawArrays(r.POINTS,0,this.getSplatCount()),r.endTransformFeedback(),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,null),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,null),r.disable(r.RASTERIZER_DISCARD);const c=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);r.flush();const h=new Promise(u=>{const d=()=>{if(this.disposed)u();else switch(r.clientWaitSync(c,0,0)){case r.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(d),this.computeDistancesOnGPUSyncTimeout;case r.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,r.deleteSync(c);const g=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),r.getBufferSubData(r.ARRAY_BUFFER,0,i),r.bindBuffer(r.ARRAY_BUFFER,null),g&&r.bindVertexArray(g),u()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(d)});return o&&l!==!0&&r.useProgram(o),a&&r.bindVertexArray(a),h}}());ae(this,"getSplatCenter",function(){const t={};return function(n,i,r){this.getLocalSplatParameters(n,t,r),t.splatBuffer.getSplatCenter(t.localIndex,i,t.sceneTransform)}}());ae(this,"getSplatScaleAndRotation",function(){const t={},n=new D;return function(i,r,a,o){this.getLocalSplatParameters(i,t,o),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===yn.TwoD&&(n.z=0),t.splatBuffer.getSplatScaleAndRotation(t.localIndex,r,a,t.sceneTransform,n)}}());ae(this,"getSplatColor",function(){const t={};return function(n,i){this.getLocalSplatParameters(n,t),t.splatBuffer.getSplatColor(t.localIndex,i)}}());this.renderer=void 0,this.splatRenderMode=t,this.dynamicMode=n,this.enableOptionalEffects=i,this.halfPrecisionCovariancesOnGPU=r,this.devicePixelRatio=a,this.enableDistancesComputationOnGPU=o,this.integerBasedDistancesComputation=l,this.antialiased=c,this.kernel2DSize=A,this.maxScreenSpaceSplatSize=h,this.logLevel=u,this.sphericalHarmonicsDegree=d,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=p,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new dn,this.calculatedSceneCenter=new D,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(t,n,i){const r=[];r.length=n.length;for(let a=0;a<n.length;a++){const o=n[a],l=i[a]||{};let c=l.position||[0,0,0],h=l.rotation||[0,0,0,1],u=l.scale||[1,1,1];const d=new D().fromArray(c),p=new ot().fromArray(h),A=new D().fromArray(u),g=_t.createScene(o,d,p,A,l.splatAlphaRemovalThreshold||1,l.opacity,l.visible);t.add(g),r[a]=g}return r}static createScene(t,n,i,r,a,o=1,l=!0){return new $g(t,n,i,r,a,o,l)}static buildSplatIndexMaps(t){const n=[],i=[];let r=0;for(let a=0;a<t.length;a++){const o=t[a].getMaxSplatCount();for(let l=0;l<o;l++)n[r]=l,i[r]=a,r++}return{localSplatIndexMap:n,sceneIndexMap:i}}build(t,n,i=!0,r=!1,a,o,l=!0){this.sceneOptions=n,this.finalBuild=r;const c=_t.getTotalMaxSplatCountForSplatBuffers(t),h=_t.buildScenes(this,t,n);if(i)for(let m=0;m<this.scenes.length&&m<h.length;m++){const f=h[m],x=this.getScene(m);f.copyTransformData(x)}this.scenes=h;let u=3;for(let m of t){const f=m.getMinSphericalHarmonicsDegree();f<u&&(u=f)}this.minSphericalHarmonicsDegree=Math.min(u,this.sphericalHarmonicsDegree);let d=!1;if(t.length!==this.lastBuildScenes.length)d=!0;else for(let m=0;m<t.length;m++)if(t[m]!==this.lastBuildScenes[m].splatBuffer){d=!0;break}let p=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==c||d)&&(p=!1),!p){this.boundingBox=new dn,l||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=Zg.build(c),this.splatRenderMode===yn.ThreeD?this.material=ss.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=as.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const m=_t.buildSplatIndexMaps(t);this.globalSplatIndexToLocalSplatIndexMap=m.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=m.sceneIndexMap}const A=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const g=this.refreshGPUDataFromSplatBuffers(p);for(let m=0;m<this.scenes.length;m++)this.lastBuildScenes[m]=this.scenes[m];return this.lastBuildSplatCount=A,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,r&&this.scenes.length>0&&this.buildSplatTree(n.map(m=>m.splatAlphaRemovalThreshold||1),a,o).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,g}freeIntermediateSplatData(){const t=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{t(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{t(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{t(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{t(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{t(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new dn,this.calculatedSceneCenter=new D,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==zl&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let t in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(t)){const n=this.splatDataTextures[t];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(t){this.onSplatTreeReadyCallback=t}getDataForDistancesComputation(t,n){return{centers:this.integerBasedDistancesComputation?this.getIntegerCenters(t,n,!0):this.getFloatCenters(t,n,!0),sceneIndexes:this.getSceneIndexes(t,n)}}refreshGPUDataFromSplatBuffers(t){const n=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(t);const i=t?this.lastBuildSplatCount:0,{centers:r,sceneIndexes:a}=this.getDataForDistancesComputation(i,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(r,a,t),{from:i,to:n-1,count:n-i,centers:r,sceneIndexes:a}}refreshGPUBuffersForDistancesComputation(t,n,i=!1){const r=i?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(i,t,r),this.updateGPUTransformIndexesBufferForDistancesComputation(i,n,r)}refreshDataTexturesFromSplatBuffers(t){const n=this.getSplatCount(!0),i=this.lastBuildSplatCount,r=n-1;t?this.updateBaseDataFromSplatBuffers(i,r):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(i,r),this.updateVisibleRegion(t)}setupDataTextures(){const t=this.getMaxSplatCount(),n=this.getSplatCount(!0);this.disposeTextures();const i=(E,_)=>{const I=new xe(4096,1024);for(;I.x*I.y*E<t*_;)I.y*=2;return I},r=E=>{const _=(I=>I>=1?6:4)(E);return{elementsPerTexelStored:_,texSize:i(_,6)}};let a=this.getTargetCovarianceCompressionLevel();const o=this.getTargetSphericalHarmonicsCompressionLevel();let l,c,h;if(this.splatRenderMode===yn.ThreeD){const E=r(a);E.texSize.x*E.texSize.y>kl&&a===0&&(a=1),l=new Float32Array(6*t)}else c=new Float32Array(3*t),h=new Float32Array(4*t);const u=new Float32Array(3*t),d=new Uint8Array(4*t);let p=Float32Array;o===1?p=Uint16Array:o===2&&(p=Uint8Array);const A=Li(this.minSphericalHarmonicsDegree),g=this.minSphericalHarmonicsDegree?new p(t*A):void 0,m=i(4,4),f=new Uint32Array(m.x*m.y*4);_t.updateCenterColorsPaddedData(0,n-1,u,d,f);const x=new Pn(f,m.x,m.y,Ji,Vt);if(x.internalFormat="RGBA32UI",x.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=x,this.material.uniforms.centersColorsTextureSize.value.copy(m),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:l,scales:c,rotations:h,centers:u,colors:d,sphericalHarmonics:g},centerColors:{data:f,texture:x,size:m}},this.splatRenderMode===yn.ThreeD){const E=r(a),_=E.elementsPerTexelStored,I=E.texSize,M=a>=1?8:4,y=new(a>=1?Uint32Array:Float32Array)(I.x*I.y*M);let P;if(a===0?y.set(l):_t.updatePaddedCompressedCovariancesTextureData(l,y,0,0,l.length),a>=1)P=new Pn(y,I.x,I.y,Ji,Vt),P.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=P;else{P=new Pn(y,I.x,I.y,Ut,un),this.material.uniforms.covariancesTexture.value=P;const F=new Pn(new Uint32Array(32),2,2,Ji,Vt);F.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=F,F.needsUpdate=!0}P.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=a>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(I),this.splatDataTextures.covariances={data:y,texture:P,size:I,compressionLevel:a,elementsPerTexelStored:_,elementsPerTexelAllocated:M}}else{const E=i(4,6);let _=Float32Array,I=un;const M=new _(E.x*E.y*4);_t.updateScaleRotationsPaddedData(0,n-1,c,h,M);const y=new Pn(M,E.x,E.y,Ut,I);y.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=y,this.material.uniforms.scaleRotationsTextureSize.value.copy(E),this.splatDataTextures.scaleRotations={data:M,texture:y,size:E,compressionLevel:0}}if(g){const E=o===2?Cn:Hi;let _=A;_%2!=0&&_++;const I=this.minSphericalHarmonicsDegree===2?4:2,M=I===4?Ut:Jl;let y=i(I,_);if(y.x*y.y<=kl){const P=new p(y.x*y.y*I);for(let N=0;N<n;N++){const R=A*N,L=_*N;for(let B=0;B<A;B++)P[L+B]=g[R+B]}const F=new Pn(P,y.x,y.y,M,E);F.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=F,this.splatDataTextures.sphericalHarmonics={componentCount:A,paddedComponentCount:_,data:P,textureCount:1,texture:F,size:y,compressionLevel:o,elementsPerTexel:I}}else{const P=A/3;_=P,_%2!=0&&_++,y=i(I,_);const F=y.x*y.y*I,N=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],R=[],L=[];for(let B=0;B<3;B++){const O=new p(F);R.push(O);for(let j=0;j<n;j++){const J=A*j,ee=_*j;if(P>=3){for(let Z=0;Z<3;Z++)O[ee+Z]=g[J+3*B+Z];if(P>=8)for(let Z=0;Z<5;Z++)O[ee+3+Z]=g[J+9+5*B+Z]}}const W=new Pn(O,y.x,y.y,M,E);L.push(W),W.needsUpdate=!0,N[B].value=W}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:A,componentCountPerChannel:P,paddedComponentCount:_,data:R,textureCount:3,textures:L,size:y,compressionLevel:o,elementsPerTexel:I}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(y),this.material.uniforms.sphericalHarmonics8BitMode.value=o===2?1:0;for(let P=0;P<this.scenes.length;P++){const F=this.scenes[P].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[P]=F.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[P]=F.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const S=i(1,4),v=new Uint32Array(S.x*S.y*1);for(let E=0;E<n;E++)v[E]=this.globalSplatIndexToSceneIndexMap[E];const T=new Pn(v,S.x,S.y,Sa,Vt);T.internalFormat="R32UI",T.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=T,this.material.uniforms.sceneIndexesTextureSize.value.copy(S),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:v,texture:T,size:S},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(t,n){const i=this.splatDataTextures.covariances,r=i?i.compressionLevel:void 0,a=this.splatDataTextures.scaleRotations,o=a?a.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,r,o,c,t,n,t)}updateDataTexturesFromBaseData(t,n){const i=this.splatDataTextures.covariances,r=i?i.compressionLevel:void 0,a=this.splatDataTextures.scaleRotations,o=a?a.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0,h=this.splatDataTextures.centerColors,u=h.data,d=h.texture;_t.updateCenterColorsPaddedData(t,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,u);const p=this.renderer?this.renderer.properties.get(d):null;if(p&&p.__webglTexture?this.updateDataTexture(u,h.texture,h.size,p,4,4,4,t,n):d.needsUpdate=!0,i){const S=i.texture,v=6*t,T=6*n;if(r===0)for(let _=v;_<=T;_++){const I=this.splatDataTextures.baseData.covariances[_];i.data[_]=I}else _t.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,i.data,t*i.elementsPerTexelAllocated,v,T);const E=this.renderer?this.renderer.properties.get(S):null;E&&E.__webglTexture?r===0?this.updateDataTexture(i.data,i.texture,i.size,E,i.elementsPerTexelStored,6,4,t,n):this.updateDataTexture(i.data,i.texture,i.size,E,i.elementsPerTexelAllocated,i.elementsPerTexelAllocated,2,t,n):S.needsUpdate=!0}if(a){const S=a.data,v=a.texture,T=6,E=o===0?4:2;_t.updateScaleRotationsPaddedData(t,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,S);const _=this.renderer?this.renderer.properties.get(v):null;_&&_.__webglTexture?this.updateDataTexture(S,a.texture,a.size,_,4,T,E,t,n):v.needsUpdate=!0}const A=this.splatDataTextures.baseData.sphericalHarmonics;if(A){let S=4;c===1?S=2:c===2&&(S=1);const v=(_,I,M,y,P)=>{const F=this.renderer?this.renderer.properties.get(_):null;F&&F.__webglTexture?this.updateDataTexture(y,_,I,F,M,P,S,t,n):_.needsUpdate=!0},T=l.componentCount,E=l.paddedComponentCount;if(l.textureCount===1){const _=l.data;for(let I=t;I<=n;I++){const M=T*I,y=E*I;for(let P=0;P<T;P++)_[y+P]=A[M+P]}v(l.texture,l.size,l.elementsPerTexel,_,E)}else{const _=l.componentCountPerChannel;for(let I=0;I<3;I++){const M=l.data[I];for(let y=t;y<=n;y++){const P=T*y,F=E*y;if(_>=3){for(let N=0;N<3;N++)M[F+N]=A[P+3*I+N];if(_>=8)for(let N=0;N<5;N++)M[F+3+N]=A[P+9+5*I+N]}}v(l.textures[I],l.size,l.elementsPerTexel,M,E)}}}const g=this.splatDataTextures.sceneIndexes,m=g.data;for(let S=this.lastBuildSplatCount;S<=n;S++)m[S]=this.globalSplatIndexToSceneIndexMap[S];const f=g.texture,x=this.renderer?this.renderer.properties.get(f):null;x&&x.__webglTexture?this.updateDataTexture(m,g.texture,g.size,x,1,1,1,this.lastBuildSplatCount,n):f.needsUpdate=!0}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const i=this.getScene(n).splatBuffer;(n===0||i.compressionLevel>t)&&(t=i.compressionLevel)}return t}getMinimumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const i=this.getScene(n).splatBuffer;(n===0||i.compressionLevel<t)&&(t=i.compressionLevel)}return t}static computeTextureUpdateRegion(t,n,i,r,a){const o=a/r,l=t*o,c=Math.floor(l/i),h=c*i*r,u=n*o,d=Math.floor(u/i);return{dataStart:h,dataEnd:d*i*r+i*r,startRow:c,endRow:d}}updateDataTexture(t,n,i,r,a,o,l,c,h){const u=this.renderer.getContext(),d=_t.computeTextureUpdateRegion(c,h,i.x,a,o),p=d.dataEnd-d.dataStart,A=new t.constructor(t.buffer,d.dataStart*l,p),g=d.endRow-d.startRow+1,m=this.webGLUtils.convert(n.type),f=this.webGLUtils.convert(n.format,n.colorSpace),x=u.getParameter(u.TEXTURE_BINDING_2D);u.bindTexture(u.TEXTURE_2D,r.__webglTexture),u.texSubImage2D(u.TEXTURE_2D,0,0,d.startRow,i.x,g,f,m,A),u.bindTexture(u.TEXTURE_2D,x)}static updatePaddedCompressedCovariancesTextureData(t,n,i,r,a){let o=new DataView(n.buffer),l=i,c=0;for(let h=r;h<=a;h+=2)o.setUint16(2*l,t[h],!0),o.setUint16(2*l+2,t[h+1],!0),l+=2,c++,c>=3&&(l+=2,c=0)}static updateCenterColorsPaddedData(t,n,i,r,a){for(let c=t;c<=n;c++){const h=4*c,u=3*c,d=4*c;a[d]=(o=r)[l=h]+(o[l+1]<<8)+(o[l+2]<<16)+(o[l+3]<<24),a[d+1]=Ys(i[u]),a[d+2]=Ys(i[u+1]),a[d+3]=Ys(i[u+2])}var o,l}static updateScaleRotationsPaddedData(t,n,i,r,a){for(let o=t;o<=n;o++){const l=3*o,c=4*o,h=6*o;a[h]=i[l],a[h+1]=i[l+1],a[h+2]=i[l+2],a[h+3]=r[c],a[h+4]=r[c+1],a[h+5]=r[c+2]}}updateVisibleRegion(t){const n=this.getSplatCount(!0),i=new D;if(!t){const r=new D;this.scenes.forEach(a=>{r.add(a.splatBuffer.sceneCenter)}),r.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(r),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}for(let r=t?this.lastBuildSplatCount:0;r<n;r++){this.getSplatCenter(r,i,!0);const a=i.sub(this.calculatedSceneCenter).length();a>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=a)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>1&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-1,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(t=rr.Default){const n=.012*this.sceneFadeInRateMultiplier,i=.003*this.sceneFadeInRateMultiplier,r=this.finalBuild?n:i,a=t===rr.Default?r:i;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*a+this.visibleRegionFadeStartRadius;const o=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,l=o||t===rr.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=l,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!o}updateRenderIndexes(t,n){const i=this.geometry;i.attributes.splatIndex.set(t),i.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),i.instanceCount=n,i.setDrawRange(0,n)}updateTransforms(){for(let t=0;t<this.scenes.length;t++)this.getScene(t).updateTransform(this.dynamicMode)}setSplatScale(t=1){this.splatScale=t,this.material.uniforms.splatScale.value=t,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(t){this.pointCloudModeEnabled=t,this.material.uniforms.pointCloudModeEnabled.value=t?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(t=!1){return t?_t.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getSplatCount();return n}getMaxSplatCount(){return _t.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.vao&&(t.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(t.deleteProgram(this.distancesTransformFeedback.program),t.deleteShader(this.distancesTransformFeedback.vertexShader),t.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(t.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,t.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(t.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(t){if(t!==this.renderer){this.renderer=t;const n=this.renderer.getContext(),i=new n0(n),r=new i0(n,i,{});if(i.init(r),this.webGLUtils=new yc(n,i,r),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:a,sceneIndexes:o}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(a,o)}}}updateGPUCentersBufferForDistancesComputation(t,n,i){if(!this.renderer)return;const r=this.renderer.getContext(),a=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao);const o=this.integerBasedDistancesComputation?Uint32Array:Float32Array,l=16*i;if(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),t)r.bufferSubData(r.ARRAY_BUFFER,l,n);else{const c=new o(16*this.getMaxSplatCount());c.set(n),r.bufferData(r.ARRAY_BUFFER,c,r.STATIC_DRAW)}r.bindBuffer(r.ARRAY_BUFFER,null),a&&r.bindVertexArray(a)}updateGPUTransformIndexesBufferForDistancesComputation(t,n,i){if(!this.renderer||!this.dynamicMode)return;const r=this.renderer.getContext(),a=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao);const o=4*i;if(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),t)r.bufferSubData(r.ARRAY_BUFFER,o,n);else{const l=new Uint32Array(4*this.getMaxSplatCount());l.set(n),r.bufferData(r.ARRAY_BUFFER,l,r.STATIC_DRAW)}r.bindBuffer(r.ARRAY_BUFFER,null),a&&r.bindVertexArray(a)}getSceneIndexes(t,n){let i;i=new Uint32Array(n-t+1);for(let r=t;r<=n;r++)i[r]=this.globalSplatIndexToSceneIndexMap[r];return i}getLocalSplatParameters(t,n,i){i==null&&(i=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(t),n.localIndex=this.getSplatLocalIndex(t),n.sceneTransform=i?this.getSceneTransformForSplat(t):null}fillSplatDataArrays(t,n,i,r,a,o,l,c=0,h=0,u=1,d,p,A=0,g){const m=new D;m.x=void 0,m.y=void 0,this.splatRenderMode===yn.ThreeD?m.z=void 0:m.z=1;const f=new Ue;let x=0,S=this.scenes.length-1;g!=null&&g>=0&&g<=this.scenes.length&&(x=g,S=g);for(let v=x;v<=S;v++){l==null&&(l=!this.dynamicMode);const T=this.getScene(v),E=T.splatBuffer;let _;if(l&&(this.getSceneTransform(v,f),_=f),t&&E.fillSplatCovarianceArray(t,_,d,p,A,c),n||i){if(!n||!i)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');E.fillSplatScaleRotationArray(n,i,_,d,p,A,h,m)}r&&E.fillSplatCenterArray(r,_,d,p,A),a&&E.fillSplatColorArray(a,T.minimumAlpha,d,p,A),o&&E.fillSphericalHarmonicsArray(o,this.minSphericalHarmonicsDegree,_,d,p,A,u),A+=E.getSplatCount()}}getIntegerCenters(t,n,i=!1){const r=n-t+1,a=new Float32Array(3*r);let o;this.fillSplatDataArrays(null,null,null,a,null,null,void 0,void 0,void 0,void 0,t);let l=i?4:3;o=new Int32Array(r*l);for(let c=0;c<r;c++){for(let h=0;h<3;h++)o[c*l+h]=Math.round(1e3*a[3*c+h]);i&&(o[c*l+3]=1e3)}return o}getFloatCenters(t,n,i=!1){const r=n-t+1,a=new Float32Array(3*r);if(this.fillSplatDataArrays(null,null,null,a,null,null,void 0,void 0,void 0,void 0,t),!i)return a;let o=new Float32Array(4*r);for(let l=0;l<r;l++){for(let c=0;c<3;c++)o[4*l+c]=a[3*l+c];o[4*l+3]=1}return o}getSceneTransform(t,n){const i=this.getScene(t);i.updateTransform(this.dynamicMode),n.copy(i.transform)}getScene(t){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[t]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).splatBuffer}getSceneIndexForSplat(t){return this.globalSplatIndexToSceneIndexMap[t]}getSceneTransformForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).transform}getSplatLocalIndex(t){return this.globalSplatIndexToLocalSplatIndexMap[t]}static getIntegerMatrixArray(t){const n=t.elements,i=[];for(let r=0;r<16;r++)i[r]=Math.round(1e3*n[r]);return i}computeBoundingBox(t=!1,n){let i=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");i=this.scenes[n].splatBuffer.getSplatCount()}const r=new Float32Array(3*i);this.fillSplatDataArrays(null,null,null,r,null,null,t,void 0,void 0,void 0,void 0,n);const a=new D,o=new D;for(let l=0;l<i;l++){const c=3*l,h=r[c],u=r[c+1],d=r[c+2];(l===0||h<a.x)&&(a.x=h),(l===0||u<a.y)&&(a.y=u),(l===0||d<a.z)&&(a.z=d),(l===0||h>o.x)&&(o.x=h),(l===0||u>o.y)&&(o.y=u),(l===0||d>o.z)&&(o.z=d)}return new dn(a,o)}}var Gl="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function s0(s){let e,t,n,i,r,a,o,l,c,h,u,d,p,A,g,m,f,x,S,v;s.onmessage=T=>{if(T.data.centers)centers=T.data.centers,sceneIndexes=T.data.sceneIndexes,i?new Int32Array(t,A+T.data.range.from*v.BytesPerInt*4,4*T.data.range.count).set(new Int32Array(centers)):new Float32Array(t,A+T.data.range.from*v.BytesPerFloat*4,4*T.data.range.count).set(new Float32Array(centers)),r&&new Uint32Array(t,c+4*T.data.range.from,T.data.range.count).set(new Uint32Array(sceneIndexes)),S=T.data.range.from+T.data.range.count;else if(T.data.sort){const E=Math.min(T.data.sort.splatRenderCount||0,S),_=Math.min(T.data.sort.splatSortCount||0,S),I=T.data.sort.usePrecomputedDistances;let M,y,P;n||(M=T.data.sort.indexesToSort,P=T.data.sort.transforms,I&&(y=T.data.sort.precomputedDistances)),function(F,N,R,L,B,O,W){const j=performance.now();if(!n&&(new Uint32Array(t,o,B.byteLength/v.BytesPerInt).set(B),new Float32Array(t,h,W.byteLength/v.BytesPerFloat).set(W),L)){let Z;Z=i?new Int32Array(t,u,O.byteLength/v.BytesPerInt):new Float32Array(t,u,O.byteLength/v.BytesPerFloat),Z.set(O)}m||(m=new Uint32Array(x)),new Float32Array(t,g,16).set(R),new Uint32Array(t,p,x).set(m),e.exports.sortIndexes(o,A,u,d,p,g,l,c,h,x,F,N,a,L,i,r);const J={sortDone:!0,splatSortCount:F,splatRenderCount:N,sortTime:0};if(!n){const Z=new Uint32Array(t,l,N);(!f||f.length<N)&&(f=new Uint32Array(N)),f.set(Z),J.sortedIndexes=f}const ee=performance.now();J.sortTime=ee-j,s.postMessage(J)}(_,E,T.data.sort.modelViewProj,I,M,y,P)}else if(T.data.init){v=T.data.init.Constants,a=T.data.init.splatCount,n=T.data.init.useSharedMemory,i=T.data.init.integerBasedSort,r=T.data.init.dynamicMode,x=T.data.init.distanceMapRange,S=0;const E=i?4*v.BytesPerInt:4*v.BytesPerFloat,_=new Uint8Array(T.data.init.sorterWasmBytes),I=16*v.BytesPerFloat,M=a*v.BytesPerInt,y=a*E,P=I,F=i?a*v.BytesPerInt:a*v.BytesPerFloat,N=a*v.BytesPerInt,R=a*v.BytesPerInt,L=i?x*v.BytesPerInt*2:x*v.BytesPerFloat*2,B=r?a*v.BytesPerInt:0,O=r?v.MaxScenes*I:0,W=32*v.MemoryPageSize,j=M+y+P+F+N+L+R+B+O+W,J=Math.floor(j/v.MemoryPageSize)+1,ee={module:{},env:{memory:new WebAssembly.Memory({initial:J,maximum:J,shared:!0})}};WebAssembly.compile(_).then(Z=>WebAssembly.instantiate(Z,ee)).then(Z=>{e=Z,o=0,A=o+M,g=A+y,u=g+P,d=u+F,p=d+N,l=p+L,c=l+R,h=c+B,t=ee.env.memory.buffer,n?s.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:o,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:u,transformsBuffer:t,transformsOffset:h}):s.postMessage({sortSetupPhase1Complete:!0})})}}}const Ti={None:0,VR:1,AR:2};class Gi{static createButton(e,t={}){const n=document.createElement("button");function i(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function r(a){a.style.position="absolute",a.style.bottom="20px",a.style.padding="12px 6px",a.style.border="1px solid #fff",a.style.borderRadius="4px",a.style.background="rgba(0,0,0,0.1)",a.style.color="#fff",a.style.font="normal 13px sans-serif",a.style.textAlign="center",a.style.opacity="0.5",a.style.outline="none",a.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",r(n),navigator.xr.isSessionSupported("immersive-vr").then(function(a){a?function(){let o=null;async function l(u){u.addEventListener("end",c),await e.xr.setSession(u),n.textContent="EXIT VR",o=u}function c(){o.removeEventListener("end",c),n.textContent="ENTER VR",o=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const h={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){o===null?navigator.xr.requestSession("immersive-vr",h).then(l):(o.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(l).catch(u=>{console.warn(u)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(l).catch(u=>{console.warn(u)})}():(i(),n.textContent="VR NOT SUPPORTED"),a&&Gi.xrSessionIsGranted&&n.click()}).catch(function(a){i(),console.warn("Exception when trying to call xr.isSessionSupported",a),n.textContent="VR NOT ALLOWED"}),n;{const a=document.createElement("a");return window.isSecureContext===!1?(a.href=document.location.href.replace(/^http:/,"https:"),a.innerHTML="WEBXR NEEDS HTTPS"):(a.href="https://immersiveweb.dev/",a.innerHTML="WEBXR NOT AVAILABLE"),a.style.left="calc(50% - 90px)",a.style.width="180px",a.style.textDecoration="none",r(a),a}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Gi.xrSessionIsGranted=!0})}}}Gi.xrSessionIsGranted=!1,Gi.registerSessionGrantedListener();class a0{static createButton(e,t={}){const n=document.createElement("button");function i(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function r(a){a.style.position="absolute",a.style.bottom="20px",a.style.padding="12px 6px",a.style.border="1px solid #fff",a.style.borderRadius="4px",a.style.background="rgba(0,0,0,0.1)",a.style.color="#fff",a.style.font="normal 13px sans-serif",a.style.textAlign="center",a.style.opacity="0.5",a.style.outline="none",a.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",r(n),navigator.xr.isSessionSupported("immersive-ar").then(function(a){a?function(){if(t.domOverlay===void 0){const h=document.createElement("div");h.style.display="none",document.body.appendChild(h);const u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("width",38),u.setAttribute("height",38),u.style.position="absolute",u.style.right="20px",u.style.top="20px",u.addEventListener("click",function(){o.end()}),h.appendChild(u);const d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),d.setAttribute("stroke","#fff"),d.setAttribute("stroke-width",2),u.appendChild(d),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:h}}let o=null;async function l(h){h.addEventListener("end",c),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(h),n.textContent="STOP AR",t.domOverlay.root.style.display="",o=h}function c(){o.removeEventListener("end",c),n.textContent="START AR",t.domOverlay.root.style.display="none",o=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){o===null?navigator.xr.requestSession("immersive-ar",t).then(l):(o.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(l).catch(h=>{console.warn(h)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(l).catch(h=>{console.warn(h)})}():(i(),n.textContent="AR NOT SUPPORTED")}).catch(function(a){i(),console.warn("Exception when trying to call xr.isSessionSupported",a),n.textContent="AR NOT ALLOWED"}),n;{const a=document.createElement("a");return window.isSecureContext===!1?(a.href=document.location.href.replace(/^http:/,"https:"),a.innerHTML="WEBXR NEEDS HTTPS"):(a.href="https://immersiveweb.dev/",a.innerHTML="WEBXR NOT AVAILABLE"),a.style.left="calc(50% - 90px)",a.style.width="180px",a.style.textDecoration="none",r(a),a}}}const ea={Always:0,OnChange:1,Never:2},Bn=class Bn{constructor(e={}){ae(this,"onKeyDown",function(){const e=new D,t=new Ue,n=new Ue;return function(i){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),i.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0))}}}());ae(this,"onMouseUp",function(){const e=new xe;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Mi()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}}());ae(this,"checkForFocalPointChange",function(){const e=new xe,t=new D,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const i=n[0].origin;t.copy(i).sub(this.camera.position),t.length()>.75&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(i),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Mi())}}}());ae(this,"updateSplatMesh",function(){const e=new xe;return function(){if(this.splatMesh&&this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const t=.5*this.camera.projectionMatrix.elements[0]*this.devicePixelRatio*e.x,n=.5*this.camera.projectionMatrix.elements[5]*this.devicePixelRatio*e.y,i=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,r=this.focalAdjustment*i,a=1/r;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,t*r,n*r,this.camera.isOrthographicCamera,this.camera.zoom||1,a)}}}());ae(this,"addSplatBuffers",function(){return function(e,t=[],n=!0,i=!0,r=!0,a=!1,o=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const h=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return this.splatRenderReady=!1,new Promise(u=>{i&&(c=this.loadingSpinner.addTask("Processing splats...")),on(()=>{if(this.isDisposingOrDisposed())u();else{const d=this.addSplatBuffersToMesh(e,t,n,r,a,l),p=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==p&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:d.centers.buffer,sceneIndexes:d.sceneIndexes.buffer,range:{from:d.from,to:d.to,count:d.count}}),(!this.sortWorker&&p>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(A=>{this.sortWorker&&A?(o?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{h(),u()})):(this.splatRenderReady=!0,h(),u())})})}},!0)})}}());ae(this,"addSplatBuffersToMesh",function(){let e;return function(t,n,i=!0,r=!1,a=!1,o=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];a||(l=this.splatMesh.scenes.map(u=>u.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(u=>u):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const h=this.splatMesh.build(l,c,!0,i,u=>{if(this.isDisposingOrDisposed())return;const d=this.splatMesh.getSplatCount();r&&d>=15e5&&(u||e||(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures...")))},u=>{this.isDisposingOrDisposed()||u&&e&&(this.loadingSpinner.removeTask(e),e=null)},o);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),h}}());ae(this,"shouldRender",function(){let e=0;const t=new D,n=new ot,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let r=!1,a=!1;if(this.camera){const o=this.camera.position,l=this.camera.quaternion;a=Math.abs(o.x-t.x)>i||Math.abs(o.y-t.y)>i||Math.abs(o.z-t.z)>i||Math.abs(l.x-n.x)>i||Math.abs(l.y-n.y)>i||Math.abs(l.z-n.z)>i||Math.abs(l.w-n.w)>i}return r=this.renderMode!==ea.Never&&(e===0||this.splatMesh.visibleRegionChanging||a||this.renderMode===ea.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,r}}());ae(this,"render",function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=this.renderer.autoClear;(t=>{for(let n of t.children)if(n.visible)return!0;return!1})(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=e});ae(this,"updateFPS",function(){let e=Mi(),t=0;return function(){if(this.consecutiveRenderFrames>60){const n=Mi();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}}());ae(this,"updateForRendererSizeChanges",function(){const e=new xe,t=new xe;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),n!==void 0&&n===this.camera.isOrthographicCamera&&t.x===e.x&&t.y===e.y||(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}}());ae(this,"timingSensitiveUpdates",function(){let e;return function(){const t=Mi();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}}());ae(this,"updateCameraTransition",function(){let e=new D,t=new D,n=new D;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const r=Math.acos(t.dot(n)),a=(r/(Math.PI/3)*.65+.3)/r*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,a),this.camera.lookAt(e),this.controls.target.copy(e),a>=1&&(this.transitioningCameraTarget=!1)}}}());ae(this,"updateFocusMarker",function(){const e=new xe;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let r=Math.min(i+10*n,1);this.sceneHelper.setFocusMarkerOpacity(r),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(i=t?1:Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let r=Math.max(i-2.5*n,0);this.sceneHelper.setFocusMarkerOpacity(r),r===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}}());ae(this,"updateMeshCursor",function(){const e=[],t=new xe;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}}());ae(this,"updateInfoPanel",function(){const e=new xe;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,r=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,r,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}}());ae(this,"runSplatSort",function(){const e=new Ue,t=[],n=new D(0,0,-1),i=new D(0,0,-1),r=new D,a=new D,o=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,h=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let u=0,d=0,p=!1,A=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),u=i.dot(n),d=a.copy(this.camera.position).sub(r).length(),!(c||this.splatMesh.dynamicMode||o.length!==0||(u<=.99&&(p=!0),d>=1&&(A=!0),p||A)))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:g,shouldSortAll:m}=this.gatherSceneNodesForSort();m=m||h,this.splatRenderCount=g,e.copy(this.camera.matrixWorld).invert();const f=this.perspectiveCamera||this.camera;e.premultiply(f.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let x=Promise.resolve(!0);return this.gpuAcceleratedSort&&(o.length<=1||o.length%2==0)&&(x=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),x.then(()=>{if(o.length===0)if(this.splatMesh.dynamicMode||m)o.push(this.splatRenderCount);else{for(let T of l)if(u<T.angleThreshold){for(let E of T.sortFractions)o.push(Math.floor(this.splatRenderCount*E));break}o.push(this.splatRenderCount)}let S=Math.min(o.shift(),this.splatRenderCount);this.splatSortCount=S,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const v={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:S,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(v.indexesToSort=this.sortWorkerIndexesToSort,v.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(v.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(T=>{this.sortPromiseResolver=T}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(T=>{this.sortWorker.postMessage(T)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:v}),o.length===0&&(r.copy(this.camera.position),n.copy(i)),!0}),x}}());ae(this,"gatherSceneNodesForSort",function(){const e=[];let t=null;const n=new D,i=new D,r=new D,a=new Ue,o=new Ue,l=new Ue,c=new D,h=new D(0,0,-1),u=new D,d=p=>u.copy(p.max).sub(p.min).length();return function(p=!1){this.getRenderDimensions(c);const A=c.y/2/Math.tan(this.camera.fov/2*nc.DEG2RAD),g=Math.atan(c.x/2/A),m=Math.atan(c.y/2/A),f=Math.cos(g),x=Math.cos(m),S=this.splatMesh.getSplatTree();if(S){o.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||o.multiply(this.splatMesh.matrixWorld);let v=0,T=0;for(let _=0;_<S.subTrees.length;_++){const I=S.subTrees[_];a.copy(o),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(_,l),a.multiply(l));const M=I.nodesWithIndexes.length;for(let y=0;y<M;y++){const P=I.nodesWithIndexes[y];if(!P.data||!P.data.indexes||P.data.indexes.length===0)continue;r.copy(P.center).applyMatrix4(a);const F=r.length();r.normalize(),n.copy(r).setX(0).normalize(),i.copy(r).setY(0).normalize();const N=h.dot(i),R=h.dot(n),L=d(P);!p&&(N<f-.6||R<x-.6)&&F>L||(T+=P.data.indexes.length,e[v]=P,P.data.distanceToNode=F,v++)}}e.length=v,e.sort((_,I)=>_.data.distanceToNode<I.data.distanceToNode?-1:1);let E=T*Ye.BytesPerInt;for(let _=0;_<v;_++){const I=e[_],M=I.data.indexes.length,y=M*Ye.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,E-y,M).set(I.data.indexes),E-=y}return{splatRenderCount:T,shouldSortAll:!1}}{const v=this.splatMesh.getSplatCount();if(!t||t.length!==v){t=new Uint32Array(v);for(let T=0;T<v;T++)t[T]=T}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:v,shouldSortAll:!0}}}}());if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new D().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new D().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new D().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,e.selfDrivenMode!==void 0&&e.selfDrivenMode!==null||(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,e.integerBasedSort!==void 0&&e.integerBasedSort!==null||(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,e.sharedMemoryForWorkers!==void 0&&e.sharedMemoryForWorkers!==null||(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||Ti.None,this.webXRMode!==Ti.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||ea.Always,this.sceneRevealMode=e.sceneRevealMode||rr.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||Ui.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,e.enableSIMDInSort!==void 0&&e.enableSIMDInSort!==null||(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,e.inMemoryCompressionLevel!==void 0&&e.inMemoryCompressionLevel!==null||(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,e.optimizeSplatData!==void 0&&e.optimizeSplatData!==null||(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,e.freeIntermediateSplatData!==void 0&&e.freeIntermediateSplatData!==null||(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,la()){const n=Sl();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}e.splatRenderMode!==void 0&&e.splatRenderMode!==null||(e.splatRenderMode=yn.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||Ye.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=Tt(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new Jg,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new D,this.nextCameraTarget=new D,this.mousePosition=new xe,this.mouseDownPosition=new xe,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new fa(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new Xg(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new Qg(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!(!this.dropInMode&&!this.camera),this.usingExternalRenderer=!(!this.dropInMode&&!this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new _t(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new og,this.sceneHelper=new nr(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new xe;this.getRenderDimensions(e),this.perspectiveCamera=new Yt(50,e.x/e.y,.1,1e3),this.orthographicCamera=new ya(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new xe;this.getRenderDimensions(e),this.renderer=new Mc({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new Ke(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===Ti.VR?this.rootElement.appendChild(Gi.createButton(this.renderer,e)):this.webXRMode===Ti.AR&&this.rootElement.appendChild(a0.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===Ti.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new Qr(this.camera,this.renderer.domElement):this.perspectiveControls=new Qr(this.camera,this.renderer.domElement):(this.perspectiveControls=new Qr(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new Qr(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=.75*Math.PI,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===Ti.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Mi()}onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const i=o=>{o.saveState(),o.reset()},r=this.controls,a=e?this.orthographicControls:this.perspectiveControls;i(a),i(r),a.target.copy(r.target),e?Bn.setCameraZoomFromPosition(n,t,r):Bn.setCameraPositionFromZoom(n,t,a),this.controls=a,this.camera.lookAt(this.controls.target)}}adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const t=this.renderer.xr.getCamera().projectionMatrix.elements[0],n=this.camera.projectionMatrix.elements[0];e.x*=n/t}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:Fl(e),i=Bn.isProgressivelyLoadable(n)&&t.progressiveLoad,r=t.showLoadingUI===void 0||t.showLoadingUI===null||t.showLoadingUI;let a=null;r&&(this.loadingSpinner.removeAllTasks(),a=this.loadingSpinner.addTask("Downloading..."));const o=(u,d,p)=>{if(r)if(p===kn)if(u==100)this.loadingSpinner.setMessageForTask(a,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(a,"Downloading splats...");else{const A=d?`: ${d}`:"...";this.loadingSpinner.setMessageForTask(a,`Downloading${A}`)}else p===Fn&&this.loadingSpinner.setMessageForTask(a,"Processing splats...")};let l=!1,c=0;const h=(u,d)=>{r&&((u&&i||d&&!i)&&(this.loadingSpinner.removeTask(a),d||l||this.loadingProgressBar.show()),i&&(d?(l=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(c)))};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,((u,d,p)=>{!i&&t.onProgress&&t.onProgress(0,"0%",Fn);const A={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([u],[A],p,d&&r,r,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",Fn),h(d,p)})}).bind(this),(u,d,p)=>{c=u,o(u,d,p),t.onProgress&&t.onProgress(u,d,p)},(()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()}).bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,r,a,o){const l=this.downloadSplatSceneToSplatBuffer(e,n,r,!1,void 0,t,o),c=Ks(l.abortHandler);return l.then(h=>(this.removeSplatSceneDownloadPromise(l),i(h,!0,!0).then(()=>{c.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(h=>{a&&a(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(l);const u=h instanceof Yr?h:new Error(`Viewer::addSplatScene -> Could not load file ${e}`);c.reject(u)}),this.addSplatSceneDownloadPromise(l),this.setSplatSceneDownloadAndBuildPromise(c.promise),c.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,r,a,o){let l=0,c=!1;const h=[],u=()=>{if(h.length>0&&!c&&!this.isDisposingOrDisposed()){c=!0;const g=h.shift();i(g.splatBuffer,g.firstBuild,g.finalBuild).then(()=>{c=!1,g.firstBuild?p.resolve():g.finalBuild&&(A.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),h.length>0&&on(()=>u())})}},d=this.downloadSplatSceneToSplatBuffer(e,n,r,!0,(g,m)=>{this.isDisposingOrDisposed()||(m||h.length===0||g.getSplatCount()>h[0].splatBuffer.getSplatCount())&&(h.push({splatBuffer:g,firstBuild:l===0,finalBuild:m}),l++,u())},t,o),p=Ks(d.abortHandler),A=Ks();return this.addSplatSceneDownloadPromise(d),this.setSplatSceneDownloadAndBuildPromise(A.promise),d.then(()=>{this.removeSplatSceneDownloadPromise(d)}).catch(g=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(d);const m=g instanceof Yr?g:new Error("Viewer::addSplatScene -> Could not load one or more scenes");p.reject(m),a&&a(m)}),p.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const i=e.length,r=[];let a;t&&(this.loadingSpinner.removeAllTasks(),a=this.loadingSpinner.addTask("Downloading..."));const o=(u,d,p,A)=>{r[u]=d;let g=0;for(let m=0;m<i;m++)g+=r[m]||0;g/=i,p=`${g.toFixed(2)}%`,t&&A===kn&&this.loadingSpinner.setMessageForTask(a,g==100?"Download complete!":`Downloading: ${p}`),n&&n(g,p,A)},l=[],c=[];for(let u=0;u<e.length;u++){const d=e[u],p=d.format!==void 0&&d.format!==null?d.format:Fl(d.path),A=this.downloadSplatSceneToSplatBuffer(d.path,d.splatAlphaRemovalThreshold,o.bind(this,u),!1,void 0,p,d.headers);l.push(A),c.push(A.promise)}const h=new pr((u,d)=>{Promise.all(c).then(p=>{t&&this.loadingSpinner.removeTask(a),n&&n(0,"0%",Fn),this.addSplatBuffers(p,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",Fn),this.clearSplatSceneDownloadAndBuildPromise(),u()})}).catch(p=>{t&&this.loadingSpinner.removeTask(a),this.clearSplatSceneDownloadAndBuildPromise();const A=p instanceof Yr?p:new Error("Viewer::addSplatScenes -> Could not load one or more splat scenes.");d(A)}).finally(()=>{this.removeSplatSceneDownloadPromise(h)})},u=>{for(let d of l)d.abort(u)});return this.addSplatSceneDownloadPromise(h),this.setSplatSceneDownloadAndBuildPromise(h),h}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,r=void 0,a,o){const l=!i&&this.optimizeSplatData;try{if(a===_n.Splat)return Ga.loadFromURL(e,n,i,r,t,this.inMemoryCompressionLevel,l,o);if(a===_n.KSplat)return da.loadFromURL(e,n,i,r,o);if(a===_n.Ply)return ka.loadFromURL(e,n,i,r,t,this.inMemoryCompressionLevel,l,this.sphericalHarmonicsDegree,o)}catch(c){throw c instanceof za?new Error("File type or server does not support progressive loading."):c}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===_n.Splat||e===_n.KSplat||e===_n.Ply}setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),r=e.getMaxSplatCount();this.sortWorker=function(a,o,l,c,h,u=Ye.DefaultSplatSortDistanceMapPrecision){const d=new Worker(URL.createObjectURL(new Blob(["(",s0.toString(),")(self)"],{type:"application/javascript"})));let p="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==";const A=la()?Sl():null;l||o?l?o||A&&A.major<=16&&A.minor<4&&(p="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL"):p=Gl:(p=Gl,A&&A.major<=16&&A.minor<4&&(p="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws="));const g=atob(p),m=new Uint8Array(g.length);for(let f=0;f<g.length;f++)m[f]=g.charCodeAt(f);return d.postMessage({init:{sorterWasmBytes:m.buffer,splatCount:a,useSharedMemory:o,integerBasedSort:c,dynamicMode:h,distanceMapRange:1<<u,Constants:{BytesPerFloat:Ye.BytesPerFloat,BytesPerInt:Ye.BytesPerInt,MemoryPageSize:Ye.MemoryPageSize,MaxScenes:Ye.MaxScenes}}}),d}(r,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=a=>{if(a.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,a.data.splatRenderCount);else{const o=new Uint32Array(a.data.sortedIndexes.buffer,0,a.data.splatRenderCount);this.splatMesh.updateRenderIndexes(o,a.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=a.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(o=>{o()}),this.runAfterNextSort.length=0)}else if(a.data.sortCanceled)this.sortRunning=!1;else if(a.data.sortSetupPhase1Complete){this.logLevel>=Ui.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(a.data.sortedIndexesBuffer,a.data.sortedIndexesOffset,r),this.sortWorkerIndexesToSort=new Uint32Array(a.data.indexesToSortBuffer,a.data.indexesToSortOffset,r),this.sortWorkerPrecomputedDistances=new n(a.data.precomputedDistancesBuffer,a.data.precomputedDistancesOffset,r),this.sortWorkerTransforms=new Float32Array(a.data.transformsBuffer,a.data.transformsOffset,16*Ye.MaxScenes)):(this.sortWorkerIndexesToSort=new Uint32Array(r),this.sortWorkerPrecomputedDistances=new n(r),this.sortWorkerTransforms=new Float32Array(16*Ye.MaxScenes));for(let o=0;o<i;o++)this.sortWorkerIndexesToSort[o]=o;if(this.sortWorker.maxSplatCount=r,this.logLevel>=Ui.Info){console.log("Sorting web worker ready.");const o=this.splatMesh.getSplatDataTextures(),l=o.covariances.size,c=o.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,r)=>{let a;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),a=this.loadingSpinner.addTask("Removing splat scene..."));const o=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(a))},l=h=>{o(),this.splatSceneRemovalPromise=null,h?r(h):i()},c=()=>!!this.isDisposingOrDisposed()&&(l(),!0);n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;const h=[],u=[],d=[];for(let p=0;p<this.splatMesh.scenes.length;p++){let A=!1;for(let g of e)if(g===p){A=!0;break}if(!A){const g=this.splatMesh.scenes[p];h.push(g.splatBuffer),u.push(this.splatMesh.sceneOptions[p]),d.push({position:g.position.clone(),quaternion:g.quaternion.clone(),scale:g.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=rr.Instant,this.createSplatMesh(),this.addSplatBuffers(h,u,!0,!1,!0).then(()=>{c()||(o(),this.splatMesh.scenes.forEach((p,A)=>{p.position.copy(d[A].position),p.quaternion.copy(d[A].quaternion),p.scale.copy(d[A].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{c()?this.splatRenderReady=!0:(n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()}))}))}).catch(p=>{l(p)})})}),this.splatSceneRemovalPromise}start(){if(!this.selfDrivenMode)throw new Error("Cannot start viewer unless it is in self driven mode.");this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),this.initialized&&this.splatRenderReady&&!this.isDisposingOrDisposed()&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&Bn.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};ae(Bn,"setCameraPositionFromZoom",function(){const e=new D;return function(t,n,i){const r=1/(.001*n.zoom);e.copy(i.target).sub(t.position).normalize().multiplyScalar(r).negate(),t.position.copy(i.target).add(e)}}()),ae(Bn,"setCameraZoomFromPosition",function(){const e=new D;return function(t,n,i){const r=e.copy(i.target).sub(n.position).length();t.zoom=1/(.001*r)}}());let ma=Bn;document.getElementById("container");const Vl=new ma({cameraUp:[0,-1,-.6],initialCameraPosition:[-1,-4,6],initialCameraLookAt:[0,4,0]});Vl.addSplatScene("./koala.ksplat",{splatAlphaRemovalThreshold:5,showLoadingUI:!0,position:[0,1,0],rotation:[0,0,0,1],scale:[1.5,1.5,1.5]}).then(()=>{Vl.start()});
