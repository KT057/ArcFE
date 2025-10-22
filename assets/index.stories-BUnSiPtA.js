import{d as m,l as u,j as t,a as p}from"./iframe-Rw2KdrAu.js";import"./preload-helper-PPVm8Dsz.js";const d=m.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,i=m.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  transition: opacity 0.3s ${({theme:e})=>e.animation.easing.easeInOutSine};
`,l=m.div.withConfig({shouldForwardProp:e=>!["height","imageUrl","scale","animationType","duration","easing"].includes(e)})`
  width: 100%;
  height: ${({theme:e,height:a})=>e.size.em(a||17)};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${({imageUrl:e})=>e}) no-repeat center center;
    background-size: cover;
    z-index: 0;
    transform: scale(1);
    transition: transform ${({duration:e})=>e||.3}s ${({theme:e,easing:a})=>e.animation.easing[a||"easeInOutSine"]};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: opacity ${({duration:e})=>e||.3}s ${({theme:e,easing:a})=>e.animation.easing[a||"easeInOutSine"]};
  }

  ${({animationType:e,scale:a})=>(e==="001"||e===void 0)&&u`
      &:hover {
        &::before {
          transform: scale(${a||1.1});
        }
      }
    `}

  ${({animationType:e,scale:a})=>e==="002"&&u`
      &:hover {
        &::before {
          transform: scale(${a||1.1});
        }

        &::after {
          opacity: 0;
        }

        ${i} {
          opacity: 0;
        }
      }
    `}
`;try{d.displayName="StyledBgImageContentWrapper",d.__docgenInfo={description:"",displayName:"StyledBgImageContentWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledBgImageContentInner",i.__docgenInfo={description:"",displayName:"StyledBgImageContentInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledBgImageContentContainer",l.__docgenInfo={description:"",displayName:"StyledBgImageContentContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const o=({children:e,imageUrl:a,height:g,animationType:f,style:s})=>t.jsx(d,{children:t.jsx(l,{height:g,imageUrl:a,animationType:f,scale:s?.scale,duration:s?.duration,easing:s?.easing,children:t.jsx(i,{children:e})})});try{o.displayName="BgImageContent",o.__docgenInfo={description:"",displayName:"BgImageContent",props:{imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},animationType:{defaultValue:null,description:"",name:"animationType",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:'{ scale?: number; duration?: number; easing?: "easeInSine" | "easeOutSine" | "easeInOutSine" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInCubic" | ... 19 more ... | undefined; } | undefined'}}}}}catch{}const _={title:"Advanced/common/BgImageContent",component:o,tags:["autodocs"]},c=e=>t.jsx("div",{style:{width:"100%",padding:"50px"},children:t.jsx(o,{...e})}),n=c.bind({});n.args={children:t.jsx("div",{style:{fontSize:p(20),width:"100%",height:"100%",color:"white",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:"Hello"}),imageUrl:"/images/img-01.jpg",height:400};const r=c.bind({});r.args={children:t.jsx("div",{style:{fontSize:p(20),width:"100%",height:"100%",color:"white",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:"Hello"}),imageUrl:"/images/img-01.jpg",height:400,animationType:"002"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  padding: "50px"
}}>
    <BgImageContent {...args} />
  </div>`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  padding: "50px"
}}>
    <BgImageContent {...args} />
  </div>`,...r.parameters?.docs?.source}}};const I=["Default","AnimationType002"];export{r as AnimationType002,n as Default,I as __namedExportsOrder,_ as default};
