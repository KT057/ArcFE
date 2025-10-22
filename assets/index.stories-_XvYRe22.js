import{d as v,r as T,j as r}from"./iframe-Rw2KdrAu.js";import{J as q}from"./index-CKomC3wV.js";import"./preload-helper-PPVm8Dsz.js";const f=v.span`
  ${({theme:e})=>e.font.baseSize.em()}
`,g=v.span.withConfig({shouldForwardProp:e=>e!=="backgroundColor"&&e!=="textColor"})`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.size.em(8)} ${({theme:e})=>e.size.em(10)} ${({theme:e})=>e.size.em(8)} ${({theme:e})=>e.size.em(16)};
  border-radius: ${({theme:e})=>e.size.em(30)};
  background-color: ${({backgroundColor:e})=>e??"#909090"};
  gap: ${({theme:e})=>e.size.em(25)};
  cursor: pointer;
`,y=v.span.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"})`
  font-size: ${({theme:e,fontSize:u})=>e.size.em(u??14)};
  display: block;
  color: ${({color:e})=>e??"#fff"};
`;try{f.displayName="StyledJmcButtonWrapper",f.__docgenInfo={description:"",displayName:"StyledJmcButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="StyledJmcButton",g.__docgenInfo={description:"",displayName:"StyledJmcButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledJmcButtonLeft",y.__docgenInfo={description:"",displayName:"StyledJmcButtonLeft",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const p=({children:e,onClick:u,as:h="span",href:_,isHovered:m,onMouseEnter:x,onMouseLeave:C,style:t})=>{const[B,b]=T.useState(!1),S=m!==void 0?m:B,J=()=>{m===void 0&&b(!0),x?.()},k=()=>{m===void 0&&b(!1),C?.()},j={...h==="a"&&_?{href:_}:{},...u?{onClick:u}:{}};return r.jsx(f,{children:r.jsxs(g,{as:h,backgroundColor:t?.backgroundColor,textColor:t?.color,onMouseEnter:J,onMouseLeave:k,...j,children:[r.jsx(y,{fontSize:t?.fontSize,color:t?.color,children:e}),r.jsx(q,{isHovered:S,style:{color:t?.circleToggleColor||t?.color,dotColor:t?.circleToggleDotColor||t?.color}})]})})};try{p.displayName="JmcButton",p.__docgenInfo={description:"",displayName:"JmcButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"span"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"a"'},{value:'"span"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},isHovered:{defaultValue:null,description:"",name:"isHovered",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"(() => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; backgroundColor?: string; color?: string | undefined; circleToggleColor?: string | undefined; circleToggleDotColor?: string | undefined; } | undefined"}}}}}catch{}const E={title:"Advanced/Jmc/Button",component:p,tags:["autodocs"]},n=e=>r.jsx("div",{style:{padding:"50px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(p,{...e})}),a=n.bind({});a.args={children:"ボタン"};const o=n.bind({});o.args={children:"Button Element",as:"button",onClick:()=>alert("Jmc button clicked!")};const s=n.bind({});s.args={children:"Link Element",as:"a",href:"#"};const d=n.bind({});d.args={children:"カスタムボタン",style:{fontSize:16,backgroundColor:"#2196f3",color:"#ffffff"}};const i=n.bind({});i.args={children:"Dark Button",style:{fontSize:14,backgroundColor:"#333333",color:"#ffffff"}};const l=n.bind({});l.args={children:"Hovered State",isHovered:!0};const c=n.bind({});c.args={children:"Interactive Button",onMouseEnter:()=>console.log("Button hovered"),onMouseLeave:()=>console.log("Button unhovered"),onClick:()=>alert("Button clicked!")};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcButton {...args} />
  </div>`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcButton {...args} />
  </div>`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcButton {...args} />
  </div>`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcButton {...args} />
  </div>`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcButton {...args} />
  </div>`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcButton {...args} />
  </div>`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcButton {...args} />
  </div>`,...c.parameters?.docs?.source}}};const w=["Default","ButtonElement","LinkElement","CustomStyle","DarkTheme","Hovered","Interactive"];export{o as ButtonElement,d as CustomStyle,i as DarkTheme,a as Default,l as Hovered,c as Interactive,s as LinkElement,w as __namedExportsOrder,E as default};
