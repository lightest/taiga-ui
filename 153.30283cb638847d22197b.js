(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{mFkU:function(e,a,t){"use strict";t.r(a),t.d(a,"WrapperModule",(function(){return C}));var r=t("wdR4"),n=t("An66"),o=t("3kIJ"),i=t("1VvW"),p=t("SVIu"),c=t("Qq0t"),d=t("dvRg"),l=t("kZht"),u=t("OZlg"),s=t("yZWP"),m=t("iyc4"),f=t("GdrL"),b=t("71sB"),h=t("D+uv"),v=t("zV1d");let w=(()=>{class e{constructor(){this.value="",this.checkbox=!1}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-wrapper-example-1"]],features:[l["\u0275\u0275ProvidersFeature"]([{provide:c.O,useValue:"material-textfield"},Object(c.sc)({appearances:{unchecked:"material-checkbox-off",checked:"material-checkbox-on",indeterminate:"material-checkbox-on"}})])],decls:7,vars:2,consts:[["minlength","5",1,"b-form",3,"ngModel","ngModelChange"],[1,"tui-space_vertical-4"],[3,"ngModel","ngModelChange"],["tuiButton","","size","s","appearance","material-button"]],template:function(e,a){1&e&&(l["\u0275\u0275elementStart"](0,"tui-input",0),l["\u0275\u0275listener"]("ngModelChange",(function(e){return a.value=e})),l["\u0275\u0275text"](1," Input example\n"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-checkbox-labeled",2),l["\u0275\u0275listener"]("ngModelChange",(function(e){return a.checkbox=e})),l["\u0275\u0275text"](4,"Checkbox example"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"button",3),l["\u0275\u0275text"](6," Submit\n"),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275property"]("ngModel",a.value),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngModel",a.checkbox))},directives:[f.a,b.a,o.MinLengthValidator,o.NgControlStatus,o.NgModel,h.a,v.a],styles:['tui-wrapper[data-appearance=material-textfield]{background:#f5f5f5;color:rgba(0,0,0,.87);border-radius:.25rem .25rem 0 0}tui-wrapper[data-appearance=material-textfield]:after{transition-property:all;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out;height:.0625rem;background:#8e8e8e;top:auto;border:none;transform-origin:bottom}@media (hover:hover){tui-wrapper[data-appearance=material-textfield]:hover:not(._no-hover),tui-wrapper[data-appearance=material-textfield][data-state=hovered]{background:#ececec}tui-wrapper[data-appearance=material-textfield]:hover:not(._no-hover):after,tui-wrapper[data-appearance=material-textfield][data-state=hovered]:after{background:#1f1f1f}}tui-wrapper[data-appearance=material-textfield]:focus-visible:focus-visible{background:#dcdcdc}tui-wrapper[data-appearance=material-textfield]:focus-visible:focus-visible label{color:#6200ee!important}tui-wrapper[data-appearance=material-textfield]:focus-visible:focus-visible:after{background:#6200ee;transform:scaleY(2)}tui-wrapper[data-appearance=material-textfield]._focused._focused{background:#dcdcdc}tui-wrapper[data-appearance=material-textfield]._focused._focused label{color:#6200ee!important}tui-wrapper[data-appearance=material-textfield]._focused._focused:after{background:#6200ee;transform:scaleY(2)}tui-wrapper[data-appearance=material-textfield]._invalid._invalid label,tui-wrapper[data-appearance=material-textfield]:invalid:invalid label{color:#b00020!important}tui-wrapper[data-appearance=material-textfield]._invalid._invalid:after,tui-wrapper[data-appearance=material-textfield]:invalid:invalid:after{background:#b00020}tui-wrapper[data-appearance=material-button]{transition-property:all;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out;border-radius:.25rem;background:#6200ee;color:#fff;text-transform:uppercase;font-weight:700;box-shadow:0 .1875rem .0625rem -.125rem rgba(0,0,0,.2),0 .125rem .125rem 0 rgba(0,0,0,.0014),0 .0625rem .3125rem 0 rgba(0,0,0,.12)}@media (hover:hover){tui-wrapper[data-appearance=material-button]:hover:not(._no-hover),tui-wrapper[data-appearance=material-button][data-state=hovered]{background:#6e14ef;box-shadow:0 .125rem .25rem -.0625rem rgba(0,0,0,.2),0 .25rem .3125rem 0 rgba(0,0,0,.14),0 .0625rem .625rem 0 rgba(0,0,0,.12)}}tui-wrapper[data-appearance=material-button]:active:not(._no-active),tui-wrapper[data-appearance=material-button][data-state=pressed],tui-wrapper[data-appearance=material-button][data-state=pressed]:hover{background:#6e14ef;box-shadow:0 .3125rem .3125rem -.1875rem rgba(0,0,0,.2),0 .5rem .625rem .0625rem rgba(0,0,0,.14),0 .1875rem .875rem .125rem rgba(0,0,0,.12)}tui-wrapper[data-appearance=material-button]:focus-visible:focus-visible{background:#883df2}tui-wrapper[data-appearance=material-button]:focus-visible:focus-visible:after{display:none}tui-wrapper[data-appearance=material-button]._focused._focused{background:#883df2}tui-wrapper[data-appearance=material-button]._focused._focused:after{display:none}tui-wrapper[data-appearance=material-checkbox-off],tui-wrapper[data-appearance=material-checkbox-on]{color:#fff}tui-wrapper[data-appearance=material-checkbox-off]:before,tui-wrapper[data-appearance=material-checkbox-on]:before{position:absolute;content:"";top:0;left:0;right:0;bottom:0;border-radius:.125rem;border:2px solid rgba(0,0,0,.54);transition:all var(--tui-duration)}tui-wrapper[data-appearance=material-checkbox-off]:after,tui-wrapper[data-appearance=material-checkbox-on]:after{transition-property:opacity;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out;position:absolute;top:-.5rem;left:-.5rem;right:-.5rem;bottom:-.5rem;border-radius:100%;background:#000;opacity:0}@media (hover:hover){tui-wrapper[data-appearance=material-checkbox-off]:hover:not(._no-hover):after,tui-wrapper[data-appearance=material-checkbox-off][data-state=hovered]:after,tui-wrapper[data-appearance=material-checkbox-on]:hover:not(._no-hover):after,tui-wrapper[data-appearance=material-checkbox-on][data-state=hovered]:after{opacity:.05}}tui-wrapper[data-appearance=material-checkbox-off]._focused._focused:after,tui-wrapper[data-appearance=material-checkbox-off]:active:not(._no-active):after,tui-wrapper[data-appearance=material-checkbox-off]:focus-visible:focus-visible:after,tui-wrapper[data-appearance=material-checkbox-off][data-state=pressed]:after,tui-wrapper[data-appearance=material-checkbox-off][data-state=pressed]:hover:after,tui-wrapper[data-appearance=material-checkbox-on]._focused._focused:after,tui-wrapper[data-appearance=material-checkbox-on]:active:not(._no-active):after,tui-wrapper[data-appearance=material-checkbox-on]:focus-visible:focus-visible:after,tui-wrapper[data-appearance=material-checkbox-on][data-state=pressed]:after,tui-wrapper[data-appearance=material-checkbox-on][data-state=pressed]:hover:after{opacity:.1}tui-wrapper[data-appearance=material-checkbox-on]:after,tui-wrapper[data-appearance=material-checkbox-on]:before{background:#6200ee;border-color:transparent}'],encapsulation:2}),e})();var x=t("ER+R");const g=["header",$localize`:␟35330b8bd8fae8bd891f4fc98bb518fdaf27095b␟6199836572724339721:Wrapper`];var k,_;k=$localize`:␟dfbeb30bda71a2474f7e208e53fb8460a17e757a␟1310689327665441923: Many Taiga UI components use ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:tui-wrapper${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: component internally. It is responsible for display of various interactive states and is controlled with CSS. Buttons provide a direct input for ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:appearance${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: while others, like input fields, are configurable through Dependency Injection. `,k=l["\u0275\u0275i18nPostprocess"](k),_=$localize`:␟68c2e95b75946e83ea5bd2e4dbc5e9ebba10fd70␟2041978795133447406: Built-in appearances come with Taiga UI theme. You can extend or completely replace them with your own in global non-encapsulated styles. Use the following mixins from ${"\ufffd#8\ufffd"}:START_TAG_CODE:@import '~@taiga-ui/core/styles/taiga-ui-local';${"\ufffd/#8\ufffd"}:CLOSE_TAG_CODE: : `;const y=["heading",$localize`:␟428a5c79e6b5bb5ed9ba84f0e336ee249b1c187e␟1847855813698345106:Imitate material`];function S(e,a){if(1&e&&(l["\u0275\u0275elementStart"](0,"li"),l["\u0275\u0275elementStart"](1,"tui-doc-copy",4),l["\u0275\u0275elementStart"](2,"code"),l["\u0275\u0275text"](3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=a.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("cdkCopyToClipboard",e),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e)}}let E=(()=>{class e{constructor(){this.example1={HTML:t.e(1510).then(t.bind(null,"Q3wV")),LESS:t.e(1511).then(t.bind(null,"RC7Q")),TypeScript:t.e(1512).then(t.bind(null,"TUNy"))},this.mixins=[".wrapper-hover(@ruleset)",".wrapper-active(@ruleset)",".wrapper-readonly(@ruleset)",".wrapper-disabled(@ruleset)",".wrapper-focus(@ruleset)",".wrapper-invalid(@ruleset)"]}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["wrapper"]],decls:24,vars:2,consts:[[6,"header"],[4,"ngFor","ngForOf"],["tuiLink","","routerLink","/directives/mode"],["id","material",3,"content",6,"heading"],[1,"var",3,"cdkCopyToClipboard"]],template:function(e,a){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,g),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18nStart"](3,k),l["\u0275\u0275element"](4,"code"),l["\u0275\u0275element"](5,"code"),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"p"),l["\u0275\u0275i18nStart"](7,_),l["\u0275\u0275element"](8,"code"),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"ul"),l["\u0275\u0275template"](10,S,4,2,"li",1),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"p"),l["\u0275\u0275text"](12," Use "),l["\u0275\u0275elementStart"](13,"code"),l["\u0275\u0275text"](14,"[data-mode='onDark']"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](15," / "),l["\u0275\u0275elementStart"](16,"code"),l["\u0275\u0275text"](17,"[data-mode='onLight']"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](18," selectors to account for "),l["\u0275\u0275elementStart"](19,"a",2),l["\u0275\u0275text"](20," Mode "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"tui-doc-example",3),l["\u0275\u0275i18nAttributes"](22,y),l["\u0275\u0275element"](23,"tui-wrapper-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](10),l["\u0275\u0275property"]("ngForOf",a.mixins),l["\u0275\u0275advance"](11),l["\u0275\u0275property"]("content",a.example1))},directives:[u.a,n.s,s.a,i.e,m.a,w,x.a,r.a],encapsulation:2,changeDetection:0}),e})(),C=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(a){return new(a||e)},imports:[[n.c,r.c,c.ab,p.o,d.cb,d.H,p.m,c.Ab,i.f.forChild(Object(p.u)(E)),o.FormsModule]]}),e})()}}]);