import{d as a,l as C,j as o}from"./iframe-Rw2KdrAu.js";import{I as w}from"./043-Ba2bG-lA.js";import"./preload-helper-PPVm8Dsz.js";const m=a.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,i=a.div.withConfig({shouldForwardProp:e=>e!=="borderColor"&&e!=="errorBorderColor"&&e!=="backgroundColor"})`
  width: 100%;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({borderColor:e})=>e??"#000"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({backgroundColor:e})=>e??"#fff"};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: ${({theme:e})=>e.size.em(16)};
`,n=e=>e??24,f=a.select.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"&&e!=="placeholderColor"&&e!=="hasPlaceholder"})`
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({color:e,placeholderColor:r,hasPlaceholder:t})=>t?r??"#909090":e??"#000"};
  font-size: ${({theme:e,fontSize:r})=>e.size.em(n(r))};
  padding: ${({theme:e,fontSize:r})=>`${e.size.customEm(20,n(r))} ${e.size.customEm(20,n(r))} ${e.size.customEm(20,n(r))} ${e.size.customEm(10,n(r))}`};
  appearance: none;
  outline: none;

  &:focus {
    outline: none;
  }
`,y=a.span.withConfig({shouldForwardProp:e=>e!=="color"})`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({color:e})=>e??"#000"};

  ${({theme:e})=>e.icon.size.style("large")}
`,g=a.div.withConfig({shouldForwardProp:e=>e!=="error"})`
  position: relative;
  width: 100%;

  ${({error:e})=>e&&C`
    ${i} {
      border-bottom-color: #f00;
    }

    ${s} {
      display: block;
    }
  `}
`,s=a.p.withConfig({shouldForwardProp:e=>e!=="errorColor"&&e!=="errorFontSize"})`
  display: none;
  color: ${({errorColor:e})=>e??"#f00"};
  font-size: ${({theme:e,errorFontSize:r})=>e.size.em(r??16)};
  margin: ${({theme:e})=>e.size.em(5)} 0 0;
  line-height: 1;
`;try{m.displayName="StyledSelectWrapper",m.__docgenInfo={description:"",displayName:"StyledSelectWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledSelectInner",i.__docgenInfo={description:"",displayName:"StyledSelectInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledSelectField",f.__docgenInfo={description:"",displayName:"StyledSelectField",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledSelectIcon",y.__docgenInfo={description:"",displayName:"StyledSelectIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="StyledSelect",g.__docgenInfo={description:"",displayName:"StyledSelect",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledSelectError",s.__docgenInfo={description:"",displayName:"StyledSelectError",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=({name:e="select-002",options:r,value:t,onChange:_,error:S=!1,errorText:u,placeholder:h,icon:b,style:l,selectProps:v})=>o.jsx(m,{children:o.jsxs(g,{error:S||!!u,children:[o.jsxs(i,{borderColor:l?.borderColor,errorBorderColor:l?.errorBorderColor,backgroundColor:l?.backgroundColor,children:[o.jsxs(f,{name:e,value:t,onChange:_,fontSize:l?.fontSize,color:l?.color,placeholderColor:l?.placeholderColor,hasPlaceholder:!t||t==="",...v,children:[h&&o.jsx("option",{value:"",disabled:!0,children:h}),r.map(p=>o.jsx("option",{value:p.value,children:p.label},p.value))]}),o.jsx(y,{color:l?.iconColor??"#000",children:b})]}),u&&o.jsx(s,{errorColor:l?.errorColor??"#f00",errorFontSize:l?.errorFontSize??16,children:u})]})});try{c.displayName="Select002",c.__docgenInfo={description:"",displayName:"Select002",props:{name:{defaultValue:{value:"select-002"},description:"",name:"name",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLSelectElement>) => void)"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},selectProps:{defaultValue:null,description:"",name:"selectProps",required:!1,type:{name:"SelectHTMLAttributes<HTMLSelectElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; color?: string; borderColor?: string | undefined; placeholderColor?: string | undefined; backgroundColor?: string | undefined; errorColor?: string | undefined; errorFontSize?: number | undefined; errorBorderColor?: string | undefined; iconColor?: string | undefined; } | u..."}}}}}catch{}const z={title:"Basic/Select/Product002",component:c,tags:["autodocs"]},q=e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(c,{...e})}),d=q.bind({});d.args={name:"select-002",placeholder:"選択してください",options:[{value:"option1",label:"オプション1"},{value:"option2",label:"オプション2"},{value:"option3",label:"オプション3"}],icon:o.jsx(w,{})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "300px"
}}>
    <Select002 {...args} />
  </div>`,...d.parameters?.docs?.source}}};const $=["Default"];export{d as Default,$ as __namedExportsOrder,z as default};
