import{d,l as t,r as f,j as a}from"./iframe-H3qRDz1v.js";import"./preload-helper-PPVm8Dsz.js";const n=d.div`
  ${({theme:e})=>e.font.baseSize.em()};

  display: block;
`,c=d.div.withConfig({shouldForwardProp:e=>e!=="size"})`
  position: relative;
  
  ${({size:e})=>{switch(e){case"small":return t`
          width: ${({theme:r})=>r.size.em(18)};
          height: ${({theme:r})=>r.size.em(18)};
        `;case"middle":return t`
          width: ${({theme:r})=>r.size.em(30)};
          height: ${({theme:r})=>r.size.em(30)};
        `;default:return t`
          width: ${({theme:r})=>r.size.em(18)};
          height: ${({theme:r})=>r.size.em(18)};
        `}}}
`,i=d.div.withConfig({shouldForwardProp:e=>e!=="backgroundColor"})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({backgroundColor:e})=>e};
  z-index: 0;
  box-sizing: border-box;
  border-radius: 50%;
`,l=d.div.withConfig({shouldForwardProp:e=>e!=="markColor"})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: none;
  border-radius: 50%;
  background-color: ${({markColor:e})=>e};

  ${({size:e})=>{switch(e){case"small":return t`
          width: ${({theme:r})=>r.size.em(10)};
          height: ${({theme:r})=>r.size.em(10)};
        `;case"middle":return t`
          width: ${({theme:r})=>r.size.em(22)};
          height: ${({theme:r})=>r.size.em(22)};
        `;default:return t`
          width: ${({theme:r})=>r.size.em(22)};
          height: ${({theme:r})=>r.size.em(22)};
        `}}}
`,u=d.input.withConfig({shouldForwardProp:e=>e!=="checked"&&e!=="checkedBackgroundColor"})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
  margin: 0;
  

  &[type="checkbox"]:checked ~ ${i} {
    background-color: ${({checkedBackgroundColor:e})=>e};
  }

  &[type="checkbox"]:checked ~ ${l} {
    display: block;
  }
`;try{n.displayName="StyledCheckBoxWrapper",n.__docgenInfo={description:"",displayName:"StyledCheckBoxWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledCheckBox",c.__docgenInfo={description:"",displayName:"StyledCheckBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledCheckBoxBackground",i.__docgenInfo={description:"",displayName:"StyledCheckBoxBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledCheckBoxCheckmark",l.__docgenInfo={description:"",displayName:"StyledCheckBoxCheckmark",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledCheckBoxInput",u.__docgenInfo={description:"",displayName:"StyledCheckBoxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const s=({style:e,id:r,size:p})=>{const[m,h]=f.useState(!1);return a.jsx(n,{children:a.jsxs(c,{size:p,children:[a.jsx(u,{id:r,name:r,type:"checkbox",checked:m,checkedBackgroundColor:e?.checkedBackgroundColor??"#000",onClick:()=>h(!m)}),a.jsx(i,{backgroundColor:e?.backgroundColor??"#fff"}),a.jsx(l,{markColor:e?.markColor??"#000",size:p})]})})};try{s.displayName="CheckBox002",s.__docgenInfo={description:"",displayName:"CheckBox002",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ backgroundColor?: string; borderColor?: string; checkedBackgroundColor?: string | undefined; markColor?: string | undefined; } | undefined"}}}}}catch{}const _={title:"Basic/CheckBox/Product002",component:s,tags:["autodocs"]},y=e=>a.jsx("div",{style:{width:"300px"},children:a.jsx(s,{...e})}),o=y.bind({});o.args={id:"checkbox-001",size:"middle",style:{backgroundColor:"#ccc",borderColor:"#000",checkedBackgroundColor:"#411fe6",markColor:"#fff"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "300px"
}}>
    <CheckBox002 {...args} />
  </div>`,...o.parameters?.docs?.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,_ as default};
