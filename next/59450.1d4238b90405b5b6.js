(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[59450,87334],{38057:(t,e,n)=>{n.d(e,{c:()=>r});var i,o=n(84911),s=n(20755),a=n(81576);class r extends a.AbstractTuiNullableControl{constructor(t){super(),this.options=t,this.autocompleteEnabled=this.options.autocompleteEnabled,this.binChange=new s.vpe}get autocompleteCard(){return this.autocomplete}get bin(){return this.card.length<6?null:this.card.slice(0,6)}get defaultIcon(){const t=this.getPaymentSystem(this.card);return t&&this.options.icons[t]}get paymentSystem(){return this.getPaymentSystem(this.card)}get icon(){return this.cardSrc||this.defaultIcon}get autocomplete(){return this.autocompleteEnabled?"cc-number":"off"}getPaymentSystem(t){return this.options.paymentSystemHandler(t)}}(i=r).ɵfac=function(t){s.$Z()},i.ɵdir=s.lG2({type:i,inputs:{cardSrc:"cardSrc",autocompleteEnabled:"autocompleteEnabled"},outputs:{binChange:"binChange"},features:[s.qOj]}),(0,o.gn)([a.tuiPure],r.prototype,"getPaymentSystem",null)},20969:(t,e,n)=>{n.d(e,{c9:()=>i.c,Nd:()=>u.Nd,cL:()=>u.cL,zW:()=>o.z,aJ:()=>s.a,S9:()=>l,Xt:()=>u.Xt});var i=n(38057),o=n(85397),s=n(88197),a=n(6642),r=n(42513),c=n(20755);let l=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=c.oAB({type:t}),t.ɵinj=c.cJS({imports:[a.TuiPrimitiveTextfieldModule,a.TuiTextfieldControllerModule,r.TuiValueAccessorModule]}),e})();var u=n(96816)},85397:(t,e,n)=>{n.d(e,{z:()=>b});var i=n(20755),o=n(11074),s=n(81576),a=n(6642),r=n(38057),c=n(96816),l=n(28858),u=n(39047),d=n(53339),g=n(7871),m=n(89713),f=n(62998);function h(t,e){if(1&t&&i._UZ(0,"tui-svg",2),2&t){const t=i.oxw();i.Q6J("src",t.defaultIcon)}}const p=["*",[["input"]]],_=["*","input"];let b=(()=>{var t;class e extends r.c{constructor(){super((0,i.f3M)(c.cL)),this.textfieldSize=(0,i.f3M)(a.TUI_TEXTFIELD_SIZE),this.maskOptions={mask:o.Aj}}get card(){return this.value??""}get nativeFocusableElement(){return this.input?.nativeFocusableElement??null}get focused(){return!!this.input&&this.input.focused}onValueChange(t){const e=t.split(" ").join(""),n=this.bin;this.value=e;const i=this.bin;n!==i&&this.binChange.emit(i)}onFocused(t){this.updateFocused(t)}writeValue(t){const e=this.bin;super.writeValue(t);const n=this.bin;e!==n&&this.binChange.emit(n)}get size(){return this.textfieldSize.size}getFallbackValue(){return""}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-input-card"]],viewQuery:function(t,e){if(1&t&&i.Gf(a.TuiPrimitiveTextfieldComponent,5),2&t){let t;i.iGM(t=i.CRH())&&(e.input=t.first)}},hostVars:1,hostBindings:function(t,e){2&t&&i.uIk("data-size",e.size)},features:[i._Bn([(0,s.tuiAsFocusableItemAccessor)(t),(0,s.tuiAsControl)(t)]),i.qOj],ngContentSelectors:_,decls:6,vars:14,consts:[["tuiValueAccessor","",1,"t-input",3,"disabled","focusable","invalid","maskito","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldCustomContent","value","focusedChange","valueChange"],["logo",""],[1,"t-payment-system",3,"src"]],template:function(t,e){if(1&t&&(i.F$t(p),i.TgZ(0,"tui-primitive-textfield",0),i.NdJ("focusedChange",(function(t){return e.onFocused(t)}))("valueChange",(function(t){return e.onValueChange(t)})),i.ALo(1,"maskito"),i.Hsn(2),i.Hsn(3,1,["ngProjectAs","input",5,["input"]]),i.qZA(),i.YNc(4,h,1,1,"ng-template",null,1,i.W1O)),2&t){const t=i.MAs(5);i.Q6J("disabled",e.disabled)("focusable",e.focusable)("invalid",e.computedInvalid)("maskito",e.maskOptions)("nativeId",e.nativeId)("pseudoActive",e.pseudoActive)("pseudoFocus",e.pseudoFocus)("pseudoHover",e.pseudoHover)("readOnly",e.readOnly)("tuiTextfieldCustomContent",e.cardSrc||e.defaultIcon&&t)("value",i.xi3(1,11,e.card,e.maskOptions))}},dependencies:[l.ro,u.y,d.B,g.B,m.n,f.P,l.cl],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}.t-input[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-payment-system[_ngcontent-%COMP%]{width:2rem;height:2rem;color:#1434cb}"],changeDetection:0}),e})()},88197:(t,e,n)=>{n.d(e,{a:()=>s});var i=n(6642),o=n(20755);let s=(()=>{var t;class e extends i.AbstractTuiTextfieldHost{onValueChange(t){this.host.onValueChange(t)}ngAfterViewInit(){const{nativeFocusableElement:t}=this.host;t&&(t.inputMode="numeric",t.placeholder=t.placeholder||"0000 0000 0000 0000")}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=o.n5z(t)))(n||t)}}(),t.ɵdir=o.lG2({type:t,selectors:[["tui-input-card"]],features:[o._Bn([(0,i.tuiAsTextfieldHost)(t)]),o.qOj]}),e})()},96816:(t,e,n)=>{n.d(e,{Nd:()=>s,Xt:()=>r,cL:()=>a});var i=n(93517),o=n(81576);const s={icons:i.gb,cardSrc:"",paymentSystemHandler:i.Vn,autocompleteEnabled:!1},a=(0,o.tuiCreateToken)(s);function r(t){return(0,o.tuiProvideOptions)(a,t,s)}},87334:(t,e,n)=>{n.d(e,{_:()=>m});var i=n(76733),o=n(20755),s=n(20969),a=n(6642);function r(t,e){if(1&t&&(o.TgZ(0,"div",5),o._UZ(1,"tui-icon",6),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.Q6J("icon",t.iconLeft)}}function c(t,e){if(1&t&&(o.TgZ(0,"div",7),o._UZ(1,"tui-icon",6),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.Q6J("icon",t.iconRight)}}function l(t,e){if(1&t&&o._UZ(0,"tui-icon",10),2&t){const t=o.oxw(2);o.Q6J("icon",t.options.icons[t.paymentSystem])}}function u(t,e){if(1&t&&o._UZ(0,"img",11),2&t){const t=o.oxw(2);o.Q6J("alt",t.paymentSystem)("src",t.resolver(t.options.icons[t.paymentSystem]).replace("Outline",""),o.LSH)}}function d(t,e){if(1&t&&(o.ynx(0),o.YNc(1,l,1,1,"tui-icon",8),o.YNc(2,u,1,2,"ng-template",null,9,o.W1O),o.BQk()),2&t){const t=o.MAs(3),e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.isMono)("ngIfElse",t)}}const g=["*"];let m=(()=>{var t;class e{constructor(){this.size="m",this.paymentSystem=null,this.iconLeft="",this.iconRight="",this.options=(0,o.f3M)(s.cL),this.resolver=(0,o.f3M)(a.TUI_ICON_RESOLVER)}get isMono(){switch(this.paymentSystem){case"mir":case"visa":case"electron":return!0;default:return!1}}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["tui-thumbnail-card"]],hostVars:1,hostBindings:function(t,e){2&t&&o.uIk("data-size",e.size)},inputs:{size:"size",paymentSystem:"paymentSystem",iconLeft:"iconLeft",iconRight:"iconRight"},standalone:!0,features:[o.jDz],ngContentSelectors:g,decls:6,vars:3,consts:[[1,"t-front"],["class","t-left",4,"ngIf"],["class","t-right",4,"ngIf"],[4,"ngIf"],[1,"t-back"],[1,"t-left"],[1,"t-icon",3,"icon"],[1,"t-right"],["class","t-logo",3,"icon",4,"ngIf","ngIfElse"],["colored",""],[1,"t-logo",3,"icon"],[1,"t-logo",3,"alt","src"]],template:function(t,e){1&t&&(o.F$t(),o.TgZ(0,"div",0),o.YNc(1,r,2,1,"div",1),o.YNc(2,c,2,1,"div",2),o.Hsn(3),o.YNc(4,d,4,2,"ng-container",3),o.qZA(),o._UZ(5,"div",4)),2&t&&(o.xp6(1),o.Q6J("ngIf",e.iconLeft),o.xp6(1),o.Q6J("ngIf",e.iconRight),o.xp6(2),o.Q6J("ngIf",e.paymentSystem))},dependencies:[a.TuiIconComponent,i.O5],styles:['[_nghost-%COMP%]{position:relative;display:inline-flex;flex-shrink:0;background:#000;color:#fff;transform-style:preserve-3d;overflow:hidden}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;width:100%;height:100%;content:""}[data-size=s][_nghost-%COMP%]{width:2.5rem;height:1.625rem;border-radius:.25rem;font-size:0}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.125rem,.125rem) scale(.625)}[data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{display:none}[data-size=s][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:-.375rem;transform:scale(.55)}[data-size=m][_nghost-%COMP%]{width:3rem;height:2rem;border-radius:.3125rem;text-indent:.1875rem;font:normal .5625rem/.875rem var(--tui-font-text)}[data-size=m][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.1875rem,.25rem) scale(.75)}[data-size=m][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{transform:translate(-.1875rem,.1875rem) scale(.875)}[data-size=m][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(.714)}[data-size=m][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:-.3125rem;transform:scale(.55)}[data-size=l][_nghost-%COMP%]{width:3.375rem;height:2.25rem;border-radius:.375rem;text-indent:.3125rem;font:normal .625rem/1.125rem var(--tui-font-text)}[data-size=l][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.1875rem,.1875rem)}[data-size=l][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{transform:translate(-.1875rem,.1875rem)}[data-size=l][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:-.1875rem;transform:scale(.75)}.t-left[_ngcontent-%COMP%], .t-right[_ngcontent-%COMP%]{position:absolute;top:0;display:flex}.t-left[_ngcontent-%COMP%]{left:0;transform-origin:top left}.t-right[_ngcontent-%COMP%]{right:0;transform-origin:top right}.t-right[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background:currentColor;opacity:.35}.t-right[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:#fff;transform:scale(.625)}.t-logo[_ngcontent-%COMP%]{position:absolute;right:.1875rem;width:1.5rem;height:1.5rem;transform-origin:right}.t-icon[_ngcontent-%COMP%]{width:1rem;height:1rem}.t-front[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:flex-end;-webkit-backface-visibility:hidden;backface-visibility:hidden;box-shadow:inset 0 0 0 1px var(--tui-clear);border-radius:inherit}.t-back[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(180deg) translateZ(1px);background:#b0b0b0;border-radius:inherit}.t-back[_ngcontent-%COMP%]:after{position:absolute;left:0;right:0;content:"";top:20%;bottom:60%;background:#959595}'],changeDetection:0}),e})()},11074:(t,e,n)=>{n.d(e,{xz:()=>s,Aj:()=>r,sV:()=>l});const i={А:"F",В:"D",Г:"U",Д:"L",Е:"T",З:"P",И:"B",Й:"Q",К:"R",Л:"K",М:"V",Н:"Y",О:"J",П:"G",Р:"H",С:"C",Т:"N",У:"E",Ф:"A",Ц:"W",Ч:"X",Ш:"I",Щ:"O",Ы:"S",Ь:"M",Я:"Z"};function o(t){return t.toUpperCase().split("").map((t=>i[t]||t)).join("")}const s={mask:/^[a-z\s]+$/i,preprocessors:[({elementState:t,data:e})=>{const{value:n,selection:i}=t;return{elementState:{selection:i,value:o(n)},data:o(e)}}]};var a=n(6642);const r=[a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP," ",a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP," ",a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP," ",a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP," ",a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP];var c=n(93517);const l=t=>t.length>11&&(0,c.ul)(t)&&(0,c.Tb)(t)},59450:(t,e,n)=>{n.r(e),n.d(e,{TuiCardMediumExample7:()=>d});var i=n(20755),o=n(35661),s=n(76967),a=n(62998),r=n(15560),c=n(72133),l=n(10545),u=n(87334);let d=(()=>{var t;class e{constructor(){this.value=0}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-card-medium-example-7"]],decls:18,vars:8,consts:[["tuiCardMedium","","tuiSurface","",1,"card"],["src","tuiIconGooglePay"],["tuiFade","",1,"cards"],["iconLeft","tuiIconLock","paymentSystem","mastercard","size","m"],["iconLeft","tuiIconLock","paymentSystem","mir","size","m",1,"mir"],["paymentSystem","visa","size","m",1,"visa"],["tuiSurfaceLayer","","type","radio",1,"selected",3,"value","ngModel","ngModelChange"],["tuiRipple","","tuiSurfaceLayer",""],["src","tuiIconApplePay"],["paymentSystem","mir","size","m",1,"mir"],["tuiSurfaceLayer","","type","radio",3,"value","ngModel","ngModelChange"]],template:function(t,e){1&t&&(i.TgZ(0,"label",0),i._UZ(1,"tui-svg",1),i.TgZ(2,"div",2)(3,"tui-thumbnail-card",3),i._uU(4," 4572 "),i.qZA(),i.TgZ(5,"tui-thumbnail-card",4),i._uU(6," 6733 "),i.qZA(),i.TgZ(7,"tui-thumbnail-card",5),i._uU(8," 5212 "),i.qZA()(),i.TgZ(9,"input",6),i.NdJ("ngModelChange",(function(t){return e.value=t})),i.qZA(),i._UZ(10,"div",7),i.qZA(),i.TgZ(11,"label",0),i._UZ(12,"tui-svg",8),i.TgZ(13,"div",2)(14,"tui-thumbnail-card",9),i._uU(15," 2222 "),i.qZA()(),i.TgZ(16,"input",10),i.NdJ("ngModelChange",(function(t){return e.value=t})),i.qZA(),i._UZ(17,"div",7),i.qZA()),2&t&&(i.xp6(9),i.Q6J("value",0)("ngModel",e.value),i.xp6(1),i.Udp("background-color","#fff6c7"),i.xp6(6),i.Q6J("value",1)("ngModel",e.value),i.xp6(1),i.Udp("background-color","#d5f6df"))},dependencies:[o.X,s.S,a.P,r.h,c.Fj,c._,c.JJ,c.On,l.q,u._],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}.card[_ngcontent-%COMP%]{height:6.5rem;width:6.5rem}.mir[_ngcontent-%COMP%]{background:#2b9aff linear-gradient(110deg,transparent 70%,#0780ff 71%,#db028b 100%)}.visa[_ngcontent-%COMP%]{background:linear-gradient(45deg,#ffaa00d1,#ffaa00),url(/assets/taiga-ui/icons/tuiIconStarLarge.svg)}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:.25rem;width:-webkit-fill-available;width:-moz-available;width:stretch;margin:0 -.4375rem;padding:0 .4375rem;overflow:auto}"],changeDetection:0}),e})()}}]);