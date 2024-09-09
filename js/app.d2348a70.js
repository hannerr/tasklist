(function(){"use strict";var e={8951:function(e,r,t){var n=t(5130),a=t(6768),i=t(4232);const o={class:"app-container"},s={class:"left-card"},u={class:"top"},l=(0,a.Lk)("div",{class:"avatar"},null,-1),m={class:"headline"},c=(0,a.Lk)("p",null,"Report for",-1);function f(e,r,t,n,f,p){const v=(0,a.g2)("router-link"),y=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.Lk)("div",s,[(0,a.Lk)("div",u,[l,(0,a.Lk)("div",m,[c,(0,a.Lk)("h1",null,(0,i.v_)(e.name),1)])]),(0,a.Lk)("nav",null,[(0,a.bF)(v,{to:"/"},{default:(0,a.k6)((()=>[(0,a.eW)("Daily")])),_:1}),(0,a.bF)(v,{to:"/weekly"},{default:(0,a.k6)((()=>[(0,a.eW)("Weekly")])),_:1}),(0,a.bF)(v,{to:"/monthly"},{default:(0,a.k6)((()=>[(0,a.eW)("Monthly")])),_:1})])]),(0,a.bF)(y)])}var p=(0,a.pM)({name:"App",data(){return{name:"Stacey Castillo"}}}),v=t(1241);const y=(0,v.A)(p,[["render",f]]);var d=y,k=t(1387);function h(e,r,t,n,i,o){const s=(0,a.g2)("TimeframeDisplay");return(0,a.uX)(),(0,a.Wv)(s,{timeframes:e.timeframes,timeframe:"daily"},null,8,["timeframes"])}const w=[{title:"job",timeframes:{daily:{current:2,previous:1},weekly:{current:10,previous:4},monthly:{current:15,previous:5}}},{title:"fun",timeframes:{daily:{current:5,previous:12},weekly:{current:8,previous:23},monthly:{current:13,previous:25}}},{title:"learning",timeframes:{daily:{current:1,previous:0},weekly:{current:2,previous:3},monthly:{current:5,previous:4}}},{title:"sport",timeframes:{daily:{current:1,previous:6},weekly:{current:2,previous:12},monthly:{current:4,previous:14}}},{title:"emails",timeframes:{daily:{current:9,previous:3},weekly:{current:15,previous:9},monthly:{current:35,previous:20}}},{title:"health",timeframes:{daily:{current:0,previous:2},weekly:{current:1,previous:4},monthly:{current:7,previous:4}}}],L={class:"card-container"},b={class:"card"},g={class:"title"},C=(0,a.Lk)("span",null,"•••",-1),O={class:"tf"},W={class:"current"},T=(0,a.Lk)("span",null,"Completed",-1),_={class:"previous"},A=(0,a.Lk)("span",{class:"completed"},"Completed",-1);function D(e,r,t,n,o,s){return(0,a.uX)(),(0,a.CE)("div",L,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.timeframes,((r,t)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,i.C4)(["icon",e.getWrapperClass(r.title)]),key:t},[(0,a.Lk)("div",b,[(0,a.Lk)("div",null,[(0,a.Lk)("p",g,[(0,a.Lk)("span",null,(0,i.v_)(r.title),1),C]),(0,a.Lk)("p",O,[(0,a.Lk)("span",W,[(0,a.Lk)("span",null,(0,i.v_)(r.timeframes[e.timeframe].current),1),T]),(0,a.Lk)("span",_,[(0,a.eW)("Last week: "+(0,i.v_)(r.timeframes[e.timeframe].previous)+" ",1),A])])])])],2)))),128))])}var M=(0,a.pM)({name:"TimeframeDisplay",props:{timeframes:{type:Array,required:!0},timeframe:{type:String,required:!0}},methods:{getWrapperClass(e){return e.toLowerCase()}}});const j=(0,v.A)(M,[["render",D]]);var E=j,X=(0,a.pM)({name:"HomeView",components:{TimeframeDisplay:E},data(){return{timeframes:w}}});const F=(0,v.A)(X,[["render",h]]);var x=F;function V(e,r,t,n,i,o){const s=(0,a.g2)("TimeframeDisplay");return(0,a.uX)(),(0,a.Wv)(s,{timeframes:e.timeframes,timeframe:"weekly"},null,8,["timeframes"])}var q=(0,a.pM)({name:"WeeklyView",components:{TimeframeDisplay:E},data(){return{timeframes:w}}});const P=(0,v.A)(q,[["render",V]]);var S=P;function H(e,r,t,n,i,o){const s=(0,a.g2)("TimeframeDisplay");return(0,a.uX)(),(0,a.Wv)(s,{timeframes:e.timeframes,timeframe:"monthly"},null,8,["timeframes"])}var I=(0,a.pM)({name:"MonthlyView",components:{TimeframeDisplay:E},data(){return{timeframes:w}}});const K=(0,v.A)(I,[["render",H]]);var R=K;const z=[{path:"/",name:"daily",component:x},{path:"/weekly",name:"weekly",component:S},{path:"/monthly",name:"monthly",component:R}],B=(0,k.aE)({history:(0,k.LA)("/tasklist/"),routes:z});var G=B;(0,n.Ef)(d).use(G).mount("#app")}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var i=r[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(r,n,a,i){if(!n){var o=1/0;for(m=0;m<e.length;m++){n=e[m][0],a=e[m][1],i=e[m][2];for(var s=!0,u=0;u<n.length;u++)(!1&i||o>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[u])}))?n.splice(u--,1):(s=!1,i<o&&(o=i));if(s){e.splice(m--,1);var l=a();void 0!==l&&(r=l)}}return r}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[n,a,i]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={524:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var a,i,o=n[0],s=n[1],u=n[2],l=0;if(o.some((function(r){return 0!==e[r]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(u)var m=u(t)}for(r&&r(n);l<o.length;l++)i=o[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(m)},n=self["webpackChunktasklist"]=self["webpackChunktasklist"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(8951)}));n=t.O(n)})();
//# sourceMappingURL=app.d2348a70.js.map