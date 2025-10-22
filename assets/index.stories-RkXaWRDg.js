import{d as p,j as o}from"./iframe-H3qRDz1v.js";import"./preload-helper-PPVm8Dsz.js";const l=p.span`
  ${({theme:e})=>e.font.baseSize.em()}

  display: block;
`,c=p.span.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"})`
  display: block;
  color: ${({color:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:i})=>e.size.em(i??24)};
`;try{l.displayName="StyledText",l.__docgenInfo={description:"",displayName:"StyledText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledTextContent",c.__docgenInfo={description:"",displayName:"StyledTextContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const n=({children:e,fontSize:i,color:m})=>o.jsx(l,{children:o.jsx(c,{fontSize:i,color:m,children:e})});try{n.displayName="Text",n.__docgenInfo={description:"",displayName:"Text",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}const g={title:"Basic/Text",component:n,tags:["autodocs"]},d=e=>o.jsx("div",{children:o.jsx(n,{...e})}),r=d.bind({});r.args={children:"テキスト",fontSize:16};const a=d.bind({});a.args={children:"これは段落テキストです。",fontSize:14,color:"#333"};const t=d.bind({});t.args={children:"見出しテキスト",fontSize:24,color:"#2196f3"};const s=d.bind({});s.args={children:"インラインテキスト",fontSize:14,color:"#333"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div>
    <Text {...args} />
  </div>`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div>
    <Text {...args} />
  </div>`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <div>
    <Text {...args} />
  </div>`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div>
    <Text {...args} />
  </div>`,...s.parameters?.docs?.source}}};const y=["Default","Paragraph","Heading","Span"];export{r as Default,t as Heading,a as Paragraph,s as Span,y as __namedExportsOrder,g as default};
