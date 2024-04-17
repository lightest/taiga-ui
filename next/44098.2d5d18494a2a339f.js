(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44098],{44098:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiPieChartModule:()=>_});var i=n(76733),o=n(42932),a=n(86733),u=n(87253),r=n(11746),c=n(6254),m=n(52085),d=n(3489),p=n(20755),l=n(20332),s=n(36877),h=n(73097),x=n(38404),y=n(65004),P=n(43894),g=n(17894),v=n(97967),V=n(2313),f=n(62825),T=n(18462),C=n(16538);function I(e,t){if(1&e&&(p.TgZ(0,"tui-doc-example",2),p._UZ(1,"tui-pie-chart-example-1"),p.qZA(),p.TgZ(2,"tui-doc-example",3)(3,"tui-notification",4),p._uU(4," Use "),p.TgZ(5,"a",5)(6,"code"),p._uU(7,"Hint"),p.qZA()(),p._uU(8," directive to enable hints with "),p.TgZ(9,"code"),p._uU(10,"tuiHintContent"),p.qZA()(),p._UZ(11,"tui-pie-chart-example-2"),p.qZA()),2&e){const e=p.oxw();p.Q6J("content",e.example1),p.xp6(2),p.Q6J("content",e.example2)}}function Z(e,t){1&e&&p._uU(0," Active fragment ")}function b(e,t){1&e&&p._uU(0," Size ")}function z(e,t){1&e&&p._uU(0," Value ")}function N(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"tui-doc-demo")(1,"tui-pie-chart",6),p.NdJ("activeItemIndexChange",(function(t){p.CHM(e);const n=p.oxw();return p.KtG(n.activeItemIndex=t)})),p.qZA()(),p.TgZ(2,"tui-doc-documentation"),p.YNc(3,Z,1,0,"ng-template",7),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const n=p.oxw();return p.KtG(n.activeItemIndex=t)})),p.YNc(4,b,1,0,"ng-template",8),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const n=p.oxw();return p.KtG(n.size=t)})),p.YNc(5,z,1,0,"ng-template",9),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const n=p.oxw();return p.KtG(n.value=t)})),p.qZA()}if(2&e){const e=p.oxw();p.xp6(1),p.Q6J("size",e.size)("value",e.value)("activeItemIndex",e.activeItemIndex),p.xp6(2),p.Q6J("documentationPropertyValues",e.activeItemIndexVariants)("documentationPropertyValue",e.activeItemIndex),p.xp6(1),p.Q6J("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),p.xp6(1),p.Q6J("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value)}}function A(e,t){if(1&e&&(p.TgZ(0,"ol",10)(1,"li")(2,"p"),p._uU(3," Import "),p.TgZ(4,"code"),p._uU(5,"TuiPieChartModule"),p.qZA(),p._uU(6," into a module where you want to use our component "),p.qZA(),p._UZ(7,"tui-doc-code",11),p.qZA(),p.TgZ(8,"li")(9,"p"),p._uU(10,"Add to the template:"),p.qZA(),p._UZ(11,"tui-doc-code",12),p.qZA()()),2&e){const e=p.oxw();p.xp6(7),p.Q6J("code",e.exampleModule),p.xp6(4),p.Q6J("code",e.exampleHtml)}}let M=(()=>{var e;class t{constructor(){this.exampleModule=n.e(92959).then(n.t.bind(n,92959,17)),this.exampleHtml=n.e(41181).then(n.t.bind(n,41181,17)),this.example1={TypeScript:n.e(18594).then(n.t.bind(n,18594,17)),HTML:n.e(25394).then(n.t.bind(n,25394,17)),LESS:n.e(45484).then(n.t.bind(n,45484,17))},this.example2={TypeScript:n.e(85193).then(n.t.bind(n,85193,17)),HTML:n.e(82584).then(n.t.bind(n,82584,17)),LESS:n.e(87187).then(n.t.bind(n,87187,17))},this.valueVariants=[[0,30,20,10],[40,30,20,10],[13769,12367,10172,3018,2592]],this.value=this.valueVariants[0],this.activeItemIndexVariants=[NaN,0,1,2],this.activeItemIndex=this.activeItemIndexVariants[0],this.sizeVariants=["xs","s","m","l","xl"],this.size=this.sizeVariants[2],this.contentVariants=["",({$implicit:e})=>this.getPercent(e),({$implicit:e})=>this.format(e)],this.hintContent=this.contentVariants[0]}getPercent(e){return`${(0,d.tuiRound)(100*this.value[e]/(0,d.tuiSum)(...this.value),2)} %`}format(e){return`${(0,r.tuiFormatNumber)(this.value[e])} ${(0,m.tuiGetCurrencySymbol)(m.TuiCurrency.Ruble)}`}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["example-tui-pie-chart"]],decls:4,vars:0,consts:[["header","PieChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","sizes","heading","sizes",3,"content"],["id","labels","heading","With labels",3,"content"],[1,"tui-space_bottom-6"],["routerLink","/directives/hint","tuiLink",""],[1,"chart",3,"size","value","activeItemIndex","activeItemIndexChange"],["documentationPropertyMode","input-output","documentationPropertyName","activeItemIndex","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeS | TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","value","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,I,12,2,"ng-template",1),p.YNc(2,N,6,9,"ng-template",1),p.YNc(3,A,12,2,"ng-template",1),p.qZA())},dependencies:[o.rH,l.W,s.c,h.F,x.z,y.B,P.q,g.n,v.f,V.L,f.D,T.TuiPieChartExample1,C.TuiPieChartExample2],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),t})(),_=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[i.ez,o.Bz,a.TuiPieChartModule,c.wq,u.fV,r.TuiHintModule,r.TuiNotificationModule,o.Bz.forChild((0,u.Ve)(M))]}),t})()}}]);