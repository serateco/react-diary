(window["webpackJsonpreact-diary"]=window["webpackJsonpreact-diary"]||[]).push([[0],{33:function(e,t,n){e.exports=n.p+"static/media/about.5755be4b.md"},37:function(e,t,n){e.exports=n(54)},39:function(e,t,n){},40:function(e,t,n){},53:function(e,t){!function(e){if(e.search){var t={};e.search.slice(1).split("&").forEach(function(e){var n=e.split("=");t[n[0]]=n.slice(1).join("=").replace(/~and~/g,"&")}),void 0!==t.p&&window.history.replaceState(null,null,e.pathname.slice(0,-1)+(t.p||"")+(t.q?"?"+t.q:"")+e.hash)}}(window.location)},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=(n(39),n(40),n(16)),o=n(8),i=n(11),l=n(13),u=n.n(l),s=n(10),p=n(18),m={ROUTER_CHANGE:"ROUTER_CHANGE",GNB_INIT:"GNB_INIT"};var d=n(26),b=n(27),f=n(35),h=n(28),v=n(36),E=n(29),O=new(n(30).Dispatcher),y=new(function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).GNB=null,n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"response",value:function(e){switch(e.type){case m.GNB_INIT:this.GNB=e.data}this.emit(e.type,e.data)}},{key:"getGnb",value:function(){return this.GNB}}]),t}(E.EventEmitter));O.register(y.response.bind(y));var j=y;function w(e,t){return N.apply(this,arguments)}function N(){return(N=Object(p.a)(u.a.mark(function e(t,n){var a,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n||(n={}),n.method||(n.method="GET"),a={headers:{"Content-Type":"application/json"}},e.t0=n.method.toUpperCase(),e.next="POST"===e.t0?6:8;break;case 6:return a.body=n.data||{},e.abrupt("break",9);case 8:a.data=n.data||{};case 9:return e.next=11,fetch(t,a);case 11:return r=e.sent,e.next=14,r.json();case 14:return c=e.sent,n.type&&j.response({type:n.type,data:c}),e.abrupt("return",c);case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}var g={GNB:"./static/gnb.json",About:"https://reqres.in/api/users?page=1",Profile:"https://reqres.in/api/users?page=2",Contact:"http://api.plos.org/search?q=title:DNA",SiteMap:"http://api.plos.org/search?q=title:%22Drosophila%22%20and%20body:%22RNA%22&fl=id,abstract",Portfolio:"https://reqres.in/api/unknown"},G=function(){var e=Object(p.a)(u.a.mark(function e(){var t,n,a,r=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=r.length>0&&void 0!==r[0]?r[0]:[],n=r.length>1?r[1]:void 0,e.t0=n.type,e.next=e.t0===m.ROUTER_CHANGE?5:e.t0===m.GNB_INIT?6:10;break;case 5:return e.abrupt("return",Object(s.a)({},t));case 6:return e.next=8,j.getGnb()||w(g.GNB,{type:m.GNB_INIT});case 8:return a=e.sent,e.abrupt("return",Object(s.a)({},t,{data:a}));case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k=Object(i.b)({common:G}),I=n(12),T=n(14),B=function(e){var t=Object(a.useState)([]),n=Object(I.a)(t,2),c=n[0],o=n[1];console.log(e),e.gnb.then(function(e){return o(e.data)});var i=c.map(function(e,t){var n=e.name,a=e.path;return r.a.createElement(T.b,{style:{padding:"10px"},key:t,to:a},n)});return r.a.createElement("div",{className:"nav"},i)},_=Object(o.b)(function(e,t){return Object(s.a)({gnb:e.common},t)})(B),x=n(32),P=n.n(x),R=n(33),A=n.n(R),C=function(){return r.a.createElement("div",null,r.a.createElement(P.a,{fileName:A.a}))},S=function(){return r.a.createElement("div",null,"Profile")},q=function(){return r.a.createElement("div",null,"Contact")},U=function(){return r.a.createElement("div",null,"SiteMap")},D=null;j.on("PORTFOLIO",function(e){D(e.data)});var H=function(){var e=Object(a.useState)([]),t=Object(I.a)(e,2),n=t[0],c=t[1];D=c;var o=n.map(function(e,t){var n=e.id,a=e.name,c=e.year,o=e.color,i=e.pantone_value;return r.a.createElement("li",{key:t},r.a.createElement("p",null,"id : ",n," "),r.a.createElement("p",null,"name : ",a," "),r.a.createElement("p",null,"year : ",c," "),r.a.createElement("p",null,"color : ",o," "),r.a.createElement("p",null,"pantone_value : ",i," "))});return Object(a.useEffect)(function(){return console.log("@update"),console.log("@remove")},[]),r.a.createElement("ul",null,o)},M={About:C,Profile:S,Contact:q,SiteMap:U,Portfolio:function(){return w(g.Portfolio,{type:"PORTFOLIO"}),r.a.createElement("div",null,r.a.createElement("h1",null,"diary"),r.a.createElement(H,null))}},F=n(9),J=function(e){var t=Object(a.useState)([]),n=Object(I.a)(t,2),c=n[0],o=n[1];e.gnb.then(function(e){o(e.data)});var i=c.map(function(e,t){var n=e.path,a=e.component;e.child;return M[a]?r.a.createElement(F.a,{key:t,path:n,component:M[a]}):null}),l=i?r.a.createElement(F.c,null,i):null;return r.a.createElement("div",{className:"route-content"},l)},L=Object(o.b)(function(e,t){return Object(s.a)({gnb:e.common},t)})(J),W=function(e){var t;return e.dispatch({type:m.GNB_INIT,params:t}),r.a.createElement("div",null,r.a.createElement(T.a,{basename:"/react-diary"},r.a.createElement(_,null),r.a.createElement(L,null)))},$=Object(o.b)()(W);n(53),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=n(34),K=n.n(z),Q=Object(i.c)(k);window.store=Q,Object(c.render)(r.a.createElement(o.a,{store:Q},r.a.createElement(K.a,{url:"./utils/redirection.js"}),r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.fb6e3867.chunk.js.map