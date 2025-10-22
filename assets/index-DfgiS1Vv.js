import{d as i,j as r}from"./iframe-H3qRDz1v.js";const n=i.span`
  ${({theme:e})=>e.font.baseSize.em()}
`,d=i.span.withConfig({shouldForwardProp:e=>e!=="fontSize"})`
  height: calc(${({theme:e,fontSize:a})=>e.size.em(a??24)} * 1.5);
  position: relative;
`,o=i.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`,l=i.span.withConfig({shouldForwardProp:e=>e!=="gap"})`
  width: 100%;
  padding-left: ${({theme:e,gap:a})=>e.size.em(a??44)};
`,s=i.span.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"})`
  display: block;
  color: ${({color:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:a})=>e.size.em(a??24)};
  overflow-wrap: break-word;
  line-height: 1.5;
`,m=i.span.withConfig({shouldForwardProp:e=>e!=="animationOpacity"&&e!=="animationDuration"&&e!=="animationEase"})`
  cursor: pointer;
  display: flex;
  justify-content: left;
  transition: opacity ${({animationDuration:e})=>e??"0.25s"} ${({animationEase:e,theme:a})=>a.animation.easing[e??"easeInOutCubic"]};

  &:hover {
    opacity: ${({animationOpacity:e})=>e??.5};
  }
`;try{n.displayName="StyledListItemWrapper",n.__docgenInfo={description:"",displayName:"StyledListItemWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="StyledListItemFrameNumberWrapper",d.__docgenInfo={description:"",displayName:"StyledListItemFrameNumberWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledListItemFrameNumber",o.__docgenInfo={description:"",displayName:"StyledListItemFrameNumber",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledListItemTextWrapper",l.__docgenInfo={description:"",displayName:"StyledListItemTextWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledListItemText",s.__docgenInfo={description:"",displayName:"StyledListItemText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledListItem",m.__docgenInfo={description:"",displayName:"StyledListItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const p=({frameNumber:e,children:a,onClick:u,style:t})=>r.jsx(n,{children:r.jsxs(m,{onClick:u,animationOpacity:t?.animationOpacity,animationDuration:t?.animationDuration,animationEase:t?.animationEase,children:[r.jsx(d,{fontSize:t?.fontSize,children:r.jsx(o,{children:e})}),r.jsx(l,{gap:t?.gap,children:r.jsx(s,{fontSize:t?.fontSize,color:t?.color,children:a})})]})});try{p.displayName="ListItem006",p.__docgenInfo={description:"",displayName:"ListItem006",props:{frameNumber:{defaultValue:null,description:"",name:"frameNumber",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:'{ fontSize?: number; color?: string; gap?: number | undefined; animationOpacity?: number | undefined; animationDuration?: string | undefined; animationEase?: "easeInSine" | ... 25 more ... | undefined; } | undefined'}}}}}catch{}export{p as L};
