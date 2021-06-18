(this.webpackJsonptenancies=this.webpackJsonptenancies||[]).push([[1],{102:function(e){e.exports=JSON.parse('{"overview_navbar_brand":"My Tenancies","overview_navbar_placeholder_search":"Search...","overview_you_have_no_tenancies":"You have no tenancies, go ahead and add one!","add_tenancy_cancel_button":"Cancel","add_tenancy_save_button":"Save changes","add_tenancy_save_button_is_saving":"saving...","add_tenancy_start_typing_to_fetch":"Start typing to fetch address info:","add_tenancy_fetch_placeholder":"Enter address...","add_tenancy_modal_title":"Add new Tenancy","edit_tenancy_cancel_button":"Cancel","edit_tenancy_save_button":"Save changes","edit_tenancy_save_button_is_saving":"saving...","edit_tenancy_label_size":"Size (m2):","edit_tenancy_label_size_placeholder":"Enter size...","edit_tenancy_label_nbr_of_rooms":"Number of rooms:","edit_tenancy_label_nbr_of_rooms_placeholder":"Enter a number...","edit_tenancy_label_utilities":"Utilities:","edit_tenancy_label_utilities_placeholder":"List utilities...","edit_tenancy_label_tenant_information":"Information about tenant:","edit_tenancy_label_tenant_information_placeholder":"Enter information...","tenancy_item_breadcrumb_back_to_list":"My Tenancies"}')},103:function(e){e.exports=JSON.parse('{"overview_navbar_brand":"Mina fastigheter","overview_you_have_no_tenancies":"Du har inga fastigheter, vars\xe5god och l\xe4gg till en!","overview_navbar_placeholder_search":"S\xf6k","add_tenancy_cancel_button":"Avbryt","add_tenancy_save_button":"Spara adress","add_tenancy_save_button_is_saving":"sparar...","add_tenancy_start_typing_to_fetch":"B\xf6rja skriva f\xf6r att h\xe4mta adress:","add_tenancy_fetch_placeholder":"Adress...","add_tenancy_modal_title":"L\xe4gg till fastighet","edit_tenancy_cancel_button":"Avbryt","edit_tenancy_save_button":"Spara \xe4ndringar","edit_tenancy_save_button_is_saving":"sparar...","edit_tenancy_label_size":"Area (m2):","edit_tenancy_label_size_placeholder":"Area...","edit_tenancy_label_nbr_of_rooms":"Antal rum:","edit_tenancy_label_nbr_of_rooms_placeholder":"Antal rum...","edit_tenancy_label_utilities":"Verktyg?","edit_tenancy_label_utilities_placeholder":"Lista verktyg...","edit_tenancy_label_tenant_information":"Information om hyresg\xe4st:","edit_tenancy_label_tenant_information_placeholder":"Information...","tenancy_item_breadcrumb_back_to_list":"Mina fastigheter"}')},126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(18),c=n.n(r),i=(n(81),n(32)),s=n(30),o=n(33),l=n(25),_=n(31),u=n(8),d=n(22),b=n(45),f=n(66),g=n(129),h=n(46),j=n(47),v=n(37),p=n(29),y=["en","sv"],O=localStorage.getItem("language")||"en";-1===y.indexOf(O)&&(O="en"),v.a.use(p.e).init({fallbackLng:"en",lng:O,resources:{en:{translations:n(102)},sv:{translations:n(103)}},ns:["translations"],defaultNS:"translations"}),v.a.languages=["en","sv"];v.a;var m=n(7),x=function(){var e=Object(g.a)().i18n,t=function(t){var n=t.target.value;localStorage.setItem("language",n),e.changeLanguage(n)};return Object(m.jsx)("div",{className:"LanguageToggler",children:y.map((function(n){return Object(m.jsx)(j.a,{variant:n===e.language?"dark":"light",onClick:t,value:n,children:n},n)}))})},S=n(75),w=(n(125),function(e){var t=e.tenancies,n=Object(g.a)().t,r=Object(u.g)(),c=Object(a.useState)([]),i=Object(d.a)(c,2),s=i[0];i[1];return Object(m.jsx)(S.a,{align:"right",id:"async-tenancy-search",labelKey:"tekst",minLength:1,selected:s,onChange:function(e){e[0]&&r("/tenancy/".concat(e[0].adgangsadresse.id))},options:t,placeholder:n("overview_navbar_placeholder_search"),renderMenuItemChildren:function(e){return Object(m.jsx)("span",{children:e.tekst})}})}),N=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,145))})),k=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,144))})),E=function(){var e=Object(g.a)().t,t=Object(a.useContext)(l.c),n=t.tenancies,r=t.dispatch,c=Object(a.useState)(!0),_=Object(d.a)(c,2),j=_[0],v=_[1],p=Object(a.useRef)(!1);return Object(a.useEffect)((function(){return p.current=!0,Object(h.b)().then((function(e){p.current&&(r({type:l.b,payload:e}),v(!1))})).catch((function(e){v(!1),console.log(e)})),function(){p.current=!1}}),[r]),Object(m.jsxs)(m.Fragment,{children:[j&&Object(m.jsx)(f.a,{animation:"border",role:"status",children:Object(m.jsx)("span",{className:"sr-only",children:"Loading..."})}),!j&&n&&0===n.length&&Object(m.jsx)(i.a,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(s.a,{children:e("overview_you_have_no_tenancies")})})}),!j&&n&&n.length>0&&Object(m.jsxs)(a.Suspense,{fallback:"",children:[Object(m.jsxs)(b.a,{bg:"light",expand:"lg",children:[Object(m.jsx)(b.a.Brand,{className:"mr-auto",children:e("overview_navbar_brand")}),Object(m.jsx)(x,{}),Object(m.jsx)(w,{tenancies:n})]}),Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"tenancy/:id",element:Object(m.jsx)(N,{})}),Object(m.jsx)(u.a,{path:"*",element:Object(m.jsx)(k,{tenancies:n})})]})]})]})};var I=function(){return Object(m.jsx)(_.a,{children:Object(m.jsx)(l.e,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(s.a,{children:Object(m.jsx)(u.c,{children:Object(m.jsx)(u.a,{path:"*",element:Object(m.jsx)(E,{})})})})})})})})},T=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,143)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};c.a.render(Object(m.jsx)(I,{}),document.getElementById("root")),T()},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return _})),n.d(t,"c",(function(){return b}));var a=n(22),r=n(76),c=n(14),i=n(0),s=n(7),o="SET_TENANCIES",l="UPDATE_TENANCY",_="DELETE_TENANCY",u={tenancies:[]},d=function(e,t){switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),{},{tenancies:t.payload});case"ADD_TENANCY":return Object(c.a)(Object(c.a)({},e),{},{tenancies:[].concat(Object(r.a)(e.tenancies),[t.payload])});case l:return Object(c.a)(Object(c.a)({},e),{},{tenancies:e.tenancies.map((function(e){return e.adgangsadresse.id===t.payload.adgangsadresse.id?t.payload:e}))});case _:return Object(c.a)(Object(c.a)({},e),{},{tenancies:e.tenancies.filter((function(e){return e.adgangsadresse.id!==t.payload}))});default:return e}},b=Object(i.createContext)(Object(c.a)(Object(c.a)({},u),{},{dispatch:function(){return null}}));t.e=function(e){var t=e.children,n=Object(i.useReducer)(d,u),r=Object(a.a)(n,2),o=r[0],l=r[1];return Object(s.jsx)(b.Provider,{value:Object(c.a)(Object(c.a)({},o),{},{dispatch:l}),children:t})}},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o}));var a=n(17),r=n.n(a),c=n(28),i=(n(68),function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){var n=localStorage.getItem("tenancies")||"[]";try{var a=JSON.parse(n);setTimeout((function(){e(a)}),200)}catch(r){localStorage.setItem("tenancies",""),t(new Error("Data corrupt, resetting!"))}})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=localStorage.getItem("tenancies")||"[]";try{t.updated_date=(new Date).toISOString();var r=JSON.parse(a).map((function(e){return e.adgangsadresse.id===t.adgangsadresse.id?t:e}));localStorage.setItem("tenancies",JSON.stringify(r)),setTimeout((function(){e(t)}),600)}catch(c){n(c)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=localStorage.getItem("tenancies")||"[]";try{var r=JSON.parse(a).filter((function(e){return e.adgangsadresse.id!==t}));localStorage.setItem("tenancies",JSON.stringify(r)),setTimeout((function(){e()}),200)}catch(c){n(c)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},81:function(e,t,n){}},[[126,2,3]]]);
//# sourceMappingURL=main.94808446.chunk.js.map