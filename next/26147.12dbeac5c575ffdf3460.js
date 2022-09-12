"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[26147],{82880:(E,p,o)=>{o.d(p,{b:()=>f});var s=o(90987),c=o(57750);const d="Bell";class f extends c.O{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["","Some content"],this.hintDirectionVariants=s.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.autocompleteVariants=["","off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.inputModeVariants=["text","numeric"],this.customContentVariants=[d,"tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected="",this.inputMode=this.inputModeVariants[0],this.autocomplete="",this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.maxHeight=null,this.iconLeftVariants=["","tuiIconMailLarge","tuiIconPiechartLarge"],this.iconLeft=this.iconLeftVariants[0],this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0],this.dropdownAlignVariants=["left","right"],this.dropdownAlign=s.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["bottom","top"],this.dropdownDirection=s.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownMinHeight=s.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=s.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight}get customContent(){return this.customContentSelected===d?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}},98204:(E,p,o)=>{o.d(p,{x:()=>c});const c=new(o(74788).OlP)("[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class")},57750:(E,p,o)=>{o.d(p,{O:()=>s});class s{constructor(){this.pseudoVariants=[!1,!0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}},26147:(E,p,o)=>{o.r(p),o.d(p,{ExampleTuiFilesModule:()=>be});var s=o(12057),c=o(23738),g=o(12021),d=o(78697),f=o(90987),S=o(91068),e=o(74788),J=o(82880),Z=o(98204),V=o(88331),z=o(37159),b=o(57068),Q=o(79765),r=o(2216),N=o(13697),m=o(69699);function j(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-input-files",4),e.NdJ("reject",function(_){return e.CHM(n),e.oxw().onReject(_)}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("formControl",n.control)}}function G(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-file",5),e.NdJ("removed",function(){return e.CHM(n),e.oxw().removeFile()}),e.qZA()}2&t&&e.Q6J("file",l.ngIf)}function X(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-file",6),e.NdJ("removed",function(){return e.CHM(n),e.oxw().clearRejected()}),e.qZA()}2&t&&e.Q6J("file",l.ngIf)}let H=(()=>{class t{constructor(){this.control=new c.NI,this.rejectedFiles$=new Q.xQ}onReject(n){this.rejectedFiles$.next(n)}removeFile(){this.control.setValue(null)}clearRejected(){this.rejectedFiles$.next(null)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-input-files-example-1"]],decls:6,vars:7,consts:[["accept","image/*",3,"formControl","reject",4,"ngIf"],[1,"tui-space_top-1"],[3,"file","removed",4,"ngIf"],["state","error",3,"file","removed",4,"ngIf"],["accept","image/*",3,"formControl","reject"],[3,"file","removed"],["state","error",3,"file","removed"]],template:function(n,i){1&n&&(e.YNc(0,j,1,1,"tui-input-files",0),e.TgZ(1,"tui-files",1),e.YNc(2,G,1,1,"tui-file",2),e.ALo(3,"async"),e.YNc(4,X,1,1,"tui-file",3),e.ALo(5,"async"),e.qZA()),2&n&&(e.Q6J("ngIf",!i.control.value),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,3,i.control.valueChanges)),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,5,i.rejectedFiles$)))},directives:[s.O5,r.D,N.N,c.JJ,c.oH,m._],pipes:[s.Ov],encapsulation:2,changeDetection:0}),t})();function w(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-file",4),e.NdJ("removed",function(){const a=e.CHM(n).$implicit;return e.oxw().removeFile(a)}),e.qZA()}2&t&&e.Q6J("file",l.$implicit)}function Y(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-file",5),e.NdJ("removed",function(){const a=e.CHM(n).$implicit;return e.oxw().clearRejected(a)}),e.qZA()}2&t&&e.Q6J("file",l.$implicit)}let W=(()=>{class t{constructor(){this.control=new c.NI([]),this.rejectedFiles=[]}onReject(n){this.rejectedFiles=[...this.rejectedFiles,...n]}removeFile({name:n}){var i,_;this.control.setValue(null!==(_=null===(i=this.control.value)||void 0===i?void 0:i.filter(a=>a.name!==n))&&void 0!==_?_:[])}clearRejected({name:n}){this.rejectedFiles=this.rejectedFiles.filter(i=>i.name!==n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-input-files-example-2"]],decls:5,vars:6,consts:[["accept","image/*",3,"multiple","formControl","reject"],[1,"tui-space_top-1"],[3,"file","removed",4,"ngFor","ngForOf"],["state","error",3,"file","removed",4,"ngFor","ngForOf"],[3,"file","removed"],["state","error",3,"file","removed"]],template:function(n,i){1&n&&(e.TgZ(0,"tui-input-files",0),e.NdJ("reject",function(a){return i.onReject(a)}),e.qZA(),e.TgZ(1,"tui-files",1),e.YNc(2,w,1,1,"tui-file",2),e.ALo(3,"async"),e.YNc(4,Y,1,1,"tui-file",3),e.qZA()),2&n&&(e.Q6J("multiple",!0)("formControl",i.control),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,4,i.control.valueChanges)),e.xp6(2),e.Q6J("ngForOf",i.rejectedFiles))},directives:[N.N,c.JJ,c.oH,r.D,s.sg,m._],pipes:[s.Ov],encapsulation:2,changeDetection:0}),t})();var B=o(36692),C=o(82707),K=o(66596),F=o(34880);function k(t,l){1&t&&e._UZ(0,"tui-file",7),2&t&&e.Q6J("file",l.$implicit)}function q(t,l){1&t&&e._UZ(0,"tui-file",8),2&t&&e.Q6J("file",l.$implicit)}function ee(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-file",9),e.NdJ("removed",function(){return e.CHM(n),e.oxw().removeLoading()}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("file",n.loadingFile)}}function te(t,l){if(1&t&&e._UZ(0,"tui-file",7),2&t){const n=e.oxw();e.Q6J("file",n.fileWithLink)}}function ne(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-file",10),e.TgZ(1,"button",11),e.NdJ("click",function(){const a=e.CHM(n).$implicit;return e.oxw().restore(a)}),e._uU(2," Restore "),e.qZA(),e.qZA()}2&t&&e.Q6J("file",l.$implicit)}function ie(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-file",12),e.NdJ("removed",function(){const a=e.CHM(n).$implicit;return e.oxw().remove(a)}),e.qZA()}if(2&t){const n=l.$implicit;e.oxw();const i=e.MAs(14);e.Q6J("file",n)("leftContent",i)}}function oe(t,l){1&t&&e._UZ(0,"tui-svg",13)}let le=(()=>{class t{constructor(n){this.isCypress=n,this.control=new c.NI,this.files=[{name:"Loaded.txt"},{name:"A file with a very very long title to check that it can be cut correctly.txt"}],this.loadingFile={name:"Loading file.txt"},this.rejectedFiles=[{name:"File with an error.txt",content:"Something went wrong this time"}],this.fileWithLink={name:"with link.txt",src:"https://tools.ietf.org/html/rfc675"},this.removedFiles=[this.loadingFile],this.restoredFiles=[]}removeLoading(){this.loadingFile=null}restore(n){!n||(this.restoredFiles=[...this.restoredFiles,n],this.removedFiles=this.removedFiles.filter(i=>n.name!==(null==i?void 0:i.name)))}remove(n){this.removedFiles=[...this.removedFiles,n],this.restoredFiles=this.restoredFiles.filter(i=>n.name!==(null==i?void 0:i.name))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(B.TUI_IS_CYPRESS))},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-input-files-example-3"]],decls:15,vars:5,consts:[["state","normal",3,"file",4,"ngFor","ngForOf"],["state","error",3,"file",4,"ngFor","ngForOf"],["state","loading",3,"file","removed",4,"ngIf"],["state","normal",3,"file",4,"tuiItem"],["state","deleted","size","l",3,"file",4,"ngFor","ngForOf"],["state","normal","size","l",3,"file","leftContent","removed",4,"ngFor","ngForOf"],["icon",""],["state","normal",3,"file"],["state","error",3,"file"],["state","loading",3,"file","removed"],["state","deleted","size","l",3,"file"],["tuiLink","",3,"click"],["state","normal","size","l",3,"file","leftContent","removed"],["src","tuiIconFileLarge"]],template:function(n,i){1&n&&(e.TgZ(0,"tui-files"),e.YNc(1,k,1,1,"tui-file",0),e.YNc(2,q,1,1,"tui-file",1),e.YNc(3,ee,1,1,"tui-file",2),e.qZA(),e.TgZ(4,"h4"),e._uU(5,"With link"),e.qZA(),e.TgZ(6,"tui-files"),e.YNc(7,te,1,1,"tui-file",3),e.qZA(),e.TgZ(8,"h4"),e._uU(9,"With deleted state"),e.qZA(),e.TgZ(10,"tui-files"),e.YNc(11,ne,3,1,"tui-file",4),e.YNc(12,ie,1,2,"tui-file",5),e.qZA(),e.YNc(13,oe,1,0,"ng-template",null,6,e.W1O)),2&n&&(e.xp6(1),e.Q6J("ngForOf",i.files),e.xp6(1),e.Q6J("ngForOf",i.rejectedFiles),e.xp6(1),e.Q6J("ngIf",i.loadingFile&&!i.isCypress),e.xp6(8),e.Q6J("ngForOf",i.removedFiles),e.xp6(1),e.Q6J("ngForOf",i.restoredFiles))},directives:[r.D,s.sg,s.O5,C.w,m._,K.V,F.P],encapsulation:2,changeDetection:0}),t})();function _e(t,l){if(1&t&&e._UZ(0,"tui-file",3),2&t){const n=e.oxw().$implicit;e.Q6J("file",n)}}function ae(t,l){1&t&&(e.ynx(0),e.YNc(1,_e,1,1,"tui-file",2),e.BQk())}function se(t,l){if(1&t&&e._UZ(0,"tui-file",5),2&t){const n=e.oxw().$implicit;e.Q6J("file",n)}}function ue(t,l){1&t&&(e.ynx(0),e.YNc(1,se,1,1,"tui-file",4),e.BQk())}let ce=(()=>{class t{constructor(){this.height=3,this.control=new c.NI,this.files=[{name:"Loaded.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"last_file.txt"}],this.rejectedFiles=[{name:"File with an error.txt"}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-input-files-example-4"]],decls:3,vars:3,consts:[[3,"max"],[4,"ngFor","ngForOf"],["state","normal",3,"file",4,"tuiItem"],["state","normal",3,"file"],["state","error",3,"file",4,"tuiItem"],["state","error",3,"file"]],template:function(n,i){1&n&&(e.TgZ(0,"tui-files",0),e.YNc(1,ae,2,0,"ng-container",1),e.YNc(2,ue,2,0,"ng-container",1),e.qZA()),2&n&&(e.Q6J("max",3),e.xp6(1),e.Q6J("ngForOf",i.files),e.xp6(1),e.Q6J("ngForOf",i.rejectedFiles))},directives:[r.D,s.sg,C.w,m._],encapsulation:2,changeDetection:0}),t})();function pe(t,l){1&t&&e._UZ(0,"tui-svg",3)}let re=(()=>{class t{constructor(){this.control=new c.NI,this.file={name:"custom.txt"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-input-files-example-5"]],decls:6,vars:2,consts:[[3,"file","leftContent"],[1,"tui-text_body-s-2"],["content",""],["src","tuiIconTimeLarge"]],template:function(n,i){if(1&n&&(e.TgZ(0,"tui-files"),e.TgZ(1,"tui-file",0),e.TgZ(2,"span",1),e._uU(3,"file is on checking"),e.qZA(),e.qZA(),e.qZA(),e.YNc(4,pe,1,0,"ng-template",null,2,e.W1O)),2&n){const _=e.MAs(5);e.xp6(1),e.Q6J("file",i.file)("leftContent",_)}},directives:[r.D,m._,F.P],styles:[".content[_ngcontent-%COMP%]{color:var(--tui-secondary)}"],changeDetection:0}),t})();var me=o(31823),Te=o(44051),de=o(17023),fe=o(76349);function Ee(t,l){if(1&t&&(e.TgZ(0,"p"),e.SDv(1,2),e.qZA(),e.TgZ(2,"tui-doc-example",3),e._UZ(3,"tui-input-files-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",4),e._UZ(5,"tui-input-files-example-2"),e.qZA(),e.TgZ(6,"tui-doc-example",5),e._UZ(7,"tui-input-files-example-3"),e.qZA(),e.TgZ(8,"tui-doc-example",6),e._UZ(9,"tui-input-files-example-4"),e.qZA(),e.TgZ(10,"tui-doc-example",7),e._UZ(11,"tui-input-files-example-5"),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("content",n.example1),e.xp6(2),e.Q6J("content",n.example2),e.xp6(2),e.Q6J("content",n.example3),e.xp6(2),e.Q6J("content",n.example4),e.xp6(2),e.Q6J("content",n.example5)}}function ge(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-file",28),e.NdJ("removed",function(){e.CHM(n);const _=e.oxw().$implicit;return e.oxw(3).removeFile(_)}),e.qZA()}if(2&t){const n=e.oxw().$implicit,i=e.oxw(3);e.Q6J("file",n)("size",i.size)("showSize",i.showSize)}}function Se(t,l){1&t&&(e.ynx(0),e.YNc(1,ge,1,3,"tui-file",27),e.BQk())}function Ne(t,l){if(1&t&&(e.ynx(0),e.YNc(1,Se,2,0,"ng-container",12),e.ALo(2,"async"),e.BQk()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,n.control.valueChanges))}}function Ce(t,l){if(1&t&&e._UZ(0,"tui-file",31),2&t){const n=e.oxw().ngIf,i=e.oxw(3);e.Q6J("file",n)("size",i.size)("showSize",i.showSize)}}function Fe(t,l){1&t&&(e.ynx(0),e.YNc(1,Ce,1,3,"tui-file",30),e.BQk())}function Oe(t,l){if(1&t&&e.YNc(0,Fe,2,0,"ng-container",29),2&t){const n=e.oxw(2);e.Q6J("ngIf",n.control.value)}}function Ie(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-file",33),e.NdJ("removed",function(){e.CHM(n);const _=e.oxw().$implicit;return e.oxw(2).removeRejected(_)}),e.qZA()}if(2&t){const n=e.oxw().$implicit,i=e.oxw(2);e.Q6J("file",n)("size",i.size)("showSize",i.showSize)}}function Me(t,l){1&t&&(e.ynx(0),e.YNc(1,Ie,1,3,"tui-file",32),e.BQk())}function xe(t,l){1&t&&(e.tHW(0,34),e._UZ(1,"code"),e.N_p())}function Pe(t,l){1&t&&(e.tHW(0,35),e._UZ(1,"code"),e.N_p())}function he(t,l){1&t&&e.SDv(0,36)}function Le(t,l){1&t&&e.SDv(0,37)}function ye(t,l){1&t&&e.SDv(0,38)}function De(t,l){1&t&&e.SDv(0,39)}function Ue(t,l){1&t&&e.SDv(0,40)}function ve(t,l){1&t&&e.SDv(0,41)}function Re(t,l){1&t&&e.SDv(0,42)}function Ae(t,l){1&t&&e.SDv(0,43)}function $e(t,l){1&t&&e.SDv(0,44)}function Je(t,l){1&t&&e.SDv(0,45)}function Ze(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-doc-demo"),e.TgZ(1,"tui-input-files",8),e.NdJ("reject",function(_){return e.CHM(n),e.oxw().updateRejected(_)}),e.qZA(),e.TgZ(2,"tui-files",9),e.YNc(3,Ne,3,3,"ng-container",10),e.YNc(4,Oe,1,1,"ng-template",null,11,e.W1O),e.YNc(6,Me,2,0,"ng-container",12),e.qZA(),e.qZA(),e.TgZ(7,"tui-doc-documentation",13),e.YNc(8,xe,2,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(n),e.oxw().disabled=_}),e.YNc(9,Pe,2,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(n),e.oxw().accept=_}),e.YNc(10,he,1,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(n),e.oxw().label=_}),e.YNc(11,Le,1,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(n),e.oxw().link=_}),e.YNc(12,ye,1,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(n),e.oxw().maxFileSize=_}),e.YNc(13,De,1,0,"ng-template",19),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(n),e.oxw().multipleChange(_)}),e.YNc(14,Ue,1,0,"ng-template",20),e.qZA(),e.TgZ(15,"tui-doc-documentation",21),e.YNc(16,ve,1,0,"ng-template",22),e.YNc(17,Re,1,0,"ng-template",23),e.YNc(18,Ae,1,0,"ng-template",24),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(n),e.oxw().showSize=_}),e.YNc(19,$e,1,0,"ng-template",25),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(n),e.oxw().size=_}),e.YNc(20,Je,1,0,"ng-template",26),e.qZA()}if(2&t){const n=e.MAs(5),i=e.oxw();e.xp6(1),e.Q6J("formControl",i.control)("accept",i.accept)("link",i.link)("label",i.label)("maxFileSize",i.maxFileSize)("multiple",i.multiple)("focusable",i.focusable)("pseudoFocus",i.pseudoFocused)("pseudoHover",i.pseudoHovered)("pseudoActive",i.pseudoPressed),e.xp6(2),e.Q6J("ngIf",i.multiple)("ngIfElse",n),e.xp6(3),e.Q6J("ngForOf",i.rejectedFiles),e.xp6(2),e.Q6J("documentationPropertyValue",i.disabled),e.xp6(1),e.Q6J("documentationPropertyValues",i.acceptVariants)("documentationPropertyValue",i.accept),e.xp6(1),e.Q6J("documentationPropertyValue",i.label),e.xp6(1),e.Q6J("documentationPropertyValue",i.link),e.xp6(1),e.Q6J("documentationPropertyValues",i.maxFileSizeVariants)("documentationPropertyValue",i.maxFileSize),e.xp6(1),e.Q6J("documentationPropertyValue",i.multiple),e.xp6(5),e.Q6J("documentationPropertyValue",i.showSize),e.xp6(1),e.Q6J("documentationPropertyValues",i.sizeVariants)("documentationPropertyValue",i.size)}}function Ve(t,l){if(1&t&&(e.TgZ(0,"ol",46),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,47),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",48),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,49),e.qZA(),e._UZ(9,"tui-doc-code",50),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(5),e.Q6J("code",n.exampleModule),e.xp6(4),e.Q6J("code",n.exampleHtml)}}let ze=(()=>{class t extends J.b{constructor(){super(...arguments),this.exampleModule=o.e(67504).then(o.t.bind(o,67504,17)),this.exampleHtml=o.e(44703).then(o.t.bind(o,44703,17)),this.example1={TypeScript:o.e(40922).then(o.t.bind(o,40922,17)),HTML:o.e(66769).then(o.t.bind(o,66769,17))},this.example2={TypeScript:o.e(37803).then(o.t.bind(o,37803,17)),HTML:o.e(39928).then(o.t.bind(o,39928,17))},this.example3={TypeScript:o.e(7077).then(o.t.bind(o,7077,17)),HTML:o.e(45754).then(o.t.bind(o,45754,17))},this.example4={TypeScript:o.e(20604).then(o.t.bind(o,20604,17)),HTML:o.e(79375).then(o.t.bind(o,79375,17))},this.example5={TypeScript:o.e(50599).then(o.t.bind(o,50599,17)),HTML:o.e(6690).then(o.t.bind(o,6690,17)),LESS:o.e(78407).then(o.t.bind(o,78407,17))},this.control=new c.NI,this.link="Choose a file",this.label="or drop\xa0it\xa0here",this.multiple=!0,this.showSize=!0,this.accept="",this.acceptVariants=["image/*","application/pdf","image/*,application/pdf"],this.maxFileSizeVariants=[100,512e3,3e7,22e5],this.sizeVariants=["m","l"],this.size=this.sizeVariants[0],this.rejectedFiles=[],this.maxFileSize=this.maxFileSizeVariants[2]}removeFile(n){this.control.setValue(this.control.value.filter(i=>i.name!==n.name))}removeRejected(n){this.rejectedFiles=this.rejectedFiles.filter(i=>i.name!==n.name)}updateRejected(n){this.rejectedFiles=[...this.rejectedFiles,...Array.isArray(n)?n:[n]]}multipleChange(n){this.rejectedFiles=[],this.control.setValue(null),this.multiple=n}}return t.\u0275fac=function(){let l;return function(i){return(l||(l=e.n5z(t)))(i||t)}}(),t.\u0275cmp=e.Xpm({type:t,selectors:[["example-tui-input-files"]],features:[e._Bn([{provide:Z.x,useExisting:(0,e.Gpc)(()=>t)}]),e.qOj],decls:4,vars:0,consts:function(){let l,n,i,_,a,T,O,I,M,x,P,h,L,y,D,U,v,R,A,$;return l=$localize`:␟24418f9533e5b068aac1a4bde63bcb5f119593f5␟8579732062296250669:An input for upload one or several files. It uses native input file abilities.`,n=$localize`:␟21b9e693105e70e875f4027941d66fc7373e5e6f␟2365312831690318321:Basic single`,i=$localize`:␟a47f0c6491869fa5eac7f981a8d11633190e851e␟2052254700267022778:multiple`,_=$localize`:␟ea30a2733abb457ee8364e4e3c4814e3def1aa15␟2741034837339672700:Standalone files`,a=$localize`:␟7802ae78818c3f2978ca66de1ad0bbe52505004f␟4530975242591241405:With button`,T=$localize`:␟099e0facbaa0fd2a2d26ab71ef2ada157a398cf8␟7398919974746085920:Custom content`,O=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,I=$localize`:␟68f10dee028dba0c20e1fcddb6056af0dcd8ec71␟127963594360329727: Allowed formats (for native attribute ${"\ufffd#1\ufffd"}:START_TAG_CODE:accept${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,M=$localize`:␟9e1d8ae17f259dd2ea09707bfd739def52e9427a␟5985585011983944521: Label text `,x=$localize`:␟89a84d49564b88163283c735832c296f6f57f3d1␟3977709208772062372: Link text `,P=$localize`:␟6119d719ec0330a98d880e682e2abc1195c59eea␟3924563314608826807: Max file size in bytes (30 MB by default — 30 * 1000 * 1000) `,h=$localize`:␟205964e90f903cb9b99c3d11867ed580d2b738eb␟8625084047952787649: Allows to upload several files `,L=$localize`:␟76c4cf0a46be41a48eee3c30e13b463d63ae5a1d␟4840980441808546217: Emits file that was rejected. `,y=$localize`:␟5767e8c57ff270fa0ffa0fd4454e60b9ccd004bc␟414489167527586218: File `,D=$localize`:␟1b17f43bcc6f4e13dd2881b4034a923787ab238d␟5449162325769068309: State of the file `,U=$localize`:␟c2230ad4bcda14af455b6f5bb951b4dae4fc4f10␟2011612506485911109: Show file size `,v=$localize`:␟52b1e7046e2e0240fcb7b8feef3432c93451000c␟1178400793347014785: Component size `,R=$localize`:␟9f4a11af0f1b581ab49906c0ae7b2875b464493d␟8330152764576404723: Emits file on click on close button. When subscribed to, close button appears. `,A=$localize`:␟c8f3fff6c1ff57fa0714c9ec9f66e0bf6b49dde6␟3751126963235249471: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputFilesModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,$=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","InputFiles","package","KIT","type","components"],["pageTab",""],l,["id","single","heading",n,3,"content"],["id","multiple","heading",i,3,"content"],["id","standalone-files","heading",_,3,"content"],["id","With button","heading",a,3,"content"],["id","custom","heading",T,3,"content"],[3,"formControl","accept","link","label","maxFileSize","multiple","focusable","pseudoFocus","pseudoHover","pseudoActive","reject"],[1,"tui-space_top-2"],[4,"ngIf","ngIfElse"],["single",""],[4,"ngFor","ngForOf"],["heading","TuiInputFiles"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","accept","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","label","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","link","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxFileSize","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","multiple","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","reject","documentationPropertyMode","output","documentationPropertyType","TuiFileLike"],["heading","TuiFile"],["documentationPropertyName","file","documentationPropertyMode","input","documentationPropertyType","TuiFileLike"],["documentationPropertyName","state","documentationPropertyMode","input","documentationPropertyType","TuiFileStateT"],["documentationPropertyName","showSize","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","fileRemoved","documentationPropertyMode","output","documentationPropertyType","TuiFileLike"],[3,"file","size","showSize","removed",4,"tuiItem"],[3,"file","size","showSize","removed"],[4,"ngIf"],[3,"file","size","showSize",4,"tuiItem"],[3,"file","size","showSize"],["state","error",3,"file","size","showSize","removed",4,"tuiItem"],["state","error",3,"file","size","showSize","removed"],O,I,M,x,P,h,L,y,D,U,v,R,[1,"b-demo-steps"],A,["filename","myComponent.module.ts",3,"code"],$,["filename","myComponent.template.html",3,"code"]]},template:function(n,i){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,Ee,12,5,"ng-template",1),e.YNc(2,Ze,21,24,"ng-template",1),e.YNc(3,Ve,10,2,"ng-template",1),e.qZA())},directives:[V.q,z.n,b.f,H,W,le,ce,re,me.F,N.N,c.JJ,c.oH,r.D,s.O5,s.sg,Te.z,de.B,C.w,m._,fe.c],pipes:[s.Ov],encapsulation:2,changeDetection:0}),t})(),be=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,c.UX,S.TuiFilesModule,S.TuiInputFilesModule,d.fV,f.TuiLinkModule,f.TuiButtonModule,f.TuiSvgModule,g.Bz.forChild((0,d.Ve)(ze))]]}),t})()}}]);