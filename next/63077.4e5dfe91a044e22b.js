(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[63077],{63077:(e,t,o)=>{o.r(t),o.d(t,{FormModule:()=>re});var i=o(88692),n=o(69900),u=o(91795),r=o(21218),l=o(84369),a=o(69972),s=o(20995),c=o(40241),m=o(64537),d=o(83315),_=o(43560),p=o(93525),f=o(38868),g=o(438),Z=o(16996),h=o(48758),b=o(72817),T=o(62047),A=o(40813),x=o(91030),U=o(29462),w=o(92078),q=o(44056),C=o(81894),M=o(76189),v=o(36951),N=o(52721),k=o(21991),I=o(96895),V=o(45303),O=o(77027),y=o(41360),P=o(16753),L=o(13735),J=o(50170),Q=o(1414),F=o(39607),D=o(61423),S=o(68874),z=o(89437),E=o(84848),B=o(52219),H=o(50020),Y=o(88135),W=o(7114),R=o(99886);function G(e,t){if(1&e&&m._UZ(0,"tui-data-list-wrapper",59),2&e){const e=m.oxw();m.Q6J("items",e.persons)}}function j(e,t){if(1&e&&(m.TgZ(0,"div",60),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.xp6(1),m.AsE("",e.firstName," ",e.lastName,"")}}function X(e,t){if(1&e&&m._UZ(0,"tui-data-list-wrapper",61),2&e){const e=m.oxw(),t=m.MAs(125);m.Q6J("itemContent",t)("items",e.accounts)}}function $(e,t){if(1&e&&m._UZ(0,"tui-data-list-wrapper",61),2&e){const e=m.oxw(),t=m.MAs(125);m.Q6J("itemContent",t)("items",e.accounts)}}function K(e,t){if(1&e&&(m.TgZ(0,"span",62),m._uU(1),m._UZ(2,"tui-money",63),m.qZA()),2&e){const e=t.$implicit;m.xp6(1),m.hij(" ",e.name," "),m.xp6(1),m.Q6J("value",e.amount)}}const ee=function(){return[]};class te{constructor(e,t){this.firstName=e,this.lastName=t}toString(){return`${this.firstName} ${this.lastName}`}}class oe{constructor(e,t,o,i,n){this.id=e,this.name=t,this.amount=o,this.currency=i,this.cardSvg=n}}let ie=(()=>{var e;class t{constructor(){this.svgIcons={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",intersection:"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.persons=[new te("Roman","Sedov"),new te("Alex","Inkin")],this.accounts=[new oe("1","Common",24876.55,r.TuiCurrency.Ruble,this.svgIcons.common),new oe("2","Universal",335,r.TuiCurrency.Dollar,this.svgIcons.universal),new oe("3","Intersection",1e4,r.TuiCurrency.Euro,this.svgIcons.intersection),new oe("4","Mutation",100,r.TuiCurrency.Pound,this.svgIcons.mutation)],this.testForm=new n.cw({nameValue:new n.NI("",n.kI.required),textValue:new n.NI("",n.kI.required),passwordValue:new n.NI("",n.kI.required),phoneValue:new n.NI("",n.kI.required),moneyValue:new n.NI("100",n.kI.required),periodValue:new n.NI(new g.TuiDay(2017,2,15),n.kI.required),timeValue:new n.NI(new g.TuiTime(12,30),n.kI.required),personValue:new n.NI(this.persons[0]),quantityValue:new n.NI(5e4,n.kI.required),radioValue:new n.NI("with-commission"),accountWherefrom:new n.NI(null),accountWhere:new n.NI(null),checkboxValue:new n.NI(!1),osnoValue:new n.NI(!1),usnValue:new n.NI(!1),eshnValue:new n.NI(!1),envdValue:new n.NI(!1),usn2Value:new n.NI(!1),patentValue:new n.NI(!1)})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-form-example-1"]],decls:126,vars:60,consts:[[1,"tui-container"],[1,"stepper"],[3,"activeItemIndex"],["tuiStep",""],["tuiStep","",3,"disabled"],[3,"formGroup"],[1,"tui-row","tui-row_sme"],[1,"tui-col_8"],[1,"tui-form__header","tui-form__header_margin-top_none"],[1,"tui-form__row"],["formControlName","nameValue","tuiHintContent","A tooltip"],["placeholder","Field placeholder","tuiTextfield",""],[1,"tui-required"],["formControlName","nameValue",3,"error"],["formControlName","periodValue"],["placeholder","Placeholder","tuiTextfield",""],["formControlName","periodValue",3,"error"],[1,"tui-form__row","tui-form__row_multi-fields"],[1,"tui-form__multi-field"],["formControlName","passwordValue"],["formControlName","passwordValue",3,"error"],["formControlName","moneyValue",3,"tuiTextfieldPostfix"],["formControlName","moneyValue",3,"error"],["formControlName","quantityValue","tuiTextfieldPostfix","₽",3,"max","min","segments"],[1,"ticks-labels"],[1,"tui-form__field-note"],["formControlName","quantityValue",3,"error"],["formControlName","personValue",3,"valueContent"],[3,"items",4,"tuiDataList"],["personValueContent",""],["formControlName","personValue",3,"error"],["formControlName","phoneValue"],["formControlName","phoneValue",3,"error"],[1,"tui-form__header"],["tuiGroup","",1,"tui-form__row",3,"adaptive","collapsed"],["contentAlign","right","formControlName","radioValue","item","with-commission","size","l"],["contentAlign","right","formControlName","radioValue","item","without-commission","size","l"],[1,"tui-form__row","tui-form__row_half-width"],["formControlName","timeValue"],[1,"tui-form__row","tui-form__row_checkboxes"],["formControlName","osnoValue","size","l",1,"tui-form__checkbox"],["formControlName","usnValue","size","l",1,"tui-form__checkbox"],["formControlName","eshnValue","size","l",1,"tui-form__checkbox"],["formControlName","envdValue","size","l",1,"tui-form__checkbox"],["formControlName","usn2Value","size","l",1,"tui-form__checkbox"],["formControlName","patentValue","size","l",1,"tui-form__checkbox"],[1,"tui-form__header","tui-form__header_margin-bottom_small"],["tuiLabel","From"],["formControlName","accountWherefrom",1,"accounts-select",3,"tuiTextfieldLabelOutside","valueContent"],[3,"itemContent","items",4,"tuiDataList"],["tuiLabel","To"],["formControlName","accountWhere",1,"accounts-select",3,"tuiTextfieldLabelOutside","valueContent"],["formControlName","textValue","tuiHintContent","A tooltip"],[1,"tui-form__field-checkbox"],["formControlName","checkboxValue","size","l"],[1,"tui-form__buttons"],["size","l","tuiButton","","type","submit",1,"tui-form__button"],["appearance","flat","size","l","tuiButton","","type","button",1,"tui-form__button"],["accountContent",""],[3,"items"],[1,"uppercase-name"],[3,"itemContent","items"],[1,"account"],[3,"value"]],template:function(e,t){if(1&e&&(m.TgZ(0,"div",0)(1,"div",1)(2,"tui-stepper",2)(3,"button",3),m._uU(4,"First step"),m.qZA(),m.TgZ(5,"button",4),m._uU(6," Second step "),m.qZA(),m.TgZ(7,"button",4),m._uU(8," Third step "),m.qZA(),m.TgZ(9,"button",4),m._uU(10," Fourth step "),m.qZA()()(),m.TgZ(11,"form",5)(12,"div",6)(13,"div",7)(14,"h3",8),m._uU(15,"A header"),m.qZA(),m.TgZ(16,"div",9)(17,"tui-input",10),m._uU(18," Textfield "),m._UZ(19,"input",11)(20,"span",12),m.qZA(),m._UZ(21,"tui-error",13),m.ALo(22,"async"),m.ALo(23,"tuiFieldError"),m.qZA(),m.TgZ(24,"div",9)(25,"tui-input-date",14),m._uU(26," Input date "),m._UZ(27,"input",15)(28,"span",12),m.qZA(),m._UZ(29,"tui-error",16),m.ALo(30,"async"),m.ALo(31,"tuiFieldError"),m.qZA(),m.TgZ(32,"div",17)(33,"div",18)(34,"tui-input-password",19),m._uU(35,"Input password"),m.qZA(),m._UZ(36,"tui-error",20),m.ALo(37,"async"),m.ALo(38,"tuiFieldError"),m.qZA(),m.TgZ(39,"div",18)(40,"tui-input-number",21),m.ALo(41,"tuiCurrency"),m._uU(42," Input money "),m.qZA(),m._UZ(43,"tui-error",22),m.ALo(44,"async"),m.ALo(45,"tuiFieldError"),m.qZA()(),m.TgZ(46,"div",9)(47,"tui-input-slider",23),m._uU(48," Some slider "),m.qZA(),m.TgZ(49,"div",24)(50,"span"),m._uU(51,"from 50 000 ₽"),m.qZA(),m.TgZ(52,"span"),m._uU(53,"to 3 000 000 ₽"),m.qZA()(),m.TgZ(54,"div",25),m._uU(55,"Some additional text"),m.qZA(),m._UZ(56,"tui-error",26),m.ALo(57,"async"),m.ALo(58,"tuiFieldError"),m.qZA(),m.TgZ(59,"div",17)(60,"div",18)(61,"tui-select",27),m._uU(62," Choose a person "),m.YNc(63,G,1,1,"tui-data-list-wrapper",28),m.qZA(),m.YNc(64,j,2,2,"ng-template",null,29,m.W1O),m._UZ(66,"tui-error",30),m.ALo(67,"async"),m.ALo(68,"tuiFieldError"),m.qZA(),m.TgZ(69,"div",18)(70,"tui-input-phone",31),m._uU(71,"Input phone"),m.qZA(),m._UZ(72,"tui-error",32),m.ALo(73,"async"),m.ALo(74,"tuiFieldError"),m.qZA()(),m.TgZ(75,"h3",33),m._uU(76,"Header"),m.qZA(),m.TgZ(77,"div",34)(78,"tui-radio-block",35),m._uU(79," One option "),m.qZA(),m.TgZ(80,"tui-radio-block",36),m._uU(81," An alternative one "),m.qZA()(),m.TgZ(82,"div",37)(83,"tui-input-time",38),m._uU(84,"Input time"),m.qZA()(),m.TgZ(85,"div",39)(86,"tui-checkbox-labeled",40),m._uU(87," First option "),m.qZA(),m.TgZ(88,"tui-checkbox-labeled",41),m._uU(89," Other option "),m.qZA(),m.TgZ(90,"tui-checkbox-labeled",42),m._uU(91," Cool option "),m.qZA(),m.TgZ(92,"tui-checkbox-labeled",43),m._uU(93," Your personal option "),m.qZA(),m.TgZ(94,"tui-checkbox-labeled",44),m._uU(95," Doubtful option "),m.qZA(),m.TgZ(96,"tui-checkbox-labeled",45),m._uU(97," One more value "),m.qZA()(),m.TgZ(98,"h3",46),m._uU(99,"Header"),m.qZA(),m.TgZ(100,"div",9)(101,"label",47)(102,"tui-select",48),m._uU(103," Choose an account "),m.YNc(104,X,1,2,"tui-data-list-wrapper",49),m.qZA()()(),m.TgZ(105,"div",9)(106,"label",50)(107,"tui-select",51),m._uU(108," Choose an account "),m.YNc(109,$,1,2,"tui-data-list-wrapper",49),m.qZA()()(),m.TgZ(110,"h3",33),m._uU(111,"Header"),m.qZA(),m.TgZ(112,"div",9)(113,"tui-input",52),m._uU(114," Textfield "),m._UZ(115,"input",15),m.qZA(),m.TgZ(116,"div",53)(117,"tui-checkbox-labeled",54),m._uU(118," Try this "),m.qZA()()(),m.TgZ(119,"div",55)(120,"button",56),m._uU(121," Submit "),m.qZA(),m.TgZ(122,"button",57),m._uU(123," Cancel "),m.qZA()()()(),m.YNc(124,K,3,2,"ng-template",null,58,m.W1O),m.qZA()()),2&e){const e=m.MAs(65),o=m.MAs(125);m.xp6(2),m.Q6J("activeItemIndex",0),m.xp6(3),m.Q6J("disabled",!0),m.xp6(2),m.Q6J("disabled",!0),m.xp6(2),m.Q6J("disabled",!0),m.xp6(2),m.Q6J("formGroup",t.testForm),m.xp6(10),m.Q6J("error",m.lcZ(22,23,m.lcZ(23,25,m.DdM(53,ee)))),m.xp6(8),m.Q6J("error",m.lcZ(30,27,m.lcZ(31,29,m.DdM(54,ee)))),m.xp6(7),m.Q6J("error",m.lcZ(37,31,m.lcZ(38,33,m.DdM(55,ee)))),m.xp6(4),m.Q6J("tuiTextfieldPostfix",m.lcZ(41,35,"RUB")),m.xp6(3),m.Q6J("error",m.lcZ(44,37,m.lcZ(45,39,m.DdM(56,ee)))),m.xp6(4),m.Q6J("max",3e6)("min",5e4)("segments",1),m.xp6(9),m.Q6J("error",m.lcZ(57,41,m.lcZ(58,43,m.DdM(57,ee)))),m.xp6(5),m.Q6J("valueContent",e),m.xp6(5),m.Q6J("error",m.lcZ(67,45,m.lcZ(68,47,m.DdM(58,ee)))),m.xp6(6),m.Q6J("error",m.lcZ(73,49,m.lcZ(74,51,m.DdM(59,ee)))),m.xp6(5),m.Q6J("adaptive",!0)("collapsed",!0),m.xp6(25),m.Q6J("tuiTextfieldLabelOutside",!0)("valueContent",o),m.xp6(5),m.Q6J("tuiTextfieldLabelOutside",!0)("valueContent",o)}},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,Z.o,h.H,b.Q,T.j,A.k,x.M,U.G,w.x,q.h,C.p,M.v,v.v,N.V,k.F,I.y,V.X,O.K,y.w,P.q,L.g,J.u,Q.O,F.g,D._,S.x,z.T,E.bZ,B.g,H.e,Y.A,i.Ov,W.A,R.i],styles:["[_nghost-%COMP%]{display:block}.stepper[_ngcontent-%COMP%]{margin-bottom:2rem}.uppercase-name[_ngcontent-%COMP%]{text-transform:uppercase}.account[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:space-between}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .375rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.375rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.375rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .375rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:.75rem;margin-right:.75rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.75rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.75rem}"],changeDetection:0}),t})();function ne(e,t){if(1&e&&(m._UZ(0,"tui-styles-info"),m.TgZ(1,"div",2),m._uU(2," Use global "),m.TgZ(3,"strong"),m._uU(4,".tui-form"),m.qZA(),m._uU(5," class and its modifications: "),m.qZA(),m.TgZ(6,"ul",3)(7,"li",4)(8,"code"),m._uU(9,".tui-form__header"),m.qZA(),m._uU(10," : form header. Margins: 32px top and 20px bottom. "),m.TgZ(11,"ul",5)(12,"li",4)(13,"code"),m._uU(14,".tui-form__header_margin-top_none"),m.qZA(),m._uU(15," : nullifies "),m.TgZ(16,"code"),m._uU(17,"margin-top"),m.qZA()(),m.TgZ(18,"li",4)(19,"code"),m._uU(20,".tui-form__header_margin-bottom_none"),m.qZA(),m._uU(21," : nullifies "),m.TgZ(22,"code"),m._uU(23,"margin-bottom"),m.qZA()(),m.TgZ(24,"li",4)(25,"code"),m._uU(26,".tui-form__header_margin-bottom_small"),m.qZA(),m._uU(27," : reduced margin bottom (16px) "),m.TgZ(28,"code"),m._uU(29,"margin-bottom"),m.qZA()()()(),m.TgZ(30,"li",4)(31,"code"),m._uU(32,".tui-form__row"),m.qZA(),m._uU(33," : form row. Margin between rows is 20px. "),m.TgZ(34,"ul",5)(35,"li",4)(36,"code"),m._uU(37,".tui-form__row_multi-fields"),m.qZA(),m._uU(38," : row with several inputs with 20px margin between them "),m.qZA(),m.TgZ(39,"li",4)(40,"code"),m._uU(41,".tui-form__row_half-width"),m.qZA(),m._uU(42," : a half width row "),m.qZA(),m.TgZ(43,"li",4)(44,"code"),m._uU(45,".tui-form__row_checkboxes"),m.qZA(),m._uU(46," : a row with two columns for checkboxes "),m.qZA()()(),m.TgZ(47,"li",4)(48,"code"),m._uU(49,".tui-form__multi-field"),m.qZA(),m._uU(50," : field in a row "),m.TgZ(51,"code"),m._uU(52,"tui-form__row_multi-fields"),m.qZA(),m._uU(53," . fields with 20px margin between "),m.qZA(),m.TgZ(54,"li",4)(55,"code"),m._uU(56,".tui-form__checkbox"),m.qZA(),m._uU(57," : checkbox with a label for two column case "),m.qZA(),m.TgZ(58,"li",4)(59,"code"),m._uU(60,".tui-form__field-note"),m.qZA(),m._uU(61," : a secondary text under field "),m.qZA(),m.TgZ(62,"li",4)(63,"code"),m._uU(64,".tui-form__field-checkbox"),m.qZA(),m._uU(65," : checkbox under a field "),m.qZA(),m.TgZ(66,"li",4)(67,"code"),m._uU(68,".tui-form__buttons"),m.qZA(),m._uU(69," : a block with buttons and margin top 32px "),m.TgZ(70,"ul",5)(71,"li",4)(72,"code"),m._uU(73,".tui-form__buttons_align_end"),m.qZA(),m._uU(74," : align buttons right "),m.qZA(),m.TgZ(75,"li",4)(76,"code"),m._uU(77,".tui-form__buttons_align_center"),m.qZA(),m._uU(78," : align buttons center "),m.qZA()()(),m.TgZ(79,"li",4)(80,"code"),m._uU(81,".tui-form__button"),m.qZA(),m._uU(82," : a button of buttons block "),m.qZA()(),m.TgZ(83,"tui-doc-example",6),m._UZ(84,"tui-form-example-1"),m.qZA()),2&e){const e=m.oxw();m.xp6(83),m.Q6J("content",e.example1)}}let ue=(()=>{var e;class t{constructor(){this.example1={TypeScript:o.e(94598).then(o.t.bind(o,94598,17)),HTML:o.e(95871).then(o.t.bind(o,95871,17)),LESS:o.e(59168).then(o.t.bind(o,59168,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["example-form"]],decls:2,vars:0,consts:[["header","Form"],["pageTab",""],[1,"tui-space_bottom-3"],[1,"tui-list","tui-list_small"],[1,"tui-list__item"],[1,"tui-list","tui-list_linear","tui-list_nested","tui-list_extra-small"],["id","form","heading","Basic",3,"content"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-doc-page",0),m.YNc(1,ne,85,1,"ng-template",1),m.qZA())},dependencies:[d.q,_.q,p.n,f.f,ie],encapsulation:2,changeDetection:0}),t})(),re=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=m.oAB({type:e}),e.ɵinj=m.cJS({imports:[i.ez,n.u5,n.UX,c.e,r.TuiMoneyModule,s.TuiStepperModule,s.TuiInputDateModule,s.TuiInputTimeModule,s.TuiTextareaModule,s.TuiInputSliderModule,s.TuiInputRangeModule,s.TuiCheckboxLabeledModule,s.TuiRadioListModule,a.TuiButtonModule,a.TuiErrorModule,s.TuiFieldErrorPipeModule,s.TuiInputPasswordModule,s.TuiInputPhoneModule,s.TuiInputModule,s.TuiInputNumberModule,r.TuiCurrencyPipeModule,s.TuiInputTagModule,s.TuiSelectModule,a.TuiGroupModule,s.TuiRadioBlockModule,a.TuiTextfieldControllerModule,a.TuiHintModule,a.TuiDataListModule,s.TuiDataListWrapperModule,a.TuiLabelModule,l.fV,u.Bz.forChild((0,l.Ve)(ue))]}),t})()}}]);