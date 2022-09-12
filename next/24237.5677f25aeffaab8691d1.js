"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[24237],{59849:(k,p,e)=>{e.r(p),e.d(p,{ExampleTuiColorPickerModule:()=>X});var s=e(12057),u=e(23738),E=e(12021),m=e(78697),C=e(96396),O=e(36692),d=e(90987),o=e(74788),g=e(88331),M=e(37159),P=e(57068),S=e(19769),R=e(10200);let f=(()=>{class t{constructor(){this.color="#ffdd2d",this.palette=C.defaultEditorColors}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["tui-color-picker-example-1"]],decls:6,vars:6,consts:[[1,"b-form",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","m",1,"b-form","tui-space_vertical-2",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","s",1,"b-form",3,"colors","ngModel","ngModelChange"]],template:function(n,i){1&n&&(o.TgZ(0,"tui-input-color",0),o.NdJ("ngModelChange",function(c){return i.color=c}),o._uU(1," Background color\n"),o.qZA(),o.TgZ(2,"tui-input-color",1),o.NdJ("ngModelChange",function(c){return i.color=c}),o._uU(3," Background color\n"),o.qZA(),o.TgZ(4,"tui-input-color",2),o.NdJ("ngModelChange",function(c){return i.color=c}),o._uU(5," Background color\n"),o.qZA()),2&n&&(o.Q6J("colors",i.palette)("ngModel",i.color),o.xp6(2),o.Q6J("colors",i.palette)("ngModel",i.color),o.xp6(2),o.Q6J("colors",i.palette)("ngModel",i.color))},directives:[S.j,u.JJ,u.On,R.s],encapsulation:2,changeDetection:0}),t})();var _=e(91211),N=e(62939),x=e(33250),L=e(76189),h=e(23999),v=e(17163);function D(t,l){if(1&t){const n=o.EpF();o.TgZ(0,"tui-color-selector",4),o.NdJ("colorChange",function(r){return o.CHM(n),o.oxw().color=r}),o.qZA()}if(2&t){const n=l.$implicit,i=o.oxw();o.Q6J("tuiActiveZoneParent",n)("color",i.color)}}let Z=(()=>{class t{constructor(n){this.sanitizer=n,this.color="#ffdd2d"}get background(){return this.sanitizer.bypassSecurityTrustStyle(this.color)}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(_.H7))},t.\u0275cmp=o.Xpm({type:t,selectors:[["tui-color-picker-example-2"]],decls:6,vars:6,consts:[["tuiDropdownAlign","left",3,"content","tuiDropdownMaxHeight"],["tuiButton","","type","button","appearance","","automation-id","color-picker__button"],[1,"invert"],["picker",""],[3,"tuiActiveZoneParent","color","colorChange"]],template:function(n,i){if(1&n&&(o.TgZ(0,"tui-hosted-dropdown",0),o.TgZ(1,"button",1),o.TgZ(2,"span",2),o._uU(3,"Color me Kubrick"),o.qZA(),o.qZA(),o.qZA(),o.YNc(4,D,1,2,"ng-template",null,3,o.W1O)),2&n){const r=o.MAs(5);o.Q6J("content",r)("tuiDropdownMaxHeight",999),o.xp6(1),o.Udp("background",i.background)("color",i.background)}},directives:[N.o,x.Ek,L.v,h.s,v.e],styles:[".invert[_ngcontent-%COMP%]{color:inherit;filter:invert(1)}"],changeDetection:0}),t})();var A=e(31823),I=e(49289),$=e(44051),y=e(17023),F=e(76349);function J(t,l){if(1&t&&(o.TgZ(0,"p"),o.SDv(1,2),o.qZA(),o.TgZ(2,"tui-doc-example",3),o._UZ(3,"tui-color-picker-example-1"),o.qZA(),o.TgZ(4,"tui-doc-example",4),o._UZ(5,"tui-color-picker-example-2"),o.qZA()),2&t){const n=o.oxw();o.xp6(2),o.Q6J("content",n.example1),o.xp6(2),o.Q6J("content",n.example2)}}function K(t,l){1&t&&o.SDv(0,6)}function U(t,l){1&t&&(o.TgZ(0,"tui-doc-demo"),o._UZ(1,"tui-color-picker"),o.qZA(),o.TgZ(2,"tui-doc-documentation"),o.YNc(3,K,1,0,"ng-template",5),o.qZA())}function G(t,l){if(1&t&&(o.TgZ(0,"ol",7),o.TgZ(1,"li"),o.TgZ(2,"p"),o.tHW(3,8),o._UZ(4,"code"),o.N_p(),o.qZA(),o._UZ(5,"tui-doc-code",9),o.qZA(),o.TgZ(6,"li"),o.TgZ(7,"p"),o.SDv(8,10),o.qZA(),o._UZ(9,"tui-doc-code",11),o.qZA(),o.qZA()),2&t){const n=o.oxw();o.xp6(5),o.Q6J("code",n.exampleModule),o.xp6(4),o.Q6J("code",n.exampleHtml)}}let z=(()=>{class t{constructor(){this.exampleModule=e.e(6678).then(e.t.bind(e,6678,17)),this.exampleHtml=e.e(86863).then(e.t.bind(e,86863,17)),this.example1={TypeScript:e.e(30173).then(e.t.bind(e,30173,17)),HTML:e.e(75423).then(e.t.bind(e,75423,17))},this.example2={TypeScript:e.e(67026).then(e.t.bind(e,67026,17)),HTML:e.e(71358).then(e.t.bind(e,71358,17)),LESS:e.e(38894).then(e.t.bind(e,38894,17))}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["example-tui-color-picker"]],decls:4,vars:0,consts:function(){let l,n,i,r,c,T;return l=$localize`:␟1be000e44871cc249cdcae83c6a510c1d9abb286␟5718365072316771675: ColorPicker allows to pick a color and its transparency. InputColor and ColorSelector are made with ColorPicker `,n=$localize`:␟076f197d00bec1e1eadd0578f26163a0094bb3c6␟1095933938236110379:InputColor`,i=$localize`:␟c58615eb54ebf60ebca6fd2305cf40aaae4abb01␟4818970173940003343:ColorSelector in dropdown`,r=$localize`:␟a4186ff325aca7ae0746ccba7533a67b83b1a7cf␟2059122116780340968: RGBA color tuple `,c=$localize`:␟709fb65f50c77159dca5239e1a3405f04b9b28f0␟5208450876663294588: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiColorPickerModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,T=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","ColorPicker","package","ADDON-editor","type","components"],["pageTab",""],l,["id","input","heading",n,3,"content"],["id","dropdown","heading",i,3,"content"],["documentationPropertyName","color","documentationPropertyMode","input-output","documentationPropertyType","[number, number, number, number]"],r,[1,"b-demo-steps"],c,["filename","myComponent.module.ts",3,"code"],T,["filename","myComponent.template.html",3,"code"]]},template:function(n,i){1&n&&(o.TgZ(0,"tui-doc-page",0),o.YNc(1,J,6,2,"ng-template",1),o.YNc(2,U,4,0,"ng-template",1),o.YNc(3,G,10,2,"ng-template"),o.qZA())},directives:[g.q,M.n,P.f,f,Z,A.F,I.$,$.z,y.B,F.c],encapsulation:2,changeDetection:0}),t})(),X=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.ez,d.TuiButtonModule,d.TuiHostedDropdownModule,C.TuiColorSelectorModule,O.TuiActiveZoneModule,d.TuiDropdownModule,C.TuiInputColorModule,d.TuiTextfieldControllerModule,m.fV,E.Bz.forChild((0,m.Ve)(z)),u.u5,C.TuiColorPickerModule]]}),t})()}}]);