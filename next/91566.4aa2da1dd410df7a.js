(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[91566,61386,99503,50517,11820,61505,99781,87769,50023,11944,17539,87334,66152,99479,98969,61702,66017,37495,86183,17081,66713,37731,98323,1001],{38057:(t,e,i)=>{i.d(e,{c:()=>s});var a,r=i(84911),n=i(20755),o=i(2697);class s extends o.AbstractTuiNullableControl{constructor(t){super(),this.options=t,this.autocompleteEnabled=this.options.autocompleteEnabled,this.binChange=new n.vpe}get autocompleteCard(){return this.autocomplete}get bin(){return this.card.length<6?null:this.card.slice(0,6)}get defaultIcon(){const t=this.getPaymentSystem(this.card);return t&&this.options.icons[t]}get paymentSystem(){return this.getPaymentSystem(this.card)}get icon(){return this.cardSrc||this.defaultIcon}get autocomplete(){return this.autocompleteEnabled?"cc-number":"off"}getPaymentSystem(t){return this.options.paymentSystemHandler(t)}}(a=s).ɵfac=function(t){n.$Z()},a.ɵdir=n.lG2({type:a,inputs:{cardSrc:"cardSrc",autocompleteEnabled:"autocompleteEnabled"},outputs:{binChange:"binChange"},features:[n.qOj]}),(0,r.gn)([o.tuiPure],s.prototype,"getPaymentSystem",null)},20969:(t,e,i)=>{i.d(e,{c9:()=>a.c,Nd:()=>d.Nd,cL:()=>d.cL,zW:()=>r.z,aJ:()=>n.a,S9:()=>c,Xt:()=>d.Xt});var a=i(38057),r=i(85397),n=i(88197),o=i(93803),s=i(80506),u=i(20755);let c=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=u.oAB({type:t}),t.ɵinj=u.cJS({imports:[o.TuiPrimitiveTextfieldModule,o.TuiTextfieldControllerModule,s.TuiValueAccessorModule,o.TuiSvgModule]}),e})();var d=i(96816)},85397:(t,e,i)=>{i.d(e,{z:()=>v});var a=i(20755),r=i(11074),n=i(2697),o=i(93803),s=i(38057),u=i(96816),c=i(28858),d=i(39047),l=i(53339),p=i(7871),f=i(89713),h=i(62998);function b(t,e){if(1&t&&a._UZ(0,"tui-svg",2),2&t){const t=a.oxw();a.Q6J("src",t.defaultIcon)}}const m=["*",[["input"]]],g=["*","input"];let v=(()=>{var t;class e extends s.c{constructor(){super((0,a.f3M)(u.cL)),this.textfieldSize=(0,a.f3M)(o.TUI_TEXTFIELD_SIZE),this.maskOptions={mask:r.Aj}}get card(){return this.value??""}get nativeFocusableElement(){return this.input?.nativeFocusableElement??null}get focused(){return!!this.input&&this.input.focused}onValueChange(t){const e=t.split(" ").join(""),i=this.bin;this.value=e;const a=this.bin;i!==a&&this.binChange.emit(a)}onFocused(t){this.updateFocused(t)}writeValue(t){const e=this.bin;super.writeValue(t);const i=this.bin;e!==i&&this.binChange.emit(i)}get size(){return this.textfieldSize.size}getFallbackValue(){return""}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=a.Xpm({type:t,selectors:[["tui-input-card"]],viewQuery:function(t,e){if(1&t&&a.Gf(o.TuiPrimitiveTextfieldComponent,5),2&t){let t;a.iGM(t=a.CRH())&&(e.input=t.first)}},hostVars:1,hostBindings:function(t,e){2&t&&a.uIk("data-size",e.size)},features:[a._Bn([(0,n.tuiAsFocusableItemAccessor)(t),(0,n.tuiAsControl)(t)]),a.qOj],ngContentSelectors:g,decls:6,vars:14,consts:[["tuiValueAccessor","",1,"t-input",3,"disabled","focusable","invalid","maskito","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldCustomContent","value","focusedChange","valueChange"],["logo",""],[1,"t-payment-system",3,"src"]],template:function(t,e){if(1&t&&(a.F$t(m),a.TgZ(0,"tui-primitive-textfield",0),a.NdJ("focusedChange",(function(t){return e.onFocused(t)}))("valueChange",(function(t){return e.onValueChange(t)})),a.ALo(1,"maskito"),a.Hsn(2),a.Hsn(3,1,["ngProjectAs","input",5,["input"]]),a.qZA(),a.YNc(4,b,1,1,"ng-template",null,1,a.W1O)),2&t){const t=a.MAs(5);a.Q6J("disabled",e.disabled)("focusable",e.focusable)("invalid",e.computedInvalid)("maskito",e.maskOptions)("nativeId",e.nativeId)("pseudoActive",e.pseudoActive)("pseudoFocus",e.pseudoFocus)("pseudoHover",e.pseudoHover)("readOnly",e.readOnly)("tuiTextfieldCustomContent",e.cardSrc||e.defaultIcon&&t)("value",a.xi3(1,11,e.card,e.maskOptions))}},dependencies:[c.ro,d.y,l.B,p.B,f.n,h.P,c.cl],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}.t-input[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-payment-system[_ngcontent-%COMP%]{width:2rem;height:2rem;color:#1434cb}"],changeDetection:0}),e})()},88197:(t,e,i)=>{i.d(e,{a:()=>n});var a=i(93803),r=i(20755);let n=(()=>{var t;class e extends a.AbstractTuiTextfieldHost{onValueChange(t){this.host.onValueChange(t)}ngAfterViewInit(){const{nativeFocusableElement:t}=this.host;t&&(t.inputMode="numeric",t.placeholder=t.placeholder||"0000 0000 0000 0000")}}return(t=e).ɵfac=function(){let e;return function(i){return(e||(e=r.n5z(t)))(i||t)}}(),t.ɵdir=r.lG2({type:t,selectors:[["tui-input-card"]],features:[r._Bn([(0,a.tuiAsTextfieldHost)(t)]),r.qOj]}),e})()},96816:(t,e,i)=>{i.d(e,{Nd:()=>n,Xt:()=>s,cL:()=>o});var a=i(93517),r=i(2697);const n={icons:a.gb,cardSrc:"",paymentSystemHandler:a.Vn,autocompleteEnabled:!1},o=(0,r.tuiCreateToken)(n);function s(t){return(0,r.tuiProvideOptions)(o,t,n)}},87334:(t,e,i)=>{i.d(e,{_:()=>c});var a=i(20755),r=i(20969),n=i(76733),o=i(62998);function s(t,e){if(1&t&&a._UZ(0,"tui-svg",5),2&t){const t=a.oxw();a.Q6J("src",t.brandLogo)}}function u(t,e){if(1&t&&a._UZ(0,"tui-svg",6),2&t){const t=a.oxw();a.Q6J("src",t.paymentSystemLogo)}}let c=(()=>{var t;class e{constructor(){this.options=(0,a.f3M)(r.cL),this.active=!1,this.brandLogo="",this.cardNumber="",this.paymentSystem=null,this.size="m"}get hasBrandLogo(){return!!this.brandLogo&&"m"===this.size}get paymentSystemLogo(){return this.paymentSystem?this.options.icons[this.paymentSystem]:""}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=a.Xpm({type:t,selectors:[["tui-thumbnail-card"]],hostVars:3,hostBindings:function(t,e){2&t&&(a.uIk("data-size",e.size),a.ekj("_active",e.active))},inputs:{active:"active",brandLogo:"brandLogo",cardNumber:"cardNumber",paymentSystem:"paymentSystem",size:"size"},decls:6,vars:3,consts:[[1,"t-front"],["class","t-brand-logo",3,"src",4,"ngIf"],[1,"t-number"],["class","t-payment-system-logo",3,"src",4,"ngIf"],[1,"t-back"],[1,"t-brand-logo",3,"src"],[1,"t-payment-system-logo",3,"src"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.YNc(1,s,1,1,"tui-svg",1),a.TgZ(2,"span",2),a._uU(3),a.qZA(),a.YNc(4,u,1,1,"tui-svg",3),a.qZA(),a._UZ(5,"div",4)),2&t&&(a.xp6(1),a.Q6J("ngIf",e.hasBrandLogo),a.xp6(2),a.Oqu(e.cardNumber),a.xp6(1),a.Q6J("ngIf",!!e.paymentSystem))},dependencies:[n.O5,o.P],styles:['[_nghost-%COMP%]{position:relative;display:block;flex-shrink:0;color:var(--tui-base-01);transform-style:preserve-3d;cursor:default;border-radius:var(--tui-radius-xs);background-size:100%}[data-size=s][_nghost-%COMP%]{width:2rem;height:1.5rem}[data-size=m][_nghost-%COMP%]{width:3rem;height:2rem}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;width:100%;height:100%;content:"";box-shadow:inset 0 0 0 1px;border-radius:inherit;color:var(--tui-clear)}._active[_nghost-%COMP%]{box-shadow:0 0 0 1px var(--tui-base-01)}.t-front[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.t-brand-logo[_ngcontent-%COMP%]{position:absolute;top:.1875rem;left:.125rem;height:.875rem;width:.875rem}.t-number[_ngcontent-%COMP%]{position:absolute;right:.25rem;display:flex;justify-content:center;align-items:center}[data-size=s][_nghost-%COMP%]   .t-number[_ngcontent-%COMP%]{top:.125rem;height:.625rem;width:1.1875rem;font-size:.5rem}[data-size=m][_nghost-%COMP%]   .t-number[_ngcontent-%COMP%]{top:.1875rem;height:.875rem;width:1.5rem;font-size:.625rem}.t-payment-system-logo[_ngcontent-%COMP%]{position:absolute;right:.25rem;bottom:-.5rem;width:2rem;height:2rem;transform:scale(.5);transform-origin:right}.t-back[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(180deg) translateZ(1px);background-color:var(--tui-base-05);border-radius:var(--tui-radius-xs)}.t-back[_ngcontent-%COMP%]:after{content:"";position:absolute;top:20%;left:0;right:0;height:20%;background-color:var(--tui-base-06)}'],changeDetection:0}),e})()},11074:(t,e,i)=>{i.d(e,{xz:()=>n,Aj:()=>s,sV:()=>c});const a={А:"F",В:"D",Г:"U",Д:"L",Е:"T",З:"P",И:"B",Й:"Q",К:"R",Л:"K",М:"V",Н:"Y",О:"J",П:"G",Р:"H",С:"C",Т:"N",У:"E",Ф:"A",Ц:"W",Ч:"X",Ш:"I",Щ:"O",Ы:"S",Ь:"M",Я:"Z"};function r(t){return t.toUpperCase().split("").map((t=>a[t]||t)).join("")}const n={mask:/^[a-z\s]+$/i,preprocessors:[({elementState:t,data:e})=>{const{value:i,selection:a}=t;return{elementState:{selection:a,value:r(i)},data:r(e)}}]};var o=i(93803);const s=[o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP," ",o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP," ",o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP," ",o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP," ",o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP,o.TUI_DIGIT_REGEXP];var u=i(93517);const c=t=>t.length>11&&(0,u.ul)(t)&&(0,u.Tb)(t)},10882:(t,e,i)=>{i.d(e,{Fb:()=>o,UR:()=>r,bM:()=>n});var a=i(2697);const r={currency:null,currencyAlign:"right",sign:"negative-only"},n=(0,a.tuiCreateToken)(r);function o(t){return(0,a.tuiProvideOptions)(n,t,r)}},61386:(t,e,i)=>{i.d(e,{E:()=>c});var a=i(20755),r=i(93517),n=i(2697),o=i(93803),s=i(92425),u=i(10882);let c=(()=>{var t;class e{constructor(){this.options=(0,a.f3M)(u.bM),this.format=(0,a.f3M)(o.TUI_NUMBER_FORMAT)}transform(t,e=this.options.currency,i=this.options.currencyAlign){return this.format.pipe((0,s.U)((a=>{const s=(0,r.$v)(t,this.options.sign),u=(0,r.BP)(e),c=(0,o.tuiFormatNumber)(Math.abs(t),{...a,precision:Number.isNaN(a.precision)?2:a.precision}),d=u?.length>1||"right"===i?n.CHAR_NO_BREAK_SPACE:"";return"right"===i?`${s}${c}${d}${u}`:`${s}${u}${d}${c}`})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=a.Yjl({name:"tuiAmount",type:t,pure:!0,standalone:!0}),e})()},17539:(t,e,i)=>{i.d(e,{h:()=>o});var a=i(2697),r=i(20755);let n=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=r.Xpm({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-surface-styles"],decls:0,vars:0,template:function(t,e){},styles:['[data-surface]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--tui-gap: .25rem;position:relative;box-sizing:border-box;background:none no-repeat;background-size:cover;overflow:hidden;isolation:isolate;-webkit-appearance:none;appearance:none;border:0;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background,border-radius,box-shadow,transform,-webkit-backdrop-filter,-webkit-mask!important;transition-property:backdrop-filter,background,border-radius,box-shadow,mask,transform!important;transition-property:backdrop-filter,background,border-radius,box-shadow,mask,transform,-webkit-backdrop-filter,-webkit-mask!important}[data-surface]:focus-visible{outline-color:var(--tui-focus)}@supports (not (-moz-appearance: none)) and (not (-webkit-hyphens: none)){[data-surface]:before{mix-blend-mode:multiply}}button[data-surface]{cursor:pointer}[data-surface]:before,[data-surface]:after,[tuiSurfaceLayer]:before,[tuiSurfaceLayer]:after{position:absolute;top:0;left:0;width:100%;height:100%;transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";z-index:-1;border-radius:inherit;pointer-events:none;background-size:cover;background-repeat:no-repeat;transition-property:opacity,transform,-webkit-backdrop-filter;transition-property:opacity,backdrop-filter,transform;transition-property:opacity,backdrop-filter,transform,-webkit-backdrop-filter}[tuiSurfaceLayer]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;left:0;width:100%;height:100%;position:absolute!important;z-index:-1;object-fit:cover;border-radius:inherit;box-sizing:border-box;transition-property:box-shadow,filter,padding}input[tuiSurfaceLayer]+[tuiSurfaceLayer]{will-change:padding;background-clip:content-box;overflow:clip;overflow-clip-margin:content-box}input[tuiSurfaceLayer]:checked+[tuiSurfaceLayer]{padding:var(--tui-gap)}input[tuiSurfaceLayer]:focus-visible+[tuiSurfaceLayer]{padding:var(--tui-gap)}@media (hover: hover) and (pointer: fine){[data-surface]:hover input[tuiSurfaceLayer]+[tuiSurfaceLayer]{padding:var(--tui-gap)}}input[tuiSurfaceLayer]{color:var(--tui-accent);-webkit-appearance:none;appearance:none;margin:0;border-radius:inherit;outline:none;box-shadow:inset 0 0,inset 0 0 var(--tui-base-03)}input[tuiSurfaceLayer]:checked{box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 var(--tui-base-03)}input[tuiSurfaceLayer]:focus-visible{box-shadow:inset 0 0,inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-base-03)}input[tuiSurfaceLayer]:checked:focus-visible{filter:brightness(.7);box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-base-03)}@media (hover: hover) and (pointer: fine){[data-surface]:hover input[tuiSurfaceLayer]{box-shadow:inset 0 0,inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-base-03)}[data-surface]:hover input[tuiSurfaceLayer]:checked{filter:brightness(.9);box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-base-03)}}[tuiSurface][data-surface=elevated]{box-shadow:var(--tui-shadow);background-color:var(--tui-elevation-01)}button[tuiSurface][data-surface=elevated]:active,a[tuiSurface][data-surface=elevated]:active{box-shadow:var(--tui-shadow);transform:scale(.95)}@media (hover: hover) and (pointer: fine){button[tuiSurface][data-surface=elevated]:hover,a[tuiSurface][data-surface=elevated]:hover{box-shadow:var(--tui-shadow-hover);transform:translate3d(0,-.25rem,0);background:var(--tui-elevation-01)}}[tuiSurface][data-surface=flat]{background-color:var(--tui-clear)}button[tuiSurface][data-surface=flat]:active,a[tuiSurface][data-surface=flat]:active{transform:scale(.95)}@media (hover: hover) and (pointer: fine){button[tuiSurface][data-surface=flat]:hover,a[tuiSurface][data-surface=flat]:hover{transform:scale(1.15)}}\n'],encapsulation:2,changeDetection:0}),e})(),o=(()=>{var t;class e{constructor(){this.tuiSurface="",this.nothing=(0,a.tuiWithStyles)(n)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=r.lG2({type:t,selectors:[["","tuiSurface",""]],hostAttrs:["tuiSurface",""],hostVars:1,hostBindings:function(t,e){2&t&&r.uIk("data-surface",e.tuiSurface)},inputs:{tuiSurface:"tuiSurface"}}),e})()}}]);