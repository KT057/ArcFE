import{d as n,l as x,j as a,r as S}from"./iframe-H3qRDz1v.js";import{B as h}from"./index-DA81NH4m.js";import"./index-D8aB5GFW.js";import{L as g}from"./index-bA9UwAV8.js";import"./index-C0VadWp7.js";import{T as v}from"./index-B2q_sRsy.js";import{T as y}from"./index-DqsGku3c.js";import"./preload-helper-PPVm8Dsz.js";const l=n.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,s=n.header.withConfig({shouldForwardProp:e=>e!=="height"&&e!=="backgroundColor"&&e!=="animationBackgroundColor"&&e!=="showModal"&&e!=="easing"&&e!=="duration"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({height:e,theme:t})=>t.size.em(e)};
  background-color: ${({backgroundColor:e})=>e??"transparent"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({theme:e})=>e.size.em(20)};
  z-index: 100;
  transition: background-color ${({duration:e})=>e??"0.3s"} ${({theme:e,easing:t})=>e.animation.easing[t??"easeInCubic"]};

  ${({showModal:e,animationBackgroundColor:t})=>e&&x`
      background-color: ${t??"transparent"};
    `}
`,p=n.div`
  width: 100%;
  height: 100%;
  position: relative;
`,c=n.div.withConfig({shouldForwardProp:e=>e!=="gap"})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: ${({gap:e,theme:t})=>t.size.em(e??10)};
`,u=n.div.withConfig({shouldForwardProp:e=>e!=="gap"})`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: ${({gap:e,theme:t})=>t.size.em(e??10)};
`,f=n.div.withConfig({shouldForwardProp:e=>e!=="height"&&e!=="showModal"})`
  position: fixed;
  top: ${({height:e,theme:t})=>t.size.em(e)};
  left: 0;
  width: 100%;
  height: calc(100% - ${({height:e,theme:t})=>t.size.em(e)});
  z-index: 99;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${({showModal:e})=>e&&x`
      opacity: 1;
      pointer-events: auto;
    `}
`;try{l.displayName="StyledWrapper",l.__docgenInfo={description:"",displayName:"StyledWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledHeader",s.__docgenInfo={description:"",displayName:"StyledHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledHeaderInner",p.__docgenInfo={description:"",displayName:"StyledHeaderInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledLeftWrapper",c.__docgenInfo={description:"",displayName:"StyledLeftWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledRightWrapper",u.__docgenInfo={description:"",displayName:"StyledRightWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledModalWrapper",f.__docgenInfo={description:"",displayName:"StyledModalWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const _=80,d=({left:e,right:t,leftInner:b,rightInner:w,modalContent:C,style:r,showModal:m})=>a.jsxs(l,{children:[a.jsx(s,{height:r?.header?.height??_,backgroundColor:r?.header?.backgroundColor,animationBackgroundColor:r?.header?.animation?.backgroundColor,easing:r?.header?.animation?.easing,duration:r?.header?.animation?.duration,showModal:m,children:a.jsxs(p,{children:[a.jsxs(c,{gap:r?.leftGap,children:[e,b]}),a.jsxs(u,{gap:r?.rightGap,children:[w,t]})]})}),a.jsx(f,{height:r?.header?.height??_,showModal:m,children:C})]});try{d.displayName="Header001",d.__docgenInfo={description:"",displayName:"Header001",props:{left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactNode"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactNode"}},leftInner:{defaultValue:null,description:"",name:"leftInner",required:!1,type:{name:"ReactNode"}},rightInner:{defaultValue:null,description:"",name:"rightInner",required:!1,type:{name:"ReactNode"}},modalContent:{defaultValue:null,description:"",name:"modalContent",required:!1,type:{name:"ReactNode"}},showModal:{defaultValue:null,description:"",name:"showModal",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:'{ leftGap?: number; rightGap?: number; header?: { height?: number | undefined; backgroundColor?: string | undefined; animation?: { backgroundColor?: string | undefined; duration?: string | undefined; easing?: "easeInSine" | ... 25 more ... | undefined; } | undefined; } | undefined; } | undefi...'}}}}}catch{}const z={title:"Basic/Header/Product001",component:d,tags:["autodocs"]},T=e=>a.jsx("div",{style:{width:"300px"},children:a.jsx(d,{...e})}),o=T.bind({});o.args={left:a.jsx("div",{style:{color:"#fff",fontSize:"16px"},children:"LOGO"}),right:a.jsx(g,{style:{rowGap:10},items:[{content:a.jsx("div",{style:{width:"200px"},children:a.jsx(h,{animation:{backgroundColor:"#000",duration:.25,easing:"easeInOutCubic",textColor:"#fff",type:"001"},onClick:()=>{},size:"small",style:{backgroundColor:"#fff",borderColor:"#000",color:"#000",fontWeight:700},type:"003",children:"ログイン"})}),id:"1"},{content:a.jsx("div",{style:{width:"200px"},children:a.jsx(h,{animation:{backgroundColor:"#000",duration:.25,easing:"easeInOutCubic",textColor:"#fff",type:"001"},onClick:()=>{},size:"small",style:{backgroundColor:"#fff",borderColor:"#000",color:"#000",fontWeight:700},type:"003",children:"資料請求"})}),id:"2"}],type:"003"}),rightInner:a.jsx(g,{items:[{content:a.jsx("div",{style:{color:"#fff",fontSize:"12px"},children:"リストアイテム1"}),id:"1"},{content:a.jsx("div",{style:{color:"#fff",fontSize:"12px"},children:"リストアイテム2"}),id:"2"},{content:a.jsx("div",{style:{color:"#fff",fontSize:"12px"},children:"リストアイテム3"}),id:"3"},{content:a.jsx("div",{style:{color:"#fff",fontSize:"12px"},children:"リストアイテム4"}),id:"4"}],type:"003"}),style:{rightGap:40,header:{backgroundColor:"#000"}}};const i=()=>{const[e,t]=S.useState(!1);return a.jsx(d,{showModal:e,left:a.jsx(y,{isOpen:!e,children:a.jsx("div",{style:{color:"#fff",fontSize:"16px"},children:"LOGO"})}),right:a.jsx(v,{isOpen:e,onClick:()=>{t(!e)},style:{lineColor:"#fff"}}),modalContent:a.jsx(y,{isOpen:e,style:{width:"100%",height:"100%"},children:a.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#000",color:"#fff"},children:"Modal"})}),style:{header:{backgroundColor:"#000",animation:{backgroundColor:"#000"}}}})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "300px"
}}>
    <Header001 {...args} />
  </div>`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [showModal, setShowModal] = useState(false);
  return <Header001 showModal={showModal} left={<ToggleSomething001 isOpen={!showModal}>
          <div style={{
      color: "#fff",
      fontSize: "16px"
    }}>LOGO</div>
        </ToggleSomething001>} right={<Toggle002 isOpen={showModal} onClick={() => {
    setShowModal(!showModal);
  }} style={{
    lineColor: "#fff"
  }} />} modalContent={<ToggleSomething001 isOpen={showModal} style={{
    width: "100%",
    height: "100%"
  }}>
          <div style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#000",
      color: "#fff"
    }}>
            Modal
          </div>
        </ToggleSomething001>} style={{
    header: {
      backgroundColor: "#000",
      animation: {
        backgroundColor: "#000"
      }
    }
  }} />;
}`,...i.parameters?.docs?.source}}};const O=["Default","Modal"];export{o as Default,i as Modal,O as __namedExportsOrder,z as default};
