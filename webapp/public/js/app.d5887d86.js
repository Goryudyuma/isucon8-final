(function(t){function n(n){for(var a,s,o=n[0],c=n[1],u=n[2],p=0,d=[];p<o.length;p++)s=o[p],r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(n);while(d.length)d.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],a=!0,o=1;o<e.length;o++){var c=e[o];0!==r[c]&&(a=!1)}a&&(i.splice(n--,1),t=s(s.s=e[0]))}return t}var a={},r={app:0},i=[];function s(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)s.d(e,a,function(n){return t[n]}.bind(null,a));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var l=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("cd49")},"054c":function(t,n,e){"use strict";var a=e("965f"),r=e.n(a);r.a},"22f9":function(t,n,e){"use strict";var a=e("707b"),r=e.n(a);r.a},"323d":function(t,n,e){},"4b33":function(t,n,e){"use strict";var a=e("70ed"),r=e.n(a);r.a},"5f86":function(t,n,e){},6426:function(t,n,e){},"64e6":function(t,n,e){"use strict";var a=e("c9df"),r=e.n(a);r.a},"707b":function(t,n,e){},"70ed":function(t,n,e){},7386:function(t,n,e){},"965f":function(t,n,e){},9724:function(t,n,e){"use strict";var a=e("a294"),r=e.n(a);r.a},a294:function(t,n,e){},bafa:function(t,n,e){"use strict";var a=e("cf77"),r=e.n(a);r.a},c9df:function(t,n,e){},cd49:function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Header"),e("div",{attrs:{id:"content"}},[e("router-view")],1),t.isModalOpen?e("Modal"):t._e()],1)},i=[],s=e("c93e"),o=e("2f62"),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"header"},[e("h1",{staticClass:"title"},[t._v("ISUCOIN")]),t.user?e("ul",{staticClass:"list"},[e("li",{staticClass:"item"},[t._v(t._s("ID: "+t.user.id))]),e("li",{staticClass:"item"},[t._v(t._s("username: "+t.user.name))])]):e("ul",{staticClass:"list"},[e("li",{staticClass:"item",on:{click:function(n){t.openSignupModal()}}},[t._v("Sign up")]),e("li",{staticClass:"item",on:{click:function(n){t.openSigninModal()}}},[t._v("Sign in")])])])},u=[],l=a["a"].extend({name:"Header",computed:Object(s["a"])({},Object(o["d"])(["user"])),methods:Object(s["a"])({},Object(o["b"])(["openSignupModal","openSigninModal"]))}),p=l,d=(e("9724"),e("2877")),f=Object(d["a"])(p,c,u,!1,null,"47068a80",null);f.options.__file="Header.vue";var v=f.exports,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal",on:{click:function(n){if(n.target!==n.currentTarget)return null;t.closeModal()}}},[e("div",{staticClass:"content"},["signup"===t.modalType?e("SignupForm"):"signin"===t.modalType?e("SigninForm"):t._e()],1)])},m=[],b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.hasSignupError?e("p",{staticClass:"error-message"},[t._v("登録に失敗しました")]):t._e(),e("div",{staticClass:"row"},[t._v("\n    name\n    "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(n){n.target.composing||(t.name=n.target.value)}}})]),e("div",{staticClass:"row"},[t._v("\n    bank id\n    "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_id,expression:"bank_id"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.bank_id},on:{input:function(n){n.target.composing||(t.bank_id=n.target.value)}}})]),e("div",{staticClass:"row"},[t._v("\n    password\n    "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}})]),e("button",{staticClass:"button",on:{click:function(n){n.preventDefault(),t.signup()}}},[t._v("登録")])])},_=[],g=(e("7f7f"),e("96cf"),e("3040")),w=e("bc3a"),C=e.n(w),O=a["a"].extend({name:"SignupForm",data:function(){return{name:"",bank_id:"",password:""}},computed:Object(s["a"])({},Object(o["d"])(["hasSignupError"])),methods:Object(s["a"])({},Object(o["b"])(["signin"]),Object(o["c"])(["closeModal","showSignupError","hideSignupError"]),{signup:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var n,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=new URLSearchParams,n.append("name",this.name),n.append("bank_id",this.bank_id),n.append("password",this.password),t.prev=4,t.next=7,C.a.post("/signup",n);case 7:if(e=t.sent,200!==e.status){t.next=12;break}return t.next=11,this.signin({bank_id:this.bank_id,password:this.password});case 11:this.closeModal();case 12:t.next=18;break;case 14:throw t.prev=14,t.t0=t["catch"](4),this.showSignupError(),t.t0;case 18:case"end":return t.stop()}},t,this,[[4,14]])}));return function(){return t.apply(this,arguments)}}()}),watch:{name:function(){this.hideSignupError()},bank_id:function(){this.hideSignupError()},password:function(){this.hideSignupError()}}}),S=O,j=(e("bafa"),Object(d["a"])(S,b,_,!1,null,"b8b35dc6",null));j.options.__file="SignupForm.vue";var y=j.exports,x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.hasSigninError?e("p",{staticClass:"error-message"},[t._v("ログインに失敗しました")]):t._e(),e("div",{staticClass:"row"},[t._v("\n    bank id\n    "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_id,expression:"bank_id"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.bank_id},on:{input:function(n){n.target.composing||(t.bank_id=n.target.value)}}})]),e("div",{staticClass:"row"},[t._v("\n    password\n    "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}})]),e("button",{staticClass:"button",on:{click:function(n){n.preventDefault(),t.postSignin()}}},[t._v("ログイン")])])},k=[],E=a["a"].extend({name:"SigninForm",data:function(){return{bank_id:"",password:""}},computed:Object(s["a"])({},Object(o["d"])(["hasSigninError"])),methods:Object(s["a"])({},Object(o["b"])(["signin"]),Object(o["c"])(["closeModal","showSigninError","hideSigninError"]),{postSignin:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n={bank_id:this.bank_id,password:this.password},this.signin(n);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),watch:{bank_id:function(){this.hideSigninError()},password:function(){this.hideSigninError()}}}),M=E,T=(e("22f9"),Object(d["a"])(M,x,k,!1,null,"544e2c94",null));T.options.__file="SigninForm.vue";var P=T.exports,$=a["a"].extend({name:"Modal",components:{SignupForm:y,SigninForm:P},computed:Object(s["a"])({},Object(o["d"])(["modalType"])),methods:Object(s["a"])({},Object(o["c"])(["closeModal"]))}),I=$,R=(e("f9d8"),Object(d["a"])(I,h,m,!1,null,"7a42e319",null));R.options.__file="Modal.vue";var F=R.exports,D=a["a"].extend({name:"App",components:{Header:v,Modal:F},computed:Object(s["a"])({},Object(o["d"])(["isModalOpen"]))}),N=D,L=(e("cf25"),Object(d["a"])(N,r,i,!1,null,null,null));L.options.__file="App.vue";var U=L.exports,H=e("8c4f"),A=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("div",{staticClass:"chart"},[e("Price"),e("Chart")],1),e("div",{staticClass:"order"},[e("Order"),e("Log")],1)])},J=[],q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"list"},[e("div",{staticClass:"item"},[t._v("\n    最安売値\n    "),e("span",{staticClass:"price"},[t._v(t._s(t.info?t.info.lowest_sell_price+"円":"----円"))])]),e("div",{staticClass:"item"},[t._v("\n    最高買値\n    "),e("span",{staticClass:"price"},[t._v(t._s(t.info?t.info.highest_buy_price+"円":"----円"))])])])},z=[],B=a["a"].extend({name:"Price",computed:Object(s["a"])({},Object(o["d"])(["info"]))}),G=B,K=(e("f753"),Object(d["a"])(G,q,z,!1,null,"76e5d1ee",null));K.options.__file="Price.vue";var Q=K.exports,V=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"buttons"},[e("button",{staticClass:"button",on:{click:function(n){t.setChartType("hour")}}},[t._v("Hour")]),e("button",{staticClass:"button",on:{click:function(n){t.setChartType("min")}}},[t._v("Minute")]),e("button",{staticClass:"button",on:{click:function(n){t.setChartType("sec")}}},[t._v("Second")])]),e("canvas",{ref:"canvas",attrs:{id:"chart"}})])},W=[],X=a["a"].extend({name:"Chart",computed:Object(s["a"])({},Object(o["d"])(["chartType","info"])),methods:Object(s["a"])({},Object(o["c"])(["setChartType"]),{convertDataStructure:function(t){return t.map(function(t){return{c:t.close,h:t.high,l:t.low,o:t.open,t:moment(t.time).valueOf()}})},getChartData:function(){if(this.info)return"hour"===this.chartType?this.info.chart_by_hour:"min"===this.chartType?this.info.chart_by_min:"sec"===this.chartType?this.info.chart_by_sec:null},showChart:function(){if(this.info){var t=this.$refs.canvas,n=t.getContext("2d");if(n){n.canvas.width=700,n.canvas.height=200;new Chart(n,{type:"candlestick",data:{datasets:[{label:"ISUCOIN Chart",data:this.convertDataStructure(this.getChartData())}]}})}}}}),mounted:function(){this.showChart()},watch:{chartType:function(){this.showChart()},info:function(){this.showChart()}}}),Y=X,Z=(e("f988"),Object(d["a"])(Y,V,W,!1,null,"259f1b78",null));Z.options.__file="Chart.vue";var tt=Z.exports,nt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"order"},[e("div",{staticClass:"row"},[t._v("\n    脚数\n    "),e("input",{staticClass:"input",attrs:{type:"text"}})]),e("div",{staticClass:"row"},[t._v("\n    単価\n    "),e("input",{staticClass:"input",attrs:{type:"text"}})]),e("div",{staticClass:"buttons"},[e("button",{staticClass:"button"},[t._v("売り")]),e("button",{staticClass:"button"},[t._v("買い")])])])}],at=a["a"].extend({name:"Order"}),rt=at,it=(e("054c"),Object(d["a"])(rt,nt,et,!1,null,"eb0994fc",null));it.options.__file="Order.vue";var st=it.exports,ot=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"log"},[e("h3",{staticClass:"title"},[t._v("履歴")]),e("ul",{staticClass:"orders"},[e("li",{staticClass:"order"},[t._v("\n      オーダー\n      "),e("button",{staticClass:"cancel"},[t._v("×")])]),e("li",{staticClass:"order"},[t._v("\n      オーダー\n      "),e("button",{staticClass:"cancel"},[t._v("×")])]),e("li",{staticClass:"order"},[t._v("\n      オーダー\n      "),e("button",{staticClass:"cancel"},[t._v("×")])])])])}],ut=a["a"].extend({name:"Log"}),lt=ut,pt=(e("4b33"),Object(d["a"])(lt,ot,ct,!1,null,"4076e81d",null));pt.options.__file="Log.vue";var dt=pt.exports,ft=a["a"].extend({name:"home",components:{Price:Q,Chart:tt,Order:st,Log:dt},mounted:function(){this.updateInfo()},computed:Object(s["a"])({},Object(o["d"])(["info"])),methods:Object(s["a"])({},Object(o["b"])(["getInfo"]),{updateInfo:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getInfo(this.info?this.info.cursor:null);case 3:setTimeout(function(){return n.updateInfo()},1e3),t.next=9;break;case 6:throw t.prev=6,t.t0=t["catch"](0),t.t0;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));return function(){return t.apply(this,arguments)}}()})}),vt=ft,ht=(e("64e6"),Object(d["a"])(vt,A,J,!1,null,"26799082",null));ht.options.__file="Top.vue";var mt=ht.exports;a["a"].use(H["a"]);var bt=new H["a"]({mode:"history",base:"/",routes:[{path:"/",name:"top",component:mt}]});a["a"].use(o["a"]);var _t=new o["a"].Store({state:{chartType:"min",hasSigninError:!1,hasSignupError:!1,info:null,isModalOpen:!1,modalType:"signup",user:null},mutations:{openModal:function(t){t.isModalOpen=!0},closeModal:function(t){t.isModalOpen=!1},setModalType:function(t,n){t.modalType=n},setInfo:function(t,n){t.info=n},setChartType:function(t,n){t.chartType=n},showSigninError:function(t){t.hasSigninError=!0},hideSigninError:function(t){t.hasSigninError=!1},showSignupError:function(t){t.hasSignupError=!0},hideSignupError:function(t){t.hasSignupError=!1},setUser:function(t,n){t.user=n}},actions:{openSignupModal:function(t){var n=t.commit;n("setModalType","signup"),n("openModal")},openSigninModal:function(t){var n=t.commit;n("setModalType","signin"),n("openModal")},getInfo:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(n,e){var a,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=n.commit,r=e?{params:{cursor:e}}:void 0,t.prev=2,t.next=5,C.a.get("/info",r);case 5:i=t.sent,a("setInfo",i.data),t.next=13;break;case 9:throw t.prev=9,t.t0=t["catch"](2),console.error("failed to fetch /info"),t.t0;case 13:case"end":return t.stop()}},t,this,[[2,9]])}));return function(n,e){return t.apply(this,arguments)}}(),signin:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(n,e){var a,r,i,s,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=n.commit,r=e.bank_id,i=e.password,s=new URLSearchParams,s.append("bank_id",r),s.append("password",i),t.prev=5,t.next=8,C.a.post("/signin",s);case 8:o=t.sent,200===o.status&&(a("setUser",o.data),a("closeModal")),t.next=16;break;case 12:throw t.prev=12,t.t0=t["catch"](5),a("showSigninError"),t.t0;case 16:case"end":return t.stop()}},t,this,[[5,12]])}));return function(n,e){return t.apply(this,arguments)}}()}});a["a"].config.productionTip=!1,new a["a"]({router:bt,store:_t,render:function(t){return t(U)}}).$mount("#app")},cf25:function(t,n,e){"use strict";var a=e("7386"),r=e.n(a);r.a},cf77:function(t,n,e){},f753:function(t,n,e){"use strict";var a=e("323d"),r=e.n(a);r.a},f988:function(t,n,e){"use strict";var a=e("5f86"),r=e.n(a);r.a},f9d8:function(t,n,e){"use strict";var a=e("6426"),r=e.n(a);r.a}});
//# sourceMappingURL=app.d5887d86.js.map