(this.webpackJsonptenancies=this.webpackJsonptenancies||[]).push([[4],{133:function(e,t,n){"use strict";n.r(t);var c=n(16),a=n(0),s=n(130),i=n(26),o=n(44),r=n(131),d=n(25),j=n(129),l=n(13),b=n(2);t.default=function(e){var t=e.hideModal,n=Object(a.useContext)(l.d).dispatch,u=Object(a.useState)(!1),h=Object(c.a)(u,2),O=h[0],f=h[1],p=Object(a.useState)(!1),x=Object(c.a)(p,2),y=x[0],g=x[1],m=Object(a.useState)(),S=Object(c.a)(m,2),v=S[0],C=S[1],k=Object(a.useState)([]),w=Object(c.a)(k,2),L=w[0],B=w[1];return Object(b.jsx)(s.a,{show:!0,onHide:t,children:Object(b.jsxs)(r.a,{onSubmit:function(e){e.preventDefault(),e.stopPropagation(),v&&(g(!0),Object(d.a)(v).then((function(e){n({type:l.a,payload:e}),g(!1),t()})).catch((function(e){g(!1),console.log(e)})))},children:[Object(b.jsx)(s.a.Header,{children:Object(b.jsx)(s.a.Title,{children:"Add new Tenancy"})}),Object(b.jsxs)(s.a.Body,{children:["Start typing to fetch address info:",Object(b.jsx)(j.a,{filterBy:function(){return!0},id:"async-tenancies",isLoading:O,labelKey:"tekst",minLength:3,onSearch:function(e){f(!0),Object(d.c)({query:e,success:function(e){B(e),f(!1)},fail:function(e){f(!1),console.log(e)}})},onChange:function(e){C(e[0])},options:L,placeholder:"Search for an address...",renderMenuItemChildren:function(e){return Object(b.jsx)("span",{children:e.tekst})}})]}),Object(b.jsxs)(s.a.Footer,{children:[Object(b.jsx)(i.a,{variant:"secondary",onClick:t,children:"Close"}),Object(b.jsxs)(i.a,{variant:v?"primary":"secondary",type:"submit",disabled:!v||y,children:[y&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{animation:"border",role:"status",size:"sm",children:Object(b.jsx)("span",{className:"sr-only",children:"Loading..."})})," ","...saving"]}),!y&&"Save Changes"]})]})]})})}}}]);
//# sourceMappingURL=4.3bda7e0b.chunk.js.map