(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(e,t,n){var content=n(159);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(74).default)("0fa464c8",content,!0,{sourceMap:!1})},150:function(e,t,n){var content=n(161);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(74).default)("6759f5ab",content,!0,{sourceMap:!1})},158:function(e,t,n){"use strict";var r=n(149);n.n(r).a},159:function(e,t,n){(t=n(73)(!1)).push([e.i,".lines-component[data-v-5a6b309e]{padding:15px 15px 0}.line-box[data-v-5a6b309e]{position:relative;height:26px;border:1px solid rgba(0,0,0,.25);border-radius:6px;margin-bottom:15px;font-size:20px}.line[data-v-5a6b309e]{position:absolute;left:0;top:50%;transform:translateY(-50%);padding:0 15px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:pre;box-sizing:border-box}",""]),e.exports=t},160:function(e,t,n){"use strict";var r=n(150);n.n(r).a},161:function(e,t,n){(t=n(73)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Cousine&display=swap);"]),t.push([e.i,"body{font-family:Cousine,monospace}",""]),e.exports=t},163:function(e,t,n){"use strict";n.r(t);n(27),n(28),n(13),n(151);var r=n(147),o=n(154),c=n(155),f=n(152),l=n(19),d=n(156),h=(n(32),n(42),n(30),n(44),n(43),n(33),n(72),n(153)),y=n(148),v=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},m=function(){function e(){Object(r.a)(this,e),this.lines=[],this.readlines=[],this.readline=""}return Object(h.a)(e,[{key:"read",value:function(e){if("\n"===e)return this.readlines.push(this.readline),void(this.readline="");this.readline+=e}},{key:"end",value:function(){this.lines.replace(this.readlines),this.readlines=[]}}]),e}();v([y.e],m.prototype,"lines",void 0),v([y.b.bound],m.prototype,"read",null),v([y.b.bound],m.prototype,"end",null);var j=m,O=(n(58),n(59),n(105),function e(){Object(r.a)(this,e),this.lines=[],this.annotations=[]});n(31),n(5),n(103);var R=/(file|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi;function w(text){return text.match(R)||[]}var x={create:function(){var e=Object(y.e)([]),t={load:function(t){var n=function(e){return e.reduce((function(e,line){if(!e.record&&line&&(e.record=new O,e.records.push(e.record)),e.record&&e.record.lines.push(line),line.startsWith("(`"))return e.isReadingData=!0,e;if(line.startsWith(")"))return e.isReadingData=!1,e;if(e.isReadingData&&line.includes("img = ")){var t=w(line);t.length>0&&e.record.annotations.push({value:t[0],key:"img"})}return line||e.isReadingData||(e.record=void 0,e.isReadingDate=!1),e}),{records:[],record:void 0,isReadingData:!1}).records.reverse()}(t);e.replace(e.concat(n))}};return new Proxy(e,{set:function(e,t,n){return e[t]=n,!0},has:function(e,n){return n in t||n in e},get:function(e,n){return"string"==typeof n&&n in t?t[n].bind(e):e[n]}})}};function k(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e))){var i=0,t=function(){};return{s:t,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,o=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,r=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw r}}}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var P=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},C=function(){function e(){var t=this;Object(r.a)(this,e),this.reducers=[],this.reader=new j,this.records=x.create(),this.disposer=Object(y.f)(this.reader.lines,(function(e){t.records.load(e.object)}))}return Object(h.a)(e,[{key:"close",value:function(){this.disposer()}},{key:"readText",value:function(text){for(var i=0;i<text.length;i++){var e=text.substr(i,1);this.reader.read(e)}this.reader.end()}},{key:"addReducer",value:function(e){this.reducers.push(e)}},{key:"currentRecords",get:function(){var e,t=this.records,n=k(this.reducers);try{for(n.s();!(e=n.n()).done;){t=(0,e.value)(t)}}catch(e){n.e(e)}finally{n.f()}return t}},{key:"lines",get:function(){var e,t=[],n=k(this.currentRecords.reverse());try{for(n.s();!(e=n.n()).done;){var r,o=e.value,c=o.lines.map((function(line){return w(line).reduce((function(line,e){return line.replace(e,'<a target="blank" rel="noopener noreferrer" '+"href=".concat(e,">").concat(e,"</a>"))}),line)})),f=k(o.annotations);try{for(f.s();!(r=f.n()).done;){var l=r.value;"img"===l.key&&c.unshift('<img width="400px" '+"src=".concat(l.value," />"))}}catch(e){f.e(e)}finally{f.f()}t=t.concat(c)}}catch(e){n.e(e)}finally{n.f()}return t}}]),e}();P([y.e],C.prototype,"reducers",void 0),P([y.c],C.prototype,"currentRecords",null),P([y.c],C.prototype,"lines",null);var S=new C,A=n(164);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},E=function(e){Object(o.a)(n,e);var t=T(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return n}(d.c);_([Object(d.b)()],E.prototype,"lines",void 0);var F=E=_([A.a,d.a],E),M=(n(158),n(25)),z=Object(M.a)(F,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lines-component"},e._l(e.lines,(function(line){return n("div",{staticClass:"line-box"},[n("div",{staticClass:"line",domProps:{innerHTML:e._s(line)}})])})),0)}),[],!1,null,"5a6b309e",null).exports;function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var L=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c};S.readText("Day\n- show 360 days of the year\n- highlight dates\n(`\n    demo = https://codefr33k.github.io/day/?manifest=https://codefr33k.github.io/docs/codefr33k.txt\n    code = https://github.com/CodeFr33k/day\n    @app\n    date = 2020-224\n)\n\nSearch\n- show list of search engines\n- choose search engine using Up-Down key\n- enter search words and press Enter key\n(`\n    demo = https://codefr33k.github.io/search/?manifest=https://codefr33k.github.io/docs/search.txt\n    code = https://github.com/CodeFr33k/search\n    data = https://codefr33k.github.io/docs/search.caml\n    @app\n    date = 2020-224\n)\n\nRandomizer Demo\n(`\n    demo = https://codefr33k.github.io/hypertext2/?manifest=https://codefr33k.github.io/docs/hypertext2.txt&interval=5\n    code = https://github.com/CodeFr33k/hypertext2\n    @app\n    date = 2020-230\n)\n\nTime\n- show 12 hour local time\n- show 24 hour UTC time\n(`\n    demo = https://codefr33k.github.io/time/ \n    code = https://github.com/CodeFr33k/time\n    @app\n    date = 2020-224\n)\n\n");var U=function(e){Object(o.a)(n,e);var t=I(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).store=S,e}return n}(d.c),$=U=L([Object(d.a)({components:{Lines:z}})],U),J=(n(160),Object(M.a)($,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Lines",{attrs:{lines:this.store.lines}})],1)}),[],!1,null,null,null));t.default=J.exports}}]);