import{d as m,j as a}from"./iframe-Rw2KdrAu.js";import"./preload-helper-PPVm8Dsz.js";const p={large:48,middle:42,small:36},l=m.span`
  display: inline-block;
  line-height: 0;
  ${({theme:e})=>e.font.baseSize.em()}
`,c=m.svg.withConfig({shouldForwardProp:e=>e!=="size"&&e!=="indicatorColor"&&e!=="backgroundColor"})`
  width: ${({theme:e,size:r})=>e.size.em(p[r])};
  height: ${({theme:e,size:r})=>e.size.em(p[r])};
  
  .indicator {
    fill: ${({indicatorColor:e})=>e??"#fff"};
  }
  
  .background {
    fill: ${({backgroundColor:e})=>e??"#000"};
  }
`;try{l.displayName="StyledLoadingWrapper",l.__docgenInfo={description:"",displayName:"StyledLoadingWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledLoading",c.__docgenInfo={description:"",displayName:"StyledLoading",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const i=({size:e="large",style:r})=>a.jsx(l,{children:a.jsxs(c,{size:e,indicatorColor:r?.indicatorColor,backgroundColor:r?.backgroundColor,viewBox:"0 0 24 24",children:[a.jsx("path",{className:"background",d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0m0 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9"}),a.jsx("path",{className:"indicator",d:"M12 0c6.6 0 12 5.4 12 12h-3c0-5-4-9-9-9V0Z",children:a.jsx("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",to:"360 12 12",type:"rotate",repeatCount:"indefinite"})})]})});try{i.displayName="Loading002",i.__docgenInfo={description:"",displayName:"Loading002",props:{size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ indicatorColor?: string; backgroundColor?: string; } | undefined"}}}}}catch{}const f={title:"Basic/Loading/Product002",component:i,tags:["autodocs"],parameters:{screenshot:{skip:!0}}},n=e=>a.jsx("div",{style:{padding:"20px"},children:a.jsx(i,{...e})}),s=n.bind({});s.args={size:"large"};const d=n.bind({});d.args={size:"small"};const o=n.bind({});o.args={size:"middle"};const t=n.bind({});t.args={size:"large",style:{indicatorColor:"#ff6b6b",backgroundColor:"#e0e0e0"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px"
}}>
    <Loading002 {...args} />
  </div>`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px"
}}>
    <Loading002 {...args} />
  </div>`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px"
}}>
    <Loading002 {...args} />
  </div>`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px"
}}>
    <Loading002 {...args} />
  </div>`,...t.parameters?.docs?.source}}};const y=["Default","Small","Middle","CustomColors"];export{t as CustomColors,s as Default,o as Middle,d as Small,y as __namedExportsOrder,f as default};
