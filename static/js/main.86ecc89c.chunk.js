(this.webpackJsonptenancies=this.webpackJsonptenancies||[]).push([[0],{108:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d}));var a=n(39),c=n.n(a),r=n(3),i=n(57),s=n(22),o=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.data,i=Object(r.a)(Object(r.a)({},a),{},{updated:s.c.FieldValue.serverTimestamp()}),e.next=4,s.a.collection("tenancies").doc(n).update(i);case 4:return e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(i.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,s.a.collection("tenancies").doc(t).delete();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],a=s.a.collection("tenancies").where("owner","==",t.is_anonymous?null:t.uid),e.next=4,a.get();case 4:return e.sent.docs.forEach((function(e){var t=Object(r.a)(Object(r.a)({},e.data()),{},{db_id:e.id});n.push(t)})),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(r.a)(Object(r.a)({},t),{},{owner:n.is_anonymous?null:n.uid,created:s.c.FieldValue.serverTimestamp(),updated:s.c.FieldValue.serverTimestamp(),location:new s.c.GeoPoint(t.x,t.y)}),e.next=3,s.a.collection("tenancies").add(a);case 3:return i=e.sent,a.db_id=i.id,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},140:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},176:function(e){e.exports=JSON.parse('{"overview_navbar_brand":"My Tenancies","overview_navbar_placeholder_search":"Search my tenancies...","overview_you_have_no_tenancies":"You have no tenancies, go ahead and add one!","add_tenancy_cancel_button":"Cancel","add_tenancy_save_button":"Save changes","add_tenancy_save_button_is_saving":"saving...","add_tenancy_start_typing_to_fetch":"Start typing to fetch address info:","add_tenancy_fetch_placeholder":"Enter address...","add_tenancy_modal_title":"Add new Tenancy","add_tenancy_confirmation":"Your tenancy was added!","edit_tenancy_cancel_button":"Cancel","edit_tenancy_save_button":"Save changes","edit_tenancy_save_button_is_saving":"saving...","edit_tenancy_label_size":"Size (m2):","edit_tenancy_label_size_placeholder":"Enter size...","edit_tenancy_label_nbr_of_rooms":"Number of rooms:","edit_tenancy_label_nbr_of_rooms_placeholder":"Enter a number...","edit_tenancy_label_utilities":"Utilities:","edit_tenancy_label_utilities_placeholder":"List utilities...","edit_tenancy_label_tenant_information":"Information about tenant:","edit_tenancy_label_tenant_information_placeholder":"Enter information...","edit_tenancy_saved_confirmation":"Your changes have been saved!","edit_tenancy_delete_button":"Delete Tenancy","edit_tenancy_delete_button_is_deleting":"deleting...","navbar-logout":"Log out","navbar-header":"Tenancy stuff","tenancy_was_deleted_confirmation":"Your tenancy was deleted!","tenancy_item_breadcrumb_back_to_list":"My Tenancies"}')},177:function(e){e.exports=JSON.parse('{"overview_navbar_brand":"Mina fastigheter","overview_you_have_no_tenancies":"Du har inga fastigheter, vars\xe5god och l\xe4gg till en!","overview_navbar_placeholder_search":"S\xf6k","add_tenancy_cancel_button":"Avbryt","add_tenancy_save_button":"Spara adress","add_tenancy_save_button_is_saving":"sparar...","add_tenancy_start_typing_to_fetch":"B\xf6rja skriva f\xf6r att h\xe4mta adress:","add_tenancy_fetch_placeholder":"Adress...","add_tenancy_modal_title":"L\xe4gg till fastighet","add_tenancy_confirmation":"Din fastighet har lagts till!","edit_tenancy_cancel_button":"Avbryt","edit_tenancy_save_button":"Spara \xe4ndringar","edit_tenancy_save_button_is_saving":"sparar...","edit_tenancy_label_size":"Area (m2):","edit_tenancy_label_size_placeholder":"Area...","edit_tenancy_label_nbr_of_rooms":"Antal rum:","edit_tenancy_label_nbr_of_rooms_placeholder":"Antal rum...","edit_tenancy_label_utilities":"Verktyg?","edit_tenancy_label_utilities_placeholder":"Lista verktyg...","edit_tenancy_label_tenant_information":"Information om hyresg\xe4st:","edit_tenancy_label_tenant_information_placeholder":"Information...","edit_tenancy_delete_button":"Ta bort fastighet","edit_tenancy_delete_button_is_deleting":"tar bort...","edit_tenancy_saved_confirmation":"Dina \xe4ndringar har sparats!","navbar-logout":"Logga ut","navbar-header":"Fastighetsmojs","tenancy_was_deleted_confirmation":"Din fastighet \xe4r borttagen!","tenancy_item_breadcrumb_back_to_list":"Mina fastigheter"}')},178:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(37),s=n.n(i),o=(n(140),n(48)),u=n(53),l=n(54),d=n(70),b=n(69),_=n(55),j=(n(144),n(15)),h=n(22),f=n(127),O=n.n(f),v=n(99),g=(n(152),n(153),n(2)),p={signInFlow:"popup",signInOptions:[v.auth.AnonymousAuthProvider.PROVIDER_ID,h.b.auth.EmailAuthProvider.PROVIDER_ID,h.b.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},y=function(){return Object(g.jsx)("div",{className:"fb-container",children:Object(g.jsx)(O.a,{className:"fb-firebaseUi",uiConfig:p,firebaseAuth:h.b.auth()})})},m=function(){return Object(g.jsxs)("div",{className:"login",children:[Object(g.jsx)("h1",{className:"text-center",children:"Login"}),Object(g.jsx)(y,{})]})},x=n(79),w=n(49),S=n(12),E=n(44),T=n(188),I=n(189),N=n(108),A=n(106),C=n(122),D=(n(173),n(107).a.div(a||(a=Object(A.a)(["\n  #async-tenancy-search {\n    min-width: 20rem;\n  }\n"])))),k=function(e){var t=e.tenancies,n=Object(I.a)().t,a=Object(j.f)(),r=Object(c.useState)([]),i=Object(S.a)(r,2),s=i[0];i[1];return Object(g.jsx)(D,{children:Object(g.jsx)(C.b,{id:"async-tenancy-search",labelKey:"tekst",minLength:1,selected:s,onChange:function(e){e[0]&&a("/tenancy/".concat(e[0].id))},options:t,placeholder:n("overview_navbar_placeholder_search"),renderMenuItemChildren:function(e){return Object(g.jsx)("span",{children:e.tekst})}})})},L=n(73),F=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(7)]).then(n.bind(null,227))})),P=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,226))})),R=function(){var e=Object(c.useContext)(w.a).user,t=Object(I.a)().t,n=Object(c.useContext)(d.d),a=n.tenancies,r=n.dispatch,i=Object(c.useState)(!0),s=Object(S.a)(i,2),b=s[0],h=s[1],f=Object(_.c)().warning,O=Object(c.useRef)(!1);return Object(c.useEffect)((function(){return O.current=!0,Object(N.c)(e).then((function(e){O.current&&(r({type:d.c,payload:e}),h(!1))})).catch((function(e){h(!1),f(e.message),console.log(e)})),function(){O.current=!1}}),[r,f,e]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(E.a,{bg:"primary",expand:"sm",children:Object(g.jsxs)(o.a,{children:[Object(g.jsx)(E.a.Brand,{className:"me-auto",children:t("overview_navbar_brand")}),Object(g.jsx)(E.a.Toggle,{"aria-controls":"tenancy-navbar",style:{color:"silver",borderColor:"silver"},children:Object(g.jsx)(T.a,{})}),Object(g.jsx)(E.a.Collapse,{id:"tenancy-navbar",className:"justify-content-end",children:Object(g.jsx)(k,{tenancies:a})})]})}),b&&Object(g.jsx)(L.a,{title:"...fetching tenancies..."}),!b&&a&&0===a.length&&Object(g.jsx)(o.a,{children:Object(g.jsx)(l.a,{children:Object(g.jsx)(u.a,{children:t("overview_you_have_no_tenancies")})})}),!b&&a&&a.length>0&&Object(g.jsx)(c.Suspense,{fallback:Object(g.jsx)(L.a,{title:"...loading page..."}),children:Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{path:"tenancy/:id",element:Object(g.jsx)(F,{})}),Object(g.jsx)(j.a,{path:"*",element:Object(g.jsx)(P,{})})]})})]})},z=function(){var e=Object(c.useContext)(w.a),t=e.user,n=e.is_loading;return Object(g.jsxs)(g.Fragment,{children:[n&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(x.a,{animation:"border"})," ...authenticating..."]}),!n&&Object(g.jsxs)(j.c,{children:[t&&t.uid&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(j.a,{path:"login",element:Object(g.jsx)(m,{})}),Object(g.jsx)(j.a,{path:"*",element:Object(g.jsx)(R,{})})]}),(!t||!t.uid)&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(j.a,{path:"*",element:Object(g.jsx)(m,{})})})]})]})},Y=n(105),G=n(39),B=n.n(G),V=n(57),M=function(){var e=Object(V.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.b.auth().signOut();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=n(78),J=n(94),K=n(76),W=["en","sv"],Q=localStorage.getItem("language")||"en";-1===W.indexOf(Q)&&(Q="en"),J.a.use(K.e).init({fallbackLng:"en",lng:Q,resources:{en:{translations:n(176)},sv:{translations:n(177)}},ns:["translations"],defaultNS:"translations"}),J.a.languages=["en","sv"];J.a;var Z=function(){var e=Object(I.a)().i18n,t=function(t){var n=t.target.value;localStorage.setItem("language",n),e.changeLanguage(n)};return Object(g.jsx)("div",{className:"LanguageToggler",children:W.map((function(n){return Object(g.jsx)(U.a,{variant:n===e.language?"dark":"light",onClick:t,value:n,children:n},n)}))})},q=function(){var e=Object(I.a)().t,t=Object(c.useContext)(w.a).user,n=Object(_.c)().success;return Object(g.jsxs)(E.a,{expand:"sm",className:"container",children:[Object(g.jsx)(E.a.Brand,{className:"mr-auto",children:e("navbar-header")}),Object(g.jsx)(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsxs)(E.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:[t&&t.uid&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Y.a,{title:t.name,id:"collapsible-nav-dropdown",children:Object(g.jsx)(Y.a.Item,{href:"#",onClick:function(e){e.preventDefault(),M().then((function(){n("You have been successfully logged out")})).catch(alert)},children:e("navbar-logout")})})}),Object(g.jsx)(Z,{})]})]})};var H=function(){return Object(g.jsx)(b.a,{children:Object(g.jsx)(_.b,{timeouts:{warning:5e3,danger:1e4,success:2e3},children:Object(g.jsx)(w.b,{children:Object(g.jsxs)(d.f,{children:[Object(g.jsx)(o.a,{fluid:!0,className:"bg-light",children:Object(g.jsx)(l.a,{children:Object(g.jsx)(u.a,{children:Object(g.jsx)(q,{})})})}),Object(g.jsx)(o.a,{children:Object(g.jsx)(l.a,{children:Object(g.jsxs)(u.a,{children:[Object(g.jsx)(_.a,{className:"alert-outlet"}),Object(g.jsx)(z,{})]})})})]})})})})},X=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,225)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(H,{})}),document.getElementById("root")),X()},22:function(e,t,n){"use strict";n.d(t,"c",(function(){return c}));var a=n(9);n.d(t,"b",(function(){return a.a}));n(180),n(179),n(110);a.a.initializeApp({apiKey:"AIzaSyDS1Th9ZSpB5S1eiPe4FT046Wc1PljDhYo",authDomain:"tenancies.firebaseapp.com",projectId:"tenancies",storageBucket:"tenancies.appspot.com",messagingSenderId:"447792445823",appId:"1:447792445823:web:2fa88d20bee035c3cc024a",measurementId:"G-L2EL2TGPQD"});var c=a.a.firestore;a.a.auth().useDeviceLanguage();var r=c();a.a.analytics(),t.a=r},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(12),c=n(3),r=n(73),i=n(0),s=n.n(i),o=n(22),u=n(2),l="SET_USER",d="LOGOUT_USER",b={user:{uid:void 0,name:"Guest",is_anonymous:!1},is_loading:!0},_=function(e,t){switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),{},{user:t.payload,is_loading:!1});case"SET_IS_LOADING":return Object(c.a)(Object(c.a)({},e),{},{is_loading:t.payload});case d:return Object(c.a)(Object(c.a)({},b),{},{is_loading:!1});default:return e}},j=Object(i.createContext)(Object(c.a)(Object(c.a)({},b),{},{dispatch:function(){return null}}));t.b=function(e){var t=e.children,n=Object(i.useReducer)(_,b),h=Object(a.a)(n,2),f=h[0],O=h[1],v=s.a.useRef((function(){}));return Object(i.useEffect)((function(){return v.current=o.b.auth().onAuthStateChanged((function(e){if(e){var t={uid:e.uid,is_anonymous:e.isAnonymous,name:e.displayName||"Guest"};O({type:l,payload:t})}else O({type:d})})),function(){v.current()}}),[O]),Object(u.jsxs)(j.Provider,{value:Object(c.a)(Object(c.a)({},f),{},{dispatch:O}),children:[f.is_loading&&Object(u.jsx)(r.a,{title:"...authenticating..."}),!f.is_loading&&t]})}},70:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return j}));var a=n(12),c=n(56),r=n(3),i=n(0),s=n(2),o="SET_TENANCIES",u="ADD_TENANCY",l="UPDATE_TENANCY",d="DELETE_TENANCY",b={tenancies:[]},_=function(e,t){switch(t.type){case o:return Object(r.a)(Object(r.a)({},e),{},{tenancies:t.payload});case u:return Object(r.a)(Object(r.a)({},e),{},{tenancies:[].concat(Object(c.a)(e.tenancies),[t.payload])});case l:return Object(r.a)(Object(r.a)({},e),{},{tenancies:e.tenancies.map((function(e){return e.id===t.payload.id?t.payload:e}))});case d:return Object(r.a)(Object(r.a)({},e),{},{tenancies:e.tenancies.filter((function(e){return e.id!==t.payload}))});default:return e}},j=Object(i.createContext)(Object(r.a)(Object(r.a)({},b),{},{dispatch:function(){return null}}));t.f=function(e){var t=e.children,n=Object(i.useReducer)(_,b),c=Object(a.a)(n,2),o=c[0],u=c[1];return Object(s.jsx)(j.Provider,{value:Object(r.a)(Object(r.a)({},o),{},{dispatch:u}),children:t})}},73:function(e,t,n){"use strict";n(0);var a=n(79),c=n(2);t.a=function(e){var t=e.title;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a.a,{animation:"border",role:"status"})," ",t]})}}},[[178,1,2]]]);
//# sourceMappingURL=main.86ecc89c.chunk.js.map