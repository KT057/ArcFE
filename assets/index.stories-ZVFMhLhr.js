import{d as a,r as k,j as n}from"./iframe-Rw2KdrAu.js";import"./preload-helper-PPVm8Dsz.js";const _=a.div.withConfig({shouldForwardProp:e=>!["backgroundColor","dotColor","lineColor","isOpen"].includes(e)})`
  ${({theme:e})=>e.font.baseSize.em()}
`,v=a.div.withConfig({shouldForwardProp:e=>!["size","backgroundColor"].includes(e)})`
  width: ${({theme:e})=>e.size.em(40)};
  height: ${({theme:e})=>e.size.em(40)};
  border-radius: ${({theme:e})=>e.size.em(4)};
  background-color: ${({backgroundColor:e})=>e||"#000"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`,S=a.div.withConfig({shouldForwardProp:e=>!["isOpen"].includes(e)})`
  display: ${({isOpen:e})=>e?"none":"flex"};
  align-items: center;
  justify-content: center;
`,h=a.span.withConfig({shouldForwardProp:e=>!["dotColor"].includes(e)})`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  display: block;
  background-color: ${({dotColor:e})=>e||"#fff"};

  &:nth-child(2) {
    margin: 0 ${({theme:e})=>e.size.em(2)};
  }
`,w=a.div.withConfig({shouldForwardProp:e=>!["isOpen"].includes(e)})`
  display: ${({isOpen:e})=>e?"block":"none"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({theme:e})=>e.size.em(16)};
  height: ${({theme:e})=>e.size.em(16)};
`,j=a.div`
  width: 100%;
  height: 100%;
  position: relative;
`,b=a.span.withConfig({shouldForwardProp:e=>!["lineColor"].includes(e)})`
  width: 100%;
  height: ${({theme:e})=>e.size.em(2)};
  display: block;
  background-color: ${({lineColor:e})=>e||"#fff"};
  transform-origin: center center;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: ${({theme:e})=>e.size.em(2)};

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;try{_.displayName="StyledToggleWrapper",_.__docgenInfo={description:"",displayName:"StyledToggleWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="StyledToggleInner",v.__docgenInfo={description:"",displayName:"StyledToggleInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledToggleDotWrapper",S.__docgenInfo={description:"",displayName:"StyledToggleDotWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="StyledToggleDot",h.__docgenInfo={description:"",displayName:"StyledToggleDot",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="StyledToggleCloseWrapper",w.__docgenInfo={description:"",displayName:"StyledToggleCloseWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="StyledToggleLineWrapper",j.__docgenInfo={description:"",displayName:"StyledToggleLineWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{b.displayName="StyledToggleLine",b.__docgenInfo={description:"",displayName:"StyledToggleLine",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const i=({size:e="middle",isOpen:t,onChange:d,onClick:s,style:r})=>{const[l,q]=k.useState(!1),C=t!==void 0?t:l,I=()=>{const W=!C;t===void 0&&q(W),d?.(W),s?.()};return n.jsx(_,{backgroundColor:r?.backgroundColor,dotColor:r?.dotColor,lineColor:r?.lineColor,isOpen:C,children:n.jsxs(v,{size:e,backgroundColor:r?.backgroundColor,onClick:I,children:[n.jsxs(S,{isOpen:C,children:[n.jsx(h,{dotColor:r?.dotColor}),n.jsx(h,{dotColor:r?.dotColor}),n.jsx(h,{dotColor:r?.dotColor})]}),n.jsx(w,{isOpen:C,children:n.jsxs(j,{children:[n.jsx(b,{lineColor:r?.lineColor}),n.jsx(b,{lineColor:r?.lineColor})]})})]})})};try{i.displayName="RebitaToggle",i.__docgenInfo={description:"",displayName:"RebitaToggle",props:{size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ backgroundColor?: string; dotColor?: string; lineColor?: string | undefined; } | undefined"}}}}}catch{}const N={title:"Advanced/Rebita/Toggle",component:i,tags:["autodocs"]},o=e=>n.jsx("div",{style:{padding:"50px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(i,{...e})}),p=o.bind({});p.args={};const c=o.bind({});c.args={isOpen:!0};const g=o.bind({});g.args={isOpen:!1};const u=o.bind({});u.args={style:{backgroundColor:"#2196f3",dotColor:"#ffffff",lineColor:"#ffffff"}};const m=o.bind({});m.args={style:{backgroundColor:"#1f2937",dotColor:"#f3f4f6",lineColor:"#f3f4f6"}};const f=o.bind({});f.args={style:{backgroundColor:"#10b981",dotColor:"#ffffff",lineColor:"#ffffff"}};const V=()=>{const[e,t]=k.useState(!1);return n.jsxs("div",{style:{padding:"50px",textAlign:"center"},children:[n.jsx("div",{style:{marginBottom:"20px"},children:n.jsxs("p",{children:["Current state: ",e?"Open":"Closed"]})}),n.jsx(i,{isOpen:e,onChange:d=>t(d)})]})},T=V.bind({}),O=()=>{const[e,t]=k.useState([!1,!1,!1]),d=(s,r)=>{const l=[...e];l[s]=r,t(l)};return n.jsxs("div",{style:{padding:"50px"},children:[n.jsx("h3",{children:"Multiple Toggles"}),n.jsx("div",{style:{display:"flex",gap:"20px",justifyContent:"center",marginTop:"20px"},children:e.map((s,r)=>n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx(i,{isOpen:s,onChange:l=>d(r,l),style:{backgroundColor:s?"#22c55e":"#6b7280"}}),n.jsxs("p",{style:{marginTop:"10px",fontSize:"14px"},children:["Toggle ",r+1]})]},r))})]})},x=O.bind({}),y=o.bind({});y.args={onChange:e=>{console.log("Toggle changed to:",e),alert(`Toggle is now ${e?"open":"closed"}`)},onClick:()=>{console.log("Toggle clicked!")}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaToggle {...args} />
  </div>`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaToggle {...args} />
  </div>`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaToggle {...args} />
  </div>`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaToggle {...args} />
  </div>`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaToggle {...args} />
  </div>`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaToggle {...args} />
  </div>`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <div style={{
    padding: "50px",
    textAlign: "center"
  }}>
      <div style={{
      marginBottom: "20px"
    }}>
        <p>Current state: {isOpen ? "Open" : "Closed"}</p>
      </div>
      <RebitaToggle isOpen={isOpen} onChange={newState => setIsOpen(newState)} />
    </div>;
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [toggles, setToggles] = useState([false, false, false]);
  const handleToggleChange = (index: number, newState: boolean) => {
    const newToggles = [...toggles];
    newToggles[index] = newState;
    setToggles(newToggles);
  };
  return <div style={{
    padding: "50px"
  }}>
      <h3>Multiple Toggles</h3>
      <div style={{
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      marginTop: "20px"
    }}>
        {toggles.map((isOpen, index) => <div key={index} style={{
        textAlign: "center"
      }}>
            <RebitaToggle isOpen={isOpen} onChange={newState => handleToggleChange(index, newState)} style={{
          backgroundColor: isOpen ? "#22c55e" : "#6b7280"
        }} />
            <p style={{
          marginTop: "10px",
          fontSize: "14px"
        }}>
              Toggle {index + 1}
            </p>
          </div>)}
      </div>
    </div>;
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
    <RebitaToggle {...args} />
  </div>`,...y.parameters?.docs?.source}}};const $=["Default","OpenState","CloseState","CustomColors","DarkTheme","ColorfulTheme","Interactive","MultipleToggles","WithCallback"];export{g as CloseState,f as ColorfulTheme,u as CustomColors,m as DarkTheme,p as Default,T as Interactive,x as MultipleToggles,c as OpenState,y as WithCallback,$ as __namedExportsOrder,N as default};
