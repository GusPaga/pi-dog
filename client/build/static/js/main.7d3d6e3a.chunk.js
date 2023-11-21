(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(32),i=n.n(r),s=n(11),l=n(3),o=n(54),j=n.n(o),d=n(0);function u(){return Object(d.jsxs)("div",{className:j.a.footer,children:[Object(d.jsx)("h5",{children:"\ud83c\udf40 Made with \u2764 for Gustavo Pagano"}),Object(d.jsx)("a",{href:"https://github.com/GusPaga",target:"_blank",rel:"noreferrer",children:" - GitHub "}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/gustavopagano-5b39b4154/",target:"_blank",rel:"noreferrer",children:" - LinkedIn \ud83c\udf40"})]})}var b=n(55),m=n.n(b);function h(){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:m.a.Logo,src:"https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png",alt:"logo Henry"})})}var O=n(56),x=n.n(O),p=n(9),_=n(4),g=n(8),v=n(18),f=n.n(v),N="GET_DOG",w="GET_DETAILS",y="GET_SEARCH_BY_NAME",C="CLEAN_DETAIL",E="GET_TEMPERAMENTS",A="FILTER_BY_TEMP",P="ORDER_BY",S="CREATE",L="API_OR_OWN";function T(){return function(){var e=Object(g.a)(Object(_.a)().mark((function e(t){var n;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/dog");case 3:return n=e.sent,e.abrupt("return",t({type:N,payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log({"Fail actions getAllDog":e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function k(){return function(){var e=Object(g.a)(Object(_.a)().mark((function e(t){var n;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/temperament");case 3:return n=e.sent,e.abrupt("return",t({type:E,payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log({"Fail actions getTemperaments":e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function F(){var e=Object(p.b)();function t(t){e({type:C})}return Object(d.jsx)("div",{className:x.a.butHome,children:Object(d.jsx)(s.b,{to:"/home",children:Object(d.jsx)("button",{type:"submit",onClick:function(e){return t()},children:"HOME"})})})}var D=n(25),H=n.n(D),I=n(13),B=n.n(I),G=n.p+"static/media/unidos.8c4f317a.jpg",R=n.p+"static/media/forest.730070a8.jpg",M=n.p+"static/media/truck.e34e9f00.jpg",W=n.p+"static/media/terraza.94e54f0b.jpg";function K(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=function(){if(e.current.children.length>0){var t=e.current.children[0];e.current.style.transition="3000ms ease-out all";var n=e.current.children[0].offsetWidth;e.current.style.transform="translateX(-".concat(n,"px)");e.current.addEventListener("transitionend",(function n(){e.current.style.transition="none",e.current.style.transform="translateX(0)",e.current.appendChild(t),e.current.removeEventListener("transitionend",n)}))}};return Object(a.useEffect)((function(){return console.log("componenet did mount"),t.current=setInterval((function(){n()}),4e3),e.current.addEventListener("mouseenter",(function(){clearInterval(t.current)})),e.current.addEventListener("mouseleave",(function(){t.current=setInterval((function(){n()}),4e3)})),function(){console.log("component did unmount"),clearInterval(t.current)}}),[]),Object(d.jsx)("div",{className:B.a.sli_principal,children:Object(d.jsxs)("div",{className:B.a.sli_slide,ref:e,children:[Object(d.jsxs)("div",{className:B.a.sli,children:[Object(d.jsx)("img",{className:B.a.sli_img,src:G,alt:"pan"}),Object(d.jsx)("div",{className:B.a.texto,children:Object(d.jsx)("p",{children:"Friend!!"})})]}),Object(d.jsxs)("div",{className:B.a.sli,children:[Object(d.jsx)("img",{className:B.a.sli_img,src:R,alt:"pan"}),Object(d.jsx)("div",{className:B.a.texto,children:Object(d.jsx)("p",{children:"Pet!"})})]}),Object(d.jsxs)("div",{className:B.a.sli,children:[Object(d.jsx)("img",{className:B.a.sli_img,src:M,alt:"pan"}),Object(d.jsx)("div",{className:B.a.texto,children:Object(d.jsx)("p",{children:"Companions!"})})]}),Object(d.jsxs)("div",{className:B.a.sli,children:[Object(d.jsx)("img",{className:B.a.sli_img,src:W,alt:"pan"}),Object(d.jsx)("div",{className:B.a.texto,children:Object(d.jsx)("p",{children:"Guardian!"})})]})]})})}var J=n(35),U=n.n(J);function Y(){return Object(d.jsx)("div",{className:U.a.butForm,children:Object(d.jsx)(s.b,{to:"/aboutEng",children:Object(d.jsx)("button",{children:"ABOUT"})})})}function Z(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("nav",{className:H.a.nav,children:[Object(d.jsx)("div",{className:H.a.navLogo,children:Object(d.jsx)(h,{})}),Object(d.jsx)("div",{className:H.a.navBut,children:Object(d.jsx)(Y,{})})]}),Object(d.jsxs)("div",{className:H.a.landing,children:[Object(d.jsx)("div",{className:H.a.slide,children:Object(d.jsx)(K,{})}),Object(d.jsx)("h1",{children:'"This API was created for HENRY by Gustavo Pagano"'}),Object(d.jsx)(F,{}),Object(d.jsx)("h3",{children:"to enter, touch HOME!"})]}),Object(d.jsx)("div",{children:Object(d.jsx)(u,{})})]})}var X=n(5),V=n(37),$=n.n(V);function z(e){var t=e.name,n=e.image,a=e.min_weight,c=e.max_weight,r=e.temperament;return Object(d.jsxs)("div",{className:$.a.card,children:[Object(d.jsx)("h3",{children:t}),Object(d.jsxs)("div",{className:$.a.detail,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:$.a.img,src:n,alt:t})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:"Weight"}),Object(d.jsxs)("p",{children:["Min: ",a," Kg"]}),Object(d.jsxs)("p",{children:["Max: ",c," Kg"]}),Object(d.jsx)("h5",{children:"Temperment"}),Object(d.jsx)("p",{children:r})]})]})]})}var q=n(16),Q=n.n(q),ee=n(58),te=n.n(ee);function ne(e){var t=e.paginated,n=e.state,a=e.page,c=e.cardsPerPage,r=Math.round(n.length/c);return Object(d.jsxs)("div",{className:te.a.paginated,children:[a>1&&Object(d.jsx)("button",{onClick:function(){return t(a=1)},children:"\u2bc7\u2bc7"}),a>1&&Object(d.jsx)("button",{onClick:function(){return t(a-1)},children:"\u2bc7"}),Object(d.jsx)("button",{children:a}),a<r&&Object(d.jsx)("button",{onClick:function(){return t(a+1)},children:"\u2bc8"}),a<r&&Object(d.jsx)("button",{onClick:function(){return t(a=r)},children:"\u2bc8\u2bc8"})]})}function ae(){return Object(d.jsx)("div",{className:U.a.butForm,children:Object(d.jsx)(s.b,{to:"/form",children:Object(d.jsx)("button",{children:"CREATE"})})})}var ce=n(59),re=n.n(ce);function ie(){return Object(d.jsx)("div",{className:re.a.landing,children:Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("button",{children:"LANDING"})})})}var se=n(60),le=n.n(se);function oe(e){var t=e.setPage,n=Object(p.b)(),c=Object(a.useState)(""),r=Object(X.a)(c,2),i=r[0],s=r[1];function l(e){e.preventDefault(),i?(n(function(e){return function(){var t=Object(g.a)(Object(_.a)().mark((function t(n){var a;return Object(_.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("/dogs?name=".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:y,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log({"Fail actions searchByName":t.t0});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(i)),t(1),s("")):alert("Please, write a valid name!")}return Object(d.jsxs)("div",{className:le.a.search,children:[Object(d.jsx)("button",{type:"submit",onClick:function(e){return l(e)},children:"SEARCH"}),Object(d.jsx)("input",{value:i,type:"text",placeholder:"Write a Breed and push search!",onChange:function(e){return function(e){s(e.target.value)}(e)}})]})}var je=n(38),de=n.n(je);function ue(e){var t=e.state,n=e.temp,a=e.handleFilterByTemp,c=t.filter((function(e){return""!==e.name})).sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}));return Object(d.jsxs)("div",{className:de.a.order,children:[Object(d.jsx)("label",{className:de.a.label,children:"Select Temperament"}),Object(d.jsxs)("select",{className:de.a.temp,value:n,onChange:function(e){return a(e.target.value)},children:[Object(d.jsx)("option",{value:"All",children:"All Temperaments"}),null===c||void 0===c?void 0:c.map((function(e){return Object(d.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})}var be=n(39),me=n.n(be);function he(e){var t=e.setPage,n=e.setOrder,a=Object(p.b)();function c(e){var c;a((c=e.target.value,{type:P,payload:c})),t(1),n("Ordenado ".concat(e.target.value))}return Object(d.jsxs)("div",{className:me.a.order,children:[Object(d.jsx)("label",{className:me.a.label,children:"Select Order"}),Object(d.jsxs)("select",{className:me.a.select,onChange:function(e){return c(e)},children:[Object(d.jsx)("option",{value:"A-Z",children:"Name \ud83e\udc47"}),Object(d.jsx)("option",{value:"Z-A",children:"Name \ud83e\udc45"}),Object(d.jsx)("option",{value:"Asc",children:"Weight \ud83e\udc47"}),Object(d.jsx)("option",{value:"Des",children:"Weight \ud83e\udc45"})]})]})}var Oe=n(61),xe=n.n(Oe);function pe(){return Object(d.jsxs)("div",{className:xe.a.result,children:[Object(d.jsx)("h1",{children:"Sorry, no result found!! "}),Object(d.jsx)("h2",{children:"\ud83d\udd0e"})]})}var _e=n(40),ge=n.n(_e);function ve(e){var t=e.originHandleSelect,n=e.origin;return Object(d.jsxs)("div",{className:ge.a.order,children:[Object(d.jsx)("label",{className:ge.a.label,children:"Select Origins"}),Object(d.jsxs)("select",{value:n,className:ge.a.create,onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("option",{value:"All",children:"All Origins"}),Object(d.jsx)("option",{value:"Api",children:"Only Api"}),Object(d.jsx)("option",{value:"Own",children:"Only Ours"})]})]})}var fe=n(62),Ne=n.n(fe),we=function(e){var t=e.clearHandleClick;return Object(d.jsx)("div",{className:Ne.a.clearBut,children:Object(d.jsx)("button",{onClick:function(e){return t(e)},children:"CLEAR"})})},ye=(n(97),function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("a",{href:"https://www.gifsanimados.org/cat-perros-202.htm",children:Object(d.jsx)("img",{src:"https://www.gifsanimados.org/data/media/202/perro-imagen-animada-0712.gif",border:"0",alt:"perro-imagen-animada-0712"})})})});function Ce(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.dog})),n=Object(p.c)((function(e){return e.temp}));Object(a.useEffect)((function(){e(T())}),[e]),Object(a.useEffect)((function(){e(k())}),[e]);var c=Object(a.useState)(),r=Object(X.a)(c,2),i=r[0],l=r[1];function o(t){e({type:L,payload:t}),v(1),l(t),N("Ordenado ".concat(t))}var j=Object(a.useState)(),u=Object(X.a)(j,2),b=u[0],m=u[1];function O(t){e({type:A,payload:t}),v(1),m(t)}var x=Object(a.useState)(1),_=Object(X.a)(x,2),g=_[0],v=_[1],f=Object(a.useState)(""),N=Object(X.a)(f,2)[1],w=4*g,y=w-4,C=t.slice(y,w),E=Object(a.useState)(!0),P=Object(X.a)(E,2),S=P[0],F=P[1];return t.length>0&&S&&F(!1),S?Object(d.jsx)(ye,{}):Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsxs)("nav",{className:Q.a.nav,children:[Object(d.jsx)("div",{className:Q.a.navLogo,children:Object(d.jsx)(h,{})}),Object(d.jsx)("div",{children:Object(d.jsx)(ne,{page:g,state:t,paginated:function(e){v(e)},cardsPerPage:4})}),Object(d.jsxs)("div",{className:Q.a.navButtons,children:[Object(d.jsx)(ae,{}),Object(d.jsx)(ie,{})]})]})}),Object(d.jsxs)("div",{className:Q.a.filters,children:[Object(d.jsx)(oe,{setPage:v}),Object(d.jsx)(ue,{handleFilterByTemp:O,temp:b,state:n}),Object(d.jsx)(he,{setOrder:N,setPage:v}),Object(d.jsx)(ve,{originHandleSelect:o,origin:i}),Object(d.jsx)(we,{clearHandleClick:function(t){v(1),o("All"),O("All"),e(T()),e(k())}})]}),Object(d.jsx)("div",{className:C.length?Q.a.cards:Q.a.noresult,children:C.length?null===C||void 0===C?void 0:C.map((function(e){return Object(d.jsx)(s.c,{to:"/home/"+e.id,className:Q.a.card,children:Object(d.jsx)(z,{className:Q.a.card,name:e.name,image:e.image,min_weight:e.min_weight,max_weight:e.max_weight,temperament:e.temperament})},e.id)})):Object(d.jsx)(pe,{})})]})}var Ee=n(17),Ae=n.n(Ee);function Pe(){var e=Object(p.c)((function(e){return e.details})),t=Object(p.b)(),n=Object(l.o)();console.log("Detail",e);var c=Object(a.useState)(!0),r=Object(X.a)(c,2),i=r[0],s=r[1];return Object(a.useEffect)((function(){var e;t((e=n.id,function(){var t=Object(g.a)(Object(_.a)().mark((function t(n){var a;return Object(_.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("/dog/".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:w,payload:a.data[0]}));case 7:t.prev=7,t.t0=t.catch(0),console.log({"Fail actions details":t.t0});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}())).then((function(){return s(!1)}))}),[t,n.id]),i?Object(d.jsx)(ye,{}):Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:Ae.a.detail,children:[Object(d.jsx)("div",{className:Ae.a.title,children:Object(d.jsx)("h1",{children:e.name})}),Object(d.jsxs)("div",{className:Ae.a.description,children:[Object(d.jsx)("img",{className:Ae.a.img,src:e.image,alt:e.name}),Object(d.jsxs)("div",{className:Ae.a.paragraph,children:[Object(d.jsx)("h3",{children:"Description:"}),Object(d.jsx)("label",{children:"Weight"}),Object(d.jsxs)("div",{className:Ae.a.div,children:[Object(d.jsx)("p",{children:e.min_weight}),Object(d.jsxs)("p",{children:["-"," "]}),Object(d.jsxs)("p",{children:[e.max_weight," Kg"]})]}),Object(d.jsx)("label",{children:"Height"}),Object(d.jsxs)("div",{className:Ae.a.div,children:[Object(d.jsx)("p",{children:e.min_height}),Object(d.jsxs)("p",{children:["-"," "]}),Object(d.jsxs)("p",{children:[e.max_height," cm"]})]}),Object(d.jsx)("label",{children:"Years of Life"}),Object(d.jsx)("p",{children:e.life}),Object(d.jsx)("label",{children:"Temperaments"}),Object(d.jsxs)("p",{children:[" ",e.temperament]})]})]}),Object(d.jsxs)("div",{className:Ae.a.buttons,children:[Object(d.jsx)(F,{}),Object(d.jsx)(ae,{})]})]})]})}var Se=n(15),Le=n(7),Te=n(6),ke=n(12),Fe=n.n(ke);function De(){var e,t=Object(p.b)(),n=Object(p.c)((function(e){return e.temp})),c=Object(a.useState)({}),r=Object(X.a)(c,2),i=r[0],s=r[1];Object(a.useEffect)((function(){t(k())}),[t]);var l=n.filter((function(e){return""!==e.name})).sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})),o=Object(a.useState)({name:"",min_weight:"",max_weight:"",min_height:"",max_height:"",life:"",image:"",temperament:[]}),j=Object(X.a)(o,2),u=j[0],b=j[1];function m(e){b(Object(Te.a)(Object(Te.a)({},u),{},Object(Le.a)({},e.target.name,e.target.value))),s(function(e){var t={},n=/^[0-99]{1,2}$/;return e.name?/^[A-Z]+$/i.test(e.name)?e.life?/^[0-99]{1,2}-[0-99]{1,2}$/.test(e.life)?e.image?/^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/.test(e.image)?e.min_weight?n.test(e.min_weight)?e.max_weight?n.test(e.max_weight)?e.min_height?n.test(e.min_height)?e.max_height?n.test(e.max_height)?e.temperament||(t.temperament="Select one or more temperaments!"):t.max_height="it is not a valid number!":t.max_height="Insert a max height!":t.min_height="it is not a valid number!":t.min_height="Insert a min height!":t.max_weight="it is not a valid number!":t.max_weight="Insert a max weight!":t.min_weight="it is not a valid number!":t.min_weight="Insert a min weight!":t.image="Please, insert a valid image!":t.image="Insert a image!":t.life="Please, the correct format is 1-9":t.life="Write a range of life!":t.name="Please, write e valid text!":t.name="Please, write a name!",t}(Object(Te.a)(Object(Te.a)({},u),{},Object(Le.a)({},e.target.name,e.target.value)))),console.log("input:",u),console.log("errors:",i)}function O(e){var n;(e.preventDefault(),u.name&&u.life&&u.image&&u.min_weight&&u.max_weight&&u.min_height&&u.max_height&&u.temperament&&!(Object.values(i).filter((function(e){return""!==e})).length>0))?(t((n=u,function(){var e=Object(g.a)(Object(_.a)().mark((function e(t){var a;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("/dog",n);case 3:return a=e.sent,e.abrupt("return",t({type:S,payload:a.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log({"Fail dogCreator":e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),b({name:"",min_weight:"",max_weight:"",min_height:"",max_height:"",life:"",image:"",temperament:[]}),console.log("input",u),alert("Breed Created Successfully")):alert("there are empty fields or with errors!!")}return Object(d.jsxs)("div",{children:[Object(d.jsxs)("nav",{className:Fe.a.nav,children:[Object(d.jsx)("div",{className:Fe.a.navLogo,children:Object(d.jsx)(h,{})}),Object(d.jsxs)("div",{className:Fe.a.navButtons,children:[Object(d.jsx)(F,{}),Object(d.jsx)(ie,{})]})]}),Object(d.jsxs)("form",{className:Fe.a.form,onSubmit:function(e){return O(e)},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:Fe.a.title,children:Object(d.jsx)("h1",{children:"CREATE YOUR SELF DOG!"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:Fe.a.input,type:"text",name:"name",placeholder:"write a name",value:u.name,onChange:function(e){return m(e)}}),Object(d.jsx)("input",{className:Fe.a.input,type:"text",name:"life",placeholder:"write time of life",value:u.life,onChange:function(e){return m(e)}}),Object(d.jsx)("input",{className:Fe.a.input,type:"text",name:"image",placeholder:"insert a image",value:u.image,onChange:function(e){return m(e)}}),Object(d.jsxs)("div",{className:Fe.a.short,children:[Object(d.jsx)("input",{type:"text",name:"min_weight",placeholder:"write a min weight",value:u.min_weight,onChange:function(e){return m(e)}}),Object(d.jsx)("input",{type:"text",name:"max_weight",placeholder:"write a max weight",value:u.max_weight,onChange:function(e){return m(e)}})]}),Object(d.jsxs)("div",{className:Fe.a.short,children:[Object(d.jsx)("input",{type:"text",name:"min_height",placeholder:"write a min height",value:u.min_height,onChange:function(e){return m(e)}}),Object(d.jsx)("input",{type:"text",name:"max_height",placeholder:"write a max height",value:u.max_height,onChange:function(e){return m(e)}})]}),Object(d.jsx)("div",{className:Fe.a.temper,children:Object(d.jsxs)("select",{onChange:function(e){return function(e){-1===u.temperament.indexOf(e.target.value)&&""!==e.target.value&&b(Object(Te.a)(Object(Te.a)({},u),{},{temperament:[].concat(Object(Se.a)(u.temperament),[e.target.value])}))}(e)},name:"temp",children:[Object(d.jsx)("option",{children:"Select Temperament"}),null===l||void 0===l?void 0:l.map((function(e){return Object(d.jsx)("option",{children:e.name},e.id)}))]})}),Object(d.jsxs)("div",{className:Fe.a.errors,children:[i.name&&Object(d.jsx)("p",{className:"errors",children:i.name}),i.life&&Object(d.jsx)("p",{className:"errors",children:i.life}),i.image&&Object(d.jsx)("p",{className:"errors",children:i.image}),i.min_weight&&Object(d.jsx)("p",{className:"errors",children:i.min_weight}),i.max_weight&&Object(d.jsx)("p",{className:"errors",children:i.max_weight}),i.min_height&&Object(d.jsx)("p",{className:"errors",children:i.min_height}),i.max_height&&Object(d.jsx)("p",{className:"errors",children:i.max_height}),i.temperament&&Object(d.jsx)("p",{className:"errors",children:i.temperament})]})]})]}),Object(d.jsx)("button",{className:Fe.a.button,children:"CREATE"}),Object(d.jsx)("ul",{children:Object(d.jsxs)("li",{className:Fe.a.li,children:[u.temperament.length>0&&(null===(e=u.temperament)||void 0===e?void 0:e.map((function(e,t){return Object(d.jsx)("p",{value:e,children:e},t)}))),u.temperament.length>0&&Object(d.jsx)("button",{className:Fe.a.button,onClick:function(e){b(Object(Te.a)(Object(Te.a)({},u),{},{temperament:[]}))},children:"CLEAR TEMP"})]})})]})]})}var He=n(14),Ie=n.n(He),Be=n.p+"static/media/linkedin.f249b382.png",Ge=n.p+"static/media/github.44eee0c4.png",Re=n.p+"static/media/Gustavo.3000073d.png";function Me(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:Ie.a.container,children:[Object(d.jsxs)("div",{className:Ie.a.body,children:[Object(d.jsx)("div",{className:Ie.a.gus,children:Object(d.jsx)("img",{src:Re,alt:"GAP"})}),Object(d.jsxs)("div",{className:Ie.a.contact,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Gustavo Pagano"}),Object(d.jsx)("label",{children:"Nombre"}),Object(d.jsx)("h2",{children:"Maip\xfa - Mendoza - Argentina"}),Object(d.jsx)("label",{children:"Ciudad"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Soy entusiasta de la tecnolog\xeda, me gusta aprender, ense\xf1ar y compartir. Hace poco descubr\xed un mundo nuevo programando."}),Object(d.jsx)("p",{children:"Ahora quiero aplicar todo lo que he aprendido en estos a\xf1os de trabajar para convertirse FullStack Developer!"}),Object(d.jsx)("p",{children:"Puedes contactarme en mis redes sociales :)"})]})]})]}),Object(d.jsxs)("div",{className:Ie.a.rs,children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/gustavopagano-5b39b4154/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:Be,alt:"LinkedIn"})}),Object(d.jsx)("a",{href:"https://github.com/GusPaga",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:Ge,alt:"GitHub"})})]}),Object(d.jsxs)("div",{className:Ie.a.but,children:[Object(d.jsx)("p",{children:'To english version touch "ENG"'}),Object(d.jsx)(s.b,{to:"/aboutEng",children:Object(d.jsx)("button",{children:"ENG"})}),Object(d.jsx)("p",{children:'Para volver presiona "LANDING"'}),Object(d.jsx)(ie,{})]})]})})}function We(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:Ie.a.container,children:[Object(d.jsxs)("div",{className:Ie.a.body,children:[Object(d.jsx)("div",{className:Ie.a.gus,children:Object(d.jsx)("img",{src:Re,alt:"GAP"})}),Object(d.jsxs)("div",{className:Ie.a.contact,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Gustavo Pagano"}),Object(d.jsx)("label",{children:"Name"}),Object(d.jsx)("h2",{children:"Maip\xfa - Mendoza - Argentina"}),Object(d.jsx)("label",{children:"City"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"I am a technology enthusiast, I like to learn, teach and to share. I recently discovered a new world programming."}),Object(d.jsx)("p",{children:"Now I want to apply everything I have learned in these years of work to becomeFullStack Developer!"}),Object(d.jsx)("p",{children:"You can contact me on my social networks :)"})]})]})]}),Object(d.jsxs)("div",{className:Ie.a.rs,children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/gustavopagano-5b39b4154/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:Be,alt:"LinkedIn"})}),Object(d.jsx)("a",{href:"https://github.com/GusPaga",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:Ge,alt:"GitHub"})})]}),Object(d.jsxs)("div",{className:Ie.a.but,children:[Object(d.jsx)("p",{children:'To spanish version touch "ESP"'}),Object(d.jsx)(s.b,{to:"/about",children:Object(d.jsx)("button",{children:"ESP"})}),Object(d.jsx)("p",{children:'To Return touch "LANDING"'}),Object(d.jsx)(ie,{})]})]})})}var Ke=n(30),Je=n.n(Ke);function Ue(){return Object(d.jsx)("div",{className:Je.a.flip,children:Object(d.jsxs)("div",{className:Je.a.card,children:[Object(d.jsx)("div",{className:Je.a.front,children:Object(d.jsx)(Me,{})}),Object(d.jsx)("div",{className:Je.a.back,children:Object(d.jsx)(Me,{})})]})})}n(98);var Ye=function(){return Object(d.jsx)(s.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/",element:Object(d.jsx)(Z,{})}),Object(d.jsx)(l.b,{path:"/home",element:Object(d.jsx)(Ce,{})}),Object(d.jsx)(l.b,{path:"/home/:id",element:Object(d.jsx)(Pe,{})}),Object(d.jsx)(l.b,{path:"/form",element:Object(d.jsx)(De,{})}),Object(d.jsx)(l.b,{path:"/about",element:Object(d.jsx)(Me,{})}),Object(d.jsx)(l.b,{path:"/abouteNG",element:Object(d.jsx)(We,{})}),Object(d.jsx)(l.b,{path:"/prueba",element:Object(d.jsx)(Ue,{})}),Object(d.jsx)(l.b,{path:"*",element:Object(d.jsx)(l.a,{to:"/"})})]})})})},Ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Xe=n(36),Ve=n(63),$e=n(64),ze={dog:[],allDog:[],temp:[],details:[]};var qe=Object(Xe.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(Te.a)(Object(Te.a)({},e),{},{dog:t.payload,allDog:t.payload});case w:return Object(Te.a)(Object(Te.a)({},e),{},{details:t.payload});case y:return Object(Te.a)(Object(Te.a)({},e),{},{dog:t.payload});case C:return Object(Te.a)(Object(Te.a)({},e),{},{details:[]});case E:return Object(Te.a)(Object(Te.a)({},e),{},{temp:t.payload});case A:var n=e.allDog,a="All"===t.payload?n:n.filter((function(e){var n;return null===(n=e.temperament)||void 0===n?void 0:n.includes(t.payload)}));return Object(Te.a)(Object(Te.a)({},e),{},{dog:a});case P:var c;return"A-Z"===t.payload?c=e.dog.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):"Z-A"===t.payload?c=e.dog.sort((function(e,t){return e.name>t.name?-1:t.name>e.name?1:0})):"Asc"===t.payload?c=e.dog.sort((function(e,t){return e.min_weight>t.min_weight?1:t.min_weight>e.min_weight?-1:0})):"Des"===t.payload&&(c=e.dog.sort((function(e,t){return e.max_weight>t.max_weight?-1:t.max_weight>e.max_weight?1:0}))),Object(Te.a)(Object(Te.a)({},e),{},{dog:c});case S:return Object(Te.a)({},e);case L:var r;return r="Own"===t.payload?e.allDog.filter((function(e){return!0===e.createdOnDb})):"Api"===t.payload?e.allDog.filter((function(e){return!1===e.createdOnDb})):e.allDog,Object(Te.a)(Object(Te.a)({},e),{},{dog:r});default:return Object(Te.a)({},e)}}),Object(Ve.composeWithDevTools)(Object(Xe.applyMiddleware)($e.a))),Qe=(n(99),n(65));n.n(Qe).a.config(),f.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API||"http://localhost:3001",i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p.a,{store:qe,children:Object(d.jsx)(Ye,{})})}),document.getElementById("root")),Ze()},12:function(e,t,n){e.exports={form:"Form_form__1MiJN",nav:"Form_nav__1nULj",navButtons:"Form_navButtons__PHE5Z",navLogo:"Form_navLogo__1pA9K",title:"Form_title__2Pypa",input:"Form_input__bYXcB",label:"Form_label__2eAp1",short:"Form_short__2h2Op",temper:"Form_temper__11_V0",li:"Form_li__3NDKF",button:"Form_button__2KNaJ",errors:"Form_errors__3Knu8"}},13:function(e,t,n){e.exports={sli_slide:"Slide_sli_slide__eBcYo",sli:"Slide_sli__1sPh_",sli_img:"Slide_sli_img__l8ikC",texto:"Slide_texto__xSp3B",sli_principal:"Slide_sli_principal__xgU1c",controles:"Slide_controles__1QEiL",botton_right:"Slide_botton_right__2RCiI",botton_left:"Slide_botton_left__2N9I2"}},14:function(e,t,n){e.exports={nav:"About_nav__2mS2h",contact:"About_contact__1Pjjy",container:"About_container__2HFnk",body:"About_body__3D8CM",gus:"About_gus__38P1d",rs:"About_rs__3fPgj",but:"About_but__3I3TV"}},16:function(e,t,n){e.exports={cards:"Home_cards__3k7CH",nav:"Home_nav__2HOb6",navButtons:"Home_navButtons__1aUdC",navLogo:"Home_navLogo__3XFrp",card:"Home_card__2Z7ev",filters:"Home_filters__10Jam"}},17:function(e,t,n){e.exports={detail:"Detail_detail__sAxRE",title:"Detail_title__1lHf6",description:"Detail_description__7d1Rm",buttons:"Detail_buttons__2Jyrk",img:"Detail_img__2MJwt",paragraph:"Detail_paragraph__3lauK",div:"Detail_div__1rYor"}},25:function(e,t,n){e.exports={nav:"Landing_nav__AKl_B",navLogo:"Landing_navLogo__2-hvy",navBut:"Landing_navBut__1DNPx",landing:"Landing_landing__1w9DI",slide:"Landing_slide__20lVJ"}},30:function(e,t,n){e.exports={flip:"Prueba_flip__1GJUx",card:"Prueba_card__1tJWS",front:"Prueba_front__3GGeI",back:"Prueba_back__2S691"}},35:function(e,t,n){e.exports={butForm:"ButForm_butForm__3Z_6s"}},37:function(e,t,n){e.exports={card:"Card_card__3X9rc",detail:"Card_detail__13Pkx",img:"Card_img__3QiXK"}},38:function(e,t,n){e.exports={order:"Temp_order__3nTWT",label:"Temp_label__rc7lE",temp:"Temp_temp__vCN8F"}},39:function(e,t,n){e.exports={order:"Order_order__2TaX-",label:"Order_label__MaIL0",select:"Order_select__12fjo"}},40:function(e,t,n){e.exports={order:"CreateFil_order__1xwH_",label:"CreateFil_label__PVxC8",create:"CreateFil_create__2Hr8W"}},54:function(e,t,n){e.exports={footer:"Footer_footer__aFCLg"}},55:function(e,t,n){e.exports={Logo:"Logo_Logo__vChmE"}},56:function(e,t,n){e.exports={butHome:"ButHome_butHome__y8eEg"}},58:function(e,t,n){e.exports={paginated:"Paginated_paginated__3DWLM"}},59:function(e,t,n){e.exports={landing:"ButLand_landing__11xL-"}},60:function(e,t,n){e.exports={search:"SearchBar_search__11Zwh"}},61:function(e,t,n){e.exports={result:"NoResult_result__2PI2O"}},62:function(e,t,n){e.exports={clearBut:"ClearBut_clearBut__4ZrUG"}},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.7d3d6e3a.chunk.js.map