import{d as n,j as i}from"./iframe-H3qRDz1v.js";const d=n.span`
  ${({theme:e})=>e.font.baseSize.em()}
`,l=n.span.withConfig({shouldForwardProp:e=>e!=="fontSize"})`
  height: calc(${({theme:e,fontSize:t})=>e.size.em(t??24)} * 1.5);
  position: relative;
`,o=n.span.withConfig({shouldForwardProp:e=>e!=="pointSize"&&e!=="pointColor"&&e!=="animationPointColor"&&e!=="animationDuration"&&e!=="animationEase"})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: ${({pointColor:e})=>e??"#000"};
  width: ${({theme:e,pointSize:t})=>e.size.em(t??8)};
  height: 1px;
  transition: background-color ${({animationDuration:e})=>e??"0.25s"} ${({animationEase:e,theme:t})=>t.animation.easing[e??"easeInOutCubic"]};
`,s=n.span.withConfig({shouldForwardProp:e=>e!=="gap"})`
  width: 100%;
  padding-left: ${({theme:e,gap:t})=>e.size.em(t??24)};
`,r=n.span.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"&&e!=="animationColor"&&e!=="animationDuration"&&e!=="animationEase"})`
  display: block;
  color: ${({color:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:t})=>e.size.em(t??24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({animationDuration:e})=>e??"0.25s"} ${({animationEase:e,theme:t})=>t.animation.easing[e??"easeInOutCubic"]};
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
`;try{d.displayName="StyledListItemWrapper",d.__docgenInfo={description:"",displayName:"StyledListItemWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledListItemPointWrapper",l.__docgenInfo={description:"",displayName:"StyledListItemPointWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledListItemPoint",o.__docgenInfo={description:"",displayName:"StyledListItemPoint",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledListItemTextWrapper",s.__docgenInfo={description:"",displayName:"StyledListItemTextWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{r.displayName="StyledListItemText",r.__docgenInfo={description:"",displayName:"StyledListItemText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledListItem",m.__docgenInfo={description:"",displayName:"StyledListItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const p=({children:e,onClick:t,style:a})=>i.jsx(d,{children:i.jsxs(m,{onClick:t,animationColor:a?.animationColor,animationPointColor:a?.animationPointColor,children:[i.jsx(l,{fontSize:a?.fontSize,children:i.jsx(o,{pointSize:a?.pointSize,pointColor:a?.pointColor,animationPointColor:a?.animationPointColor,animationDuration:a?.animationDuration,animationEase:a?.animationEase})}),i.jsx(s,{gap:a?.gap,children:i.jsx(r,{fontSize:a?.fontSize,color:a?.color,animationColor:a?.animationColor,animationDuration:a?.animationDuration,animationEase:a?.animationEase,children:e})})]})});try{p.displayName="ListItem005",p.__docgenInfo={description:"",displayName:"ListItem005",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:'{ fontSize?: number; color?: string; gap?: number | undefined; pointSize?: number | undefined; pointColor?: string | undefined; animationColor?: string | undefined; animationDuration?: string | undefined; animationEase?: "easeInSine" | ... 25 more ... | undefined; animationPointColor?: string...'}}}}}catch{}export{p as L};
