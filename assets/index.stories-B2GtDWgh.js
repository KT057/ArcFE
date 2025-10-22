import{r as f,d as V,l as c,j as t}from"./iframe-Rw2KdrAu.js";import{b as N}from"./043-Ba2bG-lA.js";import"./preload-helper-PPVm8Dsz.js";const I=({currentPage:e,totalPages:a,maxVisiblePages:n,onPageChange:p})=>{const l=f.useMemo(()=>{if(a<=n)return Array.from({length:a},(g,R)=>R+1).filter(g=>g!==1&&g!==a);const u=Math.floor(n/2);let i=Math.max(1,e-u),s=Math.min(a,i+n-1);s-i+1<n&&(i=Math.max(1,s-n+1));const B=[];for(let g=i;g<=s;g++)g===1||g===a||B.push(g);return B},[a,n,e]),r=f.useMemo(()=>l[0]>2,[l]),A=f.useMemo(()=>l[l.length-1]<a-1,[l,a]),q=f.useCallback(u=>{u>=1&&u<=a&&u!==e&&p(u)},[a,e,p]);return{visiblePages:l,showStartEllipsis:r,showEndEllipsis:A,handlePageClick:q}},T=V.div`
  ${({theme:e})=>e.font.baseSize.em()};
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.size.em(8)};
  flex-wrap: wrap;
`,d=V.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,m=V.button.withConfig({shouldForwardProp:e=>e!=="isActive"&&e!=="size"&&e!=="activeBackgroundColor"&&e!=="backgroundColor"&&e!=="borderColor"&&e!=="borderRadius"})`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${({borderColor:e})=>e??"#e2e8f0"};
  border-radius: ${({borderRadius:e})=>e??8}px;
  background-color: ${({isActive:e,activeBackgroundColor:a,backgroundColor:n})=>e?a??"#2563eb":n??"#ffffff"};
  position: relative;
  overflow: hidden;

  ${({size:e,theme:a})=>{switch(e){case"small":return c`
          min-width: ${a.size.em(32)};
          height: ${a.size.em(32)};
          padding: ${a.size.em(6)} ${a.size.em(8)};
        `;case"middle":return c`
          min-width: ${a.size.em(40)};
          height: ${a.size.em(40)};
          padding: ${a.size.em(8)} ${a.size.em(12)};
        `;default:return c`
          min-width: ${a.size.em(48)};
          height: ${a.size.em(48)};
          padding: ${a.size.em(12)} ${a.size.em(16)};
        `}}}

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,P=V.span.withConfig({shouldForwardProp:e=>e!=="isActive"&&e!=="size"&&e!=="activeColor"&&e!=="color"&&e!=="fontWeight"})`
  display: block;
  font-weight: ${({fontWeight:e})=>e??500};
  color: ${({isActive:e,activeColor:a,color:n})=>e?a??"#ffffff":n??"#374151"};
  line-height: 1;
  position: relative;
  z-index: 1;

  ${({size:e,theme:a})=>{switch(e){case"small":return c`font-size: ${a.size.em(12)};`;case"middle":return c`font-size: ${a.size.em(14)};`;default:return c`font-size: ${a.size.em(16)};`}}}
