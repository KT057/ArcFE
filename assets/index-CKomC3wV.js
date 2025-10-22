import{d as l,h as d,r as T,j as r}from"./iframe-Rw2KdrAu.js";const i=l.span`
  ${({theme:e})=>e.font.baseSize.em()}
`,n=l.span.withConfig({shouldForwardProp:e=>e!=="color"&&e!=="isHovered"})`
  width: ${({theme:e})=>e.size.em(40)};
  height: ${({theme:e})=>e.size.em(40)};
  position: relative;
  border-radius: 50%;
  display: block;
  cursor: pointer;
  border: 1px solid ${({color:e,isHovered:a})=>a?`rgba(${d(e??"#fff")}, 0)`:`rgba(${d(e??"#fff")}, 1)`};
  background-color: ${({color:e,isHovered:a})=>a?`rgba(${d(e??"#fff")}, 0.3)`:`rgba(${d(e??"#fff")}, 0)`};
  transition:
    border-color 0.3s ${({theme:e})=>e.animation.easing.easeOutCubic},
    background-color 0.3s ${({theme:e})=>e.animation.easing.easeOutCubic};
`,s=l.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,c=l.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.size.em(4)};
`,o=l.span.withConfig({shouldForwardProp:e=>e!=="dotColor"})`
  width: ${({theme:e})=>e.size.em(4)};
  height: ${({theme:e})=>e.size.em(4)};
  background-color: ${({dotColor:e})=>e??"#fff"};
  border-radius: 50%;
`;try{i.displayName="StyledJmcCircleToggleWrapper",i.__docgenInfo={description:"",displayName:"StyledJmcCircleToggleWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="StyledJmcCircleToggle",n.__docgenInfo={description:"",displayName:"StyledJmcCircleToggle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledJmcCircleToggleInner",s.__docgenInfo={description:"",displayName:"StyledJmcCircleToggleInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledJmcCircleToggleDotWrapper",c.__docgenInfo={description:"",displayName:"StyledJmcCircleToggleDotWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledJmcCircleToggleDot",o.__docgenInfo={description:"",displayName:"StyledJmcCircleToggleDot",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const p=({isHovered:e,onMouseEnter:a,onMouseLeave:m,onClick:f,style:t})=>{const[g,u]=T.useState(!1),y=e!==void 0?e:g,_=()=>{e===void 0&&u(!0),a?.()},h=()=>{e===void 0&&u(!1),m?.()};return r.jsx(i,{children:r.jsx(n,{color:t?.color,isHovered:y,onMouseEnter:_,onMouseLeave:h,onClick:f,children:r.jsx(s,{children:r.jsxs(c,{children:[r.jsx(o,{dotColor:t?.dotColor}),r.jsx(o,{dotColor:t?.dotColor}),r.jsx(o,{dotColor:t?.dotColor})]})})})})};try{p.displayName="JmcCircleToggle",p.__docgenInfo={description:"",displayName:"JmcCircleToggle",props:{isHovered:{defaultValue:null,description:"",name:"isHovered",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"(() => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"(() => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ color?: string; dotColor?: string; } | undefined"}}}}}catch{}export{p as J};
