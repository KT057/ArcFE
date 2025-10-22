import{d,l as t,j as a}from"./iframe-Rw2KdrAu.js";import{b as f}from"./043-Ba2bG-lA.js";import"./preload-helper-PPVm8Dsz.js";const i=d.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,l=d.div.withConfig({shouldForwardProp:e=>e!=="size"})`
  position: relative;

  ${({size:e})=>{switch(e){case"small":return t`
          width: ${({theme:r})=>r.size.em(30)};
          height: ${({theme:r})=>r.size.em(30)};
        `;case"middle":return t`
          width: ${({theme:r})=>r.size.em(35)};
          height: ${({theme:r})=>r.size.em(35)};
        `;case"large":return t`
          width: ${({theme:r})=>r.size.em(40)};
          height: ${({theme:r})=>r.size.em(40)};
        `;default:return t`
          width: ${({theme:r})=>r.size.em(30)};
          height: ${({theme:r})=>r.size.em(30)};
        `}}}
`,s=d.div.withConfig({shouldForwardProp:e=>e!=="backgroundColor"&&e!=="borderColor"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({backgroundColor:e})=>e};
  border: 1px solid ${({borderColor:e})=>e};
  z-index: 0;

  ${({type:e})=>{switch(e){case"001":return t`
          border-radius: 50%;
        `;case"002":return t`
          border-radius: 0;
        `;case"003":return t`
          border-radius: ${({theme:r})=>r.size.em(4)};
        `;default:return t`
          border-radius: 50%;
        `}}}
`,c=d.div.withConfig({shouldForwardProp:e=>e!=="iconColor"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: ${({iconColor:e})=>e};
`,u=d.div.withConfig({shouldForwardProp:e=>e!=="size"})`
  ${({theme:e,size:r})=>e.icon.size.style(r)}
`;try{i.displayName="StyledFrameIconWrapper",i.__docgenInfo={description:"",displayName:"StyledFrameIconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledFrameIcon",l.__docgenInfo={description:"",displayName:"StyledFrameIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledFrameIconBackground",s.__docgenInfo={description:"",displayName:"StyledFrameIconBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledFrameIconInner",c.__docgenInfo={description:"",displayName:"StyledFrameIconInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledFrameIconContent",u.__docgenInfo={description:"",displayName:"StyledFrameIconContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const n=({style:e,type:r,size:m,icon:p})=>a.jsx(i,{children:a.jsxs(l,{size:m,children:[a.jsx(s,{type:r,backgroundColor:e?.backgroundColor??"#fff",borderColor:e?.borderColor??"#000"}),a.jsx(c,{iconColor:e?.iconColor??"#000",children:a.jsx(u,{size:m,children:p})})]})});try{n.displayName="FrameIcon001",n.__docgenInfo={description:"",displayName:"FrameIcon001",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'},{value:'"003"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ backgroundColor?: string; iconColor?: string; borderColor?: string | undefined; } | undefined"}}}}}catch{}const b={title:"Basic/FrameIcon/Product001",component:n,tags:["autodocs"]},y=e=>a.jsx("div",{style:{width:"300px"},children:a.jsx(n,{...e})}),o=y.bind({});o.args={icon:a.jsx(f,{}),type:"001",size:"middle",style:{backgroundColor:"#fff",borderColor:"#000",iconColor:"#000"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "300px"
}}>
    <FrameIcon001 {...args} />
  </div>`,...o.parameters?.docs?.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,b as default};
