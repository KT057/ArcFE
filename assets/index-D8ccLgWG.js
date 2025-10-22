import{d,l as a,j as t}from"./iframe-H3qRDz1v.js";const l=d.div`
  ${({theme:e})=>e.font.baseSize.em()}
`,i=d.div.withConfig({shouldForwardProp:e=>e!=="size"})`
  position: relative;

  ${({size:e})=>{switch(e){case"small":return a`
          width: ${({theme:r})=>r.size.em(30)};
          height: ${({theme:r})=>r.size.em(30)};
        `;case"middle":return a`
          width: ${({theme:r})=>r.size.em(35)};
          height: ${({theme:r})=>r.size.em(35)};
        `;case"large":return a`
          width: ${({theme:r})=>r.size.em(40)};
          height: ${({theme:r})=>r.size.em(40)};
        `;default:return a`
          width: ${({theme:r})=>r.size.em(30)};
          height: ${({theme:r})=>r.size.em(30)};
        `}}}
`,n=d.div.withConfig({shouldForwardProp:e=>e!=="backgroundColor"&&e!=="borderColor"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({backgroundColor:e})=>e};
  border: 1px solid ${({borderColor:e})=>e};
  z-index: 0;

  ${({type:e})=>{switch(e){case"001":return a`
          border-radius: 50%;
        `;case"002":return a`
          border-radius: 0;
        `;case"003":return a`
          border-radius: ${({theme:r})=>r.size.em(4)};
        `;default:return a`
          border-radius: 50%;
        `}}}
`,o=d.div.withConfig({shouldForwardProp:e=>e!=="color"&&e!=="size"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: ${({color:e})=>e};

  ${({size:e})=>{switch(e){case"small":return a`
          font-size: ${({theme:r})=>r.size.em(14)};
        `;case"middle":return a`
          font-size: ${({theme:r})=>r.size.em(18)};
        `;case"large":return a`
          font-size: ${({theme:r})=>r.size.em(24)};
        `;default:return a`
          font-size: ${({theme:r})=>r.size.em(14)};
        `}}}
`;try{l.displayName="StyledFrameNumberWrapper",l.__docgenInfo={description:"",displayName:"StyledFrameNumberWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledFrameNumber",i.__docgenInfo={description:"",displayName:"StyledFrameNumber",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="StyledFrameNumberBackground",n.__docgenInfo={description:"",displayName:"StyledFrameNumberBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledFrameNumberInner",o.__docgenInfo={description:"",displayName:"StyledFrameNumberInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const u=({style:e,type:r,size:s,number:m})=>t.jsx(l,{children:t.jsxs(i,{size:s,children:[t.jsx(n,{type:r,backgroundColor:e?.backgroundColor??"#fff",borderColor:e?.borderColor??"#000"}),t.jsx(o,{color:e?.color??"#000",size:s,children:m})]})});try{u.displayName="FrameNumber001",u.__docgenInfo={description:"",displayName:"FrameNumber001",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'},{value:'"003"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ backgroundColor?: string; color?: string; borderColor?: string | undefined; } | undefined"}}}}}catch{}export{u as F};
