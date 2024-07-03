"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3464],{3464:(e,t,n)=>{n.d(t,{ZI:()=>Et,zD:()=>wt,ZP:()=>Rt});var s=n(92936),r=n(5985),o=n(97341),i=n(54690),a=n(5068),c=n(18533),d=n(15288),l=(n(18111),n(11604)),u=n(66284),p=n(21989),g=n(69780),m=(n(49484),"_1kuawcb rgw6ezbf rgw6ezd9 rgw6ez8bh rgw6ez45r rgw6ez45l"),x="_1kuawc1 rgw6ez2dr rgw6ez2j9 rgw6ez2of rgw6ez27x rgw6ez4b9 rgw6ez3tf rgw6ez7zd rgw6ez1dr rgw6ez80x",h="rgw6ez149 rgw6ez1b9 rgw6ez49l rgw6ez80p",f="rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez8bh rgw6ez45l rgw6ez45r rgw6ez4bf",I="_1kuawc7",A="rgw6ez3xr",N=n(61152);const T=N.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,v=N.default.circle.withConfig({displayName:"TimedLoader__Circle",componentId:"sc-40ed38f8-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${T} linear;
  animation: ${T} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accent1};
`,_=()=>(0,s.jsx)(c.n,{display:"flex",position:"absolute",children:(0,s.jsx)("svg",{height:"18px",width:"18px",children:(0,s.jsx)(v,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var b=n(62293),y=n(58690),C=n(68113),E=n(23173),w=n(78129),j=n(45779),P=n(43454),O=n(66136);const k=(0,N.default)(g.UH).withConfig({displayName:"BagRow__RemoveButton",componentId:"sc-ff03c113-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,R=(0,N.default)(g.UH).withConfig({displayName:"BagRow__ReviewButton",componentId:"sc-ff03c113-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,S=N.default.div.withConfig({displayName:"BagRow__RemoveAssetOverlay",componentId:"sc-ff03c113-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,L=({onClick:e})=>(0,s.jsx)(S,{onClick:e,children:(0,s.jsx)(y.Xv,{})}),B=()=>(0,s.jsx)(c.n,{position:"relative",background:"loadingBackground",className:h,children:(0,s.jsxs)(c.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),z=({asset:e,usdPrice:t,removeAsset:n,showRemove:r,grayscale:o,isMobile:i})=>{const{formatEther:a,formatNumberOrString:l}=(0,O.Gb)(),[N,T]=(0,j.useState)(!1),[v,_]=(0,j.useState)(!e.smallImageUrl),[C,R]=(0,j.useState)(!1),S=(0,j.useCallback)((()=>R(!0)),[]),z=(0,j.useCallback)((()=>R(!1)),[]),U=Boolean(r&&C&&!i),F=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,D=a({input:F,type:O.sw.NFTToken}),G=l({input:t?parseFloat((0,u.formatEther)(F))*t:t,type:O.sw.FiatNFTToken}),H=(0,j.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),n([e])}),[e,n]);return(0,s.jsx)(P.rU,{to:(0,w.PZ)(e),style:{textDecoration:"none"},children:(0,s.jsxs)(d.X2,{className:x,onMouseEnter:S,onMouseLeave:z,children:[(0,s.jsxs)(c.n,{position:"relative",display:"flex",children:[r&&i&&(0,s.jsx)(L,{onClick:H}),!v&&(0,s.jsx)(c.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,p.default)(h,o&&!C&&I),onLoad:()=>{T(!0)},onError:()=>{_(!0)},visibility:N?"visible":"hidden"}),!N&&(0,s.jsx)(c.n,{position:"absolute",className:`${h} ${E.L}`}),v&&(0,s.jsx)(B,{})]}),(0,s.jsxs)(d.sg,{overflow:"hidden",width:"full",color:o?"neutral2":"neutral1",children:[(0,s.jsxs)(d.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,s.jsx)(c.n,{className:m,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,s.jsx)(b.yT,{})]}),(0,s.jsxs)(d.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(c.n,{className:f,children:e.collectionName}),e.collectionIsVerified&&(0,s.jsx)(y.SA,{className:A})]})]}),U&&(0,s.jsx)(k,{onClick:H,emphasis:g.eI.medium,size:g.qE.medium,children:"Remove"}),(!U||i)&&(0,s.jsxs)(d.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,s.jsxs)(c.n,{className:"_1kuawc9 rgw6ez3sr rgw6ezbf rgw6ezd9 rgw6ez3xr",children:[D,"\xa0ETH"]}),(0,s.jsx)(c.n,{className:f,children:G})]})]})})},U=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:r,isMobile:o})=>{var i;const{formatEther:a}=(0,O.Gb)(),u=l.O$.from(null===(i=e.updatedPriceInfo)||void 0===i?void 0:i.ETHPrice).gt(l.O$.from(e.priceInfo.ETHPrice)),p=(0,j.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!1)}),[e,n]),m=(0,j.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!0)}),[e,n]);return(0,s.jsxs)(d.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3t3 rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez5yr rgw6ez1dr rgw6ez7zd",borderTopColor:r?"surface3":"transparent",children:[(0,s.jsxs)(d.X2,{className:"rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4dr rgw6ez3sr",children:[u?(0,s.jsx)(y.PH,{}):(0,s.jsx)(y.HE,{}),(0,s.jsx)(c.n,{children:`Price ${u?"increased":"decreased"} from ${a({input:e.priceInfo.ETHPrice,type:O.sw.NFTToken})} ETH`})]}),(0,s.jsx)(c.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,s.jsx)(z,{asset:e,usdPrice:t,removeAsset:()=>{},isMobile:o})}),(0,s.jsxs)(d.X2,{gap:"8",justifyContent:"space-between",children:[(0,s.jsx)(R,{onClick:p,emphasis:g.eI.medium,size:g.qE.small,children:"Remove"}),(0,s.jsx)(R,{onClick:m,emphasis:g.eI.high,size:g.qE.small,children:"Keep"})]})]})},F=({assets:e})=>(0,s.jsx)(d.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:32+20*(e.length-1)+"px"},children:e.map(((e,t)=>(0,s.jsx)(c.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"surface1",borderRadius:"4",style:{zIndex:t},className:I},`${e.address}-${e.tokenId}`)))}),D=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:r,setDidOpenUnavailableAssets:o,isMobile:i})=>{const[a,c]=(0,j.useReducer)((e=>!e),!1),[l,u]=(0,j.useState)(8);if((0,j.useEffect)((()=>{if(!l)return void(r||(n(),o(!1)));const e=setInterval((()=>{u(l-1)}),1e3);return()=>clearInterval(e)}),[l,n,r,o]),!e||0===e.length)return null;const p=e.length>1,g=a||!p;return(0,s.jsx)(d.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3tf rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez6df rgw6ez5yr rgw6ez1dr",children:(0,s.jsxs)(d.sg,{children:[(0,s.jsxs)(d.X2,{justifyContent:"space-between",marginBottom:g?"12":"0",cursor:p?"pointer":"default",onClick:()=>{p&&(!r&&o(!0),c())},children:[(0,s.jsxs)(d.X2,{gap:"12",color:"neutral2",className:C.Km,children:[!g&&(0,s.jsx)(F,{assets:e.slice(0,5)}),"No longer available"]}),p&&(0,s.jsx)(d.X2,{color:"neutral2",children:a?(0,s.jsx)(y.X_,{}):(0,s.jsx)(y.Xs,{})}),!r&&(0,s.jsxs)(d.X2,{position:"relative",width:"20",height:"20",color:"neutral1",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,s.jsx)(_,{}),(0,s.jsx)(y.Nb,{})]})]}),(0,s.jsx)(d.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:g&&e.map((e=>(0,s.jsx)(z,{asset:e,usdPrice:t,removeAsset:()=>{},grayscale:!0,isMobile:i},e.id)))})]})})};var G=n(79132),H=n(47263),W=n(48313),M=n(45878);const $=()=>{const e=(0,G.cP)((e=>e.bagStatus)),t=(0,G.cP)((e=>e.setBagStatus)),n=(0,G.cP)((e=>e.markAssetAsReviewed)),i=(0,G.cP)((e=>e.didOpenUnavailableAssets)),a=(0,G.cP)((e=>e.setDidOpenUnavailableAssets)),c=(0,G.cP)((e=>e.itemsInBag)),l=(0,G.cP)((e=>e.setItemsInBag)),u=(0,G.cP)((e=>e.removeAssetsFromBag)),p=(0,o.dD)(),g=(0,j.useMemo)((()=>(0,w.G7)(c)),[c]),m=(0,G.$N)(),{unchangedAssets:x,priceChangedAssets:h,unavailableAssets:f,availableItems:I}=(0,j.useMemo)((()=>({unchangedAssets:g.filter((e=>e.status===H.ZJ.ADDED_TO_BAG||e.status===H.ZJ.REVIEWED)).map((e=>e.asset)),priceChangedAssets:g.filter((e=>e.status===H.ZJ.REVIEWING_PRICE_CHANGE)).map((e=>e.asset)),unavailableAssets:g.filter((e=>e.status===H.ZJ.UNAVAILABLE)).map((e=>e.asset)),availableItems:g.filter((e=>e.status!==H.ZJ.UNAVAILABLE))})),[g]);return(0,j.useEffect)((()=>{const n=h.length>0,s=g.length>0;n&&(0,M._P)(r.Yz.NFT_BUY_BAG_CHANGED,{usd_value:m,bag_quantity:g.length,...(0,w.Hj)(h)}),e!==H.s.IN_REVIEW||n||t(s?H.s.CONFIRM_REVIEW:H.s.ADDING_TO_BAG),e!==H.s.CONFIRM_REVIEW||s||t(H.s.ADDING_TO_BAG)}),[e,g,h,t,m]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.sg,{display:h.length>0||f.length>0?"flex":"none",children:[f.length>0&&(0,s.jsx)(W.default,{logImpression:!0,eventOnTrigger:r.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:m,bag_quantity:g.length,...(0,w.Hj)(f)},children:(0,s.jsx)(D,{assets:f,usdPrice:m,clearUnavailableAssets:()=>l(I),didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:a,isMobile:p})}),h.map(((e,t)=>(0,s.jsx)(U,{asset:e,usdPrice:m,markAssetAsReviewed:n,top:0===t&&0===f.length,isMobile:p},e.id)))]}),(0,s.jsx)(d.sg,{children:x.slice(0).reverse().map((e=>(0,s.jsx)(z,{asset:e,usdPrice:m,removeAsset:u,showRemove:!0,isMobile:p},e.id)))})]})};var K=n(76078),V=n(25320),Z=n(44591),q=n(63415),X=n(5967),Y=n(94284),J=n(35692),Q=n(82743),ee=n(86059),te=n(57852),ne=n(64370),se=n(41390),re=n(70854),oe=n(769);var ie,ae=n(39671),ce=n(72893),de=n(2802),le=n(32682),ue=n(83102),pe=n(61592),ge=n.n(pe),me=n(68566),xe=n(89882);function he(e,t,n,r,o){const i={handleClick:()=>{},buttonText:(0,s.jsx)(a.c,{i18nKey:"common.somethingWentWrong.error"}),disabled:!0,warningText:void 0,warningTextColor:t.deprecated_accentWarning,helperText:void 0,helperTextColor:t.neutral2,buttonColor:t.accent1,buttonTextColor:t.deprecated_accentTextLightPrimary};return{[ie.WALLET_NOT_CONNECTED]:{...i,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(a.c,{i18nKey:"common.connectWallet.button"})},[ie.NOT_SUPPORTED_CHAIN]:{...i,handleClick:n??(()=>{}),buttonText:(0,s.jsx)(a.c,{i18nKey:"common.switchNetworks"}),disabled:!1,warningText:(0,s.jsx)(a.c,{i18nKey:"common.wrongNetwork"})},[ie.INSUFFICIENT_BALANCE]:{...i,buttonText:(0,s.jsx)(a.c,{i18nKey:"common.pay.button"}),warningText:(0,s.jsx)(a.c,{i18nKey:"common.insufficient.funds"})},[ie.ERROR]:{...i,warningText:(0,s.jsx)(a.c,{i18nKey:"common.error.wrong.tryAgain"})},[ie.IN_WALLET_CONFIRMATION]:{...i,buttonText:(0,s.jsx)(a.c,{i18nKey:"common.proceedInWallet.short"})},[ie.PROCESSING_TRANSACTION]:{...i,buttonText:(0,s.jsx)(a.c,{i18nKey:"common.transactionPending"})},[ie.FETCHING_TOKEN_ROUTE]:{...i,buttonText:(0,s.jsx)(a.c,{i18nKey:"common.fetchingRoute"})},[ie.INVALID_TOKEN_ROUTE]:{...i,buttonText:(0,s.jsx)(a.c,{i18nKey:"common.pay.button"})},[ie.NO_TOKEN_ROUTE_FOUND]:{...i,buttonText:(0,s.jsx)(a.c,{i18nKey:"common.insufficientLiquidity"}),buttonColor:t.surface3,buttonTextColor:t.neutral1,helperText:(0,s.jsx)(a.c,{i18nKey:"transaction.insufficientLiquidity"})},[ie.LOADING_ALLOWANCE]:{...i,buttonText:(0,s.jsx)(a.c,{i18nKey:"common.loadingAllowance"})},[ie.IN_WALLET_ALLOWANCE_APPROVAL]:{...i,buttonText:(0,s.jsx)(a.c,{i18nKey:"swap.approveInWallet"})},[ie.PROCESSING_APPROVAL]:{...i,buttonText:(0,s.jsx)(a.c,{i18nKey:"swap.approvalPending"})},[ie.REQUIRE_APPROVAL]:{...i,disabled:!1,handleClick:n??(()=>{}),helperText:(0,s.jsx)(a.c,{i18nKey:"swap.approvalNeeded"}),buttonText:(0,s.jsx)(a.c,{i18nKey:"common.approve"})},[ie.CONFIRM_UPDATED_PRICE]:{...i,handleClick:n??(()=>{}),disabled:!1,warningTextColor:t.accent1,warningText:(0,s.jsx)(a.c,{i18nKey:"common.priceUpdated"}),buttonText:(0,s.jsx)(a.c,{i18nKey:"common.pay.button"})},[ie.PRICE_IMPACT_HIGH]:{...i,handleClick:n??(()=>{}),disabled:!1,buttonColor:o?o.priceImpactSeverity.color:i.buttonColor,helperText:(0,s.jsx)(a.c,{i18nKey:"common.priceImpact"}),helperTextColor:o?o.priceImpactSeverity.color:i.helperTextColor,buttonText:(0,s.jsx)(a.c,{i18nKey:"swap.payAnyway"})},[ie.PAY]:{...i,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(a.c,{i18nKey:"common.pay.button"}),helperText:r?(0,s.jsx)(a.c,{i18nKey:"nft.refundsInEth"}):void 0}}[e]}!function(e){e[e.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",e[e.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",e[e.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",e[e.ERROR=3]="ERROR",e[e.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",e[e.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",e[e.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",e[e.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",e[e.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",e[e.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",e[e.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",e[e.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",e[e.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",e[e.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",e[e.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",e[e.PAY=15]="PAY"}(ie||(ie={}));var fe=n(64538),Ie=n(52384),Ae=n(5670),Ne=n(78635),Te=n(32115),ve=n(91325);var _e=n(51001),be=n(27009),ye=n(32027);function Ce(e,t,n,s,r,o,i){try{var a=e[o](i),c=a.value}catch(d){return void n(d)}a.done?t(c):Promise.resolve(c).then(s,r)}function Ee(){const e=(0,_e.z)(),t=(0,be.p)((e=>e.sendTransaction)),n=(0,ye.J)((e=>e.setTransactionResponse)),{setLocked:s,setBagExpanded:r,reset:o}=(0,fe.c)((({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n})));return(0,j.useCallback)(function(){var i,a=(i=function*(i,a,c=!1){if(!e)return;const d=yield t(e,a,i,c);d&&(s(!1),n(d),r({bagExpanded:!1}),o())},function(){var e=this,t=arguments;return new Promise((function(n,s){var r=i.apply(e,t);function o(e){Ce(r,n,s,o,a,"next",e)}function a(e){Ce(r,n,s,o,a,"throw",e)}o(void 0)}))});return function(e,t){return a.apply(this,arguments)}}(),[e,o,t,r,s,n])}var we=n(47832),je=n(92532);const Pe=(0,n(92490).F)()((0,we.mW)((e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e((()=>({inputCurrency:t}))),clearInputCurrency:()=>e((()=>({inputCurrency:void 0}))),setTokenTradeInput:t=>e((()=>({tokenTradeInput:t})))})),{name:"useTokenInput"}),je.X);var Oe=n(59036),ke=n(25408);function Re(e,t,n){const{hasPriceAdjustment:s,updatedAssets:r}=(0,Oe.$)(e,t),o=s&&n,{unchanged:i,priceChanged:a,unavailable:c}=(0,ke.K)(r),d=r.length>0,l=a.length>0,u=c.length>0,p=l||u,g=function(e,t,n){return[...e.map((e=>({asset:e,status:H.ZJ.UNAVAILABLE}))),...t.map((e=>({asset:e,status:H.ZJ.REVIEWING_PRICE_CHANGE}))),...n.map((e=>({asset:e,status:H.ZJ.REVIEWED})))]}(c,a,i),m=function(e,t,n,s){return e?t?n?H.s.IN_REVIEW:H.s.CONFIRM_REVIEW:s?H.s.CONFIRM_QUOTE:H.s.CONFIRMING_IN_WALLET:H.s.ADDING_TO_BAG}(d,p,l,o);return{newBagItems:g,nextBagStatus:m}}function Se(e){return{action:H.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}function Le(e,t){const n=e.route?e.route.map(Se):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}function Be(e,t,n,s,r,o,i){try{var a=e[o](i),c=a.value}catch(d){return void n(d)}a.done?t(c):Promise.resolve(c).then(s,r)}function ze(e){return function(){var t=this,n=arguments;return new Promise((function(s,r){var o=e.apply(t,n);function i(e){Be(o,s,r,i,a,"next",e)}function a(e){Be(o,s,r,i,a,"throw",e)}i(void 0)}))}}function Ue(){const e=(0,ce.m)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:s,setDidOpenUnavailableAssets:r,isLocked:o,setLocked:i,setItemsInBag:a}=(0,fe.c)((({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:o,setItemsInBag:i})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:o,setItemsInBag:i}))),c=Pe((e=>e.tokenTradeInput)),d=(0,j.useMemo)((()=>(0,w.G7)(t)),[t]),[l]=(0,re.useNftRouteLazyQuery)(),u=Ee(),p=(0,j.useCallback)((()=>{s&&r(!1),!o&&i(!0),n(H.s.FETCHING_ROUTE)}),[o,s,i,n,r]);return(0,j.useCallback)(ze((function*(){p(),l({variables:{senderAddress:e.address?e.address:"",nftTrades:(0,w.hI)(d),tokenTrades:c||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route)return n(H.s.ADDING_TO_BAG),void i(!1);const t=function(e){return e.filter((e=>e.status!==H.ZJ.UNAVAILABLE)).map((e=>e.asset))}(d),s=!!c,{route:r,routeResponse:o}=Le(e.nftRoute,s),{newBagItems:l,nextBagStatus:p}=Re(t,r,s);if(a(l),n(p),p===H.s.CONFIRMING_IN_WALLET)return u(o,t,s),void i(!0);i(!1)}})})),[e.address,l,d,u,p,i,n,a,c])}var Fe=n(92650);function De(e){return{...(n={inputAmount:e.inputAmount,outputAmount:e.outputAmount},{inputAmount:{amount:n.inputAmount.quotient.toString(),token:{address:n.inputAmount.currency.isToken?n.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.inputAmount.currency.chainId,decimals:n.inputAmount.currency.decimals,isNative:n.inputAmount.currency.isNative}},outputAmount:{amount:n.outputAmount.quotient.toString(),token:{address:n.outputAmount.currency.isToken?n.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.outputAmount.currency.chainId,decimals:n.outputAmount.currency.decimals,isNative:n.outputAmount.currency.isNative}}}),pools:(t=e.route.pools,t.map((e=>function(e){const t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}}(e))))};var t,n}function Ge(e,t,n){const s=Pe((e=>e.setTokenTradeInput)),r=(0,ve.pG)(e)&&e.routes,o=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,i=!!n&&!!t;(0,j.useEffect)((()=>{if(!r||!o||!i)return void s(void 0);const a=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:c,v2TokenTradeRouteInputs:d,v3TokenTradeRouteInputs:l}=function(e){const t=[],n=[],s=[],r=e.swaps;for(const o of r)o.route.protocol===Fe.Protocol.MIXED?t.push(De(o)):o.route.protocol===Fe.Protocol.V2?n.push(De(o)):s.push(De(o));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:s.length>0?s:void 0}}(e),u={mixedRoutes:c,tradeType:re.TokenTradeType.ExactOutput,v2Routes:d,v3Routes:l},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;s({permit:p,routes:u,slippageToleranceBasisPoints:a,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})}),[t,n,i,o,r,s,e])}var He=n(2721);var We=n(57221),Me=n(86082),$e=n(55752);const Ke=N.default.div.withConfig({displayName:"BagFooter__FooterContainer",componentId:"sc-ff4bcdb3-0"})`
  padding: 0px 12px;
