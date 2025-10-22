import{d as l,l as t,j as o}from"./iframe-Rw2KdrAu.js";const n=l.span`
  ${({theme:e})=>e.font.baseSize.em()};

  display: block;
`,d=l.div.withConfig({shouldForwardProp:e=>e!=="backgroundColor"&&e!=="type"})`
  max-width: 100%;
  width: fit-content;
  position: relative;
  display: block;
  word-break: break-all;
  background-color: ${({backgroundColor:e})=>e};
  padding: ${({theme:e})=>e.size.em(8)};

  ${({type:e})=>{switch(e){case"001":return t`
          border-radius: 0;
        `;case"002":return t`
          border-radius: ${({theme:a})=>a.size.em(8)};
        `}}}
`,i=l.div.withConfig({shouldForwardProp:e=>e!=="fontSize"&&e!=="color"})`
  display: block;
  font-size: ${({theme:e,fontSize:a})=>e.size.em(a)};
  color: ${({color:e})=>e};
`,s=l.div.withConfig({shouldForwardProp:e=>e!=="arrowPosition"&&e!=="backgroundColor"})`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;

  ${({arrowPosition:e,backgroundColor:a})=>{switch(e){case"bottom":return t`
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: ${({theme:r})=>r.size.em(8)} ${({theme:r})=>r.size.em(8)} 0;
          border-color: ${a} transparent transparent transparent;
        `;case"top":return t`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 0 ${({theme:r})=>r.size.em(8)} ${({theme:r})=>r.size.em(8)};
          border-color: transparent transparent ${a};
        `;case"left":return t`
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: ${({theme:r})=>r.size.em(8)} ${({theme:r})=>r.size.em(8)} ${({theme:r})=>r.size.em(8)} 0;
          border-color: transparent ${a} transparent transparent;
        `;case"right":return t`
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: ${({theme:r})=>r.size.em(8)} 0 ${({theme:r})=>r.size.em(8)} ${({theme:r})=>r.size.em(8)};
          border-color: transparent transparent transparent ${a};
        `}}}
`;try{n.displayName="StyledBalloonWrapper",n.__docgenInfo={description:"",displayName:"StyledBalloonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="StyledBalloon",d.__docgenInfo={description:"",displayName:"StyledBalloon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledBalloonContent",i.__docgenInfo={description:"",displayName:"StyledBalloonContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledBalloonArrow",s.__docgenInfo={description:"",displayName:"StyledBalloonArrow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const p=({type:e="001",children:a,style:r,arrowPosition:u})=>o.jsx(n,{children:o.jsxs(d,{type:e,backgroundColor:r?.backgroundColor??"#ccc",children:[o.jsx(i,{fontSize:r?.fontSize??16,color:r?.color??"#000",children:a}),o.jsx(s,{arrowPosition:u??"bottom",backgroundColor:r?.backgroundColor??"#ccc"})]})});try{p.displayName="Balloon001",p.__docgenInfo={description:"",displayName:"Balloon001",props:{type:{defaultValue:{value:"001"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"001"'},{value:'"002"'}]}},arrowPosition:{defaultValue:null,description:"",name:"arrowPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ backgroundColor?: string; color?: string; fontSize?: number | undefined; } | undefined"}}}}}catch{}export{p as B};
