import{d,l as a,m as h,r as C,j as i}from"./iframe-Rw2KdrAu.js";const $=h`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
`,y=h`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`,u=d.span`
  ${({theme:e})=>e.font.baseSize.em()};

  display: block;
  width: 100%;
`,c=d.span.withConfig({shouldForwardProp:e=>e!=="type"&&e!=="backgroundColor"&&e!=="borderColor"&&e!=="animation"&&e!=="size"&&e!=="iconDirection"&&e!=="isHover"})`
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

  ${({type:e,theme:r})=>{switch(e){case"001":case"004":case"007":return a`border-radius: ${r.size.em(30)};`;case"002":case"005":case"008":return a`border-radius: ${r.size.em(8)};`;default:return a`border-radius: 0;`}}}

  ${({type:e,iconDirection:r,theme:n})=>{switch(e){case"001":case"002":case"003":return a`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: ${n.size.em(8)};
          `;case"004":case"005":case"006":return a`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `;case"007":case"008":case"009":return a`
            text-align: center;

            ${s} {
              padding: 0 ${n.size.em(14)};
            }

            ${o} {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              z-index: 1;

              ${r==="left"&&a`
                  left: ${n.size.em(24)};
                `}

              ${r==="right"&&a`
                  right: ${n.size.em(24)};
                `}
            }
          `;default:return a`
          display: flex;
          align-items: center;
          justify-content: center;
          gap: ${n.size.em(8)};
        `}}}

  ${({iconDirection:e})=>{switch(e){case"left":return a`
          flex-direction: row-reverse;
        `;case"right":return a`
          flex-direction: row;
        `}}}

  ${({size:e,theme:r})=>{switch(e){case"small":return a`
          padding: ${r.size.em(7)} ${r.size.em(13)};

          ${o} {
            width: ${r.size.em(r.icon.size.small)};
            height: ${r.size.em(r.icon.size.small)};
          }

          ${s} {
            font-size: ${r.size.em(12)};
          }
        `;case"middle":return a`
          padding: ${r.size.em(15)} ${r.size.em(28)};

          ${o} {
            width: ${r.size.em(r.icon.size.middle)};
            height: ${r.size.em(r.icon.size.middle)};
          }

          ${s} {
            font-size: ${r.size.em(16)};
          }
        `;case"large":return a`
          padding: ${r.size.em(25)} ${r.size.em(45)};

          ${o} {
            width: ${r.size.em(r.icon.size.large)};
            height: ${r.size.em(r.icon.size.large)};
          }

          ${s} {
            font-size: ${r.size.em(18)};
          }
        `;default:return a`
          padding: ${r.size.em(25)} ${r.size.em(45)};
        `}}}

  ${({animation:e,theme:r,isHover:n})=>{switch(e?.type??"001"){case"001":return a`
          &::after {
            transition: background-color ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeInOutCubic"]};
          }

          ${s} {
            transition: color ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeInOutCubic"]};
          }

          ${t} {
            transition: color ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeInOutCubic"]};
          }

          &:hover {
            ${s} {
              color: ${e?.textColor??"#fff"};
            }

            ${t} {
              color: ${e?.textColor??"#fff"};
            }

            &::after {
              background-color: ${e?.backgroundColor??"#000"};
            }
          }
        `;case"002":return a`
          ${t}:nth-child(1) {
            ${n===!0&&a`
                animation: ${$} ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeOutCubic"]} forwards;
              `}

            ${n===!1&&a`
                animation: ${y} ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeOutCubic"]} forwards;
              `}
          }

          ${t}:nth-child(2) {
            ${n===!0&&a`  
                animation: ${y} ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeOutCubic"]} forwards;
              `}

            ${n===!1&&a`
                animation: ${$} ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeOutCubic"]} forwards;
              `}
          }
        `;case"003":return a`
          ${t}:nth-child(1) {
            transform: translateX(-100%);
            transition: transform ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeOutCubic"]};
          }

          ${t}:nth-child(2) {
            transform: translateX(0);
            transition: transform ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeOutCubic"]};
          }

          &:hover {
            ${t}:nth-child(1) {
              transform: translateX(0);
            }

            ${t}:nth-child(2) {
              transform: translateX(100%);
            }
          }
        `;case"004":return a`
            &::after {
              transform: scaleX(0);
              transform-origin: right bottom;
              transition: transform ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeOutCubic"]};
              background-color: ${e?.backgroundColor??"#fff"};
            }

            ${s} {
              transition: color ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeOutCubic"]};
            }

            ${t} {
              transition: color ${e?.duration??.25}s ${r.animation.easing[e?.easing??"easeOutCubic"]};
            }

            &:hover {
              ${s} {
                color: ${e?.textColor??"#fff"};
              }

              ${t} {
                color: ${e?.textColor??"#fff"};
              }

              &::after {
                transform: scaleX(1);
                transform-origin: left bottom;
              }
            }
          `}}}
`,o=d.span`
  display: block;
`,f=d.span`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: block;
`,t=d.span.withConfig({shouldForwardProp:e=>e!=="color"})`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({color:e})=>e};

  &:nth-child(1) {
    transform: translateX(0);
  }

  &:nth-child(2) {
    transform: translateX(100%);
  }
`,s=d.span.withConfig({shouldForwardProp:e=>e!=="size"&&e!=="color"&&e!=="fontWeight"})`
  ${({size:e,theme:r})=>{switch(e){case"small":return a`font-size: ${r.size.em(12)};`;case"middle":return a`font-size: ${r.size.em(16)};`;default:return a`font-size: ${r.size.em(18)};`}}}

  display: block;
  font-weight: ${({fontWeight:e})=>e};
  color: ${({color:e})=>e};
  position: relative;
  z-index: 1;
`;try{u.displayName="StyledButtonWrapper",u.__docgenInfo={description:"",displayName:"StyledButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledButton",c.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledIconWrapper",o.__docgenInfo={description:"",displayName:"StyledIconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="StyledIconInner",f.__docgenInfo={description:"",displayName:"StyledIconInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{t.displayName="StyledIcon",t.__docgenInfo={description:"",displayName:"StyledIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledText",s.__docgenInfo={description:"",displayName:"StyledText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const b=({type:e="001",size:r="middle",animation:n,onClick:_,children:z,style:l,iconDirection:w="right",icon:p,href:m})=>{const[v,g]=C.useState(null);return i.jsx(u,{children:i.jsxs(c,{as:m?"a":"button",href:m,type:e,size:r,onClick:_,animation:n,backgroundColor:l?.backgroundColor??"#fff",borderColor:l?.borderColor??"#000",iconDirection:w,isHover:v,onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[i.jsx(s,{size:r,color:l?.color??"#000",fontWeight:l?.fontWeight??700,children:z}),i.jsx(o,{children:i.jsxs(f,{children:[i.jsx(t,{color:l?.color??"#000",children:p}),i.jsx(t,{color:l?.color??"#000",children:p})]})})]})})};try{b.displayName="Button002",b.__docgenInfo={description:"",displayName:"Button002",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'},{value:'"003"'},{value:'"004"'},{value:'"005"'},{value:'"006"'},{value:'"007"'},{value:'"008"'},{value:'"009"'}]}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"Animation"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ backgroundColor?: string; borderColor?: string; color?: string | undefined; fontWeight?: number | undefined; } | undefined"}},iconDirection:{defaultValue:{value:"right"},description:"",name:"iconDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{b as B};
