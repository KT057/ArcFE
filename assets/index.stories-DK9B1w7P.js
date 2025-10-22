import{j as e,r as v}from"./iframe-H3qRDz1v.js";import{C as x}from"./index-DFjIzviM.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Advanced/common/CircleProgress",component:x,tags:["autodocs"]},r=s=>e.jsx("div",{style:{padding:"50px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(x,{...s})}),o=r.bind({});o.args={progress:50,size:17};const i=r.bind({});i.args={progress:50,size:17};const a=r.bind({});a.args={progress:0,size:17};const c=r.bind({});c.args={progress:100,size:17};const l=r.bind({});l.args={progress:75,size:20,style:{primaryColor:"#22c55e",trackColor:"#f3f4f6"}};const d=r.bind({});d.args={progress:60,size:20,style:{strokeWidth:3}};const p=r.bind({});p.args={progress:80,size:20,style:{animationDuration:"5s",primaryColor:"#f59e0b"}};const C=()=>{const[s,g]=v.useState(0),t=5;return e.jsxs("div",{style:{padding:"50px"},children:[e.jsxs("div",{style:{marginBottom:"20px",textAlign:"center"},children:[e.jsx("button",{onClick:()=>g(n=>n>0?n-1:t-1),style:{marginRight:"10px"},children:"Previous"}),e.jsx("button",{onClick:()=>g(n=>n<t-1?n+1:0),children:"Next"})]}),e.jsx("div",{style:{display:"flex",gap:"10px",justifyContent:"center"},children:Array.from({length:t},(n,y)=>e.jsx(x,{size:17,progress:y===s?100:0,style:{primaryColor:y===s?"#3b82f6":"#cbd5e1"}},y))})]})},m=C.bind({}),f=()=>{const[s,g]=v.useState(50);return e.jsxs("div",{style:{padding:"50px",maxWidth:"400px"},children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsxs("label",{children:["Progress: ",s,"%"]}),e.jsx("input",{type:"range",min:"0",max:"100",value:s,onChange:t=>g(Number(t.target.value)),style:{width:"100%",marginLeft:"10px"}})]}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(x,{progress:s,size:17})})]})},u=f.bind({});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <CircleProgress {...args} />
  </div>`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <CircleProgress {...args} />
  </div>`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <CircleProgress {...args} />
  </div>`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <CircleProgress {...args} />
  </div>`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <CircleProgress {...args} />
  </div>`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <CircleProgress {...args} />
  </div>`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <CircleProgress {...args} />
  </div>`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = 5;
  return <div style={{
    padding: "50px"
  }}>
      <div style={{
      marginBottom: "20px",
      textAlign: "center"
    }}>
        {/** biome-ignore lint/a11y/useButtonType: lint/suppressions/incorrect */}
        <button onClick={() => setActiveIndex(prev => prev > 0 ? prev - 1 : totalDots - 1)} style={{
        marginRight: "10px"
      }}>
          Previous
        </button>
        {/** biome-ignore lint/a11y/useButtonType: lint/suppressions/incorrect */}
        <button onClick={() => setActiveIndex(prev => prev < totalDots - 1 ? prev + 1 : 0)}>
          Next
        </button>
      </div>
      <div style={{
      display: "flex",
      gap: "10px",
      justifyContent: "center"
    }}>
        {Array.from({
        length: totalDots
      }, (_, index) => <CircleProgress
      // biome-ignore lint/suspicious/noArrayIndexKey: lint/suppressions/incorrect
      key={index} size={17} progress={index === activeIndex ? 100 : 0} style={{
        primaryColor: index === activeIndex ? "#3b82f6" : "#cbd5e1"
      }} />)}
      </div>
    </div>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(50);
  return <div style={{
    padding: "50px",
    maxWidth: "400px"
  }}>
      <div style={{
      marginBottom: "20px"
    }}>
        {/** biome-ignore lint/a11y/noLabelWithoutControl: lint/suppressions/incorrect */}
        <label>Progress: {progress}%</label>
        <input type="range" min="0" max="100" value={progress} onChange={e => setProgress(Number(e.target.value))} style={{
        width: "100%",
        marginLeft: "10px"
      }} />
      </div>
      <div style={{
      textAlign: "center"
    }}>
        <CircleProgress progress={progress} size={17} />
      </div>
    </div>;
}`,...u.parameters?.docs?.source}}};const I=["Default","Progress","ProgressZero","ProgressFull","CustomColors","LargeSize","SlowAnimation","MultipleDots","Interactive"];export{l as CustomColors,o as Default,u as Interactive,d as LargeSize,m as MultipleDots,i as Progress,c as ProgressFull,a as ProgressZero,p as SlowAnimation,I as __namedExportsOrder,h as default};
