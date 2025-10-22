import{d as n,r as C,j as t}from"./iframe-H3qRDz1v.js";import"./preload-helper-PPVm8Dsz.js";const u=n.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,p=n.div.withConfig({shouldForwardProp:e=>e!=="hasError"})`
  position: relative;
  width: 100%;
`,m=n.textarea.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="lineHeight"&&e!=="color"&&e!=="borderColor"&&e!=="backgroundColor"&&e!=="placeholderColor"})`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({borderColor:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:r})=>e.size.em(r??18)};
  background-color: ${({backgroundColor:e})=>e??"#eee"};
  padding: ${({theme:e,fontSize:r})=>e.size.em(10/(r??18)*10)};
  color: ${({color:e})=>e??"#000"};
  box-sizing: border-box;
  line-height: ${({theme:e,fontSize:r})=>e.size.em(r??18)};
  height: calc((${({lineHeight:e})=>e??1.5} * 5em) + ${({theme:e,fontSize:r})=>e.size.em(10/(r??18)*10)} * 2);
  min-height: calc((${({lineHeight:e})=>e??1.5} * 3em) + ${({theme:e,fontSize:r})=>e.size.em(10/(r??18)*10)} * 2);
  max-height: calc((${({lineHeight:e})=>e??1.5} * 15em) + ${({theme:e,fontSize:r})=>e.size.em(10/(r??18)*10)} * 2);
  resize: vertical;

  &::placeholder {
    color: ${({placeholderColor:e})=>e??"#909090"};
  }

  &:focus {
    outline: none;
  }
`,f=n.p.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"})`
  color: ${({color:e})=>e??"#f00"};
  font-size: ${({theme:e,fontSize:r})=>e.size.em(r??16)};
  margin: ${({theme:e,fontSize:r})=>e.size.em(5/(r??16)*10)} 0 0;
  line-height: 1;
`;try{u.displayName="StyledTextFieldWrapper",u.__docgenInfo={description:"",displayName:"StyledTextFieldWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledTextField",p.__docgenInfo={description:"",displayName:"StyledTextField",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledTextFieldInput",m.__docgenInfo={description:"",displayName:"StyledTextFieldInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledTextFieldError",f.__docgenInfo={description:"",displayName:"StyledTextFieldError",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const i=({name:e="text-field-003",placeholder:r="入力してください",value:s,onChange:x,error:_=!1,errorText:c,style:a})=>{const[b,T]=C.useState(""),S=s!==void 0?s:b,v=y=>{s===void 0&&T(y.target.value),x?.(y)},h=_||!!c;return t.jsx(u,{children:t.jsxs(p,{hasError:h,children:[t.jsx(m,{name:e,placeholder:r,value:S,onChange:v,fontSize:a?.fontSize,lineHeight:a?.lineHeight,color:a?.color,borderColor:a?.borderColor,backgroundColor:h?a?.errorStyle?.backgroundColor??"#fdd":a?.backgroundColor??"#eee",placeholderColor:a?.placeholderColor}),c&&t.jsx(f,{fontSize:a?.errorStyle?.fontSize,color:a?.errorStyle?.color,children:c})]})})};try{i.displayName="TextField003",i.__docgenInfo={description:"",displayName:"TextField003",props:{name:{defaultValue:{value:"text-field-003"},description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"入力してください"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; lineHeight?: number; color?: string | undefined; borderColor?: string | undefined; backgroundColor?: string | undefined; placeholderColor?: string | undefined; errorStyle?: { ...; } | undefined; } | undefined"}}}}}catch{}const V={title:"Basic/TextField/Product003",component:i,tags:["autodocs"]},g=e=>t.jsx("div",{style:{padding:"20px",maxWidth:"400px"},children:t.jsx(i,{...e})}),o=g.bind({});o.args={name:"text-field-003",placeholder:"入力してください"};const d=g.bind({});d.args={name:"text-field-error",placeholder:"入力してください",errorText:"※ 必須項目に入力してください。"};const l=g.bind({});l.args={name:"text-field-custom",placeholder:"カスタムスタイル（背景色付き）",style:{fontSize:16,color:"#333",borderColor:"#2196f3",backgroundColor:"#f5f5f5",placeholderColor:"#999",errorStyle:{fontSize:14,color:"#ff5722",backgroundColor:"#ffebee"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  maxWidth: "400px"
}}>
    <TextField003 {...args} />
  </div>`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  maxWidth: "400px"
}}>
    <TextField003 {...args} />
  </div>`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  maxWidth: "400px"
}}>
    <TextField003 {...args} />
  </div>`,...l.parameters?.docs?.source}}};const q=["Default","WithError","CustomStyle"];export{l as CustomStyle,o as Default,d as WithError,q as __namedExportsOrder,V as default};
