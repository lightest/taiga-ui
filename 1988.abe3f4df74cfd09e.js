(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1988],{1988:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiInputCardGroupedModule:()=>ne});var o=n(86568),r=n(35856),a=n(82312),i=n(63528),c=n(752),u=n(10488),s=n(33976),d=n(58200),l=n(47796),p=n(6528),m=n(45328),g=n(11307),h=n(74240),y=n(18980),C=n(93304),f=n(13692),b=n(96808),E=n(95356),v=n(56616),w=n(34496),x=n(37288),P=n(83480),G=n(34448),O=n(11664),k=n(19868);const T=function(){return[]};let I=(()=>{var e;class t{constructor(){this.control=new r.Ku(null,[i.tuiCardNumberValidator,i.tuiCardExpireValidator])}get card(){var e;const t=(null===(e=this.control.value)||void 0===e?void 0:e.card)||"";if(t.length<7)return null;switch(t.charAt(0)){case"0":case"1":case"2":return"https://ng-web-apis.github.io/dist/assets/images/common.svg";case"3":case"4":case"5":return"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg";case"6":case"7":return"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg";default:return"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg"}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.In1({type:e,selectors:[["tui-input-card-grouped-example-1"]],decls:4,vars:9,consts:[[3,"cardSrc","formControl"],[3,"error","formControl"]],template:function(e,t){1&e&&(p.wR5(0,"tui-input-card-grouped",0)(1,"tui-error",1),p.wVc(2,"async"),p.wVc(3,"tuiFieldError")),2&e&&(p.E7m("cardSrc",t.card)("formControl",t.control),p.yG2(1),p.E7m("error",p.kDX(2,4,p.kDX(3,6,p.q4q(8,T))))("formControl",t.control))},dependencies:[y.g,O.a,r.ue,r.ug,k.M,o.a],encapsulation:2,changeDetection:0}),t})();var R=n(15119),V=n(8372),M=n(2036),Y=n(6620),S=n(79848);function $(e,t){if(1&e&&(p.I0R(0,"button",9),p.wR5(1,"tui-thumbnail-card",10),p.I0R(2,"label",11),p.OEk(3),p.C$Y(),p.I0R(4,"span"),p.OEk(5),p.C$Y()()),2&e){const e=t.$implicit;p.E7m("value",e),p.yG2(1),p.E7m("cardNumber",e.card.slice(-4)),p.yG2(1),p.E7m("tuiLabel",e.bank),p.yG2(1),p.oRS(" ",e.name," "),p.yG2(2),p.cNF(e.card.slice(-5))}}function L(e,t){if(1&e){const e=p.KQA();p.I0R(0,"tui-data-list",4),p.qCj("keydown.escape",(function(){p.usT(e);const t=p.GaO(),n=p.Gew(2);return p.CGJ(t.onEsc(n))})),p.I0R(1,"button",5),p.qCj("click",(function(){p.usT(e);const t=p.GaO(),n=p.Gew(2);return p.CGJ(t.onClick(n))})),p.wR5(2,"tui-svg",6),p.I0R(3,"span",7),p.OEk(4,"New card"),p.C$Y()(),p.yuY(5,$,6,5,"button",8),p.C$Y()}if(2&e){const e=p.GaO();p.yG2(5),p.E7m("ngForOf",e.items)}}let D=(()=>{var e;class t{constructor(){this.items=[{card:"4321***1234",expire:"12/21",name:"Salary",bank:"Tinkoff"},{card:"8765***5678",expire:"03/42",cvc:"***",name:"Tips",bank:"Bank of America"},{card:"4200***9000",name:"Dogecoins",bank:"Crypto"}],this.card=new r.WC({meta:new r.Ku(this.items[0])})}onClick(e){var t;null===(t=this.card.get("meta"))||void 0===t||t.setValue(null),this.onEsc(e)}onEsc(e){var t;null===(t=e.nativeFocusableElement)||void 0===t||t.focus(),e.open=!1}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.In1({type:e,selectors:[["tui-input-card-grouped-example-2"]],decls:4,vars:1,consts:[[3,"formGroup"],["formControlName","meta"],["component",""],["size","l",3,"keydown.escape",4,"tuiDataList"],["size","l",3,"keydown.escape"],["tuiOption","",3,"click"],["src","tuiIconPlus",1,"new"],[1,"label"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"],["size","s",1,"card",3,"cardNumber"],[1,"label",3,"tuiLabel"]],template:function(e,t){1&e&&(p.I0R(0,"form",0)(1,"tui-input-card-grouped",1,2),p.yuY(3,L,6,1,"tui-data-list",3),p.C$Y()()),2&e&&p.E7m("formGroup",t.card)},dependencies:[y.g,R.y,V.s,M.U,C.k,Y.Y,S.W,o.ay,r.sz,r.ue,r.u,r.uW,r.Wo],styles:[".new[_ngcontent-%COMP%]{width:2rem;height:1.5rem;border-radius:4px;background:var(--tui-secondary);color:var(--tui-link)}.card[_ngcontent-%COMP%]{background:var(--tui-support-01)}button[_ngcontent-%COMP%]:nth-child(4)   .card[_ngcontent-%COMP%]{background:var(--tui-support-05)}.label[_ngcontent-%COMP%]{margin:0 auto 0 .75rem}"],changeDetection:0}),t})();function N(e,t){1&e&&p.wR5(0,"img",4)}const _=function(){return[]};let q=(()=>{var e;class t{constructor(){this.control=new r.Ku(null,[i.tuiCardNumberValidator,i.tuiCardExpireValidator])}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.In1({type:e,selectors:[["tui-input-card-grouped-example-3"]],decls:6,vars:9,consts:[[3,"cardSrc","formControl"],["polymorpheus",""],["template","polymorpheus"],[3,"error","formControl"],["alt","custom-icon","height","32","src","https://ng-web-apis.github.io/dist/assets/images/web-api.svg","width","32"]],template:function(e,t){if(1&e&&(p.wR5(0,"tui-input-card-grouped",0),p.yuY(1,N,1,0,"ng-template",1,2,p.gJz),p.wR5(3,"tui-error",3),p.wVc(4,"async"),p.wVc(5,"tuiFieldError")),2&e){const e=p.Gew(2);p.E7m("cardSrc",e)("formControl",t.control),p.yG2(3),p.E7m("error",p.kDX(4,4,p.kDX(5,6,p.q4q(8,_))))("formControl",t.control)}},dependencies:[y.g,O.a,r.ue,r.ug,d.sv,k.M,o.a],encapsulation:2,changeDetection:0}),t})(),A=(()=>{var e;class t{constructor(){this.control=new r.Ku({card:"",expire:"",cvc:"***"})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.In1({type:e,selectors:[["tui-input-card-grouped-example-4"]],decls:1,vars:1,consts:[[3,"formControl"]],template:function(e,t){1&e&&p.wR5(0,"tui-input-card-grouped",0),2&e&&p.E7m("formControl",t.control)},dependencies:[y.g,r.ue,r.ug],encapsulation:2,changeDetection:0}),t})();var F=n(20816);let J=(()=>{var e;class t{constructor(){this.control=new r.Ku({card:"558620******2158",expire:"12/25"})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.In1({type:e,selectors:[["tui-input-card-grouped-example-5"]],features:[p.M5G([{provide:i.TUI_INPUT_CARD_GROUPED_TEXTS,useValue:(0,F.of)({cardNumberText:"Number",expiryText:"mm/yy",cvcText:"Code"})}])],decls:1,vars:1,consts:[[3,"formControl"]],template:function(e,t){1&e&&p.wR5(0,"tui-input-card-grouped",0),2&e&&p.E7m("formControl",t.control)},dependencies:[y.g,r.ue,r.ug],encapsulation:2,changeDetection:0}),t})();function j(e,t){if(1&e&&(p.I0R(0,"p")(1,"code"),p.OEk(2,"InputCardGrouped"),p.C$Y(),p.OEk(3," is used to input a card as a separated control "),p.C$Y(),p.I0R(4,"tui-doc-example",2),p.wR5(5,"tui-input-card-grouped-example-1"),p.C$Y(),p.I0R(6,"tui-doc-example",3),p.wR5(7,"tui-input-card-grouped-example-2"),p.C$Y(),p.I0R(8,"tui-doc-example",4),p.wR5(9,"tui-input-card-grouped-example-3"),p.C$Y(),p.I0R(10,"tui-doc-example",5),p.wR5(11,"tui-input-card-grouped-example-4"),p.C$Y(),p.I0R(12,"tui-doc-example",6),p.wR5(13,"tui-input-card-grouped-example-5"),p.C$Y()),2&e){const e=p.GaO();p.yG2(4),p.E7m("content",e.example1),p.yG2(2),p.E7m("content",e.example2),p.yG2(2),p.E7m("content",e.example3),p.yG2(2),p.E7m("content",e.example4),p.yG2(2),p.E7m("content",e.example5)}}function H(e,t){if(1&e){const e=p.KQA();p.I0R(0,"tui-input-card-grouped",17),p.qCj("binChange",(function(t){p.usT(e),p.GaO();const n=p.Gew(17);return p.CGJ(n.emitEvent(t))})),p.C$Y()}if(2&e){const e=p.GaO(2);p.E7m("autocompleteEnabled",e.autocompleteEnabled)("cardSrc",e.cardSrc)("codeLength",e.codeLength)("exampleText",e.exampleText)("focusable",e.focusable)("formControl",e.control)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)}}function K(e,t){1&e&&p.wR5(0,"tui-thumbnail-card",18)}function z(e,t){1&e&&(p.OEk(0," Disabled state (use "),p.I0R(1,"code"),p.OEk(2,"formControl.disable()"),p.C$Y(),p.OEk(3," ) "))}function W(e,t){1&e&&p.OEk(0," Browser autocomplete of card ")}function X(e,t){1&e&&p.OEk(0," SVG card icon ")}function U(e,t){1&e&&p.OEk(0," An example of input ")}function B(e,t){1&e&&p.OEk(0," Code length ")}function Q(e,t){1&e&&p.OEk(0," BIN value (card first 6 symbols) ")}function Z(e,t){if(1&e){const e=p.KQA();p.I0R(0,"tui-doc-demo",7),p.yuY(1,H,1,11,"ng-template"),p.C$Y(),p.I0R(2,"div",8)(3,"p"),p.OEk(4," Add "),p.I0R(5,"code"),p.OEk(6,"tuiCreateLuhnValidator(customMessage?)"),p.C$Y(),p.OEk(7," to control validators to validate it with Luhn algorithm "),p.C$Y()(),p.yuY(8,K,1,0,"ng-template",null,9,p.gJz),p.I0R(10,"tui-doc-documentation"),p.yuY(11,z,4,0,"ng-template",10),p.qCj("documentationPropertyValueChange",(function(t){p.usT(e);const n=p.GaO();return p.CGJ(n.disabled=t)})),p.yuY(12,W,1,0,"ng-template",11),p.qCj("documentationPropertyValueChange",(function(t){p.usT(e);const n=p.GaO();return p.CGJ(n.autocompleteEnabled=t)})),p.yuY(13,X,1,0,"ng-template",12),p.qCj("documentationPropertyValueChange",(function(t){p.usT(e);const n=p.GaO();return p.CGJ(n.cardSrcSelected=t)})),p.yuY(14,U,1,0,"ng-template",13),p.qCj("documentationPropertyValueChange",(function(t){p.usT(e);const n=p.GaO();return p.CGJ(n.exampleText=t)})),p.yuY(15,B,1,0,"ng-template",14),p.qCj("documentationPropertyValueChange",(function(t){p.usT(e);const n=p.GaO();return p.CGJ(n.codeLength=t)})),p.yuY(16,Q,1,0,"ng-template",15,16,p.gJz),p.C$Y(),p.wR5(18,"inherited-documentation")}if(2&e){const e=p.Gew(9),t=p.GaO();p.E7m("control",t.control),p.yG2(11),p.E7m("documentationPropertyValue",t.disabled),p.yG2(1),p.E7m("documentationPropertyValue",t.autocompleteEnabled),p.yG2(1),p.E7m("documentationPropertyValues",t.getContentVariants(e))("documentationPropertyValue",t.cardSrcSelected),p.yG2(1),p.E7m("documentationPropertyValue",t.exampleText),p.yG2(1),p.E7m("documentationPropertyValues",t.codeLengthVariants)("documentationPropertyValue",t.codeLength)}}function ee(e,t){if(1&e&&(p.I0R(0,"ol",19)(1,"li")(2,"p"),p.OEk(3," Import "),p.I0R(4,"code"),p.OEk(5,"TuiInputCardGroupedModule"),p.C$Y(),p.OEk(6," into a module where you want to use our component "),p.C$Y(),p.wR5(7,"tui-doc-code",20),p.C$Y(),p.I0R(8,"li")(9,"p"),p.OEk(10,"Add to the template:"),p.C$Y(),p.wR5(11,"tui-doc-code",21),p.C$Y()()),2&e){const e=p.GaO();p.yG2(7),p.E7m("code",e.exampleModule),p.yG2(4),p.E7m("code",e.exampleHtml)}}let te=(()=>{var e;class t extends h.Y{constructor(){super(...arguments),this.exampleModule=n.e(81100).then(n.t.bind(n,81100,17)),this.exampleHtml=n.e(52892).then(n.t.bind(n,52892,17)),this.example1={TypeScript:n.e(73420).then(n.t.bind(n,73420,17)),HTML:n.e(28352).then(n.t.bind(n,5972,17))},this.example2={TypeScript:n.e(88216).then(n.t.bind(n,65835,17)),HTML:n.e(54904).then(n.t.bind(n,54904,17)),LESS:n.e(90544).then(n.t.bind(n,90544,17))},this.example3={TypeScript:n.e(25232).then(n.t.bind(n,25232,17)),HTML:n.e(74356).then(n.t.bind(n,74356,17))},this.example4={TypeScript:n.e(37796).then(n.t.bind(n,60176,17)),HTML:n.e(26100).then(n.t.bind(n,26100,17))},this.example5={TypeScript:n.e(43951).then(n.t.bind(n,43951,17)),HTML:n.e(94032).then(n.t.bind(n,94032,17))},this.cards={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.cardSrcVariants=Object.keys(this.cards),this.cardSrcSelected="",this.autocompleteEnabled=!1,this.exampleText="0000 0000 0000 0000",this.codeLengthVariants=[3,4],this.codeLength=this.codeLengthVariants[0],this.pseudoInvalid=null,this.readOnly=!1,this.control=new r.Ku(null)}get cardSrc(){return(0,m.tuiIsString)(this.cardSrcSelected)?this.cards[this.cardSrcSelected]:this.cardSrcSelected}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}getContentVariants(e){return[...this.cardSrcVariants,e]}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=p.otF(e)))(n||e)}}(),e.ɵcmp=p.In1({type:e,selectors:[["example-input-card-grouped"]],features:[p.M5G([{provide:g.m,useExisting:(0,p.wd)((()=>e))}]),p.eg9],decls:4,vars:0,consts:[["header","InputCardGrouped","package","ADDON-COMMERCE","type","components"],["pageTab",""],["id","validation","heading","With validation",3,"content"],["id","select","heading","With saved cards",3,"content"],["id","card-src","heading","With custom card template",3,"content"],["id","form-state","heading","Custom form state",3,"content"],["id","custom-labels","heading","Custom labels",3,"content"],[3,"control"],[1,"b-full-width","tui-space_bottom-6"],["template",""],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","autocompleteEnabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","cardSrc","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","exampleText","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","codeLength","documentationPropertyType","3 | 4",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","binChange","documentationPropertyType","string | null"],["documentationPropertyBinChange","documentationProperty"],[3,"autocompleteEnabled","cardSrc","codeLength","exampleText","focusable","formControl","pseudoActive","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","binChange"],["cardNumber","1234","paymentSystem","maestro","size","s",1,"card"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(p.I0R(0,"tui-doc-page",0),p.yuY(1,j,14,5,"ng-template",1),p.yuY(2,Z,19,8,"ng-template",1),p.yuY(3,ee,12,2,"ng-template",1),p.C$Y())},dependencies:[y.g,C.k,r.ue,r.ug,f.u,b.m,E.I,v.S,w.E,x.u,P.I,G.i,I,D,q,A,J],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.control[_ngcontent-%COMP%]{flex:1;margin-bottom:.25rem}.control[_ngcontent-%COMP%]:not(:last-child){margin-right:1.25rem}.error[_ngcontent-%COMP%]{min-width:100%}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}.card[_ngcontent-%COMP%]{background:#87ceeb}"],changeDetection:0}),t})(),ne=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=p.a4G({type:e}),e.ɵinj=p.s3X({imports:[i.TuiInputCardGroupedModule,u.TuiLinkModule,u.TuiErrorModule,s.TuiFieldErrorPipeModule,u.TuiDataListModule,i.TuiThumbnailCardModule,u.TuiLabelModule,u.TuiSvgModule,o.MD,r.sl,c.kx,l.k,a.qQ.forChild((0,c._A)(te)),d.Ux]}),t})()}}]);