(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n.p+"static/media/mountains.957f1e80.svg"},42:function(e,t,n){e.exports=n.p+"static/media/stars.b004c9dc.svg"},47:function(e,t,n){e.exports=n(74)},74:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(34),l=n.n(r),o=n(39),c=n(8),d=n(15),s=n.n(d),u=n(44),m=n(19),p=n(17),b=n(16),f=n(13),h=n(76),g=n(77),y=n(9),x=n(10),E=n(43),v=n(35),w=n.n(v);function k(){var e=Object(y.a)(["\n      svg {\n        animation: "," 2s linear infinite;\n      }\n    "]);return k=function(){return e},e}function O(){var e=Object(y.a)(["\n  cursor: pointer;\n  background: #7159c1;\n  color: #fff;\n  border: 0;\n  margin: 20px 0;\n  padding: 15px 30px;\n  border-radius: 4px;\n  font-size: 18px;\n  margin-bottom: 30px;\n\n  &:hover {\n    background: ","\n  }\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n\n  ","\n"]);return O=function(){return e},e}function j(){var e=Object(y.a)(["\n  min-height: 100vh;\n  margin: 20px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n\n  background: url(",") fixed, linear-gradient(to top, rgb(25, 24, 31), transparent);\n  background-size: contain;\n  background-position: center 100%;\n  background-repeat: no-repeat;\n\n  h1 {\n    max-width: 80%;\n    font-family: 'Ubuntu', sans-serif;\n    font-style: italic;\n  }\n\n  form {\n\n    div {\n      font-size: 22px;\n      letter-spacing: 1px;\n      text-align: left;\n\n      input {\n        background: #fff;\n        display: block;\n        width: 88%;\n        border: 1px solid #eee;\n        padding: 10px 15px;\n        border-radius: 4px;\n        font-size: 16px;\n        margin-bottom: 10px;\n      }\n\n      select {\n        background: #fff;\n        display: block;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        width: 100%;\n        border: 1px solid #eee;\n        padding: 10px 15px;\n        border-radius: 4px;\n        font-size: 16px;\n        margin-bottom: 10px;\n      }\n    }\n  }\n"]);return j=function(){return e},e}function z(){var e=Object(y.a)(["\n  from {\n    transform: rotate(0deg)\n  }\n  to {\n    transform: rotate(360deg)\n  }\n"]);return z=function(){return e},e}var S=Object(x.d)(z()),B=x.c.div(j(),w.a),C=x.c.button.attrs(function(e){return{type:"submit",loading:e.loading,disabled:e.loading}})(O(),Object(E.a)(.05,"#7159c1"),function(e){return e.loading&&Object(x.b)(k(),S)}),D=n(38),N=n.n(D).a.create({baseURL:"https://api.coingecko.com/api/v3/coins/"}),F=[{id:"usd",title:"Dolar"},{id:"brl",title:"Reais"},{id:"eur",title:"Euro"}],H=[{id:"bitcoin",title:"Bitcoin",symbol:"BTC"},{id:"bitcoin-cash",title:"Bitcoin Cash",symbol:"BCHABC"},{id:"litecoin",title:"Litecoin",symbol:"LTC"},{id:"ethereum",title:"Ethereum",symbol:"ETH"},{id:"nano",title:"Nano",symbol:"NANO"}],L=[{id:31,title:"31 dias"},{id:30,title:"30 dias"},{id:29,title:"29 dias"},{id:28,title:"28 dias"},{id:27,title:"27 dias"},{id:26,title:"26 dias"},{id:25,title:"25 dias"},{id:24,title:"24 dias"},{id:23,title:"23 dias"},{id:22,title:"22 dias"},{id:21,title:"21 dias"},{id:20,title:"20 dias"},{id:19,title:"19 dias"},{id:18,title:"18 dias"},{id:17,title:"17 dias"},{id:16,title:"16 dias"},{id:15,title:"15 dias"},{id:14,title:"14 dias"},{id:13,title:"13 dias"},{id:12,title:"12 dias"},{id:11,title:"11 dias"},{id:10,title:"10 dias"},{id:9,title:"09 dias"},{id:8,title:"08 dias"},{id:7,title:"07 dias"},{id:6,title:"06 dias"},{id:5,title:"05 dias"},{id:4,title:"04 dias"},{id:3,title:"03 dias"},{id:2,title:"02 dias"},{id:1,title:"01 dia"}];function T(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(0),o=Object(p.a)(l,2),c=o[0],d=o[1],y=Object(a.useState)(0),x=Object(p.a)(y,2),E=x[0],v=x[1];function w(){return(w=Object(m.a)(s.a.mark(function e(t){var n,a,i,l,o,c,p,b;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v(1),n=t.fiat,a=t.coin,i=t.fromLastDays,l=t.fiatValuePerHour,o=Object(u.a)(Array(31).keys()).reverse().slice(31-i).map(function(e){return Object(h.a)(Object(g.a)(new Date,e),"dd-MM-yyyy")}),c=o.map(function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,N.get("".concat(a,"/history?date=").concat(t,"&localization=false"));case 3:return e.t1=e.sent,e.abrupt("return",{date:e.t0,data:e.t1});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=6,Promise.all(c);case 6:e.t0=function(e){return{date:e.date,coin:a,symbol:H.find(function(e){return e.id===a}).symbol,price:e.data.data.market_data.current_price[n].toFixed(2),hours:8,amount:(8*l/e.data.data.market_data.current_price[n]).toFixed(8)}},p=e.sent.map(e.t0),b=p.reduce(function(e,t){var n=t.amount;return e+parseFloat(n)},0).toFixed(8),r(p),d(b),v(0);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}return i.a.createElement(B,null,i.a.createElement(b.a,{color:"#f2a900",size:64}),i.a.createElement("h1",null,"bitcoin salary calculator"),i.a.createElement(f.a,{initialData:{fiat:"brl",coin:"bitcoin",symbol:"BTC",fromLastDays:30,fiatValuePerHour:80},onSubmit:function(e){return w.apply(this,arguments)}},i.a.createElement("div",null,"O valor da minha hora em:",i.a.createElement(f.c,{name:"fiat",options:F}),"\xe9:",i.a.createElement(f.b,{type:"number",name:"fiatValuePerHour",placeholder:"0.00",min:"0.00",step:"0.01"})),i.a.createElement("div",null,"Quero a convers\xe3o em:",i.a.createElement(f.c,{name:"coin",options:H}),"dos \xfaltimos:",i.a.createElement(f.c,{name:"fromLastDays",options:L})),i.a.createElement(C,{loading:E,type:"submit"},E?i.a.createElement(b.c,{color:"#fff",size:14}):"Calcular")),n.length>0&&i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"table-wrapper"},i.a.createElement("div",{className:"scrollable"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",{key:"total-header"},i.a.createElement("th",{colSpan:"3"},"Total"),i.a.createElement("th",null,c," ",n[0].symbol)),i.a.createElement("tr",null,i.a.createElement("th",null,"Data"),i.a.createElement("th",null,"Pre\xe7o"),i.a.createElement("th",null,"Horas"),i.a.createElement("th",null,"Quantidade"))),i.a.createElement("tbody",null,n.map(function(e){return i.a.createElement("tr",{key:e.date},i.a.createElement("td",null,e.date),i.a.createElement("td",null,e.price),i.a.createElement("td",null,e.hours),i.a.createElement("td",null,e.amount," ",e.symbol))}),i.a.createElement("tr",{key:"total-footer"},i.a.createElement("td",{colSpan:"3"},"Total"),i.a.createElement("td",null,c," ",n[0].symbol))))))),i.a.createElement("a",{href:"https://github.com/ibrunotome/bitcoin-salary-calculator",target:"blank"},i.a.createElement(b.b,{color:"#fff",size:64})))}function P(){return i.a.createElement(o.a,{basename:"/bitcoin-salary-calculator"},i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/",exact:!0,component:T})))}var U=n(42),_=n.n(U);function A(){var e=Object(y.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Ubuntu:700i&display=swap');\n\n  body {\n    background: rgb(25, 24, 31) url(",") fixed no-repeat;\n    color: white;\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .container-fluid {\n    max-width: 90%;\n  }\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 30px;\n  }\n\n  table, th, td {\n    border: 1px solid #ddd;\n  }\n\n  th, td {\n    padding: 15px 30px;\n  }\n\n  .table-wrapper {\n    overflow: hidden;\n  }\n\n  .scrollable {\n    width: 100%;\n    overflow: scroll;\n    overflow-y: hidden;\n\n    ::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  th {\n    text-transform: uppercase;\n    line-height: 12px;\n    text-align: center;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  td {\n    text-align: center;\n    vertical-align: middle;\n    overflow: hidden;\n    height: 30px;\n    white-space: nowrap;\n  }\n}\n"]);return A=function(){return e},e}var M=Object(x.a)(A(),_.a);var R=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(P,null),i.a.createElement(M,null))};l.a.render(i.a.createElement(R,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.5270c607.chunk.js.map