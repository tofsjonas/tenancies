(this.webpackJsonptenancies=this.webpackJsonptenancies||[]).push([[0],{122:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},158:function(e){e.exports=JSON.parse('{"overview_navbar_brand":"My Tenancies","overview_navbar_placeholder_search":"Search my tenancies...","overview_you_have_no_tenancies":"You have no tenancies, go ahead and add one!","add_tenancy_cancel_button":"Cancel","add_tenancy_save_button":"Save changes","add_tenancy_save_button_is_saving":"saving...","add_tenancy_start_typing_to_fetch":"Start typing to fetch address info:","add_tenancy_fetch_placeholder":"Enter address...","add_tenancy_modal_title":"Add new Tenancy","add_tenancy_confirmation":"Your tenancy was added!","edit_tenancy_cancel_button":"Cancel","edit_tenancy_save_button":"Save changes","edit_tenancy_save_button_is_saving":"saving...","edit_tenancy_label_size":"Size (m2):","edit_tenancy_label_size_placeholder":"Enter size...","edit_tenancy_label_nbr_of_rooms":"Number of rooms:","edit_tenancy_label_nbr_of_rooms_placeholder":"Enter a number...","edit_tenancy_label_utilities":"Utilities:","edit_tenancy_label_utilities_placeholder":"List utilities...","edit_tenancy_label_tenant_information":"Information about tenant:","edit_tenancy_label_tenant_information_placeholder":"Enter information...","edit_tenancy_saved_confirmation":"Your changes have been saved!","edit_tenancy_delete_button":"Delete Tenancy","edit_tenancy_delete_button_is_deleting":"deleting...","tenancy_was_deleted_confirmation":"Your tenancy was deleted!","tenancy_item_breadcrumb_back_to_list":"My Tenancies"}')},159:function(e){e.exports=JSON.parse('{"overview_navbar_brand":"Mina fastigheter","overview_you_have_no_tenancies":"Du har inga fastigheter, vars\xe5god och l\xe4gg till en!","overview_navbar_placeholder_search":"S\xf6k","add_tenancy_cancel_button":"Avbryt","add_tenancy_save_button":"Spara adress","add_tenancy_save_button_is_saving":"sparar...","add_tenancy_start_typing_to_fetch":"B\xf6rja skriva f\xf6r att h\xe4mta adress:","add_tenancy_fetch_placeholder":"Adress...","add_tenancy_modal_title":"L\xe4gg till fastighet","add_tenancy_confirmation":"Din fastighet har lagts till!","edit_tenancy_cancel_button":"Avbryt","edit_tenancy_save_button":"Spara \xe4ndringar","edit_tenancy_save_button_is_saving":"sparar...","edit_tenancy_label_size":"Area (m2):","edit_tenancy_label_size_placeholder":"Area...","edit_tenancy_label_nbr_of_rooms":"Antal rum:","edit_tenancy_label_nbr_of_rooms_placeholder":"Antal rum...","edit_tenancy_label_utilities":"Verktyg?","edit_tenancy_label_utilities_placeholder":"Lista verktyg...","edit_tenancy_label_tenant_information":"Information om hyresg\xe4st:","edit_tenancy_label_tenant_information_placeholder":"Information...","edit_tenancy_delete_button":"Ta bort fastighet","edit_tenancy_delete_button_is_deleting":"tar bort...","edit_tenancy_saved_confirmation":"Dina \xe4ndringar har sparats!","tenancy_was_deleted_confirmation":"Din fastighet \xe4r borttagen!","tenancy_item_breadcrumb_back_to_list":"Mina fastigheter"}')},161:function(e,t,n){"use strict";n.r(t);var a,c,r=n(0),i=n.n(r),s=n(37),o=n.n(s),u=(n(122),n(47)),l=n(44),d=n(48),b=n(57),_=n(56),j=n(46),h=(n(126),n(14)),f=n(30),O=n(19),g=n(111),p=n.n(g),v=n(79),m=(n(134),n(135),n(3)),y={signInFlow:"popup",signInOptions:[v.auth.AnonymousAuthProvider.PROVIDER_ID,O.b.auth.EmailAuthProvider.PROVIDER_ID,O.b.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},x=function(){var e=Object(r.useState)(!1),t=Object(f.a)(e,2),n=t[0],a=t[1],c=i.a.useRef((function(){}));return Object(r.useEffect)((function(){return c.current=O.b.auth().onAuthStateChanged((function(e){a(!!e)})),function(){c.current()}}),[]),Object(m.jsxs)("div",{className:"fb-container",children:[!n&&Object(m.jsx)("div",{children:Object(m.jsx)(p.a,{className:"fb-firebaseUi",uiConfig:y,firebaseAuth:O.b.auth()})}),n&&Object(m.jsxs)("div",{className:"fb-signedIn",children:["You are now signed In!",Object(m.jsx)("a",{className:"fb-button",onClick:function(){return O.b.auth().signOut()},children:"Sign-out"})]})]})},w=function(){return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("h1",{className:"text-center",children:"Login"}),Object(m.jsx)(x,{})]})},S=n(62),E=n(36),I=n(63),N=n(64),A=n(42),T=n(53),k=n(170),C=n(171),D=n(87),L=n(107),P=(n(157),N.a.div(a||(a=Object(I.a)(["\n  #async-tenancy-search {\n    min-width: 20rem;\n  }\n"])))),F=function(e){var t=e.tenancies,n=Object(C.a)().t,a=Object(h.g)(),c=Object(r.useState)([]),i=Object(f.a)(c,2),s=i[0];i[1];return Object(m.jsx)(P,{children:Object(m.jsx)(L.b,{id:"async-tenancy-search",labelKey:"tekst",minLength:1,selected:s,onChange:function(e){e[0]&&a("/tenancy/".concat(e[0].id))},options:t,placeholder:n("overview_navbar_placeholder_search"),renderMenuItemChildren:function(e){return Object(m.jsx)("span",{children:e.tekst})}})})},R=n(55),z=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,209))})),Y=Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(7)]).then(n.bind(null,210))})),G=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,208))})),B=Object(N.a)(T.a)(c||(c=Object(I.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n"]))),M=function(){var e=Object(r.useContext)(E.a).user,t=Object(C.a)().t,n=Object(r.useContext)(b.d),a=n.tenancies,c=n.dispatch,i=Object(r.useState)(!0),s=Object(f.a)(i,2),o=s[0],_=s[1],O=Object(r.useState)(!1),g=Object(f.a)(O,2),p=g[0],v=g[1],y=Object(j.c)().warning,x=Object(r.useRef)(!1);Object(r.useEffect)((function(){return x.current=!0,Object(D.c)(e).then((function(e){x.current&&(c({type:b.c,payload:e}),_(!1))})).catch((function(e){_(!1),y(e.message),console.log(e)})),function(){x.current=!1}}),[c,y,e]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(A.a,{bg:"primary",expand:"lg",children:[Object(m.jsx)(A.a.Brand,{className:"mr-auto",children:t("overview_navbar_brand")}),Object(m.jsx)(F,{tenancies:a})]}),o&&Object(m.jsx)(R.a,{title:"...fetching tenancies..."}),!o&&a&&0===a.length&&Object(m.jsx)(u.a,{children:Object(m.jsx)(d.a,{children:Object(m.jsx)(l.a,{children:t("overview_you_have_no_tenancies")})})}),!o&&a&&a.length>0&&Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)(R.a,{title:"...loading page..."}),children:Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"tenancy/:id",element:Object(m.jsx)(Y,{})}),Object(m.jsx)(h.a,{path:"*",element:Object(m.jsx)(G,{tenancies:a})})]})}),Object(m.jsx)(B,{onClick:function(){v(!0)},children:Object(m.jsx)(k.a,{})}),Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)(R.a,{title:"...loading modal..."}),children:p&&Object(m.jsx)(z,{hideModal:function(){v(!1)}})})]})},V=function(){var e=Object(r.useContext)(E.a),t=e.user,n=e.is_loading;return Object(m.jsxs)(m.Fragment,{children:[n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S.a,{animation:"border"})," ...authenticating..."]}),!n&&Object(m.jsxs)(h.c,{children:[t&&t.uid&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h.a,{path:"login",element:Object(m.jsx)(w,{})}),Object(m.jsx)(h.a,{path:"*",element:Object(m.jsx)(M,{})})]}),(!t||!t.uid)&&Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(h.a,{path:"*",element:Object(m.jsx)(w,{})})})]})]})},U=n(85),J=n(29),K=n.n(J),W=n(50),Q=function(){var e=Object(W.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.b.auth().signOut();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=n(73),q=n(60),H=["en","sv"],X=localStorage.getItem("language")||"en";-1===H.indexOf(X)&&(X="en"),Z.a.use(q.e).init({fallbackLng:"en",lng:X,resources:{en:{translations:n(158)},sv:{translations:n(159)}},ns:["translations"],defaultNS:"translations"}),Z.a.languages=["en","sv"];Z.a;var $=function(){var e=Object(C.a)().i18n,t=function(t){var n=t.target.value;localStorage.setItem("language",n),e.changeLanguage(n)};return Object(m.jsx)("div",{className:"LanguageToggler",children:H.map((function(n){return Object(m.jsx)(T.a,{variant:n===e.language?"dark":"light",onClick:t,value:n,children:n},n)}))})},ee=function(){var e=Object(r.useContext)(E.a).user,t=Object(j.c)().success;return Object(m.jsxs)(A.a,{expand:"sm",className:"container",children:[Object(m.jsx)(A.a.Brand,{className:"mr-auto",children:"Tenancy Stuff"}),Object(m.jsx)(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsxs)(A.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:[e&&e.uid&&Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(U.a,{title:e.name,id:"collapsible-nav-dropdown",children:Object(m.jsx)(U.a.Item,{href:"#",onClick:function(e){e.preventDefault(),Q().then((function(){t("You have been successfully logged out")})).catch(alert)},children:"Logout"})})}),Object(m.jsx)($,{})]})]})};var te=function(){return Object(m.jsx)(_.a,{children:Object(m.jsx)(j.b,{timeouts:{warning:5e3,danger:1e4,success:2e3},children:Object(m.jsx)(E.b,{children:Object(m.jsxs)(b.f,{children:[Object(m.jsx)(u.a,{fluid:!0,className:"bg-light",children:Object(m.jsx)(d.a,{children:Object(m.jsx)(l.a,{children:Object(m.jsx)(ee,{})})})}),Object(m.jsx)(u.a,{children:Object(m.jsx)(d.a,{children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(j.a,{className:"alert-outlet"}),Object(m.jsx)(V,{})]})})})]})})})})},ne=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,207)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(te,{})}),document.getElementById("root")),ne()},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return c}));var a=n(9);n.d(t,"b",(function(){return a.a}));n(163),n(162),n(92);a.a.initializeApp({apiKey:"AIzaSyDS1Th9ZSpB5S1eiPe4FT046Wc1PljDhYo",authDomain:"tenancies.firebaseapp.com",projectId:"tenancies",storageBucket:"tenancies.appspot.com",messagingSenderId:"447792445823",appId:"1:447792445823:web:2fa88d20bee035c3cc024a",measurementId:"G-L2EL2TGPQD"});var c=a.a.firestore;a.a.auth().useDeviceLanguage();var r=c();a.a.analytics(),t.a=r},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(30),c=n(16),r=n(55),i=n(0),s=n.n(i),o=n(19),u=n(3),l="SET_USER",d="LOGOUT_USER",b={user:{uid:void 0,name:"Guest",is_anonymous:!1},is_loading:!0},_=function(e,t){switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),{},{user:t.payload,is_loading:!1});case"SET_IS_LOADING":return Object(c.a)(Object(c.a)({},e),{},{is_loading:t.payload});case d:return Object(c.a)(Object(c.a)({},b),{},{is_loading:!1});default:return e}},j=Object(i.createContext)(Object(c.a)(Object(c.a)({},b),{},{dispatch:function(){return null}}));t.b=function(e){var t=e.children,n=Object(i.useReducer)(_,b),h=Object(a.a)(n,2),f=h[0],O=h[1];return s.a.useEffect((function(){o.b.auth().onAuthStateChanged((function(e){if(e){var t={uid:e.uid,is_anonymous:e.isAnonymous,name:e.displayName||"Guest"};O({type:l,payload:t})}else O({type:d})}))}),[O]),Object(u.jsxs)(j.Provider,{value:Object(c.a)(Object(c.a)({},f),{},{dispatch:O}),children:[f.is_loading&&Object(u.jsx)(r.a,{title:"...authenticating..."}),!f.is_loading&&t]})}},55:function(e,t,n){"use strict";n(0);var a=n(62),c=n(3);t.a=function(e){var t=e.title;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a.a,{animation:"border",role:"status"})," ",t]})}},57:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return j}));var a=n(30),c=n(108),r=n(16),i=n(0),s=n(3),o="SET_TENANCIES",u="ADD_TENANCY",l="UPDATE_TENANCY",d="DELETE_TENANCY",b={tenancies:[]},_=function(e,t){switch(t.type){case o:return Object(r.a)(Object(r.a)({},e),{},{tenancies:t.payload});case u:return Object(r.a)(Object(r.a)({},e),{},{tenancies:[].concat(Object(c.a)(e.tenancies),[t.payload])});case l:return Object(r.a)(Object(r.a)({},e),{},{tenancies:e.tenancies.map((function(e){return e.id===t.payload.id?t.payload:e}))});case d:return Object(r.a)(Object(r.a)({},e),{},{tenancies:e.tenancies.filter((function(e){return e.id!==t.payload}))});default:return e}},j=Object(i.createContext)(Object(r.a)(Object(r.a)({},b),{},{dispatch:function(){return null}}));t.f=function(e){var t=e.children,n=Object(i.useReducer)(_,b),c=Object(a.a)(n,2),o=c[0],u=c[1];return Object(s.jsx)(j.Provider,{value:Object(r.a)(Object(r.a)({},o),{},{dispatch:u}),children:t})}},87:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d}));var a=n(29),c=n.n(a),r=n(16),i=n(50),s=n(19),o=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.data,i=Object(r.a)(Object(r.a)({},a),{},{updated:s.c.FieldValue.serverTimestamp()}),e.next=4,s.a.collection("tenancies").doc(n).update(i);case 4:return e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(i.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,s.a.collection("tenancies").doc(t).delete();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],a=s.a.collection("tenancies").where("owner","==",t.is_anonymous?null:t.uid),e.next=4,a.get();case 4:return e.sent.docs.forEach((function(e){var t=Object(r.a)(Object(r.a)({},e.data()),{},{db_id:e.id});n.push(t)})),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(r.a)(Object(r.a)({},t),{},{owner:n.is_anonymous?null:n.uid,created:s.c.FieldValue.serverTimestamp(),updated:s.c.FieldValue.serverTimestamp(),location:new s.c.GeoPoint(t.x,t.y)}),e.next=3,s.a.collection("tenancies").add(a);case 3:return i=e.sent,a.db_id=i.id,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}},[[161,1,2]]]);
//# sourceMappingURL=main.8c6f1399.chunk.js.map