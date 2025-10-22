import{d as c,r as h,j as a}from"./iframe-H3qRDz1v.js";import{F as T}from"./index-CoiRw1ho.js";import{R as w}from"./index-Ct-jbgwe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CH_iu5NA.js";import"./index-DFjIzviM.js";const I=c.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,y=c.div`
  margin-bottom: ${({theme:e})=>e.size.em(14)};
  overflow: hidden;
  border-radius: ${({theme:e})=>e.size.em(5)};
`,S=c.div.withConfig({shouldForwardProp:e=>!["gap"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e,gap:u})=>e.size.em(u||4)};
`,_=c.div`
  display: inline-block;
`;try{I.displayName="StyledFadeSlideImageWrapper",I.__docgenInfo={description:"",displayName:"StyledFadeSlideImageWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledFadeSlideImageContainer",y.__docgenInfo={description:"",displayName:"StyledFadeSlideImageContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledFadeSlideImageGuideWrapper",S.__docgenInfo={description:"",displayName:"StyledFadeSlideImageGuideWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{_.displayName="StyledFadeSlideImageGuideItem",_.__docgenInfo={description:"",displayName:"StyledFadeSlideImageGuideItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const p=({images:e,fadeInAndZoomImagesProps:u,slideGuideDotProps:b,style:j})=>{const[f,x]=h.useState(0),[v,W]=h.useState(0);return a.jsxs(I,{children:[a.jsx(y,{children:a.jsx(T,{images:e,state:{currentIndex:f,setCurrentIndex:x},onProgress:F=>{W(F)},...u})}),a.jsx(S,{gap:j?.guideGap,children:e.map((F,g)=>a.jsx(_,{children:a.jsx(w,{type:g===f?"progress":"default",progress:g===f?v:0,onClick:()=>{x(g)},...b})},g))})]})};try{p.displayName="RebitaFadeSlideImage",p.__docgenInfo={description:"",displayName:"RebitaFadeSlideImage",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"FadeInAndZoomImagesImageItem[]"}},fadeInAndZoomImagesProps:{defaultValue:null,description:"",name:"fadeInAndZoomImagesProps",required:!1,type:{name:"Partial<FadeInAndZoomImagesProps>"}},slideGuideDotProps:{defaultValue:null,description:"",name:"slideGuideDotProps",required:!1,type:{name:"Partial<SlideGuideDotProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ guideGap?: number; }"}}}}}catch{}const G={title:"Advanced/Rebita/FadeSlideImage",component:p,tags:["autodocs"],parameters:{screenshot:{skip:!0}}},r=e=>a.jsx("div",{style:{padding:"50px",maxWidth:"600px",margin:"0 auto"},children:a.jsx(p,{...e})}),s=r.bind({});s.args={images:[{src:"/images/img-01.jpg",alt:"Image+1"},{src:"/images/img-02.jpg",alt:"Image+2"},{src:"/images/img-03.jpg",alt:"Image+3"}]};const i=r.bind({});i.args={images:[{src:"/images/img-01.jpg",alt:"Image+1"},{src:"/images/img-02.jpg",alt:"Image+2"},{src:"/images/img-03.jpg",alt:"Image+3"}],slideGuideDotProps:{style:{circleSize:15,dotSize:15,primaryColor:"#22c55e",trackColor:"#f3f4f6",strokeWidth:2,animationDuration:"5s"}},style:{guideGap:10}};const t=r.bind({});t.args={images:[{src:"/images/img-01.jpg",alt:"Slow+1"},{src:"/images/img-02.jpg",alt:"Slow+2"},{src:"/images/img-03.jpg",alt:"Slow+3"}]};const d=r.bind({});d.args={fadeInAndZoomImagesProps:{duration:1,fadeDuration:1},images:[{src:"/images/img-01.jpg",alt:"Fast+1"},{src:"/images/img-02.jpg",alt:"Fast+2"},{src:"/images/img-03.jpg",alt:"Fast+3"}]};const n=r.bind({});n.args={images:[{src:"/images/img-01.jpg",alt:"First"},{src:"/images/img-02.jpg",alt:"Second"}]};const o=r.bind({});o.args={images:[{src:"/images/img-01.jpg",alt:"Image+1"},{src:"/images/img-02.jpg",alt:"Image+2"},{src:"/images/img-03.jpg",alt:"Image+3"},{src:"/images/img-04.jpg",alt:"Image+4"}],fadeInAndZoomImagesProps:{duration:1,fadeDuration:1}};const m=r.bind({});m.args={images:[{src:"/images/img-01.jpg",alt:"Static+1"},{src:"/images/img-02.jpg",alt:"Static+2"},{src:"/images/img-03.jpg",alt:"Static+3"}]};const l=r.bind({});l.args={images:[{src:"/images/img-01.jpg",alt:"Single+Image"}]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px",
  margin: "0 auto"
}}>
    <RebitaFadeSlideImage {...args} />
  </div>`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px",
  margin: "0 auto"
}}>
    <RebitaFadeSlideImage {...args} />
  </div>`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px",
  margin: "0 auto"
}}>
    <RebitaFadeSlideImage {...args} />
  </div>`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px",
  margin: "0 auto"
}}>
    <RebitaFadeSlideImage {...args} />
  </div>`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px",
  margin: "0 auto"
}}>
    <RebitaFadeSlideImage {...args} />
  </div>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px",
  margin: "0 auto"
}}>
    <RebitaFadeSlideImage {...args} />
  </div>`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px",
  margin: "0 auto"
}}>
    <RebitaFadeSlideImage {...args} />
  </div>`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px",
  margin: "0 auto"
}}>
    <RebitaFadeSlideImage {...args} />
  </div>`,...l.parameters?.docs?.source}}};const N=["Default","CustomImages","SlowTransition","FastTransition","TwoImages","FiveImages","NoAutoPlay","SingleImage"];export{i as CustomImages,s as Default,d as FastTransition,o as FiveImages,m as NoAutoPlay,l as SingleImage,t as SlowTransition,n as TwoImages,N as __namedExportsOrder,G as default};
