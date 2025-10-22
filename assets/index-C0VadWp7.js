import{d as o,r as b,j as a}from"./iframe-H3qRDz1v.js";const l=o.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,d=o.div.withConfig({shouldForwardProp:e=>e!=="animationBackgroundColorBefore"&&e!=="animationBackgroundColorAfter"})`
  position: relative;
  width: ${({theme:e})=>e.size.em(80)};
  height: ${({theme:e})=>e.size.em(80)};
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({animationBackgroundColorBefore:e})=>e??"#d9d9d9"};
    opacity: 0;
    transform: scale(1.2);
    transition:
      opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({animationBackgroundColorAfter:e})=>e??"#fff"};
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    backface-visibility: hidden;
  }

  &:hover {
    &::before {
      opacity: 0.8;
      transform: scale(1);
    }

    &::after {
      transform: scale(0.8);
      transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
    }
  }
`,s=o.div`
  width: ${({theme:e})=>e.size.em(28)};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.size.em(5)};
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,t=o.span.withConfig({shouldForwardProp:e=>e!=="lineColor"})`
  width: 100%;
  height: ${({theme:e})=>e.size.em(4)};
  background-color: ${({lineColor:e})=>e??"#000"};
`,p=o.div`
  width: ${({theme:e})=>e.size.em(80)};
  height: ${({theme:e})=>e.size.em(80)};
  cursor: pointer;
  display: block;
  position: relative;
`,n=o.div`
  width: 100%;
  height: 100%;
  position: relative;
`,c=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,u=o.div`
  position: relative;
  transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
`,i=o.span.withConfig({shouldForwardProp:e=>e!=="lineColor"&&e!=="animationBackgroundColorLine"})`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: ${({theme:e})=>e.size.em(28)};
  height: ${({theme:e})=>e.size.em(4)};
  background-color: ${({lineColor:e})=>e??"#000"};

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({animationBackgroundColorLine:e})=>e??"#ccc"};
    transform: scale(0);
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  ${n}:hover & {
    &::after {
      transform: scale(1);
    }
  }
`;try{l.displayName="StyledToggleWrapper",l.__docgenInfo={description:"",displayName:"StyledToggleWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="StyledToggleOpen",d.__docgenInfo={description:"",displayName:"StyledToggleOpen",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledToggleOpenInner",s.__docgenInfo={description:"",displayName:"StyledToggleOpenInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{t.displayName="StyledToggleOpenLine",t.__docgenInfo={description:"",displayName:"StyledToggleOpenLine",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledToggleClose",p.__docgenInfo={description:"",displayName:"StyledToggleClose",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="StyledToggleCloseInner",n.__docgenInfo={description:"",displayName:"StyledToggleCloseInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledToggleCloseContainer",c.__docgenInfo={description:"",displayName:"StyledToggleCloseContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledToggleCloseLineWrapper",u.__docgenInfo={description:"",displayName:"StyledToggleCloseLineWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledToggleCloseLine",i.__docgenInfo={description:"",displayName:"StyledToggleCloseLine",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const y=({isOpen:e,onChange:h,onClick:_,style:r})=>{const[T,C]=b.useState(!1),m=e!==void 0?e:T,f=()=>{const g=!m;e===void 0&&C(g),h?.(g),_?.()};return a.jsx(l,{children:m?a.jsx(p,{onClick:f,children:a.jsx(n,{children:a.jsx(c,{children:a.jsxs(u,{children:[a.jsx(i,{lineColor:r?.lineColor,animationBackgroundColorLine:r?.animationBackgroundColorLine}),a.jsx(i,{lineColor:r?.lineColor,animationBackgroundColorLine:r?.animationBackgroundColorLine})]})})})}):a.jsx(d,{onClick:f,animationBackgroundColorBefore:r?.animationBackgroundColorBefore,animationBackgroundColorAfter:r?.animationBackgroundColorAfter,children:a.jsxs(s,{children:[a.jsx(t,{lineColor:r?.lineColor}),a.jsx(t,{lineColor:r?.lineColor}),a.jsx(t,{lineColor:r?.lineColor})]})})})};try{y.displayName="Toggle001",y.__docgenInfo={description:"",displayName:"Toggle001",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ lineColor?: string; animationBackgroundColorLine?: string; animationBackgroundColorBefore?: string | undefined; animationBackgroundColorAfter?: string | undefined; } | undefined"}}}}}catch{}export{y as T};
