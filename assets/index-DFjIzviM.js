import{d as s,j as t}from"./iframe-H3qRDz1v.js";const d=s.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,l=s.div.withConfig({shouldForwardProp:e=>!["size"].includes(e)})`
  width: ${({theme:e,size:r})=>e.size.em(r||17)};
  height: ${({theme:e,size:r})=>e.size.em(r||17)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,n=s.svg.withConfig({shouldForwardProp:e=>!["size"].includes(e)})`
  width: ${({theme:e,size:r})=>e.size.em(r||17)};
  height: ${({theme:e,size:r})=>e.size.em(r||17)};
  transform: rotate(-90deg);
  overflow: visible;
`,c=s.circle.withConfig({shouldForwardProp:e=>!["trackColor","size"].includes(e)})`
  cx: ${({theme:e,size:r})=>e.size.em((r||17)/2)};
  cy: ${({theme:e,size:r})=>e.size.em((r||17)/2)};
  r: ${({theme:e,size:r})=>e.size.em(((r||17)-1)/2)};
  stroke-width: 1;
  fill: none;
  stroke: ${({trackColor:e})=>e||"#e5e7eb"};
  stroke-linecap: round;
`,u=s.circle.withConfig({shouldForwardProp:e=>!["primaryColor","size","strokeWidth","animationDuration","progress"].includes(e)})`
  cx: ${({theme:e,size:r})=>e.size.em((r||17)/2)};
  cy: ${({theme:e,size:r})=>e.size.em((r||17)/2)};
  r: ${({theme:e,size:r,strokeWidth:a})=>e.size.em(((r||17)-(a||2))/2)};
  stroke-width: ${({strokeWidth:e})=>e||2};
  fill: none;
  stroke: ${({primaryColor:e})=>e||"#3b82f6"};
  stroke-linecap: round;
  stroke-dasharray: ${({theme:e,size:r,strokeWidth:a})=>{const i=((r||17)-(a||2))/2,o=2*3.1416*i;return e.size.em(o)}};
  stroke-dashoffset: ${({theme:e,size:r,strokeWidth:a,progress:i})=>{const o=((r||17)-(a||2))/2,p=2*3.1416*o;return e.size.em(p-p*(i||0)/100)}};
`;try{d.displayName="StyledCircleProgressWrapper",d.__docgenInfo={description:"",displayName:"StyledCircleProgressWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledCircleProgressContainer",l.__docgenInfo={description:"",displayName:"StyledCircleProgressContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="StyledCircleProgressSvg",n.__docgenInfo={description:"",displayName:"StyledCircleProgressSvg",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledCircleProgressTrack",c.__docgenInfo={description:"",displayName:"StyledCircleProgressTrack",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledCircleProgressProgress",u.__docgenInfo={description:"",displayName:"StyledCircleProgressProgress",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const m=({progress:e=0,size:r,style:a})=>t.jsx(d,{children:t.jsx(l,{size:r,children:t.jsxs(n,{size:r,children:[t.jsx(c,{trackColor:a?.trackColor,size:r}),t.jsx(u,{primaryColor:a?.primaryColor,size:r,strokeWidth:a?.strokeWidth,animationDuration:a?.animationDuration,progress:e})]})})});try{m.displayName="CircleProgress",m.__docgenInfo={description:"",displayName:"CircleProgress",props:{progress:{defaultValue:{value:"0"},description:"",name:"progress",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ primaryColor?: string; trackColor?: string; strokeWidth?: number | undefined; animationDuration?: string | undefined; } | undefined"}}}}}catch{}export{m as C};
