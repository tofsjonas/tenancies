(this.webpackJsonptenancies=this.webpackJsonptenancies||[]).push([[0],{101:function(e){e.exports=JSON.parse('{"overview_navbar_brand":"My Tenancies","overview_navbar_placeholder_search":"Search","overview_you_have_no_tenancies":"You have no tenancies, go ahead and add one!","add_tenancy_cancel_button":"Cancel","add_tenancy_save_button":"Save changes","add_tenancy_save_button_is_saving":"saving...","add_tenancy_start_typing_to_fetch":"Start typing to fetch address info:","add_tenancy_fetch_placeholder":"Enter address...","add_tenancy_modal_title":"Add new Tenancy"}')},102:function(e){e.exports=JSON.parse('{"overview_navbar_brand":"Mina fastigheter","overview_you_have_no_tenancies":"Du har inga fastigheter, vars\xe5god och l\xe4gg till en!","overview_navbar_placeholder_search":"S\xf6k","add_tenancy_cancel_button":"Avbryt","add_tenancy_save_button":"Spara adress","add_tenancy_save_button_is_saving":"sparar...","add_tenancy_start_typing_to_fetch":"B\xf6rja skriva f\xf6r att h\xe4mta adress:","add_tenancy_fetch_placeholder":"Adress...","add_tenancy_modal_title":"L\xe4gg till fastighet"}')},109:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(17),r=n.n(c),s=(n(76),n(30)),i=n(11),o=n(15),u=n(9),l=n(60),d=n(67),j=n(18),b=n(37),f=n(58),h=n(29),O=n(57),g=n(113),v=n(112),p=n(25),_=n(12),x=n(38),m=n(111),y=n(3),S=function(e){var t=e.tenancies,n=parseInt("2"),c=Object(a.useContext)(_.d).dispatch,r=Object(a.useState)(),s=Object(u.a)(r,2),l=s[0],d=s[1],b=Object(a.useState)(1),f=Object(u.a)(b,2),h=f[0],O=f[1],g=Object(a.useState)(1),v=Object(u.a)(g,2),S=v[0],w=v[1];Object(a.useEffect)((function(){S>1&&S>h&&w(S-1)}),[S,h]),Object(a.useEffect)((function(){var e=(S-1)*n,a=S*n;d(t.slice(e,a))}),[S,t,n]),Object(a.useEffect)((function(){var e=Math.ceil(t.length/n);e>0&&O(e)}),[t,n]);return Object(y.jsxs)("div",{className:"TenancyList",children:[l&&l.length>0&&Object(y.jsxs)(y.Fragment,{children:[l.map((function(e){return Object(y.jsxs)(o.a,{className:"mt-1 align-items-center",children:[Object(y.jsx)(i.a,{children:e.tekst}),Object(y.jsx)(i.a,{md:"auto",children:Object(y.jsx)(j.a,{variant:"danger",onClick:function(){var t;t=e.adgangsadresse.id,window.confirm("Are you sure?")&&Object(p.b)(t).then((function(){c({type:_.b,payload:t})})).catch((function(e){console.log(e)}))},children:Object(y.jsx)(m.a,{})})})]},e.tekst)})),h>1&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("br",{}),Object(y.jsx)(x.a,{children:function(){for(var e=[],t=function(t){e.push(Object(y.jsx)(x.a.Item,{active:t===S,onClick:function(){w(t)},children:t},t))},n=1;n<=h;n++)t(n);return e}()})]})]}),l&&0===l.length&&Object(y.jsx)(o.a,{className:"mt-1 align-items-center",children:Object(y.jsxs)(i.a,{children:[Object(y.jsx)("br",{}),"Search result empty :("]})})]})},w=n(32),N=n(22),k=["en","sv"],E=localStorage.getItem("language")||"en";-1===k.indexOf(E)&&(E="en"),w.a.use(N.e).init({fallbackLng:"en",lng:E,resources:{en:{translations:n(101)},sv:{translations:n(102)}},ns:["translations"],defaultNS:"translations"}),w.a.languages=["en","sv"];w.a;var C,T=function(){var e=Object(g.a)().i18n,t=function(t){var n=t.target.value;localStorage.setItem("language",n),e.changeLanguage(n)};return Object(y.jsx)("div",{className:"LanguageToggler",children:k.map((function(n){return Object(y.jsx)(j.a,{variant:n===e.language?"dark":"light",onClick:t,value:n,children:n},n)}))})},I=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,154))})),J=Object(d.a)(j.a)(C||(C=Object(l.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n"]))),L=function(){var e=Object(g.a)().t,t=Object(a.useContext)(_.d),n=t.tenancies,c=t.dispatch,r=Object(a.useState)(!0),l=Object(u.a)(r,2),d=l[0],j=l[1],x=Object(a.useState)(""),m=Object(u.a)(x,2),w=m[0],N=m[1],k=Object(a.useState)([]),E=Object(u.a)(k,2),C=E[0],L=E[1],A=Object(a.useState)(!1),F=Object(u.a)(A,2),P=F[0],D=F[1],B=Object(a.useRef)(!1);Object(a.useEffect)((function(){return B.current=!0,Object(p.d)().then((function(e){B.current&&(c({type:_.c,payload:e}),j(!1))})).catch((function(e){j(!1),console.log(e)})),function(){B.current=!1}}),[c]),Object(a.useEffect)((function(){var e=n.filter((function(e){return new RegExp(w,"i").test(e.tekst)}));L(e)}),[n,w]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(b.a,{bg:"light",expand:"lg",children:[Object(y.jsx)(b.a.Brand,{className:"mr-auto",children:e("overview_navbar_brand")}),Object(y.jsx)(T,{}),Object(y.jsx)(f.a,{inline:!0,children:Object(y.jsx)(h.a,{type:"search",placeholder:e("overview_navbar_placeholder_search"),value:w,onChange:function(e){N(e.target.value)},className:"mr-sm-2"})})]}),Object(y.jsxs)(s.a,{children:[d&&Object(y.jsx)(O.a,{animation:"border",role:"status",children:Object(y.jsx)("span",{className:"sr-only",children:"Loading..."})}),!d&&n&&0===n.length&&Object(y.jsx)(o.a,{children:Object(y.jsx)(i.a,{children:e("overview_you_have_no_tenancies")})}),!d&&n&&n.length>0&&Object(y.jsx)(S,{tenancies:C})]}),Object(y.jsx)(J,{onClick:function(){D(!0)},children:Object(y.jsx)(v.a,{})}),Object(y.jsx)(a.Suspense,{fallback:"loading...",children:P&&Object(y.jsx)(I,{hideModal:function(){D(!1)}})})]})};var A=function(){return Object(y.jsx)(_.e,{children:Object(y.jsx)(s.a,{children:Object(y.jsx)(o.a,{children:Object(y.jsx)(i.a,{children:Object(y.jsx)(L,{})})})})})},F=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,155)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};r.a.render(Object(y.jsx)(A,{}),document.getElementById("root")),F()},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return b}));var a=n(9),c=n(68),r=n(10),s=n(0),i=n(3),o="SET_TENANCIES",u="ADD_TENANCY",l="DELETE_TENANCY",d={tenancies:[]},j=function(e,t){switch(t.type){case o:return Object(r.a)(Object(r.a)({},e),{},{tenancies:t.payload});case u:return Object(r.a)(Object(r.a)({},e),{},{tenancies:[].concat(Object(c.a)(e.tenancies),[t.payload])});case l:return Object(r.a)(Object(r.a)({},e),{},{tenancies:e.tenancies.filter((function(e){return e.adgangsadresse.id!==t.payload}))});default:return e}},b=Object(s.createContext)(Object(r.a)(Object(r.a)({},d),{},{dispatch:function(){return null}}));t.e=function(e){var t=e.children,n=Object(s.useReducer)(j,d),c=Object(a.a)(n,2),o=c[0],u=c[1];return Object(i.jsx)(b.Provider,{value:Object(r.a)(Object(r.a)({},o),{},{dispatch:u}),children:t})}},25:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(16),c=n.n(a),r=n(31),s=n(62),i=n.n(s),o=function(e){var t=e.query,n=e.success,a=e.fail;i.a.get("https://api.dataforsyningen.dk/adgangsadresser/autocomplete?q="+escape(t)).then((function(e){200===e.status&&n(e.data)})).catch((function(e){a(e)}))},u=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){var n=localStorage.getItem("tenancies")||"[]";try{var a=JSON.parse(n);setTimeout((function(){e(a)}),200)}catch(c){localStorage.setItem("tenancies",""),t(new Error("Data corrupt, resetting!"))}})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=localStorage.getItem("tenancies")||"[]";try{var c=JSON.parse(a);c.push(t),localStorage.setItem("tenancies",JSON.stringify(c)),setTimeout((function(){e(t)}),600)}catch(r){n(r)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=localStorage.getItem("tenancies")||"[]";try{var c=JSON.parse(a).filter((function(e){return e.adgangsadresse.id!==t}));localStorage.setItem("tenancies",JSON.stringify(c)),setTimeout((function(){e()}),200)}catch(r){n(r)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},76:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.05d16195.chunk.js.map