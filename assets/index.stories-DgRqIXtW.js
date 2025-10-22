import{d,r as v,j as t}from"./iframe-H3qRDz1v.js";import{c as g}from"./043-Dx6gVrpV.js";import"./preload-helper-PPVm8Dsz.js";const l=d.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,p=d.div.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="lineHeight"})`
  height: calc(${({theme:e,fontSize:a})=>e.size.em(a??24)} * ${({lineHeight:e})=>e??1.25});
  position: relative;
`,c=d.div.withConfig({shouldForwardProp:e=>e!=="isOpen"&&e!=="iconColor"})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) rotate(${({isOpen:e})=>e?"180deg":"0deg"});
  transition: transform 0.3s ease;
  color: ${({iconColor:e})=>e??"#000"};

  ${({theme:e})=>e.icon.size.style("large")}
`,m=d.div.withConfig({shouldForwardProp:e=>e!=="gap"})`
  width: 100%;
  padding-left: ${({theme:e,gap:a})=>e.size.em(a??34)};
`,u=d.div.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="lineHeight"&&e!=="color"})`
  display: block;
  color: ${({color:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:a})=>e.size.em(a??24)};
  overflow-wrap: break-word;
  line-height: ${({lineHeight:e})=>e??1.25};
`,f=d.div`
  cursor: pointer;
  display: flex;
  justify-content: left;
`;try{l.displayName="StyledNestedListItemWrapper",l.__docgenInfo={description:"",displayName:"StyledNestedListItemWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledNestedListItemIconWrapper",p.__docgenInfo={description:"",displayName:"StyledNestedListItemIconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledNestedListItemIcon",c.__docgenInfo={description:"",displayName:"StyledNestedListItemIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledNestedListItemTextWrapper",m.__docgenInfo={description:"",displayName:"StyledNestedListItemTextWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledNestedListItemText",u.__docgenInfo={description:"",displayName:"StyledNestedListItemText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledNestedListItem",f.__docgenInfo={description:"",displayName:"StyledNestedListItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const o=({icon:e,children:a,onClick:h,isOpen:n,style:r})=>{const[y,N]=v.useState(n??!1),I=n!==void 0?n:y,S=()=>{n===void 0&&N(!y),h?.()};return t.jsx(l,{children:t.jsxs(f,{onClick:S,children:[t.jsx(p,{fontSize:r?.fontSize,lineHeight:r?.lineHeight,children:t.jsx(c,{isOpen:I,iconColor:r?.iconColor,children:e})}),t.jsx(m,{gap:r?.gap,children:t.jsx(u,{fontSize:r?.fontSize,lineHeight:r?.lineHeight,color:r?.color,children:a})})]})})};try{o.displayName="NestedListItem001",o.__docgenInfo={description:"",displayName:"NestedListItem001",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; lineHeight?: number; color?: string | undefined; gap?: number | undefined; iconColor?: string | undefined; } | undefined"}}}}}catch{}const L={title:"Basic/NestedListItem/Product001",component:o,tags:["autodocs"]},_=e=>t.jsx("div",{style:{padding:"20px"},children:t.jsx(o,{...e})}),i=_.bind({});i.args={icon:t.jsx(g,{}),children:"ネストリストアイテムのテキストです。クリックするとアイコンが回転します。"};const s=_.bind({});s.args={icon:t.jsx(g,{}),children:"制御されたオープン状態のネストリストアイテムです。",isOpen:!0};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px"
}}>
    <NestedListItem001 {...args} />
  </div>`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px"
}}>
    <NestedListItem001 {...args} />
  </div>`,...s.parameters?.docs?.source}}};const b=["Default","Controlled"];export{s as Controlled,i as Default,b as __namedExportsOrder,L as default};
