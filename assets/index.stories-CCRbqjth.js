import{d as a,j as r}from"./iframe-H3qRDz1v.js";import{c as v}from"./043-Dx6gVrpV.js";import{u as q}from"./useAccordion-38xs7fOb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CH_iu5NA.js";const n=a.div`
  ${({theme:e})=>e.font.baseSize.em()};

  display: block;
`,i=a.div`
  position: relative;
`,l=a.div.withConfig({shouldForwardProp:e=>e!=="backgroundColor"&&e!=="barColor"})`
  padding: ${({theme:e})=>e.size.em(10)} ${({theme:e})=>e.size.em(15)} ${({theme:e})=>e.size.em(10)} ${({theme:e})=>e.size.em(20)};
  cursor: pointer;
  position: relative;
  background-color: ${({backgroundColor:e})=>e};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: ${({theme:e})=>e.size.em(5)};
    height: 100%;
    background-color: ${({barColor:e})=>e};
  }
`,c=a.div`
  position: relative;
`,s=a.div`
  padding-right: ${({theme:e})=>e.size.em(30)};
`,p=a.div`
  font-size: ${({theme:e})=>e.size.em(18)};
  font-weight: 700;
  color: ${({color:e})=>e};
`,u=a.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({color:e})=>e};
  width: ${({theme:e})=>e.size.em(e.icon.size.middle)};
  height: ${({theme:e})=>e.size.em(e.icon.size.middle)};
`,m=a.div`
  overflow: hidden;
  height: 0;
`,f=a.div`
  padding: ${({theme:e})=>e.size.em(10)} ${({theme:e})=>e.size.em(15)} ${({theme:e})=>e.size.em(10)} ${({theme:e})=>e.size.em(20)};
`,y=a.div`
  font-size: ${({theme:e})=>e.size.em(18)};
  font-weight: 400;
  color: ${({color:e})=>e};
`;try{n.displayName="StyledAccordionWrapper",n.__docgenInfo={description:"",displayName:"StyledAccordionWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledAccordion",i.__docgenInfo={description:"",displayName:"StyledAccordion",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledAccordionHeader",l.__docgenInfo={description:"",displayName:"StyledAccordionHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledAccordionHeaderInner",c.__docgenInfo={description:"",displayName:"StyledAccordionHeaderInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledAccordionTitleWrapper",s.__docgenInfo={description:"",displayName:"StyledAccordionTitleWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledAccordionTitle",p.__docgenInfo={description:"",displayName:"StyledAccordionTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledAccordionIcon",u.__docgenInfo={description:"",displayName:"StyledAccordionIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledAccordionContentWrapper",m.__docgenInfo={description:"",displayName:"StyledAccordionContentWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledAccordionContent",f.__docgenInfo={description:"",displayName:"StyledAccordionContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledAccordionContentText",y.__docgenInfo={description:"",displayName:"StyledAccordionContentText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const t=({headerContent:e,content:_,icon:h,style:o,animation:g})=>{const{handleClick:A,contentRef:b,iconRef:T}=q({animation:g});return r.jsx(n,{children:r.jsxs(i,{children:[r.jsx(l,{backgroundColor:o?.header?.backgroundColor??"#fff",barColor:o?.header?.barColor??"#000",onClick:A,children:r.jsxs(c,{children:[r.jsx(s,{children:r.jsx(p,{color:o?.header?.color??"#000",children:e})}),r.jsx(u,{ref:T,color:o?.iconColor??"#000",children:h})]})}),r.jsx(m,{ref:b,children:r.jsx(f,{children:r.jsx(y,{color:o?.content?.color??"#000",children:_})})})]})})};try{t.displayName="Accordion003",t.__docgenInfo={description:"",displayName:"Accordion003",props:{headerContent:{defaultValue:null,description:"",name:"headerContent",required:!0,type:{name:"ReactNode"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"AccordionAnimation"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ iconColor?: string; backgroundColor?: string; header?: { backgroundColor?: string | undefined; barColor?: string | undefined; color?: string | undefined; } | undefined; content?: { ...; } | undefined; } | undefined"}}}}}catch{}const x={title:"Basic/Accordion/Product003",component:t,tags:["autodocs"]},V=e=>r.jsx("div",{style:{width:"400px"},children:r.jsx(t,{...e})}),d=V.bind({});d.args={headerContent:"Accordion",content:"コンテキスト",icon:r.jsx(v,{}),style:{backgroundColor:"#ccc",header:{backgroundColor:"#ccc",barColor:"#000",color:"#000"},content:{color:"#000"}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "400px"
}}>
    <Accordion003 {...args} />
  </div>`,...d.parameters?.docs?.source}}};const $=["Default"];export{d as Default,$ as __namedExportsOrder,x as default};
