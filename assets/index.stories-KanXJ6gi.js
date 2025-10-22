import{d as c,l as t,j as l}from"./iframe-H3qRDz1v.js";import"./preload-helper-PPVm8Dsz.js";const n=c.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,d=e=>e??12,u=c.div.withConfig({shouldForwardProp:e=>e!=="type"&&e!=="size"&&e!=="fontSize"&&e!=="backgroundColor"&&e!=="color"&&e!=="borderColor"})`
  padding-left: ${({theme:e,fontSize:a})=>e.size.customEm(12,d(a))};
  padding-right: ${({theme:e,fontSize:a})=>e.size.customEm(12,d(a))};
  background-color: ${({backgroundColor:e})=>e??"#000"};
  color: ${({color:e})=>e??"#fff"};
  font-size: ${({theme:e,fontSize:a})=>e.size.em(d(a))};
  display: inline-block;
  white-space: nowrap;
  line-height: 1;
  border: 1px solid ${({borderColor:e})=>e??"#000"};

  ${({type:e,theme:a,fontSize:r})=>{switch(e){case"001":return t`
          border-radius: 0;
        `;case"002":return t`
          border-radius: ${a.size.customEm(5,d(r))};
        `;case"003":return t`
          border-radius: ${a.size.customEm(21,d(r))};
        `;default:return t`
          border-radius: 0;
        `}}}

  ${({size:e,theme:a,fontSize:r})=>{switch(e){case"small":return t`
          padding-top: ${a.size.customEm(5,d(r))};
          padding-bottom: ${a.size.customEm(5,d(r))};
        `;case"middle":return t`
          padding-top: ${a.size.customEm(10,d(r))};
          padding-bottom: ${a.size.customEm(10,d(r))};
        `;case"large":return t`
          padding-top: ${a.size.customEm(15,d(r))};
          padding-bottom: ${a.size.customEm(15,d(r))};
        `;default:return t`
          padding-top: ${a.size.customEm(10,d(r))};
          padding-bottom: ${a.size.customEm(10,d(r))};
        `}}}
`;try{n.displayName="StyledLabelWrapper",n.__docgenInfo={description:"",displayName:"StyledLabelWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledLabel",u.__docgenInfo={description:"",displayName:"StyledLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const i=({type:e="001",size:a="middle",children:r,style:s})=>l.jsx(n,{children:l.jsx(u,{type:e,size:a,fontSize:s?.fontSize,backgroundColor:s?.backgroundColor,color:s?.color,borderColor:s?.borderColor,children:r})});try{i.displayName="Label001",i.__docgenInfo={description:"",displayName:"Label001",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'},{value:'"003"'}]}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; backgroundColor?: string; color?: string | undefined; borderColor?: string | undefined; } | undefined"}}}}}catch{}const g={title:"Basic/Label/Product001",component:i,tags:["autodocs"]},m=e=>l.jsx("div",{style:{padding:"20px"},children:l.jsx(i,{...e})}),o=m.bind({});o.args={type:"001",size:"middle",children:"ラベル"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px"
}}>
    <Label001 {...args} />
  </div>`,...o.parameters?.docs?.source}}};const b=["Default"];export{o as Default,b as __namedExportsOrder,g as default};
