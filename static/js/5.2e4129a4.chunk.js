(this.webpackJsonptenancies=this.webpackJsonptenancies||[]).push([[5],{159:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a(10),l=a(0),o=a(26),i=a(14),r=a(53),s=a(54),d=a(32),b=a(19),j=a(120),_=a(3);t.default=function(e){var t=e.hideModal,a=e.tenancy,u=Object(j.a)().t,m=Object(l.useContext)(b.d).dispatch,h=Object(l.useState)(!1),p=Object(c.a)(h,2),O=p[0],x=p[1];return Object(_.jsx)(o.a,{show:!0,onHide:t,children:Object(_.jsxs)(s.a,{onSubmit:function(e){e.preventDefault(),e.stopPropagation();for(var c={},l=e.target.querySelectorAll("input, textarea"),o=!1,i=0;i<l.length;i++){var r=l[i],s=r.value.trim();s.length&&(c[r.name]=s,o=!0)}var j=Object(n.a)(Object(n.a)({},a),{},{metadata:c});o||delete j.metadata,x(!0),Object(d.e)(j).then((function(e){m({type:b.e,payload:e}),x(!1),t()})).catch((function(e){x(!1),console.log(e)})),console.log(j)},children:[Object(_.jsx)(o.a.Header,{closeButton:!0,children:Object(_.jsx)(o.a.Title,{children:a.tekst})}),Object(_.jsxs)(o.a.Body,{children:[Object(_.jsxs)(s.a.Group,{controlId:"formBasicSize",children:[Object(_.jsx)(s.a.Label,{children:u("edit_tenancy_label_size")}),Object(_.jsx)(s.a.Control,{defaultValue:a.metadata&&a.metadata.size,name:"size",type:"number",step:"0.1",placeholder:u("edit_tenancy_label_size_placeholder")})]}),Object(_.jsxs)(s.a.Group,{controlId:"formBasicNbrOfRooms",children:[Object(_.jsx)(s.a.Label,{children:u("edit_tenancy_label_nbr_of_rooms")}),Object(_.jsx)(s.a.Control,{defaultValue:a.metadata&&a.metadata.nbr_of_rooms,name:"nbr_of_rooms",type:"number",step:"1",placeholder:u("edit_tenancy_label_nbr_of_rooms_placeholder")})]}),Object(_.jsxs)(s.a.Group,{controlId:"formBasicUtilities",children:[Object(_.jsx)(s.a.Label,{children:u("edit_tenancy_label_utilities")}),Object(_.jsx)(s.a.Control,{name:"utilities",defaultValue:a.metadata&&a.metadata.utilities,as:"textarea",rows:3,placeholder:u("edit_tenancy_label_utilities_placeholder")})]}),Object(_.jsxs)(s.a.Group,{controlId:"formBasicTenantInformation",children:[Object(_.jsx)(s.a.Label,{children:u("edit_tenancy_label_tenant_information")}),Object(_.jsx)(s.a.Control,{defaultValue:a.metadata&&a.metadata.tenant_information,name:"tenant_information",as:"textarea",rows:3,placeholder:u("edit_tenancy_label_tenant_information_placeholder")})]})]}),Object(_.jsxs)(o.a.Footer,{children:[Object(_.jsx)(i.a,{variant:"secondary",onClick:t,children:u("edit_tenancy_cancel_button")}),Object(_.jsxs)(i.a,{variant:"primary",type:"submit",children:[O&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(r.a,{animation:"border",role:"status",size:"sm",children:Object(_.jsx)("span",{className:"sr-only",children:"Loading..."})})," ",u("edit_tenancy_save_button_is_saving")]}),!O&&u("edit_tenancy_save_button")]})]})]})})}}}]);
//# sourceMappingURL=5.2e4129a4.chunk.js.map