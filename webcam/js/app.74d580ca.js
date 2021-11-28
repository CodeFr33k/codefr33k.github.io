(function(e){function t(t){for(var a,o,c=t[0],s=t[1],u=t[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/webcam/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1:function(e,t){},"1fbc":function(e,t,n){"use strict";var a=n("92b7"),r=n.n(a);r.a},2:function(e,t){},3:function(e,t){},"395c":function(e,t,n){"use strict";var a=n("3fea"),r=n.n(a);r.a},"3fea":function(e,t,n){},"92b7":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Face")],1)},i=[],o=n("d4ec"),c=n("262e"),s=n("2caf"),u=n("9ab4"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"face-box"},[n("video",{ref:"video",staticClass:"video",attrs:{autoplay:"",muted:"",playsinline:""},domProps:{muted:!0},on:{loadedmetadata:e.onPlay}}),n("canvas",{ref:"canvas",staticClass:"canvas"})])},f=[],d=(n("96cf"),n("1da1")),p=n("bee2"),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(o["a"])(this,e),this.x=t,this.y=n}return Object(p["a"])(e,null,[{key:"from",value:function(t){return new e(t.x,t.y)}}]),e}();function v(e,t){var n=new h(e.x-t.x,e.y-t.y),a=Math.atan2(n.y,n.x),r=180*a/Math.PI;return r}function b(e,t,n){var a=t.x-e.x,r=n.x-e.x;if(!a)return 0;var i=r/a,o=120*i-60;return o}var m=n("daf9"),w=n("ab39"),y=function(){function e(){Object(o["a"])(this,e);var t=new w["a"]([],{width:100,height:100});this.faceData=Object(m["e"])({landmarks:t})}return Object(p["a"])(e,[{key:"updateFaceData",value:function(e){this.faceData.landmarks=e.landmarks}},{key:"landmarks",get:function(){return this.faceData.landmarks}},{key:"positions",get:function(){return this.landmarks.positions}},{key:"pitch",get:function(){if(!this.positions[0]||!this.positions[36])return 0;var e=h.from(this.positions[36]),t=h.from(this.positions[0]);return v(e,t)}},{key:"yaw",get:function(){if(!this.positions[27]||!this.positions[39]||!this.positions[42])return 0;var e=h.from(this.positions[39]),t=h.from(this.positions[42]),n=h.from(this.positions[27]);return b(e,t,n)}}]),e}();Object(u["c"])([m["e"]],y.prototype,"faceData",void 0),Object(u["c"])([m["b"]],y.prototype,"updateFaceData",null),Object(u["c"])([m["c"]],y.prototype,"landmarks",null),Object(u["c"])([m["c"]],y.prototype,"positions",null),Object(u["c"])([m["c"]],y.prototype,"pitch",null),Object(u["c"])([m["c"]],y.prototype,"yaw",null);var O,j,g,k,x,M=new y,P=n("60a3"),D=(O=Object(P["a"])(),O(j=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(p["a"])(n,[{key:"mounted",value:function(){this.start()}},{key:"start",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w["g"].tinyFaceDetector.load("/webcam/");case 2:return e.next=4,w["e"]("/webcam/");case 4:return e.next=6,navigator.mediaDevices.getUserMedia({video:{}});case 6:t=e.sent,this.$refs.video.srcObject=t;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"onPlay",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,i,o,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$refs.video.paused&&!this.$refs.video.ended&&w["g"].tinyFaceDetector.params){e.next=2;break}return e.abrupt("return",setTimeout((function(){return c.onPlay()})));case 2:return t=512,n=.5,a=new w["b"]({inputSize:t,scoreThreshold:n}),Date.now(),e.next=8,w["c"](this.$refs.video,a).withFaceLandmarks();case 8:r=e.sent,r&&(i=w["f"](this.$refs.canvas,this.$refs.video,!0),o=w["h"](r,i),new w["d"].DrawFaceLandmarks(o.landmarks,{lineColor:"rgb(255,255,255)",pointColor:"rgb(255,255,255)"}).draw(this.$refs.canvas),M.updateFaceData({landmarks:o.landmarks})),setTimeout((function(){return c.onPlay()}));case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(P["b"]))||j),F=D,$=(n("395c"),n("2877")),_=Object($["a"])(F,l,f,!1,null,null,null),C=_.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"faceBox",staticClass:"face-mask-box"})},E=[],R=(n("99af"),n("d3b7"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("257e")),T=n("ade3"),A=n("5a89"),z=n("30fa"),I=n("4721"),L=n("34ad"),B=(g=Object(P["a"])(),g((x=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;Object(o["a"])(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),Object(T["a"])(Object(R["a"])(e),"store",M),e}return Object(p["a"])(n,[{key:"mounted",value:function(){var e=this,t=new A["hb"],n=new A["X"](75,window.innerWidth/window.innerHeight,.1,2500);n.position.set(0,400,1400);var a=new A["L"](new A["mb"](4,8,8),new A["M"]({color:16777215}));t.add(a);var r=new A["a"](13421772);t.add(r);var i=new A["Y"](16777215,2,800);a.add(i);var o=new A["zb"]({antialias:!0});o.setSize(window.innerWidth,window.innerHeight),o.outputEncoding=A["Ab"];var c=new z["a"](o,{});this.$refs.faceBox.appendChild(o.domElement);var s=new I["a"](n,o.domElement);s.minDistance=200,s.maxDistance=2e3;var u=new L["a"];u.load("box.glb",(function(r){t.add(r.scene),n.lookAt(r.scene.position);for(var i=r.scene.children[2],o=new Uint8Array(2),s=0;s<=o.length;s++)o[s]=s/o.length*256;var u=new A["k"](o,o.length,1,A["G"]);u.minFilter=A["R"],u.magFilter=A["R"],u.generateMipmaps=!1;var l=new A["P"]({color:new A["j"](16711680),gradientMap:u});i.traverse((function(e){e.isMesh&&(e.material=l,e.material.skinning=!0)})),window.cube=i;var f=function r(){var o=25e-5*Date.now();a.position.x=300*Math.sin(7*o),a.position.y=400*Math.cos(5*o),a.position.z=300*Math.cos(3*o),requestAnimationFrame(r);var s=e.store.yaw*Math.PI/360,u=e.store.pitch*Math.PI/360;i.children[0].children[0].rotation.y=s,i.children[0].children[0].rotation.x=u,c.render(t,n)};f()}),void 0,(function(e){console.error(e)}))}}]),n}(P["b"]),k=x))||k),H=B,J=(n("1fbc"),Object($["a"])(H,S,E,!1,null,null,null)),U=J.exports,W=n("3172"),q=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.store=M,e}return n}(P["b"]);q=Object(u["c"])([W["a"],Object(P["a"])({components:{Face:C,FaceMask:U}})],q);var G=q,X=G,Y=(n("cf25"),Object($["a"])(X,r,i,!1,null,null,null)),K=Y.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(K)}}).$mount("#app")},cf25:function(e,t,n){"use strict";var a=n("fea6"),r=n.n(a);r.a},fea6:function(e,t,n){}});
//# sourceMappingURL=app.74d580ca.js.map