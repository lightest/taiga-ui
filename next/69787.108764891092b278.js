(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[69787],{69787:(t,e,n)=>{n.r(e),n.d(e,{IconsModule:()=>ut});var o=n(76733),i=n(72133),c=n(42932),r=n(79984),s=n(87253),u=n(93803),a=n(20755),l=n(33898),p=n(73843),g=n(92425),d=n(2697),m=n(24556);const h=["tuiIconRedo","tuiIconRefresh","tuiIconRefreshLarge","tuiIconSortUp","tuiIconSortDown","tuiIconUndo"],f=["tuiIconElectron","tuiIconElectronMono","tuiIconCirrus","tuiIconMaestro","tuiIconMaestroMono","tuiIconMastercard","tuiIconMastercardMono","tuiIconMir","tuiIconMirMono","tuiIconVisa","tuiIconVisaMono","tuiIconUnionPay","tuiIconJCB","tuiIconPayPal","tuiIconAmex","tuiIconDinersClub","tuiIconDiscover","tuiIconHumo","tuiIconRuPay","tuiIconUzcard","tuiIconVerve"],y=["tuiIconApplePay","tuiIconGooglePay","tuiIconSamsungPay","tuiIconWorldPay","tuiIconAliPay","tuiIconAmazonPay","tuiIconAndroidPay"],I=(0,d.tuiCreateTokenFromFactory)((()=>(t=>{const{LARGE:e,NORMAL:n}=function(){const t=[],e=[],n=new Set([...f,...y]);for(const[o]of Object.entries(m))n.has(o)||"tuiCoreIcons"===o||"tuiKitIcons"===o||(o.includes("Large")?t.push(o):o.includes("Outline")||e.push(o));return{LARGE:t,NORMAL:e}}();return{"Description and examples":{"Normal / 16px":n.filter((e=>!t(e)&&!h.includes(e))),"Large / 24px":e.filter((e=>!t(e)&&!h.includes(e))),"Payment systems":f,"Payment services":y}}})((0,a.f3M)(u.TUI_SVG_OPTIONS).deprecated)));var T=n(2313),x=n(27146),v=n(62998),M=n(5824),P=n(36877),b=n(38404),w=n(65004),Z=n(43894),C=n(17894),A=n(53962),O=n(18004),_=n(20155),U=n(55333),L=n(81749);let k=(()=>{var t;class e{constructor(){this.template=(0,a.f3M)(a.Rgc)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=a.lG2({type:t,selectors:[["","iconGroup",""]],inputs:{iconGroup:"iconGroup"}}),e})();var q=n(13117),J=n(93815),N=n(51763),S=n(90189),V=n(4732),F=n(91734),G=n(59915),Q=n(59590),z=n(46946),H=n(56655);function E(t,e){1&t&&(a.TgZ(0,"p",9),a._uU(1," Nothing found "),a.qZA())}const $=function(){return{isIntersecting:!1}},R=function(t,e,n,o){return{icon:t,group:e,copyPath:n,entry:o}};function Y(t,e){if(1&t&&a.GkF(0,10),2&t){const t=e.$implicit,n=a.oxw(2).$implicit,o=a.oxw();a.Q6J("ngTemplateOutlet",(null==o.iconGroup?null:o.iconGroup.template)||null)("ngTemplateOutletContext",a.l5B(3,R,t,n,o.copyPath,a.DdM(2,$)))}}function B(t,e){if(1&t&&(a.ynx(0),a.TgZ(1,"div",4)(2,"h2",0),a._uU(3),a.qZA(),a.TgZ(4,"tui-badge",5),a._uU(5),a.qZA()(),a.YNc(6,E,2,0,"p",6),a.TgZ(7,"div",7),a.YNc(8,Y,1,8,"ng-container",8),a.qZA(),a.BQk()),2&t){const t=e.ngIf,n=a.oxw().$implicit,o=a.oxw();a.xp6(3),a.hij(" ",n," "),a.xp6(1),a.Q6J("appearance",t.length?"success":"error"),a.xp6(1),a.hij(" ",t.length.toString()," "),a.xp6(1),a.Q6J("ngIf",!t.length),a.xp6(1),a.Udp("--tui-text-01-night",o.color)("--tui-text-01",o.color),a.xp6(1),a.Q6J("ngForOf",t)}}function D(t,e){if(1&t&&(a.ynx(0),a.YNc(1,B,9,9,"ng-container",3),a.ALo(2,"tuiFilter"),a.ALo(3,"async"),a.BQk()),2&t){const t=e.$implicit,n=a.oxw();let o;a.xp6(1),a.Q6J("ngIf",a.Dn7(2,1,n.icons[t],n.matcher,null!==(o=a.lcZ(3,5,n.search$))&&void 0!==o?o:""))}}const j=["*"];let K=(()=>{var t;class e{constructor(){this.clipboard=(0,a.f3M)(A.TU),this.alerts=(0,a.f3M)(u.TuiAlertService),this.route=(0,a.f3M)(c.gz),this.router=(0,a.f3M)(c.F0),this.destroy$=(0,a.f3M)(d.TuiDestroyService,{self:!0}),this.icons={},this.color=null,this.matcher=d.TUI_DEFAULT_MATCHER,this.control=new i.NI(""),this.search$=this.route.queryParams.pipe((0,g.U)((t=>t.search??"")),(0,O.x)()),this.copyPath=t=>{this.clipboard.copy(t),this.alerts.open(`The name ${t} copied`,{status:"success"}).subscribe()}}ngOnInit(){this.control.patchValue(this.route.snapshot.queryParams.search??""),this.control.valueChanges.pipe((0,_.b)(500),(0,g.U)((t=>t||"")),(0,U.h)((t=>t.length>2||0===t.length)),(0,L.R)(this.destroy$)).subscribe((t=>{this.router.navigate([],{queryParams:{search:t}})}))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=a.Xpm({type:t,selectors:[["icons-group"]],contentQueries:function(t,e,n){if(1&t&&a.Suo(n,k,5),2&t){let t;a.iGM(t=a.CRH())&&(e.iconGroup=t.first)}},inputs:{icons:"icons",color:"color"},features:[a._Bn([d.TuiDestroyService])],ngContentSelectors:j,decls:7,vars:6,consts:[[1,"title"],["tuiAutoFocus","","tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"formControl","tuiTextfieldCleaner","tuiTextfieldLabelOutside"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"header-group"],["size","m",1,"badge",3,"appearance"],["class","nothing",4,"ngIf"],[1,"icons"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[1,"nothing"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(a.F$t(),a.TgZ(0,"h2",0),a._uU(1,"Search by name"),a.qZA(),a.TgZ(2,"tui-input",1),a._uU(3," Input icon name to highlight\n"),a.qZA(),a.Hsn(4),a.YNc(5,D,4,7,"ng-container",2),a.ALo(6,"tuiKeys")),2&t&&(a.xp6(2),a.Q6J("formControl",e.control)("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),a.xp6(3),a.Q6J("ngForOf",a.lcZ(6,4,e.icons)))},dependencies:[o.sg,o.O5,o.tP,q.K,J.w,N.z,S.bZ,V.b,F.x,G.s,i.JJ,i.oH,Q.k,o.Ov,z.R,H.S],styles:[".header-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1.875rem 0 .75rem;justify-content:center}.nothing[_ngcontent-%COMP%]{text-align:center}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.badge[_ngcontent-%COMP%]{margin-left:1rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem;justify-content:center}"],changeDetection:0}),e})();function W(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"button",11),a.NdJ("click",(function(){a.CHM(t);const e=a.oxw(),n=e.icon,o=e.copyPath;return a.KtG(o(n))})),a.qZA()}if(2&t){const t=a.oxw().icon;a.Q6J("iconLeft",t),a.uIk("aria-label",t)}}function X(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"div",9),a.NdJ("waIntersectionObservee",(function(e){const n=a.CHM(t).entry,o=a.oxw(3);return a.KtG(n.isIntersecting=n.isIntersecting||o.onIntersection(e))})),a.YNc(1,W,1,2,"button",10),a.qZA()}if(2&t){const t=e.entry;a.xp6(1),a.Q6J("ngIf",t.isIntersecting)}}function tt(t,e){if(1&t&&(a.TgZ(0,"tui-notification"),a._uU(1," Open source theme for Taiga UI uses processed "),a.TgZ(2,"a",4),a._uU(3," Feather Icons "),a.qZA(),a._uU(4," as its icon pack with some custom made icons. "),a.qZA(),a.TgZ(5,"p"),a._uU(6," These icons can be used by name in "),a.TgZ(7,"a",5),a._uU(8," Svg "),a.qZA(),a._uU(9," component and all Taiga UI component accepting icons as input. If you use unsafe icons or inline SVG with linear gradient you need to provide "),a.TgZ(10,"a",6),a._uU(11," TUI_SANITIZER "),a.qZA(),a._uU(12," token, which is responsible for removing malicious code from the svg. "),a.qZA(),a.TgZ(13,"icons-group",7),a.YNc(14,X,2,1,"ng-template",8),a.qZA()),2&t){const t=a.oxw().$implicit,e=a.oxw();a.xp6(13),a.Q6J("icons",e.icons[t])}}function et(t,e){if(1&t&&a.YNc(0,tt,15,1,"ng-template",3),2&t){const t=e.$implicit;a.Q6J("pageTab",t)}}function nt(t,e){1&t&&a._uU(0," SVG image code, link to a file, link to a segment or icon name. If you use name or segment, set icon size with CSS ")}function ot(t,e){1&t&&a._uU(0," CustomEvent of loading error ")}function it(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"div")(1,"tui-svg",12),a.NdJ("tui-icon-error",(function(e){a.CHM(t);const n=a.MAs(5);return a.KtG(n.emitEvent(e))})),a.qZA()(),a.TgZ(2,"tui-doc-documentation"),a.YNc(3,nt,1,0,"ng-template",13),a.NdJ("documentationPropertyValueChange",(function(e){a.CHM(t);const n=a.oxw();return a.KtG(n.icon=e)})),a.YNc(4,ot,1,0,"ng-template",14,15,a.W1O),a.qZA(),a.TgZ(6,"ol",16)(7,"li")(8,"p"),a._uU(9," Import "),a.TgZ(10,"code"),a._uU(11,"TuiSvgModule"),a.qZA(),a._uU(12," into a module where you want to use our component "),a.qZA(),a._UZ(13,"tui-doc-code",17),a.qZA(),a.TgZ(14,"li")(15,"p"),a._uU(16,"Add to the template:"),a.qZA(),a._UZ(17,"tui-doc-code",18),a.qZA()()}if(2&t){const t=a.oxw();a.xp6(1),a.Q6J("src",t.icon),a.xp6(2),a.Q6J("documentationPropertyValues",t.iconVariants)("documentationPropertyValue",t.icon),a.xp6(10),a.Q6J("code",t.exampleModule),a.xp6(4),a.Q6J("code",t.exampleHtml)}}let ct=(()=>{var t;class e{constructor(){this.mode=(0,a.f3M)(u.TuiModeDirective),this.icons=(0,a.f3M)(I),this.keys=Object.keys(this.icons),this.exampleModule=n.e(33309).then(n.t.bind(n,33309,17)),this.exampleHtml=n.e(8019).then(n.t.bind(n,8019,17)),this.iconVariants=["https://ng-web-apis.github.io/dist/assets/images/web-api.svg","tuiIconHelpCircle",'<svg xmlns="http://www.w3.org/2000/svg"\n             width="24px"\n             height="24px"\n             viewBox="0 0 24 24">\n            <path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n                c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n                s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n        </svg>',l.Ll`/images/ts.svg#ts`,l.Ll`/images/undefined.svg`],this.icon=this.iconVariants[0],this.mode$=this.mode.change$.pipe((0,p.O)(null),(0,g.U)((()=>this.mode.mode||"onLight")))}onIntersection(t){return t[t.length-1]?.isIntersecting??!1}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=a.Xpm({type:t,selectors:[["icons"]],decls:3,vars:1,consts:[["header","Icons"],[4,"ngFor","ngForOf"],["pageTab","Component"],[3,"pageTab"],["href","https://feathericons.com/","rel","noreferrer","target","_blank","tuiLink",""],["routerLink","/icons/overview","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["waIntersectionObserver","","waIntersectionThreshold","0.5",3,"icons"],["iconGroup",""],[1,"icon-place",3,"waIntersectionObservee"],["appearance","icon","size","m","title","Copy","tuiIconButton","","type","button","class","icon",3,"iconLeft","click",4,"ngIf"],["appearance","icon","size","m","title","Copy","tuiIconButton","","type","button",1,"icon",3,"iconLeft","click"],[3,"src","tui-icon-error"],["documentationPropertyMode","input","documentationPropertyName","src","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","tui-icon-error","documentationPropertyType","CustomEvent<TuiIconError>"],["documentationPropertyIconErrorChange","documentationProperty"],[1,"b-demo-steps","tui-space_top-12"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(a.TgZ(0,"tui-doc-page",0),a.YNc(1,et,1,1,null,1),a.YNc(2,it,18,5,"ng-template",2),a.qZA()),2&t&&(a.xp6(1),a.Q6J("ngForOf",e.keys))},dependencies:[o.sg,o.O5,T.L,x.V,v.P,M.m,P.c,b.z,w.B,Z.q,C.n,K,k,c.rH,r.Z7,r.AY],styles:[".icon-place[_ngcontent-%COMP%]{min-width:4.25rem;min-height:4.25rem;display:flex;align-items:center;justify-content:center;padding:.125rem}.icon[_ngcontent-%COMP%]{transition:all .5s ease-in;border:1px solid var(--tui-base-03);box-shadow:0 .05rem .5rem #3333;will-change:transform,box-shadow;border-radius:.625rem}.icon[_ngcontent-%COMP%]:hover{transform:scale(1.5);background:var(--tui-base-01);z-index:1}.icon[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]:hover{transition:.5s}.icon[_ngcontent-%COMP%]:not(.t-appearance)     [tuiWrapper][data-appearance=icon]{opacity:1!important}"],changeDetection:0}),e})();var rt=n(80506);let st=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[o.ez,rt.TuiInputModule,d.TuiKeysPipeModule,d.TuiFilterPipeModule,u.TuiHintModule,u.TuiTextfieldControllerModule,i.UX,d.TuiLetModule]}),e})(),ut=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[o.ez,i.u5,u.TuiNotificationModule,u.TuiLinkModule,u.TuiSvgModule,s.fV,st,c.Bz.forChild((0,s.Ve)(ct)),r.$v]}),e})()}}]);