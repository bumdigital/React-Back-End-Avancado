!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("axios")},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),a=t(0),i=t.n(a),c=t(2),l=t.n(c),s=t(3),u=t.n(s);function d(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Excluindo mensagens"),i.a.createElement("hr",null),i.a.createElement("ul",null,e.comentarios.map(e=>i.a.createElement("li",{key:e.id},i.a.createElement("span",null,e.name," - ",e.message),i.a.createElement("button",{type:"button",onClick:()=>{return n=e.id,void console.log(n);var n}},"Excluir")))))}const m=o()();m.use(o.a.static("dist/public")),m.get("/",(function(e,n){u.a.get("http://localhost:3030/comentarios").then((function(e){const t=`\n      <!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>React no Servidor - Programador a Bordo</title>\n      </head>\n      <body>\n        <div id="app">\n          ${l.a.renderToString(i.a.createElement(d,{comentarios:e.data.slice(0,2)}))}\n        </div>\n        <script>\n          localStorage.setItem('comentarios', '${JSON.stringify(e.data)}')\n        <\/script>\n        <script src="bundle_client.js"><\/script>\n      </body>\n      </html>\n    `;n.send(t)}))})),m.get("/comentarios",(function(e,n){n.send([{id:"001",name:"Kakaroto",message:"Mensagem 1"},{id:"002",name:"Shurato",message:"Mensagem 2"},{id:"003",name:"Kasildis",message:"Mensagem 3"},{id:"004",name:"Toguro",message:"Mensagem 4"}])})),m.listen(3030,(function(){console.log("Servidor conectado na porta 3030!")}))}]);