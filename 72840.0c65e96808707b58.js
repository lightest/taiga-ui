(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72840],{7548:(t,e,n)=>{n.d(e,{m:()=>r});var i=n(10488),o=n(86112),s=n(74240);const a="Bell";class r extends s.Y{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["","Some content"],this.hintDirectionVariants=i.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.inputModeVariants=["text","numeric"],this.customContentVariants=["",a,"tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=this.customContentVariants[0],this.inputMode=this.inputModeVariants[0],this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.filler="",this.minHeight=null,this.maxHeight=null,this.iconLeftVariants=["","tuiIconMailLarge","tuiIconPieChartLarge"],this.iconLeft=this.iconLeftVariants[0],this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0],this.dropdownOpen=new o.g(!1),this.dropdownAlignVariants=["left","right","center"],this.dropdownAlign=i.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["bottom","top"],this.dropdownDirection=i.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownMinHeight=i.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=i.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight,this.prefixVariants=["","$","GBP","Very long text"],this.prefix=this.prefixVariants[0],this.postfix=this.prefixVariants[0],this.dropdownOffset=i.TUI_DROPDOWN_DEFAULT_OPTIONS.offset}get customContent(){return this.customContentSelected===a?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(t){t?this.control.disable():this.control.enable()}}},74240:(t,e,n)=>{n.d(e,{Y:()=>i});class i{constructor(){this.pseudoVariants=[!1,!0],this.textAlignVariants=["left","right"],this.textAlign=this.textAlignVariants[0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}},72840:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiInputInlineModule:()=>A});var i=n(86568),o=n(35856),s=n(82312),a=n(752),r=n(45328),u=n(10488),l=n(33976),c=n(7548),d=n(6528),p=n(18884),h=n(13692),m=n(96808),g=n(95356),f=n(56616),y=n(34496),C=n(37288),I=n(83480),x=n(8673);let O=(()=>{var t;class e{constructor(){this.testForm=new o.WC({testValue1:new o.Ku("Hello 1"),testValue2:new o.Ku("Hello 2"),testValue3:new o.Ku("Hello 3"),testValue4:new o.Ku("")})}get toggleContent(){return this.testForm.disabled?"enable (allow editing)":"disable"}get input4Empty(){return""===this.testForm.get("testValue4").value}onToggleClick(){this.testForm.disabled?this.testForm.enable():this.testForm.disable()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=d.In1({type:t,selectors:[["tui-input-inline-example-1"]],decls:8,vars:4,consts:[[3,"formGroup"],["formControlName","testValue1",1,"input1"],["formControlName","testValue2",1,"input2"],["formControlName","testValue3",1,"input3"],["formControlName","testValue4",1,"input4"],["size","m","tuiButton","","type","button",3,"click"]],template:function(t,e){1&t&&(d.I0R(0,"form",0),d.wR5(1,"tui-input-inline",1)(2,"tui-input-inline",2)(3,"tui-input-inline",3),d.I0R(4,"tui-input-inline",4),d.OEk(5," (Show placeholder if control is empty) "),d.C$Y()(),d.I0R(6,"button",5),d.qCj("click",(function(){return e.onToggleClick()})),d.OEk(7),d.C$Y()),2&t&&(d.E7m("formGroup",e.testForm),d.yG2(4),d.eAK("input4_empty",e.input4Empty),d.yG2(3),d.oRS(" ",e.toggleContent,"\n"))},dependencies:[o.sz,o.ue,o.u,o.uW,o.Wo,x.K,p.E],styles:[".input1[_ngcontent-%COMP%], .input2[_ngcontent-%COMP%], .input3[_ngcontent-%COMP%]{margin-right:.625rem}.input1[_ngcontent-%COMP%]{border:2px solid var(--tui-error-fill)}.input2[_ngcontent-%COMP%]{background:var(--tui-base-09);padding:.625rem;color:var(--tui-base-01);letter-spacing:.625rem;font-size:1.25rem}.input3[_ngcontent-%COMP%]{font-family:monospace;font-weight:700;background:var(--tui-base-04)}.input4_empty[_ngcontent-%COMP%]{opacity:.3}"],changeDetection:0}),e})();var b=n(19036);function V(t,e){if(1&t){const t=d.KQA();d.I0R(0,"tui-input-inline",3),d.qCj("ngModelChange",(function(e){d.usT(t);const n=d.GaO();return d.CGJ(n.heading=e)}))("focusedChange",(function(e){d.usT(t);const n=d.GaO();return d.CGJ(n.onFocusedChange(e))}))("keydown.enter.prevent",(function(){d.usT(t);const e=d.GaO();return d.CGJ(e.toggle())}))("keydown.esc.prevent",(function(){d.usT(t);const e=d.GaO();return d.CGJ(e.toggle())})),d.OEk(1," Type a heading "),d.C$Y()}if(2&t){const t=d.GaO();d.E7m("ngModel",t.heading)}}function E(t,e){if(1&t){const t=d.KQA();d.I0R(0,"span"),d.OEk(1),d.C$Y(),d.I0R(2,"button",4),d.qCj("click",(function(){d.usT(t);const e=d.GaO();return d.CGJ(e.toggle())})),d.C$Y()}if(2&t){const t=d.GaO();d.yG2(1),d.cNF(t.heading)}}let w=(()=>{var t;class e{constructor(t){this.alerts=t,this.heading="Page heading",this.editing=!1}toggle(){this.editing=!this.editing}onFocusedChange(t){t||(this.editing=!1,this.saveHeading(this.heading))}saveHeading(t){this.alerts.open(t,{label:"New heading"}).subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)(d.GI1(u.TuiAlertService))},t.ɵcmp=d.In1({type:t,selectors:[["tui-input-inline-example-2"]],decls:8,vars:4,consts:[[1,"header"],["tuiAutoFocus","",3,"ngModel","ngModelChange","focusedChange","keydown.enter.prevent","keydown.esc.prevent",4,"ngIf","ngIfElse"],["text",""],["tuiAutoFocus","",3,"ngModel","ngModelChange","focusedChange","keydown.enter.prevent","keydown.esc.prevent"],["appearance","icon","icon","tuiIconEdit2Large","size","xs","title","Edit heading","tuiIconButton","","type","button",1,"tui-space_left-1",3,"click"]],template:function(t,e){if(1&t&&(d.I0R(0,"h2",0),d.yuY(1,V,2,1,"tui-input-inline",1),d.yuY(2,E,3,1,"ng-template",null,2,d.gJz),d.C$Y(),d.I0R(4,"p"),d.OEk(5," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus tempore voluptates!\n"),d.C$Y(),d.I0R(6,"p"),d.OEk(7," Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n"),d.C$Y()),2&t){const t=d.Gew(3);d.eAK("header_empty",!e.heading),d.yG2(1),d.E7m("ngIf",e.editing)("ngIfElse",t)}},dependencies:[i.u_,o.ue,o._G,x.K,p.E,b.g],styles:[".header[_ngcontent-%COMP%]{height:1.5rem;display:flex;align-items:center;white-space:nowrap;line-height:1.5rem}.header_empty[_ngcontent-%COMP%]{opacity:.3}"],changeDetection:0}),e})();var P=n(76468),T=n(12436);let G=(()=>{var t;class e{constructor(t,e,n,i){this.cd=t,this.destroy$=e,this.zone=n,this.isE2E=i,this.count="0"}ngOnInit(){this.isE2E||(0,P.k)(0,3e3).pipe((0,r.tuiZoneOptimized)(this.zone),(0,r.tuiWatch)(this.cd),(0,T.a)(this.destroy$)).subscribe((t=>{this.count=String(t)}))}}return(t=e).ɵfac=function(e){return new(e||t)(d.GI1(d.kD9),d.GI1(r.TuiDestroyService,2),d.GI1(d.WW2),d.GI1(r.TUI_IS_E2E))},t.ɵcmp=d.In1({type:t,selectors:[["tui-input-inline-example-3"]],features:[d.M5G([r.TuiDestroyService])],decls:1,vars:1,consts:[[1,"input1",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(d.I0R(0,"tui-input-inline",0),d.qCj("ngModelChange",(function(t){return e.count=t})),d.C$Y()),2&t&&d.E7m("ngModel",e.count)},dependencies:[o.ue,o._G,p.E],styles:[".input1[_ngcontent-%COMP%]{border:2px solid var(--tui-error-fill);padding:.625rem;font-size:1.25rem;text-align:center}"],changeDetection:0}),e})();function M(t,e){if(1&t&&(d.I0R(0,"p"),d.OEk(1,"Inline field"),d.C$Y(),d.I0R(2,"tui-doc-example",2),d.wR5(3,"tui-input-inline-example-1"),d.C$Y(),d.I0R(4,"tui-doc-example",3),d.wR5(5,"tui-input-inline-example-2"),d.C$Y(),d.I0R(6,"tui-doc-example",4),d.wR5(7,"tui-input-inline-example-3"),d.C$Y()),2&t){const t=d.GaO();d.yG2(2),d.E7m("content",t.example1),d.yG2(2),d.E7m("content",t.example2),d.yG2(2),d.E7m("content",t.example3)}}function v(t,e){if(1&t&&(d.I0R(0,"tui-input-inline",10),d.OEk(1," Placeholder "),d.C$Y()),2&t){const t=d.GaO(2);d.m4B("float",t.textAlign),d.E7m("formControl",t.control)("maxLength",t.maxLength)}}function k(t,e){1&t&&(d.OEk(0," Disabled state (use "),d.I0R(1,"code"),d.OEk(2,"formControl.disable()"),d.C$Y(),d.OEk(3," ) "))}function _(t,e){1&t&&d.OEk(0," Maximum number of symbols ")}function L(t,e){1&t&&d.OEk(0," Custom align content by float ")}function R(t,e){if(1&t){const t=d.KQA();d.I0R(0,"tui-doc-demo",5),d.yuY(1,v,2,4,"ng-template"),d.C$Y(),d.I0R(2,"tui-doc-documentation"),d.yuY(3,k,4,0,"ng-template",6),d.qCj("documentationPropertyValueChange",(function(e){d.usT(t);const n=d.GaO();return d.CGJ(n.disabled=e)})),d.yuY(4,_,1,0,"ng-template",7),d.qCj("documentationPropertyValueChange",(function(e){d.usT(t);const n=d.GaO();return d.CGJ(n.maxLength=e)})),d.C$Y(),d.I0R(5,"tui-doc-documentation",8),d.yuY(6,L,1,0,"ng-template",9),d.qCj("documentationPropertyValueChange",(function(e){d.usT(t);const n=d.GaO();return d.CGJ(n.textAlign=e)})),d.C$Y()}if(2&t){const t=d.GaO();d.E7m("control",t.control),d.yG2(3),d.E7m("documentationPropertyValue",t.disabled),d.yG2(1),d.E7m("documentationPropertyValues",t.maxLengthVariants)("documentationPropertyValue",t.maxLength),d.yG2(2),d.E7m("documentationPropertyValues",t.textAlignVariants)("documentationPropertyValue",t.textAlign)}}function Y(t,e){if(1&t&&(d.I0R(0,"ol",11)(1,"li")(2,"p"),d.OEk(3," Import "),d.I0R(4,"code"),d.OEk(5,"TuiInputInlineModule"),d.C$Y(),d.OEk(6," into a module where you want to use our component "),d.C$Y(),d.wR5(7,"tui-doc-code",12),d.C$Y(),d.I0R(8,"li")(9,"p"),d.OEk(10,"Add to the template:"),d.C$Y(),d.wR5(11,"tui-doc-code",13),d.C$Y()()),2&t){const t=d.GaO();d.yG2(7),d.E7m("code",t.exampleModule),d.yG2(4),d.E7m("code",t.exampleHtml)}}let D=(()=>{var t;class e extends c.m{constructor(){super(...arguments),this.exampleModule=n.e(58236).then(n.t.bind(n,58236,17)),this.exampleHtml=n.e(84944).then(n.t.bind(n,84944,17)),this.example1={TypeScript:n.e(34200).then(n.t.bind(n,34200,17)),HTML:n.e(91620).then(n.t.bind(n,91620,17)),LESS:n.e(68872).then(n.t.bind(n,68872,17))},this.example2={TypeScript:n.e(24052).then(n.t.bind(n,24052,17)),HTML:n.e(19160).then(n.t.bind(n,19160,17)),LESS:n.e(91e3).then(n.t.bind(n,91e3,17))},this.example3={TypeScript:n.e(86800).then(n.t.bind(n,86800,17)),HTML:n.e(95988).then(n.t.bind(n,95988,17)),LESS:n.e(66048).then(n.t.bind(n,66048,17))},this.control=new o.Ku("111",o.AQ.required),this.maxLengthVariants=[10],this.maxLength=null}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=d.otF(t)))(n||t)}}(),t.ɵcmp=d.In1({type:t,selectors:[["example-tui-input-inline"]],features:[d.eg9],decls:4,vars:0,consts:[["header","InputInline","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","in-heading","heading","In heading",3,"content"],["id","dynamic-increment","heading","Dynamic counter increment (3 sec)",3,"content"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxLength","documentationPropertyType","number | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.float","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"input",3,"formControl","maxLength"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(d.I0R(0,"tui-doc-page",0),d.yuY(1,M,8,3,"ng-template",1),d.yuY(2,R,7,6,"ng-template",1),d.yuY(3,Y,12,2,"ng-template",1),d.C$Y())},dependencies:[o.ue,o.ug,p.E,h.u,m.m,g.I,f.S,y.E,C.u,I.I,O,w,G],styles:[".input[_ngcontent-%COMP%]{max-width:20rem;border-bottom:1px solid var(--tui-base-09)}"],changeDetection:0}),e})(),A=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=d.a4G({type:t}),t.ɵinj=d.s3X({imports:[i.MD,o.y,o.sl,u.TuiButtonModule,l.TuiInputInlineModule,r.TuiAutoFocusModule,a.kx,s.qQ.forChild((0,a._A)(D))]}),e})()}}]);