`,$=V.span.withConfig({shouldForwardProp:e=>e!=="size"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  position: relative;
  z-index: 1;

  ${({size:e,theme:a})=>{switch(e){case"small":return c`
          width: ${a.size.em(14)};
          height: ${a.size.em(14)};
        `;case"middle":return c`
          width: ${a.size.em(16)};
          height: ${a.size.em(16)};
        `;default:return c`
          width: ${a.size.em(18)};
          height: ${a.size.em(18)};
        `}}}
`;try{T.displayName="StyledPagination",T.__docgenInfo={description:"",displayName:"StyledPagination",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="StyledPaginationItem",d.__docgenInfo={description:"",displayName:"StyledPaginationItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledPaginationButton",m.__docgenInfo={description:"",displayName:"StyledPaginationButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{P.displayName="StyledPaginationText",P.__docgenInfo={description:"",displayName:"StyledPaginationText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{$.displayName="StyledPaginationIcon",$.__docgenInfo={description:"",displayName:"StyledPaginationIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const W=({currentPage:e,totalPages:a,size:n="middle",maxVisiblePages:p=5,onPageChange:l,style:r})=>{const{visiblePages:A,showStartEllipsis:q,showEndEllipsis:u,handlePageClick:i}=I({currentPage:e,totalPages:a,maxVisiblePages:p,onPageChange:l});return t.jsxs(T,{children:[e>1&&t.jsx(d,{children:t.jsx(m,{onClick:()=>i(e-1),size:n,isActive:e===1,activeBackgroundColor:r?.activeBackgroundColor,backgroundColor:r?.backgroundColor,borderColor:r?.borderColor,borderRadius:r?.borderRadius,children:t.jsx($,{size:n,children:t.jsx(N,{style:{transform:"rotate(180deg)"}})})})}),t.jsx(d,{children:t.jsx(m,{onClick:()=>i(1),size:n,isActive:e===1,activeBackgroundColor:r?.activeBackgroundColor,backgroundColor:r?.backgroundColor,borderColor:r?.borderColor,borderRadius:r?.borderRadius,children:t.jsx(P,{size:n,activeColor:r?.activeColor,color:r?.color,fontWeight:r?.fontWeight,isActive:e===1,children:"1"})})}),q&&t.jsx(d,{children:t.jsx(P,{size:n,activeColor:r?.activeColor,color:r?.color,fontWeight:r?.fontWeight,isActive:!1,children:"..."})}),A.map(s=>t.jsx(d,{children:t.jsx(m,{onClick:()=>i(s),isActive:s===e,size:n,activeBackgroundColor:r?.activeBackgroundColor,backgroundColor:r?.backgroundColor,borderColor:r?.borderColor,borderRadius:r?.borderRadius,children:t.jsx(P,{size:n,isActive:s===e,activeColor:r?.activeColor,color:r?.color,fontWeight:r?.fontWeight,children:s})})},s)),u&&t.jsx(d,{children:t.jsx(P,{size:n,activeColor:r?.activeColor,color:r?.color,fontWeight:r?.fontWeight,isActive:!1,children:"..."})}),a>1&&t.jsx(d,{children:t.jsx(m,{activeBackgroundColor:r?.activeBackgroundColor,backgroundColor:r?.backgroundColor,borderColor:r?.borderColor,onClick:()=>i(a),size:n,isActive:e===a,borderRadius:r?.borderRadius,children:t.jsx(P,{activeColor:r?.activeColor,color:r?.color,fontWeight:r?.fontWeight,size:n,isActive:e===a,children:a})})}),e<a&&t.jsx(d,{children:t.jsx(m,{activeBackgroundColor:r?.activeBackgroundColor,backgroundColor:r?.backgroundColor,borderColor:r?.borderColor,onClick:()=>i(e+1),size:n,isActive:e===a,borderRadius:r?.borderRadius,children:t.jsx($,{size:n,children:t.jsx(N,{})})})})]})};try{W.displayName="Pagination001",W.__docgenInfo={description:"",displayName:"Pagination001",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},maxVisiblePages:{defaultValue:{value:"5"},description:"",name:"maxVisiblePages",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ backgroundColor?: string; activeBackgroundColor?: string; borderColor?: string | undefined; color?: string | undefined; activeColor?: string | undefined; fontWeight?: number | undefined; borderRadius?: number | undefined; } | undefined"}}}}}catch{}const F={title:"Basic/Pagination/Product001",component:W,tags:["autodocs"]},o=e=>{const[a,n]=f.useState(e.currentPage||1);return t.jsx("div",{style:{padding:"20px",display:"flex",justifyContent:"center"},children:t.jsx(W,{...e,currentPage:a,onPageChange:p=>{n(p),e.onPageChange?.(p)}})})},C=o.bind({});C.args={currentPage:1,totalPages:10,size:"middle",maxVisiblePages:5,onPageChange:e=>console.log("Page changed to:",e)};const h=o.bind({});h.args={currentPage:5,totalPages:20,size:"large",maxVisiblePages:7,onPageChange:e=>console.log("Page changed to:",e)};const v=o.bind({});v.args={currentPage:2,totalPages:5,size:"small",maxVisiblePages:5,onPageChange:e=>console.log("Page changed to:",e)};const b=o.bind({});b.args={currentPage:5,totalPages:15,size:"middle",maxVisiblePages:5,onPageChange:e=>console.log("Page changed to:",e)};const y=o.bind({});y.args={currentPage:3,totalPages:8,size:"middle",maxVisiblePages:5,onPageChange:e=>console.log("Page changed to:",e)};const x=o.bind({});x.args={currentPage:2,totalPages:3,size:"middle",maxVisiblePages:3,onPageChange:e=>console.log("Page changed to:",e)};const _=o.bind({});_.args={currentPage:3,totalPages:10,size:"middle",maxVisiblePages:5,style:{backgroundColor:"#f8fafc",activeBackgroundColor:"red",borderColor:"#e2e8f0",color:"#475569",activeColor:"#ffffff",fontWeight:600},onPageChange:e=>console.log("Page changed to:",e)};const S=o.bind({});S.args={currentPage:4,totalPages:12,size:"middle",maxVisiblePages:5,style:{backgroundColor:"#374151",activeBackgroundColor:"#10b981",borderColor:"#6b7280",color:"#f9fafb",activeColor:"#ffffff",fontWeight:500},onPageChange:e=>console.log("Page changed to:",e)};const j=o.bind({});j.args={currentPage:25,totalPages:100,size:"middle",maxVisiblePages:5,onPageChange:e=>console.log("Page changed to:",e)};const k=o.bind({});k.args={currentPage:1,totalPages:1,size:"middle",maxVisiblePages:5,onPageChange:e=>console.log("Page changed to:",e)};const w=o.bind({});w.args={currentPage:1,totalPages:15,size:"middle",maxVisiblePages:5,onPageChange:e=>console.log("Page changed to:",e)};const z=o.bind({});z.args={currentPage:15,totalPages:15,size:"middle",maxVisiblePages:5,onPageChange:e=>console.log("Page changed to:",e)};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <div style={{
    padding: "20px",
    display: "flex",
    justifyContent: "center"
  }}>
      <Pagination001 {...args} currentPage={currentPage} onPageChange={page => {
      setCurrentPage(page);
      args.onPageChange?.(page);
    }} />
    </div>;
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <div style={{
    padding: "20px",
    display: "flex",
    justifyContent: "center"
  }}>
      <Pagination001 {...args} currentPage={currentPage} onPageChange={page => {
      setCurrentPage(page);
      args.onPageChange?.(page);
    }} />
    </div>;
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <div style={{
    padding: "20px",
    display: "flex",
    justifyContent: "center"
  }}>
      <Pagination001 {...args} currentPage={currentPage} onPageChange={page => {
      setCurrentPage(page);
      args.onPageChange?.(page);
    }} />
    </div>;
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <div style={{
    padding: "20px",
    display: "flex",
    justifyContent: "center"
  }}>
      <Pagination001 {...args} currentPage={currentPage} onPageChange={page => {
      setCurrentPage(page);
      args.onPageChange?.(page);
    }} />
    </div>;
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <div style={{
    padding: "20px",
    display: "flex",
    justifyContent: "center"
  }}>
      <Pagination001 {...args} currentPage={currentPage} onPageChange={page => {
      setCurrentPage(page);
      args.onPageChange?.(page);
    }} />
    </div>;
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <div style={{
    padding: "20px",
    display: "flex",
    justifyContent: "center"
  }}>
      <Pagination001 {...args} currentPage={currentPage} onPageChange={page => {
      setCurrentPage(page);
      args.onPageChange?.(page);
    }} />
    </div>;
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <div style={{
    padding: "20px",
    display: "flex",
    justifyContent: "center"
  }}>
      <Pagination001 {...args} currentPage={currentPage} onPageChange={page => {
      setCurrentPage(page);
      args.onPageChange?.(page);
    }} />
    </div>;
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <div style={{
    padding: "20px",
    display: "flex",
    justifyContent: "center"
  }}>
      <Pagination001 {...args} currentPage={currentPage} onPageChange={page => {
      setCurrentPage(page);
      args.onPageChange?.(page);
    }} />
    </div>;
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <div style={{
    padding: "20px",
    display: "flex",
    justifyContent: "center"
  }}>
      <Pagination001 {...args} currentPage={currentPage} onPageChange={page => {
      setCurrentPage(page);
      args.onPageChange?.(page);
    }} />
    </div>;
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <div style={{
    padding: "20px",
    display: "flex",
    justifyContent: "center"
  }}>
      <Pagination001 {...args} currentPage={currentPage} onPageChange={page => {
      setCurrentPage(page);
      args.onPageChange?.(page);
    }} />
    </div>;
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <div style={{
    padding: "20px",
    display: "flex",
    justifyContent: "center"
  }}>
      <Pagination001 {...args} currentPage={currentPage} onPageChange={page => {
      setCurrentPage(page);
      args.onPageChange?.(page);
    }} />
    </div>;
}`,...w.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <div style={{
    padding: "20px",
    display: "flex",
    justifyContent: "center"
  }}>
      <Pagination001 {...args} currentPage={currentPage} onPageChange={page => {
      setCurrentPage(page);
      args.onPageChange?.(page);
    }} />
    </div>;
}`,...z.parameters?.docs?.source}}};const L=["Default","LargePagination","SmallPagination","WithoutFirstLast","WithoutPrevNext","MinimalPagination","CustomColors","DarkTheme","ManyPages","SinglePage","FirstPage","LastPage"];export{_ as CustomColors,S as DarkTheme,C as Default,w as FirstPage,h as LargePagination,z as LastPage,j as ManyPages,x as MinimalPagination,k as SinglePage,v as SmallPagination,b as WithoutFirstLast,y as WithoutPrevNext,L as __namedExportsOrder,F as default};
