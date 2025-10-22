import{d as p,l as n,j as d}from"./iframe-H3qRDz1v.js";import"./preload-helper-PPVm8Dsz.js";const m=p.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,o=e=>e??18,i=p.input.withConfig({shouldForwardProp:e=>e!=="size"&&e!=="fontSize"&&e!=="color"&&e!=="borderColor"&&e!=="backgroundColor"&&e!=="placeholderColor"&&e!=="errorBackgroundColor"})`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({borderColor:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:r})=>e.size.em(r??18)};
  padding-left: ${({theme:e,fontSize:r})=>e.size.customEm(10,o(r))};
  padding-right: ${({theme:e,fontSize:r})=>e.size.customEm(10,o(r))};
  background-color: ${({backgroundColor:e})=>e??"#eee"};
  color: ${({color:e})=>e??"#000"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({placeholderColor:e})=>e??"#909090"};
  }

  ${({size:e,theme:r,fontSize:a})=>{switch(e){case"small":return n`
          padding-top: ${r.size.customEm(5,o(a))};
          padding-bottom: ${r.size.customEm(5,o(a))};
        `;case"middle":return n`
          padding-top: ${r.size.customEm(10,o(a))};
          padding-bottom: ${r.size.customEm(10,o(a))};
        `;case"large":return n`
          padding-top: ${r.size.customEm(15,o(a))};
          padding-bottom: ${r.size.customEm(15,o(a))};
        `;default:return n`
          padding-top: ${r.size.customEm(5,o(a))};
          padding-bottom: ${r.size.customEm(5,o(a))};
        `}}}
`,f=p.div.withConfig({shouldForwardProp:e=>e!=="size"&&e!=="error"})`
  position: relative;
  width: 100%;

  ${({error:e})=>e&&n`
    ${i} {
      background-color: #fdd;
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
`;try{m.displayName="StyledInputWrapper",m.__docgenInfo={description:"",displayName:"StyledInputWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledInputField",i.__docgenInfo={description:"",displayName:"StyledInputField",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledInput",f.__docgenInfo={description:"",displayName:"StyledInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledInputError",s.__docgenInfo={description:"",displayName:"StyledInputError",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const u=({size:e="small",name:r="input-003",placeholder:a="入力してください",value:g,onChange:y,error:h=!1,errorText:c,style:t,inputProps:_})=>d.jsx(m,{children:d.jsxs(f,{error:h||!!c,size:e,children:[d.jsx(i,{name:r,type:"text",placeholder:a,value:g,onChange:y,fontSize:t?.fontSize,color:t?.color,borderColor:t?.borderColor,backgroundColor:t?.backgroundColor,placeholderColor:t?.placeholderColor,errorBackgroundColor:t?.errorBackgroundColor,..._,size:e}),c&&d.jsx(s,{errorColor:t?.errorColor??"#f00",errorFontSize:t?.errorFontSize??16,children:c})]})});try{u.displayName="Input003",u.__docgenInfo={description:"",displayName:"Input003",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},name:{defaultValue:{value:"input-003"},description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"入力してください"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; color?: string; borderColor?: string | undefined; backgroundColor?: string | undefined; placeholderColor?: string | undefined; errorColor?: string | undefined; errorFontSize?: number | undefined; errorBackgroundColor?: string | undefined; } | undefined"}}}}}catch{}const I={title:"Basic/Input/Product003",component:u,tags:["autodocs"]},b=e=>d.jsx("div",{style:{width:"300px"},children:d.jsx(u,{...e})}),l=b.bind({});l.args={size:"middle",placeholder:"入力してください",name:"input-003"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "300px"
}}>
    <Input003 {...args} />
  </div>`,...l.parameters?.docs?.source}}};const z=["Default"];export{l as Default,z as __namedExportsOrder,I as default};
