import{d as p,l as d,j as o}from"./iframe-H3qRDz1v.js";import"./preload-helper-PPVm8Dsz.js";const c=p.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,a=e=>e??18,l=p.input.withConfig({shouldForwardProp:e=>e!=="size"&&e!=="style"})`
  width: 100%;
  display: block;
  border: 1px solid ${({borderColor:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:r})=>e.size.em(a(r))};
  padding-left: ${({theme:e,fontSize:r})=>e.size.customEm(10,a(r))};
  padding-right: ${({theme:e,fontSize:r})=>e.size.customEm(10,a(r))};
  color: ${({style:e})=>e?.color||"#000"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({placeholderColor:e})=>e??"#909090"};
  }

  ${({size:e,theme:r,fontSize:t})=>{switch(e){case"small":return d`
          padding-top: ${r.size.customEm(5,a(t))};
          padding-bottom: ${r.size.customEm(5,a(t))};
        `;case"middle":return d`
          padding-top: ${r.size.customEm(10,a(t))};
          padding-bottom: ${r.size.customEm(10,a(t))};
        `;case"large":return d`
          padding-top: ${r.size.customEm(15,a(t))};
          padding-bottom: ${r.size.customEm(15,a(t))};
        `;default:return d`
          padding-top: ${r.size.em(5)};
          padding-bottom: ${r.size.em(5)};
        `}}}
`,f=p.div.withConfig({shouldForwardProp:e=>e!=="type"&&e!=="size"&&e!=="error"})`
  position: relative;
  width: 100%;

  ${({error:e})=>e&&d`
    ${l} {
      border-color: #f00;
    }

    ${s} {
      display: block;
    }
  `}

  ${({type:e,theme:r})=>{switch(e){case"001":return d`
          ${l} {
            border-radius: 0;
          }
        `;case"002":return d`
          ${l} {
            border-radius: ${r.size.em(4)};
          }
        `;default:return d`
          ${l} {
            border-radius: 0;
          }
        `}}}
`,s=p.p.withConfig({shouldForwardProp:e=>e!=="errorColor"&&e!=="errorFontSize"})`
  display: none;
  color: ${({errorColor:e})=>e??"#f00"};
  font-size: ${({theme:e,errorFontSize:r})=>e.size.em(r??16)};
  margin: ${({theme:e})=>e.size.em(5)} 0 0;
  line-height: 1;
`;try{c.displayName="StyledInputWrapper",c.__docgenInfo={description:"",displayName:"StyledInputWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledInputField",l.__docgenInfo={description:"",displayName:"StyledInputField",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledInput",f.__docgenInfo={description:"",displayName:"StyledInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledInputError",s.__docgenInfo={description:"",displayName:"StyledInputError",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const u=({type:e="001",size:r="small",name:t="input-001",placeholder:y="入力してください",value:g,onChange:_,error:h=!1,errorText:m,style:n,inputProps:b})=>o.jsx(c,{children:o.jsxs(f,{error:h||!!m,type:e,size:r,children:[o.jsx(l,{name:t,type:"text",placeholder:y,value:g,onChange:_,fontSize:n?.fontSize,color:n?.color,borderColor:n?.borderColor,placeholderColor:n?.placeholderColor,...b,size:r}),m&&o.jsx(s,{errorColor:n?.errorColor??"#f00",errorFontSize:n?.errorFontSize??16,children:m})]})});try{u.displayName="Input001",u.__docgenInfo={description:"",displayName:"Input001",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'}]}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},name:{defaultValue:{value:"input-001"},description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"入力してください"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; color?: string; borderColor?: string | undefined; placeholderColor?: string | undefined; errorColor?: string | undefined; errorFontSize?: number | undefined; } | undefined"}}}}}catch{}const I={title:"Basic/Input/Product001",component:u,tags:["autodocs"]},v=e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(u,{...e})}),i=v.bind({});i.args={type:"001",size:"middle",placeholder:"入力してください",name:"input-001"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "300px"
}}>
    <Input001 {...args} />
  </div>`,...i.parameters?.docs?.source}}};const q=["Default"];export{i as Default,q as __namedExportsOrder,I as default};
