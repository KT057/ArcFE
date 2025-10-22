import{d as r,j as a}from"./iframe-Rw2KdrAu.js";import"./preload-helper-PPVm8Dsz.js";const m=r.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,g=r.div`
  padding: ${({theme:e})=>e.size.em(15)};
  background-color: rgba(204, 204, 204, 1);
  border-radius: ${({theme:e})=>e.size.em(5)};
  cursor: pointer;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
  border: 1px solid #ccc;

  &:hover {
    transform: translateY(${({theme:e})=>e.size.em(-8)});
    background-color: rgba(204, 204, 204, 0);

    .panel-image-overlay {
      opacity: 0;
    }

    .panel-image-text {
      opacity: 0;
    }
  }
`,f=r.div.withConfig({shouldForwardProp:e=>e!=="imageHeight"})`
  width: 100%;
  background-color: #ccc;
  border-radius: ${({theme:e})=>e.size.em(5)};
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: ${({imageHeight:e,theme:i})=>`${i.size.em(e??360)}`};
    opacity: 1;
  }
`,y=r.div`
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: 1;
  transition: opacity 0.3s ease;
`,h=r.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`,_=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,b=r.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 1.5;
  z-index: 2;
  color: #fff;
  padding: ${({theme:e})=>e.size.em(10)};
  font-size: ${({theme:e})=>e.size.em(16)};
  font-weight: 700;
  opacity: 1;
  transition: opacity 0.3s ease;
  margin: 0;
`,x=r.div`
  margin-bottom: ${({theme:e})=>e.size.em(10)};
`,v=r.h2`
  font-size: ${({theme:e})=>e.size.em(16)};
  font-weight: 700;
  margin: 0;
`,T=r.p`
  font-size: ${({theme:e})=>e.size.em(12)};
  line-height: 1.5;
  margin: 0;
`,S=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.size.em(5)};
`,P=r.div`
  display: inline-block;
