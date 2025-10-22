import{d as o,l as a,r as h,j as d}from"./iframe-H3qRDz1v.js";import{f as y}from"./043-Dx6gVrpV.js";const i=o.div`
  ${({theme:e})=>e.font.baseSize.em()};

  display: block;
`,n=o.div.withConfig({shouldForwardProp:e=>e!=="size"})`
  position: relative;
  
  
  ${({size:e,theme:r})=>r.icon.size.style(e)}
`,t=o.div.withConfig({shouldForwardProp:e=>e!=="backgroundColor"&&e!=="borderColor"&&e!=="type"})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({backgroundColor:e})=>e};
  border: 1px solid ${({borderColor:e})=>e};
  z-index: 0;
  box-sizing: border-box;

  ${({type:e})=>{switch(e){case"001":return a`
          border-radius: 0;
        `;case"002":return a`
          border-radius: ${({theme:r})=>r.size.em(4)};
        `;case"003":return a`
          border-radius: 50%;
        `;default:return a`
          border-radius: 0;
        `}}}
`,l=o.div.withConfig({shouldForwardProp:e=>e!=="markColor"})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: none;
  color: ${({markColor:e})=>e};

  ${({size:e})=>{switch(e){case"small":return a`
          width: ${({theme:r})=>r.size.em(r.icon.size.small)};
          height: ${({theme:r})=>r.size.em(r.icon.size.small)};
        `;case"middle":return a`
          width: ${({theme:r})=>r.size.em(r.icon.size.middle)};
          height: ${({theme:r})=>r.size.em(r.icon.size.middle)};
        `;default:return a`
          width: ${({theme:r})=>r.size.em(r.icon.size.middle)};
          height: ${({theme:r})=>r.size.em(r.icon.size.middle)};
        `}}}
`,s=o.input.withConfig({shouldForwardProp:e=>e!=="checked"&&e!=="checkedBackgroundColor"})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
  margin: 0;
  

  &[type="checkbox"]:checked ~ ${t} {
    background-color: ${({checkedBackgroundColor:e})=>e};
  }

  &[type="checkbox"]:checked ~ ${l} {
    display: block;
  }
`;try{i.displayName="StyledCheckBoxWrapper",i.__docgenInfo={description:"",displayName:"StyledCheckBoxWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="StyledCheckBox",n.__docgenInfo={description:"",displayName:"StyledCheckBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{t.displayName="StyledCheckBoxBackground",t.__docgenInfo={description:"",displayName:"StyledCheckBoxBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledCheckBoxCheckmark",l.__docgenInfo={description:"",displayName:"StyledCheckBoxCheckmark",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledCheckBoxInput",s.__docgenInfo={description:"",displayName:"StyledCheckBoxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const p=({style:e,id:r,type:m,size:c})=>{const[u,f]=h.useState(!1);return d.jsx(i,{children:d.jsxs(n,{size:c,children:[d.jsx(s,{id:r,name:r,type:"checkbox",checked:u,checkedBackgroundColor:e?.checkedBackgroundColor??"#000",onClick:()=>f(!u)}),d.jsx(t,{type:m,backgroundColor:e?.backgroundColor??"#fff",borderColor:e?.borderColor??"#000"}),d.jsx(l,{size:c,markColor:e?.markColor??"#000",children:d.jsx(y,{})})]})})};try{p.displayName="CheckBox001",p.__docgenInfo={description:"",displayName:"CheckBox001",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'},{value:'"003"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ backgroundColor?: string; borderColor?: string; checkedBackgroundColor?: string | undefined; markColor?: string | undefined; } | undefined"}}}}}catch{}export{p as C};
