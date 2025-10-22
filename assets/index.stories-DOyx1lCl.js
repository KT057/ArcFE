import{d as s,l as d,j as o}from"./iframe-Rw2KdrAu.js";import{f as y}from"./043-Ba2bG-lA.js";import"./preload-helper-PPVm8Dsz.js";const u=s.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,t=e=>e??12,c=s.div.withConfig({shouldForwardProp:e=>e!=="type"&&e!=="size"&&e!=="iconPosition"&&e!=="fontSize"&&e!=="backgroundColor"&&e!=="borderColor"})`
  padding-left: ${({theme:e,fontSize:r})=>e.size.customEm(12,t(r))};
  padding-right: ${({theme:e,fontSize:r})=>e.size.customEm(12,t(r))};
  background-color: ${({backgroundColor:e})=>e??"#000"};
  border: 1px solid ${({borderColor:e})=>e??"#000"};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e,fontSize:r})=>e.size.customEm(2,t(r))};

  ${({type:e,theme:r,fontSize:a})=>{switch(e){case"001":return d`
          border-radius: 0;
        `;case"002":return d`
          border-radius: ${r.size.customEm(5,t(a))};
        `;case"003":return d`
          border-radius: ${r.size.customEm(21,t(a))};
        `;default:return d`
          border-radius: 0;
        `}}}

  ${({size:e,theme:r,fontSize:a})=>{switch(e){case"small":return d`
          padding-top: ${r.size.customEm(5,t(a))};
          padding-bottom: ${r.size.customEm(5,t(a))};
        `;case"middle":return d`
          padding-top: ${r.size.customEm(10,t(a))};
          padding-bottom: ${r.size.customEm(10,t(a))};
        `;case"large":return d`
          padding-top: ${r.size.customEm(15,t(a))};
          padding-bottom: ${r.size.customEm(15,t(a))};
        `;default:return d`
          padding-top: ${r.size.customEm(10,t(a))};
          padding-bottom: ${r.size.customEm(10,t(a))};
        `}}}
`,m=s.div.withConfig({shouldForwardProp:e=>e!=="iconPosition"&&e!=="color"&&e!=="size"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({color:e})=>e??"#fff"};

  ${({theme:e,size:r})=>e.icon.size.style(r)}

  ${({iconPosition:e})=>{switch(e){case"left":return d`
          order: 1;
        `;case"right":return d`
          order: 2;
        `;default:return d`
          order: 1;
        `}}}
`,p=s.div.withConfig({shouldForwardProp:e=>e!=="iconPosition"&&e!=="fontSize"&&e!=="color"})`
  color: ${({color:e})=>e??"#fff"};
  font-size: ${({theme:e,fontSize:r})=>e.size.em(t(r))};
  line-height: 1;

  ${({iconPosition:e})=>{switch(e){case"left":return d`
          order: 2;
        `;case"right":return d`
          order: 1;
        `;default:return d`
          order: 2;
        `}}}
`;try{u.displayName="StyledLabelWrapper",u.__docgenInfo={description:"",displayName:"StyledLabelWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledLabel",c.__docgenInfo={description:"",displayName:"StyledLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledLabelIcon",m.__docgenInfo={description:"",displayName:"StyledLabelIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledLabelText",p.__docgenInfo={description:"",displayName:"StyledLabelText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const n=({type:e="001",size:r="middle",iconPosition:a="left",icon:f,children:g,style:l})=>o.jsx(u,{children:o.jsxs(c,{type:e,size:r,iconPosition:a,fontSize:l?.fontSize,backgroundColor:l?.backgroundColor,borderColor:l?.borderColor,children:[o.jsx(m,{iconPosition:a,color:l?.iconColor,size:r,children:f}),o.jsx(p,{iconPosition:a,fontSize:l?.fontSize,color:l?.color,children:g})]})});try{n.displayName="Label002",n.__docgenInfo={description:"",displayName:"Label002",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'},{value:'"003"'}]}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; backgroundColor?: string; borderColor?: string | undefined; color?: string | undefined; iconColor?: string | undefined; } | undefined"}}}}}catch{}const $={title:"Basic/Label/Product002",component:n,tags:["autodocs"]},b=e=>o.jsx("div",{style:{padding:"20px"},children:o.jsx(n,{...e})}),i=b.bind({});i.args={type:"001",size:"middle",iconPosition:"left",icon:o.jsx(y,{}),children:"ラベル"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px"
}}>
    <Label002 {...args} />
  </div>`,...i.parameters?.docs?.source}}};const z=["Default"];export{i as Default,z as __namedExportsOrder,$ as default};