`;try{m.displayName="StyledPanelWrapper",m.__docgenInfo={description:"",displayName:"StyledPanelWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="StyledPanel",g.__docgenInfo={description:"",displayName:"StyledPanel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledPanelImageWrapper",f.__docgenInfo={description:"",displayName:"StyledPanelImageWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledPanelImageOverlay",y.__docgenInfo={description:"",displayName:"StyledPanelImageOverlay",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="StyledPanelImageContent",h.__docgenInfo={description:"",displayName:"StyledPanelImageContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{_.displayName="StyledPanelImageImage",_.__docgenInfo={description:"",displayName:"StyledPanelImageImage",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{b.displayName="StyledPanelImageText",b.__docgenInfo={description:"",displayName:"StyledPanelImageText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{x.displayName="StyledPanelContent",x.__docgenInfo={description:"",displayName:"StyledPanelContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="StyledPanelContentTitle",v.__docgenInfo={description:"",displayName:"StyledPanelContentTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="StyledPanelContentText",T.__docgenInfo={description:"",displayName:"StyledPanelContentText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledPanelLabelWrapper",S.__docgenInfo={description:"",displayName:"StyledPanelLabelWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{P.displayName="StyledPanelLabel",P.__docgenInfo={description:"",displayName:"StyledPanelLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=({imageSrc:e="./images/img-01.jpg",imageAlt:i="",imageText:q="工業地域に建つ元企業社宅を地域に開いたシェアスペース付き分譲マンションとして再生",title:V="リノア北赤羽",description:W="工業地域に建つ元企業社宅を地域に開いたシェアスペース付き分譲マンションとして再生",labels:j=[],style:w,onClick:A})=>a.jsx(m,{children:a.jsxs(g,{onClick:A,children:[a.jsxs(f,{imageHeight:w?.imageHeight,children:[a.jsx(h,{children:a.jsx(_,{src:e,alt:i})}),a.jsx(y,{className:"panel-image-overlay"}),a.jsx(b,{className:"panel-image-text",children:q})]}),a.jsxs(x,{children:[a.jsx(v,{children:V}),a.jsx(T,{children:W})]}),a.jsx(S,{children:j.map((D,I)=>a.jsx(P,{children:a.jsx(a.Fragment,{children:D})},I))})]})});try{c.displayName="RebitaPanel",c.__docgenInfo={description:"",displayName:"RebitaPanel",props:{imageSrc:{defaultValue:{value:"./images/img-01.jpg"},description:"",name:"imageSrc",required:!1,type:{name:"string"}},imageAlt:{defaultValue:{value:""},description:"",name:"imageAlt",required:!1,type:{name:"string"}},imageText:{defaultValue:{value:"工業地域に建つ元企業社宅を地域に開いたシェアスペース付き分譲マンションとして再生"},description:"",name:"imageText",required:!1,type:{name:"string"}},title:{defaultValue:{value:"リノア北赤羽"},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:"工業地域に建つ元企業社宅を地域に開いたシェアスペース付き分譲マンションとして再生"},description:"",name:"description",required:!1,type:{name:"string"}},labels:{defaultValue:{value:"[]"},description:"",name:"labels",required:!1,type:{name:"ReactNode[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ imageHeight?: number; }"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const F={title:"Advanced/Rebita/Panel",component:c,tags:["autodocs"]},l=e=>a.jsx("div",{style:{padding:"50px",maxWidth:"400px"},children:a.jsx(c,{...e})}),t=({children:e,color:i="#3b82f6"})=>a.jsx("span",{style:{display:"inline-block",padding:"4px 8px",backgroundColor:i,color:"#fff",fontSize:"12px",borderRadius:"4px",fontWeight:"500"},children:e}),n=l.bind({});n.args={};const d=l.bind({});d.args={imageSrc:"/images/img-01.jpg",imageText:"カスタム画像のオーバーレイテキスト",title:"カスタムタイトル",description:"これはカスタムの説明文です。パネルの内容をカスタマイズできます。",labels:[a.jsx(t,{children:"カスタムラベル1"},"1"),a.jsx(t,{color:"#22c55e",children:"カスタムラベル2"},"2"),a.jsx(t,{color:"#f59e0b",children:"カスタムラベル3"},"3")]};const s=l.bind({});s.args={title:"多くのラベルがあるパネル",imageSrc:"/images/img-01.jpg",description:"このパネルには多くのラベルが付いています",imageText:"カスタム画像のオーバーレイテキスト",onClick:()=>alert("パネルがクリックされました!"),labels:[a.jsx(t,{children:"集合住宅"},"1"),a.jsx(t,{children:"既存建物活用"},"2"),a.jsx(t,{children:"多世代交流"},"3"),a.jsx(t,{color:"#22c55e",children:"環境配慮"},"4"),a.jsx(t,{color:"#f59e0b",children:"地域活性化"},"5"),a.jsx(t,{color:"#8b5cf6",children:"コミュニティ"},"6")]};const o=l.bind({});o.args={imageSrc:"/images/img-01.jpg",title:"クリック可能なパネル",description:"このパネルをクリックしてみてください",imageText:"カスタム画像のオーバーレイテキスト",onClick:()=>alert("パネルがクリックされました!"),labels:[a.jsx(t,{children:"クリック可能"},"1")]};const u=l.bind({});u.args={imageText:"カスタム画像のオーバーレイテキスト",imageSrc:"/images/img-01.jpg",title:"ラベルなしパネル",description:"このパネルにはラベルがありません",labels:[]};const p=l.bind({});p.args={imageSrc:"/images/img-01.jpg",imageText:"これは非常に長い画像オーバーレイテキストの例です。長いテキストがどのように表示されるかを確認できます。",title:"非常に長いタイトルの例：工業地域における持続可能な住環境の創造",description:"これは非常に長い説明文の例です。工業地域に建つ元企業社宅を地域に開いたシェアスペース付き分譲マンションとして再生し、多世代が交流できるコミュニティスペースを創出しています。",labels:[a.jsx(t,{children:"長いラベル名の例"},"1"),a.jsx(t,{children:"持続可能性"},"2")]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "400px"
}}>
    <RebitaPanel {...args} />
  </div>`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "400px"
}}>
    <RebitaPanel {...args} />
  </div>`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "400px"
}}>
    <RebitaPanel {...args} />
  </div>`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "400px"
}}>
    <RebitaPanel {...args} />
  </div>`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "400px"
}}>
    <RebitaPanel {...args} />
  </div>`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "50px",
  maxWidth: "400px"
}}>
    <RebitaPanel {...args} />
  </div>`,...p.parameters?.docs?.source}}};const z=["Default","CustomContent","WithManyLabels","Clickable","NoLabels","LongText"];export{o as Clickable,d as CustomContent,n as Default,p as LongText,u as NoLabels,s as WithManyLabels,z as __namedExportsOrder,F as default};
