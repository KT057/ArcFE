import{d,j as a}from"./iframe-Rw2KdrAu.js";import{d as f}from"./043-Ba2bG-lA.js";import"./preload-helper-PPVm8Dsz.js";const i=d.div`
  ${({theme:e})=>e.font.baseSize.em()};

  display: block;
`,s=d.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.size.em(10)};
`,l=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.size.em(10)};
`,c=d.div.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"})`
  font-size: ${({theme:e,fontSize:r})=>e.size.em(r)};
  color: ${({color:e})=>e};
`,u=d.a.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"&&e!=="duration"&&e!=="easing"&&e!=="hoverColor"})`
  font-size: ${({theme:e,fontSize:r})=>e.size.em(r)};
  color: ${({color:e})=>e};
  transition: color ${({duration:e})=>e}s ${({theme:e,easing:r})=>e.animation.easing[r]};

  &:hover {
    color: ${({hoverColor:e})=>e};
  }
`,m=d.div.withConfig({shouldForwardProp:e=>e!=="color"})`
  color: ${({color:e})=>e};
  width: ${({theme:e})=>e.size.em(e.icon.size.small)};
  height: ${({theme:e})=>e.size.em(e.icon.size.small)};
`;try{i.displayName="StyledBreadcrumbsWrapper",i.__docgenInfo={description:"",displayName:"StyledBreadcrumbsWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledBreadcrumbs",s.__docgenInfo={description:"",displayName:"StyledBreadcrumbs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledBreadcrumbsItem",l.__docgenInfo={description:"",displayName:"StyledBreadcrumbsItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledBreadcrumbsItemText",c.__docgenInfo={description:"",displayName:"StyledBreadcrumbsItemText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledBreadcrumbsItemLink",u.__docgenInfo={description:"",displayName:"StyledBreadcrumbsItemLink",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledBreadcrumbsItemIcon",m.__docgenInfo={description:"",displayName:"StyledBreadcrumbsItemIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const n=({items:e,style:r})=>a.jsx(i,{children:a.jsx(s,{children:e.map((t,p)=>a.jsxs(l,{children:[t.link?a.jsx(u,{href:t.link.href,target:t.link.target,duration:r?.duration??.3,easing:r?.easing??"easeInOutSine",fontSize:r?.fontSize??16,color:r?.color??"#000",hoverColor:r?.hoverColor??"#ccc",children:t.text}):a.jsx(c,{fontSize:r?.fontSize??16,color:r?.color??"#000",children:t.text}),p!==e.length-1&&a.jsx(m,{color:r?.iconColor??"#000",children:a.jsx(f,{})})]},t.text))})});try{n.displayName="Breadcrumbs",n.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbsItem[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:'{ backgroundColor?: string; borderColor?: string; color?: string | undefined; fontWeight?: number | undefined; fontSize?: number | undefined; hoverColor?: string | undefined; duration?: number | undefined; easing?: "easeInSine" | ... 25 more ... | undefined; iconColor?: string | undefined; } ...'}}}}}catch{}const b={title:"Basic/Breadcrumbs",component:n,tags:["autodocs"]},y=e=>a.jsx(n,{...e}),o=y.bind({});o.args={items:[{text:"Home"},{text:"Products"},{text:"Product 1",link:{href:"#"}}],style:{color:"#000",fontSize:16,hoverColor:"#ccc",duration:.3,easing:"easeInOutSine",iconColor:"#000"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <Breadcrumbs {...args} />",...o.parameters?.docs?.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,b as default};
