import{d as u,j as r}from"./iframe-Rw2KdrAu.js";import{C as x}from"./index-DL1IgOQD.js";import"./preload-helper-PPVm8Dsz.js";const g=u.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,f=u.div.withConfig({shouldForwardProp:e=>!["size"].includes(e)})`
  width: ${({theme:e,size:a})=>e.size.em(a||100)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,y=u.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`,C=u.span.withConfig({shouldForwardProp:e=>!["fontSize","textColor"].includes(e)})`
  font-size: ${({theme:e,fontSize:a})=>e.size.em(a||16)};
  color: ${({textColor:e})=>e||"#1f2937"};
`;try{g.displayName="StyledCircleProgressWrapper",g.__docgenInfo={description:"",displayName:"StyledCircleProgressWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledCircleProgressContainer",f.__docgenInfo={description:"",displayName:"StyledCircleProgressContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledCircleProgressContent",y.__docgenInfo={description:"",displayName:"StyledCircleProgressContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="StyledCircleProgressPercentage",C.__docgenInfo={description:"",displayName:"StyledCircleProgressPercentage",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const m=({progress:e=0,children:a,style:t})=>{const h=t?.size||100,_=t?.strokeWidth||3;return r.jsx(g,{children:r.jsxs(f,{size:h,children:[r.jsx(x,{progress:e,size:h,style:{primaryColor:t?.primaryColor,trackColor:t?.trackColor,strokeWidth:_,animationDuration:t?.animationDuration}}),r.jsx(y,{children:r.jsx(C,{fontSize:t?.fontSize,textColor:t?.textColor,children:a})})]})})};try{m.displayName="RebitaCircleProgress",m.__docgenInfo={description:"",displayName:"RebitaCircleProgress",props:{progress:{defaultValue:{value:"0"},description:"",name:"progress",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ primaryColor?: string; trackColor?: string; textColor?: string | undefined; fontSize?: number | undefined; size?: number | undefined; strokeWidth?: number | undefined; animationDuration?: string | undefined; } | undefined"}}}}}catch{}const P={title:"Advanced/Rebita/CircleProgress",component:m,tags:["autodocs"]},s=e=>r.jsx("div",{style:{padding:"50px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(m,{...e})}),n=s.bind({});n.args={progress:50,children:"50%"};const o=s.bind({});o.args={progress:25,children:"25%",style:{size:60,strokeWidth:2,fontSize:12}};const i=s.bind({});i.args={progress:75,children:"75%",style:{size:150,strokeWidth:4,fontSize:20}};const l=s.bind({});l.args={progress:80,children:"80%",style:{primaryColor:"#22c55e",trackColor:"#f3f4f6",textColor:"#22c55e",size:120}};const d=s.bind({});d.args={progress:90,children:"90%",style:{animationDuration:"5s",primaryColor:"#f59e0b"}};const c=s.bind({});c.args={progress:100,children:"Complete!",style:{primaryColor:"#10b981",textColor:"#10b981",fontSize:14}};const p=s.bind({});p.args={progress:65,children:r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"18px",fontWeight:"bold"},children:"65"}),r.jsx("div",{style:{fontSize:"10px"},children:"POINTS"})]}),style:{size:100,primaryColor:"#8b5cf6",textColor:"#8b5cf6"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaCircleProgress {...args} />
  </div>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaCircleProgress {...args} />
  </div>`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaCircleProgress {...args} />
  </div>`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaCircleProgress {...args} />
  </div>`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaCircleProgress {...args} />
  </div>`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaCircleProgress {...args} />
  </div>`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaCircleProgress {...args} />
  </div>`,...p.parameters?.docs?.source}}};const j=["Default","Small","Large","CustomColors","SlowAnimation","Complete","WithCustomContent"];export{c as Complete,l as CustomColors,n as Default,i as Large,d as SlowAnimation,o as Small,p as WithCustomContent,j as __namedExportsOrder,P as default};
