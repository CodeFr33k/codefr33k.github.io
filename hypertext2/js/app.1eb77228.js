(function(e){function t(t){for(var r,c,o=t[0],s=t[1],u=t[2],l=0,f=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"705a102c","chunk-97a60e74":"f794a1f6"}[e]+".js"}var o={};var s={a5c3:function(){return{}}};function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",f.name="ChunkLoadError",f.type=r,f.request=i,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}var p={"chunk-97a60e74":["a5c3"]}[e]||[];return p.forEach((function(e){var n=o[e];if(n)t.push(n);else{var r,a=s[e](),i=fetch(u.p+""+{a5c3:"5f2ef46c8c09aaa5d167"}[e]+".module.wasm");if(a instanceof Promise&&"function"===typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(i),a]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"===typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(i,a);else{var c=i.then((function(e){return e.arrayBuffer()}));r=c.then((function(e){return WebAssembly.instantiate(e,a)}))}t.push(o[e]=r.then((function(t){return u.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/hypertext2/",u.oe=function(e){throw console.error(e),e},u.w={};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=f;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"03fd":function(e,t,n){"use strict";var r=n("bc49"),a=n.n(r);a.a},"049e":function(e,t,n){"use strict";var r=n("78cf"),a=n.n(r);a.a},"22c6":function(e,t,n){},"3b35":function(e,t,n){},"78cf":function(e,t,n){},bc49:function(e,t,n){},cc0d:function(e,t,n){"use strict";var r=n("3b35"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-component"},[0==e.store.lines.length?n("div",[n("label",{staticClass:"file-upload-button",attrs:{for:"file-upload"}},[e._v(" Open .caml file ")]),n("input",{attrs:{id:"file-upload",type:"file",accept:".caml",multiple:""},on:{change:e.readFile}})]):n("div",[n("Lines",{attrs:{lines:e.store.lines}}),n("JsButton"),n("ReloadButton")],1)])},i=[],c=n("b85c"),o=(n("96cf"),n("1da1")),s=n("d4ec"),u=n("bee2"),l=n("262e"),f=n("2caf"),d=n("9ab4"),p=n("3172"),h=n("daf9"),v=n("60a3"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lines-component"},e._l(e.lines,(function(t){return n("div",{staticClass:"line",domProps:{innerHTML:e._s(t)}})})),0)},m=[],y=function(e){Object(l["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(v["c"]);Object(d["b"])([Object(v["b"])()],y.prototype,"lines",void 0),y=Object(d["b"])([p["a"],v["a"]],y);var j=y,g=j,O=(n("dcf6"),n("2877")),w=Object(O["a"])(g,b,m,!1,null,"c5756038",null),k=w.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"js-button-component"},[n("label",{staticClass:"js-upload-button",attrs:{for:"js-upload"}},[e._v("Js")]),n("input",{attrs:{id:"js-upload",type:"file",accept:".js",multiple:""},on:{change:e.readJavascriptFile}})])},R=[],_=(n("99af"),n("d81d"),n("13d5"),n("25f0"),n("466d"),n("5319"),n("3835")),C=n("2909"),P=function(){function e(){Object(s["a"])(this,e),this.lines=[],this.readlines=[],this.readline=""}return Object(u["a"])(e,[{key:"read",value:function(e){if("\n"===e)return this.readlines.push(this.readline),void(this.readline="");this.readline+=e}},{key:"end",value:function(){this.lines.replace(this.readlines),this.readlines=[]}}]),e}();Object(d["b"])([h["e"]],P.prototype,"lines",void 0),Object(d["b"])([h["b"].bound],P.prototype,"read",null),Object(d["b"])([h["b"].bound],P.prototype,"end",null);var S=P,F=(n("2ca0"),function e(){Object(s["a"])(this,e),this.lines=[],this.annotations=[],this.images=[],this.userData=[]}),A=F;n("1276");function D(e){return E.apply(this,arguments)}function E(){return E=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=new FileReader;n.onload=function(t){var n=t.target.result;e(n)},n.readAsText(t)})));case 1:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function H(e){return e.split(".").pop()}function J(e){var t=new Function('"use strict";return ('+e+")")();return t}var $=/(file|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi;function T(e){var t=e.match($);return t||[]}function W(e){var t=e.match(/\s*(.+) = (.+)/);return t?{key:t[1],value:t[2]}:null}function B(e){var t=e.match(/\s*(.+)/);return t?t[1]:null}function M(e){var t=e.reduce((function(e,t){!e.record&&t&&(e.record=new A,e.records.push(e.record)),e.record&&e.record.lines.push(t);var n=t.match(/\(`(.+)\)/),r=t;if(n)e.isReadingData=!0,r=n[1];else{if(t.startsWith("(`"))return e.isReadingData=!0,e;if(t.startsWith(")"))return e.isReadingData=!1,e}if(e.isReadingData){var a=W(r),i=B(r);if(a){if(e.record.annotations.push({key:a.key,value:a.value}),"img"===a.key){var c=T(a.value);c.length>0&&e.record.images.push(c[0])}}else i&&e.record.annotations.push(i)}return n&&(e.isReadingData=!1),t||e.isReadingData||(e.record=void 0,e.isReadingDate=!1),e}),{records:[],record:void 0,isReadingData:!1});return t.records.reverse()}function L(){var e=Object(h["e"])([]),t={load:function(t){var n=M(t);e.replace(e.concat(n))}};return new Proxy(e,{set:function(e,t,n){return e[t]=n,!0},has:function(e,n){return n in t||n in e},get:function(e,n){return"string"===typeof n&&n in t?t[n].bind(e):e[n]}})}var N={create:L};n("498a");function q(e){return K.apply(this,arguments)}function K(){return K=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.text()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}var U=function(){function e(t){Object(s["a"])(this,e),this.text="",this.text=t}return Object(u["a"])(e,[{key:"toFiles",value:function(){return this.text.trim().split("\n")}}],[{key:"fetch",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q(n);case 2:return r=t.sent,t.abrupt("return",new e(r));case 4:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()}]),e}(),V=function(){function e(){var t=this;Object(s["a"])(this,e),this.title=h["e"].box("App"),this.reducers=[],this.htmls=[],this.reader=new S,this.records=N.create(),this.disposer=Object(h["f"])(this.reader.lines,(function(e){t.records.load(e.object)})),this.handler={js:this.loadJavascript.bind(this),caml:this.loadCaml.bind(this),html:this.loadHtml.bind(this)}}return Object(u["a"])(e,[{key:"close",value:function(){this.disposer()}},{key:"loadCaml",value:function(e){for(var t=0;t<e.length;t++){var n=e.substr(t,1);this.reader.read(n)}this.reader.end()}},{key:"loadJavascript",value:function(e){var t=J(e);this.addReducer(t)}},{key:"loadHtml",value:function(e,t){this.htmls.push(t)}},{key:"addReducer",value:function(e){this.reducers.push(e)}},{key:"loadManifest",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,o,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.match(/[^\/]+$/),n&&this.title.set(n[0]),e.next=4,U.fetch(t);case 4:r=e.sent,a=r.toFiles(),i=Object(c["a"])(a);try{for(i.s();!(o=i.n()).done;)s=o.value,u=t.replace(/[^\/]+$/,s),this.loadFile(u)}catch(l){i.e(l)}finally{i.f()}case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"loadFile",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=H(t),e.next=3,q(t);case 3:r=e.sent,n&&this.handler[n](r,t);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"currentRecords",get:function(){var e,t=Object(C["a"])(this.records),n=Object(c["a"])(this.reducers);try{for(n.s();!(e=n.n()).done;){var r=e.value;t=r(t)}}catch(a){n.e(a)}finally{n.f()}return t}},{key:"lines",get:function(){var e,t=[],n=this.records.map((function(e){return e.userData=[],e})),r=Object(c["a"])(this.reducers);try{for(r.s();!(e=r.n()).done;){var a=e.value;n=a(n)}}catch(O){r.e(O)}finally{r.f()}var i,o=Object(c["a"])(n);try{for(o.s();!(i=o.n()).done;){var s,u=i.value,l=u.lines.map((function(e){var t=T(e);return t.reduce((function(e,t){return e.replace(t,'<a target="blank" rel="noopener noreferrer" '+"href=".concat(t,">").concat(t,"</a>"))}),e)})),f=Object(c["a"])(this.htmls.entries());try{for(f.s();!(s=f.n()).done;){var d=Object(_["a"])(s.value,2),p=d[0],h=d[1];l.unshift("<iframe "+':key="'.concat(p,'" ')+'src="'.concat(h,'" ')+"></iframe>")}}catch(O){f.e(O)}finally{f.f()}var v,b=Object(c["a"])(u.images);try{for(b.s();!(v=b.n()).done;){var m=v.value;l.unshift('<img width="400px" '+"src=".concat(m," />"))}}catch(O){b.e(O)}finally{b.f()}if(t=t.concat(l),0!=u.userData.length){t[t.length-1]="@userData (`";var y,j=Object(c["a"])(u.userData);try{for(j.s();!(y=j.n()).done;){var g=y.value;t.push(g.toString())}}catch(O){j.e(O)}finally{j.f()}t.push(")"),t.push("")}}}catch(O){o.e(O)}finally{o.f()}return t}}]),e}();Object(d["b"])([h["e"]],V.prototype,"title",void 0),Object(d["b"])([h["e"]],V.prototype,"reducers",void 0),Object(d["b"])([h["e"]],V.prototype,"htmls",void 0),Object(d["b"])([h["c"]],V.prototype,"currentRecords",null),Object(d["b"])([h["c"]],V.prototype,"lines",null);var z=new V,G=z,I=function(e){Object(l["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"readJavascriptFile",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Object(c["a"])(t.target.files),e.prev=1,n.s();case 3:if((r=n.n()).done){e.next=11;break}return a=r.value,e.next=7,D(a);case 7:i=e.sent,G.loadJavascript(i);case 9:e.next=3;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),n.e(e.t0);case 16:return e.prev=16,n.f(),e.finish(16);case 19:t.target.value="";case 21:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(v["c"]);I=Object(d["b"])([p["a"],Object(v["a"])({components:{}})],I);var Q=I,X=Q,Y=(n("cc0d"),Object(O["a"])(X,x,R,!1,null,"53854c20",null)),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"html-button-component"},[n("label",{staticClass:"html-upload-button",attrs:{for:"html-upload"}},[e._v("Html")]),n("input",{attrs:{id:"html-upload",type:"file",accept:".html",multiple:""},on:{change:e.readHtmlFile}})])},te=[],ne=function(e){Object(l["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"readHtmlFile",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Object(c["a"])(t.target.files),e.prev=1,n.s();case 3:if((r=n.n()).done){e.next=11;break}return a=r.value,e.next=7,D(a);case 7:i=e.sent,G.loadHtml(i);case 9:e.next=3;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),n.e(e.t0);case 16:return e.prev=16,n.f(),e.finish(16);case 19:t.target.value="";case 21:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(v["c"]);ne=Object(d["b"])([p["a"],Object(v["a"])({components:{}})],ne);var re=ne,ae=re,ie=(n("03fd"),Object(O["a"])(ae,ee,te,!1,null,"1d2493d5",null)),ce=ie.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reload-button-component"},[n("button",{staticClass:"reload-button",on:{click:e.reload}},[e._v("Reload")])])},se=[],ue=function(e){Object(l["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"reload",value:function(){G.addReducer((function(e){return e}))}}]),n}(v["c"]);ue=Object(d["b"])([p["a"],Object(v["a"])({components:{}})],ue);var le=ue,fe=le,de=(n("049e"),Object(O["a"])(fe,oe,se,!1,null,"6f8923ee",null)),pe=de.exports,he=function(e){Object(l["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.store=G,e}return Object(u["a"])(n,[{key:"readFile",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Object(c["a"])(t.target.files),e.prev=1,n.s();case 3:if((r=n.n()).done){e.next=11;break}return a=r.value,e.next=7,D(a);case 7:i=e.sent,G.loadCaml(i);case 9:e.next=3;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),n.e(e.t0);case 16:return e.prev=16,n.f(),e.finish(16);case 19:case 20:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){this.disposer=Object(h["f"])(this.store.title,(function(e){document.title=e.object})),document.title=G.title}},{key:"destroyed",value:function(){this.disposer()}}]),n}(v["c"]);he=Object(d["b"])([p["a"],Object(v["a"])({components:{JsButton:Z,HtmlButton:ce,Lines:k,ReloadButton:pe}})],he);var ve=he,be=ve,me=(n("cf25"),Object(O["a"])(be,a,i,!1,null,null,null)),ye=me.exports,je=n("9483");Object(je["a"])("".concat("/hypertext2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ge=n("8c4f"),Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},we=[],ke={name:"Home",components:{}},xe=ke,Re=Object(O["a"])(xe,Oe,we,!1,null,null,null),_e=Re.exports;r["a"].use(ge["a"]);var Ce=[{path:"/",name:"Home",component:_e},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Pe=new ge["a"]({mode:"history",base:"/hypertext2/",routes:Ce}),Se=Pe,Fe=function(){function e(t,n){Object(s["a"])(this,e),this.key="",this.value="",this.key=t,this.value=n}return Object(u["a"])(e,[{key:"toString",value:function(){return"".concat(this.key," = ").concat(this.value)}}]),e}(),Ae=(n("b0c0"),function(){function e(t){Object(s["a"])(this,e),this.name="",this.name=t}return Object(u["a"])(e,[{key:"toString",value:function(){return this.name}}]),e}());window.store=G,window.KeyValue=Fe,window.Tag=Ae;var De=new URLSearchParams(window.location.search),Ee=De.get("manifest");Ee&&G.loadManifest(Ee),n.e("chunk-97a60e74").then(n.bind(null,"eb6b")).then((function(e){})).catch(console.error),r["a"].config.productionTip=!1,new r["a"]({router:Se,render:function(e){return e(ye)}}).$mount("#app")},cf25:function(e,t,n){"use strict";var r=n("fea6"),a=n.n(r);a.a},dcf6:function(e,t,n){"use strict";var r=n("22c6"),a=n.n(r);a.a},fea6:function(e,t,n){}});
//# sourceMappingURL=app.1eb77228.js.map