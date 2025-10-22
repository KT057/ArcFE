import{d as o,j as a}from"./iframe-H3qRDz1v.js";import{C as u}from"./index-DFjIzviM.js";const i=o.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,d=o.div.withConfig({shouldForwardProp:e=>!["size"].includes(e)})`
  width: ${({theme:e,size:t})=>e.size.em(t||17)};
  height: ${({theme:e,size:t})=>e.size.em(t||17)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,l=o.span`
  width: 100%;
  height: 100%;
  display: block;
  background-color: #ccc;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;try{i.displayName="StyledSlideGuideDotWrapper",i.__docgenInfo={description:"",displayName:"StyledSlideGuideDotWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="StyledSlideGuideDotContainer",d.__docgenInfo={description:"",displayName:"StyledSlideGuideDotContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledSlideGuideDotItem",l.__docgenInfo={description:"",displayName:"StyledSlideGuideDotItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const n=({type:e="default",progress:t=0,style:r,onClick:s})=>a.jsx(i,{children:a.jsx(d,{size:r?.dotSize||17,children:e==="default"?a.jsx(l,{onClick:s}):a.jsx(u,{progress:t,size:r?.circleSize||17,style:{primaryColor:r?.primaryColor,trackColor:r?.trackColor,strokeWidth:r?.strokeWidth||2,animationDuration:r?.animationDuration}})})});try{n.displayName="RebitaSlideGuideDot",n.__docgenInfo={description:"",displayName:"RebitaSlideGuideDot",props:{type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"progress"'},{value:'"default"'}]}},progress:{defaultValue:{value:"0"},description:"",name:"progress",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ primaryColor?: string; trackColor?: string; circleSize?: number | undefined; dotSize?: number | undefined; strokeWidth?: number | undefined; animationDuration?: string | undefined; } | undefined"}}}}}catch{}export{n as R};
