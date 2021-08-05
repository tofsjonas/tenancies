(this.webpackJsonptenancies=this.webpackJsonptenancies||[]).push([[7],{210:function(e,t,n){"use strict";n.r(t);var c,a,i=n(30),s=n(63),r=n(0),o=n(14),b=n(56),j=n(57),l=n(47),d=n(48),u=n(44),O=n(53),_=n(205),f=n(62),h=n(206),m=n(171),x=n(46),p=n(175),y=n(16),g=n(176),v=n(87),k=n(204),w=n(3),z=function(e){var t=e.tenancy,n=Object(x.c)().success,c=Object(r.useRef)(!1),a=Object(m.a)().t,s=Object(r.useContext)(j.d).dispatch,o=Object(r.useState)(!1),b=Object(i.a)(o,2),l=b[0],d=b[1],u=t.size,_=t.nbr_of_rooms,h=t.tenant_information,p=t.utilities,z=Object(k.a)({defaultValues:{size:u,nbr_of_rooms:_,tenant_information:h,utilities:p}}),C=z.handleSubmit,I=z.register,S=z.formState,R=z.reset,V=S.isDirty,A=S.isValid;Object(r.useEffect)((function(){return c.current=!0,function(){c.current=!1}}),[]);return Object(w.jsxs)(g.a,{onSubmit:C((function(e){d(!0);var i={id:t.db_id,data:e};Object(v.d)(i).then((function(i){R(e);var r=Object(y.a)(Object(y.a)({},t),i);s({type:j.e,payload:r}),n(a("edit_tenancy_saved_confirmation")),c.current&&d(!1)})).catch((function(e){c.current&&d(!1),console.log(e)}))})),children:[Object(w.jsxs)(g.a.Group,{controlId:"formBasicSize",children:[Object(w.jsx)(g.a.Label,{children:a("edit_tenancy_label_size")}),Object(w.jsx)(g.a.Control,Object(y.a)(Object(y.a)({},I("size")),{},{type:"number",step:"0.1",placeholder:a("edit_tenancy_label_size_placeholder")}))]}),Object(w.jsxs)(g.a.Group,{controlId:"formBasicNbrOfRooms",children:[Object(w.jsx)(g.a.Label,{children:a("edit_tenancy_label_nbr_of_rooms")}),Object(w.jsx)(g.a.Control,Object(y.a)(Object(y.a)({},I("nbr_of_rooms")),{},{defaultValue:t&&t.nbr_of_rooms,type:"number",step:"1",placeholder:a("edit_tenancy_label_nbr_of_rooms_placeholder")}))]}),Object(w.jsxs)(g.a.Group,{controlId:"formBasicUtilities",children:[Object(w.jsx)(g.a.Label,{children:a("edit_tenancy_label_utilities")}),Object(w.jsx)(g.a.Control,Object(y.a)(Object(y.a)({},I("utilities")),{},{defaultValue:t&&t.utilities,as:"textarea",rows:3,placeholder:a("edit_tenancy_label_utilities_placeholder")}))]}),Object(w.jsxs)(g.a.Group,{controlId:"formBasicTenantInformation",children:[Object(w.jsx)(g.a.Label,{children:a("edit_tenancy_label_tenant_information")}),Object(w.jsx)(g.a.Control,Object(y.a)(Object(y.a)({},I("tenant_information")),{},{defaultValue:t&&t.tenant_information,as:"textarea",rows:3,placeholder:a("edit_tenancy_label_tenant_information_placeholder")}))]}),Object(w.jsxs)(O.a,{variant:"primary",type:"submit",disabled:!V||!A,children:[l&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{animation:"border",role:"status",size:"sm"})," ",a("edit_tenancy_save_button_is_saving")]}),!l&&a("edit_tenancy_save_button")]})]})},C=n(64),I=n(36),S=Object(C.a)(_.a)(c||(c=Object(s.a)(["\n  ol {\n    background-color: transparent;\n  }\n"]))),R=Object(C.a)(l.a)(a||(a=Object(s.a)(["\n  img {\n    max-width: 85vw;\n  }\n  margin-bottom: 40px;\n"]))),V=function(e){var t=e.item,n="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=".concat(t.y,",").concat(t.x,"&fov=70&pitch=0&key=").concat("AIzaSyDMRJ0PlQlYZP2iO0or1VPejkmA1vWm7JQ"),c=Object(m.a)().t,a=Object(x.c)().success,s=Object(r.useContext)(I.a).user,b=Object(r.useState)(!1),l=Object(i.a)(b,2),_=l[0],y=l[1],g=Object(r.useContext)(j.d).dispatch,k=Object(o.g)(),C=Object(r.useRef)(!1);Object(r.useEffect)((function(){return C.current=!0,function(){C.current=!1}}),[]);return Object(w.jsxs)(R,{children:[Object(w.jsx)(d.a,{children:Object(w.jsx)(u.a,{children:Object(w.jsx)("h1",{children:t.tekst})})}),Object(w.jsxs)(d.a,{children:[Object(w.jsx)(u.a,{lg:!0,children:Object(w.jsx)(p.a,{crossOrigin:"anonymous",width:"500",src:n,rounded:!0})}),Object(w.jsx)(u.a,{lg:!0,children:Object(w.jsx)(z,{tenancy:t})})]}),Object(w.jsx)(d.a,{children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)("br",{}),Object(w.jsxs)(O.a,{variant:"danger",onClick:function(){y(!0),window.confirm("Are you sure?")?Object(v.b)(t.db_id,s).then((function(){g({type:j.b,payload:t.id}),a(c("tenancy_was_deleted_confirmation")),k("tenancies"),C.current&&y(!1)})).catch((function(e){y(!1),console.log(e)})):y(!1)},children:[_&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{animation:"border",role:"status",size:"sm"})," ",c("edit_tenancy_delete_button_is_deleting")]}),!_&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(h.a,{})," ",c("edit_tenancy_delete_button")]})]})]})})]})};t.default=function(){var e=Object(o.h)().id,t=Object(m.a)().t,n=Object(r.useContext)(j.d).tenancies,c=Object(r.useState)(null),a=Object(i.a)(c,2),s=a[0],O=a[1],f=Object(r.useState)(""),h=Object(i.a)(f,2),x=h[0],p=h[1];return Object(r.useEffect)((function(){var t=n.filter((function(t){return t.id===e}))[0];t?(p(""),O(t)):(O(null),p("Item not found :("))}),[n,e]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(S,{children:[Object(w.jsx)(_.a.Item,{linkAs:b.b,linkProps:{to:"/"},children:t("tenancy_item_breadcrumb_back_to_list")}),Object(w.jsxs)(_.a.Item,{active:!0,children:[x&&"ERROR",s&&s.tekst]})]}),x&&Object(w.jsx)(l.a,{children:Object(w.jsx)(d.a,{children:Object(w.jsx)(u.a,{children:x})})}),s&&Object(w.jsx)(V,{item:s})]})}}}]);
//# sourceMappingURL=7.990095e4.chunk.js.map