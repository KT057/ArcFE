import{d as o,l as d,j as l}from"./iframe-Rw2KdrAu.js";const i=o.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,s=o.div.withConfig({shouldForwardProp:e=>e!=="type"&&e!=="columnGap"&&e!=="rowGap"})`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  ${({type:e,theme:r,columnGap:a,rowGap:t})=>{switch(e){case"001":case"002":return d`
          flex-direction: column;
          gap: ${r.size.em(a??10)};
        `;case"003":return d`
          gap: ${r.size.em(t??40)};
        `;default:return d`
          flex-direction: column;
          gap: ${r.size.em(a??10)};
        `}}}
`,n=o.div.withConfig({shouldForwardProp:e=>e!=="type"&&e!=="borderColor"})`
  ${({type:e,borderColor:r})=>e==="002"&&d`
      border-bottom: 1px solid ${r??"#000"};
      padding-bottom: ${({theme:a})=>a.size.em(8)};

      &:last-child {
        border-bottom: 0;
      }
    `}
`;try{i.displayName="StyledListWrapper",i.__docgenInfo={description:"",displayName:"StyledListWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledList",s.__docgenInfo={description:"",displayName:"StyledList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="StyledListItem",n.__docgenInfo={description:"",displayName:"StyledListItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const p=({type:e="001",items:r,style:a})=>l.jsx(i,{children:l.jsx(s,{as:"ul",type:e,columnGap:a?.columnGap,rowGap:a?.rowGap,children:r.map(t=>l.jsx(n,{type:e,borderColor:a?.borderColor,children:t.content},t.id))})});try{p.displayName="List001",p.__docgenInfo={description:"",displayName:"List001",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'},{value:'"003"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ListItem[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ columnGap?: number; rowGap?: number; borderColor?: string | undefined; } | undefined"}}}}}catch{}export{p as L};
