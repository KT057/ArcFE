import{l as i,d as o,j as r}from"./iframe-H3qRDz1v.js";const t=o.div.withConfig({shouldForwardProp:e=>e!=="isOpen"&&e!=="duration"&&e!=="easing"})`
  opacity: 0;
  pointer-events: none;
  transition: opacity ${({duration:e})=>e??"0.3s"} ${({easing:e,theme:a})=>a.animation.easing[e??"easeInSine"]};  

  ${({isOpen:e})=>e&&i`
      opacity: 1;
      pointer-events: auto;
    `}
`;try{t.displayName="StyledToggleContent",t.__docgenInfo={description:"",displayName:"StyledToggleContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const n=({isOpen:e,children:a,duration:u,easing:l,...s})=>r.jsx(t,{isOpen:e,duration:u,easing:l,...s,children:a});try{n.displayName="ToggleSomething001",n.__docgenInfo={description:"",displayName:"ToggleSomething001",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"string"}},easing:{defaultValue:null,description:"",name:"easing",required:!1,type:{name:"enum",value:[{value:'"easeInSine"'},{value:'"easeOutSine"'},{value:'"easeInOutSine"'},{value:'"easeInQuad"'},{value:'"easeOutQuad"'},{value:'"easeInOutQuad"'},{value:'"easeInCubic"'},{value:'"easeOutCubic"'},{value:'"easeInOutCubic"'},{value:'"easeInQuart"'},{value:'"easeOutQuart"'},{value:'"easeInOutQuart"'},{value:'"easeInQuint"'},{value:'"easeOutQuint"'},{value:'"easeInOutQuint"'},{value:'"easeInExpo"'},{value:'"easeOutExpo"'},{value:'"easeInOutExpo"'},{value:'"easeInCirc"'},{value:'"easeOutCirc"'},{value:'"easeInOutCirc"'},{value:'"easeInBack"'},{value:'"easeOutBack"'},{value:'"easeInOutBack"'},{value:'"easeInOutFast"'},{value:'"authenticMotion"'}]}}}}}catch{}export{n as T};
