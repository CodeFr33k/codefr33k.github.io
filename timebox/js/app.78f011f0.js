(function(e){function t(t){for(var n,c,s=t[0],o=t[1],u=t[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var o=r[s];0!==a[o]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=o;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"428a":function(e,t,r){"use strict";var n=r("b78b"),a=r.n(n);a.a},"97d1":function(e,t,r){"use strict";var n=r("a203"),a=r.n(n);a.a},a203:function(e,t,r){},b78b:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("d3b7"),r("ac1f"),r("3ca3"),r("841c"),r("ddb0"),r("2b3d"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("DaysSinceLastRecord",{attrs:{date:e.now,records:e.store.records}}),r("div",{staticClass:"year-box"},e._l(e.days,(function(t,n){return r("Day",{key:n,attrs:{records:t.records,year:e.year,day:n+1}})})),1)],1)},i=[],c=(r("7db0"),r("466d"),r("b85c")),s=r("d4ec"),o=r("bee2"),u=r("262e"),l=r("2caf"),d=r("9ab4"),f=(r("5319"),r("2909")),h=(r("96cf"),r("1da1")),v=r("daf9"),p=function(){function e(){Object(s["a"])(this,e),this.lines=[],this.readlines=[],this.readline=""}return Object(o["a"])(e,[{key:"read",value:function(e){if("\n"===e)return this.readlines.push(this.readline),void(this.readline="");this.readline+=e}},{key:"end",value:function(){this.lines.replace(this.readlines),this.readlines=[]}}]),e}();Object(d["a"])([v["c"]],p.prototype,"lines",void 0),Object(d["a"])([v["a"].bound],p.prototype,"read",null),Object(d["a"])([v["a"].bound],p.prototype,"end",null);var b=p,y=(r("99af"),r("13d5"),r("2ca0"),function e(){Object(s["a"])(this,e),this.lines=[],this.annotations=[],this.images=[],this.userData=[]}),j=y;r("1276");function O(e){return e.split(".").pop()}function g(e){var t=new Function('"use strict";return ('+e+")")();return t}var m=/(file|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/gi;function w(e){var t=e.match(m);return t||[]}function k(e){var t=e.match(/\s*(.+) = (.+)/);return t?{key:t[1],value:t[2]}:null}function x(e){var t=e.match(/\s*(.+)/);return t?t[1]:null}function R(e){var t=e.reduce((function(e,t){!e.record&&t&&(e.record=new j,e.records.push(e.record)),e.record&&e.record.lines.push(t);var r=t.match(/\(`(.+)\)/),n=t;if(r)e.isReadingData=!0,n=r[1];else{if(t.startsWith("(`"))return e.isReadingData=!0,e;if(t.startsWith(")"))return e.isReadingData=!1,e}if(e.isReadingData){var a=k(n),i=x(n);if(a){if(e.record.annotations.push({key:a.key,value:a.value}),"img"===a.key){var c=w(a.value);c.length>0&&e.record.images.push(c[0])}}else i&&e.record.annotations.push(i)}return r&&(e.isReadingData=!1),t||e.isReadingData||(e.record=void 0,e.isReadingDate=!1),e}),{records:[],record:void 0,isReadingData:!1});return t.records.reverse()}function _(){var e=Object(v["c"])([]),t={load:function(t){var r=R(t);e.replace(e.concat(r))}};return new Proxy(e,{set:function(e,t,r){return e[t]=r,!0},has:function(e,r){return r in t||r in e},get:function(e,r){return"string"===typeof r&&r in t?t[r].bind(e):e[r]}})}var D={create:_};r("498a");function S(e){return C.apply(this,arguments)}function C(){return C=Object(h["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.text()}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}var F=function(){function e(t){Object(s["a"])(this,e),this.text="",this.text=t}return Object(o["a"])(e,[{key:"toFiles",value:function(){return this.text.trim().split("\n")}}],[{key:"fetch",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S(r);case 2:return n=t.sent,t.abrupt("return",new e(n));case 4:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()}]),e}(),M=function(){function e(){var t=this;Object(s["a"])(this,e),this.title=v["c"].box("App"),this.reducers=[],this.htmls=[],this.reader=new b,this.records=D.create(),this.disposer=Object(v["d"])(this.reader.lines,(function(e){t.records.load(e.object)})),this.handler={js:this.loadJavascript.bind(this),caml:this.loadCaml.bind(this),html:this.loadHtml.bind(this)}}return Object(o["a"])(e,[{key:"close",value:function(){this.disposer()}},{key:"loadCaml",value:function(e){for(var t=0;t<e.length;t++){var r=e.substr(t,1);this.reader.read(r)}this.reader.end()}},{key:"loadJavascript",value:function(e){var t=g(e);this.addReducer(t)}},{key:"loadHtml",value:function(e){var t="data:text/html;charset=utf-8,"+escape(e);this.htmls.push(t)}},{key:"addReducer",value:function(e){this.reducers.push(e)}},{key:"loadManifest",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.fetch(t);case 2:r=e.sent,n=r.toFiles(),this.title.set(n[0]),a=Object(c["a"])(n);try{for(a.s();!(i=a.n()).done;)s=i.value,o=t.replace(/[^\\/]+$/,s),this.loadFile(o)}catch(u){a.e(u)}finally{a.f()}case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"loadFile",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=O(t),e.next=3,S(t);case 3:n=e.sent,r&&this.handler[r](n);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"currentRecords",get:function(){var e,t=Object(f["a"])(this.records),r=Object(c["a"])(this.reducers);try{for(r.s();!(e=r.n()).done;){var n=e.value;t=n(t)}}catch(a){r.e(a)}finally{r.f()}return t}}]),e}();Object(d["a"])([v["c"]],M.prototype,"title",void 0),Object(d["a"])([v["c"]],M.prototype,"reducers",void 0),Object(d["a"])([v["c"]],M.prototype,"htmls",void 0),Object(d["a"])([v["b"]],M.prototype,"currentRecords",null);var P=new M,T=P,$=function(e,t){var r=("000"+String(e)).substr(-4),n=("00"+String(t)).substr(-3);return"".concat(r,"-").concat(n)},E=function(e,t,r){var n=Date.UTC(e,t,r)-Date.UTC(e,0,0);return n/24/60/60/1e3},L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"day-box",class:{"has-records":e.records.length,active:e.isToday}},[r("div",{staticClass:"day"},[e._v(e._s(e.day))]),r("div",{staticClass:"duration"},[e._v(e._s(e.duration))])])},Y=[],I=r("60a3"),J=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return Object(o["a"])(r,[{key:"duration",get:function(){var e,t=0,r=Object(c["a"])(this.records);try{for(r.s();!(e=r.n()).done;){var n=e.value,a=n.annotations.find((function(e){return"duration"===e.key}));a&&(t+=Math.ceil(parseInt(a.value)/3600))}}catch(i){r.e(i)}finally{r.f()}return t}},{key:"isToday",get:function(){var e=new Date;if(e.getFullYear()!==this.year)return!1;var t=E(e.getFullYear(),e.getMonth(),e.getDate());return t===this.day}}]),r}(I["c"]);Object(d["a"])([Object(I["b"])()],J.prototype,"records",void 0),Object(d["a"])([Object(I["b"])()],J.prototype,"year",void 0),Object(d["a"])([Object(I["b"])()],J.prototype,"day",void 0),J=Object(d["a"])([I["a"]],J);var U=J,A=U,H=(r("97d1"),r("2877")),W=Object(H["a"])(A,L,Y,!1,null,null,null),q=W.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"days-since-last-record-box"},[e._m(0),r("div",{staticClass:"days-since-last-record"},[e._v(e._s(e.daysSinceLastRecord))])])},B=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text"},[e._v("Days since "),r("br"),e._v(" last record")])}],G=function(e){var t=/(\d{4})-(\d{3})/.exec(e);if(!t)throw new Error;var r=parseInt(t[1]),n=parseInt(t[2]),a=(parseInt(t[3]),new Date(Date.UTC(r,0,1)));return a.setSeconds(24*(n-1)*60*60),a.getTime()/1e3},K=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return Object(o["a"])(r,[{key:"daysSinceLastRecord",get:function(){var e,t="1970-001",r=Object(c["a"])(this.records);try{for(r.s();!(e=r.n()).done;){var n=e.value,a=n.annotations.find((function(e){return"date"===e.key}));if(a){var i=a.value.match(/^\d{4}-(\d{3})/);if(i){var s=G(a.value),o=G(t);s>o&&(t=a.value)}}}}catch(f){r.e(f)}finally{r.f()}var u=G(t),l=G(this.date),d=l-u;return d/60/60/24}}]),r}(I["c"]);Object(d["a"])([Object(I["b"])()],K.prototype,"records",void 0),Object(d["a"])([Object(I["b"])()],K.prototype,"date",void 0),K=Object(d["a"])([I["a"]],K);var N=K,Q=N,V=(r("428a"),Object(H["a"])(Q,z,B,!1,null,null,null)),X=V.exports,Z=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(s["a"])(this,r),e=t.apply(this,arguments),e.store=T,e.year=(new Date).getFullYear(),e}return Object(o["a"])(r,[{key:"now",get:function(){var e=new Date,t=E(e.getFullYear(),e.getMonth(),e.getDate());return $(e.getFullYear(),t)}},{key:"days",get:function(){var e,t=[],r=Object(c["a"])(Array(360).keys());try{for(r.s();!(e=r.n()).done;){e.value;t.push({records:[]})}}catch(l){r.e(l)}finally{r.f()}var n,a=Object(c["a"])(this.store.records);try{for(a.s();!(n=a.n()).done;){var i=n.value,s=i.annotations.find((function(e){return"date"===e.key}));if(s){var o=s.value.match(/^\d{4}-(\d{3})/);if(o){var u=o[1];t[u-1].records.push(i)}}}}catch(l){a.e(l)}finally{a.f()}return t}}]),r}(I["c"]);Z=Object(d["a"])([Object(I["a"])({components:{Day:q,DaysSinceLastRecord:X}})],Z);var ee=Z,te=ee,re=(r("cf25"),Object(H["a"])(te,a,i,!1,null,null,null)),ne=re.exports,ae=new URLSearchParams(window.location.search),ie=ae.get("manifest");ie&&T.loadManifest(ie),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(ne)}}).$mount("#app")},cf25:function(e,t,r){"use strict";var n=r("fea6"),a=r.n(n);a.a},fea6:function(e,t,r){}});
//# sourceMappingURL=app.78f011f0.js.map