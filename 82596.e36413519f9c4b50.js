(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[82596],{82596:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiTextfieldModule:()=>D});var i=n(86568),l=n(35856),o=n(752),a=n(10488),u=n(84788),c=n(33976),d=n(6528),r=n(62224),s=n(13692),p=n(34496),m=n(37288),g=n(83480),h=n(98632),f=n(76060),C=n(62100),x=n(77344),I=n(6804),R=n(69352);let w=(()=>{var e;class t{constructor(){this.value=""}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.In1({type:e,selectors:[["tui-textfield-example-1"]],decls:18,vars:5,consts:[["iconLeft","tuiIconSearchLarge","iconRight","tuiIconSettingsLarge"],["tuiLabel",""],["placeholder","I am placeholder","tuiTextfield","",3,"ngModel","ngModelChange"],["icon","tuiIconBellLarge"],["content","I am a hint"],["iconLeft","tuiIconSearchLarge","iconRight","tuiIconSettingsLarge","tuiTextfieldSize","m"],["m",""],["tuiTextfield","",3,"placeholder","ngModel","ngModelChange"],["iconLeft","tuiIconSearchLarge","iconRight","tuiIconSettingsLarge","tuiTextfieldSize","s"],["s",""]],template:function(e,t){if(1&e&&(d.I0R(0,"tui-textfield",0)(1,"label",1),d.OEk(2,"I am a label"),d.C$Y(),d.I0R(3,"input",2),d.qCj("ngModelChange",(function(e){return t.value=e})),d.C$Y(),d.wR5(4,"tui-icon",3)(5,"tui-tooltip",4),d.C$Y(),d.I0R(6,"label",1),d.OEk(7," For long labels it is better to use label outside as it can wrap to multiple lines "),d.I0R(8,"tui-textfield",5,6)(10,"input",7),d.qCj("ngModelChange",(function(e){return t.value=e})),d.C$Y(),d.wR5(11,"tui-icon",3)(12,"tui-tooltip",4),d.C$Y()(),d.I0R(13,"tui-textfield",8,9)(15,"input",7),d.qCj("ngModelChange",(function(e){return t.value=e})),d.C$Y(),d.wR5(16,"tui-icon",3)(17,"tui-tooltip",4),d.C$Y()),2&e){const e=d.Gew(9),n=d.Gew(14);d.yG2(3),d.E7m("ngModel",t.value),d.yG2(7),d.E7m("placeholder",e.focused?"I am placeholder":"I am a label")("ngModel",t.value),d.yG2(5),d.E7m("placeholder",n.focused?"I am placeholder":"I am a label")("ngModel",t.value)}},dependencies:[l.ot,l.ue,l._G,h.g,f.b,C.c,x.wl,I.i,R.i],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}"],changeDetection:0}),t})(),M=(()=>{var e;class t{constructor(){this.value="Test"}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.In1({type:e,selectors:[["tui-textfield-example-2"]],decls:15,vars:6,consts:[["iconLeft","tuiIconSearchLarge"],["tuiLabel",""],["tuiTextfield","",3,"disabled","ngModel","ngModelChange"],["content","Disabled does not show tooltip"],["placeholder","I am placeholder","tuiTextfield","",3,"readOnly","ngModel","ngModelChange"],["content","Readonly shows tooltip"],["placeholder","I am placeholder","tuiTextfield","",3,"invalid","ngModel","ngModelChange"],["content","Can also follow Angular validation"]],template:function(e,t){1&e&&(d.I0R(0,"tui-textfield",0)(1,"label",1),d.OEk(2,"Disabled"),d.C$Y(),d.I0R(3,"input",2),d.qCj("ngModelChange",(function(e){return t.value=e})),d.C$Y(),d.wR5(4,"tui-tooltip",3),d.C$Y(),d.I0R(5,"tui-textfield",0)(6,"label",1),d.OEk(7,"Read-only"),d.C$Y(),d.I0R(8,"input",4),d.qCj("ngModelChange",(function(e){return t.value=e})),d.C$Y(),d.wR5(9,"tui-tooltip",5),d.C$Y(),d.I0R(10,"tui-textfield",0)(11,"label",1),d.OEk(12,"Invalid"),d.C$Y(),d.I0R(13,"input",6),d.qCj("ngModelChange",(function(e){return t.value=e})),d.C$Y(),d.wR5(14,"tui-tooltip",7),d.C$Y()),2&e&&(d.yG2(3),d.E7m("disabled",!0)("ngModel",t.value),d.yG2(5),d.E7m("readOnly",!0)("ngModel",t.value),d.yG2(5),d.E7m("invalid",!0)("ngModel",t.value))},dependencies:[l.ot,l.ue,l._G,h.g,f.b,C.c,I.i],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}"],changeDetection:0}),t})();var y=n(17784),b=n(35137),E=n(94472),v=n(76004),Y=n(5204);function $(e,t){if(1&e&&(d.wR5(0,"tui-data-list-wrapper",8),d.wVc(1,"tuiFilterByInput")),2&e){const e=d.GaO();d.E7m("items",d.kDX(1,1,e.items))}}function G(e,t){if(1&e&&d.wR5(0,"tui-data-list-wrapper",8),2&e){const e=d.GaO();d.E7m("items",e.items)}}let T=(()=>{var e;class t{constructor(){this.value="",this.items=["John Cleese","Eric Idle","Michael Palin","Graham Chapman","Terry Gilliam","Terry Jones"]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.In1({type:e,selectors:[["tui-textfield-example-3"]],decls:14,vars:4,consts:[["iconRight","tuiIconSearch","tuiDropdownOpen","",3,"tuiDropdown"],["tuiLabel",""],["placeholder","I am placeholder","tuiTextfield","",3,"ngModel","ngModelChange"],["content","Editable combo-box"],["combobox",""],["iconRight","tuiIconChevronDown","tuiDropdownOpen","",3,"tuiDropdown"],["content","Fixed choice select"],["select",""],[3,"items"]],template:function(e,t){if(1&e&&(d.I0R(0,"tui-textfield",0)(1,"label",1),d.OEk(2,"Start typing"),d.C$Y(),d.I0R(3,"input",2),d.qCj("ngModelChange",(function(e){return t.value=e})),d.C$Y(),d.wR5(4,"tui-tooltip",3),d.yuY(5,$,2,3,"ng-template",null,4,d.gJz),d.C$Y(),d.I0R(7,"tui-textfield",5)(8,"label",1),d.OEk(9,"Select from options"),d.C$Y(),d.I0R(10,"select",2),d.qCj("ngModelChange",(function(e){return t.value=e})),d.C$Y(),d.wR5(11,"tui-tooltip",6),d.yuY(12,G,1,1,"ng-template",null,7,d.gJz),d.C$Y()),2&e){const e=d.Gew(6),n=d.Gew(13);d.E7m("tuiDropdown",e),d.yG2(3),d.E7m("ngModel",t.value),d.yG2(4),d.E7m("tuiDropdown",n),d.yG2(3),d.E7m("ngModel",t.value)}},dependencies:[l.ot,l.GC,l.ue,l._G,h.g,y.u,f.b,C.c,I.i,b.K,E.o,v.O,Y.E],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}"],changeDetection:0}),t})();function O(e,t){if(1&e&&(d.I0R(0,"tui-notification",3),d.OEk(1," This code is "),d.I0R(2,"strong"),d.OEk(3,"experimental"),d.C$Y(),d.OEk(4," and is a subject to change. Expect final solution to be shipped in the next major version "),d.C$Y(),d.I0R(5,"tui-doc-example",4),d.wR5(6,"tui-textfield-example-1"),d.C$Y(),d.I0R(7,"tui-doc-example",5),d.wR5(8,"tui-textfield-example-2"),d.C$Y(),d.I0R(9,"tui-doc-example",6),d.wR5(10,"tui-textfield-example-3"),d.C$Y()),2&e){const e=d.GaO();d.yG2(5),d.E7m("content",e.example1),d.yG2(2),d.E7m("content",e.example2),d.yG2(2),d.E7m("content",e.example3)}}function L(e,t){if(1&e&&(d.I0R(0,"ol",7)(1,"li")(2,"p"),d.OEk(3,"Import module:"),d.C$Y(),d.wR5(4,"tui-doc-code",8),d.C$Y(),d.I0R(5,"li")(6,"p"),d.OEk(7,"Add to the template:"),d.C$Y(),d.wR5(8,"tui-doc-code",9),d.C$Y()()),2&e){const e=d.GaO();d.yG2(4),d.E7m("code",e.exampleModule),d.yG2(4),d.E7m("code",e.exampleHtml)}}let k=(()=>{var e;class t{constructor(){this.exampleModule=n.e(54940).then(n.t.bind(n,54940,17)),this.exampleHtml=n.e(25556).then(n.t.bind(n,25556,17)),this.example1={HTML:n.e(37336).then(n.t.bind(n,37336,17))},this.example2={HTML:n.e(42432).then(n.t.bind(n,64812,17))},this.example3={HTML:n.e(44256).then(n.t.bind(n,44256,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.In1({type:e,selectors:[["example-textfield"]],decls:3,vars:0,consts:[["header","Textfield","package","EXPERIMENTAL","type","components"],["pageTab",""],["pageTab","Setup"],["status","warning"],["id","size","heading","Size",3,"content"],["id","states","heading","States",3,"content"],["id","dropdown","heading","Dropdown",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(d.I0R(0,"tui-doc-page",0),d.yuY(1,O,11,3,"ng-template",1),d.yuY(2,L,9,2,"ng-template",2),d.C$Y())},dependencies:[r.e,s.u,p.E,m.u,g.I,w,M,T],encapsulation:2,changeDetection:0}),t})();n(23340);let D=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=d.a4G({type:e}),e.ɵinj=d.s3X({imports:[i.MD,l.y,u.AT,u.aA,a.TuiNotificationModule,a.TuiHintModule,u.C,a.TuiDropdownModule,(0,o.If)(k),c.TuiDataListWrapperModule,c.TuiFilterByInputPipeModule]}),t})()}}]);