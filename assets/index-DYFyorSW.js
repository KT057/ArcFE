import{d as i,j as r}from"./iframe-Rw2KdrAu.js";const d=i.span`
  ${({theme:e})=>e.font.baseSize.em()}
`,l=i.span.withConfig({shouldForwardProp:e=>e!=="fontSize"})`
  height: calc(${({theme:e,fontSize:a})=>e.size.em(a??24)} * 1.5);
  position: relative;
`,n=i.span.withConfig({shouldForwardProp:e=>e!=="numberFontSize"&&e!=="numberColor"&&e!=="animationDuration"&&e!=="animationEase"})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: ${({numberColor:e})=>e??"#000"};
  font-size: ${({theme:e,numberFontSize:a})=>e.size.em(a??24)};
  transition: color ${({animationDuration:e})=>e??"0.25s"} ${({animationEase:e,theme:a})=>a.animation.easing[e??"easeInOutCubic"]};
`,s=i.span.withConfig({shouldForwardProp:e=>e!=="gap"})`
  width: 100%;
  padding-left: ${({theme:e,gap:a})=>e.size.em(30+(a??10))};
`,o=i.span.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"&&e!=="animationColor"&&e!=="animationDuration"&&e!=="animationEase"})`
  display: block;
  color: ${({color:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:a})=>e.size.em(a??24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({animationDuration:e})=>e??"0.25s"} ${({animationEase:e,theme:a})=>a.animation.easing[e??"easeInOutCubic"]};
`,m=i.span.withConfig({shouldForwardProp:e=>e!=="animationColor"})`
  cursor: pointer;
  display: flex;
  justify-content: left;

  &:hover {
    ${o} {
      color: ${({animationColor:e})=>e??"#ccc"};
    }

    ${n} {
      color: ${({animationColor:e})=>e??"#ccc"};
    }
  }
`;try{d.displayName="StyledListItemWrapper",d.__docgenInfo={description:"",displayName:"StyledListItemWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledListItemNumber",l.__docgenInfo={description:"",displayName:"StyledListItemNumber",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="StyledListItemNumberText",n.__docgenInfo={description:"",displayName:"StyledListItemNumberText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledListItemTextWrapper",s.__docgenInfo={description:"",displayName:"StyledListItemTextWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledListItemText",o.__docgenInfo={description:"",displayName:"StyledListItemText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledListItem",m.__docgenInfo={description:"",displayName:"StyledListItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const u=({number:e,children:a,onClick:p,style:t})=>r.jsx(d,{children:r.jsxs(m,{onClick:p,animationColor:t?.animationColor,children:[r.jsx(l,{fontSize:t?.fontSize,children:r.jsx(n,{numberFontSize:t?.numberFontSize,numberColor:t?.numberColor,animationColor:t?.animationColor,animationDuration:t?.animationDuration,animationEase:t?.animationEase,children:e})}),r.jsx(s,{gap:t?.gap,children:r.jsx(o,{fontSize:t?.fontSize,color:t?.color,animationColor:t?.animationColor,animationDuration:t?.animationDuration,animationEase:t?.animationEase,children:a})})]})});try{u.displayName="ListItem001",u.__docgenInfo={description:"",displayName:"ListItem001",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:'{ fontSize?: number; color?: string; gap?: number | undefined; numberFontSize?: number | undefined; numberColor?: string | undefined; animationColor?: string | undefined; animationDuration?: string | undefined; animationEase?: "easeInSine" | ... 25 more ... | undefined; } | undefined'}}}}}catch{}export{u as L};
