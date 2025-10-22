import{d as a,j as t}from"./iframe-Rw2KdrAu.js";import{B as l}from"./index-CI9-MxFz.js";import"./index-CNGg7S4R.js";import{P as x}from"./043-Ba2bG-lA.js";import"./preload-helper-PPVm8Dsz.js";const i=a.div`
  padding-top: ${({theme:e})=>e.size.em(20)};
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.size.em(10)};
`;try{i.displayName="StyledContentFooter",i.__docgenInfo={description:"",displayName:"StyledContentFooter",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const n=({children:e})=>t.jsx(i,{children:e});try{n.displayName="FooterButtons",n.__docgenInfo={description:"",displayName:"FooterButtons",props:{}}}catch{}const s=a.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`,p=a.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`,c=a.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,u=a.div`
  width: 100%;
  max-width: 500px;
  padding: 25px 0;
`,m=a.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 22px 13px 0 rgba(0,0,0,0.08), 0 14px 26px 6px rgba(0,0,0,0.12);
  position: relative;
  padding: 25px 40px;
  box-sizing: border-box;
`,f=a.button`
  width: ${({theme:e})=>e.size.em(16)};
  position: absolute;
  top: ${({theme:e})=>e.size.em(10)};
  right: ${({theme:e})=>e.size.em(10)};
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  color: #333;
  opacity: 1;
  transition: opacity 0.2s ${({theme:e})=>e.animation.easing.easeInCubic};

  &:hover {
    opacity: 0.7;
  }
`,y=a.div`
  padding-top: ${({theme:e})=>e.size.em(20)};
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.size.em(15)};
`;try{s.displayName="StyledContainerWrapper",s.__docgenInfo={description:"",displayName:"StyledContainerWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledContainer",p.__docgenInfo={description:"",displayName:"StyledContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledContainerInner",c.__docgenInfo={description:"",displayName:"StyledContainerInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledContentWrapper",u.__docgenInfo={description:"",displayName:"StyledContentWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledContent",m.__docgenInfo={description:"",displayName:"StyledContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledCloseIconWrapper",f.__docgenInfo={description:"",displayName:"StyledCloseIconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledContentFooter",y.__docgenInfo={description:"",displayName:"StyledContentFooter",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const d=({showModal:e,children:h,footer:_})=>e?t.jsx(s,{children:t.jsx(p,{children:t.jsx(c,{children:t.jsx(u,{children:t.jsxs(m,{children:[t.jsx(f,{children:t.jsx(x,{})}),h,_]})})})})}):null;try{d.displayName="Modal001",d.__docgenInfo={description:"",displayName:"Modal001",props:{showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}}}catch{}const W={title:"Basic/Modal/Product001",component:d,tags:["autodocs"]},g=e=>t.jsx("div",{style:{padding:"20px",height:"600px"},children:t.jsx(d,{...e})}),r=g.bind({});r.args={showModal:!0,children:t.jsx("div",{style:{height:"200px"},children:"Modal ContentModal ContentModal ContentModal ContentModal ContentModal ContentModal ContentModal ContentModal ContentModal ContentModal Content"}),footer:t.jsxs(n,{children:[t.jsx(l,{onClick:()=>{},size:"small",type:"003",children:"キャンセル"}),t.jsx(l,{onClick:()=>{},size:"small",style:{backgroundColor:"#000",borderColor:"#000",color:"#fff",fontWeight:700},animation:{type:"001",backgroundColor:"#fff",textColor:"#000"},type:"003",children:"確定"})]})};const o=g.bind({});o.args={showModal:!0,children:t.jsx("div",{style:{height:"1000px"},children:"Modal ContentModal"}),footer:t.jsx(n,{children:t.jsx(l,{onClick:()=>{},size:"small",style:{backgroundColor:"#fff",borderColor:"#000",color:"#000",fontWeight:700},type:"003",children:"確定"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  height: "600px"
}}>
    <Modal001 {...args} />
  </div>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  height: "600px"
}}>
    <Modal001 {...args} />
  </div>`,...o.parameters?.docs?.source}}};const q=["Default","ContentLongHeight"];export{o as ContentLongHeight,r as Default,q as __namedExportsOrder,W as default};
