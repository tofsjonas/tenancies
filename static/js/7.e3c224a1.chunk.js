(this.webpackJsonptenancies=this.webpackJsonptenancies||[]).push([[7],{171:function(e,t,a){"use strict";a.r(t);var r=a(28),n=a(44),c=a(1),s=a.n(c),i=a(7),l=a(12),o=a(9),b=a.n(o),u=a(13),f=a(64),j=["active","disabled","className","style","activeLabel","children"],O=["children"],d=s.a.forwardRef((function(e,t){var a=e.active,r=e.disabled,n=e.className,c=e.style,o=e.activeLabel,u=e.children,O=Object(l.a)(e,j),d=a||r?"span":f.a;return s.a.createElement("li",{ref:t,style:c,className:b()(n,"page-item",{active:a,disabled:r})},s.a.createElement(d,Object(i.a)({className:"page-link",disabled:r},O),u,a&&o&&s.a.createElement("span",{className:"sr-only"},o)))}));d.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},d.displayName="PageItem";var m=d;function p(e,t,a){function r(e){var r=e.children,n=Object(l.a)(e,O);return s.a.createElement(d,n,s.a.createElement("span",{"aria-hidden":"true"},r||t),s.a.createElement("span",{className:"sr-only"},a))}return void 0===a&&(a=e),r.displayName=e,r}var h=p("First","\xab"),v=p("Prev","\u2039","Previous"),g=p("Ellipsis","\u2026","More"),x=p("Next","\u203a"),y=p("Last","\xbb"),w=["bsPrefix","className","children","size"],E=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.children,c=e.size,o=Object(l.a)(e,w),f=Object(u.a)(a,"pagination");return s.a.createElement("ul",Object(i.a)({ref:t},o,{className:b()(r,f,c&&f+"-"+c)}),n)}));E.First=h,E.Prev=v,E.Ellipsis=g,E.Item=m,E.Next=x,E.Last=y;var N=E,P=a(46),k=a(41),z=a(45),S=a(10),I=a(47),L=a(2),F=a.n(L);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var J=Object(c.forwardRef)((function(e,t){var a=e.color,r=e.size,n=R(e,["color","size"]);return s.a.createElement("svg",C({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:a},n),s.a.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}))}));J.propTypes={color:F.a.string,size:F.a.oneOfType([F.a.string,F.a.number])},J.defaultProps={color:"currentColor",size:"1em"};var M,T=J,B=a(8),V=Object(I.a)(P.a)(M||(M=Object(n.a)(["\n  line-height: 40px;\n\n  &:hover {\n    color: white;\n    background-color: rgba(26, 10, 168, 0.6);\n    cursor: pointer;\n  }\n"])));t.default=function(e){var t=e.tenancies,a=Object(S.g)(),n=parseInt("2"),s=Object(c.useState)(),i=Object(r.a)(s,2),l=i[0],o=i[1],b=Object(c.useState)(1),u=Object(r.a)(b,2),f=u[0],j=u[1],O=Object(c.useState)(1),d=Object(r.a)(O,2),m=d[0],p=d[1];Object(c.useEffect)((function(){m>1&&m>f&&p(m-1)}),[m,f]),Object(c.useEffect)((function(){var e=(m-1)*n,a=m*n;o(t.slice(e,a))}),[m,t,n]),Object(c.useEffect)((function(){var e=Math.ceil(t.length/n);e>0&&j(e)}),[t,n]);return Object(B.jsxs)(z.a,{children:[l&&l.length>0&&Object(B.jsxs)(B.Fragment,{children:[l.map((function(e){return Object(B.jsxs)(V,{className:"mt-1 align-items-center",onClick:function(){a("/tenancy/".concat(e.id))},children:[Object(B.jsx)(k.a,{children:e.tekst}),Object(B.jsx)(k.a,{xs:"auto",children:Object(B.jsx)(T,{})})]},e.tekst)})),f>1&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("br",{}),Object(B.jsx)(N,{children:function(){for(var e=[],t=function(t){e.push(Object(B.jsx)(N.Item,{active:t===m,onClick:function(){p(t)},children:t},t))},a=1;a<=f;a++)t(a);return e}()})]})]}),l&&0===l.length&&Object(B.jsx)(P.a,{className:"mt-1 align-items-center",children:Object(B.jsxs)(k.a,{children:[Object(B.jsx)("br",{}),"Search result empty :("]})})]})}}}]);
//# sourceMappingURL=7.e3c224a1.chunk.js.map