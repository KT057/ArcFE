import{d as i,r as $,j as t}from"./iframe-H3qRDz1v.js";import{a as n}from"./043-Dx6gVrpV.js";import{V as k}from"./index-CrFwnFmf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CH_iu5NA.js";const x=i.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,C=i.div.withConfig({shouldForwardProp:e=>!["direction","backgroundColor","borderColor"].includes(e)})`
  display: flex;
  align-items: center;
  border-radius: ${({theme:e})=>e.size.em(4)};
  background-color: ${({backgroundColor:e})=>e||"#000"};
  border: 1px solid ${({borderColor:e})=>e||"#000"};
  cursor: pointer;
  flex-direction: ${({direction:e})=>e==="left"?"row-reverse":"row"};
`,h=i.div.withConfig({shouldForwardProp:e=>!["textColor","leftContentBorderColor","direction"].includes(e)})`
  color: ${({textColor:e})=>e||"#fff"};
  padding: ${({theme:e})=>`${e.size.em(10)} ${e.size.em(20)}`};
  height: 100%;
  flex: 1;
  border-right: ${({direction:e,leftContentBorderColor:r})=>e==="right"?`1px solid ${r||"#fff"}`:"0"};
  border-left: ${({direction:e,leftContentBorderColor:r})=>e==="left"?`1px solid ${r||"#fff"}`:"0"};
`,v=i.div.withConfig({shouldForwardProp:e=>!["fontSize"].includes(e)})`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${({theme:e,fontSize:r})=>e.size.em(r||12)};
  font-weight: 700;
`,_=i.div.withConfig({shouldForwardProp:e=>!["size"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: ${({theme:e,size:r})=>{switch(r){case"large":return e.size.em(56);case"middle":return e.size.em(47);case"small":return e.size.em(37);default:return e.size.em(47)}}};
  max-width: ${({theme:e,size:r})=>{switch(r){case"large":return e.size.em(56);case"middle":return e.size.em(47);case"small":return e.size.em(37);default:return e.size.em(47)}}};
`,B=i.div.withConfig({shouldForwardProp:e=>e!=="iconSize"&&e!=="iconColor"})`
  transform: translate(0);
  transition: transform 0.8s ${({theme:e})=>e.animation.easing.easeOutCubic};
  color: ${({iconColor:e})=>e||"#fff"};
  ${({theme:e,iconSize:r})=>e.icon.size.style(r)}
`;try{x.displayName="StyledRebitaButtonWrapper",x.__docgenInfo={description:"",displayName:"StyledRebitaButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="StyledRebitaButtonInner",C.__docgenInfo={description:"",displayName:"StyledRebitaButtonInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="StyledRebitaButtonLeft",h.__docgenInfo={description:"",displayName:"StyledRebitaButtonLeft",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="StyledRebitaButtonLeftInner",v.__docgenInfo={description:"",displayName:"StyledRebitaButtonLeftInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{_.displayName="StyledRebitaButtonRight",_.__docgenInfo={description:"",displayName:"StyledRebitaButtonRight",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{B.displayName="StyledRebitaButtonRightInner",B.__docgenInfo={description:"",displayName:"StyledRebitaButtonRightInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const b=({size:e="middle",direction:r="right",text:R="ボタン",icon:j,onClick:z,as:w="a",href:I,style:o})=>{const[V,S]=$.useState(!1),q=()=>{S(!0)},T=()=>{S(!1)};return t.jsx(x,{children:t.jsxs(C,{as:w,direction:r,onClick:z,href:I,backgroundColor:o?.backgroundColor,borderColor:o?.borderColor,onMouseEnter:q,onMouseLeave:T,children:[t.jsx(h,{textColor:o?.textColor,leftContentBorderColor:o?.leftContentBorderColor,direction:r,children:t.jsx(v,{fontSize:o?.fontSize,children:t.jsx(k,{style:{fontSize:o?.fontSize,color:o?.textColor||"#fff"},enableHover:V,children:R})})}),t.jsx(_,{size:e,children:t.jsx(B,{iconSize:e,iconColor:o?.iconColor,children:t.jsx(t.Fragment,{children:j})})})]})})};try{b.displayName="RebitaButton",b.__docgenInfo={description:"",displayName:"RebitaButton",props:{size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},direction:{defaultValue:{value:"right"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},text:{defaultValue:{value:"ボタン"},description:"",name:"text",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"a"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"a"'},{value:'"div"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; backgroundColor?: string; textColor?: string | undefined; iconColor?: string | undefined; borderColor?: string | undefined; leftContentBorderColor?: string | undefined; } | undefined"}}}}}catch{}const E={title:"Advanced/Rebita/Button",component:b,tags:["autodocs"]},a=e=>t.jsx("div",{style:{padding:"50px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(b,{...e})}),s=a.bind({});s.args={text:"ボタン",icon:t.jsx(n,{})};const d=a.bind({});d.args={size:"large",text:"Large Button",icon:t.jsx(n,{})};const l=a.bind({});l.args={size:"middle",text:"Middle Button",icon:t.jsx(n,{})};const c=a.bind({});c.args={size:"small",text:"Small Button",icon:t.jsx(n,{})};const u=a.bind({});u.args={direction:"left",text:"Left Direction",icon:t.jsx(n,{})};const f=a.bind({});f.args={as:"button",text:"Button Element",icon:t.jsx(n,{}),onClick:()=>alert("Rebita button clicked!")};const p=a.bind({});p.args={as:"a",href:"#",text:"Link Element",icon:t.jsx(n,{})};const m=a.bind({});m.args={text:"Custom Colors",icon:t.jsx(n,{}),style:{fontSize:14,backgroundColor:"#2196f3",textColor:"#ffffff",iconColor:"#ffffff",borderColor:"#2196f3",leftContentBorderColor:"rgba(255, 255, 255, 0.3)"}};const g=a.bind({});g.args={text:"Dark Theme",icon:t.jsx(n,{}),style:{fontSize:13,backgroundColor:"#333333",textColor:"#ffffff",iconColor:"#ffffff",borderColor:"#555555",leftContentBorderColor:"#666666"}};const y=a.bind({});y.args={text:"Hover for Animation",icon:t.jsx(n,{}),style:{backgroundColor:"#2196f3",textColor:"#ffffff",iconColor:"#ffffff",borderColor:"#2196f3",leftContentBorderColor:"rgba(255, 255, 255, 0.3)"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaButton {...args} />
  </div>`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaButton {...args} />
  </div>`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaButton {...args} />
  </div>`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaButton {...args} />
  </div>`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaButton {...args} />
  </div>`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaButton {...args} />
  </div>`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaButton {...args} />
  </div>`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaButton {...args} />
  </div>`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaButton {...args} />
  </div>`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaButton {...args} />
  </div>`,...y.parameters?.docs?.source}}};const F=["Default","Large","Middle","Small","LeftDirection","ButtonElement","LinkElement","CustomColors","DarkTheme","WithAnimation"];export{f as ButtonElement,m as CustomColors,g as DarkTheme,s as Default,d as Large,u as LeftDirection,p as LinkElement,l as Middle,c as Small,y as WithAnimation,F as __namedExportsOrder,E as default};
