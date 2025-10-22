import{d as f,j as r,r as y}from"./iframe-H3qRDz1v.js";import"./preload-helper-PPVm8Dsz.js";const g=f.span.withConfig({shouldForwardProp:e=>!["color","fontSize","progress"].includes(e)})`
  ${({theme:e})=>e.font.baseSize.em()}
`,x=f.span.withConfig({shouldForwardProp:e=>!["fontSize"].includes(e)})`
  font-size: ${({theme:e,fontSize:a})=>e.size.em(a||16)};
  line-height: 1.5;
  height: 1.5em;
  width: 100%;
  position: relative;
  display: block;
`,u=f.span.withConfig({shouldForwardProp:e=>!["color","isFirst","progress"].includes(e)})`
  color: ${({color:e})=>e||"#3b82f6"};
  position: absolute;
  top: 0;
  left: 0;

  ${({isFirst:e,progress:a})=>e?`
        clip-path: inset(0 ${100-(a||0)}% 0 0);
        opacity: 1;
      `:`
        opacity: 0.2;
      `}
`;try{g.displayName="StyledFadeTextWrapper",g.__docgenInfo={description:"",displayName:"StyledFadeTextWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{x.displayName="StyledFadeTextContainer",x.__docgenInfo={description:"",displayName:"StyledFadeTextContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledFadeText",u.__docgenInfo={description:"",displayName:"StyledFadeText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=({children:e,progress:a=0,style:t})=>r.jsx(g,{color:t?.color,fontSize:t?.fontSize,progress:a,children:r.jsxs(x,{fontSize:t?.fontSize,children:[r.jsx(u,{color:t?.color,isFirst:!0,progress:a,children:e}),r.jsx(u,{color:t?.color,isFirst:!1,children:e})]})});try{c.displayName="RebitaFadeText",c.__docgenInfo={description:"",displayName:"RebitaFadeText",props:{progress:{defaultValue:{value:"0"},description:"",name:"progress",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ color?: string; fontSize?: number; } | undefined"}}}}}catch{}const T={title:"Advanced/Rebita/FadeText",component:c,tags:["autodocs"]},s=e=>r.jsx("div",{style:{padding:"50px",maxWidth:"600px"},children:r.jsx(c,{...e})}),o=s.bind({});o.args={children:"街に行き交う人々の居場所となり、コミュニティがさらなる価値を生み出す",progress:50};const n=s.bind({});n.args={children:"この文字は全く見えていません",progress:0};const d=s.bind({});d.args={children:"この文字は完全に表示されています",progress:100};const i=s.bind({});i.args={children:"この文字は部分的に表示されています",progress:25};const l=s.bind({});l.args={children:"カスタムスタイルのテキスト",progress:75,style:{color:"#22c55e",fontSize:20}};const h=()=>{const[e,a]=y.useState(0);return r.jsxs("div",{style:{padding:"50px",maxWidth:"600px"},children:[r.jsxs("div",{style:{marginBottom:"20px"},children:[r.jsxs("label",{children:["Progress: ",e,"%"]}),r.jsx("input",{type:"range",min:"0",max:"100",value:e,onChange:t=>a(Number(t.target.value)),style:{width:"100%",marginLeft:"10px"}})]}),r.jsx(c,{progress:e,children:"街に行き交う人々の居場所となり、コミュニティがさらなる価値を生み出す"})]})},m=h.bind({}),p=s.bind({});p.args={children:"これは非常に長いテキストの例です。clip-pathによってテキストが徐々に表示される効果を確認することができます。",progress:60,style:{fontSize:18}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px"
}}>
    <RebitaFadeText {...args} />
  </div>`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px"
}}>
    <RebitaFadeText {...args} />
  </div>`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px"
}}>
    <RebitaFadeText {...args} />
  </div>`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px"
}}>
    <RebitaFadeText {...args} />
  </div>`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px"
}}>
    <RebitaFadeText {...args} />
  </div>`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(0);
  return <div style={{
    padding: "50px",
    maxWidth: "600px"
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
      <RebitaFadeText progress={progress}>
        街に行き交う人々の居場所となり、コミュニティがさらなる価値を生み出す
      </RebitaFadeText>
    </div>;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "600px"
}}>
    <RebitaFadeText {...args} />
  </div>`,...p.parameters?.docs?.source}}};const _=["Default","ZeroProgress","FullProgress","PartialProgress","CustomStyle","Interactive","LongText"];export{l as CustomStyle,o as Default,d as FullProgress,m as Interactive,p as LongText,i as PartialProgress,n as ZeroProgress,_ as __namedExportsOrder,T as default};
