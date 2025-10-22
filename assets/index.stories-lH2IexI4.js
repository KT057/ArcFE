import{j as t}from"./iframe-Rw2KdrAu.js";import{F as m}from"./index-CZCPZPcI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CH_iu5NA.js";const l={title:"Advanced/common/FadeInAndZoomImages",component:m,tags:["autodocs"],parameters:{screenshot:{skip:!0}}},o=i=>t.jsx("div",{style:{width:"600px",margin:"20px auto"},children:t.jsx(m,{...i})}),n=[{src:"/images/img-01.jpg",alt:"Sample Image 1"},{src:"/images/img-02.jpg",alt:"Sample Image 2"},{src:"/images/img-03.jpg",alt:"Sample Image 3"},{src:"/images/img-04.jpg",alt:"Sample Image 4"}],a=o.bind({});a.args={images:n,onProgress:()=>null,onImageChange:()=>null};const e=o.bind({});e.args={images:n,duration:2,fadeDuration:1,onProgress:()=>null,onImageChange:()=>null};const s=o.bind({});s.args={images:n,duration:6,fadeDuration:3,onProgress:()=>null,onImageChange:()=>null};const r=o.bind({});r.args={images:n,scaleTo:1.5,duration:4,onProgress:()=>null,onImageChange:()=>null};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "600px",
  margin: "20px auto"
}}>
    <FadeInAndZoomImages {...args} />
  </div>`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "600px",
  margin: "20px auto"
}}>
    <FadeInAndZoomImages {...args} />
  </div>`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "600px",
  margin: "20px auto"
}}>
    <FadeInAndZoomImages {...args} />
  </div>`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "600px",
  margin: "20px auto"
}}>
    <FadeInAndZoomImages {...args} />
  </div>`,...r.parameters?.docs?.source}}};const u=["Default","FastTransition","SlowTransition","CustomScale"];export{r as CustomScale,a as Default,e as FastTransition,s as SlowTransition,u as __namedExportsOrder,l as default};
