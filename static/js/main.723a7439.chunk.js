(this.webpackJsonptenancies=this.webpackJsonptenancies||[]).push([[0],{105:function(e){e.exports=JSON.parse('{"overview_navbar_brand":"My Tenancies","overview_navbar_placeholder_search":"Search...","overview_you_have_no_tenancies":"You have no tenancies, go ahead and add one!","add_tenancy_cancel_button":"Cancel","add_tenancy_save_button":"Save changes","add_tenancy_save_button_is_saving":"saving...","add_tenancy_start_typing_to_fetch":"Start typing to fetch address info:","add_tenancy_fetch_placeholder":"Enter address...","add_tenancy_modal_title":"Add new Tenancy","edit_tenancy_cancel_button":"Cancel","edit_tenancy_save_button":"Save changes","edit_tenancy_save_button_is_saving":"saving...","edit_tenancy_label_size":"Size (m2):","edit_tenancy_label_size_placeholder":"Enter size...","edit_tenancy_label_nbr_of_rooms":"Number of rooms:","edit_tenancy_label_nbr_of_rooms_placeholder":"Enter a number...","edit_tenancy_label_utilities":"Utilities:","edit_tenancy_label_utilities_placeholder":"List utilities...","edit_tenancy_label_tenant_information":"Information about tenant:","edit_tenancy_label_tenant_information_placeholder":"Enter information..."}')},106:function(e){e.exports=JSON.parse('{"overview_navbar_brand":"Mina fastigheter","overview_you_have_no_tenancies":"Du har inga fastigheter, vars\xe5god och l\xe4gg till en!","overview_navbar_placeholder_search":"S\xf6k","add_tenancy_cancel_button":"Avbryt","add_tenancy_save_button":"Spara adress","add_tenancy_save_button_is_saving":"sparar...","add_tenancy_start_typing_to_fetch":"B\xf6rja skriva f\xf6r att h\xe4mta adress:","add_tenancy_fetch_placeholder":"Adress...","add_tenancy_modal_title":"L\xe4gg till fastighet","edit_tenancy_cancel_button":"Avbryt","edit_tenancy_save_button":"Spara \xe4ndringar","edit_tenancy_save_button_is_saving":"sparar...","edit_tenancy_label_size":"Area (m2):","edit_tenancy_label_size_placeholder":"Area...","edit_tenancy_label_nbr_of_rooms":"Antal rum:","edit_tenancy_label_nbr_of_rooms_placeholder":"Antal rum...","edit_tenancy_label_utilities":"Verktyg?","edit_tenancy_label_utilities_placeholder":"Lista verktyg...","edit_tenancy_label_tenant_information":"Information om hyresg\xe4st:","edit_tenancy_label_tenant_information_placeholder":"Information..."}')},113:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(20),r=n.n(c),i=(n(80),n(41)),s=n(16),o=n(23),l=n(10),u=n(63),d=n(71),b=n(14),_=n(49),j=n(54),f=n(40),h=n(53),g=n(120),O=n(119),p=n(32),v=n(19),y=n(50),m=n(115),x=n(116),S=n(117),w=n(118),k=n(26),N=n(66),E=n(3),C=function(e){var t=e.hideModal,n=e.tenancy,a="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=".concat(n.adgangsadresse.y,",").concat(n.adgangsadresse.x,"&fov=70&pitch=0&key=").concat("AIzaSyDMRJ0PlQlYZP2iO0or1VPejkmA1vWm7JQ");return Object(E.jsxs)(k.a,{show:!0,onHide:t,children:[Object(E.jsx)(k.a.Header,{closeButton:!0,children:Object(E.jsx)(k.a.Title,{children:n.tekst})}),Object(E.jsx)(k.a.Body,{className:"text-center",children:Object(E.jsx)(N.a,{crossOrigin:"anonymous",width:"400",height:"400",src:a,rounded:!0})}),Object(E.jsx)(k.a.Footer,{children:Object(E.jsx)(b.a,{variant:"secondary",onClick:t,children:"Close"})})]})},I=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,159))})),A=function(e){var t=e.tenancies,n=parseInt("2"),c=Object(a.useContext)(v.d).dispatch,r=Object(a.useState)(),i=Object(l.a)(r,2),u=i[0],d=i[1],_=Object(a.useState)(1),j=Object(l.a)(_,2),f=j[0],h=j[1],g=Object(a.useState)(1),O=Object(l.a)(g,2),k=O[0],N=O[1],A=Object(a.useState)(null),T=Object(l.a)(A,2),J=T[0],P=T[1],z=Object(a.useState)(null),D=Object(l.a)(z,2),L=D[0],F=D[1];Object(a.useEffect)((function(){k>1&&k>f&&N(k-1)}),[k,f]),Object(a.useEffect)((function(){var e=(k-1)*n,a=k*n;d(t.slice(e,a))}),[k,t,n]),Object(a.useEffect)((function(){var e=Math.ceil(t.length/n);e>0&&h(e)}),[t,n]);return Object(E.jsxs)(E.Fragment,{children:[u&&u.length>0&&Object(E.jsxs)(E.Fragment,{children:[u.map((function(e){return Object(E.jsxs)(o.a,{className:"mt-1 align-items-center",children:[Object(E.jsx)(s.a,{children:e.tekst}),Object(E.jsxs)(s.a,{md:"auto",children:[Object(E.jsx)(b.a,{variant:"primary",onClick:function(){F(e)},children:Object(E.jsx)(m.a,{})}),Object(E.jsx)(b.a,{variant:"primary",onClick:function(){P(e)},children:e.metadata?Object(E.jsx)(x.a,{}):Object(E.jsx)(S.a,{})}),Object(E.jsx)(b.a,{variant:"danger",onClick:function(){var t;t=e.adgangsadresse.id,window.confirm("Are you sure?")&&Object(p.b)(t).then((function(){c({type:v.b,payload:t})})).catch((function(e){console.log(e)}))},children:Object(E.jsx)(w.a,{})})]})]},e.tekst)})),f>1&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("br",{}),Object(E.jsx)(y.a,{children:function(){for(var e=[],t=function(t){e.push(Object(E.jsx)(y.a.Item,{active:t===k,onClick:function(){N(t)},children:t},t))},n=1;n<=f;n++)t(n);return e}()})]})]}),u&&0===u.length&&Object(E.jsx)(o.a,{className:"mt-1 align-items-center",children:Object(E.jsxs)(s.a,{children:[Object(E.jsx)("br",{}),"Search result empty :("]})}),Object(E.jsxs)(a.Suspense,{fallback:"loading...",children:[J&&Object(E.jsx)(I,{tenancy:J,hideModal:function(){P(null)}}),L&&Object(E.jsx)(C,{tenancy:L,hideModal:function(){F(null)}})]})]})},T=n(43),J=n(30),P=["en","sv"],z=localStorage.getItem("language")||"en";-1===P.indexOf(z)&&(z="en"),T.a.use(J.e).init({fallbackLng:"en",lng:z,resources:{en:{translations:n(105)},sv:{translations:n(106)}},ns:["translations"],defaultNS:"translations"}),T.a.languages=["en","sv"];T.a;var D,L=function(){var e=Object(g.a)().i18n,t=function(t){var n=t.target.value;localStorage.setItem("language",n),e.changeLanguage(n)};return Object(E.jsx)("div",{className:"LanguageToggler",children:P.map((function(n){return Object(E.jsx)(b.a,{variant:n===e.language?"dark":"light",onClick:t,value:n,children:n},n)}))})},F=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,158))})),M=Object(d.a)(b.a)(D||(D=Object(u.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n"]))),B=function(){var e=Object(g.a)().t,t=Object(a.useContext)(v.d),n=t.tenancies,c=t.dispatch,r=Object(a.useState)(!0),u=Object(l.a)(r,2),d=u[0],b=u[1],y=Object(a.useState)(""),m=Object(l.a)(y,2),x=m[0],S=m[1],w=Object(a.useState)([]),k=Object(l.a)(w,2),N=k[0],C=k[1],I=Object(a.useState)(!1),T=Object(l.a)(I,2),J=T[0],P=T[1],z=Object(a.useRef)(!1);Object(a.useEffect)((function(){return z.current=!0,Object(p.d)().then((function(e){z.current&&(c({type:v.c,payload:e}),b(!1))})).catch((function(e){b(!1),console.log(e)})),function(){z.current=!1}}),[c]),Object(a.useEffect)((function(){var e=n.filter((function(e){return new RegExp(x,"i").test(e.tekst)}));C(e)}),[n,x]);return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(_.a,{bg:"light",expand:"lg",children:[Object(E.jsx)(_.a.Brand,{className:"mr-auto",children:e("overview_navbar_brand")}),Object(E.jsx)(L,{}),Object(E.jsx)(j.a,{inline:!0,children:Object(E.jsx)(f.a,{type:"search",placeholder:e("overview_navbar_placeholder_search"),value:x,onChange:function(e){S(e.target.value)},className:"mr-sm-2"})})]}),Object(E.jsxs)(i.a,{children:[d&&Object(E.jsx)(h.a,{animation:"border",role:"status",children:Object(E.jsx)("span",{className:"sr-only",children:"Loading..."})}),!d&&n&&0===n.length&&Object(E.jsx)(o.a,{children:Object(E.jsx)(s.a,{children:e("overview_you_have_no_tenancies")})}),!d&&n&&n.length>0&&Object(E.jsx)(A,{tenancies:N})]}),Object(E.jsx)(M,{onClick:function(){P(!0)},children:Object(E.jsx)(O.a,{})}),Object(E.jsx)(a.Suspense,{fallback:"loading...",children:J&&Object(E.jsx)(F,{hideModal:function(){P(!1)}})})]})};var Y=function(){return Object(E.jsx)(v.f,{children:Object(E.jsx)(i.a,{children:Object(E.jsx)(o.a,{children:Object(E.jsx)(s.a,{children:Object(E.jsx)(B,{})})})})})},R=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,160)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};r.a.render(Object(E.jsx)(Y,{}),document.getElementById("root")),R()},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return j}));var a=n(10),c=n(72),r=n(12),i=n(0),s=n(3),o="SET_TENANCIES",l="ADD_TENANCY",u="UPDATE_TENANCY",d="DELETE_TENANCY",b={tenancies:[]},_=function(e,t){switch(t.type){case o:return Object(r.a)(Object(r.a)({},e),{},{tenancies:t.payload});case l:return Object(r.a)(Object(r.a)({},e),{},{tenancies:[].concat(Object(c.a)(e.tenancies),[t.payload])});case u:return Object(r.a)(Object(r.a)({},e),{},{tenancies:e.tenancies.map((function(e){return e.adgangsadresse.id===t.payload.adgangsadresse.id?t.payload:e}))});case d:return Object(r.a)(Object(r.a)({},e),{},{tenancies:e.tenancies.filter((function(e){return e.adgangsadresse.id!==t.payload}))});default:return e}},j=Object(i.createContext)(Object(r.a)(Object(r.a)({},b),{},{dispatch:function(){return null}}));t.f=function(e){var t=e.children,n=Object(i.useReducer)(_,b),c=Object(a.a)(n,2),o=c[0],l=c[1];return Object(s.jsx)(j.Provider,{value:Object(r.a)(Object(r.a)({},o),{},{dispatch:l}),children:t})}},32:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(18),c=n.n(a),r=n(29),i=n(65),s=n.n(i),o=function(e){var t=e.query,n=e.success,a=e.fail;s.a.get("https://api.dataforsyningen.dk/adgangsadresser/autocomplete?q="+escape(t)).then((function(e){200===e.status&&n(e.data)})).catch((function(e){a(e)}))},l=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){var n=localStorage.getItem("tenancies")||"[]";try{var a=JSON.parse(n);setTimeout((function(){e(a)}),200)}catch(c){localStorage.setItem("tenancies",""),t(new Error("Data corrupt, resetting!"))}})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=localStorage.getItem("tenancies")||"[]";try{t.created_date=(new Date).toISOString();var c=JSON.parse(a);c.push(t),localStorage.setItem("tenancies",JSON.stringify(c)),setTimeout((function(){e(t)}),600)}catch(r){n(r)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=localStorage.getItem("tenancies")||"[]";try{t.updated_date=(new Date).toISOString();var c=JSON.parse(a).map((function(e){return e.adgangsadresse.id===t.adgangsadresse.id?t:e}));localStorage.setItem("tenancies",JSON.stringify(c)),setTimeout((function(){e(t)}),600)}catch(r){n(r)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=localStorage.getItem("tenancies")||"[]";try{var c=JSON.parse(a).filter((function(e){return e.adgangsadresse.id!==t}));localStorage.setItem("tenancies",JSON.stringify(c)),setTimeout((function(){e()}),200)}catch(r){n(r)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},80:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.723a7439.chunk.js.map