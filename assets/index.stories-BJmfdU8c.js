import{d as a,j as r}from"./iframe-H3qRDz1v.js";import{B as f}from"./index-DA81NH4m.js";import"./index-D8aB5GFW.js";import{L as y}from"./index-bA9UwAV8.js";import"./index-Bdlze0f1.js";import{L as n}from"./index-moI-6CYg.js";import"./index-DQrH44nH.js";import"./index-NlqW_OaO.js";import"./index-CqKEssZz.js";import"./index-DfgiS1Vv.js";import"./preload-helper-PPVm8Dsz.js";const s=a.div`
  ${({theme:e})=>e.font.baseSize.em()};

  display: block;
`,o=a.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  padding-top: ${({theme:e})=>e.size.em(8)};
  opacity: 0;
  transform: translate(-50%, 100%);
  pointer-events: none;
  transition: opacity 0.3s ${({theme:e})=>e.animation.easing.easeInCubic};
`,d=a.div.withConfig({shouldForwardProp:e=>e!=="borderColor"&&e!=="backgroundColor"})`
  background-color: ${({backgroundColor:e})=>e??"#fff"};
  border: 1px solid ${({borderColor:e})=>e??"#000"};
  border-radius: ${({borderRadius:e,theme:l})=>l.size.em(e??8)};
  z-index: 1;
  transform: translateY(${({theme:e})=>e.size.em(5)});
  transition: transform 0.3s ${({theme:e})=>e.animation.easing.easeInCubic};
  padding: ${({theme:e})=>e.size.em(16)};
  box-sizing: border-box;
  white-space: ${({nowrap:e})=>e===!0||e===void 0?"nowrap":"normal"};
`,p=a.div`
  position: relative;

  &:hover {
    ${o} {
      opacity: 1;
      pointer-events: auto;
    }

    ${d} {
      transform: translateY(${({theme:e})=>e.size.em(10)});
    }

  }
`,c=a.div`
  position: relative;
`;try{s.displayName="StyledWrapper",s.__docgenInfo={description:"",displayName:"StyledWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledDetailWrapper",o.__docgenInfo={description:"",displayName:"StyledDetailWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="StyledDetail",d.__docgenInfo={description:"",displayName:"StyledDetail",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledContentsWrapper",p.__docgenInfo={description:"",displayName:"StyledContentsWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledContents",c.__docgenInfo={description:"",displayName:"StyledContents",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const i=({style:e,detail:l,contents:u,nowrap:m})=>r.jsx(s,{children:r.jsxs(p,{children:[r.jsx(c,{children:u}),r.jsx(o,{children:r.jsx(d,{nowrap:m,borderColor:e?.borderColor,backgroundColor:e?.backgroundColor,borderRadius:e?.borderRadius,children:l})})]})});try{i.displayName="Dropdown001",i.__docgenInfo={description:"",displayName:"Dropdown001",props:{detail:{defaultValue:null,description:"",name:"detail",required:!0,type:{name:"ReactNode"}},contents:{defaultValue:null,description:"",name:"contents",required:!0,type:{name:"ReactNode"}},nowrap:{defaultValue:null,description:"",name:"nowrap",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ backgroundColor?: string; borderColor?: string; borderRadius?: number | undefined; } | undefined"}}}}}catch{}const j={title:"Basic/Dropdown/Product001",component:i,tags:["autodocs"]},_=e=>r.jsx("div",{style:{width:"300px",display:"flex",justifyContent:"center"},children:r.jsx(i,{...e})}),t=_.bind({});t.args={contents:r.jsx(f,{children:"ボタン"}),detail:r.jsx(y,{items:[{content:r.jsx(n,{onClick:()=>null,children:"リストアイテム1"}),id:"1"},{content:r.jsx(n,{onClick:()=>null,children:"リストアイテム2"}),id:"2"},{content:r.jsx(n,{onClick:()=>null,children:"リストアイテム3"}),id:"3"},{content:r.jsx(n,{onClick:()=>null,children:"リストアイテム4"}),id:"4"}],type:"001"})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "300px",
  display: "flex",
  justifyContent: "center"
}}>
    <Dropdown001 {...args} />
  </div>`,...t.parameters?.docs?.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,j as default};
