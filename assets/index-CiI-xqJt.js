import{d as c,r as n,j as a}from"./iframe-Rw2KdrAu.js";import{g as x}from"./index-CH_iu5NA.js";const g=c.span.withConfig({shouldForwardProp:e=>!["fontSize","color"].includes(e)})`
  ${({theme:e})=>e.font.baseSize.em()}
  display: inline-block;
`,_=c.span.withConfig({shouldForwardProp:e=>!["fontSize","color"].includes(e)})`
  position: relative;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  display: block;
  font-size: ${({theme:e,fontSize:t})=>e.size.em(t||16)};
  color: ${({color:e})=>e||"#000"};
  line-height: 1.5;
  height: 1.5em;
`,h=c.span`
  display: block;
  transform: translateY(0);
`,d=c.span`
  display: block;
`;try{g.displayName="StyledVerticalRollingTextWrapper",g.__docgenInfo={description:"",displayName:"StyledVerticalRollingTextWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{_.displayName="StyledVerticalRollingTextInner",_.__docgenInfo={description:"",displayName:"StyledVerticalRollingTextInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="StyledVerticalRollingTextContents",h.__docgenInfo={description:"",displayName:"StyledVerticalRollingTextContents",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="StyledVerticalRollingText",d.__docgenInfo={description:"",displayName:"StyledVerticalRollingText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const V=({children:e,enableHover:t,style:o})=>{const p=n.useRef(null),u=n.useRef(null),f=n.useRef(null),m=n.useCallback(i=>{const y=p.current,r=u.current,l=f.current;if(!y||!r||!l||!i)return;const s=l.clientHeight;x.set(r,{transform:"translateY(0)"}),x.to(r,{duration:.4,transform:`translateY(-${s}px)`,ease:"power2.inOut"})},[]);return n.useEffect(()=>{const i=p.current,y=u.current,r=f.current;if(!i||!y||!r)return;const l=()=>{const T=r.clientHeight;i.style.height=`${T}px`},s=()=>{l()};return l(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),n.useEffect(()=>{t!==void 0&&m(t)},[t]),a.jsx(g,{fontSize:o?.fontSize,color:o?.color,children:a.jsx(_,{ref:p,fontSize:o?.fontSize,color:o?.color,onMouseEnter:()=>t===void 0&&m(!0),onMouseLeave:()=>t===void 0&&m(!1),children:a.jsxs(h,{ref:u,children:[a.jsx(d,{ref:f,children:e}),a.jsx(d,{children:e})]})})})};try{V.displayName="VerticalRollingText",V.__docgenInfo={description:"",displayName:"VerticalRollingText",props:{enableHover:{defaultValue:null,description:"",name:"enableHover",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; color?: string; } | undefined"}}}}}catch{}export{V};
