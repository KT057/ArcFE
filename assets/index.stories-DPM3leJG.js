import{d as s,l as a,j as o}from"./iframe-Rw2KdrAu.js";import{I as w}from"./043-Ba2bG-lA.js";import"./preload-helper-PPVm8Dsz.js";const f=s.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,l=s.div.withConfig({shouldForwardProp:e=>e!=="iconPosition"&&e!=="borderColor"&&e!=="backgroundColor"&&e!=="errorBorderColor"})`
  position: relative;
  border: 1px solid ${({borderColor:e})=>e??"#000"};
  background-color: ${({backgroundColor:e})=>e??"#fff"};

  ${({iconPosition:e,theme:r})=>{switch(e){case"right":return a`
          padding-right: ${r.size.em(40)};
        `;case"left":return a`
          padding-left: ${r.size.em(40)};
        `;default:return a`
          padding-right: ${r.size.em(40)};
        `}}}
`,n=e=>e??18,i=s.input.withConfig({shouldForwardProp:e=>e!=="size"&&e!=="iconPosition"&&e!=="fontSize"&&e!=="color"&&e!=="backgroundColor"&&e!=="placeholderColor"})`
  width: 100%;
  display: block;
  border: 0;
  font-size: ${({theme:e,fontSize:r})=>e.size.em(n(r))};
  color: ${({color:e})=>e??"#000"};
  background-color: ${({backgroundColor:e})=>e??"#fff"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({placeholderColor:e})=>e??"#909090"};
  }

  ${({size:e,theme:r,fontSize:t})=>{switch(e){case"small":return a`
          padding-top: ${r.size.customEm(5,n(t))};
          padding-bottom: ${r.size.customEm(5,n(t))};
        `;case"middle":return a`
          padding-top: ${r.size.customEm(10,n(t))};
          padding-bottom: ${r.size.customEm(10,n(t))};
        `;case"large":return a`
          padding-top: ${r.size.customEm(15,n(t))};
          padding-bottom: ${r.size.customEm(15,n(t))};
        `;default:return a`
          padding-top: ${r.size.em(5)};
          padding-bottom: ${r.size.em(5)};
        `}}}

  ${({iconPosition:e,theme:r})=>{switch(e){case"right":return a`
          padding-left: ${r.size.em(10)};
          padding-right: 0;
        `;case"left":return a`
          padding-left: 0;
          padding-right: ${r.size.em(10)};
        `;default:return a`
          padding-left: ${r.size.em(10)};
          padding-right: 0;
        `}}}
`,g=s.div.withConfig({shouldForwardProp:e=>e!=="iconPosition"})`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${({theme:e,size:r})=>e.icon.size.style(r)}

  ${({iconPosition:e,theme:r})=>{switch(e){case"right":return a`
          right: ${r.size.em(5)};
        `;case"left":return a`
          left: ${r.size.em(5)};
        `;default:return a`
          right: ${r.size.em(5)};
        `}}}
`,y=s.div.withConfig({shouldForwardProp:e=>e!=="type"&&e!=="size"&&e!=="error"})`
  position: relative;
  width: 100%;

  ${({error:e})=>e&&a`
    ${l} {
      border-color: #f00;
    }

    ${p} {
      display: block;
    }
  `}

  ${({type:e,theme:r})=>{switch(e){case"001":return a`
          ${l},
          ${i} {
            border-radius: 0;
          }
        `;case"002":return a`
          ${l},
          ${i} {
            border-radius: ${r.size.em(4)};
          }
        `;default:return a`
          ${l},
          ${i} {
            border-radius: 0;
          }
        `}}}
`,p=s.p.withConfig({shouldForwardProp:e=>e!=="errorColor"&&e!=="errorFontSize"})`
  display: none;
  color: ${({errorColor:e})=>e??"#f00"};
  font-size: ${({theme:e,errorFontSize:r})=>e.size.em(r??16)};
  margin: ${({theme:e})=>e.size.em(5)} 0 0;
  line-height: 1;
`;try{f.displayName="StyledInputWrapper",f.__docgenInfo={description:"",displayName:"StyledInputWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledInputFieldWrapper",l.__docgenInfo={description:"",displayName:"StyledInputFieldWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledInputField",i.__docgenInfo={description:"",displayName:"StyledInputField",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="StyledInputIcon",g.__docgenInfo={description:"",displayName:"StyledInputIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledInput",y.__docgenInfo={description:"",displayName:"StyledInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledInputError",p.__docgenInfo={description:"",displayName:"StyledInputError",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=({type:e="001",size:r="small",iconPosition:t="right",icon:h,name:_="input-006",placeholder:b="入力してください",value:v,onChange:$,error:I=!1,errorText:m,style:d,inputProps:z})=>o.jsx(f,{children:o.jsxs(y,{error:I||!!m,type:e,size:r,children:[o.jsxs(l,{iconPosition:t,borderColor:d?.borderColor,backgroundColor:d?.backgroundColor,errorBorderColor:d?.errorBorderColor,children:[o.jsx(i,{name:_,type:"text",placeholder:b,value:v,onChange:$,fontSize:d?.fontSize,color:d?.color,backgroundColor:d?.backgroundColor,placeholderColor:d?.placeholderColor,...z,size:r,iconPosition:t}),o.jsx(g,{iconPosition:t,size:r,children:h})]}),m&&o.jsx(p,{errorColor:d?.errorColor??"#f00",errorFontSize:d?.errorFontSize??16,children:m})]})});try{c.displayName="Input006",c.__docgenInfo={description:"",displayName:"Input006",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'}]}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},iconPosition:{defaultValue:{value:"right"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},name:{defaultValue:{value:"input-006"},description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"入力してください"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; color?: string; borderColor?: string | undefined; backgroundColor?: string | undefined; placeholderColor?: string | undefined; errorColor?: string | undefined; errorFontSize?: number | undefined; errorBorderColor?: string | undefined; } | undefined"}}}}}catch{}const T={title:"Basic/Input/Product006",component:c,tags:["autodocs"]},C=e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(c,{...e})}),u=C.bind({});u.args={type:"001",size:"middle",placeholder:"入力してください",name:"input-006",iconPosition:"right",icon:o.jsx(w,{})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "300px"
}}>
    <Input006 {...args} />
  </div>`,...u.parameters?.docs?.source}}};const x=["Default"];export{u as Default,x as __namedExportsOrder,T as default};
