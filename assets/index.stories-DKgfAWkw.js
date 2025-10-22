import{d as a,l as B,j as r}from"./iframe-H3qRDz1v.js";import{S as p}from"./043-Dx6gVrpV.js";import"./preload-helper-PPVm8Dsz.js";const b={large:{width:160,height:90},middle:{width:100,height:55},small:{width:66,height:38}},A={large:43,middle:30,small:20},g=a.span`
  ${({theme:e})=>e.font.baseSize.em()}
`,n=a.span.withConfig({shouldForwardProp:e=>e!=="iconColor"})`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0);
  transition: transform 0.3s ${({theme:e})=>e.animation.easing.easeInOutCubic};
  color: ${({iconColor:e})=>e??"#000"};
  width: 100%;
  height: 100%;

  &:nth-child(2) {
    transform: translateX(-100%);
  }

  &:nth-child(3) {
    transform: translateX(-200%);
  }

  &:nth-child(4) {
    transform: translateX(-300%);
  }
`,h=a.span.withConfig({shouldForwardProp:e=>e!=="size"&&e!=="iconColor"&&e!=="borderColor"&&e!=="backgroundColor"&&e!=="hoverIconColor"&&e!=="hoverBorderColor"&&e!=="hoverBackgroundColor"})`
  position: relative;
  border-radius: 50%;
  background-color: ${({backgroundColor:e})=>e??"#fff"};
  border: 1px solid ${({borderColor:e})=>e??"#000"};
  overflow: hidden;
  display: block;
  cursor: pointer;
  transition: border-color 0.3s ${({theme:e})=>e.animation.easing.easeInOutCubic};

  ${({size:e})=>B`
    width: ${({theme:o})=>o.size.em(b[e].width)};
    height: ${({theme:o})=>o.size.em(b[e].height)};
  `}

  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    width: 105%;
    height: 105%;
    background-color: ${({hoverBackgroundColor:e})=>e??"#909090"};
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ${({theme:e})=>e.animation.easing.easeInOutCubic};
    z-index: 0;
  }

  &:hover {
    border-color: ${({hoverBorderColor:e})=>e??"#909090"};

    &::before {
      transform: translate(-50%, -50%) scale(1);
    }

    ${n} {
      transition: transform 0.6s ${({theme:e})=>e.animation.easing.easeInOutCubic};
      color: ${({hoverIconColor:e})=>e??"#fff"};

      svg {
        stroke: ${({hoverIconColor:e})=>e??"#fff"};
        fill: ${({hoverIconColor:e})=>e??"#fff"};
      }

      &:nth-child(1) {
        transform: translateX(300%);
      }

      &:nth-child(2) {
        transform: translateX(200%);
      }

      &:nth-child(3) {
        transform: translateX(100%);
      }

      &:nth-child(4) {
        transform: translateX(0);
      }
    }
  }
`,y=a.span`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
`,C=a.span.withConfig({shouldForwardProp:e=>e!=="size"})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({size:e})=>B`
    width: ${({theme:o})=>o.size.em(A[e])};
    height: ${({theme:o})=>o.size.em(A[e])};
  `}
`,v=a.span`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: block;
`;try{g.displayName="StyledJmcArrowButtonWrapper",g.__docgenInfo={description:"",displayName:"StyledJmcArrowButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="StyledJmcArrowButtonIcon",n.__docgenInfo={description:"",displayName:"StyledJmcArrowButtonIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="StyledJmcArrowButton",h.__docgenInfo={description:"",displayName:"StyledJmcArrowButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledJmcArrowButtonIconContainer",y.__docgenInfo={description:"",displayName:"StyledJmcArrowButtonIconContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="StyledJmcArrowButtonIconWrapper",C.__docgenInfo={description:"",displayName:"StyledJmcArrowButtonIconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="StyledJmcArrowButtonIconInner",v.__docgenInfo={description:"",displayName:"StyledJmcArrowButtonIconInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const f=({size:e="middle",onClick:o,as:_="span",href:w,style:t})=>{const I={..._==="a"&&w?{href:w}:{},...o?{onClick:o}:{}};return r.jsx(g,{children:r.jsx(h,{as:_,size:e,iconColor:t?.iconColor,borderColor:t?.borderColor,backgroundColor:t?.backgroundColor,hoverIconColor:t?.hoverIconColor,hoverBorderColor:t?.hoverBorderColor,hoverBackgroundColor:t?.hoverBackgroundColor,...I,children:r.jsx(y,{children:r.jsx(C,{size:e,children:r.jsxs(v,{children:[r.jsx(n,{iconColor:t?.iconColor,children:r.jsx(p,{})}),r.jsx(n,{iconColor:t?.iconColor,children:r.jsx(p,{})}),r.jsx(n,{iconColor:t?.iconColor,children:r.jsx(p,{})}),r.jsx(n,{iconColor:t?.iconColor,children:r.jsx(p,{})})]})})})})})};try{f.displayName="JmcArrowButton",f.__docgenInfo={description:"",displayName:"JmcArrowButton",props:{size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"span"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"a"'},{value:'"span"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ iconColor?: string; borderColor?: string; backgroundColor?: string | undefined; hoverIconColor?: string | undefined; hoverBorderColor?: string | undefined; hoverBackgroundColor?: string | undefined; } | undefined"}}}}}catch{}const j={title:"Advanced/Jmc/ArrowButton",component:f,tags:["autodocs"]},s=e=>r.jsx("div",{style:{padding:"50px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(f,{...e})}),d=s.bind({});d.args={size:"large"};const l=s.bind({});l.args={size:"middle"};const i=s.bind({});i.args={size:"small"};const c=s.bind({});c.args={size:"middle",as:"button",onClick:()=>alert("Arrow button clicked!")};const u=s.bind({});u.args={size:"middle",as:"a",href:"#"};const m=s.bind({});m.args={size:"middle",style:{iconColor:"#2196f3",borderColor:"#2196f3",backgroundColor:"#f5f5f5",hoverIconColor:"#ffffff",hoverBorderColor:"#1976d2",hoverBackgroundColor:"#1976d2"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcArrowButton {...args} />
  </div>`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcArrowButton {...args} />
  </div>`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcArrowButton {...args} />
  </div>`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcArrowButton {...args} />
  </div>`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcArrowButton {...args} />
  </div>`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <JmcArrowButton {...args} />
  </div>`,...m.parameters?.docs?.source}}};const q=["Large","Middle","Small","ButtonElement","LinkElement","CustomColors"];export{c as ButtonElement,m as CustomColors,d as Large,u as LinkElement,l as Middle,i as Small,q as __namedExportsOrder,j as default};
