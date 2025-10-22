import{u as i,j as r,r as p}from"./iframe-H3qRDz1v.js";import"./preload-helper-PPVm8Dsz.js";const s=({children:e,parallaxProps:a})=>{const n=i({...a,onProgressChange:o=>{const l=Math.floor(Math.max(0,Math.min(100,o*100)));a.onProgressChange?.(l)}});return r.jsx("div",{ref:n.ref,style:{width:"100%"},children:e})};try{s.displayName="ParallaxContent",s.__docgenInfo={description:"",displayName:"ParallaxContent",props:{parallaxProps:{defaultValue:null,description:"",name:"parallaxProps",required:!0,type:{name:"ParallaxProps"}}}}}catch{}const h={title:"Basic/Parallax/Content",component:s,tags:["autodocs"]},d=e=>{const[a,n]=p.useState(0);return r.jsx("div",{style:{height:"300vh",padding:"20px",position:"relative"},children:r.jsx("div",{style:{position:"absolute",top:"100vw",left:0,width:"50%"},children:r.jsx(s,{...e,parallaxProps:{rootMargin:{top:0,bottom:-350,left:0,right:0},onProgressChange:o=>{n(o)}},children:r.jsxs("h1",{children:[a,"%"]})})})})},t=d.bind({});t.args={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [progress, setProgress] = useState(0);
  return <div style={{
    height: "300vh",
    padding: "20px",
    position: "relative"
  }}>
      <div style={{
      position: "absolute",
      top: "100vw",
      left: 0,
      width: "50%"
    }}>
        <ParallaxContent {...args} parallaxProps={{
        rootMargin: {
          top: 0,
          bottom: -350,
          left: 0,
          right: 0
        },
        onProgressChange: progress => {
          setProgress(progress);
        }
      }}>
          <h1>{progress}%</h1>
        </ParallaxContent>
      </div>
    </div>;
}`,...t.parameters?.docs?.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,h as default};
