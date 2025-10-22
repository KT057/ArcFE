import{d as i,j as n}from"./iframe-H3qRDz1v.js";const d=i.span`
  ${({theme:e})=>e.font.baseSize.em()}
`,l=i.span.withConfig({shouldForwardProp:e=>e!=="fontSize"})`
  height: calc(${({theme:e,fontSize:t})=>e.size.em(t??24)} * 1.5);
  position: relative;
`,o=i.span.withConfig({shouldForwardProp:e=>e!=="iconColor"&&e!=="animationIconColor"&&e!=="animationDuration"&&e!=="animationEase"})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: color ${({animationDuration:e})=>e??"0.25s"} ${({animationEase:e,theme:t})=>t.animation.easing[e??"easeInOutCubic"]};
  color: ${({iconColor:e})=>e??"#000"};
  ${({theme:e})=>e.icon.size.style("large")}
`,s=i.span.withConfig({shouldForwardProp:e=>e!=="gap"})`
  width: 100%;
  padding-left: ${({theme:e,gap:t})=>e.size.em((t??8)+24)};
`,r=i.span.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"&&e!=="animationColor"&&e!=="animationDuration"&&e!=="animationEase"})`
  display: block;
  color: ${({color:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:t})=>e.size.em(t??24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({animationDuration:e})=>e??"0.25s"} ${({animationEase:e,theme:t})=>t.animation.easing[e??"easeInOutCubic"]};
`,m=i.span.withConfig({shouldForwardProp:e=>e!=="animationColor"&&e!=="animationIconColor"})`
  cursor: pointer;
  display: flex;
  justify-content: left;

  &:hover {
    ${r} {
      color: ${({animationColor:e})=>e??"#ccc"};
    }

    ${o} {
      color: ${({animationIconColor:e})=>e??"#ccc"};
    }
  }
`;try{d.displayName="StyledListItemWrapper",d.__docgenInfo={description:"",displayName:"StyledListItemWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledListItemIconWrapper",l.__docgenInfo={description:"",displayName:"StyledListItemIconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledListItemIcon",o.__docgenInfo={description:"",displayName:"StyledListItemIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledListItemTextWrapper",s.__docgenInfo={description:"",displayName:"StyledListItemTextWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{r.displayName="StyledListItemText",r.__docgenInfo={description:"",displayName:"StyledListItemText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledListItem",m.__docgenInfo={description:"",displayName:"StyledListItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=({icon:e,children:t,onClick:u,style:a})=>n.jsx(d,{children:n.jsxs(m,{onClick:u,animationColor:a?.animationColor,animationIconColor:a?.animationIconColor,children:[n.jsx(l,{fontSize:a?.fontSize,children:n.jsx(o,{iconColor:a?.iconColor,animationIconColor:a?.animationIconColor,animationDuration:a?.animationDuration,animationEase:a?.animationEase,children:e})}),n.jsx(s,{gap:a?.gap,children:n.jsx(r,{fontSize:a?.fontSize,color:a?.color,animationColor:a?.animationColor,animationDuration:a?.animationDuration,animationEase:a?.animationEase,children:t})})]})});try{c.displayName="ListItem004",c.__docgenInfo={description:"",displayName:"ListItem004",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:'{ fontSize?: number; color?: string; gap?: number | undefined; iconColor?: string | undefined; animationColor?: string | undefined; animationDuration?: string | undefined; animationEase?: "easeInSine" | ... 25 more ... | undefined; animationIconColor?: string | undefined; } | undefined'}}}}}catch{}export{c as L};
