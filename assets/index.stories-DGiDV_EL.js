import{r as a,j as t}from"./iframe-H3qRDz1v.js";import{T as n}from"./index-DqsGku3c.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"Basic/ToggleSomething/Product001",component:n,tags:["autodocs"]},i=o=>{const[s,r]=a.useState(!1);return t.jsxs("div",{children:[t.jsx("button",{onClick:()=>r(!s),children:"Toggle"}),t.jsx(n,{...o,isOpen:s,children:t.jsx("div",{children:"Content"})})]})},e=i.bind({});e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      <ToggleSomething001 {...args} isOpen={isOpen}>
        <div>Content</div>
      </ToggleSomething001>
    </div>;
}`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,l as default};
