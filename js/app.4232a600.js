(function(a){function t(t){for(var r,n,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(a[r]=l[r]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var a,t=0;t<s.length;t++){for(var e=s[t],r=!0,n=1;n<e.length;n++){var l=e[n];0!==o[l]&&(r=!1)}r&&(s.splice(t--,1),a=i(i.s=e[0]))}return a}var r={},o={app:0},s=[];function n(a){return i.p+"js/"+({about:"about"}[a]||a)+"."+{about:"06ceb757"}[a]+".js"}function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(a){var t=[],e=o[a];if(0!==e)if(e)t.push(e[2]);else{var r=new Promise((function(t,r){e=o[a]=[t,r]}));t.push(e[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=n(a);var c=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(u);var e=o[a];if(0!==e){if(e){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+a+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,e[1](c)}o[a]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=a,i.c=r,i.d=function(a,t,e){i.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,t){if(1&t&&(a=i(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)i.d(e,r,function(t){return a[t]}.bind(null,r));return e},i.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(t,"a",t),t},i.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},i.p="/Estimacion-Proyectos/",i.oe=function(a){throw console.error(a),a};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var m=c;s.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"31b6":function(a,t,e){},4779:function(a,t,e){},"4a54":function(a,t,e){"use strict";e("31b6")},"56d7":function(a,t,e){"use strict";e.r(t);e("e623"),e("e379"),e("5dc8"),e("37e1");var r=e("2b0e"),o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[a._v("Parametros")]),a._v(" | "),e("router-link",{attrs:{to:"/estimacion"}},[a._v("Estimación")])],1),e("router-view")],1)},s=[],n=(e("5c0b"),e("2877")),i={},l=Object(n["a"])(i,o,s,!1,null,null,null),c=l.exports,u=(e("d3b7"),e("8c4f")),m=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"parametros"},[e("h1",[a._v("Parametros")]),e("div",[e("Parameter-app")],1),e("div",[e("Parameter-table-app")],1)])},d=[],v=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[e("v-flex",{attrs:{xs5:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"Baja"}},[a._v("Baja")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.baja,expression:"parametros.baja"}],staticClass:"form-control",attrs:{type:"number",id:"Baja"},domProps:{value:a.parametros.baja},on:{input:function(t){t.target.composing||a.$set(a.parametros,"baja",t.target.value)}}})])]),e("v-flex",{attrs:{xs5:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"Media"}},[a._v("Media")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.media,expression:"parametros.media"}],staticClass:"form-control",attrs:{type:"number",id:"Media"},domProps:{value:a.parametros.media},on:{input:function(t){t.target.composing||a.$set(a.parametros,"media",t.target.value)}}})])]),e("v-flex",{attrs:{xs5:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"Alta"}},[a._v("Alta")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.alta,expression:"parametros.alta"}],staticClass:"form-control",attrs:{type:"number",id:"Alta"},domProps:{value:a.parametros.alta},on:{input:function(t){t.target.composing||a.$set(a.parametros,"alta",t.target.value)}}})])]),e("v-flex",{attrs:{xs5:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"muyAlta"}},[a._v("Muy Alta")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.muyAlta,expression:"parametros.muyAlta"}],staticClass:"form-control",attrs:{type:"number",id:"muyAlta"},domProps:{value:a.parametros.muyAlta},on:{input:function(t){t.target.composing||a.$set(a.parametros,"muyAlta",t.target.value)}}})])])],1),e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[e("v-flex",{attrs:{xs5:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"factorNomina"}},[a._v("Factor nomina")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.factorNomina,expression:"parametros.factorNomina"}],staticClass:"form-control",attrs:{type:"number",step:"0.01",id:"factorNomina"},domProps:{value:a.parametros.factorNomina},on:{input:function(t){t.target.composing||a.$set(a.parametros,"factorNomina",t.target.value)}}})])]),e("v-flex",{attrs:{xs5:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"totalHorasTarea"}},[a._v("Total horas tarea")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.totalHorasTarea,expression:"parametros.totalHorasTarea"}],staticClass:"form-control",attrs:{type:"number",label:"Total horas tarea",id:"totalHorasTarea"},domProps:{value:a.parametros.totalHorasTarea},on:{input:function(t){t.target.composing||a.$set(a.parametros,"totalHorasTarea",t.target.value)}}})])])],1),e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[e("v-flex",{attrs:{xs5:"",md5:""}},[e("div",{staticClass:"form-group  "},[e("label",{attrs:{for:"horasDiariasXDesarrollador"}},[a._v("Horas diarias por desarrollador")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.horasDiariasXDesarrollador,expression:"parametros.horasDiariasXDesarrollador"}],staticClass:"form-control",attrs:{type:"number",label:"Horas diarias por desarrollador",id:"horasDiariasXDesarrollador"},domProps:{value:a.parametros.horasDiariasXDesarrollador},on:{input:function(t){t.target.composing||a.$set(a.parametros,"horasDiariasXDesarrollador",t.target.value)}}})])]),e("v-flex",{attrs:{xs5:"",md5:""}},[e("div",{staticClass:"form-group  "},[e("label",{attrs:{for:"diasHabilesXMes"}},[a._v("Días hábiles por mes")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.diasHabilesXMes,expression:"parametros.diasHabilesXMes"}],staticClass:"form-control",attrs:{type:"number",id:"diasHabilesXMes"},domProps:{value:a.parametros.diasHabilesXMes},on:{input:function(t){t.target.composing||a.$set(a.parametros,"diasHabilesXMes",t.target.value)}}})])])],1),e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[e("v-flex",{attrs:{xs11:"",md5:""}},[e("v-btn",{attrs:{block:"",dark:"",color:"#28a745"},on:{click:function(t){return a.guardarDatos()}}},[a._v("Guardar parámetros")])],1)],1)],1)},p=[],f={data:function(){return{alignments:["start","center","end"],parametros:{baja:null,media:null,alta:null,muyAlta:null,factorNomina:null,totalHorasTarea:null,horasDiariasXDesarrollador:null,diasHabilesXMes:null}}},methods:{guardarDatos:function(){this.$store.commit("editParams",this.parametros),this.parametros=this.$store.state.parametros}},created:function(){this.parametros=this.$store.state.parametros}},g=f,b=(e("a639"),Object(n["a"])(g,v,p,!1,null,"5a446824",null)),h=b.exports,T=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){a.modalAgregar=!0}}},[a._v(" Agregar Cargo ")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[0!=a.desserts.length?e("table",{staticClass:"default dataTable"},[e("thead",[e("tr",[a._l(a.headers,(function(t,r){return e("th",{key:r,staticClass:"tableheader",attrs:{scope:"row"}},[a._v(" "+a._s(t.text)+" ")])})),e("th",{staticClass:"tableheader"},[a._v("Acciones")])],2)]),e("tbody",[a._l(a.desserts,(function(t,r){return e("tr",{key:"desserts-"+r},[a._l(t,(function(t,r,o){return e("th",{key:t+"-"+r,class:[{tableKey:0==o},"dateTable-items"]},[e("span",[o>1?e("b",[a._v("$")]):a._e(),a._v(" "+a._s(t)+" ")])])})),e("th",[e("div",{staticClass:"dataTable-btn-action"},[e("button",{staticClass:"dataTable-icons btn btn-outline-success",attrs:{type:"button"},on:{click:function(t){return a.editarElemento(r)}}},[e("i",{staticClass:"fa fa-pencil"})]),e("button",{staticClass:"dataTable-icons btn btn-outline-danger",attrs:{type:"button"},on:{click:function(t){return a.eliminarElemento(r)}}},[e("i",{staticClass:"fa fa-trash"})])])])],2)})),e("tr",[e("th",{staticClass:"tableKey dateTable-items"},[a._v("Total")]),e("th",{staticClass:"dateTable-items"},[e("span",[a._v(a._s(a.totalTabla[0]))])]),e("th",{staticClass:"dateTable-items"},[e("span",[a._v("$ "+a._s(a.totalTabla[1]))])]),e("th",{staticClass:"dateTable-items"},[e("span",[a._v("$ "+a._s(a.totalTabla[2]))])]),e("th",{staticClass:"dateTable-items"},[e("span",[a._v("$ "+a._s(a.totalTabla[3]))])]),e("th",{staticClass:"dateTable-items"},[e("span",[a._v("$ "+a._s(a.totalTabla[4]))])]),e("th",{staticClass:"dateTable-items"})])],2)]):a._e()])]),e("modal-app",{attrs:{width:"500px"},model:{value:a.modalAgregar,callback:function(t){a.modalAgregar=t},expression:"modalAgregar"}},[e("template",{slot:"modaltitle"},[e("h2",[a._v("Agregar nuevo cargo")])]),e("template",{slot:"modalcontent"},[e("agregar-cargo-app",{on:{agregar:function(t){return a.agregarCargo(t)}}})],1)],2),e("modal-app",{attrs:{width:"500px"},model:{value:a.modalEditar,callback:function(t){a.modalEditar=t},expression:"modalEditar"}},[e("template",{slot:"modaltitle"},[e("h2",[a._v("Editar cargo")])]),e("template",{slot:"modalcontent"},[a.modalEditar?e("editar-cargo-app",{attrs:{elemento:a.elementoSeleccionado},on:{editar:function(t){return a.editarCargo(t)}}}):a._e()],1)],2)],1)},x=[],y=(e("cb29"),e("d81d"),e("a434"),function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"actividad"}},[a._v("Actividad")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.actividad,expression:"actividad"}],staticClass:"form-control",attrs:{type:"text",id:"actividad"},domProps:{value:a.actividad},on:{input:function(t){t.target.composing||(a.actividad=t.target.value)}}})])]),e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"horasTarea"}},[a._v("Horas Tarea")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.horasTarea,expression:"horasTarea"}],staticClass:"form-control",attrs:{type:"number",id:"horasTarea"},domProps:{value:a.horasTarea},on:{input:function(t){t.target.composing||(a.horasTarea=t.target.value)}}})])]),e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"costoMesIngeniero"}},[a._v("Costo mes ingeniero")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.costoMesIngeniero,expression:"costoMesIngeniero"}],staticClass:"form-control",attrs:{type:"number",id:"costoMesIngeniero"},domProps:{value:a.costoMesIngeniero},on:{input:function(t){t.target.composing||(a.costoMesIngeniero=t.target.value)}}})])]),e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"valorMesIngeniero"}},[a._v("Valor mes ingeniero")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.valorMesIngeniero,expression:"valorMesIngeniero"}],staticClass:"form-control",attrs:{type:"number",id:"valorMesIngeniero"},domProps:{value:a.valorMesIngeniero},on:{input:function(t){t.target.composing||(a.valorMesIngeniero=t.target.value)}}})])]),e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"valorTarea"}},[a._v("Valor Tarea")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.valorTarea,expression:"valorTarea"}],staticClass:"form-control",attrs:{type:"number",id:"valorTarea"},domProps:{value:a.valorTarea},on:{input:function(t){t.target.composing||(a.valorTarea=t.target.value)}}})])]),e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"valorHoraIngeniero"}},[a._v("Valor hora ingeniero")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.valorHoraIngeniero,expression:"valorHoraIngeniero"}],staticClass:"form-control",attrs:{type:"number",id:"valorHoraIngeniero"},domProps:{value:a.valorHoraIngeniero},on:{input:function(t){t.target.composing||(a.valorHoraIngeniero=t.target.value)}}})])]),e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return a.guardarCambios()}}},[a._v("Guardar")])])],1)],1)}),C=[],_=(e("a9e3"),{props:{elemento:{type:Object}},data:function(){return{objeto:{},actividad:"",horasTarea:1,costoMesIngeniero:0,valorMesIngeniero:0,valorTarea:0,valorHoraIngeniero:0}},methods:{guardarCambios:function(){this.objeto={actividad:Number(this.actividad),horasTarea:Number(this.horasTarea),costoMesIngeniero:Number(this.costoMesIngeniero),valorMesIngeniero:Number(this.valorMesIngeniero),valorTarea:Number(this.valorTarea),valorHoraIngeniero:Number(this.valorHoraIngeniero)},this.$emit("agregar",this.objeto)}},created:function(){}}),I=_,j=(e("4a54"),Object(n["a"])(I,y,C,!1,null,"c73876fa",null)),M=j.exports,w=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"actividad"}},[a._v("Actividad")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.objeto.actividad,expression:"objeto.actividad"}],staticClass:"form-control",attrs:{type:"text",id:"actividad"},domProps:{value:a.objeto.actividad},on:{input:function(t){t.target.composing||a.$set(a.objeto,"actividad",t.target.value)}}})])]),e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"horasTarea"}},[a._v("Horas Tarea")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.objeto.horasTarea,expression:"objeto.horasTarea"}],staticClass:"form-control",attrs:{type:"number",id:"horasTarea"},domProps:{value:a.objeto.horasTarea},on:{input:function(t){t.target.composing||a.$set(a.objeto,"horasTarea",t.target.value)}}})])]),e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"costoMesIngeniero"}},[a._v("Costo mes ingeniero")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.objeto.costoMesIngeniero,expression:"objeto.costoMesIngeniero"}],staticClass:"form-control",attrs:{type:"number",id:"costoMesIngeniero"},domProps:{value:a.objeto.costoMesIngeniero},on:{input:function(t){t.target.composing||a.$set(a.objeto,"costoMesIngeniero",t.target.value)}}})])]),e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"valorMesIngeniero"}},[a._v("Valor mes ingeniero")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.objeto.valorMesIngeniero,expression:"objeto.valorMesIngeniero"}],staticClass:"form-control",attrs:{type:"number",id:"valorMesIngeniero"},domProps:{value:a.objeto.valorMesIngeniero},on:{input:function(t){t.target.composing||a.$set(a.objeto,"valorMesIngeniero",t.target.value)}}})])]),e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"valorTarea"}},[a._v("Valor Tarea")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.objeto.valorTarea,expression:"objeto.valorTarea"}],staticClass:"form-control",attrs:{type:"number",id:"valorTarea"},domProps:{value:a.objeto.valorTarea},on:{input:function(t){t.target.composing||a.$set(a.objeto,"valorTarea",t.target.value)}}})])]),e("v-flex",{attrs:{xs11:"",sm11:"",md5:""}},[e("div",{staticClass:"form-group "},[e("label",{attrs:{for:"valorHoraIngeniero"}},[a._v("Valor hora ingeniero")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.objeto.valorHoraIngeniero,expression:"objeto.valorHoraIngeniero"}],staticClass:"form-control",attrs:{type:"number",id:"valorHoraIngeniero"},domProps:{value:a.objeto.valorHoraIngeniero},on:{input:function(t){t.target.composing||a.$set(a.objeto,"valorHoraIngeniero",t.target.value)}}})])]),e("hr"),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return a.guardarCambios()}}},[a._v(" Guardar cambios ")])])],1)],1)},H=[],$={props:{elemento:{type:Object}},data:function(){return{objeto:null,modal:!1}},methods:{cargarValores:function(){try{this.objeto=this.elemento}catch(a){console.log("....")}},guardarCambios:function(){this.$emit("editar",this.objeto)}},mounted:function(){if(null!=this.elemento&&0!=this.elemento.length)try{this.objeto=this.elemento}catch(a){console.log("....")}}},P=$,N=Object(n["a"])(P,w,H,!1,null,null,null),A=N.exports,D={components:{"agregar-cargo-app":M,"editar-cargo-app":A},data:function(){return{nuevoCargo:"",headers:[{text:"",align:"start",sortable:!1,value:"actividad"},{text:"Horas tarea",value:"horasTarea"},{text:"Costo mes ingeniero",value:"costoMesIngeniero"},{text:"Valor mes ingeniero",value:"valorMesIngeniero"},{text:"Valor Tarea",value:"valorTarea"},{text:"Valor hora ingeniero",value:"valorHoraIngeniero"}],desserts:{},elemento:{},totalTabla:Array(5).fill(0),modalEditar:!1,modalAgregar:!1,elementoSeleccionado:null,posicionTemporal:0}},methods:{agregarCargo:function(a){this.$store.commit("addDesserts",a),this.validarTotalTabla(),this.modalAgregar=!1},eliminarElemento:function(a){console.log("Se elimina elemento: ".concat(this.desserts[a].actividad,".")),this.desserts.splice(a,1),this.validarTotalTabla()},editarElemento:function(a){this.posicionTemporal=a,this.elementoSeleccionado=this.desserts[a],this.modalEditar=!0},editarCargo:function(a){this.$store.commit("editDesserts",this.posicionTemporal,a),this.desserts[this.posicionTemporal]=a,this.modalEditar=!1,this.validarTotalTabla()},validarTotalTabla:function(){var a=this;this.totalTabla=Array(5).fill(0),this.desserts=this.$store.state.desserts,this.desserts.map((function(t,e){a.$set(a.totalTabla,0,a.totalTabla[0]+t.horasTarea),a.$set(a.totalTabla,1,a.totalTabla[1]+t.costoMesIngeniero),a.$set(a.totalTabla,2,a.totalTabla[2]+t.valorMesIngeniero),a.$set(a.totalTabla,3,a.totalTabla[3]+t.valorTarea),a.$set(a.totalTabla,4,a.totalTabla[4]+t.valorHoraIngeniero)}))}},mounted:function(){this.validarTotalTabla()}},E=D,k=(e("880c"),Object(n["a"])(E,T,x,!1,null,"c8489a26",null)),O=k.exports,X={name:"parametros",components:{"Parameter-app":h,"Parameter-table-app":O}},S=X,V=Object(n["a"])(S,m,d,!1,null,null,null),B=V.exports;r["default"].use(u["a"]);var G=[{path:"/",name:"Parametros",component:B},{path:"/estimacion",name:"Estimacion",component:function(){return e.e("about").then(e.bind(null,"33ac"))}}],J=new u["a"]({mode:"history",base:"/Estimacion-Proyectos/",routes:G}),K=J,L=e("2f62"),q=void 0;r["default"].use(L["a"]);var F=new L["a"].Store({state:{desserts:[{actividad:"Administración",horasTarea:2,costoMesIngeniero:6e6,valorMesIngeniero:15e6,valorTarea:187500,valorHoraIngeniero:93750},{actividad:"Diseño",horasTarea:2,costoMesIngeniero:6e6,valorMesIngeniero:15e6,valorTarea:187500,valorHoraIngeniero:93750},{actividad:"Desarrollo",horasTarea:2,costoMesIngeniero:6e6,valorMesIngeniero:15e6,valorTarea:187500,valorHoraIngeniero:93750},{actividad:"Pruebas",horasTarea:2,costoMesIngeniero:6e6,valorMesIngeniero:15e6,valorTarea:187500,valorHoraIngeniero:93750},{actividad:"Instalación",horasTarea:2,costoMesIngeniero:6e6,valorMesIngeniero:15e6,valorTarea:187500,valorHoraIngeniero:93750},{actividad:"Documentación",horasTarea:2,costoMesIngeniero:6e6,valorMesIngeniero:15e6,valorTarea:187500,valorHoraIngeniero:93750}],parametros:{baja:1,media:2,alta:4,muyAlta:6,factorNomina:2.5,totalHorasTarea:9,horasDiariasXDesarrollador:6,diasHabilesXMes:20}},mutations:{addDesserts:function(a,t){return a.desserts.push(t)},editDesserts:function(a,t,e){return q.$set(a.desserts,t,e)},editParams:function(a,t){return a.parametros=t}},actions:{},modules:{}}),z=(e("bf40"),e("ce5b")),Q=e.n(z),R=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"text-center"},[e("v-dialog",{attrs:{transition:a.fullscreen?"dialog-bottom-transition":"dialog-transition",persistent:"",fullscreen:a.fullscreen,width:a.width,scrollable:""},model:{value:a.modal,callback:function(t){a.modal=t},expression:"modal"}},[e("v-card",{staticClass:"fondo-curso-modal"},[e("v-toolbar",{staticClass:"cerrar"},[a._t("modaltitle"),e("v-spacer"),a.mostrarCerrar?e("button",{staticClass:"hvr hvr-scale btn-cerrar",on:{click:function(t){return a.$emit("click",!1)}}},[e("v-icon",[a._v("close")])],1):a._e()],2),e("v-card-text",[e("v-flex",{staticClass:"dialog-content",attrs:{contain:"","text-xs-center":""}},[a._t("modalcontent")],2)],1)],1)],1)],1)},U=[],W={model:{prop:"modal",event:"click"},props:{modal:Boolean,width:{type:String,default:"700px"},fullscreen:{type:Boolean,default:!1},mostrarCerrar:{type:Boolean,default:!0},heightCerrar:{type:String,default:"56px"}},data:function(){return{}}},Y=W,Z=Object(n["a"])(Y,R,U,!1,null,"1ea916eb",null),aa=Z.exports;r["default"].use(Q.a),r["default"].component("modal-app",aa),r["default"].config.productionTip=!1,new r["default"]({router:K,store:F,render:function(a){return a(c)}}).$mount("#app")},"5c0b":function(a,t,e){"use strict";e("9c0c")},"880c":function(a,t,e){"use strict";e("4779")},"9c0c":function(a,t,e){},"9e53":function(a,t,e){},a639:function(a,t,e){"use strict";e("9e53")}});
//# sourceMappingURL=app.4232a600.js.map