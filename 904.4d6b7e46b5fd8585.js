(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[904],{904:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiAlertModule:()=>ct});var o=n(86568),i=n(35856),a=n(82312),c=n(63528),s=n(752),u=n(10488),l=n(33976),r=n(58200),p=n(6528),m=n(37763),d=n(31808),h=n(8673),y=n(55412),C=n(34684);let f=(()=>{var t;class e{constructor(t){this.context=t,this.value=this.context.data}increaseBalance(){this.value+=10}submit(){this.context.completeWith(this.value)}}return(t=e).ɵfac=function(e){return new(e||t)(p.GI1(r.C0))},t.ɵcmp=p.In1({type:t,selectors:[["tui-notifications-service-example-with-data"]],decls:9,vars:2,consts:[[1,"text"],[3,"value"],["tuiMode","onLight",1,"controls","tui-space_top-3"],["appearance","outline","size","m","tuiButton","","type","button",1,"tui-space_right-3",3,"click"],["tuiLink","","type","button",3,"pseudo","click"]],template:function(t,e){1&t&&(p.I0R(0,"span",0),p.OEk(1,"Your balance:"),p.C$Y(),p.OEk(2,"\n \n"),p.wR5(3,"tui-money",1),p.I0R(4,"div",2)(5,"button",3),p.qCj("click",(function(){return e.submit()})),p.OEk(6," Submit "),p.C$Y(),p.I0R(7,"button",4),p.qCj("click",(function(){return e.increaseBalance()})),p.OEk(8," Increase "),p.C$Y()()),2&t&&(p.yG2(3),p.E7m("value",e.value),p.yG2(4),p.E7m("pseudo",!0))},dependencies:[d.Y,h.K,y.C,C.s],styles:[".text[_ngcontent-%COMP%]{font-style:italic}.controls[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),e})();var b=n(56768),w=n(13692),O=n(96808),k=n(95356),E=n(56616),I=n(34496),g=n(37288),x=n(83480);let Y=(()=>{var t;class e{constructor(){this.alerts=(0,p.uUt)(u.TuiAlertService)}showNotification(){this.alerts.open("Basic <strong>HTML</strong>",{label:"With a heading!"}).subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=p.In1({type:t,selectors:[["tui-alerts-example-1"]],decls:2,vars:0,consts:[["size","m","tuiButton","","type","button",3,"click"]],template:function(t,e){1&t&&(p.I0R(0,"button",0),p.qCj("click",(function(){return e.showNotification()})),p.OEk(1," Show\n"),p.C$Y())},dependencies:[h.K],encapsulation:2,changeDetection:0}),e})();const R=["withdrawTemplate"],T=["depositTemplate"];function v(t,e){if(1&t){const t=p.KQA();p.I0R(0,"p"),p.OEk(1,"Notifications can be shown with template"),p.C$Y(),p.I0R(2,"p"),p.OEk(3," Your balance: "),p.wR5(4,"tui-money",0),p.C$Y(),p.I0R(5,"button",6),p.qCj("click",(function(){p.usT(t);const e=p.GaO();return p.CGJ(e.withdraw())})),p.OEk(6," Withdraw  "),p.wR5(7,"tui-money",0),p.C$Y()}if(2&t){const t=p.GaO();p.yG2(4),p.E7m("value",t.money),p.yG2(3),p.E7m("value",100)}}function G(t,e){if(1&t){const t=p.KQA();p.I0R(0,"p"),p.OEk(1," If there are many templates, you can use "),p.I0R(2,"code"),p.OEk(3,"ViewChildren"),p.C$Y(),p.OEk(4," instead of "),p.I0R(5,"code"),p.OEk(6,"ViewChild"),p.C$Y(),p.OEk(7,' or set them IDs with "#" (see code of this sample) '),p.C$Y(),p.I0R(8,"p"),p.OEk(9," Your balance: "),p.wR5(10,"tui-money",0),p.C$Y(),p.I0R(11,"button",6),p.qCj("click",(function(){p.usT(t);const e=p.GaO();return p.CGJ(e.deposit())})),p.OEk(12," Add  "),p.wR5(13,"tui-money",0),p.C$Y()}if(2&t){const t=p.GaO();p.yG2(10),p.E7m("value",t.money),p.yG2(3),p.E7m("value",100)}}let $=(()=>{var t;class e{constructor(){this.alerts=(0,p.uUt)(u.TuiAlertService),this.money=1e3}showWithdrawAlert(){this.alerts.open(this.withdrawTemplate||"",{label:"A template sample",status:"warning",autoClose:0}).subscribe()}showDepositAlert(){this.alerts.open(this.depositTemplate||"",{label:"A template sample",status:"success",autoClose:0}).subscribe()}withdraw(){this.money-=100}deposit(){this.money+=100}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=p.In1({type:t,selectors:[["tui-alerts-example-2"]],viewQuery:function(t,e){if(1&t&&(p.CC$(R,5),p.CC$(T,5)),2&t){let t;p.wto(t=p.Gqi())&&(e.withdrawTemplate=t.first),p.wto(t=p.Gqi())&&(e.depositTemplate=t.first)}},decls:15,vars:2,consts:[[3,"value"],["size","m","tuiButton","","type","button",1,"tui-space_right-3",3,"click"],["size","m","tuiButton","","type","button",3,"click"],["polymorpheus",""],["withdrawTemplate","polymorpheus"],["depositTemplate","polymorpheus"],["appearance","outline","size","m","tuiButton","","tuiMode","onLight","type","button",3,"click"]],template:function(t,e){1&t&&(p.I0R(0,"p"),p.OEk(1," Your balance: "),p.wR5(2,"tui-money",0),p.C$Y(),p.I0R(3,"button",1),p.qCj("click",(function(){return e.showWithdrawAlert()})),p.OEk(4," Withdraw\n"),p.C$Y(),p.I0R(5,"button",1),p.qCj("click",(function(){return e.showDepositAlert()})),p.OEk(6," Add\n"),p.C$Y(),p.I0R(7,"p")(8,"button",2),p.qCj("click",(function(){return e.withdraw()})),p.OEk(9," Withdraw  "),p.wR5(10,"tui-money",0),p.C$Y()(),p.yuY(11,v,8,2,"ng-template",3,4,p.gJz),p.yuY(13,G,14,2,"ng-template",3,5,p.gJz)),2&t&&(p.yG2(2),p.E7m("value",e.money),p.yG2(8),p.E7m("value",100))},dependencies:[r.sv,h.K,d.Y,C.s],encapsulation:2,changeDetection:0}),e})();var P=n(12436);let V=(()=>{var t;class e{constructor(t){this.context=t}ok(){this.context.completeWith(!0)}cancel(){this.context.completeWith(!1)}}return(t=e).ɵfac=function(e){return new(e||t)(p.GI1(r.C0))},t.ɵcmp=p.In1({type:t,selectors:[["tui-notifications-service-example"]],decls:7,vars:0,consts:[["tuiMode","onLight"],["appearance","outline","size","s","tuiButton","","type","button",3,"click"],["appearance","outline","size","s","tuiButton","","type","button",1,"tui-space_left-1",3,"click"]],template:function(t,e){1&t&&(p.I0R(0,"p"),p.OEk(1,"Yes?"),p.C$Y(),p.I0R(2,"div",0)(3,"button",1),p.qCj("click",(function(){return e.ok()})),p.OEk(4," Yes "),p.C$Y(),p.I0R(5,"button",2),p.qCj("click",(function(){return e.cancel()})),p.OEk(6," No "),p.C$Y()())},dependencies:[h.K,d.Y],encapsulation:2,changeDetection:0}),e})(),M=(()=>{var t;class e{constructor(){this.alerts=(0,p.uUt)(u.TuiAlertService),this.notification=this.alerts.open(new r.WO(V),{label:"Question",status:"error",autoClose:0}).pipe((0,m.G)((t=>this.alerts.open(`Got a value — ${t}`,{label:"Information"}))),(0,P.a)((0,p.uUt)(a.E5).events))}showNotification(){this.notification.subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=p.In1({type:t,selectors:[["tui-alerts-example-3"]],decls:4,vars:0,consts:[["size","m","tuiButton","","type","button",3,"click"]],template:function(t,e){1&t&&(p.I0R(0,"p"),p.OEk(1,"This notification will be removed after router change (see TypeScript tab)"),p.C$Y(),p.I0R(2,"button",0),p.qCj("click",(function(){return e.showNotification()})),p.OEk(3," Show\n"),p.C$Y())},dependencies:[h.K],encapsulation:2,changeDetection:0}),e})(),A=(()=>{var t;class e{constructor(){this.alerts=(0,p.uUt)(u.TuiAlertService),this.notification=this.alerts.open(new r.WO(f),{label:"Heading is so long that it should be shown in two lines of text",data:237,status:"warning",autoClose:0}).pipe((0,m.G)((t=>this.alerts.open(`Got a value — ${t}`,{label:"Information"}))),(0,P.a)((0,p.uUt)(a.E5).events))}showNotification(){this.notification.subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=p.In1({type:t,selectors:[["tui-alerts-example-4"]],decls:2,vars:0,consts:[["size","m","tuiButton","","type","button",3,"click"]],template:function(t,e){1&t&&(p.I0R(0,"button",0),p.qCj("click",(function(){return e.showNotification()})),p.OEk(1," Show\n"),p.C$Y())},dependencies:[h.K],encapsulation:2,changeDetection:0}),e})();function S(t,e){if(1&t&&(p.SAx(0),p.OEk(1),p.k70()),2&t){const t=e.polymorpheusOutlet;p.yG2(1),p.oRS(" ",t,"\n")}}let j=(()=>{var t;class e{constructor(t){this.context=t}}return(t=e).ɵfac=function(e){return new(e||t)(p.GI1(r.C0))},t.ɵcmp=p.In1({type:t,selectors:[["tui-notifications-service-example-with-custom-label"]],decls:5,vars:2,consts:[[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(t,e){1&t&&(p.I0R(0,"h4"),p.OEk(1,"Start content"),p.C$Y(),p.yuY(2,S,2,1,"ng-container",0),p.I0R(3,"h4"),p.OEk(4,"End content"),p.C$Y()),2&t&&(p.yG2(2),p.E7m("polymorpheusOutlet",e.context.label)("polymorpheusOutletContext",e.context))},dependencies:[r.Af],encapsulation:2,changeDetection:0}),e})();var N=n(79848);let q=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=p.In1({type:t,selectors:[["tui-notifications-service-example-custom-label"]],decls:4,vars:0,consts:[[1,"label"],[1,"text"],["src","tuiIconHeart"]],template:function(t,e){1&t&&(p.I0R(0,"label",0)(1,"span",1),p.OEk(2,"From custom label component with"),p.C$Y(),p.wR5(3,"tui-svg",2),p.C$Y())},dependencies:[N.W],styles:[".label[_ngcontent-%COMP%]{display:flex;align-items:center}.text[_ngcontent-%COMP%]{font-weight:400;font-style:italic}"],changeDetection:0}),e})(),L=(()=>{var t;class e{constructor(){this.router=(0,p.uUt)(a.E5),this.alerts=(0,p.uUt)(u.TuiAlertService),this.notification=this.alerts.open(new r.WO(j),{label:({status:t})=>"error"===t?"Error label from function":"Info label from function",status:"error",autoClose:0}).pipe((0,P.a)(this.router.events)),this.notificationWithCustomLabel=this.alerts.open(new r.WO(j),{label:new r.WO(q),status:"warning",autoClose:0}).pipe((0,P.a)(this.router.events))}showNotification(){this.notification.subscribe()}showNotificationWithCustomLabel(){this.notificationWithCustomLabel.subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=p.In1({type:t,selectors:[["tui-alerts-example-5"]],decls:5,vars:0,consts:[["size","m","tuiButton","","type","button",3,"click"]],template:function(t,e){1&t&&(p.I0R(0,"button",0),p.qCj("click",(function(){return e.showNotification()})),p.OEk(1," Using function\n"),p.C$Y(),p.I0R(2,"p")(3,"button",0),p.qCj("click",(function(){return e.showNotificationWithCustomLabel()})),p.OEk(4," Using component "),p.C$Y()())},dependencies:[h.K],encapsulation:2,changeDetection:0}),e})();var U=n(29184);function D(t,e){if(1&t){const t=p.KQA();p.OEk(0," This is a declarative directive alert "),p.I0R(1,"button",2),p.qCj("click",(function(){p.usT(t);const e=p.GaO();return p.CGJ(e.show=!1)})),p.OEk(2," Close "),p.C$Y()}}const z=function(){return{label:"Directive",autoClose:0,closeable:!1}};let W=(()=>{var t;class e{constructor(){this.show=!1}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=p.In1({type:t,selectors:[["tui-alerts-example-6"]],decls:3,vars:3,consts:[["size","m","tuiButton","",3,"click"],[3,"tuiAlertOptions","tuiAlert","tuiAlertChange"],["appearance","mono","size","s","tuiButton","",1,"tui-space_top-2",3,"click"]],template:function(t,e){1&t&&(p.I0R(0,"button",0),p.qCj("click",(function(){return e.show=!0})),p.OEk(1," Show\n"),p.C$Y(),p.yuY(2,D,3,0,"ng-template",1),p.qCj("tuiAlertChange",(function(t){return e.show=t}))),2&t&&(p.yG2(2),p.E7m("tuiAlertOptions",p.q4q(2,z))("tuiAlert",e.show))},dependencies:[U.c,h.K],encapsulation:2,changeDetection:0}),e})();function B(t,e){if(1&t&&(p.I0R(0,"p"),p.OEk(1,"Built-in implementation of notifications"),p.C$Y(),p.I0R(2,"p"),p.OEk(3," Position on screen can be configured by providing margins with "),p.I0R(4,"code"),p.OEk(5,"TUI_ALERT_POSITION"),p.C$Y(),p.OEk(6," token. Default value is "),p.I0R(7,"code"),p.OEk(8,"2rem 3rem 0 auto"),p.C$Y(),p.OEk(9," . "),p.C$Y(),p.I0R(10,"tui-doc-example",2),p.wR5(11,"tui-alerts-example-1"),p.C$Y(),p.I0R(12,"tui-doc-example",3),p.wR5(13,"tui-alerts-example-2"),p.C$Y(),p.I0R(14,"tui-doc-example",4),p.wR5(15,"tui-alerts-example-3"),p.C$Y(),p.I0R(16,"tui-doc-example",5),p.wR5(17,"tui-alerts-example-4"),p.C$Y(),p.I0R(18,"tui-doc-example",6),p.wR5(19,"tui-alerts-example-5"),p.C$Y(),p.I0R(20,"tui-doc-example",7),p.wR5(21,"tui-alerts-example-6"),p.C$Y()),2&t){const t=p.GaO();p.yG2(10),p.E7m("content",t.example1),p.yG2(2),p.E7m("content",t.example2),p.yG2(2),p.E7m("content",t.example3),p.yG2(2),p.E7m("content",t.example4),p.yG2(2),p.E7m("content",t.example5),p.yG2(2),p.E7m("content",t.example6)}}function _(t,e){1&t&&p.OEk(0," Content ")}function H(t,e){1&t&&p.OEk(0," Status ")}function J(t,e){1&t&&p.OEk(0," Heading ")}function K(t,e){1&t&&(p.OEk(0," Input data of notification, type: "),p.wR5(1,"code",16))}function Q(t,e){1&t&&p.OEk(0," Auto close timeout, 0 for no auto close ")}function X(t,e){1&t&&p.OEk(0," Has close button ")}function F(t,e){1&t&&p.OEk(0," Icon ")}function Z(t,e){if(1&t){const t=p.KQA();p.I0R(0,"tui-doc-demo")(1,"button",8),p.qCj("click",(function(){p.usT(t);const e=p.GaO();return p.CGJ(e.showNotification())})),p.OEk(2," Show "),p.C$Y()(),p.I0R(3,"tui-doc-documentation"),p.yuY(4,_,1,0,"ng-template",9),p.qCj("documentationPropertyValueChange",(function(e){p.usT(t);const n=p.GaO();return p.CGJ(n.content=e)})),p.yuY(5,H,1,0,"ng-template",10),p.qCj("documentationPropertyValueChange",(function(e){p.usT(t);const n=p.GaO();return p.CGJ(n.status=e)})),p.yuY(6,J,1,0,"ng-template",11),p.qCj("documentationPropertyValueChange",(function(e){p.usT(t);const n=p.GaO();return p.CGJ(n.label=e)})),p.yuY(7,K,2,0,"ng-template",12),p.qCj("documentationPropertyValueChange",(function(e){p.usT(t);const n=p.GaO();return p.CGJ(n.data=e)})),p.yuY(8,Q,1,0,"ng-template",13),p.qCj("documentationPropertyValueChange",(function(e){p.usT(t);const n=p.GaO();return p.CGJ(n.autoClose=e)})),p.yuY(9,X,1,0,"ng-template",14),p.qCj("documentationPropertyValueChange",(function(e){p.usT(t);const n=p.GaO();return p.CGJ(n.closeable=e)})),p.yuY(10,F,1,0,"ng-template",15),p.qCj("documentationPropertyValueChange",(function(e){p.usT(t);const n=p.GaO();return p.CGJ(n.icon=e)})),p.C$Y()}if(2&t){const t=p.GaO();p.yG2(4),p.E7m("documentationPropertyValues",t.contentVariants)("documentationPropertyValue",t.content),p.yG2(1),p.E7m("documentationPropertyValues",t.statusVariants)("documentationPropertyValue",t.status),p.yG2(1),p.E7m("documentationPropertyValue",t.label),p.yG2(1),p.E7m("documentationPropertyValue",t.data),p.yG2(1),p.E7m("documentationPropertyValues",t.autoCloseVariants)("documentationPropertyValue",t.autoClose),p.yG2(1),p.E7m("documentationPropertyValue",t.closeable),p.yG2(1),p.E7m("documentationPropertyValues",t.iconVariants)("documentationPropertyValue",t.icon)}}function tt(t,e){if(1&t&&(p.I0R(0,"ol",17)(1,"li")(2,"p"),p.OEk(3," Use service "),p.I0R(4,"code"),p.OEk(5,"open"),p.C$Y(),p.OEk(6," method and subscribe to "),p.I0R(7,"code"),p.OEk(8,"Observable"),p.C$Y()(),p.wR5(9,"tui-doc-code",18),p.C$Y(),p.I0R(10,"li"),p.OEk(11," To pass notification with custom content, you can use "),p.I0R(12,"a",19)(13,"code"),p.OEk(14,"your template"),p.C$Y()(),p.OEk(15," . "),p.C$Y(),p.I0R(16,"li")(17,"p"),p.OEk(18," You can also customize notification logic with a component. Inject "),p.I0R(19,"code"),p.OEk(20,"POLYMORPHEUS_CONTEXT"),p.C$Y(),p.OEk(21," into the component to get context input data and to output results. It has the following interface: "),p.wR5(22,"code",20),p.OEk(23," , where "),p.I0R(24,"code"),p.OEk(25,"O"),p.C$Y(),p.OEk(26," is output data type and "),p.I0R(27,"code"),p.OEk(28,"I"),p.C$Y(),p.OEk(29," is input data type. "),p.C$Y()(),p.I0R(30,"li")(31,"p"),p.OEk(32," Use "),p.I0R(33,"code"),p.OEk(34,"new PolymorpheusComponent(CustomNotificationComponent)"),p.C$Y(),p.OEk(35," to show notification component with a service: "),p.C$Y(),p.wR5(36,"tui-doc-code",18),p.C$Y(),p.I0R(37,"li")(38,"p"),p.OEk(39," Use "),p.I0R(40,"code"),p.OEk(41,"completeWith"),p.C$Y(),p.OEk(42," method to control notification from itself: "),p.C$Y(),p.wR5(43,"tui-doc-code",21),p.C$Y(),p.I0R(44,"li")(45,"p"),p.OEk(46," If you use it from lazy loading modules, and want to reach for some local providers, you can pass "),p.I0R(47,"code"),p.OEk(48,"Injector"),p.C$Y(),p.OEk(49," into "),p.I0R(50,"code"),p.OEk(51,"new PolymorpheusComponent"),p.C$Y(),p.OEk(52," of your alert component. "),p.C$Y(),p.wR5(53,"tui-doc-code",21),p.C$Y(),p.I0R(54,"li")(55,"p"),p.OEk(56," You can customize default alert options by providing "),p.I0R(57,"code"),p.OEk(58,"TUI_ALERT_OPTIONS"),p.C$Y(),p.OEk(59," injection token globally across your app. "),p.C$Y(),p.wR5(60,"tui-doc-code",22),p.C$Y()()),2&t){const t=p.GaO();p.yG2(9),p.E7m("code",t.exampleServiceUsage),p.yG2(27),p.E7m("code",t.exampleServiceUsageComponent),p.yG2(7),p.E7m("code",t.exampleCustomAlert),p.yG2(10),p.E7m("code",t.exampleLazyModule),p.yG2(7),p.E7m("code",t.exampleOptions)}}let et=(()=>{var t;class e{constructor(t,e){this.alerts=t,this.defaultIcon=(0,p.uUt)(u.TUI_NOTIFICATION_OPTIONS).icon,this.method=n.e(2672).then(n.t.bind(n,2672,17)),this.exampleServiceUsage=n.e(65776).then(n.t.bind(n,65776,17)),this.exampleServiceUsageComponent=n.e(88460).then(n.t.bind(n,88460,17)),this.exampleCustomAlert=n.e(1504).then(n.t.bind(n,1504,17)),this.exampleLazyModule=n.e(30454).then(n.t.bind(n,30454,17)),this.exampleOptions=n.e(77040).then(n.t.bind(n,77040,17)),this.example1={TypeScript:n.e(13916).then(n.t.bind(n,91535,17)),HTML:n.e(10744).then(n.t.bind(n,10744,17))},this.example2={TypeScript:n.e(88960).then(n.t.bind(n,88960,17)),HTML:n.e(69684).then(n.t.bind(n,69684,17))},this.example3={TypeScript:n.e(83964).then(n.t.bind(n,83964,17)),HTML:n.e(51428).then(n.t.bind(n,51428,17)),"alert-example/alert-example.component.ts":n.e(22736).then(n.t.bind(n,22736,17)),"alert-example/alert-example.template.html":n.e(24872).then(n.t.bind(n,24872,17)),"alert-example/alert-example.module.ts":n.e(87460).then(n.t.bind(n,87460,17))},this.example4={TypeScript:n.e(45336).then(n.t.bind(n,45336,17)),HTML:n.e(40944).then(n.t.bind(n,40944,17)),"alert-example-with-data/alert-example-with-data.component.ts":n.e(68524).then(n.t.bind(n,46143,17)),"alert-example-with-data/alert-example-with-data.template.html":n.e(73324).then(n.t.bind(n,73324,17)),"alert-example-with-data/alert-example-with-data.style.less":n.e(26716).then(n.t.bind(n,26716,17)),"alert-example-with-data/alert-example-with-data.module.ts":n.e(18424).then(n.t.bind(n,18424,17))},this.example5={TypeScript:n.e(37096).then(n.t.bind(n,37096,17)),HTML:n.e(23576).then(n.t.bind(n,1196,17)),"custom-label/custom-label.module.ts":n.e(14680).then(n.t.bind(n,92299,17)),"custom-label/custom-label.component.ts":n.e(844).then(n.t.bind(n,844,17)),"custom-label/custom-label.style.less":n.e(85896).then(n.t.bind(n,85896,17)),"custom-label/custom-label.template.html":n.e(41800).then(n.t.bind(n,41800,17)),"alert-example-with-custom-label/alert-example-with-custom-label.module.ts":n.e(70600).then(n.t.bind(n,70600,17)),"alert-example-with-custom-label/alert-example-with-custom-label.component.ts":n.e(87496).then(n.t.bind(n,87496,17)),"alert-example-with-custom-label/alert-example-with-custom-label.template.html":n.e(4948).then(n.t.bind(n,4948,17))},this.example6={TypeScript:n.e(17964).then(n.t.bind(n,17964,17)),HTML:n.e(49112).then(n.t.bind(n,49112,17))},this.data=100,this.label="Heading",this.statusVariants=["info","success","error","warning"],this.status=this.statusVariants[0],this.iconVariants=["Default","tuiIconHeart"],this.icon=this.iconVariants[0],this.contentVariants=["String","Component"],this.content=this.contentVariants[0],this.autoCloseVariants=[0,3e3,5e3,1e3,500],this.autoClose=this.autoCloseVariants[1],this.closeable=!0,this.component=new r.WO(f,e)}get selectedContent(){return"String"===this.content?this.content:this.component}showNotification(){this.alerts.open(this.selectedContent,{label:this.label,data:this.data,status:this.status,autoClose:this.autoClose,closeable:this.closeable,icon:this.icon===this.iconVariants[0]?this.defaultIcon:this.icon}).pipe((0,m.G)((t=>this.alerts.open(t,{label:"Notification responded with:"})))).subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)(p.GI1(u.TuiAlertService),p.GI1(p.zZn))},t.ɵcmp=p.In1({type:t,selectors:[["example-tui-alert"]],decls:4,vars:0,consts:[["header","Alert","package","CORE","path","core/components/alert/alert.service.ts"],["pageTab",""],["id","text","heading","Text",3,"content"],["id","template","heading","Template",3,"content"],["id","component","heading","Component",3,"content"],["id","data","heading","Component with data",3,"content"],["id","label","heading","Component with custom label",3,"content"],["id","directive","heading","Directive",3,"content"],["size","m","tuiButton","","type","button",3,"click"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","status","documentationPropertyType","TuiNotification",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","label","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autoClose","documentationPropertyType","TuiHandler | number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","closeable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","icon","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiText","<I>"],[1,"b-demo-steps"],["filename","my.component.ts",3,"code"],["fragment","example-template","routerLink","/components/alert","tuiLink",""],["tuiText","TuiPopover<TuiAlertOptions<I>, O>"],["filename","customNotification.component.ts",3,"code"],["filename","app.module.ts",3,"code"]],template:function(t,e){1&t&&(p.I0R(0,"tui-doc-page",0),p.yuY(1,B,22,6,"ng-template",1),p.yuY(2,Z,11,11,"ng-template",1),p.yuY(3,tt,61,5,"ng-template",1),p.C$Y())},dependencies:[b.w,h.K,y.C,w.u,O.m,k.I,E.S,I.E,g.u,x.I,a.ER,Y,$,M,A,L,W],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),e})(),nt=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=p.a4G({type:t}),t.ɵinj=p.s3X({imports:[o.MD,i.y,u.TuiButtonModule,u.TuiModeModule,l.TuiSelectModule,c.TuiMoneyModule]}),e})(),ot=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=p.a4G({type:t}),t.ɵinj=p.s3X({imports:[o.MD,i.y,u.TuiModeModule,u.TuiButtonModule,u.TuiLinkModule,c.TuiMoneyModule]}),e})(),it=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=p.a4G({type:t}),t.ɵinj=p.s3X({imports:[o.MD,r.Ux]}),e})(),at=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=p.a4G({type:t}),t.ɵinj=p.s3X({imports:[o.MD,u.TuiSvgModule]}),e})(),ct=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=p.a4G({type:t}),t.ɵinj=p.s3X({imports:[o.MD,i.y,r.Ux,s.Mj,u.TuiAlertModule,u.TuiButtonModule,u.TuiModeModule,c.TuiMoneyModule,it,ot,nt,at,l.TuiRadioListModule,l.TuiInputModule,u.TuiLinkModule,s.kx,a.qQ.forChild((0,s._A)(et))]}),e})()}}]);