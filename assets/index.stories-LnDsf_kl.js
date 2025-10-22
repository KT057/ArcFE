import{d as y,l as _,r as q,j as t}from"./iframe-H3qRDz1v.js";import{b as a}from"./043-Dx6gVrpV.js";import{V as E}from"./index-CrFwnFmf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CH_iu5NA.js";const h=y.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,v=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({theme:e})=>e.size.em(8)};
  cursor: pointer;
  line-height: 0;

  ${({direction:e})=>e==="left"&&_`
      flex-direction: row-reverse;
    `}
  ${({direction:e})=>e==="right"&&_`
      flex-direction: row;
    `}
`,I=y.span`
  display: block;
`,T=y.span`
  display: block;
  color: ${({color:e})=>e||"#000"};

  ${({theme:e,iconSize:x})=>e.icon.size.style(x||"middle")}
`;try{h.displayName="StyledTextButtonWithIconWrapper",h.__docgenInfo={description:"",displayName:"StyledTextButtonWithIconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="StyledTextButtonWithIcon",v.__docgenInfo={description:"",displayName:"StyledTextButtonWithIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="StyledTextButtonWithIconInner",I.__docgenInfo={description:"",displayName:"StyledTextButtonWithIconInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="StyledTextButtonWithIconIcon",T.__docgenInfo={description:"",displayName:"StyledTextButtonWithIconIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const g=({text:e="KAIKA 東京 by THE SHARE HOTELS",icon:x,onClick:S,as:W="div",href:j,iconDirection:B="right",style:f})=>{const[C,b]=q.useState(!1),V=()=>{b(!0)},R=()=>{b(!1)};return t.jsx(h,{children:t.jsxs(v,{as:W,onClick:S,href:j,direction:B,onMouseEnter:V,onMouseLeave:R,children:[t.jsx(I,{children:t.jsx(E,{enableHover:C,style:{fontSize:f?.fontSize,color:f?.color},children:e})}),t.jsx(T,{iconSize:f?.iconSize,color:f?.color,children:t.jsx(t.Fragment,{children:x})})]})})};try{g.displayName="RebitaTextButtonWithIcon",g.__docgenInfo={description:"",displayName:"RebitaTextButtonWithIcon",props:{text:{defaultValue:{value:"KAIKA 東京 by THE SHARE HOTELS"},description:"",name:"text",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"a"'},{value:'"div"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},iconDirection:{defaultValue:{value:"right"},description:"",name:"iconDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; color?: string; iconSize?: Size | undefined; } | undefined"}}}}}catch{}const L={title:"Advanced/Rebita/TextButtonWithIcon",component:g,tags:["autodocs"]},n=e=>t.jsx("div",{style:{padding:"50px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(g,{...e})}),r=n.bind({});r.args={icon:t.jsx(a,{})};const o=n.bind({});o.args={icon:t.jsx(a,{}),iconDirection:"left"};const s=n.bind({});s.args={text:"カスタムテキストボタン",icon:t.jsx(a,{})};const i=n.bind({});i.args={as:"button",text:"Button Element",icon:t.jsx(a,{}),onClick:()=>alert("Text button with icon clicked!")};const c=n.bind({});c.args={as:"a",href:"#",text:"Link Element",icon:t.jsx(a,{})};const d=n.bind({});d.args={text:"カスタムスタイル",icon:t.jsx(a,{}),style:{fontSize:18,color:"#2196f3"}};const l=n.bind({});l.args={text:"これは非常に長いテキストボタンの例です",icon:t.jsx(a,{}),style:{fontSize:14}};const u=n.bind({});u.args={text:"アイコンなしのテキスト",icon:null};const p=n.bind({});p.args={text:"カスタムアイコン",icon:t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("path",{d:"M9 12l2 2 4-4"})]})};const m=n.bind({});m.args={text:"ホバーしてアニメーションを確認",icon:t.jsx(a,{}),onClick:()=>console.log("Button clicked!"),style:{color:"#22c55e"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaTextButtonWithIcon {...args} />
  </div>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaTextButtonWithIcon {...args} />
  </div>`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaTextButtonWithIcon {...args} />
  </div>`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaTextButtonWithIcon {...args} />
  </div>`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaTextButtonWithIcon {...args} />
  </div>`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaTextButtonWithIcon {...args} />
  </div>`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaTextButtonWithIcon {...args} />
  </div>`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaTextButtonWithIcon {...args} />
  </div>`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaTextButtonWithIcon {...args} />
  </div>`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaTextButtonWithIcon {...args} />
  </div>`,...m.parameters?.docs?.source}}};const D=["Default","Left","CustomText","ButtonElement","LinkElement","CustomStyle","LongText","NoIcon","CustomIcon","Interactive"];export{i as ButtonElement,p as CustomIcon,d as CustomStyle,s as CustomText,r as Default,m as Interactive,o as Left,c as LinkElement,l as LongText,u as NoIcon,D as __namedExportsOrder,L as default};
