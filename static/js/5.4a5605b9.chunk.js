(this.webpackJsonptenancies=this.webpackJsonptenancies||[]).push([[5],{175:function(e,t,a){"use strict";var n=a(5),c=a(10),r=a(7),s=a.n(r),i=a(0),l=a.n(i),o=a(2),u=a.n(o),b=a(13),d=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],j=(u.a.string,u.a.bool,u.a.bool,u.a.bool,u.a.bool,l.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.fluid,o=e.rounded,u=e.roundedCircle,j=e.thumbnail,f=Object(c.a)(e,d);a=Object(b.a)(a,"img");var m=s()(i&&a+"-fluid",o&&"rounded",u&&"rounded-circle",j&&a+"-thumbnail");return l.a.createElement("img",Object(n.a)({ref:t},f,{className:s()(r,m)}))})));j.displayName="Image",j.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=j},208:function(e,t,a){"use strict";a.r(t);var n=a(30),c=a(63),r=a(0),s=a.n(r),i=a(5),l=a(10),o=a(7),u=a.n(o),b=a(13),d=a(35),j=["active","disabled","className","style","activeLabel","children"],f=["children"],m=s.a.forwardRef((function(e,t){var a=e.active,n=e.disabled,c=e.className,r=e.style,o=e.activeLabel,b=e.children,f=Object(l.a)(e,j),m=a||n?"span":d.a;return s.a.createElement("li",{ref:t,style:r,className:u()(c,"page-item",{active:a,disabled:n})},s.a.createElement(m,Object(i.a)({className:"page-link",disabled:n},f),b,a&&o&&s.a.createElement("span",{className:"sr-only"},o)))}));m.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},m.displayName="PageItem";var O=m;function h(e,t,a){function n(e){var n=e.children,c=Object(l.a)(e,f);return s.a.createElement(m,c,s.a.createElement("span",{"aria-hidden":"true"},n||t),s.a.createElement("span",{className:"sr-only"},a))}return void 0===a&&(a=e),n.displayName=e,n}var p=h("First","\xab"),v=h("Prev","\u2039","Previous"),x=h("Ellipsis","\u2026","More"),g=h("Next","\u203a"),y=h("Last","\xbb"),N=["bsPrefix","className","children","size"],w=s.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.children,r=e.size,o=Object(l.a)(e,N),d=Object(b.a)(a,"pagination");return s.a.createElement("ul",Object(i.a)({ref:t},o,{className:u()(n,d,r&&d+"-"+r)}),c)}));w.First=p,w.Prev=v,w.Ellipsis=x,w.Item=O,w.Next=g,w.Last=y;var P=w,E=a(48),k=a(44),z=a(175),C=a(47),I=a(14),S=a(64),L=a(2),R=a.n(L);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var A=Object(r.forwardRef)((function(e,t){var a=e.color,n=e.size,c=M(e,["color","size"]);return s.a.createElement("svg",J({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:a},c),s.a.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}))}));A.propTypes={color:R.a.string,size:R.a.oneOfType([R.a.string,R.a.number])},A.defaultProps={color:"currentColor",size:"1em"};var F,Q,T=A,V=a(3),B=Object(S.a)(C.a)(F||(F=Object(c.a)([""]))),D=Object(S.a)(E.a)(Q||(Q=Object(c.a)(["\n  line-height: 40px;\n\n  &:hover {\n    color: white;\n    background-color: rgba(26, 10, 168, 0.6);\n    cursor: pointer;\n  }\n"]))),H=function(e){var t=e.tenancies,a=Object(I.g)();return Object(V.jsxs)(B,{children:[t.map((function(e){return Object(V.jsxs)(D,{className:"mt-1 align-items-center",onClick:function(){a("/tenancy/".concat(e.id))},children:[Object(V.jsx)(k.a,{xs:"auto",children:Object(V.jsx)(z.a,{crossOrigin:"anonymous",width:"40",src:"https://maps.googleapis.com/maps/api/streetview?size=40x40&location=".concat(e.y,",").concat(e.x,"&fov=70&pitch=0&key=").concat("AIzaSyDMRJ0PlQlYZP2iO0or1VPejkmA1vWm7JQ"),roundedCircle:!0})}),Object(V.jsx)(k.a,{className:"d-sm-none",children:e.adresseringsvejnavn}),Object(V.jsx)(k.a,{className:"d-none d-sm-block",children:e.tekst}),Object(V.jsx)(k.a,{xs:"auto",children:Object(V.jsx)(T,{})})]},e.tekst)})),Object(V.jsx)(E.a,{children:Object(V.jsx)(k.a,{})})]})};t.default=function(e){var t=e.tenancies,a=parseInt("10"),c=Object(r.useState)(),s=Object(n.a)(c,2),i=s[0],l=s[1],o=Object(r.useState)(1),u=Object(n.a)(o,2),b=u[0],d=u[1],j=Object(r.useState)(1),f=Object(n.a)(j,2),m=f[0],O=f[1];Object(r.useEffect)((function(){m>1&&m>b&&O(m-1)}),[m,b]),Object(r.useEffect)((function(){var e=(m-1)*a,n=m*a;l(t.slice(e,n))}),[m,t,a]),Object(r.useEffect)((function(){var e=Math.ceil(t.length/a);e>0&&d(e)}),[t,a]);return Object(V.jsxs)(C.a,{children:[i&&0===i.length&&Object(V.jsx)(E.a,{className:"mt-1 align-items-center",children:Object(V.jsxs)(k.a,{children:[Object(V.jsx)("br",{}),"Search result empty :("]})}),i&&i.length>0&&Object(V.jsx)(E.a,{className:"mt-1",style:{minHeight:460},children:Object(V.jsx)(k.a,{children:Object(V.jsx)(H,{tenancies:i})})}),b>1&&Object(V.jsx)(E.a,{className:"mt-1",children:Object(V.jsxs)(k.a,{children:[Object(V.jsx)("hr",{}),Object(V.jsx)(P,{className:"d-flex justify-content-center",children:function(){for(var e=[],t=function(t){e.push(Object(V.jsx)(P.Item,{active:t===m,onClick:function(){O(t)},children:t},t))},a=1;a<=b;a++)t(a);return e}()})]})})]})}}}]);
//# sourceMappingURL=5.4a5605b9.chunk.js.map