import{d as a,r as T,j as t}from"./iframe-H3qRDz1v.js";import{c as g,F as h}from"./043-Dx6gVrpV.js";import"./preload-helper-PPVm8Dsz.js";const p=a.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,o=a.div.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="lineHeight"})`
  height: calc(${({theme:e,fontSize:i})=>e.size.em(i??24)} * ${({lineHeight:e})=>e??1.25});
  position: relative;
`,l=a.div.withConfig({shouldForwardProp:e=>e!=="position"&&e!=="isOpen"&&e!=="iconColor"})`
  position: absolute;
  top: 50%;
  ${({position:e})=>e}: 0;
  transform: translateY(-50%) rotate(${({isOpen:e})=>e?"180deg":"0deg"});
  transition: transform 0.3s ease;
  color: ${({iconColor:e})=>e??"#000"};

  ${({theme:e})=>e.icon.size.style("large")}
`,m=a.div`
  width: 100%;
  padding: 0 ${({theme:e})=>e.size.em(24)} 0 ${({theme:e})=>e.size.em(34)};
`,u=a.div.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="lineHeight"&&e!=="color"})`
  display: block;
  color: ${({color:e})=>e??"#000"};
  font-size: ${({theme:e,fontSize:i})=>e.size.em(i??24)};
  overflow-wrap: break-word;
  line-height: ${({lineHeight:e})=>e??1.25};
`,f=a.div`
  cursor: pointer;
  display: flex;
  justify-content: left;
`;try{p.displayName="StyledNestedListItemWrapper",p.__docgenInfo={description:"",displayName:"StyledNestedListItemWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledNestedListItemIconWrapper",o.__docgenInfo={description:"",displayName:"StyledNestedListItemIconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledNestedListItemIcon",l.__docgenInfo={description:"",displayName:"StyledNestedListItemIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledNestedListItemTextWrapper",m.__docgenInfo={description:"",displayName:"StyledNestedListItemTextWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledNestedListItemText",u.__docgenInfo={description:"",displayName:"StyledNestedListItemText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledNestedListItem",f.__docgenInfo={description:"",displayName:"StyledNestedListItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=({leftIcon:e,rightIcon:i,children:I,onClick:N,isOpen:n,style:r})=>{const[y,S]=T.useState(n??!1),v=n!==void 0?n:y,x=()=>{n===void 0&&S(!y),N?.()};return t.jsx(p,{children:t.jsxs(f,{onClick:x,children:[t.jsx(o,{fontSize:r?.fontSize,lineHeight:r?.lineHeight,children:t.jsx(l,{position:"left",isOpen:!1,iconColor:r?.leftIconColor,children:e})}),t.jsx(m,{children:t.jsx(u,{fontSize:r?.fontSize,lineHeight:r?.lineHeight,color:r?.color,children:I})}),t.jsx(o,{fontSize:r?.fontSize,lineHeight:r?.lineHeight,children:t.jsx(l,{position:"right",isOpen:v,iconColor:r?.rightIconColor,children:i})})]})})};try{c.displayName="NestedListItem002",c.__docgenInfo={description:"",displayName:"NestedListItem002",props:{leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!0,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ fontSize?: number; lineHeight?: number; color?: string | undefined; leftIconColor?: string | undefined; rightIconColor?: string | undefined; } | undefined"}}}}}catch{}const w={title:"Basic/NestedListItem/Product002",component:c,tags:["autodocs"]},_=e=>t.jsx("div",{style:{padding:"20px"},children:t.jsx(c,{...e})}),d=_.bind({});d.args={leftIcon:t.jsx(h,{}),rightIcon:t.jsx(g,{}),children:"左右にアイコンがあるネストリストアイテムです。右のアイコンをクリックすると回転します。"};const s=_.bind({});s.args={leftIcon:t.jsx(h,{}),rightIcon:t.jsx(g,{}),children:"制御されたオープン状態のネストリストアイテムです。",isOpen:!0};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px"
}}>
    <NestedListItem002 {...args} />
  </div>`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "20px"
}}>
    <NestedListItem002 {...args} />
  </div>`,...s.parameters?.docs?.source}}};const b=["Default","Controlled"];export{s as Controlled,d as Default,b as __namedExportsOrder,w as default};
