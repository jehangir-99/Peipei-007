/*! For license information please see 566.d9add67f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[566],{34849:(C,A,e)=>{e.d(A,{Z:()=>g});e(45779);const g=e.p+"static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg"},32305:(C,A,e)=>{e.d(A,{Z:()=>M});var g=e(92936),t=e(44591),n=e(94284),r=e(72893),E=e(27296),i=e(5068),B=e(45779),a=e(61152),o=e(55752),Q=e(55874),s=e(54703);const I=a.default.div.withConfig({displayName:"AddressInputPanel__InputPanel",componentId:"sc-21a6b818-0"})`
  ${Q.lt};
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({theme:C})=>C.surface1};
  z-index: 1;
  width: 100%;
`,l=a.default.div.withConfig({displayName:"AddressInputPanel__ContainerRow",componentId:"sc-21a6b818-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 1px solid ${({error:C,theme:A})=>C?A.critical:A.surface3};
  transition:
    border-color 300ms ${({error:C})=>C?"step-end":"step-start"},
    color 500ms ${({error:C})=>C?"step-end":"step-start"};
  background-color: ${({theme:C})=>C.surface1};
`,d=a.default.div.withConfig({displayName:"AddressInputPanel__InputContainer",componentId:"sc-21a6b818-2"})`
  flex: 1;
  padding: 1rem;
`,c=a.default.input.withConfig({displayName:"AddressInputPanel__Input",componentId:"sc-21a6b818-3"})`
  font-size: 1.25rem;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({theme:C})=>C.surface1};
  transition: color 300ms ${({error:C})=>C?"step-end":"step-start"};
  color: ${({error:C,theme:A})=>C?A.critical:A.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  ::placeholder {
    color: ${({theme:C})=>C.neutral3};
  }
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:C})=>C.neutral3};
  }
`;function M({id:C,className:A="recipient-address-input",label:e,placeholder:Q,value:M,onChange:Z}){const{chainId:p}=(0,r.m)(),f=(0,a.useTheme)(),{address:h,loading:u,name:x}=(0,E.Z)(M),w=(0,B.useCallback)((C=>{const A=C.target.value.replace(/\s+/g,"");Z(A)}),[Z]),m=Boolean(M.length>0&&!u&&!h);return(0,g.jsx)(I,{id:C,children:(0,g.jsx)(l,{error:m,children:(0,g.jsx)(d,{children:(0,g.jsxs)(t.Tz,{gap:"md",children:[(0,g.jsxs)(n.m0,{children:[(0,g.jsx)(o.Tv.DeprecatedBlack,{color:f.neutral2,fontWeight:535,fontSize:14,children:e??(0,g.jsx)(i.c,{i18nKey:"addressInput.recipient"})}),h&&p&&(0,g.jsxs)(o.dL,{href:(0,s.E)(p,x??h,s.r.ADDRESS),style:{fontSize:"14px"},children:["(",(0,g.jsx)(i.c,{i18nKey:"common.viewOnExplorer"}),")"]})]}),(0,g.jsx)(c,{className:A,type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:Q??(0,i.t)("common.addressOrENS"),error:m,pattern:"^(0x[a-fA-F0-9]{40})$",onChange:w,value:M})]})})})})}},82731:(C,A,e)=>{e.d(A,{SS:()=>s,sq:()=>B,MN:()=>a,RF:()=>o,uO:()=>Q,I8:()=>i});const g=e.p+"static/media/big_unicorn.595c49962d708abbaaec.png",t=e.p+"static/media/noise.3c7efafc83614205bd1a.png",n=e.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var r=e(44591),E=e(61152);const i=(0,E.default)(r.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-b0a52818-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,B=E.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-b0a52818-1"})`
  background: url(${g});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:C})=>C&&"filter: saturate(0)"}
`,a=E.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-b0a52818-2"})`
  background: url(${n});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:C})=>C&&"filter: saturate(0)"}
`,o=E.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-b0a52818-3"})`
  background: url(${t});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,Q=(0,E.default)(r.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-b0a52818-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:C})=>C&&"0.4"};
`,s=E.default.div.withConfig({displayName:"styled__Break",componentId:"sc-b0a52818-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},27296:(C,A,e)=>{e.d(A,{Z:()=>E});var g=e(36145),t=e(27179),n=e(45779),r=e(13446);function E(C){const A=(0,r.UJ)(C),e=(0,t.Z)(A||void 0),E=(0,g.Z)(C);return(0,n.useMemo)((()=>({loading:e.loading||E.loading,address:A||E.address,name:e.ENSName?e.ENSName:!A&&E.address&&C||null})),[E.address,E.loading,C,e.ENSName,e.loading,A])}},87595:(C,A,e)=>{e.r(A),e.d(A,{default:()=>vt});var g=e(92936),t=e(56250),n=e(57852),r=e(72893),E=e(5068),i=e(57221),B=e(61152),a=e(66869),o=e(55752),Q=e(769);const s=B.default.div.withConfig({displayName:"ChainConnectivityWarning__BodyRow",componentId:"sc-e721a933-0"})`
  color: ${({theme:C})=>C.neutral1};
  font-size: 12px;
  font-weight: 485;
  font-size: 14px;
  line-height: 20px;
`,I=(0,B.default)(i.Z).withConfig({displayName:"ChainConnectivityWarning__CautionTriangle",componentId:"sc-e721a933-1"})`
  color: ${({theme:C})=>C.deprecated_accentWarning};
`,l=(0,B.default)(o.dL).withConfig({displayName:"ChainConnectivityWarning__Link",componentId:"sc-e721a933-2"})`
  color: ${({theme:C})=>C.black};
  text-decoration: underline;
`,d=B.default.div.withConfig({displayName:"ChainConnectivityWarning__TitleRow",componentId:"sc-e721a933-3"})`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`,c=B.default.div.withConfig({displayName:"ChainConnectivityWarning__TitleText",componentId:"sc-e721a933-4"})`
  color: ${({theme:C})=>C.neutral1};
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 12px;
`,M=B.default.div.withConfig({displayName:"ChainConnectivityWarning__Wrapper",componentId:"sc-e721a933-5"})`
  background-color: ${({theme:C})=>C.surface1};
  border-radius: 12px;
  border: 1px solid ${({theme:C})=>C.surface3};
  bottom: 60px;
  z-index: 2;
  display: none;
  max-width: 348px;
  padding: 16px 20px;
  position: fixed;
  right: 16px;
  @media screen and (min-width: ${a.e.deprecated_upToMedium}px) {
    display: block;
  }
`;function Z(){const{chainId:C}=(0,r.m)(),A=(0,n.Jw)(C),e=(0,n.zK)({chainId:A,withFallback:!0}),t=e.label;return(0,g.jsxs)(M,{children:[(0,g.jsxs)(d,{children:[(0,g.jsx)(I,{}),(0,g.jsx)(c,{children:(0,g.jsx)(E.c,{i18nKey:"network.warning"})})]}),(0,g.jsxs)(s,{children:[C===Q.UniverseChainId.Mainnet?(0,g.jsx)(E.c,{i18nKey:"network.lostConnection"}):(0,g.jsx)(E.c,{i18nKey:"network.mightBeDown",values:{label:t}})," ",void 0!==e.statusPage&&(0,g.jsxs)("span",{children:[(0,g.jsx)(E.c,{i18nKey:"common.checkNetwork"})," ",(0,g.jsx)(l,{href:e.statusPage||"",children:(0,g.jsx)(E.c,{children:"here."})})]})]})]})}var p=e(94284),f=e(86059),h=e(8545),u=e(15966),x=e(54690),w=e(39406),m=e(45779);const v=C=>{const[A,e]=(0,m.useState)(Date.now());return(0,w.Z)((0,m.useCallback)((()=>{e(Date.now())}),[]),C),A};var j=e(70152),b=e(91845),y=e(45427),F=e(54703);const S=B.default.div.withConfig({displayName:"Polling__StyledPolling",componentId:"sc-d11148a1-0"})`
  align-items: center;
  bottom: 0;
  color: ${({theme:C})=>C.neutral3};
  display: none;
  padding: 1rem;
  position: fixed;
  right: 0;
  transition: 250ms ease color;

  a {
    color: unset;
  }
  a:hover {
    color: unset;
    text-decoration: none;
  }

  @media screen and (min-width: ${({theme:C})=>C.breakpoint.md}px) {
    display: flex;
  }
`,z=(0,t.z)(b.xv,{fontSize:11,color:"$statusSuccess",opacity:.5,hoverStyle:{opacity:1},"$platform-web":{transition:"opacity 0.25s ease"},variants:{warning:{true:{color:"$yellow600"}},breathe:{true:{opacity:1}},hovering:{true:{opacity:.7}}}}),U=B.default.div.withConfig({displayName:"Polling__StyledPollingDot",componentId:"sc-d11148a1-1"})`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  border-radius: 50%;
  position: relative;
  background-color: ${({theme:C,warning:A})=>A?C.deprecated_yellow3:C.success};
  transition: 250ms ease background-color;
`,V=B.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,P=B.default.div.withConfig({displayName:"Polling__Spinner",componentId:"sc-d11148a1-2"})`
  animation: ${V} 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  transform: translateZ(0);

  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 2px solid ${({theme:C,warning:A})=>A?C.deprecated_yellow3:C.success};
  background: transparent;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  transition: 250ms ease border-color;

  left: -3px;
  top: -3px;
`;function O(){const{chainId:C}=(0,r.m)(),A=(0,n.Nb)(C),e=(0,j.ZP)(),[t,i]=(0,m.useState)(!1),[B,a]=(0,m.useState)(!1),Q=(0,x.GZ)(),s=(0,u.Q)(),I=(0,m.useMemo)((()=>{var e;return(A?null===(e=y.UNIVERSE_CHAIN_INFO[C])||void 0===e?void 0:e.blockWaitMsBeforeWarning:void 0)??y.DEFAULT_MS_BEFORE_WARNING}),[C,A]),l=v(n.p1),d=(0,h.Z)((0,m.useMemo)((()=>({blocksPerFetch:25*(A?y.UNIVERSE_CHAIN_INFO[C].blockPerMainnetEpochForChainId:1)})),[C,A])),c=Boolean(!!d&&l-d.mul(1e3).toNumber()>I);(0,m.useEffect)((()=>{if(!e)return;i(!0);const C=setTimeout((()=>i(!1)),1e3);return()=>{clearTimeout(C)}}),[e]);const M=(0,m.useMemo)((()=>C&&e?(0,F.E)(C,e.toString(),F.r.BLOCK):""),[e,C]);return Q||s?null:(0,g.jsxs)(p.DA,{children:[(0,g.jsxs)(S,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[(0,g.jsx)(z,{breathe:t,hovering:B,warning:c,children:(0,g.jsx)(o.dL,{href:M,children:(0,g.jsxs)(f.ud,{text:(0,g.jsx)(E.c,{i18nKey:"polling.recentBlock"}),children:[e,"\u2002"]})})}),(0,g.jsx)(U,{warning:c,children:t&&(0,g.jsx)(P,{warning:c})})," "]}),c&&(0,g.jsx)(Z,{})]})}var k=e(25320),N=e(44591);const L="data:image/png;base64,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";var H=e(69780),D=e(82731),X=e(63194),q=e(68090),T=e.n(q);function W(){return W=Object.assign||function(C){for(var A=1;A<arguments.length;A++){var e=arguments[A];for(var g in e)Object.prototype.hasOwnProperty.call(e,g)&&(C[g]=e[g])}return C},W.apply(this,arguments)}function K(C,A){if(null==C)return{};var e,g,t=function(C,A){if(null==C)return{};var e,g,t={},n=Object.keys(C);for(g=0;g<n.length;g++)e=n[g],A.indexOf(e)>=0||(t[e]=C[e]);return t}(C,A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(C);for(g=0;g<n.length;g++)e=n[g],A.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(C,e)&&(t[e]=C[e])}return t}var R=(0,m.forwardRef)((function(C,A){var e=C.color,g=void 0===e?"currentColor":e,t=C.size,n=void 0===t?24:t,r=K(C,["color","size"]);return m.createElement("svg",W({ref:A,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:g,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),m.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}))}));R.propTypes={color:T().string,size:T().oneOfType([T().string,T().number])},R.displayName="Heart";const J=R;var G=e(1356),Y=e(29021),_=e(3350);const $=(0,B.default)(N.Tz).withConfig({displayName:"ClaimPopup__StyledClaimPopup",componentId:"sc-78bdc371-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);
  border-radius: 20px;
  padding: 1.5rem;
  overflow: hidden;
  position: relative;
  max-width: 360px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`,CC=(0,B.default)(X.Z).withConfig({displayName:"ClaimPopup__StyledClose",componentId:"sc-78bdc371-1"})`
  position: absolute;
  right: 10px;
  top: 10px;

  :hover {
    cursor: pointer;
  }
`,AC=B.keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`,eC=B.default.img.withConfig({displayName:"ClaimPopup__UniToken",componentId:"sc-78bdc371-2"})`
  animation: ${AC} 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
`;function gC(){var C;const A=(0,r.m)(),e=(0,G.uL)(),t=(0,G.Lb)(),n=(0,G.Wt)(Y.Lk.SELF_CLAIM),i=(0,G.G_)(),B=(0,m.useCallback)((()=>{i()}),[i]),a=(0,_.ot)(A.address),Q=(0,_.jX)(A.address);return(0,m.useEffect)((()=>{a&&t()}),[a]),(0,g.jsx)(g.Fragment,{children:e&&!n&&(0,g.jsxs)($,{gap:"md",children:[(0,g.jsx)(D.sq,{}),(0,g.jsx)(D.RF,{}),(0,g.jsx)(CC,{stroke:"white",onClick:t}),(0,g.jsxs)(N.Tz,{style:{padding:"2rem 0",zIndex:10},justify:"center",children:[(0,g.jsx)(eC,{width:"48px",src:L})," ",(0,g.jsxs)(o.Tv.DeprecatedWhite,{style:{marginTop:"1rem"},fontSize:36,fontWeight:535,children:[null===(C=Q)||void 0===C?void 0:C.toFixed(0,{groupSeparator:","}??"-")," UNI"]}),(0,g.jsxs)(o.Tv.DeprecatedWhite,{style:{paddingTop:"1.25rem",textAlign:"center"},fontWeight:535,color:"white",children:[(0,g.jsx)("span",{role:"img","aria-label":"party",children:"\ud83c\udf89"})," ",(0,g.jsx)(E.c,{i18nKey:"claim.uni.arrived"})," ",(0,g.jsx)("span",{role:"img","aria-label":"party",children:"\ud83c\udf89"})]}),(0,g.jsx)(o.Tv.DeprecatedSubHeader,{style:{paddingTop:"0.5rem",textAlign:"center"},color:"white",children:(0,g.jsx)(E.c,{i18nKey:"claim.thanks",components:{heart:(0,g.jsx)(J,{size:12})}})})]}),(0,g.jsx)(N.Tz,{style:{zIndex:10},justify:"center",children:(0,g.jsx)(H.DF,{padding:"8px",$borderRadius:"8px",width:"fit-content",onClick:B,children:(0,g.jsx)(E.c,{i18nKey:"common.claimUnis"})})})]})})}var tC=e(48630),nC=e(72741),rC=e(37760),EC=e(35771),iC=e(5024),BC=e(45556),aC=e(27179),oC=e(97978),QC=e(99454),sC=e(70854),IC=e(66136);const lC=(0,B.default)(X.Z).withConfig({displayName:"PopupContent__StyledClose",componentId:"sc-da3c3f9a-0"})`
  position: absolute;
  right: ${({$padding:C})=>`${C}px`};
  top: ${({$padding:C})=>`${C}px`};
  color: ${({theme:C})=>C.neutral2};

  :hover {
    cursor: pointer;
  }
`,dC=B.default.div.withConfig({displayName:"PopupContent__PopupContainer",componentId:"sc-da3c3f9a-1"})`
  display: inline-block;
  width: 100%;
  background-color: ${({theme:C})=>C.surface1};
  position: relative;
  border: 1px solid ${({theme:C})=>C.surface3};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({theme:C})=>C.deprecated_deepShadow};
  transition: ${({theme:C})=>`visibility ${C.transition.duration.fast} ease-in-out`};

  padding: ${({padded:C})=>C?"20px 35px 20px 20px":"2px 0px"};

  ${({theme:C})=>C.deprecated_mediaWidth.deprecated_upToSmall`
  min-width: 290px;
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`}
`,cC=(0,B.default)(p.BA).withConfig({displayName:"PopupContent__RowNoFlex",componentId:"sc-da3c3f9a-2"})`
  flex-wrap: nowrap;
`,MC=(0,B.default)(N.Tz).withConfig({displayName:"PopupContent__ColumnContainer",componentId:"sc-da3c3f9a-3"})`
  margin: 0 12px;
`,ZC=(0,B.default)(BC.Z).withConfig({displayName:"PopupContent__PopupAlertTriangle",componentId:"sc-da3c3f9a-4"})`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
`;function pC({chainId:C,onClose:A}){const e=(0,n.Nb)(C)?y.UNIVERSE_CHAIN_INFO[C]:void 0;return e?(0,g.jsxs)(dC,{padded:!0,children:[(0,g.jsx)(lC,{$padding:20,onClick:A}),(0,g.jsxs)(cC,{gap:"12px",children:[(0,g.jsx)(ZC,{}),(0,g.jsxs)(MC,{gap:"sm",children:[(0,g.jsx)(o.Tv.SubHeader,{color:"neutral2",children:(0,g.jsx)(E.c,{i18nKey:"common.failedSwitchNetwork"})}),(0,g.jsx)(o.Tv.BodySmall,{color:"neutral2",children:(0,g.jsx)(E.c,{i18nKey:"settings.switchNetwork.warning",values:{label:e.label}})})]})]})]}):null}const fC=(0,B.default)(o.Tv.BodySmall).withConfig({displayName:"PopupContent__Descriptor",componentId:"sc-da3c3f9a-5"})`
  ${o.cw}
`;function hC({activity:C,onClick:A,onClose:e}){var t;const n=C.status===sC.TransactionStatus.Confirmed&&!C.cancelled,{ENSName:r}=(0,aC.Z)(null===(t=C)||void 0===t?void 0:t.otherAccount);return(0,g.jsxs)(dC,{children:[(0,g.jsx)(lC,{$padding:16,onClick:e}),(0,g.jsx)(iC.ZP,{left:n||C.offchainOrderDetails?(0,g.jsx)(N.ZP,{children:(0,g.jsx)(EC.V,{chainId:C.chainId,currencies:C.currencies,images:C.logos,accountAddress:C.otherAccount})}):(0,g.jsx)(ZC,{}),title:(0,g.jsx)(o.Tv.SubHeader,{children:C.title}),descriptor:(0,g.jsxs)(fC,{color:"neutral2",children:[C.descriptor,r??C.otherAccount]}),onClick:A})]})}function uC({chainId:C,hash:A,onClose:e}){const t=(0,QC.kF)(A),{formatNumber:n}=(0,IC.Gb)(),{data:r}=(0,tC.a)((0,rC.qT)(t,C,n));if(!t||!r)return null;return(0,g.jsx)(hC,{activity:r,onClose:e,onClick:()=>window.open((0,F.E)(r.chainId,r.hash,F.r.TRANSACTION),"_blank")})}function xC({orderHash:C,onClose:A}){const e=(0,oC.Aj)(C),t=(0,nC.y2)(),{formatNumber:n}=(0,IC.Gb)(),{data:r}=(0,tC.a)((0,rC.Vg)(e,n));if(!r||!e)return null;return(0,g.jsx)(hC,{activity:r,onClose:A,onClick:()=>{var C,A,g,n;return t(e,{inputLogo:null===(A=r)||void 0===A||null===(C=A.logos)||void 0===C?void 0:C[0],outputLogo:null===(n=r)||void 0===n||null===(g=n.logos)||void 0===g?void 0:g[1]})}})}function wC({removeAfterMs:C,content:A,popKey:e}){const t=(0,G.J3)(),E=()=>t(e);(0,m.useEffect)((()=>{if(null===C)return;const A=setTimeout((()=>{t(e)}),C);return()=>{clearTimeout(A)}}),[e,C,t]);const{chainId:i}=(0,r.m)(),B=(0,n.Jw)(i);switch(A.type){case Y.kQ.Transaction:return B?(0,g.jsx)(uC,{hash:A.hash,chainId:B,onClose:E}):null;case Y.kQ.Order:return(0,g.jsx)(xC,{orderHash:A.orderHash,onClose:E});case Y.kQ.FailedSwitchNetwork:return(0,g.jsx)(pC,{chainId:A.failedSwitchNetwork,onClose:E})}}var mC=e(62587);const vC=B.default.div.withConfig({displayName:"Popups__StickyContainer",componentId:"sc-8ad94869-0"})`
  position: absolute;
  top: 12px;
  width: 100vw;
  display: flex;
  justify-content: end;
  padding-right: 12px;
`,jC=B.default.div.withConfig({displayName:"Popups__MobilePopupWrapper",componentId:"sc-8ad94869-1"})`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  display: none;

  ${({theme:C})=>C.deprecated_mediaWidth.deprecated_upToSmall`
    display: block;
    padding-top: 20px;
  `};
`,bC=B.default.div.withConfig({displayName:"Popups__MobilePopupInner",componentId:"sc-8ad94869-2"})`
  height: 99%;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`,yC=(0,B.default)(N.Tz).withConfig({displayName:"Popups__FixedPopupColumn",componentId:"sc-8ad94869-3"})`
  position: fixed;
  max-width: 348px;
  width: 100%;
  z-index: ${mC.k.fixed};
  transition: ${({theme:C})=>`top ${C.transition.timing.inOut} ${C.transition.duration.slow}`};

  ${({theme:C})=>C.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`;function FC(){var C;const A=(0,k.Q5)(),e=(0,G.iT)(),t=(null===(C=e)||void 0===C?void 0:C.length)>0;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(vC,{children:(0,g.jsxs)(yC,{gap:"20px",drawerOpen:A.isOpen,"data-testid":"popups",children:[(0,g.jsx)(gC,{}),e.map((C=>(0,g.jsx)(wC,{content:C.content,popKey:C.key,removeAfterMs:C.removeAfterMs},C.key)))]})}),t&&(0,g.jsx)(jC,{"data-testid":"popups",children:(0,g.jsx)(bC,{children:e.slice(0).reverse().map((C=>(0,g.jsx)(wC,{content:C.content,popKey:C.key,removeAfterMs:C.removeAfterMs},C.key)))})})]})}var SC=e(5985);const zC=e.p+"static/media/mobile-app-qr-logo.5027502133811ae9a9e8571a3911a0d5.svg";var UC=e(47278);const VC=B.default.button.withConfig({displayName:"DownloadButton__StyledButton",componentId:"sc-51da4631-0"})`
  ${o.iV}
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
  padding: 8px 24px;
  border: none;
  white-space: nowrap;
  background: ${({theme:C,branded:A})=>A?C.accent1:C.surface3};
  border-radius: 12px;

  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  color: ${({theme:C,branded:A})=>A?C.deprecated_accentTextLightPrimary:C.neutral1};
`;function PC({onClick:C,branded:A,children:e}){return(0,g.jsx)(VC,{branded:A,onClick:C,children:e})}function OC({onClick:C,text:A="Download",element:e}){const t=(0,m.useCallback)((()=>{var A;null===(A=C)||void 0===A||A(),(0,UC.J8)({element:e})}),[e,C]);return(0,g.jsx)(PC,{branded:!0,onClick:t,children:A})}var kC,NC=e(2562),LC=e(37064),HC=e(9897),DC=e(61647),XC=Object.defineProperty,qC=Object.getOwnPropertySymbols,TC=Object.prototype.hasOwnProperty,WC=Object.prototype.propertyIsEnumerable,KC=(C,A,e)=>A in C?XC(C,A,{enumerable:!0,configurable:!0,writable:!0,value:e}):C[A]=e,RC=(C,A)=>{for(var e in A||(A={}))TC.call(A,e)&&KC(C,e,A[e]);if(qC)for(var e of qC(A))WC.call(A,e)&&KC(C,e,A[e]);return C},JC=(C,A)=>{var e={};for(var g in C)TC.call(C,g)&&A.indexOf(g)<0&&(e[g]=C[g]);if(null!=C&&qC)for(var g of qC(C))A.indexOf(g)<0&&WC.call(C,g)&&(e[g]=C[g]);return e};(C=>{const A=class{constructor(C,e,g,t){if(this.version=C,this.errorCorrectionLevel=e,this.modules=[],this.isFunction=[],C<A.MIN_VERSION||C>A.MAX_VERSION)throw new RangeError("Version value out of range");if(t<-1||t>7)throw new RangeError("Mask value out of range");this.size=4*C+17;let r=[];for(let A=0;A<this.size;A++)r.push(!1);for(let A=0;A<this.size;A++)this.modules.push(r.slice()),this.isFunction.push(r.slice());this.drawFunctionPatterns();const E=this.addEccAndInterleave(g);if(this.drawCodewords(E),-1==t){let C=1e9;for(let A=0;A<8;A++){this.applyMask(A),this.drawFormatBits(A);const e=this.getPenaltyScore();e<C&&(t=A,C=e),this.applyMask(A)}}n(0<=t&&t<=7),this.mask=t,this.applyMask(t),this.drawFormatBits(t),this.isFunction=[]}static encodeText(e,g){const t=C.QrSegment.makeSegments(e);return A.encodeSegments(t,g)}static encodeBinary(e,g){const t=C.QrSegment.makeBytes(e);return A.encodeSegments([t],g)}static encodeSegments(C,e,t=1,r=40,i=-1,B=!0){if(!(A.MIN_VERSION<=t&&t<=r&&r<=A.MAX_VERSION)||i<-1||i>7)throw new RangeError("Invalid value");let a,o;for(a=t;;a++){const g=8*A.getNumDataCodewords(a,e),t=E.getTotalBits(C,a);if(t<=g){o=t;break}if(a>=r)throw new RangeError("Data too long")}for(const g of[A.Ecc.MEDIUM,A.Ecc.QUARTILE,A.Ecc.HIGH])B&&o<=8*A.getNumDataCodewords(a,g)&&(e=g);let Q=[];for(const A of C){g(A.mode.modeBits,4,Q),g(A.numChars,A.mode.numCharCountBits(a),Q);for(const C of A.getData())Q.push(C)}n(Q.length==o);const s=8*A.getNumDataCodewords(a,e);n(Q.length<=s),g(0,Math.min(4,s-Q.length),Q),g(0,(8-Q.length%8)%8,Q),n(Q.length%8==0);for(let A=236;Q.length<s;A^=253)g(A,8,Q);let I=[];for(;8*I.length<Q.length;)I.push(0);return Q.forEach(((C,A)=>I[A>>>3]|=C<<7-(7&A))),new A(a,e,I,i)}getModule(C,A){return 0<=C&&C<this.size&&0<=A&&A<this.size&&this.modules[A][C]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const C=this.getAlignmentPatternPositions(),A=C.length;for(let e=0;e<A;e++)for(let g=0;g<A;g++)0==e&&0==g||0==e&&g==A-1||e==A-1&&0==g||this.drawAlignmentPattern(C[e],C[g]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(C){const A=this.errorCorrectionLevel.formatBits<<3|C;let e=A;for(let t=0;t<10;t++)e=e<<1^1335*(e>>>9);const g=21522^(A<<10|e);n(g>>>15==0);for(let n=0;n<=5;n++)this.setFunctionModule(8,n,t(g,n));this.setFunctionModule(8,7,t(g,6)),this.setFunctionModule(8,8,t(g,7)),this.setFunctionModule(7,8,t(g,8));for(let n=9;n<15;n++)this.setFunctionModule(14-n,8,t(g,n));for(let n=0;n<8;n++)this.setFunctionModule(this.size-1-n,8,t(g,n));for(let n=8;n<15;n++)this.setFunctionModule(8,this.size-15+n,t(g,n));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let C=this.version;for(let e=0;e<12;e++)C=C<<1^7973*(C>>>11);const A=this.version<<12|C;n(A>>>18==0);for(let e=0;e<18;e++){const C=t(A,e),g=this.size-11+e%3,n=Math.floor(e/3);this.setFunctionModule(g,n,C),this.setFunctionModule(n,g,C)}}drawFinderPattern(C,A){for(let e=-4;e<=4;e++)for(let g=-4;g<=4;g++){const t=Math.max(Math.abs(g),Math.abs(e)),n=C+g,r=A+e;0<=n&&n<this.size&&0<=r&&r<this.size&&this.setFunctionModule(n,r,2!=t&&4!=t)}}drawAlignmentPattern(C,A){for(let e=-2;e<=2;e++)for(let g=-2;g<=2;g++)this.setFunctionModule(C+g,A+e,1!=Math.max(Math.abs(g),Math.abs(e)))}setFunctionModule(C,A,e){this.modules[A][C]=e,this.isFunction[A][C]=!0}addEccAndInterleave(C){const e=this.version,g=this.errorCorrectionLevel;if(C.length!=A.getNumDataCodewords(e,g))throw new RangeError("Invalid argument");const t=A.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][e],r=A.ECC_CODEWORDS_PER_BLOCK[g.ordinal][e],E=Math.floor(A.getNumRawDataModules(e)/8),i=t-E%t,B=Math.floor(E/t);let a=[];const o=A.reedSolomonComputeDivisor(r);for(let n=0,s=0;n<t;n++){let e=C.slice(s,s+B-r+(n<i?0:1));s+=e.length;const g=A.reedSolomonComputeRemainder(e,o);n<i&&e.push(0),a.push(e.concat(g))}let Q=[];for(let A=0;A<a[0].length;A++)a.forEach(((C,e)=>{(A!=B-r||e>=i)&&Q.push(C[A])}));return n(Q.length==E),Q}drawCodewords(C){if(C.length!=Math.floor(A.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let e=0;for(let A=this.size-1;A>=1;A-=2){6==A&&(A=5);for(let g=0;g<this.size;g++)for(let n=0;n<2;n++){const r=A-n,E=0==(A+1&2)?this.size-1-g:g;!this.isFunction[E][r]&&e<8*C.length&&(this.modules[E][r]=t(C[e>>>3],7-(7&e)),e++)}}n(e==8*C.length)}applyMask(C){if(C<0||C>7)throw new RangeError("Mask value out of range");for(let A=0;A<this.size;A++)for(let e=0;e<this.size;e++){let g;switch(C){case 0:g=(e+A)%2==0;break;case 1:g=A%2==0;break;case 2:g=e%3==0;break;case 3:g=(e+A)%3==0;break;case 4:g=(Math.floor(e/3)+Math.floor(A/2))%2==0;break;case 5:g=e*A%2+e*A%3==0;break;case 6:g=(e*A%2+e*A%3)%2==0;break;case 7:g=((e+A)%2+e*A%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[A][e]&&g&&(this.modules[A][e]=!this.modules[A][e])}}getPenaltyScore(){let C=0;for(let n=0;n<this.size;n++){let e=!1,g=0,t=[0,0,0,0,0,0,0];for(let r=0;r<this.size;r++)this.modules[n][r]==e?(g++,5==g?C+=A.PENALTY_N1:g>5&&C++):(this.finderPenaltyAddHistory(g,t),e||(C+=this.finderPenaltyCountPatterns(t)*A.PENALTY_N3),e=this.modules[n][r],g=1);C+=this.finderPenaltyTerminateAndCount(e,g,t)*A.PENALTY_N3}for(let n=0;n<this.size;n++){let e=!1,g=0,t=[0,0,0,0,0,0,0];for(let r=0;r<this.size;r++)this.modules[r][n]==e?(g++,5==g?C+=A.PENALTY_N1:g>5&&C++):(this.finderPenaltyAddHistory(g,t),e||(C+=this.finderPenaltyCountPatterns(t)*A.PENALTY_N3),e=this.modules[r][n],g=1);C+=this.finderPenaltyTerminateAndCount(e,g,t)*A.PENALTY_N3}for(let n=0;n<this.size-1;n++)for(let e=0;e<this.size-1;e++){const g=this.modules[n][e];g==this.modules[n][e+1]&&g==this.modules[n+1][e]&&g==this.modules[n+1][e+1]&&(C+=A.PENALTY_N2)}let e=0;for(const A of this.modules)e=A.reduce(((C,A)=>C+(A?1:0)),e);const g=this.size*this.size,t=Math.ceil(Math.abs(20*e-10*g)/g)-1;return n(0<=t&&t<=9),C+=t*A.PENALTY_N4,n(0<=C&&C<=2568888),C}getAlignmentPatternPositions(){if(1==this.version)return[];{const C=Math.floor(this.version/7)+2,A=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*C-2));let e=[6];for(let g=this.size-7;e.length<C;g-=A)e.splice(1,0,g);return e}}static getNumRawDataModules(C){if(C<A.MIN_VERSION||C>A.MAX_VERSION)throw new RangeError("Version number out of range");let e=(16*C+128)*C+64;if(C>=2){const A=Math.floor(C/7)+2;e-=(25*A-10)*A-55,C>=7&&(e-=36)}return n(208<=e&&e<=29648),e}static getNumDataCodewords(C,e){return Math.floor(A.getNumRawDataModules(C)/8)-A.ECC_CODEWORDS_PER_BLOCK[e.ordinal][C]*A.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][C]}static reedSolomonComputeDivisor(C){if(C<1||C>255)throw new RangeError("Degree out of range");let e=[];for(let A=0;A<C-1;A++)e.push(0);e.push(1);let g=1;for(let t=0;t<C;t++){for(let C=0;C<e.length;C++)e[C]=A.reedSolomonMultiply(e[C],g),C+1<e.length&&(e[C]^=e[C+1]);g=A.reedSolomonMultiply(g,2)}return e}static reedSolomonComputeRemainder(C,e){let g=e.map((C=>0));for(const t of C){const C=t^g.shift();g.push(0),e.forEach(((e,t)=>g[t]^=A.reedSolomonMultiply(e,C)))}return g}static reedSolomonMultiply(C,A){if(C>>>8!=0||A>>>8!=0)throw new RangeError("Byte out of range");let e=0;for(let g=7;g>=0;g--)e=e<<1^285*(e>>>7),e^=(A>>>g&1)*C;return n(e>>>8==0),e}finderPenaltyCountPatterns(C){const A=C[1];n(A<=3*this.size);const e=A>0&&C[2]==A&&C[3]==3*A&&C[4]==A&&C[5]==A;return(e&&C[0]>=4*A&&C[6]>=A?1:0)+(e&&C[6]>=4*A&&C[0]>=A?1:0)}finderPenaltyTerminateAndCount(C,A,e){return C&&(this.finderPenaltyAddHistory(A,e),A=0),A+=this.size,this.finderPenaltyAddHistory(A,e),this.finderPenaltyCountPatterns(e)}finderPenaltyAddHistory(C,A){0==A[0]&&(C+=this.size),A.pop(),A.unshift(C)}};let e=A;function g(C,A,e){if(A<0||A>31||C>>>A!=0)throw new RangeError("Value out of range");for(let g=A-1;g>=0;g--)e.push(C>>>g&1)}function t(C,A){return 0!=(C>>>A&1)}function n(C){if(!C)throw new Error("Assertion error")}e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],C.QrCode=e;const r=class{constructor(C,A,e){if(this.mode=C,this.numChars=A,this.bitData=e,A<0)throw new RangeError("Invalid argument");this.bitData=e.slice()}static makeBytes(C){let A=[];for(const e of C)g(e,8,A);return new r(r.Mode.BYTE,C.length,A)}static makeNumeric(C){if(!r.isNumeric(C))throw new RangeError("String contains non-numeric characters");let A=[];for(let e=0;e<C.length;){const t=Math.min(C.length-e,3);g(parseInt(C.substr(e,t),10),3*t+1,A),e+=t}return new r(r.Mode.NUMERIC,C.length,A)}static makeAlphanumeric(C){if(!r.isAlphanumeric(C))throw new RangeError("String contains unencodable characters in alphanumeric mode");let A,e=[];for(A=0;A+2<=C.length;A+=2){let t=45*r.ALPHANUMERIC_CHARSET.indexOf(C.charAt(A));t+=r.ALPHANUMERIC_CHARSET.indexOf(C.charAt(A+1)),g(t,11,e)}return A<C.length&&g(r.ALPHANUMERIC_CHARSET.indexOf(C.charAt(A)),6,e),new r(r.Mode.ALPHANUMERIC,C.length,e)}static makeSegments(C){return""==C?[]:r.isNumeric(C)?[r.makeNumeric(C)]:r.isAlphanumeric(C)?[r.makeAlphanumeric(C)]:[r.makeBytes(r.toUtf8ByteArray(C))]}static makeEci(C){let A=[];if(C<0)throw new RangeError("ECI assignment value out of range");if(C<128)g(C,8,A);else if(C<16384)g(2,2,A),g(C,14,A);else{if(!(C<1e6))throw new RangeError("ECI assignment value out of range");g(6,3,A),g(C,21,A)}return new r(r.Mode.ECI,0,A)}static isNumeric(C){return r.NUMERIC_REGEX.test(C)}static isAlphanumeric(C){return r.ALPHANUMERIC_REGEX.test(C)}getData(){return this.bitData.slice()}static getTotalBits(C,A){let e=0;for(const g of C){const C=g.mode.numCharCountBits(A);if(g.numChars>=1<<C)return 1/0;e+=4+C+g.bitData.length}return e}static toUtf8ByteArray(C){C=encodeURI(C);let A=[];for(let e=0;e<C.length;e++)"%"!=C.charAt(e)?A.push(C.charCodeAt(e)):(A.push(parseInt(C.substr(e+1,2),16)),e+=2);return A}};let E=r;E.NUMERIC_REGEX=/^[0-9]*$/,E.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,E.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",C.QrSegment=E})(kC||(kC={})),(C=>{let A;(C=>{const A=class{constructor(C,A){this.ordinal=C,this.formatBits=A}};let e=A;e.LOW=new A(0,1),e.MEDIUM=new A(1,0),e.QUARTILE=new A(2,3),e.HIGH=new A(3,2),C.Ecc=e})(A=C.QrCode||(C.QrCode={}))})(kC||(kC={})),(C=>{let A;(C=>{const A=class{constructor(C,A){this.modeBits=C,this.numBitsCharCount=A}numCharCountBits(C){return this.numBitsCharCount[Math.floor((C+7)/17)]}};let e=A;e.NUMERIC=new A(1,[10,12,14]),e.ALPHANUMERIC=new A(2,[9,11,13]),e.BYTE=new A(4,[8,16,16]),e.KANJI=new A(8,[8,10,12]),e.ECI=new A(7,[0,0,0]),C.Mode=e})(A=C.QrSegment||(C.QrSegment={}))})(kC||(kC={}));var GC=kC,YC={L:GC.QrCode.Ecc.LOW,M:GC.QrCode.Ecc.MEDIUM,Q:GC.QrCode.Ecc.QUARTILE,H:GC.QrCode.Ecc.HIGH},_C=128,$C="L",CA="#FFFFFF",AA="#000000",eA=!1,gA=4,tA=.1;function nA(C,A=0){const e=[];return C.forEach((function(C,g){let t=null;C.forEach((function(n,r){if(!n&&null!==t)return e.push(`M${t+A} ${g+A}h${r-t}v1H${t+A}z`),void(t=null);if(r!==C.length-1)n&&null===t&&(t=r);else{if(!n)return;null===t?e.push(`M${r+A},${g+A} h1v1H${r+A}z`):e.push(`M${t+A},${g+A} h${r+1-t}v1H${t+A}z`)}}))})),e.join("")}function rA(C,A){return C.slice().map(((C,e)=>e<A.y||e>=A.y+A.h?C:C.map(((C,e)=>(e<A.x||e>=A.x+A.w)&&C))))}function EA(C,A,e,g){if(null==g)return null;const t=e?gA:0,n=C.length+2*t,r=Math.floor(A*tA),E=n/A,i=(g.width||r)*E,B=(g.height||r)*E,a=null==g.x?C.length/2-i/2:g.x*E,o=null==g.y?C.length/2-B/2:g.y*E;let Q=null;if(g.excavate){let C=Math.floor(a),A=Math.floor(o);Q={x:C,y:A,w:Math.ceil(i+a-C),h:Math.ceil(B+o-A)}}return{x:a,y:o,h:B,w:i,excavation:Q}}!function(){try{(new Path2D).addPath(new Path2D)}catch(C){return!1}}();function iA(C){const A=C,{value:e,size:g=_C,level:t=$C,bgColor:n=CA,fgColor:r=AA,includeMargin:E=eA,imageSettings:i}=A,B=JC(A,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let a=GC.QrCode.encodeText(e,YC[t]).getModules();const o=E?gA:0,Q=a.length+2*o,s=EA(a,g,E,i);let I=null;null!=i&&null!=s&&(null!=s.excavation&&(a=rA(a,s.excavation)),I=m.createElement("image",{xlinkHref:i.src,height:s.h,width:s.w,x:s.x+o,y:s.y+o,preserveAspectRatio:"none"}));const l=nA(a,o);return m.createElement("svg",RC({height:g,width:g,viewBox:`0 0 ${Q} ${Q}`},B),m.createElement("path",{fill:n,d:`M0,0 h${Q}v${Q}H0z`,shapeRendering:"crispEdges"}),m.createElement("path",{fill:r,d:l,shapeRendering:"crispEdges"}),I)}var BA=e(45878),aA=e(15541);const oA=(0,B.default)(p.m0).withConfig({displayName:"UniwalletModal__UniwalletConnectWrapper",componentId:"sc-96d5a8fb-0"})`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
`,QA=(0,B.default)(p.m0).withConfig({displayName:"UniwalletModal__HeaderRow",componentId:"sc-96d5a8fb-1"})`
  display: flex;
`,sA=(0,B.default)(p.m0).withConfig({displayName:"UniwalletModal__QRCodeWrapper",componentId:"sc-96d5a8fb-2"})`
  aspect-ratio: 1;
  border-radius: 12px;
  background-color: ${({theme:C})=>C.white};
  margin: 24px 32px 20px;
  padding: 10px;
`,IA=B.default.div.withConfig({displayName:"UniwalletModal__Divider",componentId:"sc-96d5a8fb-3"})`
  border-bottom: 1px solid ${({theme:C})=>C.surface3};
  width: 100%;
`;function lA(){const[C,A]=(0,m.useState)(),e=(0,DC.$)(),t=!(aA.isWebIOS||aA.isWebAndroid)&&!!C&&e.isPending,n=(0,LC.g)(HC.TV.UNISWAP_WALLET_CONNECT_CONNECTOR_ID,{shouldThrow:!0});(0,m.useEffect)((()=>{function C({type:C,data:e}){"display_uniswap_uri"===C&&"string"===typeof e&&A(e)}return n.emitter.on("message",C),()=>{n.emitter.off("message",C)}}),[n.emitter]);const r=(0,m.useCallback)((()=>{var C;null===(C=e)||void 0===C||C.reset(),A(void 0)}),[e]);(0,m.useEffect)((()=>{t?(0,BA._P)(SC.Je.UNIWALLET_CONNECT_MODAL_OPENED):A(void 0)}),[t]);const i=(0,B.useTheme)();return(0,g.jsx)(NC.Z,{isOpen:t,onDismiss:r,children:(0,g.jsxs)(oA,{children:[(0,g.jsxs)(QA,{children:[(0,g.jsx)(o.Tv.SubHeader,{children:(0,g.jsx)(E.c,{i18nKey:"account.drawer.modal.scan"})}),(0,g.jsx)(o.Tw,{onClick:r})]}),(0,g.jsx)(sA,{children:C&&(0,g.jsx)(iA,{value:C,width:"100%",height:"100%",level:"M",fgColor:i.darkMode?i.surface1:i.black,imageSettings:{src:zC,height:33,width:33,excavate:!1}})}),(0,g.jsx)(IA,{}),(0,g.jsx)(cA,{})]})})}const dA=(0,B.default)(p.m0).withConfig({displayName:"UniwalletModal__InfoSectionWrapper",componentId:"sc-96d5a8fb-4"})`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  gap: 20px;
`;function cA(){return(0,g.jsxs)(dA,{children:[(0,g.jsxs)(N.Tz,{gap:"4px",children:[(0,g.jsx)(o.Tv.SubHeaderSmall,{color:"neutral1",children:(0,g.jsx)(E.c,{i18nKey:"account.drawer.modal.dont"})}),(0,g.jsx)(o.Tv.BodySmall,{color:"neutral2",children:(0,g.jsx)(E.c,{i18nKey:"account.drawer.modal.body"})})]}),(0,g.jsx)(N.ZP,{children:(0,g.jsx)(OC,{element:SC.xo.UNISWAP_WALLET_MODAL_DOWNLOAD_BUTTON})})]})}var MA=e(68588);const ZA=B.default.div.withConfig({displayName:"styled__PopupContainer",componentId:"sc-87184ba3-0"})`
  ${({show:C})=>!C&&"display: none"};
  background-color: ${({theme:C})=>C.surface2};
  color: ${({theme:C})=>C.neutral1};
  position: fixed;
  z-index: ${mC.k.sticky};
  bottom: 40px;
  right: 20px;
  width: 360px;

  user-select: none;
  border-radius: 20px;
  height: 92px;
  border: 1.3px solid ${({theme:C})=>C.surface3};

  @media only screen and (max-width: ${a.j$.md}px) {
    bottom: 62px;
  }

  @media only screen and (max-width: ${a.j$.xs}px) {
    width: unset;
    right: 10px;
    left: 10px;
  }
`,pA=(0,B.default)(X.Z).withConfig({displayName:"styled__StyledXButton",componentId:"sc-87184ba3-1"})`
  cursor: pointer;
  position: absolute;
  top: -30px;
  right: 0px;
  padding: 4px;
  border-radius: 50%;

  background-color: ${({theme:C})=>C.surface5};
  color: ${({theme:C})=>C.neutral2};
  ${MA.cR};

  @media only screen and (max-width: ${a.j$.xs}px) {
    top: 8px;
    right: 8px;
  }
`,fA=B.default.div.withConfig({displayName:"styled__Container",componentId:"sc-87184ba3-2"})`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  gap: 16px;
`,hA=B.default.div.withConfig({displayName:"styled__TextContainer",componentId:"sc-87184ba3-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  color: ${({theme:C})=>C.neutral2};
  padding: 10px 0px 10px;
  line-height: 16px;

  @media only screen and (max-width: ${a.j$.xs}px) {
    width: 220px;
  }
`;function uA(){return uA=Object.assign||function(C){for(var A=1;A<arguments.length;A++){var e=arguments[A];for(var g in e)Object.prototype.hasOwnProperty.call(e,g)&&(C[g]=e[g])}return C},uA.apply(this,arguments)}function xA(C,A){if(null==C)return{};var e,g,t=function(C,A){if(null==C)return{};var e,g,t={},n=Object.keys(C);for(g=0;g<n.length;g++)e=n[g],A.indexOf(e)>=0||(t[e]=C[e]);return t}(C,A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(C);for(g=0;g<n.length;g++)e=n[g],A.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(C,e)&&(t[e]=C[e])}return t}var wA=(0,m.forwardRef)((function(C,A){var e=C.color,g=void 0===e?"currentColor":e,t=C.size,n=void 0===t?24:t,r=xA(C,["color","size"]);return m.createElement("svg",uA({ref:A,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:g,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),m.createElement("circle",{cx:"12",cy:"12",r:"10"}),m.createElement("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),m.createElement("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}))}));wA.propTypes={color:T().string,size:T().oneOfType([T().string,T().number])},wA.displayName="Globe";const mA=wA;var vA=e(89341);const jA=B.default.div.withConfig({displayName:"OutageBanner__IconContainer",componentId:"sc-d43d5a25-0"})`
  height: 100%;
  margin: 12px 0 0 12px;
  align-self: flex-start;
`,bA=B.default.div.withConfig({displayName:"OutageBanner__IconBackground",componentId:"sc-d43d5a25-1"})`
  display: flex;
  background-color: ${({theme:C})=>C.deprecated_accentWarningSoft};
  padding: 10px;
  border-radius: 12px;
`,yA=(0,B.default)(ZA).withConfig({displayName:"OutageBanner__StyledPopupContainer",componentId:"sc-d43d5a25-2"})`
  height: unset;
`,FA=(0,B.default)(hA).withConfig({displayName:"OutageBanner__OutageTextContainer",componentId:"sc-d43d5a25-3"})`
  padding: 10px 10px 10px 0;
`,SA=(0,B.default)(o.dL).withConfig({displayName:"OutageBanner__HelpCenterLink",componentId:"sc-d43d5a25-4"})`
  font-size: 14px;
  margin-top: 4px;
`;function zA(C){return`hideOutageBanner-${C}`}function UA({chainId:C,version:A}){const[e,t]=(0,m.useState)(!1),r=(0,B.useTheme)(),i=A?A.toString().toLowerCase()+" data":"Data",a=(0,vA.capitalize)((0,n.tq)({chainId:C,withFallback:!0}).toLowerCase()),Q=A?" "+A.toString().toLowerCase():"";return(0,g.jsx)(yA,{show:!e,children:(0,g.jsxs)(fA,{children:[(0,g.jsx)(jA,{children:(0,g.jsx)(bA,{children:(0,g.jsx)(mA,{size:28,color:r.warning2})})}),(0,g.jsxs)(FA,{children:[(0,g.jsx)(o.Tv.BodySmall,{lineHeight:"20px",children:(0,g.jsx)(E.c,{i18nKey:"outageBanner.title",values:{versionName:i}})}),(0,g.jsx)(o.Tv.LabelMicro,{children:(0,g.jsx)(E.c,{i18nKey:"outageBanner.message",values:{chainName:a,versionDescription:Q}})}),(0,g.jsx)(o.Tv.LabelMicro,{children:(0,g.jsx)(E.c,{i18nKey:"outageBanner.message.sub"})}),(0,g.jsx)(SA,{href:"https://support.uniswap.org/hc/en-us/articles/23952001935373-Subgraph-downtime",children:(0,g.jsx)(E.c,{i18nKey:"common.learnMore.link"})})]}),(0,g.jsx)(pA,{"data-testid":"uniswap-outage-banner",size:24,onClick:()=>{t(!0),sessionStorage.setItem(zA(C),"true")}})]})})}var VA=e(95564),PA=e(64505),OA=e(6282),kA=e(29696);function NA(){var C;const{pathname:A}=(0,OA.TH)(),e=(0,kA.$)(A),t=(0,VA.Ft)(),r=(0,PA.Dv)(VA.rh),E=(0,m.useMemo)((()=>{var C;const e=A.split("/").find(n.US);return e?null===(C=(0,n.PG)(e))||void 0===C?void 0:C.id:Q.UniverseChainId.Mainnet}),[A]),i=(null===(C=r)||void 0===C?void 0:C.chainId)===E,B=(0,m.useMemo)((()=>e&&E&&(t[E]||i)&&!sessionStorage.getItem(zA(E))&&[SC.yJ.EXPLORE_PAGE,SC.yJ.TOKEN_DETAILS_PAGE,SC.yJ.POOL_DETAILS_PAGE,SC.yJ.TOKENS_PAGE].includes(e)),[e,i,t,E]);var a;return E&&B?(0,g.jsx)(UA,{chainId:E,version:i?null===(a=r)||void 0===a?void 0:a.version:void 0}):null}var LA=e(62875);const HA=(0,B.default)(N.ZP).withConfig({displayName:"ConnectedAccountBlocked__ContentWrapper",componentId:"sc-2ba301c-0"})`
  align-items: center;
  margin: 32px;
  text-align: center;
  font-size: 12px;
`;function DA(C){const A=(0,B.useTheme)();return(0,g.jsx)(NC.Z,{isOpen:C.isOpen,onDismiss:Function.prototype(),children:(0,g.jsxs)(HA,{children:[(0,g.jsx)(LA.$,{size:"22px"}),(0,g.jsx)(o.Tv.DeprecatedLargeHeader,{lineHeight:2,marginBottom:1,marginTop:1,children:(0,g.jsx)(E.c,{i18nKey:"common.blockedAddress"})}),(0,g.jsx)(b.xv,{color:"$neutral2",fontSize:12,mb:12,children:C.account}),(0,g.jsxs)(o.Tv.DeprecatedMain,{fontSize:14,marginBottom:12,children:[(0,g.jsx)(E.c,{i18nKey:"common.blocked.reason"})," ",(0,g.jsx)(o.dL,{href:"https://help.uniswap.org/en/articles/6149816",children:(0,g.jsx)(E.c,{i18nKey:"common.blocked.activities"})}),"."]}),(0,g.jsxs)(o.Tv.DeprecatedMain,{fontSize:12,children:[(0,g.jsx)(E.c,{i18nKey:"common.blocked.ifError"})," "]}),(0,g.jsx)(o.WD,{toCopy:"compliance@uniswap.org",fontSize:14,iconSize:16,color:A.accent1,iconPosition:"right",children:"compliance@uniswap.org"})]})})}var XA=e(81181),qA=e(39063),TA=e(16971);const WA="quick_route_chains";function KA(){const C=(0,qA.Ae)(XA.DynamicConfigs.QuickRouteChains).get(WA,[]);return C.every((C=>Q.WEB_SUPPORTED_CHAIN_IDS.includes(C)))?C:(TA.logger.error(new Error("dynamic config chains contain invalid ChainId"),{tags:{file:"quickRouteChains",function:"useQuickRouteChains"},extra:{chains:C}}),[])}var RA=e(95625),JA=e(17550);const GA=(0,B.default)(N.ZP).withConfig({displayName:"FeatureFlagModal__Wrapper",componentId:"sc-65164a3b-0"})`
  padding: 20px 16px;
  width: 100%;
  gap: 8px;
`,YA=(0,B.default)(N.ZP).withConfig({displayName:"FeatureFlagModal__FlagsColumn",componentId:"sc-65164a3b-1"})`
  max-height: 600px;
  padding-bottom: 8px;
  overflow-y: auto;

  @media screen and (max-width: ${a.j$.sm}px) {
    max-height: unset;
  }
`,_A=B.default.div.withConfig({displayName:"FeatureFlagModal__CenteredRow",componentId:"sc-65164a3b-2"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
  max-width: 100%;
  gap: 4px;
`,$A=B.default.button.withConfig({displayName:"FeatureFlagModal__CloseButton",componentId:"sc-65164a3b-3"})`
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({theme:C})=>C.neutral1};
`,Ce=(0,B.default)(_A).withConfig({displayName:"FeatureFlagModal__Header",componentId:"sc-65164a3b-4"})`
  font-weight: 535;
  font-size: 16px;
  border-bottom: 1px solid ${({theme:C})=>C.surface3};
  justify-content: space-between;
`,Ae=B.default.span.withConfig({displayName:"FeatureFlagModal__FlagName",componentId:"sc-65164a3b-5"})`
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:C})=>C.neutral1};
`,ee=B.default.span.withConfig({displayName:"FeatureFlagModal__FlagGroupName",componentId:"sc-65164a3b-6"})`
  font-size: 20px;
  line-height: 24px;
  color: ${({theme:C})=>C.neutral1};
  font-weight: 535;
`,ge=B.default.span.withConfig({displayName:"FeatureFlagModal__FlagDescription",componentId:"sc-65164a3b-7"})`
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:C})=>C.neutral2};
  display: flex;
  align-items: center;
`,te=B.default.div.withConfig({displayName:"FeatureFlagModal__FlagInfo",componentId:"sc-65164a3b-8"})`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  flex-shrink: 1;
  overflow: hidden;
`,ne=B.default.button.withConfig({displayName:"FeatureFlagModal__SaveButton",componentId:"sc-65164a3b-9"})`
  border-radius: 12px;
  padding: 8px;
  margin: 0px 20px;
  background: ${({theme:C})=>C.surface3};
  font-weight: 535;
  font-size: 16px;
  border: none;
  color: ${({theme:C})=>C.neutral1};
  cursor: pointer;

  :hover {
    background: ${({theme:C})=>C.surface3};
  }
`;function re({name:C,children:A}){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(_A,{children:(0,g.jsx)(ee,{children:C})},C),A]})}const Ee=B.default.select.withConfig({displayName:"FeatureFlagModal__FlagVariantSelection",componentId:"sc-65164a3b-10"})`
  border-radius: 12px;
  padding: 8px;
  background: ${({theme:C})=>C.surface3};
  font-weight: 535;
  font-size: 16px;
  border: none;
  color: ${({theme:C})=>C.neutral1};
  cursor: pointer;
  :hover {
    background: ${({theme:C})=>C.surface3};
  }
`;function ie({option:C}){return(0,g.jsx)("option",{value:C,children:C})}function Be({flag:C,label:A}){const e=(0,qA.p0)(C),t=(0,RA.getFeatureFlagName)(C);return(0,g.jsxs)(_A,{children:[(0,g.jsxs)(te,{children:[(0,g.jsx)(Ae,{children:t}),(0,g.jsx)(ge,{children:A})]}),(0,g.jsx)(Ee,{id:t,onChange:C=>{JA.Statsig.overrideGate(t,"Enabled"===C.target.value)},value:e?"Enabled":"Disabled",children:["Enabled","Disabled"].map((C=>(0,g.jsx)(ie,{option:C},C)))})]},C)}function ae({config:C,label:A,options:e,selected:t,parser:n}){const r=(0,XA.getConfigName)(C);return(0,g.jsxs)(_A,{children:[(0,g.jsxs)(te,{children:[(0,g.jsx)(Ae,{children:r}),(0,g.jsx)(ge,{children:A})]}),(0,g.jsx)("select",{multiple:!0,onChange:C=>{const A=Array.from(C.target.selectedOptions,(C=>n(C.value)));JA.Statsig.overrideConfig(r,{[WA]:A})},children:e.map((C=>(0,g.jsx)("option",{value:C,selected:t.includes(C),children:C},C)))})]},r)}function oe(){const C=(0,G.Wt)(Y.Lk.FEATURE_FLAGS),A=(0,G._x)();return(0,g.jsx)(NC.Z,{isOpen:C,onDismiss:A,children:(0,g.jsxs)(GA,{children:[(0,g.jsxs)(Ce,{children:[(0,g.jsxs)(p.ZP,{width:"100%",justify:"space-between",children:[(0,g.jsx)("span",{children:"Feature Flag Settings"}),(0,g.jsx)(H.Hm,{onClick:()=>{JA.Statsig.removeGateOverride(),JA.Statsig.removeConfigOverride()},children:"Clear Overrides"})]}),(0,g.jsx)($A,{onClick:()=>A(),children:(0,g.jsx)(X.Z,{size:24})})]}),(0,g.jsxs)(YA,{children:[(0,g.jsx)(Be,{flag:RA.FeatureFlags.Eip6936Enabled,label:"Enable EIP-6963: Multi Injected Provider Discovery"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.LimitsFees,label:"Enable Limits fees"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.CurrencyConversion,label:"Enable currency conversion"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.ExitAnimation,label:"Landing page exit animation"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.V2Everywhere,label:"Enable V2 Everywhere"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.Realtime,label:"Realtime activity updates"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.MultipleRoutingOptions,label:"Enable Multiple Routing Options"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.NavRefresh,label:"Refreshed navigation features"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.NavigationHotkeys,label:"Navigation hotkeys"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.ForAggregatorWeb,label:"Enable FOR aggregator web"}),(0,g.jsx)(re,{name:"New Chains",children:(0,g.jsx)(Be,{flag:RA.FeatureFlags.Zora,label:"Enable Zora"})}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.L2NFTs,label:"L2 NFTs"}),(0,g.jsxs)(re,{name:"Multichain UX",children:[(0,g.jsx)(Be,{flag:RA.FeatureFlags.MultichainUX,label:"Enable Multichain Swap/Send UX"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.MultichainExplore,label:"Enable Multichain Explore Page"})]}),(0,g.jsxs)(re,{name:"Quick routes",children:[(0,g.jsx)(Be,{flag:RA.FeatureFlags.QuickRouteMainnet,label:"Enable quick routes for Mainnet"}),(0,g.jsx)(ae,{selected:KA(),options:Q.WEB_SUPPORTED_CHAIN_IDS,parser:Number.parseInt,config:XA.DynamicConfigs.QuickRouteChains,label:"Enable quick routes for these chains"})]}),(0,g.jsxs)(re,{name:"UniswapX Flags",children:[(0,g.jsx)(Be,{flag:RA.FeatureFlags.UniswapXSyntheticQuote,label:"Force synthetic quotes for UniswapX"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.UniswapXv2,label:"UniswapX v2"})]}),(0,g.jsx)(re,{name:"Extension",children:(0,g.jsx)(Be,{flag:RA.FeatureFlags.ExtensionLaunch,label:"General phase of go-to-market campaign"})}),(0,g.jsxs)(re,{name:"Outage Banners",children:[(0,g.jsx)(Be,{flag:RA.FeatureFlags.OutageBannerArbitrum,label:"Outage Banner for Arbitrum"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.OutageBannerOptimism,label:"Outage Banner for Optimism"}),(0,g.jsx)(Be,{flag:RA.FeatureFlags.OutageBannerPolygon,label:"Outage Banner for Polygon"})]}),(0,g.jsx)(re,{name:"Debug",children:(0,g.jsx)(Be,{flag:RA.FeatureFlags.TraceJsonRpc,label:"Enables JSON-RPC tracing"})})]}),(0,g.jsx)(ne,{onClick:()=>window.location.reload(),children:"Reload"})]})})}var Qe=e(34849);const se=["eth","eth_arbitrum","eth_optimism","eth_polygon","eth_base","weth","wbtc","matic_polygon","polygon","usdc_arbitrum","usdc_optimism","usdc_polygon","usdc_base","usdc","usdt"];var Ie,le=e(76078),de=e(64370);const ce=[sC.Chain.Ethereum,sC.Chain.Polygon,sC.Chain.Arbitrum,sC.Chain.Optimism,sC.Chain.Base],Me=C=>!!C&&ce.includes(C),Ze={[sC.Chain.Ethereum]:{[null===(Ie=le.WETH9[Q.UniverseChainId.Mainnet])||void 0===Ie?void 0:Ie.address.toLowerCase()]:"weth",[de.Hz.address.toLowerCase()]:"usdc",[de.AA.address.toLowerCase()]:"usdt",[de.ML.address.toLowerCase()]:"wbtc",[de.Al.address.toLowerCase()]:"polygon",native:"eth"},[sC.Chain.Arbitrum]:{[de.pj.address.toLowerCase()]:"usdc_arbitrum",native:"eth_arbitrum"},[sC.Chain.Optimism]:{[de.SP.address.toLowerCase()]:"usdc_optimism",native:"eth_optimism"},[sC.Chain.Polygon]:{[de.QF.address.toLowerCase()]:"usdc_polygon",[de.H8.address.toLowerCase()]:"eth_polygon",native:"matic_polygon"},[sC.Chain.Base]:{[de.QP.address.toLowerCase()]:"usdc_base",native:"eth_base"}};function pe(C,A){if(!A)return"eth";var e;if(!C)return Me(A)?null===(e=Ze[A])||void 0===e?void 0:e.native:"eth";if(Me(A)){var g;return(null===(g=Ze[A])||void 0===g?void 0:g[C.toLowerCase()])??"eth"}return"eth"}var fe=e(76110),he=e(13288);function ue(C,A,e,g,t,n,r){try{var E=C[n](r),i=E.value}catch(B){return void e(B)}E.done?A(i):Promise.resolve(i).then(g,t)}function xe(C){return function(){var A=this,e=arguments;return new Promise((function(g,t){var n=C.apply(A,e);function r(C){ue(n,g,t,r,E,"next",C)}function E(C){ue(n,g,t,r,E,"throw",C)}r(void 0)}))}}const we="#1c1c1e",me=B.default.div.withConfig({displayName:"FiatOnrampModal__Wrapper",componentId:"sc-e370d8c3-0"})`
  // #1c1c1e is the background color for the darkmode moonpay iframe as of 2/16/2023
  background-color: ${({isDarkMode:C,theme:A})=>C?we:A.white};
  border-radius: 20px;
  box-shadow: ${({theme:C})=>C.deprecated_deepShadow};
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  flex: 1 1;
  min-width: 375px;
  position: relative;
  width: 100%;
`,ve=(0,B.default)(o.Tv.BodyPrimary).withConfig({displayName:"FiatOnrampModal__ErrorText",componentId:"sc-e370d8c3-1"})`
  color: ${({theme:C})=>C.critical};
  margin: auto !important;
  text-align: center;
  width: 90%;
`,je=B.default.iframe.withConfig({displayName:"FiatOnrampModal__StyledIframe",componentId:"sc-e370d8c3-2"})`
  // #1c1c1e is the background color for the darkmode moonpay iframe as of 2/16/2023
  background-color: ${({isDarkMode:C,theme:A})=>C?we:A.white};
  border-radius: 12px;
  bottom: 0;
  left: 0;
  height: calc(100% - 16px);
  margin: 8px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100% - 16px);
`,be=(0,B.default)(o._1).withConfig({displayName:"FiatOnrampModal__StyledSpinner",componentId:"sc-e370d8c3-3"})`
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
`,ye=B.default.div.withConfig({displayName:"FiatOnrampModal__MoonpayTextWrapper",componentId:"sc-e370d8c3-4"})`
  position: absolute;
  bottom: 20px;
  margin: auto;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
`;function Fe(){var C,A,e;const t=(0,r.m)(),i=(0,B.useTheme)(),a=(0,he.Gv)(),Q=(0,G._x)(),s=(0,G.Wt)(Y.Lk.FIAT_ONRAMP),{chain:I,tokenAddress:l}=function(C){const A=C.split("/"),e=(0,n.C)(A.length>2?A[A.length-2]:void 0);return{chain:(0,n.PG)(e),tokenAddress:A.length>2?A[A.length-1]:void 0}}(location.pathname),d=(0,fe.Z)().chain,c="string"===typeof d?(0,n.PG)((0,n.C)(d)):void 0,M=(0,n.zK)({chainId:t.chainId}),[Z,p]=(0,m.useState)(null),[f,h]=(0,m.useState)(null),[u,x]=(0,m.useState)(!1),w=(0,OA.oQ)("/swap"),v=(0,m.useCallback)(xe((function*(){if(t.isConnected){x(!0),h(null);try{var C,A,e;const g="https://us-central1-uniswap-mobile.cloudfunctions.net/signMoonpayLinkV2?platform=web&env=production",n=yield fetch(g,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({theme:a?"dark":"light",colorCode:i.accent1,defaultCurrencyCode:pe(l,(null===(C=I)||void 0===C?void 0:C.backendChain.chain)??(null===(A=c)||void 0===A?void 0:A.backendChain.chain)??(null===(e=M)||void 0===e?void 0:e.backendChain.chain)),redirectUrl:w,walletAddresses:JSON.stringify(se.reduce(((C,A)=>({...C,[A]:t.address})),{}))})}),{url:r}=yield n.json();p(r)}catch(g){TA.logger.info("FiatOnrampModal","fetchSingedIframeUrl","there was an error fetching the link",g),h(g.toString())}finally{x(!1)}}else h("Please connect an account before making a purchase.")})),[t.address,t.isConnected,null===(C=M)||void 0===C?void 0:C.backendChain.chain,null===(A=I)||void 0===A?void 0:A.backendChain.chain,a,null===(e=c)||void 0===e?void 0:e.backendChain.chain,w,i.accent1,l]);return(0,m.useEffect)((()=>{v()}),[v]),(0,g.jsxs)(NC.Z,{isOpen:s,onDismiss:()=>Q(),maxHeight:"80vh",height:"80vh",children:[(0,g.jsx)(me,{"data-testid":"fiat-onramp-modal",isDarkMode:a,children:f?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o.Tv.MediumHeader,{children:(0,g.jsx)(E.c,{i18nKey:"moonpay.rampIframe"})}),(0,g.jsxs)(ve,{children:[(0,g.jsx)(E.c,{i18nKey:"common.error.somethingWrong"}),(0,g.jsx)("br",{}),f]})]}):u?(0,g.jsx)(be,{src:Qe.Z,alt:"loading spinner",size:"90px"}):(0,g.jsx)(je,{src:Z??"",frameBorder:"0",title:"fiat-onramp-iframe",isDarkMode:a})}),(0,g.jsx)(ye,{children:(0,g.jsx)(o.Tv.BodySmall,{color:"neutral3",children:(0,g.jsx)(E.c,{i18nKey:"moonpay.poweredBy"})})})]})}var Se=e(27093);const ze=e.p+"static/media/extensionIllustration.1ce2d584822d031ec062.jpg",Ue=e.p+"static/media/walletIllustration.f0c417d629f4366ad332.jpg";var Ve=e(51214);function Pe(C){return(0,g.jsxs)("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",...C,children:[(0,g.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M57.622 15.321L59.122 11.645C59.122 11.645 57.213 9.602 54.895 7.287C52.578 4.972 47.67 6.334 47.67 6.334L42.081 0H22.45L16.861 6.334C16.861 6.334 11.953 4.972 9.636 7.287C7.318 9.602 5.41 11.645 5.41 11.645L6.91 15.321L5 20.768C5 20.768 10.614 42.004 11.272 44.598C12.567 49.704 13.453 51.678 17.134 54.266C20.814 56.853 27.494 61.346 28.584 62.028C29.675 62.708 31.039 63.868 32.266 63.868C33.493 63.868 34.856 62.708 35.946 62.028C37.037 61.347 43.716 56.853 47.398 54.266C51.078 51.679 51.965 49.704 53.26 44.598C53.917 42.004 59.53 20.768 59.53 20.768L57.622 15.321Z",fill:"url(#paint0_linear_11_3292)"}),(0,g.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M39.218 11.508C40.036 11.508 46.103 10.351 46.103 10.351C46.103 10.351 53.292 19.031 53.292 20.887C53.292 22.421 52.673 23.021 51.945 23.729C51.793 23.877 51.635 24.029 51.478 24.197L46.088 29.914C46.0301 29.9748 45.9715 30.0348 45.912 30.094C45.374 30.634 44.582 31.43 45.14 32.752L45.255 33.021C45.868 34.453 46.625 36.221 45.662 38.011C44.637 39.917 42.882 41.189 41.757 40.978C40.633 40.768 37.991 39.389 37.02 38.76C36.049 38.13 32.97 35.594 32.97 34.623C32.97 33.814 35.184 32.468 36.26 31.813C36.474 31.683 36.643 31.581 36.74 31.515C36.851 31.44 37.037 31.325 37.266 31.183C38.247 30.573 40.02 29.473 40.065 28.986C40.12 28.384 40.099 28.208 39.307 26.722C39.139 26.406 38.942 26.068 38.739 25.718C37.985 24.423 37.141 22.973 37.329 21.934C37.539 20.761 39.379 20.089 40.937 19.519C41.131 19.449 41.322 19.379 41.504 19.31L43.127 18.701C44.683 18.119 46.411 17.472 46.697 17.341C47.091 17.16 46.989 16.986 45.794 16.873C45.6006 16.854 45.4072 16.834 45.214 16.813C43.734 16.656 41.005 16.367 39.679 16.736C39.418 16.809 39.126 16.888 38.819 16.971C37.329 17.374 35.502 17.868 35.326 18.153C35.296 18.203 35.266 18.246 35.237 18.286C35.069 18.524 34.96 18.68 35.146 19.692C35.201 19.994 35.315 20.587 35.456 21.321C35.866 23.469 36.509 26.819 36.59 27.571C36.601 27.677 36.614 27.778 36.626 27.876C36.729 28.716 36.797 29.275 35.821 29.498L35.566 29.556C34.464 29.808 32.849 30.179 32.266 30.179C31.682 30.179 30.066 29.809 28.964 29.556L28.71 29.498C27.734 29.275 27.803 28.716 27.906 27.876C27.918 27.778 27.93 27.676 27.941 27.571C28.022 26.818 28.666 23.459 29.078 21.312C29.218 20.582 29.331 19.992 29.386 19.692C29.571 18.68 29.462 18.524 29.294 18.286C29.263 18.2423 29.233 18.198 29.204 18.153C29.03 17.868 27.204 17.374 25.713 16.971C25.406 16.888 25.113 16.809 24.853 16.736C23.526 16.366 20.798 16.656 19.318 16.813C19.092 16.837 18.896 16.858 18.738 16.873C17.542 16.986 17.441 17.16 17.835 17.341C18.12 17.472 19.848 18.119 21.403 18.701C22 18.924 22.573 19.138 23.027 19.31C23.21 19.379 23.4 19.448 23.595 19.52C25.153 20.09 26.993 20.761 27.203 21.934C27.39 22.973 26.546 24.423 25.793 25.718C25.589 26.068 25.393 26.406 25.224 26.722C24.433 28.208 24.412 28.384 24.467 28.986C24.511 29.474 26.283 30.573 27.265 31.183C27.494 31.325 27.68 31.44 27.791 31.515C27.889 31.581 28.057 31.683 28.271 31.813C29.347 32.467 31.561 33.813 31.561 34.623C31.561 35.593 28.483 38.13 27.511 38.76C26.541 39.39 23.899 40.768 22.774 40.978C21.65 41.188 19.894 39.917 18.87 38.012C17.907 36.221 18.663 34.453 19.276 33.022L19.391 32.752C19.95 31.43 19.158 30.634 18.619 30.094C18.5599 30.0348 18.5015 29.9748 18.444 29.914L13.054 24.197C12.896 24.03 12.738 23.877 12.586 23.729C11.858 23.022 11.24 22.421 11.24 20.887C11.24 19.032 18.429 10.351 18.429 10.351C18.429 10.351 24.495 11.508 25.313 11.508C25.966 11.508 27.226 11.075 28.54 10.623C28.873 10.509 29.209 10.393 29.54 10.283C31.175 9.73801 32.266 9.73401 32.266 9.73401C32.266 9.73401 33.356 9.73801 34.992 10.283C35.322 10.393 35.659 10.509 35.992 10.623C37.305 11.075 38.566 11.508 39.218 11.508ZM38.177 42.214C39.459 42.874 40.369 43.342 40.713 43.557C41.158 43.835 40.887 44.36 40.481 44.647C40.076 44.932 34.628 49.146 34.1 49.612L33.885 49.803C33.376 50.262 32.726 50.847 32.265 50.847C31.805 50.847 31.155 50.261 30.645 49.803L30.432 49.612C29.902 49.146 24.455 44.932 24.05 44.646C23.645 44.36 23.373 43.836 23.818 43.556C24.162 43.342 25.073 42.873 26.357 42.212L27.577 41.583C29.497 40.591 31.892 39.746 32.266 39.746C32.639 39.746 35.033 40.59 36.955 41.583C37.391 41.809 37.8 42.021 38.177 42.214Z",fill:"white"}),(0,g.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M47.67 6.334L42.081 0H22.45L16.861 6.334C16.861 6.334 11.953 4.972 9.63605 7.287C9.63605 7.287 16.18 6.697 18.429 10.351C18.429 10.351 24.495 11.508 25.313 11.508C26.131 11.508 27.903 10.828 29.539 10.283C31.175 9.738 32.266 9.734 32.266 9.734C32.266 9.734 33.356 9.738 34.992 10.283C36.628 10.828 38.4 11.508 39.218 11.508C40.036 11.508 46.103 10.351 46.103 10.351C48.352 6.697 54.895 7.287 54.895 7.287C52.578 4.972 47.67 6.334 47.67 6.334Z",fill:"url(#paint1_linear_11_3292)"}),(0,g.jsxs)("defs",{children:[(0,g.jsxs)("linearGradient",{id:"paint0_linear_11_3292",x1:"5.001",y1:"64.319",x2:"59.53",y2:"64.319",gradientUnits:"userSpaceOnUse",children:[(0,g.jsx)("stop",{stopColor:"#FF5500"}),(0,g.jsx)("stop",{offset:"0.41",stopColor:"#FF5500"}),(0,g.jsx)("stop",{offset:"0.582",stopColor:"#FF2000"}),(0,g.jsx)("stop",{offset:"1",stopColor:"#FF2000"})]}),(0,g.jsxs)("linearGradient",{id:"paint1_linear_11_3292",x1:"10.608",y1:"11.466",x2:"54.895",y2:"11.466",gradientUnits:"userSpaceOnUse",children:[(0,g.jsx)("stop",{stopColor:"#FF452A"}),(0,g.jsx)("stop",{offset:"1",stopColor:"#FF2000"})]})]})]})}function Oe(C){return(0,g.jsxs)("svg",{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"48",height:"48",...C,children:[(0,g.jsxs)("defs",{children:[(0,g.jsxs)("linearGradient",{id:"a",x1:"3.2173",y1:"15",x2:"44.7812",y2:"15",gradientUnits:"userSpaceOnUse",children:[(0,g.jsx)("stop",{offset:"0",stopColor:"#d93025"}),(0,g.jsx)("stop",{offset:"1",stopColor:"#ea4335"})]}),(0,g.jsxs)("linearGradient",{id:"b",x1:"20.7219",y1:"47.6791",x2:"41.5039",y2:"11.6837",gradientUnits:"userSpaceOnUse",children:[(0,g.jsx)("stop",{offset:"0",stopColor:"#fcc934"}),(0,g.jsx)("stop",{offset:"1",stopColor:"#fbbc04"})]}),(0,g.jsxs)("linearGradient",{id:"c",x1:"26.5981",y1:"46.5015",x2:"5.8161",y2:"10.506",gradientUnits:"userSpaceOnUse",children:[(0,g.jsx)("stop",{offset:"0",stopColor:"#1e8e3e"}),(0,g.jsx)("stop",{offset:"1",stopColor:"#34a853"})]})]}),(0,g.jsx)("circle",{cx:"24",cy:"23.9947",r:"12",fill:"#fff"}),(0,g.jsx)("path",{d:"M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z",fill:"none"}),(0,g.jsx)("path",{d:"M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z",fill:"url(#a)"}),(0,g.jsx)("circle",{cx:"24",cy:"24",r:"9.5",fill:"#1a73e8"}),(0,g.jsx)("path",{d:"M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z",fill:"url(#b)"}),(0,g.jsx)("path",{d:"M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z",fill:"url(#c)"})]})}var ke=e(44260),Ne=e(28330),Le=e(95546);function He({title:C,subtext:A,children:e}){return(0,g.jsxs)(N.lg,{gap:"xl",children:[(0,g.jsxs)(N.lg,{gap:"md",children:[(0,g.jsx)(Le.y,{width:64,height:64}),(0,g.jsxs)(N.lg,{gap:"sm",children:[(0,g.jsx)(o.Tv.H1Medium,{textAlign:"center",children:C}),(0,g.jsx)(o.Tv.BodySecondary,{textAlign:"center",maxWidth:"400px",children:A})]})]}),e]})}var De=e(85579),Xe=e(96929);const qe=B.default.div.withConfig({displayName:"GetStarted__IllustrationContainer",componentId:"sc-991c4138-0"})`
  display: flex;
  max-width: 100%;
  border-radius: 16px;
  border: ${({theme:C})=>`1px solid ${C.neutral3}`};
  overflow: hidden;
`,Te=B.default.img.withConfig({displayName:"GetStarted__Illustration",componentId:"sc-991c4138-1"})`
  width: 100%;
  transition: ${({theme:C})=>`transform ${C.transition.timing.inOut} ${C.transition.duration.medium}`};
`,We=(0,B.default)(N.ZP).withConfig({displayName:"GetStarted__Card",componentId:"sc-991c4138-2"})`
  cursor: pointer;
  &:hover {
    ${Te} {
      transform: scale(1.1);
    }
  }
`,Ke=B.default.div.withConfig({displayName:"GetStarted__RightContent",componentId:"sc-991c4138-3"})`
  margin-top: 4px;
  stroke: none;
  :hover {
    opacity: 1;
  }
`;function ig(){const{t:C}=(0,De.useTranslation)();return(0,g.jsxs)(He,{title:C("common.downloadUniswapApp"),subtext:C("common.scanQRDownload"),children:[(0,g.jsx)(Eg,{href:"https://uniswapwallet.onelink.me/8q3y/m4i9qsez?af_qr=true",children:(0,g.jsx)(rg,{width:200,height:200})}),(0,g.jsxs)(p.ZP,{justify:"center",gap:"16px",children:[(0,g.jsx)(Eg,{href:"https://apps.apple.com/us/app/uniswap-crypto-nft-wallet/id6443944476",children:(0,g.jsx)(Cg,{})}),(0,g.jsx)(Eg,{href:"https://play.google.com/store/apps/details?id=com.uniswap.mobile&pcampaignid=web_share",children:(0,g.jsx)(ng,{})})]})]})}var Bg=e(21926);const ag=(0,B.default)(NC.Z).withConfig({displayName:"Modal__StyledModal",componentId:"sc-7b820fd2-0"})`
  display: block;
`,og=B.default.div.withConfig({displayName:"Modal__Wrapper",componentId:"sc-7b820fd2-1"})`
  position: relative;
  padding: 32px;
  width: 100%;
  user-select: none;
`,Qg=(0,B.default)(X.Z).withConfig({displayName:"Modal__CloseIcon",componentId:"sc-7b820fd2-2"})`
  width: 25px;
  height: 25px;
  stroke: ${({theme:C})=>C.neutral2};
`,sg=B.default.div.withConfig({displayName:"Modal__CloseButton",componentId:"sc-7b820fd2-3"})`
  width: 32px;
  height: 32px;
  padding: 4px;
  cursor: pointer;
  :hover {
    ${Qg} {
      stroke: ${({theme:C})=>C.neutral1};
    }
  }
`,Ig=(0,B.default)(Bg.Z).withConfig({displayName:"Modal__BackIcon",componentId:"sc-7b820fd2-4"})`
  stroke: ${({theme:C})=>C.neutral2};
`,lg=B.default.div.withConfig({displayName:"Modal__BackButton",componentId:"sc-7b820fd2-5"})`
  width: 32px;
  height: 32px;
  padding: 4px;
  cursor: pointer;
  :hover {
    ${Ig} {
      stroke: ${({theme:C})=>C.neutral1};
    }
  }
`;var dg;function cg(){const[C,A]=(0,m.useState)(dg.GetStarted),e=(0,G.Wt)(Y.Lk.GET_THE_APP),t=!(0,qA.ye)(RA.FeatureFlags.NavRefresh),n=(0,G._x)(),r=(0,m.useCallback)((()=>{n(),setTimeout((()=>A(dg.GetStarted)),500)}),[n,A]),E=!t&&C!==dg.GetStarted;return(0,g.jsx)(ag,{isOpen:e,maxWidth:620,slideIn:!0,onDismiss:n,children:(0,g.jsxs)(og,{children:[(0,g.jsxs)(p.ZP,{justify:E?"space-between":"end",children:[E&&(0,g.jsx)(lg,{onClick:()=>A(dg.GetStarted),children:(0,g.jsx)(Ig,{})}),(0,g.jsx)(sg,{onClick:r,"data-testid":"get-the-app-close-button",children:(0,g.jsx)(Qg,{})})]}),t?(0,g.jsx)(ig,{}):(0,g.jsxs)(Se.s,{currentIndex:C===dg.GetStarted?0:1,slideDirection:C===dg.GetStarted?"forward":"backward",children:[(0,g.jsx)(Je,{toAppDownload:()=>A(dg.GetApp)}),(0,g.jsx)(ig,{})]})]})})}!function(C){C.GetStarted="GetStarted",C.GetApp="GetApp"}(dg||(dg={}));var Mg=e(61182),Zg=e(4168),pg=e(81205),fg=e(19487);const hg=B.default.div.withConfig({displayName:"PrivacyPolicy__Wrapper",componentId:"sc-e1d8f8b8-0"})`
  max-height: 70vh;
  overflow: auto;
  padding: 0 1rem;
`,ug=(0,B.default)(Mg.ZP).withConfig({displayName:"PrivacyPolicy__StyledExternalCard",componentId:"sc-e1d8f8b8-1"})`
  background-color: ${({theme:C})=>C.accent2};
  padding: 0.5rem;
  width: 100%;

  :hover,
  :focus,
  :active {
    background-color: ${({theme:C})=>C.neutral3};
  }
`,xg=B.default.div.withConfig({displayName:"PrivacyPolicy__HoverText",componentId:"sc-e1d8f8b8-2"})`
  text-decoration: none;
  color: ${({theme:C})=>C.neutral1};
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`,wg=(0,B.default)(Zg.Z).withConfig({displayName:"PrivacyPolicy__StyledLinkOut",componentId:"sc-e1d8f8b8-3"})`
  transform: rotate(230deg);
`,mg=[{name:"Auto Router",description:(0,g.jsx)(E.c,{i18nKey:"privacy.autoRouter"})},{name:"Infura",description:(0,g.jsx)(E.c,{i18nKey:"privacy.infura"})},{name:"TRM Labs",description:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(E.c,{i18nKey:"privacy.trm"})," ",(0,g.jsx)(o.dL,{href:"https://support.uniswap.org/hc/en-us/articles/8671777747597-Address-Screening-Guide",children:(0,g.jsx)(E.c,{i18nKey:"common.learnMore.link"})})]})},{name:"Google Analytics & Amplitude",description:(0,g.jsx)(E.c,{i18nKey:"privacy.anonymizedLogs"})}];function vg(){const C=(0,m.useRef)(),A=(0,G.Wt)(Y.Lk.PRIVACY_POLICY),e=(0,G.OG)();return(0,m.useEffect)((()=>{A&&(0,BA._P)(SC.Gz.PAGE_VIEWED,{modal:fg.ModalName.Legal})}),[A]),(0,g.jsx)(NC.Z,{isOpen:A,onDismiss:()=>e(),children:(0,g.jsxs)(N.Tz,{gap:"md",ref:C,children:[(0,g.jsxs)(p.m0,{padding:"1rem 1rem 0.5rem 1rem",children:[(0,g.jsx)(o.Tv.DeprecatedMediumHeader,{children:(0,g.jsx)(E.c,{i18nKey:"common.legalAndPrivacy"})}),(0,g.jsx)(xg,{onClick:()=>e(),children:(0,g.jsx)(X.Z,{size:24})})]}),(0,g.jsx)(jg,{})]})})}function jg(){return(0,g.jsx)(hg,{draggable:"true",onTouchMove:C=>{aA.isMobile&&C.stopPropagation()},children:(0,g.jsxs)(N.Tz,{gap:"16px",children:[(0,g.jsxs)(N.Tz,{gap:"sm",style:{width:"100%"},children:[(0,g.jsx)(ug,{children:(0,g.jsx)(o.dL,{href:"https://uniswap.org/terms-of-service",children:(0,g.jsxs)(p.m0,{children:[(0,g.jsxs)(p.BA,{gap:"4px",children:[(0,g.jsx)(pg.Z,{size:20}),(0,g.jsx)(o.Tv.DeprecatedMain,{fontSize:14,color:"accent1",children:(0,g.jsx)(E.c,{i18nKey:"privacy.uniswaptos"})})]}),(0,g.jsx)(wg,{size:20})]})})}),(0,g.jsx)(ug,{children:(0,g.jsx)(o.dL,{href:"https://uniswap.org/privacy-policy/",children:(0,g.jsxs)(p.m0,{children:[(0,g.jsxs)(p.BA,{gap:"4px",children:[(0,g.jsx)(pg.Z,{size:20}),(0,g.jsx)(o.Tv.DeprecatedMain,{fontSize:14,color:"accent1",children:(0,g.jsx)(E.c,{i18nKey:"common.privacyPolicy"})})]}),(0,g.jsx)(wg,{size:20})]})})})]}),(0,g.jsx)(o.Tv.DeprecatedMain,{fontSize:14,children:(0,g.jsx)(E.c,{i18nKey:"privacy.thirdPartyApis"})}),(0,g.jsxs)(N.Tz,{gap:"md",children:[mg.map((({name:C,description:A},e)=>(0,g.jsx)(Mg.OY,{children:(0,g.jsxs)(N.Tz,{gap:"sm",children:[(0,g.jsxs)(p.BA,{gap:"4px",children:[(0,g.jsx)(pg.Z,{size:18}),(0,g.jsx)(o.Tv.DeprecatedMain,{fontSize:14,color:"neutral1",children:C})]}),(0,g.jsx)(o.Tv.DeprecatedMain,{fontSize:14,children:A})]})},e))),(0,g.jsx)(o.Tv.DeprecatedBody,{fontSize:12,children:(0,g.jsx)(p.ZP,{justify:"center",marginBottom:"1rem",children:(0,g.jsx)(o.dL,{href:"https://help.uniswap.org/en/articles/5675203-terms-of-service-faq",children:(0,g.jsx)(E.c,{i18nKey:"common.learnMore.link"})})})})]})]})})}var bg=e(90328);const yg=(0,B.default)(N.ZP).withConfig({displayName:"UkDisclaimerModal__Wrapper",componentId:"sc-1bbe3fa0-0"})`
  padding: 8px;
`,Fg=(0,B.default)(N.ZP).withConfig({displayName:"UkDisclaimerModal__ButtonContainer",componentId:"sc-1bbe3fa0-1"})`
  padding: 8px 12px 4px;
`,Sg=(0,B.default)(o.oD).withConfig({displayName:"UkDisclaimerModal__CloseIconWrapper",componentId:"sc-1bbe3fa0-2"})`
  display: flex;
  color: ${({theme:C})=>C.neutral1};
  justify-content: flex-end;
  padding: 8px 0px 4px;

  :focus {
    text-decoration: none;
  }
`,zg=(0,B.default)(H.UH).withConfig({displayName:"UkDisclaimerModal__StyledThemeButton",componentId:"sc-1bbe3fa0-3"})`
  width: 100%;
`;function Ug(){const C=(0,G.Wt)(Y.Lk.UK_DISCLAIMER),A=(0,G._x)();return(0,g.jsx)(NC.Z,{isOpen:C,onDismiss:A,children:(0,g.jsxs)(yg,{gap:"md",children:[(0,g.jsx)(Sg,{onClick:()=>A(),children:(0,g.jsx)(X.Z,{size:24})}),(0,g.jsxs)(N.ZP,{gap:"sm",children:[(0,g.jsx)(o.Tv.HeadlineLarge,{padding:"0px 8px",fontSize:"24px",lineHeight:"32px",children:(0,g.jsx)(E.c,{i18nKey:"search.ukDisclaimer"})}),(0,g.jsx)(o.Tv.BodyPrimary,{padding:"8px 8px 12px",lineHeight:"24px",children:bg.Fb})]}),(0,g.jsx)(Fg,{gap:"md",children:(0,g.jsx)(zg,{size:H.qE.large,emphasis:H.eI.medium,onClick:()=>A(),children:(0,g.jsx)(E.c,{i18nKey:"common.dismiss"})})})]})})}var Vg=e(16851),Pg=e(32305),Og=e(27296),kg=e(13446);const Ng=(0,B.default)(N.Tz).withConfig({displayName:"AddressClaimModal__ContentWrapper",componentId:"sc-23c1a04e-0"})`
  width: 100%;
`,Lg=(0,B.default)(D.I8).withConfig({displayName:"AddressClaimModal__ModalUpper",componentId:"sc-23c1a04e-1"})`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);
`,Hg=B.default.div.withConfig({displayName:"AddressClaimModal__ConfirmOrLoadingWrapper",componentId:"sc-23c1a04e-2"})`
  width: 100%;
  padding: 24px;
  position: relative;
  background: ${({activeBG:C})=>C&&"radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;"};
`,Dg=(0,B.default)(N.lg).withConfig({displayName:"AddressClaimModal__ConfirmedIcon",componentId:"sc-23c1a04e-3"})`
  padding: 60px 0;
`;function Xg({isOpen:C,onDismiss:A}){var e,t;const{chainId:n}=(0,r.m)(),[i,B]=(0,m.useState)("");const{address:a}=(0,Og.Z)(i),[Q,s]=(0,m.useState)(!1),{claimCallback:I}=(0,_.NH)(a),l=(0,_.jX)(a),d=(0,_.ot)(a),[c,M]=(0,m.useState)(),Z=(0,QC.ub)(c??""),f=c&&!Z;function h(){s(!1),M(void 0),B(""),A()}const u=null===(e=l)||void 0===e?void 0:e.toFixed(0,{groupSeparator:","}??"-"),x=null===(t=l)||void 0===t?void 0:t.toFixed(0,{groupSeparator:","}??"-");return(0,g.jsxs)(NC.Z,{isOpen:C,onDismiss:h,maxHeight:"90vh",children:[!Q&&(0,g.jsxs)(Ng,{gap:"lg",children:[(0,g.jsxs)(Lg,{children:[(0,g.jsx)(D.sq,{}),(0,g.jsx)(D.RF,{}),(0,g.jsxs)(D.uO,{gap:"md",children:[(0,g.jsxs)(p.m0,{children:[(0,g.jsx)(b.xv,{color:"$white",fontWeight:"$medium",children:(0,g.jsx)(E.c,{i18nKey:"common.claimUni"})}),(0,g.jsx)(o.Tw,{onClick:h,style:{zIndex:99},stroke:"white"})]}),(0,g.jsxs)(b.xv,{color:"$white",fontWeight:"$medium",fontSize:36,children:[u," UNI"]})]}),(0,g.jsx)(D.SS,{})]}),(0,g.jsxs)(N.Tz,{gap:"md",style:{padding:"1rem",paddingTop:"0"},justify:"center",children:[(0,g.jsx)(o.Tv.DeprecatedSubHeader,{fontWeight:535,children:(0,g.jsx)(E.c,{i18nKey:"unitag.addressClaim"})}),(0,g.jsx)(Pg.Z,{value:i,onChange:function(C){B(C)}}),a&&!d&&(0,g.jsx)(b.xv,{color:"$statusCritical",children:(0,g.jsx)(E.c,{i18nKey:"uni.claim.notAvailable"})}),(0,g.jsx)(H.DF,{disabled:!(0,Vg.isAddress)(a??"")||!d,padding:"16px 16px",width:"100%",$borderRadius:"12px",mt:"1rem",onClick:function(){s(!0),I().then((C=>{M(C)})).catch((C=>{s(!1),TA.logger.warn("AddressClaimModal","onClaim","error",C)}))},children:(0,g.jsx)(E.c,{i18nKey:"uni.claim"})})]})]}),(Q||f)&&(0,g.jsxs)(Hg,{activeBG:!0,children:[(0,g.jsx)(D.RF,{}),(0,g.jsx)(D.MN,{desaturate:!0}),(0,g.jsxs)(p.m0,{children:[(0,g.jsx)("div",{}),(0,g.jsx)(o.Tw,{onClick:h,style:{zIndex:99},stroke:"black"})]}),(0,g.jsx)(Dg,{children:f?(0,g.jsx)(o.M3,{width:"72px",src:L,alt:"UNI logo"}):(0,g.jsx)(o._1,{src:Qe.Z,alt:"loader",size:"90px"})}),(0,g.jsxs)(N.Tz,{gap:"100px",justify:"center",children:[(0,g.jsxs)(N.Tz,{gap:"md",justify:"center",children:[(0,g.jsx)(o.Tv.DeprecatedLargeHeader,{fontWeight:535,color:"black",children:f?(0,g.jsx)(E.c,{i18nKey:"common.claimed"}):(0,g.jsx)(E.c,{i18nKey:"common.claiming"})}),!f&&(0,g.jsxs)(b.xv,{fontSize:36,color:"#ff007a",fontWeight:"$medium",children:[x," UNI"]}),a&&(0,g.jsx)(o.Tv.DeprecatedLargeHeader,{fontWeight:535,color:"black",children:(0,g.jsx)(E.c,{i18nKey:"common.for.address",values:{address:(0,kg.Xn)(a)}})})]}),f&&(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(o.Tv.DeprecatedSubHeader,{fontWeight:535,color:"black",children:[(0,g.jsxs)("span",{role:"img","aria-label":"party-hat",children:["\ud83c\udf89"," "]}),(0,g.jsx)(E.c,{i18nKey:"uni.welcome"}),(0,g.jsx)("span",{role:"img","aria-label":"party-hat",children:"\ud83c\udf89"})]})}),Q&&!c&&(0,g.jsx)(o.Tv.DeprecatedSubHeader,{color:"black",children:(0,g.jsx)(E.c,{i18nKey:"common.confirmTransaction.button"})}),Q&&c&&!f&&n&&c&&(0,g.jsx)(o.dL,{href:(0,F.E)(n,c,F.r.TRANSACTION),style:{zIndex:99},children:(0,g.jsx)(E.c,{i18nKey:"common.viewTransactionExplorer.link"})})]})]})]})}function qg(){return qg=Object.assign||function(C){for(var A=1;A<arguments.length;A++){var e=arguments[A];for(var g in e)Object.prototype.hasOwnProperty.call(e,g)&&(C[g]=e[g])}return C},qg.apply(this,arguments)}function Tg(C,A){if(null==C)return{};var e,g,t=function(C,A){if(null==C)return{};var e,g,t={},n=Object.keys(C);for(g=0;g<n.length;g++)e=n[g],A.indexOf(e)>=0||(t[e]=C[e]);return t}(C,A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(C);for(g=0;g<n.length;g++)e=n[g],A.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(C,e)&&(t[e]=C[e])}return t}var Wg=(0,m.forwardRef)((function(C,A){var e=C.color,g=void 0===e?"currentColor":e,t=C.size,n=void 0===t?24:t,r=Tg(C,["color","size"]);return m.createElement("svg",qg({ref:A,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:g,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),m.createElement("circle",{cx:"12",cy:"12",r:"3"}),m.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))}));Wg.propTypes={color:T().string,size:T().oneOfType([T().string,T().number])},Wg.displayName="Settings";const Kg=Wg;function Rg(){return Rg=Object.assign||function(C){for(var A=1;A<arguments.length;A++){var e=arguments[A];for(var g in e)Object.prototype.hasOwnProperty.call(e,g)&&(C[g]=e[g])}return C},Rg.apply(this,arguments)}function Jg(C,A){if(null==C)return{};var e,g,t=function(C,A){if(null==C)return{};var e,g,t={},n=Object.keys(C);for(g=0;g<n.length;g++)e=n[g],A.indexOf(e)>=0||(t[e]=C[e]);return t}(C,A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(C);for(g=0;g<n.length;g++)e=n[g],A.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(C,e)&&(t[e]=C[e])}return t}var Gg=(0,m.forwardRef)((function(C,A){var e=C.color,g=void 0===e?"currentColor":e,t=C.size,n=void 0===t?24:t,r=Jg(C,["color","size"]);return m.createElement("svg",Rg({ref:A,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:g,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),m.createElement("path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}),m.createElement("line",{x1:"4",y1:"22",x2:"4",y2:"15"}))}));Gg.propTypes={color:T().string,size:T().oneOfType([T().string,T().number])},Gg.displayName="Flag";const Yg=Gg;var _g=e(47558);const $g=B.default.div.withConfig({displayName:"DevFlagsBox__Box",componentId:"sc-5c68d42a-0"})`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: ${({theme:C})=>C.surface1};
  padding: 10px;
  border: 1px solid ${({theme:C})=>C.surface3};
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(34, 34, 34, 0.04);
  user-select: none;
  z-index: ${mC.k.fixed};

  @media only screen and (max-width: ${({theme:C})=>`${C.breakpoint.md}px`}) {
    bottom: 70px;
  }
`,Ct=(C,A)=>(0,g.jsxs)(o.Tv.LabelSmall,{children:[C,": ",JSON.stringify(A)]},C),At=(0,B.default)(N.lg).withConfig({displayName:"DevFlagsBox__SettingsContainer",componentId:"sc-5c68d42a-1"})`
  width: 30px;
  height: 30px;
  justify-content: center;
  border-radius: 12px;
  :hover {
    background: ${({theme:C})=>C.surface2};
  }
`;function et(){const C=JA.Statsig.initializeCalled()?JA.Statsig.getAllOverrides():{gates:{},configs:{},layers:{}},A=Object.entries(C.configs),e=[...Object.entries(C.gates),...A].map((([C,A])=>Ct(C,A))),t=e.some((C=>null!==C)),[n,r]=(0,m.useState)(!1),E=(0,G.xk)(Y.Lk.FEATURE_FLAGS),i=(0,G._x)();return(0,g.jsxs)($g,{onClick:()=>{r((C=>!C)),i()},children:[n?(0,g.jsxs)(p.m0,{children:[(0,g.jsxs)(o.Tv.SubHeader,{children:[(0,_g.isDevEnv)()&&"Local Overrides",(0,_g.isBetaEnv)()&&"Staging Overrides"]}),(0,g.jsx)(f.ud,{size:f.Oz.Small,text:"Protip: Set feature flags by adding '?featureFlagOverride={flag_name}' to the URL",children:(0,g.jsx)(At,{onClick:C=>{C.stopPropagation(),E()},children:(0,g.jsx)(Kg,{width:15,height:15})})})]}):(0,g.jsx)(Yg,{}),n&&(t?e:(0,g.jsx)(o.Tv.LabelSmall,{children:"No overrides"}))]})}var gt=e(47856);var tt=e(3464),nt=e(66284),rt=e(21989),Et=e(66936),it=e(97341),Bt=e(18533),at=e(15288),ot=(e(18111),"hwks9j7 rgw6ezd9 rgw6ez4b9 rgw6ezbl rgw6ezpr rgw6ezv9 rgw6ezvl rgw6ezfx rgw6ezfm"),Qt="hwks9jm rgw6ezb9 rgw6ez4bf rgw6ezvr rgw6ezf3",st="hwks9jy rgw6ez4bf rgw6ezb3 rgw6ezl3",It=e(60040),lt=e(58690),dt=e(70518),ct=e(27389),Mt=e(79132),Zt=e(47263),pt=e(78129),ft=e(41323),ht=e(48313),ut=e(40095);const xt=B.default.a.withConfig({displayName:"TransactionCompleteModal__UploadLink",componentId:"sc-d1ef248-0"})`
  position: absolute;
  right: 32px;
  top: 32px;
  color: ${({theme:C})=>C.neutral2};
  cursor: pointer;

  ${MA.cR}

  @media only screen and (max-width: ${({theme:C})=>`${C.breakpoint.sm}px`}) {
    right: 12px;
    top: 28px;
  }
`,wt=()=>{const C=(0,Mt.$N)(),{formatEther:A,formatNumberOrString:e}=(0,IC.Gb)(),[t,n]=(0,m.useState)(!1),r=(0,Mt.pQ)((C=>C.txHash)),i=(0,Mt.pQ)((C=>C.purchasedWithErc20)),B=(0,Mt.pQ)((C=>C.setState)),a=(0,Mt.pQ)((C=>C.state)),o=(0,m.useRef)(a),Q=(0,Mt.JC)((C=>C.transactionResponse)),s=(0,Mt.JC)((C=>C.setTransactionResponse)),I=(0,it.dD)(),l=(0,F.E)(1,r,F.r.TRANSACTION),d=(a===Zt.c$.Success||a===Zt.c$.Failed)&&a,c=(0,ut.o)({modal:SC.KO.NFT_TX_COMPLETE}),{nftsPurchased:M,nftsNotPurchased:Z,showPurchasedModal:p,showRefundModal:f,totalPurchaseValue:h,totalRefundValue:u,totalUSDRefund:x,txFeeFiat:w}=(0,m.useMemo)((()=>(0,pt.lb)(Q,C)),[Q,C]);function v(){s({}),B(Zt.c$.New)}(0,m.useEffect)((()=>{Mt.pQ.subscribe((C=>o.current=C.state))}),[]);return(0,g.jsx)(g.Fragment,{children:d&&(0,g.jsxs)(It.h,{children:[(0,g.jsx)(dt.a,{onClick:v}),(0,g.jsxs)(Bt.n,{className:"hwks9j1 rgw6ez2dr rgw6ez2j9 rgw6ez2rf rgw6ez2ax rgw6ez44r rgw6ez48r rgw6ez1dr rgw6ez16r rgw6ez16y rgw6ez343 rgw6ez394 rgw6ez3f3 rgw6ez3rl rgw6ez8bp",onClick:v,children:[p&&(0,g.jsx)(ht.default,{logImpression:!0,eventOnTrigger:SC.Yz.NFT_BUY_BAG_SUCCEEDED,properties:{buy_quantity:M.length,usd_value:parseFloat((0,nt.formatEther)(h))*C,transaction_hash:r,using_erc20:i,...(0,ft.H)(M),...c},children:(0,g.jsxs)(Bt.n,{className:"hwks9j3 rgw6ez4qf rgw6ez819 rgw6ez44r rgw6ez443 rgw6ez1dx rgw6ez48x rgw6ez16r rgw6ez16y rgw6ez2pr rgw6ez2ps rgw6ez299 rgw6ez29a",onClick:dt.U,children:[(0,g.jsx)(Et.j,{color:ct.gR.color.pink400,width:"36",height:"36",className:"rgw6ez48l rgw6ez359 rgw6ez36g rgw6ez3gl rgw6ez3gy"}),(0,g.jsxs)(Bt.n,{display:"flex",flexWrap:"wrap",width:"full",height:"min",children:[(0,g.jsx)("h1",{className:ot,children:(0,g.jsx)(E.c,{i18nKey:"nft.complete"})}),(0,g.jsx)("p",{className:"hwks9jd rgw6ez4b9 rgw6ezb9 rgw6ez16r rgw6ez469 rgw6ezpr rgw6ezv9 rgw6ezvl rgw6ezgx",children:(0,g.jsx)(E.c,{i18nKey:"nft.wishGranted"})})]}),(0,g.jsx)(xt,{onClick:()=>{window.open((0,pt.fj)(M,l),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,g.jsx)(lt.Zm,{width:32,height:32,color:ct.Z4.colors.neutral2})}),(0,g.jsx)(Bt.n,{className:"hwks9jf rgw6ez44r rgw6ez443 rgw6ez16r rgw6ez8bp rgw6ez47l",style:{maxHeight:M.length>32?I?"172px":"292px":"min-content"},children:[...M].map(((C,A)=>(0,g.jsx)("img",{className:(0,rt.default)("hwks9jh rgw6ez80x rgw6ez3xr",M.length>1&&"rgw6ezql rgw6ezqy rgw6ezfl rgw6ezfy"),style:{maxHeight:`${(0,pt.QP)(M.length,I)}px`,maxWidth:`${(0,pt.QP)(M.length,I)}px`},src:C.imageUrl,alt:C.name},A)))}),M.length>32&&(0,g.jsx)(Bt.n,{className:"hwks9jk"}),(0,g.jsxs)(Bt.n,{display:"flex",width:"full",height:"min",flexDirection:"row",marginTop:{sm:"20",md:"20"},flexWrap:{sm:"wrap",md:"nowrap"},alignItems:"center",paddingRight:"40",paddingLeft:"40",className:"rgw6ez4b9 rgw6ezb9",justifyContent:"space-between",children:[(0,g.jsxs)(at.X2,{children:[(0,g.jsxs)(Bt.n,{marginRight:"16",children:[M.length," NFT",1===M.length?"":"s"]}),(0,g.jsxs)(Bt.n,{children:[A({input:h.toString(),type:IC.sw.NFTToken})," ","ETH"]})]}),(0,g.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,g.jsx)(Bt.n,{color:"neutral2",fontWeight:"book",children:(0,g.jsx)(E.c,{i18nKey:"common.etherscan.link"})})})]})]})}),f&&(p?(0,g.jsx)(ht.default,{logImpression:!0,eventOnTrigger:SC.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:M.length,fail_quantity:Z.length,refund_amount_usd:x,transaction_hash:r,...c},children:(0,g.jsxs)(Bt.n,{className:"hwks9js rgw6ez4qf rgw6ez819 rgw6ez44r rgw6ez443 rgw6ez2pl rgw6ez2py rgw6ez2jl rgw6ez2k4 rgw6ez2el rgw6ez2ey rgw6ez1dx rgw6ez16r rgw6ez16y rgw6ez48x rgw6ezwf",onClick:dt.U,children:[(0,g.jsxs)(Bt.n,{display:"inline-flex",flexWrap:"wrap",width:{sm:"full",md:"half"},paddingRight:{sm:"0",md:"32"},children:[(0,g.jsx)(lt.YG,{color:"pink"}),(0,g.jsx)("p",{className:"hwks9ju rgw6ez4b9 rgw6ezd9 rgw6ezbf rgw6ezl3 rgw6ezv9 rgw6ezf3 rgw6ezka",children:"Instant Refund"}),(0,g.jsxs)("p",{className:"hwks9jw rgw6ez4b9 rgw6ezb9 rgw6ezpr rgw6ezv9 rgw6ezwl rgw6ezgl rgw6ez16r",children:["Uniswap returned"," ",(0,g.jsxs)("span",{style:{fontWeight:535},children:[A({input:u.toString(),type:IC.sw.NFTToken})," ","ETH"]})," ","back to your wallet for unavailable items."]}),(0,g.jsxs)(Bt.n,{display:"flex",flexWrap:"wrap",bottom:"24",width:"full",alignSelf:"flex-end",position:{sm:"absolute",md:"static"},children:[(0,g.jsxs)("p",{className:Qt,style:{marginBottom:"2px"},children:[A({input:u.toString(),type:IC.sw.NFTToken})," ","ETH"]}),(0,g.jsx)("p",{className:st,children:e({input:x,type:IC.sw.FiatNFTToken})}),(0,g.jsxs)("p",{className:Qt,style:{width:"100%"},children:["for ",Z.length," unavailable item",1===Z.length?"":"s","."]}),(0,g.jsx)(Bt.n,{position:{sm:"absolute",md:"relative"},right:{sm:"0",md:"auto"},bottom:{sm:"0",md:"auto"},justifyContent:{sm:"flex-end",md:"flex-start"},textAlign:{sm:"right",md:"left"},flexShrink:"0",marginRight:{sm:"40",md:"24"},width:{sm:"half",md:"auto"},children:(0,g.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,g.jsx)(Bt.n,{fontWeight:"book",marginTop:"16",color:"neutral2",className:Qt,children:"View on Etherscan"})})})]})]}),(0,g.jsx)(Bt.n,{className:"hwks9j10 rgw6ez1dx rgw6ez1ds rgw6ez16r rgw6ez16m rgw6ez443 rgw6ez8bp rgw6ez46x rgw6ez44x rgw6ez2e4",children:Z.map(((C,A)=>(0,g.jsx)(Bt.n,{display:"flex",flexWrap:"wrap",height:"min",width:"52",children:(0,g.jsx)("img",{className:"hwks9j12 rgw6ez1ax rgw6ez13x rgw6ez80p rgw6ezql rgw6ezf9",src:C.imageUrl,alt:C.name},A)},A)))}),(0,g.jsx)(Bt.n,{className:"hwks9j14 rgw6ez16r rgw6ez16m rgw6ezpr rgw6ez3q3"})]})}):(0,g.jsx)(ht.default,{logImpression:!0,eventOnTrigger:SC.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:0,fail_quantity:Z.length,refund_amount_usd:x,...c},children:(0,g.jsxs)(Bt.n,{className:"hwks9j16 rgw6ez4qf rgw6ez819 rgw6ez44r rgw6ez443 rgw6ezv9 rgw6ez469 rgw6ezpr rgw6ezoy rgw6ez2vf rgw6ez1dx",onClick:dt.U,children:[(0,g.jsx)(Bt.n,{marginLeft:"auto",marginRight:"auto",display:"flex",children:a===Zt.c$.Success?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(lt.YG,{}),(0,g.jsx)("h1",{className:ot,children:"Instant Refund"})]}):(0,g.jsx)("h1",{className:ot,children:"Failed Transaction"})}),(0,g.jsxs)("p",{className:"hwks9j1c rgw6ez4b9 rgw6ezb9 rgw6ezpr rgw6ezv9 rgw6ezw3",children:[a===Zt.c$.Success&&`Selected item${1===M.length?" is":"s are"} no longer available. Uniswap instantly refunded you for this incomplete transaction. `,e({input:w,type:IC.sw.FiatNFTToken})," was used for gas in attempt to complete this transaction. For support, please visit our"," ",(0,g.jsx)("a",{href:"https://discord.gg/FCfyBSbCU5",children:"Discord"})]}),(0,g.jsxs)(Bt.n,{className:"hwks9j1e rgw6ez16r",children:[Z.length>=3&&(0,g.jsxs)(Bt.n,{className:"rgw6ez6rr rgw6ez80p rgw6ez44r rgw6ez443 rgw6ezvr rgw6ezf9 rgw6ez1ax rgw6ez7zd",onClick:()=>{n(!t)},children:[!t&&(0,g.jsx)(Bt.n,{paddingLeft:"20",paddingTop:"8",paddingBottom:"8",children:Z.slice(0,3).map(((C,A)=>(0,g.jsx)("img",{style:{zIndex:2-A},className:"hwks9j1j rgw6ez80l rgw6ez1a3 rgw6ez133 rgw6ez48x",src:C.imageUrl,alt:C.name},A)))}),(0,g.jsxs)(Bt.n,{color:t?"neutral1":"neutral2",className:"hwks9j1l rgw6ez4bf rgw6ezd3 rgw6ezb9 rgw6ez2of rgw6ez27x rgw6ez2dr",children:["Unavailable",(0,g.jsxs)(Bt.n,{className:"hwks9j1n rgw6ezd3 rgw6ezb3 rgw6ez44r",children:[Z.length," item",1===Z.length?"":"s"]})]}),(0,g.jsx)(lt.g8,{className:`${!t&&"hwks9j1t"} hwks9j1s rgw6ezk9 rgw6ezkl rgw6ezv9 rgw6ez199 rgw6ez129`})]}),(t||Z.length<3)&&Z.map(((C,e)=>(0,g.jsxs)(Bt.n,{backgroundColor:"surface1",display:"flex",padding:"4",marginBottom:"1",borderRadius:"8",children:[(0,g.jsx)(Bt.n,{className:"hwks9j1o",children:(0,g.jsx)("img",{className:"hwks9j1q rgw6ez80l rgw6ez1er rgw6ez1v3 rgw6ez17r rgw6ez1h3 rgw6ez49f",src:C.imageUrl,alt:C.name})}),(0,g.jsxs)(Bt.n,{flexWrap:"wrap",marginTop:"4",children:[(0,g.jsx)(Bt.n,{marginLeft:"4",width:"full",display:"flex",children:(0,g.jsxs)("p",{className:Qt,style:{marginBottom:"2px"},children:[A({input:C.updatedPriceInfo?C.updatedPriceInfo.ETHPrice:C.priceInfo.ETHPrice,type:IC.sw.NFTToken})," ","ETH"]})}),(0,g.jsx)(Bt.n,{color:"neutral1",className:st,children:a===Zt.c$.Success?"Refunded":C.name})]})]},e)))]}),t&&(0,g.jsx)(Bt.n,{className:"hwks9j1f"}),(0,g.jsxs)("p",{className:Qt,style:{marginBottom:"2px"},children:[A({input:u.toString(),type:IC.sw.NFTToken})," ","ETH"]}),(0,g.jsx)("p",{className:st,children:e({input:x,type:IC.sw.FiatNFTToken})}),(0,g.jsx)(Bt.n,{className:"hwks9j9 rgw6ez4bf rgw6ezax rgw6ez44r rgw6ez3x rgw6ez1dx rgw6ez3b3",marginLeft:"auto",marginRight:"0",children:(0,g.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:(0,g.jsx)(Bt.n,{className:"hwks9jb rgw6ez4bf rgw6ezax rgw6ezd3 rgw6ezw3",children:"View on Etherscan"})})}),(0,g.jsxs)("p",{className:Qt,children:["for ",Z.length," unavailable item",1===Z.length?"":"s","."]}),(0,g.jsxs)(Bt.n,{as:"button",border:"none",backgroundColor:"accent1",cursor:"pointer",className:"hwks9j18 rgw6ez1a9 rgw6ez469 rgw6ezd9 rgw6ezb9 rgw6ez4df rgw6ez6sl rgw6ez44r rgw6ez3x rgw6ezpr rgw6ezv9 rgw6ezwl",type:"button",onClick:()=>v(),children:[(0,g.jsx)(lt.pf,{className:"rgw6ez7mr rgw6ezlr rgw6ezs9"}),"Return to Marketplace"]})]})}))]})]})})};function mt(){const C=(0,G.Wt)(Y.Lk.ADDRESS_CLAIM),A=(0,G.xk)(Y.Lk.ADDRESS_CLAIM),e=(0,G.Wt)(Y.Lk.BLOCKED_ACCOUNT),t=(0,r.m)();!function(C){const A=(0,gt.T)();(0,m.useEffect)((()=>{if(!C)return;const e=new Headers({"Content-Type":"application/json"});fetch("https://interface.gateway.uniswap.org/v1/screen",{method:"POST",headers:e,body:JSON.stringify({address:C})}).then((C=>C.json())).then((C=>{C.block&&A((0,Y.i3)(Y.Lk.BLOCKED_ACCOUNT))})).catch((()=>{A((0,Y.i3)(null))}))}),[C,A])}(t.address);const n=Boolean(e&&t.isConnected),E=(0,_g.isDevEnv)()||(0,_g.isBetaEnv)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Xg,{isOpen:C,onDismiss:A}),(0,g.jsx)(DA,{account:t.address,isOpen:n}),(0,g.jsx)(tt.ZP,{}),(0,g.jsx)(lA,{}),(0,g.jsx)(NA,{}),(0,g.jsx)(nC.Cl,{}),(0,g.jsx)(wt,{}),(0,g.jsx)(Fe,{}),(0,g.jsx)(Ug,{}),(0,g.jsx)(cg,{}),(0,g.jsx)(vg,{}),(0,g.jsx)(oe,{}),E&&(0,g.jsx)(et,{})]})}function vt(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(FC,{}),(0,g.jsx)(O,{}),(0,g.jsx)(mt,{})]})}}}]);
//# sourceMappingURL=566.d9add67f.chunk.js.map