import{d as p,l,j as d}from"./iframe-Rw2KdrAu.js";import"./preload-helper-PPVm8Dsz.js";const c=p.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,a=e=>e??18,i=p.input.withConfig({shouldForwardProp:e=>e!=="size"&&e!=="fontSize"&&e!=="color"&&e!=="borderColor"&&e!=="placeholderColor"})`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({borderColor:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:r})=>e.size.em(a(r))};
  padding-left: ${({theme:e,fontSize:r})=>e.size.customEm(10,a(r))};
  padding-right: ${({theme:e,fontSize:r})=>e.size.customEm(10,a(r))};
  color: ${({color:e})=>e??"#000"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({placeholderColor:e})=>e??"#909090"};
  }

  ${({size:e,theme:r,fontSize:t})=>{switch(e){case"small":return l`
          padding-top: ${r.size.customEm(3,a(t))};
          padding-bottom: ${r.size.customEm(3,a(t))};
        `;case"middle":return l`
          padding-top: ${r.size.customEm(7,a(t))};
          padding-bottom: ${r.size.customEm(7,a(t))};
        `;case"large":return l`
          padding-top: ${r.size.customEm(7,a(t))};
          padding-bottom: ${r.size.customEm(7,a(t))};
        `;default:return l`
          padding-top: ${r.size.customEm(5,a(t))};
          padding-bottom: ${r.size.customEm(5,a(t))};
        `}}}
`,f=p.div.withConfig({shouldForwardProp:e=>e!=="size"&&e!=="error"})`
  position: relative;
  width: 100%;

  ${({error:e})=>e&&l`
    ${i} {
      border-bottom-color: #f00;
    }

    ${s} {
      display: block;
    }
  `}
`,s=p.p.withConfig({shouldForwardProp:e=>e!=="errorColor"&&e!=="errorFontSize"})`
  display: none;
  color: ${({errorColor:e})=>e??"#f00"};
  font-size: ${({theme:e,errorFontSize:r})=>e.size.em(r??16)};
  margin: ${({theme:e})=>e.size.em(5)} 0 0;
  line-height: 1;
`;try{c.displayName="StyledInputWrapper",c.__docgenInfo={description:"",displayName:"StyledInputWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledInputField",i.__docgenInfo={description:"",displayName:"StyledInputField",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledInput",f.__docgenInfo={description:"",displayName:"StyledInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledInputError",s.__docgenInfo={description:"",displayName:"StyledInputError",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const u=({size:e="small",name:r="input-002",placeholder:t="入力してください",value:y,onChange:g,error:h=!1,errorText:m,style:o,inputProps:_})=>d.jsx(c,{children:d.jsxs(f,{error:h||!!m,size:e,children:[d.jsx(i,{name:r,type:"text",placeholder:t,value:y,onChange:g,fontSize:o?.fontSize,color:o?.color,borderColor:o?.borderColor,placeholderColor:o?.placeholderColor,..._,size:e}),m&&d.jsx(s,{errorColor:o?.errorColor??"#f00",errorFontSize:o?.errorFontSize??16,children:m})]})});try{u.displayName="Input002",u.__docgenInfo={description:"",displayName:"Input002",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},name:{defaultValue:{value:"input-002"},description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"入力してください"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; color?: string; borderColor?: string | undefined; placeholderColor?: string | undefined; errorColor?: string | undefined; errorFontSize?: number | undefined; } | undefined"}}}}}catch{}const z={title:"Basic/Input/Product002",component:u,tags:["autodocs"]},b=e=>d.jsx("div",{style:{width:"300px"},children:d.jsx(u,{...e})}),n=b.bind({});n.args={size:"middle",placeholder:"入力してください",name:"input-002"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "300px"
}}>
    <Input002 {...args} />
  </div>`,...n.parameters?.docs?.source}}};const $=["Default"];export{n as Default,$ as __namedExportsOrder,z as default};
