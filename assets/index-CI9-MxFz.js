import{d as i,l as a,j as n}from"./iframe-Rw2KdrAu.js";const l=i.span`
  ${({theme:e})=>e.font.baseSize.em()};

  display: block;
`,d=i.span.withConfig({shouldForwardProp:e=>e!=="type"&&e!=="backgroundColor"&&e!=="borderColor"&&e!=="animation"&&e!=="size"})`
  width: 100%;
  text-align: center;
  cursor: pointer;
  display: block;
  background-color: ${({backgroundColor:e})=>e};
  position: relative;
  overflow: hidden;
  border: 1px solid ${({borderColor:e})=>e};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({backgroundColor:e})=>e};
    z-index: 0;
  }

  ${({type:e,theme:r})=>{switch(e){case"001":return a`border-radius: ${r.size.em(30)};`;case"002":return a`border-radius: ${r.size.em(8)};`;default:return a`border-radius: 0;`}}}

  ${({size:e,theme:r})=>{switch(e){case"small":return a`padding: ${r.size.em(7)} ${r.size.em(13)};`;case"middle":return a`padding: ${r.size.em(15)} ${r.size.em(28)};`;default:return a`padding: ${r.size.em(25)} ${r.size.em(45)};`}}}

  ${({animation:e,theme:r})=>{switch(e?.type??"001"){case"001":return a`
          &::after {
            transition: background-color ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeInOutCubic"]};
          }

          ${t} {
            transition: color ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeInOutCubic"]};
          }

          &:hover {
            ${t} {
              color: ${e?.textColor??"#fff"};
            }

            &::after {
              background-color: ${e?.backgroundColor??"#000"};
            }
          }
        `;case"002":return a`
          &::after {
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeOutCubic"]};
            background-color: ${e?.backgroundColor??"#fff"};
          }

          ${t} {
            transition: color ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeOutCubic"]};
          }

          &:hover {
            ${t} {
              color: ${e?.textColor??"#fff"};
            }

            &::after {
              transform: scaleX(1);
              transform-origin: bottom left;
            }
          }
        `}}}
`,t=i.span`
  ${({size:e,theme:r})=>{switch(e){case"small":return a`font-size: ${r.size.em(12)};`;case"middle":return a`font-size: ${r.size.em(16)};`;default:return a`font-size: ${r.size.em(18)};`}}}

  display: block;
  font-weight: ${({fontWeight:e})=>e};
  color: ${({color:e})=>e};
  position: relative;
  z-index: 1;
`;try{l.displayName="StyledButtonWrapper",l.__docgenInfo={description:"",displayName:"StyledButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="StyledButton",d.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{t.displayName="StyledText",t.__docgenInfo={description:"",displayName:"StyledText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const u=({type:e="001",size:r="middle",animation:c,onClick:f,children:p,href:s,style:o})=>n.jsx(l,{children:n.jsx(d,{as:s?"a":"button",href:s,type:e,size:r,onClick:f,animation:c,backgroundColor:o?.backgroundColor??"#fff",borderColor:o?.borderColor??"#000",children:n.jsx(t,{size:r,color:o?.color??"#000",fontWeight:o?.fontWeight??700,children:p})})});try{u.displayName="Button001",u.__docgenInfo={description:"",displayName:"Button001",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'},{value:'"003"'}]}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"Animation"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ backgroundColor?: string; borderColor?: string; color?: string | undefined; fontWeight?: number | undefined; } | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{u as B};
