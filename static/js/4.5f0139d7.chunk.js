(this.webpackJsonptenancies=this.webpackJsonptenancies||[]).push([[4],{158:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n(0),s=n(26),i=n(14),r=n(53),o=n(54),d=n(32),u=n(156),j=n(19),l=n(120),b=n(3);t.default=function(e){var t=e.hideModal,n=Object(l.a)().t,h=Object(a.useContext)(j.d).dispatch,O=Object(a.useRef)(!1);Object(a.useEffect)((function(){return O.current=!0,function(){O.current=!1}}),[]);var f=Object(a.useState)(!1),_=Object(c.a)(f,2),p=_[0],y=_[1],x=Object(a.useState)(!1),g=Object(c.a)(x,2),m=g[0],v=g[1],S=Object(a.useState)(),k=Object(c.a)(S,2),C=k[0],w=k[1],B=Object(a.useState)([]),L=Object(c.a)(B,2),F=L[0],H=L[1];return Object(b.jsx)(s.a,{show:!0,onHide:t,children:Object(b.jsxs)(o.a,{onSubmit:function(e){e.preventDefault(),e.stopPropagation(),C&&(v(!0),Object(d.a)(C).then((function(e){h({type:j.a,payload:e}),O.current&&(v(!1),t())})).catch((function(e){O.current&&v(!1),console.log(e)})))},children:[Object(b.jsx)(s.a.Header,{closeButton:!0,children:Object(b.jsx)(s.a.Title,{children:n("add_tenancy_modal_title")})}),Object(b.jsxs)(s.a.Body,{children:[n("add_tenancy_start_typing_to_fetch"),Object(b.jsx)(u.a,{filterBy:function(){return!0},id:"async-tenancies",isLoading:p,labelKey:"tekst",minLength:3,onSearch:function(e){y(!0),Object(d.c)({query:e,success:function(e){H(e),y(!1)},fail:function(e){y(!1),console.log(e)}})},onChange:function(e){w(e[0])},options:F,placeholder:n("add_tenancy_fetch_placeholder"),renderMenuItemChildren:function(e){return Object(b.jsx)("span",{children:e.tekst})}})]}),Object(b.jsxs)(s.a.Footer,{children:[Object(b.jsx)(i.a,{variant:"secondary",onClick:t,children:n("add_tenancy_cancel_button")}),Object(b.jsxs)(i.a,{variant:C?"primary":"secondary",type:"submit",disabled:!C||m,children:[m&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(r.a,{animation:"border",role:"status",size:"sm",children:Object(b.jsx)("span",{className:"sr-only",children:"Loading..."})})," ",n("add_tenancy_save_button_is_saving")]}),!m&&n("add_tenancy_save_button")]})]})]})})}}}]);
//# sourceMappingURL=4.5f0139d7.chunk.js.map