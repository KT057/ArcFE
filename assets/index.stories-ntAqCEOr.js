import{d as p,l as d,j as l}from"./iframe-Rw2KdrAu.js";import"./preload-helper-PPVm8Dsz.js";const m=p.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,t=e=>e??18,n=p.input.withConfig({shouldForwardProp:e=>e!=="size"&&e!=="fontSize"&&e!=="color"&&e!=="backgroundColor"&&e!=="placeholderColor"&&e!=="errorBackgroundColor"})`
  width: 100%;
  display: block;
  border: 0;
  font-size: ${({theme:e,fontSize:r})=>e.size.em(r??18)};
  padding-left: ${({theme:e,fontSize:r})=>e.size.customEm(10,t(r))};
  padding-right: ${({theme:e,fontSize:r})=>e.size.customEm(10,t(r))};
  background-color: ${({backgroundColor:e})=>e??"#eee"};
  color: ${({color:e})=>e??"#000"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({placeholderColor:e})=>e??"#909090"};
  }

  ${({size:e,theme:r,fontSize:a})=>{switch(e){case"small":return d`
          padding-top: ${r.size.customEm(5,t(a))};
          padding-bottom: ${r.size.customEm(5,t(a))};
        `;case"middle":return d`
          padding-top: ${r.size.customEm(10,t(a))};
          padding-bottom: ${r.size.customEm(10,t(a))};
        `;case"large":return d`
          padding-top: ${r.size.customEm(15,t(a))};
          padding-bottom: ${r.size.customEm(15,t(a))};
        `;default:return d`
          padding-top: ${r.size.customEm(5,t(a))};
          padding-bottom: ${r.size.customEm(5,t(a))};
        `}}}
`,f=p.div.withConfig({shouldForwardProp:e=>e!=="type"&&e!=="size"&&e!=="error"})`
  position: relative;
  width: 100%;

  ${({error:e})=>e&&d`
    ${n} {
      background-color: #fdd;
    }

    ${u} {
      display: block;
    }
  `}

  ${({type:e,theme:r})=>{switch(e){case"001":return d`
          ${n} {
            border-radius: 0;
          }
        `;case"002":return d`
          ${n} {
            border-radius: ${r.size.em(4)};
          }
        `;default:return d`
          ${n} {
            border-radius: 0;
          }
        `}}}
`,u=p.p.withConfig({shouldForwardProp:e=>e!=="errorColor"&&e!=="errorFontSize"})`
  display: none;
  color: ${({errorColor:e})=>e??"#f00"};
  font-size: ${({theme:e,errorFontSize:r})=>e.size.em(r??16)};
  margin: ${({theme:e})=>e.size.em(5)} 0 0;
  line-height: 1;
`;try{m.displayName="StyledInputWrapper",m.__docgenInfo={description:"",displayName:"StyledInputWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="StyledInputField",n.__docgenInfo={description:"",displayName:"StyledInputField",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledInput",f.__docgenInfo={description:"",displayName:"StyledInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledInputError",u.__docgenInfo={description:"",displayName:"StyledInputError",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const s=({type:e="001",size:r="small",name:a="input-004",placeholder:g="入力してください",value:y,onChange:h,error:_=!1,errorText:c,style:o,inputProps:b})=>l.jsx(m,{children:l.jsxs(f,{error:_||!!c,type:e,size:r,children:[l.jsx(n,{name:a,type:"text",placeholder:g,value:y,onChange:h,fontSize:o?.fontSize,color:o?.color,backgroundColor:o?.backgroundColor,placeholderColor:o?.placeholderColor,errorBackgroundColor:o?.errorBackgroundColor,...b,size:r}),c&&l.jsx(u,{errorColor:o?.errorColor??"#f00",errorFontSize:o?.errorFontSize??16,children:c})]})});try{s.displayName="Input004",s.__docgenInfo={description:"",displayName:"Input004",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'}]}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},name:{defaultValue:{value:"input-004"},description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"入力してください"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; color?: string; backgroundColor?: string | undefined; placeholderColor?: string | undefined; errorColor?: string | undefined; errorFontSize?: number | undefined; errorBackgroundColor?: string | undefined; } | undefined"}}}}}catch{}const z={title:"Basic/Input/Product004",component:s,tags:["autodocs"]},v=e=>l.jsx("div",{style:{width:"300px"},children:l.jsx(s,{...e})}),i=v.bind({});i.args={type:"001",size:"middle",placeholder:"入力してください",name:"input-004"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "300px"
}}>
    <Input004 {...args} />
  </div>`,...i.parameters?.docs?.source}}};const q=["Default"];export{i as Default,q as __namedExportsOrder,z as default};
