import{d as t,l as i,j as a}from"./iframe-Rw2KdrAu.js";import{I as q}from"./043-Ba2bG-lA.js";import"./preload-helper-PPVm8Dsz.js";const y=t.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,o=t.div.withConfig({shouldForwardProp:e=>e!=="borderColor"&&e!=="backgroundColor"&&e!=="errorBorderColor"})`
  width: 100%;
  border: 1px solid ${({borderColor:e})=>e??"#000"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({backgroundColor:e})=>e??"#fff"};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: ${({theme:e})=>e.size.em(16)};
`,n=e=>e??24,g=t.select.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"&&e!=="placeholderColor"&&e!=="hasPlaceholder"})`
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({color:e,placeholderColor:r,hasPlaceholder:u})=>u?r??"#909090":e??"#000"};
  font-size: ${({theme:e,fontSize:r})=>e.size.em(n(r))};
  padding: ${({theme:e,fontSize:r})=>`${e.size.customEm(20,n(r))} ${e.size.customEm(20,n(r))} ${e.size.customEm(20,n(r))} ${e.size.customEm(10,n(r))}`};
  appearance: none;
  outline: none;

  &:focus {
    outline: none;
  }
`,h=t.span.withConfig({shouldForwardProp:e=>e!=="color"})`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({color:e})=>e??"#000"};

  ${({theme:e})=>e.icon.size.style("large")}
`,_=t.div.withConfig({shouldForwardProp:e=>e!=="type"&&e!=="error"})`
  position: relative;
  width: 100%;

  ${({error:e})=>e&&i`
    ${o} {
      border-color: #f00;
    }

    ${s} {
      display: block;
    }
  `}

  ${({type:e,theme:r})=>{switch(e){case"001":return i`
          ${o} {
            border-radius: 0;
          }
        `;case"002":return i`
          ${o} {
            border-radius: ${r.size.em(5)};
          }
        `;default:return i`
          ${o} {
            border-radius: 0;
          }
        `}}}
`,s=t.p.withConfig({shouldForwardProp:e=>e!=="errorColor"&&e!=="errorFontSize"})`
  display: none;
  color: ${({errorColor:e})=>e??"#f00"};
  font-size: ${({theme:e,errorFontSize:r})=>e.size.em(r??16)};
  margin: ${({theme:e})=>e.size.em(5)} 0 0;
  line-height: 1;
`;try{y.displayName="StyledSelectWrapper",y.__docgenInfo={description:"",displayName:"StyledSelectWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledSelectInner",o.__docgenInfo={description:"",displayName:"StyledSelectInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="StyledSelectField",g.__docgenInfo={description:"",displayName:"StyledSelectField",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="StyledSelectIcon",h.__docgenInfo={description:"",displayName:"StyledSelectIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{_.displayName="StyledSelect",_.__docgenInfo={description:"",displayName:"StyledSelect",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledSelectError",s.__docgenInfo={description:"",displayName:"StyledSelectError",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=({type:e="001",name:r="select-001",options:u,value:p,onChange:b,error:v=!1,errorText:m,placeholder:S,icon:w,style:l,selectProps:C})=>a.jsx(y,{children:a.jsxs(_,{error:v||!!m,type:e,children:[a.jsxs(o,{borderColor:l?.borderColor,backgroundColor:l?.backgroundColor,errorBorderColor:l?.errorBorderColor,children:[a.jsxs(g,{name:r,value:p,onChange:b,fontSize:l?.fontSize,color:l?.color,placeholderColor:l?.placeholderColor,hasPlaceholder:!p||p==="",...C,children:[S&&a.jsx("option",{value:"",disabled:!0,children:S}),u.map(f=>a.jsx("option",{value:f.value,children:f.label},f.value))]}),a.jsx(h,{color:l?.iconColor??"#000",children:w})]}),m&&a.jsx(s,{errorColor:l?.errorColor??"#f00",errorFontSize:l?.errorFontSize??16,children:m})]})});try{c.displayName="Select001",c.__docgenInfo={description:"",displayName:"Select001",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'}]}},name:{defaultValue:{value:"select-001"},description:"",name:"name",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLSelectElement>) => void)"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},selectProps:{defaultValue:null,description:"",name:"selectProps",required:!1,type:{name:"SelectHTMLAttributes<HTMLSelectElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; color?: string; borderColor?: string | undefined; backgroundColor?: string | undefined; placeholderColor?: string | undefined; errorColor?: string | undefined; errorFontSize?: number | undefined; errorBorderColor?: string | undefined; iconColor?: string | undefined; } | u..."}}}}}catch{}const z={title:"Basic/Select/Product001",component:c,tags:["autodocs"]},V=e=>a.jsx("div",{style:{width:"300px"},children:a.jsx(c,{...e})}),d=V.bind({});d.args={type:"001",name:"select-001",placeholder:"選択してください",options:[{value:"option1",label:"オプション1"},{value:"option2",label:"オプション2"},{value:"option3",label:"オプション3"}],icon:a.jsx(q,{})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "300px"
}}>
    <Select001 {...args} />
  </div>`,...d.parameters?.docs?.source}}};const j=["Default"];export{d as Default,j as __namedExportsOrder,z as default};
