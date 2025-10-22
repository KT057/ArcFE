import{d,l as t,j as a}from"./iframe-Rw2KdrAu.js";const l=d.span`
  ${({theme:r})=>r.font.baseSize.em()};

  display: block;
`,n=d.div.withConfig({shouldForwardProp:r=>r!=="backgroundColor"&&r!=="type"&&r!=="borderColor"&&r!=="borderWidth"})`
  max-width: 100%;
  width: fit-content;
  position: relative;
  display: block;
  word-break: break-all;
  background-color: ${({backgroundColor:r})=>r};
  border: ${({theme:r,borderWidth:o})=>r.size.em(o)} solid ${({borderColor:r})=>r};
  padding: ${({theme:r})=>r.size.em(8)};

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    background-color: ${({backgroundColor:r})=>r};
    z-index: 1;
  }

  &::after {
    background-color: ${({borderColor:r})=>r};
    z-index: 0;
  }

  ${({type:r})=>{switch(r){case"001":return t`
          border-radius: 0;
        `;case"002":return t`
          border-radius: ${({theme:o})=>o.size.em(8)};
        `}}}

  ${({arrowPosition:r,borderWidth:o})=>{switch(r){case"bottom":return t`
          &::before,
          &::after {
            left: 50%;
            transform: translateX(-50%);
            bottom: ${({theme:e})=>e.size.em(-15)};
            width: ${({theme:e})=>e.size.em(30)};
            height: ${({theme:e})=>e.size.em(15)};
            clip-path: polygon(0 0, 100% 0, 50% 100%);
          }

          &::before {
            bottom: ${({theme:e})=>e.size.em(-15+o)};
          }
        `;case"top":return t`
          &::before,
          &::after {
            left: 50%;
            transform: translateX(-50%);
            top: ${({theme:e})=>e.size.em(-15)};
            width: ${({theme:e})=>e.size.em(30)};
            height: ${({theme:e})=>e.size.em(15)};
            clip-path: polygon(50% 0, 0 100%, 100% 100%);
          }

          &::before {
            top: ${({theme:e})=>e.size.em(-15+o)};
          }
        `;case"left":return t`
          &::before,
          &::after {
            left: ${({theme:e})=>e.size.em(-15)};
            transform: translateY(-50%);
            top: 50%;
            width: ${({theme:e})=>e.size.em(15)};
            height: ${({theme:e})=>e.size.em(30)};
            clip-path: polygon(0 50%, 100% 0, 100% 100%);
          }

          &::before {
            left: ${({theme:e})=>e.size.em(-15+o)};
          }
        `;case"right":return t`
          &::before,
          &::after {
            right: ${({theme:e})=>e.size.em(-15)};
            transform: translateY(-50%);
            top: 50%;
            width: ${({theme:e})=>e.size.em(15)};
            height: ${({theme:e})=>e.size.em(30)};
            clip-path: polygon(0 0, 100% 50%, 0 100%);
          }

          &::before {
            right: ${({theme:e})=>e.size.em(-15+o)};
          }
        `}}}
`,i=d.div.withConfig({shouldForwardProp:r=>r!=="fontSize"&&r!=="color"})`
  display: block;
  font-size: ${({theme:r,fontSize:o})=>r.size.em(o)};
  color: ${({color:r})=>r};
`;try{l.displayName="StyledBalloonWrapper",l.__docgenInfo={description:"",displayName:"StyledBalloonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="StyledBalloon",n.__docgenInfo={description:"",displayName:"StyledBalloon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledBalloonContent",i.__docgenInfo={description:"",displayName:"StyledBalloonContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const s=({type:r="001",children:o,style:e,arrowPosition:u})=>a.jsx(l,{children:a.jsx(n,{type:r,borderColor:e?.borderColor??"#000",borderWidth:e?.borderWidth??1,arrowPosition:u??"bottom",backgroundColor:e?.backgroundColor??"#fff",children:a.jsx(i,{fontSize:e?.fontSize??16,color:e?.color??"#000",children:o})})});try{s.displayName="Balloon002",s.__docgenInfo={description:"",displayName:"Balloon002",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'}]}},arrowPosition:{defaultValue:null,description:"",name:"arrowPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ backgroundColor?: string; borderColor?: string; borderWidth?: number | undefined; color?: string | undefined; fontSize?: number | undefined; } | undefined"}}}}}catch{}export{s as B};
