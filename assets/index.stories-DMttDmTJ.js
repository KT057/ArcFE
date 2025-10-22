import{d as l,j as t,P as n,e as d}from"./iframe-H3qRDz1v.js";import"./preload-helper-PPVm8Dsz.js";const s=l.div`
  width: 100%;
  
  ${({theme:e})=>e.font.baseSize.em()}
`;try{s.displayName="StyledWrapper",s.__docgenInfo={description:"",displayName:"StyledWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const r=({layer:e,height:i})=>t.jsx(s,{children:t.jsx(n,{layers:[e],style:{height:`${d(i??300)}`,width:"100%"}})});try{r.displayName="ParallaxImage",r.__docgenInfo={description:"",displayName:"ParallaxImage",props:{layer:{defaultValue:null,description:"",name:"layer",required:!0,type:{name:"BannerLayer"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}}}catch{}const c={title:"Basic/Parallax/Image",component:r,tags:["autodocs"]},o=e=>t.jsx("div",{style:{height:"300vh",padding:"20px",position:"relative"},children:t.jsx("div",{style:{position:"absolute",top:"100vh",left:0,width:"50%"},children:t.jsx(r,{...e})})}),a=o.bind({});a.args={layer:{image:"/images/img-01.jpg",speed:-15},height:400};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div style={{
  height: "300vh",
  padding: "20px",
  position: "relative"
}}>
    <div style={{
    position: "absolute",
    top: "100vh",
    left: 0,
    width: "50%"
  }}>
      <ParallaxImage {...args} />
    </div>
  </div>`,...a.parameters?.docs?.source}}};const u=["Default"];export{a as Default,u as __namedExportsOrder,c as default};
