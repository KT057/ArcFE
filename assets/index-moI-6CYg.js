import{d as n,j as i}from"./iframe-H3qRDz1v.js";const d=n.span`
  ${({theme:e})=>e.font.baseSize.em()}
`,l=n.span.withConfig({shouldForwardProp:e=>e!=="fontSize"})`
  height: calc(${({theme:e,fontSize:a})=>e.size.em(a??24)} * 1.5);
  position: relative;
`,o=n.span.withConfig({shouldForwardProp:e=>e!=="pointSize"&&e!=="pointColor"&&e!=="animationPointColor"&&e!=="animationDuration"&&e!=="animationEase"})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: ${({pointColor:e})=>e??"#000"};
  width: ${({theme:e,pointSize:a})=>e.size.em(a??8)};
  height: ${({theme:e,pointSize:a})=>e.size.em(a??8)};
  border-radius: 50%;
  transition: background-color ${({animationDuration:e})=>e??"0.25s"} ${({animationEase:e,theme:a})=>a.animation.easing[e??"easeInOutCubic"]};
`,s=n.span.withConfig({shouldForwardProp:e=>e!=="gap"})`
  width: 100%;
  padding-left: ${({theme:e,gap:a})=>e.size.em(a??24)};
`,r=n.span.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"&&e!=="animationColor"&&e!=="animationDuration"&&e!=="animationEase"})`
  display: block;
  color: ${({color:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:a})=>e.size.em(a??24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({animationDuration:e})=>e??"0.25s"} ${({animationEase:e,theme:a})=>a.animation.easing[e??"easeInOutCubic"]};
`,m=n.span.withConfig({shouldForwardProp:e=>e!=="animationColor"&&e!=="animationPointColor"})`
  cursor: pointer;
  display: flex;
  justify-content: left;

  &:hover {
    ${r} {
      color: ${({animationColor:e})=>e??"#ccc"};
    }

    ${o} {
      background-color: ${({animationPointColor:e})=>e??"#ccc"};
    }
  }
`;try{d.displayName="StyledListItemWrapper",d.__docgenInfo={description:"",displayName:"StyledListItemWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledListItemPointWrapper",l.__docgenInfo={description:"",displayName:"StyledListItemPointWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledListItemPoint",o.__docgenInfo={description:"",displayName:"StyledListItemPoint",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledListItemTextWrapper",s.__docgenInfo={description:"",displayName:"StyledListItemTextWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{r.displayName="StyledListItemText",r.__docgenInfo={description:"",displayName:"StyledListItemText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledListItem",m.__docgenInfo={description:"",displayName:"StyledListItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const p=({children:e,onClick:a,style:t})=>i.jsx(d,{children:i.jsxs(m,{onClick:a,animationColor:t?.animationColor,animationPointColor:t?.animationPointColor,children:[i.jsx(l,{fontSize:t?.fontSize,children:i.jsx(o,{pointSize:t?.pointSize,pointColor:t?.pointColor,animationPointColor:t?.animationPointColor,animationDuration:t?.animationDuration,animationEase:t?.animationEase})}),i.jsx(s,{gap:t?.gap,children:i.jsx(r,{fontSize:t?.fontSize,color:t?.color,animationColor:t?.animationColor,animationDuration:t?.animationDuration,animationEase:t?.animationEase,children:e})})]})});try{p.displayName="ListItem002",p.__docgenInfo={description:"",displayName:"ListItem002",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:'{ fontSize?: number; color?: string; gap?: number | undefined; pointSize?: number | undefined; pointColor?: string | undefined; animationColor?: string | undefined; animationDuration?: string | undefined; animationEase?: "easeInSine" | ... 25 more ... | undefined; animationPointColor?: string...'}}}}}catch{}export{p as L};
