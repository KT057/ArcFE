import{d as a,j as t}from"./iframe-H3qRDz1v.js";import{B as _}from"./index-DA81NH4m.js";import"./index-D8aB5GFW.js";import{L as h}from"./index-bA9UwAV8.js";import"./index-Bdlze0f1.js";import{L as n}from"./index-moI-6CYg.js";import"./index-DQrH44nH.js";import"./index-NlqW_OaO.js";import"./index-CqKEssZz.js";import"./index-DfgiS1Vv.js";import{B as g}from"./index-BmyH5xC-.js";import"./index-DqNPDtPi.js";import"./preload-helper-PPVm8Dsz.js";const i=a.div`
  ${({theme:e})=>e.font.baseSize.em()};

  display: block;
`,o=a.div`
  padding-top: ${({theme:e})=>e.size.em(4)};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ${({theme:e})=>e.animation.easing.easeInCubic};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
`,d=a.div.withConfig({shouldForwardProp:e=>e!=="nowrap"})`
  transition: transform 0.3s ${({theme:e})=>e.animation.easing.easeInCubic};
  transform: translateY(${({theme:e})=>e.size.em(5)});
  white-space: ${({nowrap:e})=>e===!0||e===void 0?"nowrap":"normal"};
`,s=a.div`
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
`,p=a.div`
  padding: ${({theme:e})=>e.size.em(10)};
`,c=a.div`
  position: relative;
`;try{i.displayName="StyledWrapper",i.__docgenInfo={description:"",displayName:"StyledWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledDetailWrapper",o.__docgenInfo={description:"",displayName:"StyledDetailWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="StyledDetail",d.__docgenInfo={description:"",displayName:"StyledDetail",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledContentsWrapper",s.__docgenInfo={description:"",displayName:"StyledContentsWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledDetailInner",p.__docgenInfo={description:"",displayName:"StyledDetailInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledContents",c.__docgenInfo={description:"",displayName:"StyledContents",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const l=({style:e,detail:m,contents:f,nowrap:y,balloonProps:u})=>t.jsx(i,{children:t.jsxs(s,{children:[t.jsx(c,{children:f}),t.jsx(o,{children:t.jsx(d,{nowrap:y,children:t.jsx(g,{...u,style:{...u?.style,backgroundColor:e?.backgroundColor},type:"001",arrowPosition:"top",children:t.jsx(p,{children:m})})})})]})});try{l.displayName="Dropdown002",l.__docgenInfo={description:"",displayName:"Dropdown002",props:{detail:{defaultValue:null,description:"",name:"detail",required:!0,type:{name:"ReactNode"}},contents:{defaultValue:null,description:"",name:"contents",required:!0,type:{name:"ReactNode"}},nowrap:{defaultValue:null,description:"",name:"nowrap",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ backgroundColor?: string; borderColor?: string; borderRadius?: number | undefined; } | undefined"}},balloonProps:{defaultValue:null,description:"",name:"balloonProps",required:!1,type:{name:"BalloonProps"}}}}}catch{}const A={title:"Basic/Dropdown/Product002",component:l,tags:["autodocs"]},b=e=>t.jsx("div",{style:{width:"300px",display:"flex",justifyContent:"center"},children:t.jsx(l,{...e})}),r=b.bind({});r.args={contents:t.jsx(_,{children:"ボタン"}),detail:t.jsx(h,{items:[{content:t.jsx(n,{onClick:()=>null,children:"リストアイテム1"}),id:"1"},{content:t.jsx(n,{onClick:()=>null,children:"リストアイテム2"}),id:"2"},{content:t.jsx(n,{onClick:()=>null,children:"リストアイテム3"}),id:"3"},{content:t.jsx(n,{onClick:()=>null,children:"リストアイテム4"}),id:"4"}],type:"001"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "300px",
  display: "flex",
  justifyContent: "center"
}}>
    <Dropdown002 {...args} />
  </div>`,...r.parameters?.docs?.source}}};const $=["Default"];export{r as Default,$ as __namedExportsOrder,A as default};
