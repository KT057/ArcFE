import{j as e,B as t,F as s,d as r,L as a,c as n}from"./styles-CMxUCkDx.js";const c=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"About Page"}),e.jsx(s,{images:[{src:"/images/img-01.jpg",alt:"image01"},{src:"/images/img-02.jpg",alt:"image02"},{src:"/images/img-03.jpg",alt:"image03"}]})]}),d=r.footer`
  background-color: ${({theme:o})=>o.color.secondary};
  padding: 20px;
`,g=()=>e.jsx(d,{children:"Footer"}),i=r.header`
  background-color: ${({theme:o})=>o.color.secondary};
  padding: 20px;
`,m=()=>e.jsx(i,{children:"Header"}),l=()=>e.jsxs(a,{children:[e.jsx(m,{}),e.jsx(c,{}),e.jsx(g,{})]}),j=n.createRoot(document.getElementById("root")??document.body);j.render(e.jsx(l,{}));
