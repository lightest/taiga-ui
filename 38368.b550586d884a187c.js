(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38368,61386,99503,50517,11820,61505,99781,50023,11944,61702,98323],{10882:(e,t,n)=>{n.d(t,{Fb:()=>l,UR:()=>i,bM:()=>a});var o=n(11830);const i={currency:null,currencyAlign:"right",sign:"negative-only"},a=(0,o.tuiCreateToken)(i);function l(e){return(0,o.tuiProvideOptions)(a,e,i)}},61386:(e,t,n)=>{n.d(t,{E:()=>s});var o=n(20755),i=n(93517),a=n(11830),l=n(17628),r=n(92425),u=n(10882);let s=(()=>{var e;class t{constructor(){this.options=(0,o.f3M)(u.bM),this.format=(0,o.f3M)(l.TUI_NUMBER_FORMAT)}transform(e,t=this.options.currency,n=this.options.currencyAlign){return this.format.pipe((0,r.U)((o=>{const r=(0,i.$v)(e,this.options.sign),u=(0,i.BP)(t),s=(0,l.tuiFormatNumber)(Math.abs(e),{...o,precision:Number.isNaN(o.precision)?2:o.precision}),c=u?.length>1||"right"===n?a.CHAR_NO_BREAK_SPACE:"";return"right"===n?`${r}${s}${c}${u}`:`${r}${u}${c}${s}`})))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵpipe=o.Yjl({name:"tuiAmount",type:e,pure:!0,standalone:!0}),t})()},33231:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiSheetDialogModule:()=>q});var o=n(76733),i=n(72133),a=n(42932),l=n(87253),r=n(38527),u=n(11830),s=n(17628),c=n(97733),p=n(20755),d=n(5824),m=n(15925),h=n(56234),g=n(2313),b=n(57119),f=n(36877),y=n(73097),T=n(38404),x=n(65004),_=n(43894),P=n(17894),S=n(97967),A=n(69005),U=n(30294),N=n(21865),M=n(84150);function Z(e,t){1&e&&(p.TgZ(0,"tui-notification",7),p._uU(1," This component only works on mobile devices. Enable emulation in DevTools and refresh the page. "),p.qZA())}function w(e,t){if(1&e&&(p._uU(0," A mobile draggable sheet dialog "),p.YNc(1,Z,2,0,"tui-notification",2),p.TgZ(2,"tui-doc-example",3),p._UZ(3,"tui-sheet-dialog-example-1"),p.qZA(),p.TgZ(4,"tui-doc-example",4),p._UZ(5,"tui-sheet-dialog-example-2"),p.qZA(),p.TgZ(6,"tui-doc-example",5),p._UZ(7,"tui-sheet-dialog-example-3"),p.qZA(),p.TgZ(8,"tui-doc-example",6),p._UZ(9,"tui-sheet-dialog-example-4"),p.qZA()),2&e){const e=p.oxw();p.xp6(1),p.Q6J("ngIf",!e.isMobile),p.xp6(1),p.Q6J("content",e.example1),p.xp6(2),p.Q6J("content",e.example2),p.xp6(2),p.Q6J("content",e.example3),p.xp6(2),p.Q6J("content",e.example4)}}function C(e,t){1&e&&(p.TgZ(0,"div",16)(1,"tui-avatar",17),p._uU(2,"KG"),p.qZA(),p.TgZ(3,"label",18),p._uU(4,"Karl Gambolputty"),p.qZA()())}function E(e,t){if(1&e){const e=p.EpF();p._uU(0," Karl Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-nürnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-shönendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm was the last-surviving relative of Johann Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-nürnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-shönendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm. "),p.TgZ(1,"div",7)(2,"button",8),p.NdJ("click",(function(){p.CHM(e);const t=p.oxw(2);return p.KtG(t.toggle())})),p._uU(3," Close "),p.qZA()()}}function k(e,t){1&e&&p._uU(0," Whether or not a sheet can be closed by user. ")}function v(e,t){1&e&&p._uU(0," Optional data to be passed to the sheet. ")}function V(e,t){1&e&&p._uU(0," Sheet label. ")}function D(e,t){1&e&&p._uU(0," An array of stop points in any units for the sheet. ")}function I(e,t){1&e&&(p._uU(0," Initial stop index to open on. Index exceeding "),p.TgZ(1,"code"),p._uU(2,"stops"),p.qZA(),p._uU(3," means to stop on top of the sheet's content. "))}const O=function(e,t,n,o){return{label:e,closeable:t,stops:n,initial:o}};function J(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"tui-doc-demo")(1,"button",8),p.NdJ("click",(function(){p.CHM(e);const t=p.oxw();return p.KtG(t.toggle())})),p._uU(2," Toggle "),p.qZA(),p.YNc(3,C,5,0,"ng-template",null,9,p.W1O),p.YNc(5,E,4,0,"ng-template",10),p.NdJ("tuiSheetDialogChange",(function(t){p.CHM(e);const n=p.oxw();return p.KtG(n.open=t)})),p.qZA(),p.TgZ(6,"tui-doc-documentation"),p.YNc(7,k,1,0,"ng-template",11),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const n=p.oxw();return p.KtG(n.closeable=t)})),p.YNc(8,v,1,0,"ng-template",12),p.YNc(9,V,1,0,"ng-template",13),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const n=p.oxw();return p.KtG(n.label=t)})),p.YNc(10,D,1,0,"ng-template",14),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const n=p.oxw();return p.KtG(n.stops=t)})),p.YNc(11,I,4,0,"ng-template",15),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const n=p.oxw();return p.KtG(n.initial=t)})),p.qZA()}if(2&e){const e=p.MAs(4),t=p.oxw();p.xp6(5),p.Q6J("tuiSheetDialogOptions",p.l5B(8,O,"Template"===t.label?e:t.label,t.closeable,t.stops,t.initial))("tuiSheetDialog",t.open),p.xp6(2),p.Q6J("documentationPropertyValue",t.closeable),p.xp6(2),p.Q6J("documentationPropertyValues",t.labelVariants)("documentationPropertyValue",t.label),p.xp6(1),p.Q6J("documentationPropertyValues",t.stopsVariants)("documentationPropertyValue",t.stops),p.xp6(1),p.Q6J("documentationPropertyValue",t.initial)}}function L(e,t){if(1&e&&(p.TgZ(0,"ol",19)(1,"li"),p._uU(2," Inject service and show dialog: "),p._UZ(3,"tui-doc-code",20),p.qZA()()),2&e){const e=p.oxw();p.xp6(3),p.Q6J("code",e.exampleComponent)}}let H=(()=>{var e;class t{constructor(){this.example1={TypeScript:n.e(54906).then(n.t.bind(n,54906,17)),HTML:n.e(16007).then(n.t.bind(n,16007,17))},this.example2={TypeScript:n.e(12428).then(n.t.bind(n,12428,17)),HTML:n.e(98427).then(n.t.bind(n,98427,17)),LESS:n.e(288).then(n.t.bind(n,288,17))},this.example3={TypeScript:n.e(88247).then(n.t.bind(n,88247,17)),HTML:n.e(45210).then(n.t.bind(n,45210,17)),LESS:n.e(14802).then(n.t.bind(n,14802,17))},this.example4={TypeScript:n.e(9897).then(n.t.bind(n,9897,17)),HTML:n.e(26027).then(n.t.bind(n,26027,17)),LESS:n.e(30841).then(n.t.bind(n,30841,17))},this.exampleComponent=n.e(75093).then(n.t.bind(n,75093,17)),this.closeable=r.TUI_SHEET_DIALOG_DEFAULT_OPTIONS.closeable,this.initial=r.TUI_SHEET_DIALOG_DEFAULT_OPTIONS.initial,this.stops=r.TUI_SHEET_DIALOG_DEFAULT_OPTIONS.stops,this.label=r.TUI_SHEET_DIALOG_DEFAULT_OPTIONS.label,this.open=!1,this.stopsVariants=[this.stops,["100px"],["10rem","20rem"]],this.labelVariants=[this.label,"String label","Template"],this.isMobile=(0,p.f3M)(u.TUI_IS_MOBILE)}toggle(){this.open=!this.open}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["example-sheet-dialog"]],decls:4,vars:0,consts:[["header","SheetDialog","package","ADDON-MOBILE","type","components"],["pageTab",""],["class","tui-space_top-4",4,"ngIf"],["id","string","heading","String",3,"content"],["id","basic","heading","Basic",3,"content"],["id","advanced","heading","Advanced",3,"content"],["id","sticky","heading","Sticky elements",3,"content"],[1,"tui-space_top-4"],["tuiButton","","type","button",3,"click"],["template",""],[3,"tuiSheetDialogOptions","tuiSheetDialog","tuiSheetDialogChange"],["documentationPropertyName","closeable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","I"],["documentationPropertyName","label","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","stops","documentationPropertyType","string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","initial","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"label"],["size","m"],["tuiLabel","Terry Jones"],[1,"b-demo-steps"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,w,10,5,"ng-template",1),p.YNc(2,J,12,13,"ng-template",1),p.YNc(3,L,4,1,"ng-template",1),p.qZA())},dependencies:[o.O5,d.m,m.A,h.J,g.L,b.x,f.c,y.F,T.z,x.B,_.q,P.n,S.f,A.TuiSheetDialogExample1,U.TuiSheetDialogExample2,N.TuiSheetDialogExample3,M.TuiSheetDialogExample4],styles:[".label[_ngcontent-%COMP%]{display:flex;gap:.75rem}"],changeDetection:0}),t})(),q=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[o.ez,i.UX,c.TuiInputModule,s.TuiTextfieldControllerModule,s.TuiLabelModule,s.TuiNotificationModule,r.TuiSheetDialogModule,l.fV,a.Bz.forChild((0,l.Ve)(H)),u.TuiSwipeModule]}),t})()}}]);