(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35197],{35197:(e,t,o)=>{o.r(t),o.d(t,{FormModule:()=>re});var i=o(76733),n=o(72133),u=o(52085),r=o(87253),a=o(11746),l=o(42513),s=o(49714),c=o(20755),m=o(85052),d=o(43894),_=o(17894),p=o(97967),Z=o(3489),g=o(6718),f=o(70904),h=o(57296),b=o(18663),T=o(18026),A=o(4255),U=o(77647),x=o(25650),w=o(5824),q=o(11537),C=o(3632),v=o(48526),M=o(31809),N=o(30999),k=o(13117),I=o(93815),y=o(90096),V=o(52891),O=o(24391),P=o(69727),L=o(91853),J=o(23045),Q=o(91734),F=o(77441),D=o(90189),S=o(78915),E=o(92891),B=o(78805),H=o(45312),R=o(36379),W=o(61386),Y=o(72037),j=o(16601);function G(e,t){if(1&e&&c._UZ(0,"tui-data-list-wrapper",57),2&e){const e=c.oxw();c.Q6J("items",e.persons)}}function X(e,t){if(1&e&&(c.TgZ(0,"div",58),c._uU(1),c.qZA()),2&e){const e=t.$implicit;c.xp6(1),c.AsE("",e.firstName," ",e.lastName,"")}}function $(e,t){if(1&e&&c._UZ(0,"tui-data-list-wrapper",59),2&e){const e=c.oxw(),t=c.MAs(129);c.Q6J("itemContent",t)("items",e.accounts)}}function z(e,t){if(1&e&&c._UZ(0,"tui-data-list-wrapper",59),2&e){const e=c.oxw(),t=c.MAs(129);c.Q6J("itemContent",t)("items",e.accounts)}}function K(e,t){if(1&e&&(c.TgZ(0,"span",60),c._uU(1),c.TgZ(2,"span"),c._uU(3),c.ALo(4,"async"),c.ALo(5,"tuiAmount"),c.qZA()()),2&e){const e=t.$implicit;c.xp6(1),c.hij(" ",e.name," "),c.xp6(2),c.Oqu(c.lcZ(4,2,c.xi3(5,4,e.amount,"RUB")))}}const ee=function(){return[]};class te{constructor(e,t){this.firstName=e,this.lastName=t}toString(){return`${this.firstName} ${this.lastName}`}}class oe{constructor(e,t,o,i,n){this.id=e,this.name=t,this.amount=o,this.currency=i,this.cardSvg=n}}let ie=(()=>{var e;class t{constructor(){this.svgIcons={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",intersection:"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.persons=[new te("Roman","Sedov"),new te("Alex","Inkin")],this.accounts=[new oe("1","Common",24876.55,u.TuiCurrency.Ruble,this.svgIcons.common),new oe("2","Universal",335,u.TuiCurrency.Dollar,this.svgIcons.universal),new oe("3","Intersection",1e4,u.TuiCurrency.Euro,this.svgIcons.intersection),new oe("4","Mutation",100,u.TuiCurrency.Pound,this.svgIcons.mutation)],this.testForm=new n.cw({nameValue:new n.NI("",n.kI.required),textValue:new n.NI("",n.kI.required),passwordValue:new n.NI("",n.kI.required),phoneValue:new n.NI("",n.kI.required),moneyValue:new n.NI("100",n.kI.required),periodValue:new n.NI(new Z.TuiDay(2017,2,15),n.kI.required),timeValue:new n.NI(new Z.TuiTime(12,30),n.kI.required),personValue:new n.NI(this.persons[0]),quantityValue:new n.NI(5e4,n.kI.required),radioValue:new n.NI("with-commission"),accountWherefrom:new n.NI(null),accountWhere:new n.NI(null),checkboxValue:new n.NI(!1),osnoValue:new n.NI(!0),usnValue:new n.NI(!1),eshnValue:new n.NI(!1),envdValue:new n.NI(!1)})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-form-example-1"]],decls:130,vars:63,consts:[[1,"tui-container"],[1,"stepper"],[3,"activeItemIndex"],["tuiStep",""],["tuiStep","",3,"disabled"],[3,"formGroup"],[1,"tui-row","tui-row_sme"],[1,"tui-col_8"],[1,"tui-form__header","tui-form__header_margin-top_none"],[1,"tui-form__row"],["formControlName","nameValue","tuiHintContent","A tooltip"],["placeholder","Field placeholder","tuiTextfield",""],[1,"tui-required"],["formControlName","nameValue",3,"error"],["formControlName","periodValue"],["placeholder","Placeholder","tuiTextfield",""],["formControlName","periodValue",3,"error"],[1,"tui-form__row","tui-form__row_multi-fields"],[1,"tui-form__multi-field"],["formControlName","passwordValue"],["formControlName","passwordValue",3,"error"],["formControlName","moneyValue",3,"tuiTextfieldPostfix"],["formControlName","moneyValue",3,"error"],["formControlName","quantityValue","tuiTextfieldPostfix","₽",3,"max","min","segments"],[1,"ticks-labels"],[1,"tui-form__field-note"],["formControlName","quantityValue",3,"error"],["formControlName","personValue",3,"valueContent"],[3,"items",4,"tuiDataList"],["personValueContent",""],["formControlName","personValue",3,"error"],["formControlName","phoneValue"],["formControlName","phoneValue",3,"error"],[1,"tui-form__header"],["tuiGroup","",1,"tui-form__row",3,"collapsed"],["tuiBlock",""],["formControlName","radioValue","tuiRadio","","type","radio","value","with-commission"],["formControlName","radioValue","tuiRadio","","type","radio","value","without-commission"],[1,"tui-form__row","tui-form__row_half-width"],["formControlName","timeValue"],[1,"tui-form__row","tui-form__row_checkboxes"],["tuiLabel","",1,"tui-form__checkbox"],["formControlName","osnoValue","tuiCheckbox","","type","checkbox"],["formControlName","usnValue","tuiCheckbox","","type","checkbox"],["formControlName","eshnValue","tuiCheckbox","","type","checkbox"],["formControlName","envdValue","tuiCheckbox","","type","checkbox"],[1,"tui-form__header","tui-form__header_margin-bottom_small"],["formControlName","accountWherefrom",1,"accounts-select",3,"tuiTextfieldLabelOutside","valueContent"],[3,"itemContent","items",4,"tuiDataList"],["formControlName","accountWhere",1,"accounts-select",3,"tuiTextfieldLabelOutside","valueContent"],["formControlName","textValue","tuiHintContent","A tooltip"],["tuiLabel","",1,"tui-form__field-checkbox"],["formControlName","checkboxValue","tuiCheckbox","","type","checkbox"],[1,"tui-form__buttons"],["size","l","tuiButton","","type","submit",1,"tui-form__button"],["appearance","flat","size","l","tuiButton","","type","button",1,"tui-form__button"],["accountContent",""],[3,"items"],[1,"uppercase-name"],[3,"itemContent","items"],[1,"account"]],template:function(e,t){if(1&e&&(c.TgZ(0,"div",0)(1,"div",1)(2,"tui-stepper",2)(3,"button",3),c._uU(4,"First step"),c.qZA(),c.TgZ(5,"button",4),c._uU(6," Second step "),c.qZA(),c.TgZ(7,"button",4),c._uU(8," Third step "),c.qZA(),c.TgZ(9,"button",4),c._uU(10," Fourth step "),c.qZA()()(),c.TgZ(11,"form",5)(12,"div",6)(13,"div",7)(14,"h3",8),c._uU(15,"A header"),c.qZA(),c.TgZ(16,"div",9)(17,"tui-input",10),c._uU(18," Textfield "),c._UZ(19,"input",11)(20,"span",12),c.qZA(),c._UZ(21,"tui-error",13),c.ALo(22,"async"),c.ALo(23,"tuiFieldError"),c.qZA(),c.TgZ(24,"div",9)(25,"tui-input-date",14),c._uU(26," Input date "),c._UZ(27,"input",15)(28,"span",12),c.qZA(),c._UZ(29,"tui-error",16),c.ALo(30,"async"),c.ALo(31,"tuiFieldError"),c.qZA(),c.TgZ(32,"div",17)(33,"div",18)(34,"tui-input-password",19),c._uU(35,"Input password"),c.qZA(),c._UZ(36,"tui-error",20),c.ALo(37,"async"),c.ALo(38,"tuiFieldError"),c.qZA(),c.TgZ(39,"div",18)(40,"tui-input-number",21),c.ALo(41,"tuiCurrency"),c._uU(42," Input money "),c.qZA(),c._UZ(43,"tui-error",22),c.ALo(44,"async"),c.ALo(45,"tuiFieldError"),c.qZA()(),c.TgZ(46,"div",9)(47,"tui-input-slider",23),c._uU(48," Some slider "),c.qZA(),c.TgZ(49,"div",24)(50,"span"),c._uU(51,"from 50 000 ₽"),c.qZA(),c.TgZ(52,"span"),c._uU(53,"to 3 000 000 ₽"),c.qZA()(),c.TgZ(54,"div",25),c._uU(55,"Some additional text"),c.qZA(),c._UZ(56,"tui-error",26),c.ALo(57,"async"),c.ALo(58,"tuiFieldError"),c.qZA(),c.TgZ(59,"div",17)(60,"div",18)(61,"tui-select",27),c._uU(62," Choose a person "),c.YNc(63,G,1,1,"tui-data-list-wrapper",28),c.qZA(),c.YNc(64,X,2,2,"ng-template",null,29,c.W1O),c._UZ(66,"tui-error",30),c.ALo(67,"async"),c.ALo(68,"tuiFieldError"),c.qZA(),c.TgZ(69,"div",18)(70,"tui-input-phone",31),c._uU(71,"Input phone"),c.qZA(),c._UZ(72,"tui-error",32),c.ALo(73,"async"),c.ALo(74,"tuiFieldError"),c.qZA()(),c.TgZ(75,"h3",33),c._uU(76,"Header"),c.qZA(),c.TgZ(77,"div",34)(78,"label",35),c._uU(79," One option "),c._UZ(80,"input",36),c.qZA(),c.TgZ(81,"label",35),c._uU(82," An alternative one "),c._UZ(83,"input",37),c.qZA()(),c.TgZ(84,"div",38)(85,"tui-input-time",39),c._uU(86,"Input time"),c.qZA()(),c.TgZ(87,"div",40)(88,"label",41),c._UZ(89,"input",42),c._uU(90," First option "),c.qZA(),c.TgZ(91,"label",41),c._UZ(92,"input",43),c._uU(93," Cool option "),c.qZA(),c.TgZ(94,"label",41),c._UZ(95,"input",44),c._uU(96," Boring option "),c.qZA(),c.TgZ(97,"label",41),c._UZ(98,"input",45),c._uU(99," Interesting option "),c.qZA()(),c.TgZ(100,"h3",46),c._uU(101,"Header"),c.qZA(),c.TgZ(102,"div",9)(103,"label"),c._uU(104," From "),c.TgZ(105,"tui-select",47),c._uU(106," Choose an account "),c.YNc(107,$,1,2,"tui-data-list-wrapper",48),c.qZA()()(),c.TgZ(108,"div",9)(109,"label"),c._uU(110," To "),c.TgZ(111,"tui-select",49),c._uU(112," Choose an account "),c.YNc(113,z,1,2,"tui-data-list-wrapper",48),c.qZA()()(),c.TgZ(114,"h3",33),c._uU(115,"Header"),c.qZA(),c.TgZ(116,"div",9)(117,"tui-input",50),c._uU(118," Textfield "),c._UZ(119,"input",15),c.qZA(),c.TgZ(120,"label",51),c._UZ(121,"input",52),c._uU(122," Try this "),c.qZA()(),c.TgZ(123,"div",53)(124,"button",54),c._uU(125," Submit "),c.qZA(),c.TgZ(126,"button",55),c._uU(127," Cancel "),c.qZA()()()(),c.YNc(128,K,6,7,"ng-template",null,56,c.W1O),c.qZA()()),2&e){const e=c.MAs(65),o=c.MAs(129);c.xp6(2),c.Q6J("activeItemIndex",0),c.xp6(3),c.Q6J("disabled",!0),c.xp6(2),c.Q6J("disabled",!0),c.xp6(2),c.Q6J("disabled",!0),c.xp6(2),c.Q6J("formGroup",t.testForm),c.xp6(10),c.Q6J("error",c.lcZ(22,26,c.lcZ(23,28,c.DdM(56,ee)))),c.xp6(8),c.Q6J("error",c.lcZ(30,30,c.lcZ(31,32,c.DdM(57,ee)))),c.xp6(7),c.Q6J("error",c.lcZ(37,34,c.lcZ(38,36,c.DdM(58,ee)))),c.xp6(4),c.Q6J("tuiTextfieldPostfix",c.lcZ(41,38,"RUB")),c.xp6(3),c.Q6J("error",c.lcZ(44,40,c.lcZ(45,42,c.DdM(59,ee)))),c.xp6(4),c.Q6J("max",3e6)("min",5e4)("segments",1),c.xp6(9),c.Q6J("error",c.lcZ(57,44,c.lcZ(58,46,c.DdM(60,ee)))),c.xp6(5),c.Q6J("valueContent",e),c.xp6(5),c.Q6J("error",c.lcZ(67,48,c.lcZ(68,50,c.DdM(61,ee)))),c.xp6(6),c.Q6J("error",c.lcZ(73,52,c.lcZ(74,54,c.DdM(62,ee)))),c.xp6(5),c.Q6J("collapsed",!0),c.xp6(3),c.Udp("margin-left","auto"),c.xp6(3),c.Udp("margin-left","auto"),c.xp6(22),c.Q6J("tuiTextfieldLabelOutside",!0)("valueContent",o),c.xp6(6),c.Q6J("tuiTextfieldLabelOutside",!0)("valueContent",o)}},dependencies:[n._Y,n.Fj,n.Wl,n._,n.JJ,n.JL,n.sg,n.u,g.H,f.Q,h.j,b.k,T.M,A.G,U.x,x.h,w.m,q.v,C.V,v.F,M.y,N.X,k.K,I.w,y.q,V.g,O.u,P.O,L.g,J.v,Q.x,F.T,D.bZ,S.g,E.e,B._,H.f,R.X,i.Ov,W.E,Y.A,j.i],styles:["[_nghost-%COMP%]{display:block}.stepper[_ngcontent-%COMP%]{margin-bottom:2rem}.uppercase-name[_ngcontent-%COMP%]{text-transform:uppercase}.account[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:space-between}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .375rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.375rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.375rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .375rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:.75rem;margin-right:.75rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.75rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.75rem}"],changeDetection:0}),t})();function ne(e,t){if(1&e&&(c._UZ(0,"tui-styles-info"),c.TgZ(1,"div",2),c._uU(2," Use global "),c.TgZ(3,"strong"),c._uU(4,".tui-form"),c.qZA(),c._uU(5," class and its modifications: "),c.qZA(),c.TgZ(6,"ul",3)(7,"li",4)(8,"code"),c._uU(9,".tui-form__header"),c.qZA(),c._uU(10," : form header. Margins: 32px top and 20px bottom. "),c.TgZ(11,"ul",5)(12,"li",4)(13,"code"),c._uU(14,".tui-form__header_margin-top_none"),c.qZA(),c._uU(15," : nullifies "),c.TgZ(16,"code"),c._uU(17,"margin-top"),c.qZA()(),c.TgZ(18,"li",4)(19,"code"),c._uU(20,".tui-form__header_margin-bottom_none"),c.qZA(),c._uU(21," : nullifies "),c.TgZ(22,"code"),c._uU(23,"margin-bottom"),c.qZA()(),c.TgZ(24,"li",4)(25,"code"),c._uU(26,".tui-form__header_margin-bottom_small"),c.qZA(),c._uU(27," : reduced margin bottom (16px) "),c.TgZ(28,"code"),c._uU(29,"margin-bottom"),c.qZA()()()(),c.TgZ(30,"li",4)(31,"code"),c._uU(32,".tui-form__row"),c.qZA(),c._uU(33," : form row. Margin between rows is 20px. "),c.TgZ(34,"ul",5)(35,"li",4)(36,"code"),c._uU(37,".tui-form__row_multi-fields"),c.qZA(),c._uU(38," : row with several inputs with 20px margin between them "),c.qZA(),c.TgZ(39,"li",4)(40,"code"),c._uU(41,".tui-form__row_half-width"),c.qZA(),c._uU(42," : a half width row "),c.qZA(),c.TgZ(43,"li",4)(44,"code"),c._uU(45,".tui-form__row_checkboxes"),c.qZA(),c._uU(46," : a row with two columns for checkboxes "),c.qZA()()(),c.TgZ(47,"li",4)(48,"code"),c._uU(49,".tui-form__multi-field"),c.qZA(),c._uU(50," : field in a row "),c.TgZ(51,"code"),c._uU(52,"tui-form__row_multi-fields"),c.qZA(),c._uU(53," . fields with 20px margin between "),c.qZA(),c.TgZ(54,"li",4)(55,"code"),c._uU(56,".tui-form__checkbox"),c.qZA(),c._uU(57," : checkbox with a label for two column case "),c.qZA(),c.TgZ(58,"li",4)(59,"code"),c._uU(60,".tui-form__field-note"),c.qZA(),c._uU(61," : a secondary text under field "),c.qZA(),c.TgZ(62,"li",4)(63,"code"),c._uU(64,".tui-form__field-checkbox"),c.qZA(),c._uU(65," : checkbox under a field "),c.qZA(),c.TgZ(66,"li",4)(67,"code"),c._uU(68,".tui-form__buttons"),c.qZA(),c._uU(69," : a block with buttons and margin top 32px "),c.TgZ(70,"ul",5)(71,"li",4)(72,"code"),c._uU(73,".tui-form__buttons_align_end"),c.qZA(),c._uU(74," : align buttons right "),c.qZA(),c.TgZ(75,"li",4)(76,"code"),c._uU(77,".tui-form__buttons_align_center"),c.qZA(),c._uU(78," : align buttons center "),c.qZA()()(),c.TgZ(79,"li",4)(80,"code"),c._uU(81,".tui-form__button"),c.qZA(),c._uU(82," : a button of buttons block "),c.qZA()(),c.TgZ(83,"tui-doc-example",6),c._UZ(84,"tui-form-example-1"),c.qZA()),2&e){const e=c.oxw();c.xp6(83),c.Q6J("content",e.example1)}}let ue=(()=>{var e;class t{constructor(){this.example1={TypeScript:o.e(94598).then(o.t.bind(o,94598,17)),HTML:o.e(95871).then(o.t.bind(o,95871,17)),LESS:o.e(1674).then(o.t.bind(o,1674,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["example-form"]],decls:2,vars:0,consts:[["header","Form"],["pageTab",""],[1,"tui-space_bottom-3"],[1,"tui-list","tui-list_small"],[1,"tui-list__item"],[1,"tui-list","tui-list_linear","tui-list_nested","tui-list_extra-small"],["id","form","heading","Basic",3,"content"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,ne,85,1,"ng-template",1),c.qZA())},dependencies:[m.q,d.q,_.n,p.f,ie],encapsulation:2,changeDetection:0}),t})();o(5790);let re=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=c.oAB({type:e}),e.ɵinj=c.cJS({imports:[i.ez,n.u5,n.UX,s.e,l.TuiStepperModule,l.TuiInputDateModule,l.TuiInputTimeModule,l.TuiTextareaModule,l.TuiInputSliderModule,l.TuiInputRangeModule,l.TuiRadioListComponent,a.TuiErrorModule,l.TuiFieldErrorPipeModule,l.TuiInputPasswordModule,l.TuiInputPhoneModule,l.TuiInputModule,l.TuiInputNumberModule,u.TuiCurrencyPipeModule,l.TuiInputTagModule,l.TuiSelectModule,a.TuiTextfieldControllerModule,a.TuiHintModule,a.TuiDataListModule,l.TuiDataListWrapperModule,(0,r.bG)(ue)]}),t})()}}]);