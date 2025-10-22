import{j as e,r as v}from"./iframe-Rw2KdrAu.js";import{R as y}from"./index-CjnZfozK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DL1IgOQD.js";const h={title:"Advanced/Rebita/SlideGuideDot",component:y,tags:["autodocs"]},s=t=>e.jsx("div",{style:{padding:"50px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(y,{...t})}),i=s.bind({});i.args={type:"default"};const a=s.bind({});a.args={type:"progress",progress:50};const d=s.bind({});d.args={type:"progress",progress:0};const l=s.bind({});l.args={type:"progress",progress:100};const p=s.bind({});p.args={type:"progress",progress:75,style:{primaryColor:"#22c55e",trackColor:"#f3f4f6",circleSize:10,dotSize:10}};const c=s.bind({});c.args={type:"progress",progress:60,style:{circleSize:30,dotSize:30,strokeWidth:3}};const g=s.bind({});g.args={type:"progress",progress:80,style:{animationDuration:"5s",primaryColor:"#f59e0b"}};const b=()=>{const[t,n]=v.useState(0),o=5;return e.jsxs("div",{style:{padding:"50px"},children:[e.jsxs("div",{style:{marginBottom:"20px",textAlign:"center"},children:[e.jsx("button",{onClick:()=>n(r=>r>0?r-1:o-1),style:{marginRight:"10px"},children:"Previous"}),e.jsx("button",{onClick:()=>n(r=>r<o-1?r+1:0),children:"Next"})]}),e.jsx("div",{style:{display:"flex",gap:"10px",justifyContent:"center"},children:Array.from({length:o},(r,m)=>e.jsx(y,{type:"progress",progress:m===t?100:0,onClick:()=>n(m),style:{primaryColor:m===t?"#3b82f6":"#cbd5e1"}},m))})]})},u=b.bind({}),f=()=>{const[t,n]=v.useState(50);return e.jsxs("div",{style:{padding:"50px",maxWidth:"400px"},children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsxs("label",{children:["Progress: ",t,"%"]}),e.jsx("input",{type:"range",min:"0",max:"100",value:t,onChange:o=>n(Number(o.target.value)),style:{width:"100%",marginLeft:"10px"}})]}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(y,{type:"progress",progress:t,onClick:()=>{console.log("clicked")}})})]})},x=f.bind({});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaSlideGuideDot {...args} />
  </div>`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaSlideGuideDot {...args} />
  </div>`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaSlideGuideDot {...args} />
  </div>`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaSlideGuideDot {...args} />
  </div>`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaSlideGuideDot {...args} />
  </div>`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaSlideGuideDot {...args} />
  </div>`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaSlideGuideDot {...args} />
  </div>`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = 5;
  return <div style={{
    padding: "50px"
  }}>
      <div style={{
      marginBottom: "20px",
      textAlign: "center"
    }}>
        <button onClick={() => setActiveIndex(prev => prev > 0 ? prev - 1 : totalDots - 1)} style={{
        marginRight: "10px"
      }}>
          Previous
        </button>
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
      }, (_, index) => <RebitaSlideGuideDot key={index} type="progress" progress={index === activeIndex ? 100 : 0} onClick={() => setActiveIndex(index)} style={{
        primaryColor: index === activeIndex ? "#3b82f6" : "#cbd5e1"
      }} />)}
      </div>
    </div>;
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(50);
  return <div style={{
    padding: "50px",
    maxWidth: "400px"
  }}>
      <div style={{
      marginBottom: "20px"
    }}>
        <label>Progress: {progress}%</label>
        <input type="range" min="0" max="100" value={progress} onChange={e => setProgress(Number(e.target.value))} style={{
        width: "100%",
        marginLeft: "10px"
      }} />
      </div>
      <div style={{
      textAlign: "center"
    }}>
        <RebitaSlideGuideDot type="progress" progress={progress} onClick={() => {
        console.log("clicked");
      }} />
      </div>
    </div>;
}`,...x.parameters?.docs?.source}}};const I=["Default","Progress","ProgressZero","ProgressFull","CustomColors","LargeSize","SlowAnimation","MultipleDots","Interactive"];export{p as CustomColors,i as Default,x as Interactive,c as LargeSize,u as MultipleDots,a as Progress,l as ProgressFull,d as ProgressZero,g as SlowAnimation,I as __namedExportsOrder,h as default};
