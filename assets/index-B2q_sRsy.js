import{d as r,l as y,m as w,r as h,j as a}from"./iframe-H3qRDz1v.js";const n=w`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
`,_=w`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,s=r.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,d=r.div`
  display: block;
`,p=r.div.withConfig({shouldForwardProp:e=>e!=="isOpen"})`
  width: ${({theme:e})=>e.size.em(40)};
  height: ${({theme:e})=>e.size.em(40)};
  position: relative;
  transition: opacity 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  ${({isOpen:e})=>e&&y`
      ${t} {
        &:nth-child(1) {
          animation: ${n} 0.15s ease forwards;
        }
        &:nth-child(2) {
          animation: ${n} 0.15s 0.15s ease forwards;
        }
        &:nth-child(3) {
          animation: ${n} 0.15s 0.3s ease forwards;
        }
      }

      ${l}::after {
        animation: ${_} 0.15s 0.45s ease forwards;
      }
    `}

  ${({isOpen:e})=>e===!1&&y`
      ${l}::after {
        animation: ${n} 0.15s ease forwards;
      }

      ${t} {
        transform: scaleX(0);
        animation: ${_} 0.15s 0.15s ease forwards;
      }
    `}
`,c=r.div`
  width: ${({theme:e})=>e.size.em(28)};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.size.em(3)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,t=r.span.withConfig({shouldForwardProp:e=>e!=="lineColor"})`
  width: 100%;
  height: ${({theme:e})=>e.size.em(2)};
  background-color: ${({lineColor:e})=>e??"#000"};
  transform-origin: left;
  transition: transform 0.2s ${({theme:e})=>e.animation.easing.easeInSine};
`,u=r.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,m=r.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`,l=r.span.withConfig({shouldForwardProp:e=>e!=="lineColor"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({theme:e})=>e.size.em(28)};
  height: ${({theme:e})=>e.size.em(2)};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({lineColor:e})=>e??"#000"};
    transform: scale(0);
    transition: transform 0.2s ${({theme:e})=>e.animation.easing.easeInSine};
  }

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(-45deg);

    &::after {
      transform-origin: right;
    }
  }

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg);

    &::after {
      transform-origin: left;
    }
  }
`;try{s.displayName="StyledToggleWrapper",s.__docgenInfo={description:"",displayName:"StyledToggleWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="StyledToggle",d.__docgenInfo={description:"",displayName:"StyledToggle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledToggleInner",p.__docgenInfo={description:"",displayName:"StyledToggleInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledToggleOpen",c.__docgenInfo={description:"",displayName:"StyledToggleOpen",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{t.displayName="StyledToggleOpenLine",t.__docgenInfo={description:"",displayName:"StyledToggleOpenLine",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledToggleCloseWrapper",u.__docgenInfo={description:"",displayName:"StyledToggleCloseWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledToggleClose",m.__docgenInfo={description:"",displayName:"StyledToggleClose",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledToggleCloseLine",l.__docgenInfo={description:"",displayName:"StyledToggleCloseLine",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const T=({isOpen:e,onChange:v,onClick:C,style:o})=>{const[i,S]=h.useState(void 0),f=h.useMemo(()=>{if(i!==void 0)return e!==void 0?e:i},[e,i]),q=()=>{const g=!f;S(g),v?.(g),C?.()};return a.jsx(s,{children:a.jsx(d,{children:a.jsxs(p,{onClick:q,isOpen:f,children:[a.jsxs(c,{children:[a.jsx(t,{lineColor:o?.lineColor}),a.jsx(t,{lineColor:o?.lineColor}),a.jsx(t,{lineColor:o?.lineColor})]}),a.jsx(u,{children:a.jsxs(m,{children:[a.jsx(l,{lineColor:o?.lineColor}),a.jsx(l,{lineColor:o?.lineColor})]})})]})})})};try{T.displayName="Toggle002",T.__docgenInfo={description:"",displayName:"Toggle002",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ lineColor?: string; }"}}}}}catch{}export{T};
