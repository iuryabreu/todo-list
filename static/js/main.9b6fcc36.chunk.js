(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),i=(n(12),n(4)),l=n(3);n(13),n(14);var u=function(e){return c.a.createElement("div",{className:"todo",onClick:e.onClick},e.descricao)};var s=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],o=n[1],s=Object(a.useState)([]),m=Object(l.a)(s,2),d=m[0],f=m[1],p=Object(a.useState)(""),v=Object(l.a)(p,2),E=v[0],b=v[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"todo-list"},c.a.createElement("strong",null,"TODO"),r.map((function(e,t){return c.a.createElement(u,{key:t,descricao:e.descricao,onClick:function(){return function(e,t){var n=r.filter((function(e,n){return n!==t}));o(n);var a=[].concat(Object(i.a)(d),[e]);f(a)}(e,t)}})})),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=[].concat(Object(i.a)(r),[{descricao:E}]);o(t),b("")}},c.a.createElement("input",{type:"text",className:"input",value:E,onChange:function(e){return b(e.target.value)}}))),c.a.createElement("div",{className:"todo-list-done"},c.a.createElement("strong",null,"DONE"),d.map((function(e,t){return c.a.createElement(u,{key:t,descricao:e.descricao})}))))};o.a.render(c.a.createElement("div",{className:"app"},c.a.createElement(s,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.9b6fcc36.chunk.js.map