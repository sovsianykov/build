(this["webpackJsonpreact-fullstack"]=this["webpackJsonpreact-fullstack"]||[]).push([[0],{108:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(9),c=a.n(n),s=(a(108),a(21)),i=a(198),o=a(39),j=a(12),d=a(53),l=a.n(d),u=a(202),b=a.p+"static/media/header_meal.3aac95b8.jpg",O=a(186),h=a(188),m=a(191),x=a(189),_=a(190),v=a(62),f=a.n(v),p=a(2);function g(){return Object(p.jsx)(u.a,{sx:{flexGrow:1},children:Object(p.jsx)(O.a,{position:"fixed",color:"default",style:{top:"10vh"},className:f.a.navbar,children:Object(p.jsxs)(h.a,{variant:"dense",children:[Object(p.jsx)(x.a,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(p.jsx)(o.b,{to:"/",children:Object(p.jsx)(_.a,{})})}),Object(p.jsx)(o.b,{to:"order",children:Object(p.jsx)(x.a,{variant:"contained",color:"secondary","aria-label":"menu",sx:{mr:2},children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})}),Object(p.jsx)(o.b,{to:"orders-store",children:Object(p.jsx)(m.a,{variant:"h6",color:"textPrimary",className:f.a.navbarItem,children:"\u0410\u0440\u0445\u0438\u0432"})})]})})})}var y=function(){return Object(p.jsxs)("header",{className:l.a.header,children:[Object(p.jsx)(u.a,{className:l.a.headerImgContainer,children:Object(p.jsx)("img",{src:b,alt:"header-img",className:l.a.headerImage})}),Object(p.jsx)(g,{})]})},I=a(14),C=a(64),N=a(192),E=a(65),w=a.n(E),L=a(85),T=a.n(L).a.create({baseURL:"https://shoppinglist1979.herokuapp.com/"}),F=a(199),S=function(){var e=Object(s.c)((function(e){return e.orderReducer.localOrderList})),t="",a=Object(F.a)(Date.now(),"hh.mm-dd/MM/yyyy");e.forEach((function(e){return t+=" ".concat(e.name,"  ").concat(e.value," , ")}));try{return T.post("/api/message ",{username:"serhii",message:t,date:a}).then((function(e){console.log(e.data)})),{newMessage:t,date:a}}catch(r){}},R=function(){var e=S(),t=e.newMessage,a=e.date,r={url:" ".concat(a,"  ").concat(t,"  "),button:C.ShareButtonRectangle,buttons:[{network:"Email",icon:N.a}],text:" ".concat(a,"  ").concat(t,"  ")};return Object(p.jsx)("footer",{className:w.a.footer,children:Object(p.jsx)("div",{className:w.a.shareIcon,children:Object(p.jsx)(C.ShareBlockStandard,Object(I.a)({},r))})})},D=a(45),P=a.n(D),k=a(89),U=a(193),G=a(203),M=a(200),H=a(204),B=a(46),A=a.n(B),V=a(66),X="FETCH_START",J="FETCH_SUCCESS",W="FETCH_FAILURE",Q="POST_THE_POST",Y="ADD_PRODUCT";function z(e){return function(t){t({type:Y,payload:e})}}var K=function(e){var t=e.product,a=Object(s.b)(),n=Object(r.useState)(t),c=Object(k.a)(n,2),i=c[0],o=c[1],j=Object(r.useCallback)((function(e){o(Object(I.a)(Object(I.a)({},i),{},{value:e.target.value})),a(z(i))}),[a,i]);return Object(r.useEffect)((function(){a(z(i))}),[i,a]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(U.a,{fullWidth:!0,className:P.a.formItem,children:[Object(p.jsx)(G.a,{id:i.name,className:P.a.inputForm,children:i.name.toUpperCase()}),Object(p.jsxs)(M.a,{labelId:i.name,id:i.name,value:i.value,label:i.name.toUpperCase(),name:i.name,onChange:j,children:[Object(p.jsx)(H.a,{value:"1",children:"1"}),Object(p.jsx)(H.a,{value:"1\u0434\u0435\u0441\u044f\u0442\u043e\u043a",children:"1 \u0434\u0435\u0441\u044f\u0442\u043e\u043a"}),Object(p.jsx)(H.a,{value:"1\u0448\u0442",children:"1\u0448\u0442"}),Object(p.jsx)(H.a,{value:"1\u043a\u0433",children:"1\u043a\u0433"}),Object(p.jsx)(H.a,{value:"2\u043a\u0433",children:"2\u043a\u0433"}),Object(p.jsx)(H.a,{value:"3\u043a\u0433",children:"3\u043a\u0433"}),Object(p.jsx)(H.a,{value:7,children:"7"}),Object(p.jsx)(H.a,{value:8,children:"8"}),Object(p.jsx)(H.a,{value:9,children:"9"}),Object(p.jsx)(H.a,{value:10,children:"10"}),Object(p.jsx)(H.a,{value:15,children:"15"}),Object(p.jsx)(H.a,{value:20,children:"20"}),Object(p.jsx)(H.a,{value:"200\u0433",children:"200\u0433"}),Object(p.jsx)(H.a,{value:"500\u0433",children:"500\u0433"}),Object(p.jsx)(H.a,{value:"2\u043a\u0433",children:"2\u043a\u0433"})]})]})})},Z=Object(r.memo)(K),q=["\u044f\u0439\u0446\u0430","\u043c\u043e\u043b\u043e\u043a\u043e","\u0445\u043b\u0435\u0431","\u043a\u0443\u0440\u0438\u0446\u0430","\u043f\u043e\u043c\u0438\u0434\u043e\u0440\u044b","\u043e\u0433\u0443\u0440\u0446\u044b","\u043a\u0430\u043f\u0443\u0441\u0442\u0430","\u0431\u0430\u043d\u0430\u043d\u044b","\u043b\u0443\u043a","\u043c\u043e\u0440\u043a\u043e\u0432\u044c","\u0444\u0438\u043b\u0435","\u0441\u043c\u0435\u0442\u0430\u043d\u0430"];function $(){var e=q.map((function(e,t){var a={};return a.name=e,a.value="",a.id=t,a}));return Object(p.jsx)(u.a,{sx:{minWidth:120},className:P.a.formContainer,children:e.map((function(e){return Object(p.jsx)(Z,{product:e},e.id)}))})}var ee=function(){return Object(p.jsx)("div",{children:Object(p.jsx)($,{})})},te=a(92),ae=a(86),re=a.n(ae),ne=function(){var e=S(),t=e.newMessage,a=e.date;return Object(p.jsx)("section",{children:Object(p.jsxs)(te.a,{className:re.a.container,children:[Object(p.jsxs)(m.a,{variant:"h5",align:"center",color:"textPrimary",children:["\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043f\u0440\u0438\u043d\u044f\u0442 ",Object(p.jsx)("br",{}),"\u0432\u0440\u0435\u043c\u044f ",a]}),Object(p.jsx)(m.a,{variant:"h5",align:"center",color:"textPrimary",children:t})]})})},ce=a(87),se=a.n(ce),ie=function(e){var t=e.children;return Object(p.jsx)("div",{className:se.a.layoutContainer,children:t})},oe=a(52),je=a.n(oe),de=a(197),le=a(194),ue=a(196),be=a(195);function Oe(e){var t=e.content,a=e.date;return Object(p.jsxs)(le.a,{sx:{minWidth:"275px"},children:[Object(p.jsxs)(be.a,{children:[Object(p.jsxs)(m.a,{sx:{mb:1.5},children:["\u0434\u0430\u0442\u0430 \u0437\u0430\u043a\u0430\u0437\u0430 ",a,Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsx)(m.a,{variant:"body2",children:t})]}),Object(p.jsx)(ue.a,{children:Object(p.jsx)(x.a,{size:"small",children:"see more"})})]})}var he=function(e){var t=e.order;return Object(p.jsx)(de.a,{item:!0,xs:12,md:4,className:je.a.mainGridItem,children:Object(p.jsx)(Oe,{content:t.message,date:t.date})})},me=function(e){var t=e.orders;return console.log(t),Object(p.jsx)(u.a,{children:Object(p.jsx)(de.a,{container:!0,spacing:0,className:je.a.mainGrid,children:t.map((function(e){return Object(p.jsx)(he,{order:e},e._id)}))})})},xe=function(){var e=Object(s.b)();Object(r.useEffect)((function(){e((function(e){e({type:X})})),e(function(){var e=Object(V.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("/api/messages ").then((function(e){return e.data}));case 2:a=e.sent,t({type:J,payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e])},_e=function(){xe();var e=Object(s.c)((function(e){return e.orderReducer})),t=e.ordersList,a=e.isLoading,r=e.error;return a?Object(p.jsx)("h1",{children:"Loading ... "}):r?Object(p.jsx)("h1",{children:"ups! something vent wrong !  ... "}):Object(p.jsx)("main",{children:Object(p.jsx)(me,{orders:t})})};var ve=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(i.a,{}),Object(p.jsxs)(o.a,{children:[Object(p.jsx)(y,{}),Object(p.jsx)(j.c,{children:Object(p.jsxs)(ie,{children:[Object(p.jsx)(j.a,{path:"/",exact:!0,component:ee}),Object(p.jsx)(j.a,{path:"/order",component:ne}),Object(p.jsx)(j.a,{path:"/orders-store",component:_e})]})})]}),Object(p.jsx)(R,{})]})},fe=a(47),pe={ordersList:[],isLoading:!1,error:null,localOrderList:[],currentPost:""},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case J:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,ordersList:t.payload});case W:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,error:t.payload});case Q:return Object(I.a)(Object(I.a)({},e),{},{currentPost:t.payload});case Y:return Object(I.a)(Object(I.a)({},e),{},{localOrderList:e.localOrderList.concat(t.payload).filter((function(e){return""!==e.value}))});default:return e}},ye=a(88),Ie=Object(fe.b)({orderReducer:ge}),Ce=Object(fe.d)(Ie,Object(fe.c)(Object(fe.a)(ye.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(Object(p.jsx)(s.a,{store:Ce,children:Object(p.jsx)(ve,{})}),document.getElementById("root"))},45:function(e,t,a){e.exports={formContainer:"OrderForm_formContainer__3t-E2",inputForm:"OrderForm_inputForm__1oa8v",formItem:"OrderForm_formItem__932D_",submitButton:"OrderForm_submitButton__1OoTR"}},52:function(e,t,a){e.exports={mainGrid:"MainGrid_mainGrid__1QAQd",mainGridItem:"MainGrid_mainGridItem__3IsC-"}},53:function(e,t,a){e.exports={header:"Header_header__mY0RU",headerImgContainer:"Header_headerImgContainer__1r8tJ",headerImage:"Header_headerImage__-Cu0w",navigation:"Header_navigation__3ptga"}},62:function(e,t,a){e.exports={navbar:"Navbar_navbar__2PKTC",navbarItem:"Navbar_navbarItem__MIZw2"}},65:function(e,t,a){e.exports={footer:"Footer_footer__1VaRD",shareIcon:"Footer_shareIcon__IMvxO"}},86:function(e,t,a){e.exports={container:"Page_container__1Uknw",title:"Page_title__2DNs9",date:"Page_date__iYODo"}},87:function(e,t,a){e.exports={layoutContainer:"Layout_layoutContainer__1gVB1"}}},[[151,1,2]]]);
//# sourceMappingURL=main.eff50df4.chunk.js.map