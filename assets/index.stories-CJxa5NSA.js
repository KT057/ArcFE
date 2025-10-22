import{d as v,l as y,j as p}from"./iframe-H3qRDz1v.js";import"./preload-helper-PPVm8Dsz.js";const f=v.span`
  display: block;
  ${({theme:e})=>e.font.baseSize.em()}
`,g=v.span.withConfig({shouldForwardProp:e=>e!=="type"&&e!=="color"&&e!=="fontSize"&&e!=="hoverColor"&&e!=="hoverDuration"&&e!=="hoverEase"})`
  display: ${({type:e})=>e==="002"?"inline-block":"block"};
  color: ${({color:e})=>e??"#fff"};
  font-size: ${({theme:e,fontSize:t})=>e.size.em(t??12)};
  transition: color ${({hoverDuration:e})=>e??"0.3s"} ${({hoverEase:e,theme:t})=>t.animation.easing[e??"easeInOutCubic"]};
  cursor: pointer;
  
  ${({type:e,color:t,hoverDuration:r,hoverEase:a,theme:o})=>e==="002"&&y`
      border-bottom: 1px solid ${t??"#fff"};
      transition: 
        border-color ${r??"0.3s"} ${o.animation.easing[a??"easeInOutCubic"]},
        color ${r??"0.3s"} ${o.animation.easing[a??"easeInOutCubic"]};
    `}

  &:hover {
    color: ${({hoverColor:e})=>e??"#000"};
    
    ${({type:e,hoverColor:t})=>e==="002"&&y`
        border-color: ${t??"#000"};
      `}
  }
`;try{f.displayName="StyledTextButtonWrapper",f.__docgenInfo={description:"",displayName:"StyledTextButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="StyledTextButton",g.__docgenInfo={description:"",displayName:"StyledTextButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const m=({type:e="001",children:t,onClick:r,as:a="span",href:o,style:n})=>{const b={...a==="a"&&o?{href:o}:{},...r?{onClick:r}:{}};return p.jsx(f,{children:p.jsx(g,{as:a,type:e,color:n?.color,fontSize:n?.fontSize,hoverColor:n?.hoverColor,hoverDuration:n?.hoverDuration,hoverEase:n?.hoverEase,...b,children:t})})};try{m.displayName="TextButton001",m.__docgenInfo={description:"",displayName:"TextButton001",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"span"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"a"'},{value:'"span"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:'{ color?: string; fontSize?: number; hoverColor?: string | undefined; hoverDuration?: string | undefined; hoverEase?: "easeInSine" | "easeOutSine" | "easeInOutSine" | ... 23 more ... | undefined; } | undefined'}}}}}catch{}const T={title:"Basic/TextButton/Product001",component:m,tags:["autodocs"]},c=e=>p.jsx("div",{style:{padding:"20px",backgroundColor:"#333"},children:p.jsx(m,{...e})}),s=c.bind({});s.args={type:"001",children:"Text Button Component"};const d=c.bind({});d.args={type:"002",children:"Text Button Component"};const i=c.bind({});i.args={type:"001",as:"button",children:"Button Element",onClick:()=>alert("Button clicked!")};const l=c.bind({});l.args={type:"002",as:"a",href:"#",children:"Link Element"};const u=c.bind({});u.args={type:"002",children:"Custom Style",style:{color:"#ffeb3b",fontSize:16,hoverColor:"#ff5722",hoverDuration:"0.5s"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  backgroundColor: "#333"
}}>
    <TextButton001 {...args} />
  </div>`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  backgroundColor: "#333"
}}>
    <TextButton001 {...args} />
  </div>`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  backgroundColor: "#333"
}}>
    <TextButton001 {...args} />
  </div>`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  backgroundColor: "#333"
}}>
    <TextButton001 {...args} />
  </div>`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  backgroundColor: "#333"
}}>
    <TextButton001 {...args} />
  </div>`,...u.parameters?.docs?.source}}};const _=["Type001","Type002","ButtonElement","LinkElement","CustomStyle"];export{i as ButtonElement,u as CustomStyle,l as LinkElement,s as Type001,d as Type002,_ as __namedExportsOrder,T as default};
