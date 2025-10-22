import{d as s,l as T,r as C,j as t}from"./iframe-Rw2KdrAu.js";import"./preload-helper-PPVm8Dsz.js";const m=s.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,f=s.div.withConfig({shouldForwardProp:e=>e!=="type"&&e!=="hasError"})`
  position: relative;
  width: 100%;
`,y=s.textarea.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="lineHeight"&&e!=="color"&&e!=="borderColor"&&e!=="placeholderColor"&&e!=="inputType"})`
  width: 100%;
  display: block;
  border: 1px solid ${({borderColor:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:r})=>e.size.em(r??18)};
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

  ${({inputType:e})=>e==="001"&&T`
      border-radius: 0;
    `}

  ${({inputType:e})=>e==="002"&&T`
      border-radius: ${({theme:r})=>r.size.em(4)};
    `}
`,h=s.p.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"})`
  color: ${({color:e})=>e??"#f00"};
  font-size: ${({theme:e,fontSize:r})=>e.size.em(r??16)};
  margin: ${({theme:e,fontSize:r})=>e.size.em(5/(r??16)*10)} 0 0;
  line-height: 1;
`;try{m.displayName="StyledTextFieldWrapper",m.__docgenInfo={description:"",displayName:"StyledTextFieldWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledTextField",f.__docgenInfo={description:"",displayName:"StyledTextField",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledTextFieldInput",y.__docgenInfo={description:"",displayName:"StyledTextFieldInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="StyledTextFieldError",h.__docgenInfo={description:"",displayName:"StyledTextFieldError",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const n=({type:e="001",name:r="text-field-001",placeholder:_="入力してください",value:u,onChange:v,error:S=!1,errorText:c,style:a})=>{const[b,F]=C.useState(""),z=u!==void 0?u:b,V=x=>{u===void 0&&F(x.target.value),v?.(x)},g=S||!!c;return t.jsx(m,{children:t.jsxs(f,{type:e,hasError:g,children:[t.jsx(y,{name:r,placeholder:_,value:z,onChange:V,fontSize:a?.fontSize,lineHeight:a?.lineHeight,color:a?.color,borderColor:g?a?.errorStyle?.borderColor??"#f00":a?.borderColor??"#000",placeholderColor:a?.placeholderColor,inputType:e}),c&&t.jsx(h,{fontSize:a?.errorStyle?.fontSize,color:a?.errorStyle?.color,children:c})]})})};try{n.displayName="TextField001",n.__docgenInfo={description:"",displayName:"TextField001",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'}]}},name:{defaultValue:{value:"text-field-001"},description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"入力してください"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; lineHeight?: number; color?: string | undefined; borderColor?: string | undefined; placeholderColor?: string | undefined; errorStyle?: { ...; } | undefined; } | undefined"}}}}}catch{}const W={title:"Basic/TextField/Product001",component:n,tags:["autodocs"]},p=e=>t.jsx("div",{style:{padding:"20px",maxWidth:"400px"},children:t.jsx(n,{...e})}),d=p.bind({});d.args={type:"001",name:"text-field-001",placeholder:"入力してください"};const l=p.bind({});l.args={type:"002",name:"text-field-002",placeholder:"入力してください"};const o=p.bind({});o.args={type:"001",name:"text-field-error",placeholder:"入力してください",errorText:"※ 必須項目に入力してください。"};const i=p.bind({});i.args={type:"002",name:"text-field-custom",placeholder:"カスタムスタイル",style:{fontSize:16,color:"#333",borderColor:"#2196f3",placeholderColor:"#999",errorStyle:{fontSize:14,color:"#ff5722",borderColor:"#ff5722"}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  maxWidth: "400px"
}}>
    <TextField001 {...args} />
  </div>`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  maxWidth: "400px"
}}>
    <TextField001 {...args} />
  </div>`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  maxWidth: "400px"
}}>
    <TextField001 {...args} />
  </div>`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  maxWidth: "400px"
}}>
    <TextField001 {...args} />
  </div>`,...i.parameters?.docs?.source}}};const w=["Type001","Type002","WithError","CustomStyle"];export{i as CustomStyle,d as Type001,l as Type002,o as WithError,w as __namedExportsOrder,W as default};