`,Ve=N.default.div.withConfig({displayName:"BagFooter__Footer",componentId:"sc-ff4bcdb3-1"})`
  border-top: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,Ze=(0,N.default)(Z.ZP).withConfig({displayName:"BagFooter__FooterHeader",componentId:"sc-ff4bcdb3-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,qe=(0,N.default)(Y.ZP).withConfig({displayName:"BagFooter__CurrencyRow",componentId:"sc-ff4bcdb3-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,Xe=(0,N.default)(Z.ZP).withConfig({displayName:"BagFooter__TotalColumn",componentId:"sc-ff4bcdb3-4"})`
  text-align: end;
  overflow: hidden;
`,Ye=(0,N.default)(We.Z).withConfig({displayName:"BagFooter__WarningIcon",componentId:"sc-ff4bcdb3-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,Je=(0,N.default)($e.Tv.BodyPrimary).withConfig({displayName:"BagFooter__WarningText",componentId:"sc-ff4bcdb3-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,Qe=(0,N.default)($e.Tv.BodySmall).withConfig({displayName:"BagFooter__HelperText",componentId:"sc-ff4bcdb3-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,et=(0,N.default)(Y.ZP).withConfig({displayName:"BagFooter__CurrencyInput",componentId:"sc-ff4bcdb3-8"})`
  gap: 8px;
  cursor: pointer;
`,tt=N.default.button.withConfig({displayName:"BagFooter__ActionButton",componentId:"sc-ff4bcdb3-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 535;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,nt=(0,N.default)(Q.X).withConfig({displayName:"BagFooter__FiatLoadingBubble",componentId:"sc-ff4bcdb3-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,st=(0,N.default)(Y.ZP).withConfig({displayName:"BagFooter__PriceImpactContainer",componentId:"sc-ff4bcdb3-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,rt=(0,N.default)(Y.ZP).withConfig({displayName:"BagFooter__PriceImpactRow",componentId:"sc-ff4bcdb3-12"})`
  align-items: center;
  gap: 8px;
`,ot=(0,N.default)($e.Tv.BodyPrimary).withConfig({displayName:"BagFooter__ValueText",componentId:"sc-ff4bcdb3-13"})`
  line-height: 20px;
  font-weight: 535;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,it=({color:e,children:t})=>t?(0,s.jsxs)(Je,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,s.jsx)(Ye,{}),t]}):null,at=({children:e,color:t})=>e?(0,s.jsx)(Qe,{lineHeight:"16px",$color:t,children:e}):null,ct={onlyShowCurrenciesWithBalance:!0},dt=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:r,trade:o})=>{var i;const{formatEther:c,formatNumberOrString:d}=(0,O.Gb)();var l;return e?r!==Te.qx.LOADING||o?(0,s.jsx)(ot,{color:r===Te.qx.LOADING?"neutral3":"neutral1",children:d({input:null===(i=o)||void 0===i?void 0:i.inputAmount.toExact(),type:O.sw.NFTToken})}):(0,s.jsx)($e.Tv.BodyPrimary,{color:"neutral3",lineHeight:"20px",fontWeight:"535",children:(0,s.jsx)(a.c,{i18nKey:"swap.fetchingPrice"})}):(0,s.jsxs)($e.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"535",children:[c({input:t.toString(),type:O.sw.NFTToken}),"\xa0",(null===(l=n)||void 0===l?void 0:l.symbol)??"ETH"]})},lt=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:r})=>{var o;const{formatNumberOrString:i}=(0,O.Gb)();return e?(0,s.jsxs)(st,{children:[t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(ee.ud,{text:(0,a.t)("swap.estimatedDifference.label"),children:(0,s.jsxs)(rt,{children:[(0,s.jsx)(We.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,s.jsxs)($e.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",t.displayPercentage(),")"]})]})})}),(0,s.jsx)($e.Tv.BodySmall,{color:"neutral3",lineHeight:"20px",children:`${i({input:null===(o=e)||void 0===o?void 0:o.toExact(),type:O.sw.FiatNFTToken})}`})]}):!r||n!==Te.qx.INVALID&&n!==Te.qx.NO_ROUTE_FOUND?(0,s.jsx)(nt,{}):null},ut=[H.s.FETCHING_ROUTE,H.s.CONFIRMING_IN_WALLET,H.s.FETCHING_FINAL_ROUTE,H.s.PROCESSING_TRANSACTION],pt=({setModalIsOpen:e,eventProperties:t})=>{var n,o,i,c;const d=(0,V.Q5)(),l=(0,N.useTheme)(),p=(0,ce.m)(),g=(0,te.Nb)(p.chainId),m=p.isConnected&&p.chainId,x=(0,Ie.P)(),{inputCurrency:h}=Pe((({inputCurrency:e})=>({inputCurrency:e}))),f=Pe((e=>e.setInputCurrency)),I=(0,ae.U8)("ETH"),A=(0,me.mM)(p.address,h&&h.isToken?h:void 0),{isLocked:T,bagStatus:v,setBagExpanded:_,setBagStatus:b}=(0,fe.c)((({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s}))),[y,C]=(0,j.useState)(!1),E=ut.includes(v),w=h??I,P=!!h&&p.chainId===oe.UniverseChainId.Mainnet,{universalRouterAddress:k,universalRouterAddressIsLoading:R}=function(){var e,t;const{data:n,loading:s}=(0,re.useNftUniversalRouterAddressQuery)({fetchPolicy:"no-cache"});return{universalRouterAddress:null===(t=n)||void 0===t||null===(e=t.nftRoute)||void 0===e?void 0:e.toAddress,universalRouterAddressIsLoading:s}}();!function(e){const t=(0,be.p)((e=>e.state)),n=(0,be.p)((e=>e.setState)),s=(0,j.useRef)(t),{setBagStatus:r,setLocked:o}=(0,fe.c)((({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n})));(0,j.useEffect)((()=>{be.p.subscribe((e=>s.current=e.state))}),[]),(0,j.useEffect)((()=>{s.current===H.c$.Confirming&&r(H.s.PROCESSING_TRANSACTION),s.current!==H.c$.Denied&&s.current!==H.c$.Invalid||(s.current===H.c$.Invalid?r(H.s.WARNING):r(H.s.CONFIRM_REVIEW),n(H.c$.New),o(!1),e(!1))}),[o,r,e,n,s.current])}(e);const S=Ue(),L=(0,j.useMemo)((()=>(0,xe.Z)((0,u.formatEther)(x.toString()),I??void 0)),[I,x]),{state:B,trade:z,maximumAmountIn:U,allowedSlippage:F}=function(e,t){const{state:n,trade:s}=(0,Ne.C)(K.TradeType.EXACT_OUTPUT,t,e??void 0,Te.R5.API),r=(0,Ae.Z)((0,ve.pG)(s)?s:void 0),o=(0,j.useMemo)((()=>{var e,t;const n=null===(e=s)||void 0===e?void 0:e.maximumAmountIn(r);return(null===(t=n)||void 0===t?void 0:t.currency.isToken)?n:void 0}),[r,s]);return(0,j.useMemo)((()=>({state:n,trade:s,maximumAmountIn:o,allowedSlippage:r})),[r,o,n,s])}(P?h:void 0,L),D=(0,de.Z)(U,function(e,t){if(e)return e===oe.UniverseChainId.Mainnet?t??(0,se.UNIVERSAL_ROUTER_ADDRESS)(e):(0,se.UNIVERSAL_ROUTER_ADDRESS)(e)}(g?p.chainId:void 0,k),Te.d7.Classic),G=D.state===de.K.LOADING||R;Ge(z,D,F);const $=function(e){const t=(0,N.useTheme)(),{formatPercent:n}=(0,O.Gb)();return(0,j.useMemo)((()=>{const s=e?(0,He.QW)(e):void 0,r=s?(0,He.BK)(s):void 0,o="error"===r?t.critical:"warning"===r?t.deprecated_accentWarning:void 0;return s&&r&&o?{priceImpactSeverity:{type:r,color:o},displayPercentage:()=>n(s)}:void 0}),[n,t.critical,t.deprecated_accentWarning,e])}(z),Y=(0,le.sq)(null===(n=z)||void 0===n?void 0:n.inputAmount),Q=(0,le.sq)(L),ee=P?Y:Q,pe=(0,ae.U8)(ne.dt),_e=(0,me.ZP)(p.address??void 0,pe),ye=(0,j.useMemo)((()=>{var e;if(!m||p.chainId!==oe.UniverseChainId.Mainnet)return;if(h){var t;const e=null===(t=z)||void 0===t?void 0:t.inputAmount;if(!A||!e)return;return!A.lessThan(e)}if(!pe)return;const n=K.CurrencyAmount.fromRawAmount(pe,ge().BigInt(x));return null===(e=_e)||void 0===e?void 0:e.greaterThan(n)}),[m,p.chainId,h,pe,x,_e,null===(o=z)||void 0===o?void 0:o.inputAmount,A]);(0,j.useEffect)((()=>{b(H.s.ADDING_TO_BAG)}),[h,b]);const Ce=(0,ue.o)(),{buttonText:Ee,buttonTextColor:we,disabled:je,warningText:Oe,warningTextColor:ke,helperText:Re,helperTextColor:Se,handleClick:Le,buttonColor:Be}=(0,j.useMemo)((()=>{if(m&&p.chainId!==oe.UniverseChainId.Mainnet){const e=()=>Ce(oe.UniverseChainId.Mainnet);return he(ie.NOT_SUPPORTED_CHAIN,l,e)}if(!1===ye)return he(ie.INSUFFICIENT_BALANCE,l);if(v===H.s.WARNING)return he(ie.ERROR,l);if(!m){const e=()=>{d.open(),_({bagExpanded:!1})};return he(ie.WALLET_NOT_CONNECTED,l,e)}if(v===H.s.FETCHING_FINAL_ROUTE||v===H.s.CONFIRMING_IN_WALLET)return he(ie.IN_WALLET_CONFIRMATION,l);if(v===H.s.PROCESSING_TRANSACTION)return he(ie.PROCESSING_TRANSACTION,l);if(P&&B!==Te.qx.VALID)return B===Te.qx.INVALID?he(ie.INVALID_TOKEN_ROUTE,l):B===Te.qx.NO_ROUTE_FOUND?he(ie.NO_TOKEN_ROUTE_FOUND,l):he(ie.FETCHING_TOKEN_ROUTE,l);const e=D.state===de.K.REQUIRED,t=()=>e&&D.approveAndPermit();return G?he(ie.LOADING_ALLOWANCE,l,t):e?D.isApprovalPending?he(ie.IN_WALLET_ALLOWANCE_APPROVAL,l,t):D.isApprovalLoading?he(ie.PROCESSING_APPROVAL,l,t):he(ie.REQUIRE_APPROVAL,l,t):v===H.s.CONFIRM_QUOTE?he(ie.CONFIRM_UPDATED_PRICE,l,S):$&&"error"===$.priceImpactSeverity.type?he(ie.PRICE_IMPACT_HIGH,l,S,P,$):he(ie.PAY,l,S,P)}),[m,p.chainId,ye,v,P,B,G,D,$,l,S,Ce,d,_]),ze={usd_value:null===(i=ee)||void 0===i?void 0:i.toExact(),using_erc20:!!h,...t};return(0,s.jsxs)(Ke,{children:[(0,s.jsxs)(Ve,{children:[(0,s.jsxs)(Ze,{gap:"xs",children:[(0,s.jsxs)(qe,{children:[(0,s.jsx)(Z.ZP,{gap:"xs",children:g&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)($e.Tv.SubHeaderSmall,{children:(0,s.jsx)(a.c,{i18nKey:"swap.payWith"})}),(0,s.jsxs)(et,{onClick:()=>{T||(C(!0),(0,M._P)(r.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,s.jsx)(X.Z,{currency:w,size:24}),(0,s.jsx)($e.Tv.HeadlineSmall,{fontWeight:535,lineHeight:"24px",children:null===(c=w)||void 0===c?void 0:c.symbol}),(0,s.jsx)(Me.Z,{size:20,color:l.neutral2})]})]})}),(0,s.jsxs)(Xe,{gap:"xs",children:[(0,s.jsx)($e.Tv.SubHeaderSmall,{children:(0,s.jsx)(a.c,{i18nKey:"swap.total"})}),(0,s.jsx)(dt,{usingPayWithAnyToken:P,totalEthPrice:x,activeCurrency:w,tradeState:B,trade:z})]})]}),(0,s.jsx)(lt,{usdcValue:ee,priceImpact:$,tradeState:B,usingPayWithAnyToken:P})]}),(0,s.jsxs)(W.default,{logPress:!0,eventOnTrigger:r.Yz.NFT_BUY_BAG_PAY,element:r.xo.NFT_BUY_BAG_PAY_BUTTON,properties:ze,logImpression:m&&!je,children:[(0,s.jsx)(it,{color:ke,children:Oe}),(0,s.jsx)(at,{color:Se,children:Re}),(0,s.jsxs)(tt,{"data-testid":"nft-buy-button",onClick:Le,disabled:je||E,$backgroundColor:Be,$color:we,children:[E&&(0,s.jsx)(q.ZP,{size:"20px",stroke:"white"}),Ee]})]})]}),(0,s.jsx)(J.Z,{isOpen:y,onDismiss:()=>C(!1),onCurrencySelect:e=>{f(e.isNative?void 0:e),e.isToken&&(0,M._P)(r.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:w??void 0,currencySearchFilters:ct})]})};var gt=n(68588);const mt=(0,N.default)($e.oD).withConfig({displayName:"BagHeader__ClearButton",componentId:"sc-a8d759f9-0"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,xt=N.default.button.withConfig({displayName:"BagHeader__IconWrapper",componentId:"sc-a8d759f9-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${gt.cR}
`,ht=N.default.div.withConfig({displayName:"BagHeader__CounterDot",componentId:"sc-a8d759f9-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,ft=N.default.div.withConfig({displayName:"BagHeader__Wrapper",componentId:"sc-a8d759f9-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,It=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:r})=>{const o=(0,j.useMemo)((()=>(e=>17+6*e.toString().length+"px")(e)),[e]);return(0,s.jsxs)(ft,{children:[(0,s.jsx)($e.Tv.HeadlineSmall,{children:r?(0,s.jsx)(a.c,{i18nKey:"common.sell.label"}):(0,s.jsx)(a.c,{i18nKey:"nft.bag"})}),e>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ht,{sizing:o,children:e}),(0,s.jsx)(mt,{onClick:n,children:(0,s.jsx)(a.c,{i18nKey:"common.clearAll"})})]}),(0,s.jsx)(xt,{onClick:t,children:(0,s.jsx)(y.BW,{"data-testid":"nft-bag-close-icon"})})]})};var At=n(27389);const Nt=(0,N.default)(d.sg).withConfig({displayName:"EmptyContent__StyledColumn",componentId:"sc-3568c728-0"})`
  gap: 12px;
  margin-top: 68px;
`,Tt=()=>{const e=(0,i.e5)();return(0,s.jsxs)(Nt,{children:[(0,s.jsx)(d.M5,{children:e?(0,s.jsx)(y.JP,{color:At.Z4.colors.neutral3}):(0,s.jsx)(y.Ln,{color:At.Z4.colors.neutral3,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,s.jsx)(d.M5,{"data-testid":"nft-no-nfts-selected",className:C.v4,children:"No NFTs selected"}):(0,s.jsxs)(d.sg,{gap:"16",children:[(0,s.jsx)(d.M5,{"data-testid":"nft-empty-bag",className:C.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,s.jsx)(d.M5,{fontSize:"12",fontWeight:"book",color:"neutral2",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})},vt=({asset:e})=>{const t=(0,G.Pc)((e=>e.removeSellAsset)),n=(0,o.dD)(),[r,i]=(0,j.useState)(!1),a=()=>i(!r),l=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,s.jsxs)(d.X2,{className:x,onMouseEnter:a,onMouseLeave:a,children:[(0,s.jsxs)(c.n,{position:"relative",display:"flex",children:[n&&(0,s.jsx)(L,{onClick:l}),(0,s.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:h})]}),(0,s.jsxs)(d.sg,{overflow:"hidden",width:"full",color:"neutral1",children:[(0,s.jsx)(d.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,s.jsx)(c.n,{className:m,children:e.name||`#${e.tokenId}`})}),(0,s.jsxs)(d.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(c.n,{className:f,children:e.asset_contract.name}),e.collectionIsVerified&&(0,s.jsx)(y.SA,{className:A})]})]}),r&&!n&&(0,s.jsx)(k,{onClick:l,emphasis:g.eI.medium,size:g.qE.medium,children:"Remove"})]})},_t=()=>{const e=(0,G.Pc)((e=>e.sellAssets));return(0,s.jsx)(d.sg,{children:e.length?e.map(((e,t)=>(0,s.jsx)(vt,{asset:e},t))):null})};var bt=n(60040),yt=n(70518),Ct=n(62587);const Et=320,wt=360,jt=N.default.div.withConfig({displayName:"Bag__BagContainer",componentId:"sc-e46ddef6-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${Et}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?Ct.k.modalOverTooltip:Ct.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${wt}px;
  }
`,Pt=N.default.div.withConfig({displayName:"Bag__DetailsPageBackground",componentId:"sc-e46ddef6-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,Ot=N.default.div.withConfig({displayName:"Bag__ContinueButton",componentId:"sc-e46ddef6-2"})`
  background: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,kt=({top:e,show:t})=>(0,s.jsx)(c.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"surface3",borderBottomColor:e?"surface3":"transparent",opacity:t?"1":"0",transition:"250"}),Rt=()=>{const{resetSellAssets:e,sellAssets:t}=(0,G.Pc)((({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}))),{setProfilePageState:n}=(0,G.aO)((({setProfilePageState:e})=>({setProfilePageState:e}))),{bagStatus:c,bagIsLocked:l,reset:u,bagExpanded:p,toggleBag:g,setBagExpanded:m}=(0,G.cP)((e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}))),{uncheckedItemsInBag:x}=(0,G.cP)((({itemsInBag:e})=>({uncheckedItemsInBag:e}))),h=(0,i.e5)(),f=(0,i._3)(),I=(0,i.GZ)(),A=(0,o.dD)(),N=(0,j.useMemo)((()=>(0,w.G7)(x)),[x]),[T,v]=(0,j.useState)(!1),{userCanScroll:_,scrollRef:b,scrollProgress:y,scrollHandler:C}=(0,G.uh)(),E=(0,j.useCallback)((()=>{m({bagExpanded:!1,manualClose:!0})}),[m]);(0,j.useEffect)((()=>{l&&!T&&v(!0)}),[l,T]);const P=N.length>0,O=N.length>0,k=t.length>0,R=Boolean(!h&&!O&&c===H.s.ADDING_TO_BAG||h&&!k),S=(0,j.useMemo)((()=>({...(0,w.Hj)(N.map((e=>e.asset)))})),[N]);return p&&I?(0,s.jsxs)(bt.h,{children:[(0,s.jsxs)(jt,{"data-testid":"nft-bag",raiseZIndex:A||T,isProfilePage:h,children:[(0,s.jsx)(It,{numberOfAssets:h?t.length:N.length,closeBag:E,resetFlow:h?e:u,isProfilePage:h}),R&&(0,s.jsx)(Tt,{}),(0,s.jsx)(kt,{top:!0,show:_&&y>0}),(0,s.jsx)(d.sg,{ref:b,className:"_1jcz50r1 rgw6ez2ef rgw6ez2jx rgw6ez1yr rgw6ez8ct",onScroll:C,gap:"12",children:h?(0,s.jsx)(_t,{}):(0,s.jsx)($,{})}),P&&!h&&(0,s.jsx)(pt,{setModalIsOpen:v,eventProperties:S}),k&&h&&(0,s.jsx)(Ot,{onClick:()=>{g(),n(H.HA.LISTING),(0,M._P)(r.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map((e=>e.asset_contract.address)),token_ids:t.map((e=>e.tokenId))})},children:(0,s.jsx)(a.c,{i18nKey:"common.continue.button"})})]}),f?(0,s.jsx)(Pt,{onClick:g}):T&&(0,s.jsx)(yt.a,{onClick:()=>l?void 0:v(!1)})]}):null}},70518:(e,t,n)=>{n.d(t,{a:()=>a,U:()=>i});var s=n(92936),r=n(18533),o=(n(18111),n(15511));const i=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},a=({onClick:e=o.Z})=>(0,s.jsx)(r.n,{className:"_199qdl71 rgw6ez3f3 rgw6ez343 rgw6ez17l rgw6ez1ef rgw6ez48r rgw6ez44l rgw6ez4u3",onClick:e})},52384:(e,t,n)=>{n.d(t,{B:()=>p,P:()=>u});var s=n(11604),r=n(66284),o=n(39671),i=n(32682),a=n(89882),c=n(64538),d=n(47263),l=n(45779);function u(){const e=(0,c.c)((e=>e.itemsInBag));return(0,l.useMemo)((()=>e.reduce(((e,t)=>t.status!==d.ZJ.UNAVAILABLE?e.add(s.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e),s.O$.from(0))),[e])}function p(){const e=u(),t=(0,o.U8)("ETH"),n=(0,l.useMemo)((()=>(0,a.Z)((0,r.formatEther)(e.toString()),t??void 0)),[t,e]),s=(0,i.sq)(n);return(0,l.useMemo)((()=>{var e;return null===(e=s)||void 0===e?void 0:e.toExact()}),[s])}}}]);
//# sourceMappingURL=3464.f765224c.chunk.js.map