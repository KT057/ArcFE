import{d as s,l as T,r as V,j as t}from"./iframe-H3qRDz1v.js";import"./preload-helper-PPVm8Dsz.js";const m=s.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,f=s.div.withConfig({shouldForwardProp:e=>e!=="hasError"})`
  position: relative;
  width: 100%;
`,g=s.textarea.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="lineHeight"&&e!=="color"&&e!=="borderColor"&&e!=="backgroundColor"&&e!=="placeholderColor"&&e!=="inputType"})`
  width: 100%;
  display: block;
  border: 1px solid ${({borderColor:e})=>e??"#000"};
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

  ${({inputType:e})=>e==="001"&&T`
      border-radius: 0;
    `}

  ${({inputType:e})=>e==="002"&&T`
      border-radius: ${({theme:r})=>r.size.em(4)};
    `}
`,y=s.p.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"})`
  color: ${({color:e})=>e??"#f00"};
  font-size: ${({theme:e,fontSize:r})=>e.size.em(r??16)};
  margin: ${({theme:e,fontSize:r})=>e.size.em(5/(r??16)*10)} 0 0;
  line-height: 1;
`;try{m.displayName="StyledTextFieldWrapper",m.__docgenInfo={description:"",displayName:"StyledTextFieldWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledTextField",f.__docgenInfo={description:"",displayName:"StyledTextField",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="StyledTextFieldInput",g.__docgenInfo={description:"",displayName:"StyledTextFieldInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledTextFieldError",y.__docgenInfo={description:"",displayName:"StyledTextFieldError",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const n=({type:e="001",name:r="text-field-005",placeholder:_="入力してください",value:c,onChange:b,error:v=!1,errorText:p,style:a})=>{const[S,C]=V.useState(""),F=c!==void 0?c:S,z=x=>{c===void 0&&C(x.target.value),b?.(x)},h=v||!!p;return t.jsx(m,{children:t.jsxs(f,{hasError:h,children:[t.jsx(g,{name:r,placeholder:_,value:F,onChange:z,fontSize:a?.fontSize,lineHeight:a?.lineHeight,color:a?.color,borderColor:a?.borderColor,backgroundColor:h?a?.errorStyle?.backgroundColor??"#fdd":a?.backgroundColor??"#eee",placeholderColor:a?.placeholderColor,inputType:e}),p&&t.jsx(y,{fontSize:a?.errorStyle?.fontSize,color:a?.errorStyle?.color,children:p})]})})};try{n.displayName="TextField005",n.__docgenInfo={description:"",displayName:"TextField005",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'}]}},name:{defaultValue:{value:"text-field-005"},description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"入力してください"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; lineHeight?: number; color?: string | undefined; borderColor?: string | undefined; backgroundColor?: string | undefined; placeholderColor?: string | undefined; errorStyle?: { ...; } | undefined; } | undefined"}}}}}catch{}const W={title:"Basic/TextField/Product005",component:n,tags:["autodocs"]},u=e=>t.jsx("div",{style:{padding:"20px",maxWidth:"400px"},children:t.jsx(n,{...e})}),o=u.bind({});o.args={type:"001",name:"text-field-005",placeholder:"入力してください"};const d=u.bind({});d.args={type:"002",name:"text-field-005",placeholder:"入力してください"};const l=u.bind({});l.args={type:"001",name:"text-field-error",placeholder:"入力してください",errorText:"※ 必須項目に入力してください。"};const i=u.bind({});i.args={type:"002",name:"text-field-custom",placeholder:"カスタムスタイル（全ボーダー背景色付き）",style:{fontSize:16,color:"#333",borderColor:"#2196f3",backgroundColor:"#f5f5f5",placeholderColor:"#999",errorStyle:{fontSize:14,color:"#ff5722",backgroundColor:"#ffebee"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  maxWidth: "400px"
}}>
    <TextField005 {...args} />
  </div>`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  maxWidth: "400px"
}}>
    <TextField005 {...args} />
  </div>`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  maxWidth: "400px"
}}>
    <TextField005 {...args} />
  </div>`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px",
  maxWidth: "400px"
}}>
    <TextField005 {...args} />
  </div>`,...i.parameters?.docs?.source}}};const w=["Type001","Type002","WithError","CustomStyle"];export{i as CustomStyle,o as Type001,d as Type002,l as WithError,w as __namedExportsOrder,W as default};
