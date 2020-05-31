(function(t){function e(e){for(var o,s,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},r={app:0},n=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9db1e5d2"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,o){a=r[t]=[e,o]}));e.push(a[2]=o);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("85ec"),r=a.n(o);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("Navbar"),a("Banner"),a("SectionA"),a("Card"),a("Button"),a("Direction"),a("Footer")],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),o("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),o("br"),t._v("please join our online "),o("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},i=[],l={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},c=l,u=a("2877"),p=Object(u["a"])(c,s,i,!1,null,null,null),d=p.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"104.59px",width:"100%",display:"flex","justify-content":"space-between"}},[a("img",{staticStyle:{height:"68px",width:"107px",margin:"18px 0 18px 95px"},attrs:{src:"https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Logo-Oficial-sin-bordes.png?alt=media&token=1fc9cdba-fdf9-4885-b173-f2e2b616c49b",alt:"logo"}}),a("a",{staticStyle:{margin:"auto 60px auto 0","font-size":"16px","font-family":"Montserrat",color:"#3A899A"}},[t._v("INICIO")])])}],v={name:"Navbar",parts:{appTitle:"Neumomed IPS"}},b=v,h=Object(u["a"])(b,f,m,!1,null,null,null),g=h.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-carousel",{staticStyle:{widht:"1200",height:"500px"},attrs:{"hide-delimiters":"",cycle:""}},t._l(t.items,(function(t,e){return a("v-carousel-item",{key:e,staticStyle:{height:"100%"},attrs:{src:t.src}})})),1)},x=[],_={data:function(){return{items:[{src:"https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Banner%201.jpg?alt=media&token=84413e81-b774-498f-b95b-06557ec789ad"},{src:"https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Banner%202.jpg?alt=media&token=95b1ce3d-540d-45c5-b728-29062be5aed8"},{src:"https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Banner%203.jpg?alt=media&token=46c2ae3e-2031-4935-bf29-0ee82bff1a34"},{src:"https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Banner%204.jpg?alt=media&token=c1258eaa-f2d9-4720-a784-325ebf12f995"},{src:"https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Banner%205.jpg?alt=media&token=ff493747-1c04-4e42-ac12-c9624330289e"},{src:"https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/Banner%206.jpg?alt=media&token=bcb9277d-f952-4b03-b491-2eeb409ac6d7"}]}}},w=_,S=Object(u["a"])(w,y,x,!1,null,null,null),k=S.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"background-color":"#2A2D30",width:"100%",heigth:"332px"}},[a("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},[a("v-col",{attrs:{sm:"5",md:"6"}},[a("v-card",{staticClass:"pa-2",staticStyle:{"background-color":"#2A2D30",color:"white",border:"none"},attrs:{outlined:"",tile:""}},[a("p",{staticStyle:{"font-size":"12px",margin:"60px 0 0 150px","border-top":"2px solid #3A899A","padding-top":"50px"}},[t._v("NEUMOMED")]),a("h2",{staticStyle:{"font-size":"50px",margin:"25px 0 0 150px"}},[t._v("Neumomed IPS")]),a("p",{staticStyle:{"font-size":"19px",margin:"60px 0 0 150px"}},[t._v(" ofrece una atención integral a pacientes con enfermedades respiratorias y trastornos del sueño. ")])])],1),a("v-col",{attrs:{sm:"5","offset-sm":"2",md:"6","offset-md":"0"}},[a("v-card",{staticClass:"pa-2",staticStyle:{"background-color":"#2A2D30",border:"none"},attrs:{outlined:"",tile:""}},[a("img",{staticStyle:{height:"312px",width:"453px","border-radius":"220px 30px 200px 30px",margin:"50px"},attrs:{src:"https://firebasestorage.googleapis.com/v0/b/pruebaneumomed.appspot.com/o/_MG_5091.JPG?alt=media&token=119c1a90-cb68-41ae-abd9-efec0d64c15f"}})])],1)],1)],1)},C=[],A={name:"SectionA",parts:{subtitle:"NEUMOMED",title:"Neumomed IPS",text:"ofrece una atención integral a pacientes con enfermedades respiratorias y trastornos del sueño."}},O=A,E=Object(u["a"])(O,j,C,!1,null,null,null),P=E.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{width:"100%",heigth:"332px",padding:"80px 20px 0 0","background-color":"#ffffff"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("v-card",{staticClass:"pa-5 mt-5",staticStyle:{border:"none"},attrs:{outlined:"",tile:""}},[a("h3",{staticStyle:{"font-size":"25px",color:"#3A899A",margin:"20px 0 0 0",padding:"15px 0","border-top":"2px solid #2B2B2B"}},[t._v(" Programas ")]),a("ul",t._l(t.programas,(function(e,o){return a("li",{key:o,staticStyle:{"font-size":"17px"}},[t._v(" "+t._s(e)+" ")])})),0)])],1),a("v-col",{attrs:{order:"12"}},[a("v-card",{staticClass:"pa-5 mt-5",staticStyle:{border:"none"},attrs:{outlined:"",tile:""}},[a("h3",{staticStyle:{"font-size":"25px",color:"#3A899A",margin:"20px 0 0 0",padding:"15px 0","border-top":"2px solid #2B2B2B"}},[t._v(" Consultas ")]),t._l(t.consultas,(function(e,o){return a("li",{key:o,staticStyle:{"font-size":"17px"}},[t._v(" "+t._s(e)+" ")])}))],2)],1),a("v-col",{attrs:{order:"1"}},[a("v-card",{staticClass:"pa-5 mt-5",staticStyle:{border:"none"},attrs:{outlined:"",tile:""}},[a("h3",{staticStyle:{"font-size":"25px",color:"#3A899A",margin:"20px 0 0 0",padding:"15px 0","border-top":"2px solid #2B2B2B"}},[t._v(" Terapias ")]),t._l(t.terapias,(function(e,o){return a("li",{key:o,staticStyle:{"font-size":"17px"}},[t._v(" "+t._s(e)+" ")])}))],2)],1)],1)],1)},N=[],z={name:"Card",data:function(){return{programas:["Programa de EPOC y ASMA","Programa de SAHOS","Programa Dejar de Fumar"],terapias:["Rehabilitación Pulmonar","Terapia Miofuncional Orofacial","Terapia Cognitivo Conductual"],consultas:["Consulta de Neumología","Consulta de Nutrición","Consulta de Psicología"]}}},F=z,M=Object(u["a"])(F,B,N,!1,null,null,null),T=M.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({staticStyle:{margin:"20px 0"},attrs:{color:"#3A899A",dark:""}},o),[t._v("Formulario")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"#3A899A"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-toolbar-title",[t._v("Salir")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Guardar")])],1)],1),t._l(t.section,(function(e,o){return a("v-list",{key:o,attrs:{"three-line":"",subheader:""}},[a("v-subheader",[t._v("Sección "+t._s(e.valor)+": "+t._s(e.nombre))]),a("v-container",t._l(t.variable,(function(o,r){return a("div",{key:r},[o.seccion==e.valor?a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-subheader",[t._v(t._s(o.nombre))])],1),o.opciones_lista?t._e():a("v-col",{attrs:{cols:"8"}},[a("v-text-field",{attrs:{value:"00",label:o.tipo}})],1),o.opciones_lista?a("v-col",{attrs:{cols:"8"}},t._l(o.opciones_lista,(function(t,e){return a("v-row",{key:e},[a("v-text-field",{attrs:{value:"00",label:t.valor}})],1)})),1):t._e()],1):t._e()],1)})),0)],1)}))],2)],1)],1)},D=[],H=a("bc3a"),I=a.n(H),L={data:function(){return{dialog:!1,widgets:!1,variable:null,section:null}},created:function(){var t=this;I.a.get("https://formularios-prueba-tecnica-6ihrk4y23q-ue.a.run.app/formularios/api/v3/prueba_tecnica").then((function(e){var a=e.data;if(a&&a.data&&a.data.data){var o=a.data.data,r=o.variable,n=o.seccion,s=[];for(var i in r)s.push(r[i]);var l=[];for(var c in n)l.push(n[c]);return t.variable=s.sort((function(t,e){return t.seccion-e.seccion})),void(t.section=l.sort((function(t,e){return t.valor-e.valor})))}t.variable=null,t.section=null})).catch((function(t){return console.log(t)}))}},W=L,q=Object(u["a"])(W,$,D,!1,null,null,null),V=q.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"330px","margin-bottom":"20px",width:"100%","background-color":"#3A899A",color:"white"}},[a("v-row",{staticStyle:{width:"100%"},attrs:{"no-gutters":""}},[a("v-col",{staticStyle:{"padding-left":"29px","padding-top":"30px"},attrs:{md:"3"}},[a("v-card",{staticClass:"pa-2 mt-5",staticStyle:{"background-color":"#3A899A",color:"white",border:"none"},attrs:{outlined:"",tile:""}},[a("h3",{staticStyle:{"font-size":"25px","margin-bottom":"15px"}},[t._v("Medellín")]),a("p",{staticStyle:{"font-size":"18px"}},[t._v("Calle 19A # 44-25 Local 206 Edificio Salud y Servicios.")])])],1),a("v-col",{staticStyle:{"padding-top":"30px"},attrs:{md:"3"}},[a("v-card",{staticClass:"pa-2 mt-5",staticStyle:{"background-color":"#3A899A",color:"white",border:"none"},attrs:{outlined:"",tile:""}},[a("h3",{staticStyle:{"font-size":"25px","margin-bottom":"15px"}},[t._v("Rionegro")]),a("p",{staticStyle:{"font-size":"18px"}},[t._v("Carrera 55 A #35- 2027, piso 4 Cs 402-404 Torre 2, City Médica.")])])],1),a("v-col",{staticStyle:{padding:"10px"},attrs:{md:"6"}},[a("v-card",{staticStyle:{"background-color":"#3A899A",color:"white",border:"none"},attrs:{outlined:"",tile:""}},[a("iframe",{attrs:{height:"310px",width:"100%",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"https://maps.google.com/maps?q=Neumomed&t=m&z=15&output=embed&iwloc=near","aria-label":"Neumomed"}})])],1)],1)],1)},J=[],R={},U=R,Y=Object(u["a"])(U,G,J,!1,null,null,null),Q=Y.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{height:"40"}},[a("v-footer",{staticStyle:{"background-color":"#3A899A",color:"white"},attrs:{absolute:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("strong",[t._v("Neumomed | Todos los derechos reservados ")]),t._v(" "+t._s((new Date).getFullYear())+" ")])],1)],1)},X=[],Z={},tt=Z,et=Object(u["a"])(tt,K,X,!1,null,null,null),at=et.exports,ot={name:"App",components:{Navbar:g,HelloWorld:d,Banner:k,SectionA:P,Card:T,Button:V,Direction:Q,Footer:at},data:function(){return{}}},rt=ot,nt=(a("034f"),Object(u["a"])(rt,r,n,!1,null,null,null)),st=nt.exports,it=(a("d3b7"),a("8c4f")),lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},ct=[],ut={name:"Home",components:{HelloWorld:d}},pt=ut,dt=Object(u["a"])(pt,lt,ct,!1,null,null,null),ft=dt.exports;o["default"].use(it["a"]);var mt=[{path:"/",name:"Home",component:ft},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],vt=new it["a"]({mode:"history",base:"/",routes:mt}),bt=vt,ht=a("2f62");o["default"].use(ht["a"]);var gt=new ht["a"].Store({state:{},mutations:{},actions:{},modules:{}}),yt=a("ce5b"),xt=a.n(yt);a("bf40");o["default"].use(xt.a);var _t=new xt.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});a("d5e8"),a("5363");o["default"].config.productionTip=!1,new o["default"]({router:bt,store:gt,vuetify:_t,render:function(t){return t(st)}}).$mount("#app")},"85ec":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.2aabb039.js.map