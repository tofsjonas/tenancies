(this.webpackJsonptenancies=this.webpackJsonptenancies||[]).push([[0],{119:function(e){e.exports=JSON.parse('{"overview_navbar_brand":"My Tenancies","overview_navbar_placeholder_search":"Search my tenancies...","overview_you_have_no_tenancies":"You have no tenancies, go ahead and add one!","add_tenancy_cancel_button":"Cancel","add_tenancy_save_button":"Save changes","add_tenancy_save_button_is_saving":"saving...","add_tenancy_start_typing_to_fetch":"Start typing to fetch address info:","add_tenancy_fetch_placeholder":"Enter address...","add_tenancy_modal_title":"Add new Tenancy","edit_tenancy_cancel_button":"Cancel","edit_tenancy_save_button":"Save changes","edit_tenancy_save_button_is_saving":"saving...","edit_tenancy_label_size":"Size (m2):","edit_tenancy_label_size_placeholder":"Enter size...","edit_tenancy_label_nbr_of_rooms":"Number of rooms:","edit_tenancy_label_nbr_of_rooms_placeholder":"Enter a number...","edit_tenancy_label_utilities":"Utilities:","edit_tenancy_label_utilities_placeholder":"List utilities...","edit_tenancy_label_tenant_information":"Information about tenant:","edit_tenancy_label_tenant_information_placeholder":"Enter information...","tenancy_item_breadcrumb_back_to_list":"My Tenancies"}')},120:function(e){e.exports=JSON.parse('{"overview_navbar_brand":"Mina fastigheter","overview_you_have_no_tenancies":"Du har inga fastigheter, vars\xe5god och l\xe4gg till en!","overview_navbar_placeholder_search":"S\xf6k","add_tenancy_cancel_button":"Avbryt","add_tenancy_save_button":"Spara adress","add_tenancy_save_button_is_saving":"sparar...","add_tenancy_start_typing_to_fetch":"B\xf6rja skriva f\xf6r att h\xe4mta adress:","add_tenancy_fetch_placeholder":"Adress...","add_tenancy_modal_title":"L\xe4gg till fastighet","edit_tenancy_cancel_button":"Avbryt","edit_tenancy_save_button":"Spara \xe4ndringar","edit_tenancy_save_button_is_saving":"sparar...","edit_tenancy_label_size":"Area (m2):","edit_tenancy_label_size_placeholder":"Area...","edit_tenancy_label_nbr_of_rooms":"Antal rum:","edit_tenancy_label_nbr_of_rooms_placeholder":"Antal rum...","edit_tenancy_label_utilities":"Verktyg?","edit_tenancy_label_utilities_placeholder":"Lista verktyg...","edit_tenancy_label_tenant_information":"Information om hyresg\xe4st:","edit_tenancy_label_tenant_information_placeholder":"Information...","tenancy_item_breadcrumb_back_to_list":"Mina fastigheter"}')},143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),i=n.n(c),s=(n(96),n(37)),o=n(33),u=n(38),l=n(26),d=n(34),_=n(8),b=n(21),f=n(36),j=n(39),h=n(51),g=n(56),p=n(35),O=n(147),v=n(148),y=n(53),m=n(43),x=n(31),S=["en","sv"],w=localStorage.getItem("language")||"en";-1===S.indexOf(w)&&(w="en"),m.a.use(x.e).init({fallbackLng:"en",lng:w,resources:{en:{translations:n(119)},sv:{translations:n(120)}},ns:["translations"],defaultNS:"translations"}),m.a.languages=["en","sv"];m.a;var N,k,I=n(5),E=function(){var e=Object(v.a)().i18n,t=function(t){var n=t.target.value;localStorage.setItem("language",n),e.changeLanguage(n)};return Object(I.jsx)("div",{className:"LanguageToggler",children:S.map((function(n){return Object(I.jsx)(p.a,{variant:n===e.language?"dark":"light",onClick:t,value:n,children:n},n)}))})},T=n(80),C=(n(142),j.a.div(N||(N=Object(f.a)(["\n  #async-tenancy-search {\n    min-width: 20rem;\n  }\n"])))),A=function(e){var t=e.tenancies,n=Object(v.a)().t,r=Object(_.g)(),c=Object(a.useState)([]),i=Object(b.a)(c,2),s=i[0];i[1];return Object(I.jsx)(C,{children:Object(I.jsx)(T.b,{id:"async-tenancy-search",labelKey:"tekst",minLength:1,selected:s,onChange:function(e){e[0]&&r("/tenancy/".concat(e[0].adgangsadresse.id))},options:t,placeholder:n("overview_navbar_placeholder_search"),renderMenuItemChildren:function(e){return Object(I.jsx)("span",{children:e.tekst})}})})},J=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(5)]).then(n.bind(null,155))})),L=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,159))})),P=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,158))})),z=Object(j.a)(p.a)(k||(k=Object(f.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n"]))),D=function(){var e=Object(v.a)().t,t=Object(a.useContext)(l.d),n=t.tenancies,r=t.dispatch,c=Object(a.useState)(!0),i=Object(b.a)(c,2),d=i[0],f=i[1],j=Object(a.useState)(!1),p=Object(b.a)(j,2),m=p[0],x=p[1],S=Object(a.useRef)(!1);Object(a.useEffect)((function(){return S.current=!0,Object(y.d)().then((function(e){S.current&&(r({type:l.c,payload:e}),f(!1))})).catch((function(e){f(!1),console.log(e)})),function(){S.current=!1}}),[r]);return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(h.a,{bg:"light",expand:"lg",children:[Object(I.jsx)(h.a.Brand,{className:"mr-auto",children:e("overview_navbar_brand")}),Object(I.jsx)(E,{}),Object(I.jsx)(A,{tenancies:n})]}),d&&Object(I.jsx)(g.a,{animation:"border",role:"status",children:Object(I.jsx)("span",{className:"sr-only",children:"Loading..."})}),!d&&n&&0===n.length&&Object(I.jsx)(s.a,{children:Object(I.jsx)(u.a,{children:Object(I.jsx)(o.a,{children:e("overview_you_have_no_tenancies")})})}),!d&&n&&n.length>0&&Object(I.jsx)(a.Suspense,{fallback:"",children:Object(I.jsxs)(_.c,{children:[Object(I.jsx)(_.a,{path:"tenancy/:id",element:Object(I.jsx)(L,{})}),Object(I.jsx)(_.a,{path:"*",element:Object(I.jsx)(P,{tenancies:n})})]})}),Object(I.jsx)(z,{onClick:function(){x(!0)},children:Object(I.jsx)(O.a,{})}),Object(I.jsx)(a.Suspense,{fallback:"loading...",children:m&&Object(I.jsx)(J,{hideModal:function(){x(!1)}})})]})};var M=function(){return Object(I.jsx)(d.a,{children:Object(I.jsx)(l.f,{children:Object(I.jsx)(s.a,{children:Object(I.jsx)(u.a,{children:Object(I.jsx)(o.a,{children:Object(I.jsx)(_.c,{children:Object(I.jsx)(_.a,{path:"*",element:Object(I.jsx)(D,{})})})})})})})})},F=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,157)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(M,{})}),document.getElementById("root")),F()},26:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return f}));var a=n(21),r=n(90),c=n(14),i=n(0),s=n(5),o="SET_TENANCIES",u="ADD_TENANCY",l="UPDATE_TENANCY",d="DELETE_TENANCY",_={tenancies:[]},b=function(e,t){switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),{},{tenancies:t.payload});case u:return Object(c.a)(Object(c.a)({},e),{},{tenancies:[].concat(Object(r.a)(e.tenancies),[t.payload])});case l:return Object(c.a)(Object(c.a)({},e),{},{tenancies:e.tenancies.map((function(e){return e.adgangsadresse.id===t.payload.adgangsadresse.id?t.payload:e}))});case d:return Object(c.a)(Object(c.a)({},e),{},{tenancies:e.tenancies.filter((function(e){return e.adgangsadresse.id!==t.payload}))});default:return e}},f=Object(i.createContext)(Object(c.a)(Object(c.a)({},_),{},{dispatch:function(){return null}}));t.f=function(e){var t=e.children,n=Object(i.useReducer)(b,_),r=Object(a.a)(n,2),o=r[0],u=r[1];return Object(s.jsx)(f.Provider,{value:Object(c.a)(Object(c.a)({},o),{},{dispatch:u}),children:t})}},53:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return _}));var a=n(17),r=n.n(a),c=n(30),i=n(83),s=n.n(i),o=function(e){var t=e.query,n=e.success,a=e.fail;s.a.get("https://api.dataforsyningen.dk/adgangsadresser/autocomplete?q="+escape(t)).then((function(e){200===e.status&&n(e.data)})).catch((function(e){a(e)}))},u=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){var n=localStorage.getItem("tenancies")||"[]";try{var a=JSON.parse(n);setTimeout((function(){e(a)}),200)}catch(r){localStorage.setItem("tenancies",""),t(new Error("Data corrupt, resetting!"))}})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=localStorage.getItem("tenancies")||"[]";try{t.created_date=(new Date).toISOString();var r=JSON.parse(a);r.push(t),localStorage.setItem("tenancies",JSON.stringify(r)),setTimeout((function(){e(t)}),600)}catch(c){n(c)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=localStorage.getItem("tenancies")||"[]";try{t.updated_date=(new Date).toISOString();var r=JSON.parse(a).map((function(e){return e.adgangsadresse.id===t.adgangsadresse.id?t:e}));localStorage.setItem("tenancies",JSON.stringify(r)),setTimeout((function(){e(t)}),600)}catch(c){n(c)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=localStorage.getItem("tenancies")||"[]";try{var r=JSON.parse(a).filter((function(e){return e.adgangsadresse.id!==t}));localStorage.setItem("tenancies",JSON.stringify(r)),setTimeout((function(){e()}),200)}catch(c){n(c)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},96:function(e,t,n){}},[[143,1,2]]]);
//# sourceMappingURL=main.02854db3.chunk.js.map