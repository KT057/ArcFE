import{d as c,r as a,j as m}from"./iframe-H3qRDz1v.js";import{g as l}from"./index-CH_iu5NA.js";const y=c.div`
  ${({theme:n})=>n.font.baseSize.em()}
`,g=c.div.withConfig({shouldForwardProp:n=>n!=="height"})`
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    display: block;
    padding-top: ${({height:n,theme:s})=>s.size.em(n??200)};
  }
`,h=c.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  opacity: 0;
`,_=c.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;try{y.displayName="StyledFadeInAndZoomImagesWrapper",y.__docgenInfo={description:"",displayName:"StyledFadeInAndZoomImagesWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="StyledFadeInAndZoomImagesImageInner",g.__docgenInfo={description:"",displayName:"StyledFadeInAndZoomImagesImageInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="StyledFadeInAndZoomImagesContent",h.__docgenInfo={description:"",displayName:"StyledFadeInAndZoomImagesContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{_.displayName="StyledFadeInAndZoomImagesImage",_.__docgenInfo={description:"",displayName:"StyledFadeInAndZoomImagesImage",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const F=({images:n,duration:s=4,fadeDuration:x=2,scaleTo:A=1.2,state:o,height:S,onImageChange:i,onProgress:b})=>{const u=a.useRef(null),[w,Z]=a.useState(!1),[q,T]=a.useState(o?.currentIndex??0),p=a.useCallback(()=>u.current?Array.from(u.current.querySelectorAll(".fade-in-zoom-content")):[],[]),r=a.useMemo(()=>o?.currentIndex??q,[o?.currentIndex,q]),f=a.useCallback(e=>{T(e),o?.setCurrentIndex?.(e)},[o]),v=a.useCallback(()=>{let e=r;const t=n.length-1;return e>=t?(e=0,f(e)):(e++,f(e)),e},[r,n.length,f]),C=a.useCallback(({imageElement:e})=>{e.style.zIndex="1",l.to(e,{opacity:0,duration:x,ease:"power2.out",onComplete:()=>{i?.(r),e.style.zIndex="0"}})},[r,x,i]),V=a.useCallback(({imageElement:e})=>{l.set(e,{scale:1,opacity:1});const t=l.to(e,{scale:A,opacity:1,duration:s,ease:"power2.out",onComplete:()=>{i?.(r),v()},onUpdate:()=>{const I=Math.floor(t.progress()*100);b?.(I)}})},[r,s,i,v,b,A]),N=a.useCallback(e=>{if(!u.current||n.length<=1)return;const t=p();l.killTweensOf(t);const I=t.filter((d,W)=>W!==e);for(const d of I)C({imageElement:d});if(t.length>0){const d=t[e];d&&(w?d.style.zIndex="0":(Z(!0),d.style.zIndex="1",d.style.opacity="1"),V({imageElement:d}))}},[C,V,p,n.length,w]);return a.useEffect(()=>(N(r),()=>{const e=p();l.killTweensOf(e)}),[r]),!n||n.length===0?null:m.jsx(y,{children:m.jsx(g,{ref:u,height:S,children:n.map((e,t)=>m.jsx(h,{className:"fade-in-zoom-content",children:m.jsx(_,{src:e.src,alt:e.alt||`Image ${t+1}`})},e.src))})})};try{F.displayName="FadeInAndZoomImages",F.__docgenInfo={description:"",displayName:"FadeInAndZoomImages",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"FadeInAndZoomImagesImageItem[]"}},duration:{defaultValue:{value:"4"},description:"",name:"duration",required:!1,type:{name:"number"}},fadeDuration:{defaultValue:{value:"2"},description:"",name:"fadeDuration",required:!1,type:{name:"number"}},scaleTo:{defaultValue:{value:"1.2"},description:"",name:"scaleTo",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"{ currentIndex: number; setCurrentIndex: (index: number) => void; }"}},onImageChange:{defaultValue:null,description:"",name:"onImageChange",required:!1,type:{name:"((currentIndex: number) => void)"}},onProgress:{defaultValue:null,description:"",name:"onProgress",required:!1,type:{name:"((progress: number) => void)"}},onCurrentIndexChange:{defaultValue:null,description:"",name:"onCurrentIndexChange",required:!1,type:{name:"(() => void)"}}}}}catch{}export{F};
