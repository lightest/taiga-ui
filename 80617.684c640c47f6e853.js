(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[80617],{36433:(t,e,i)=>{i.d(e,{D:()=>o});var n=i(20755);let o=(()=>{var t;class e{constructor(){this.tuiHead="",this.template=(0,n.f3M)(n.Rgc)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=n.lG2({type:t,selectors:[["","tuiHead",""]],inputs:{tuiHead:"tuiHead"}}),e})()},6819:(t,e,i)=>{i.d(e,{Y:()=>u});var n=i(76733),o=i(20755),s=i(11830),r=i(17628),a=i(84787),c=i(18004),h=i(92425),d=i(81749);let u=(()=>{var t;class e{constructor(){this.doc=(0,o.f3M)(n.K0),this.el=(0,o.f3M)(o.SBq).nativeElement,this.parentRef=(0,o.f3M)(r.TUI_ELEMENT_REF).nativeElement,this.tuiResized=(0,s.tuiTypedFromEvent)(this.el,"mousedown").pipe((0,s.tuiPreventDefault)(),(0,a.w)((()=>{const{width:t,right:e}=this.parentRef.getBoundingClientRect();return(0,s.tuiTypedFromEvent)(this.doc,"mousemove").pipe((0,c.x)(),(0,h.U)((({clientX:i})=>t+i-e)),(0,d.R)((0,s.tuiTypedFromEvent)(this.doc,"mouseup")))})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["","tuiResized",""]],outputs:{tuiResized:"tuiResized"}}),e})()},5330:(t,e,i)=>{i.d(e,{c:()=>h});var n=i(20755),o=i(79984),s=i(11830),r=i(73474),a=i(14832),c=i(70650);let h=(()=>{var t;class e extends s.AbstractTuiController{constructor(){super(...arguments),this.options=(0,n.f3M)(c.Cc),this.cdr=(0,n.f3M)(n.sBO),this.columns=[],this.size=this.options.size,this.direction=this.options.direction,this.directionChange=new n.vpe,this.sorterChange=new n.vpe,this.stuck$=(0,n.f3M)(r.I),this.entries$=(0,n.f3M)(o.te),this.sorter=()=>0}updateSorterAndDirection(t){this.sorter===t?this.updateDirection(1===this.direction?-1:1):(this.updateSorter(t),this.updateDirection(1))}ngAfterViewInit(){this.cdr.detectChanges()}updateSorter(t){this.sorter=t||(()=>0),this.sorterChange.emit(this.sorter),this.change$.next()}updateDirection(t){this.direction=t,this.directionChange.emit(this.direction),this.change$.next()}}return(t=e).ɵfac=function(){let e;return function(i){return(e||(e=n.n5z(t)))(i||t)}}(),t.ɵdir=n.lG2({type:t,selectors:[["table","tuiTable",""]],hostAttrs:[2,"border-collapse","separate"],hostVars:1,hostBindings:function(t,e){1&t&&n.NdJ("$.class._stuck",(function(){return e.stuck$})),2&t&&n.uIk("data-size",e.size)},inputs:{columns:"columns",size:"size",direction:"direction",sorter:"sorter"},outputs:{directionChange:"directionChange",sorterChange:"sorterChange"},features:[n._Bn(a.y),n.qOj]}),e})()},73474:(t,e,i)=>{i.d(e,{I:()=>r,y:()=>a});var n=i(20755),o=i(79984),s=i(92425);const r=new n.OlP("[TUI_STUCK]"),a={provide:r,deps:[n.SBq,o.te],useFactory:({nativeElement:t},e)=>{const i=e.pipe((0,s.U)((([{intersectionRatio:t}])=>t<1)));return t["$.class._stuck"]=i,i}}},14832:(t,e,i)=>{i.d(e,{y:()=>h});var n=i(20755),o=i(79984),s=i(11830),r=i(17628),a=i(5330),c=i(73474);const h=[{provide:o.RL,useValue:"10000px 10000px 10000px 0px"},{provide:o.op,useValue:[0,1]},{provide:r.TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,useFactory:()=>{const t=new r.TuiTextfieldAppearanceDirective;return t.appearance=r.TuiAppearance.Table,t}},{provide:r.TUI_TEXTFIELD_LABEL_OUTSIDE,useValue:{labelOutside:!0}},(0,s.tuiProvide)(r.TUI_TEXTFIELD_SIZE,(0,n.Gpc)((()=>a.c))),o.te,c.y]},70650:(t,e,i)=>{i.d(e,{Cc:()=>s,Jz:()=>r,dn:()=>o});var n=i(11830);const o={sticky:!1,resizable:!1,open:!0,size:"m",direction:1,sortIcons:{asc:"tuiIconSortAscending",desc:"tuiIconSortDescending",off:"tuiIconSortOff"}},s=(0,n.tuiCreateToken)(o);function r(t){return(0,n.tuiProvideOptions)(s,t,o)}},87294:(t,e,i)=>{i.d(e,{K:()=>a});var n=i(72133),o=i(20755);const s=["tuiTd",""],r=["*"];let a=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["th","tuiTd",""],["td","tuiTd",""]],contentQueries:function(t,e,i){if(1&t&&o.Suo(i,n.a5,5),2&t){let t;o.iGM(t=o.CRH())&&(e.control=t.first)}},hostVars:2,hostBindings:function(t,e){2&t&&o.ekj("_editable",e.control)},attrs:s,ngContentSelectors:r,decls:1,vars:0,template:function(t,e){1&t&&(o.F$t(),o.Hsn(0))},styles:['[_nghost-%COMP%]{position:relative;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;padding:0 .75rem;background:var(--tui-base-01);border:1px solid var(--tui-base-04);border-top:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-left:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0;vertical-align:top}th[_nghost-%COMP%]{position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}[tuiTheme="dark"][_nghost-%COMP%]:after, [tuiTheme="dark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l);padding-left:1rem;padding-right:1rem}table[data-size="l"]._editable[_nghost-%COMP%], table[data-size="l"]   ._editable[_nghost-%COMP%]{padding:0}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}'],changeDetection:0}),e})()},45991:(t,e,i)=>{i.d(e,{W:()=>b});var n=i(20755),o=i(11830),s=i(17628),r=i(36433),a=i(5330),c=i(70650),h=i(76733),d=i(62998),u=i(6819);const l=["tuiTh",""];function p(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"button",3),n.NdJ("click",(function(){n.CHM(t);const e=n.oxw();return n.KtG(e.updateSorterAndDirection())})),n.GkF(1,4),n._uU(2),n.ALo(3,"async"),n._UZ(4,"tui-svg",5),n.qZA()}if(2&t){const t=n.oxw(),e=n.MAs(2);n.ekj("t-sort_sorted",t.isCurrent),n.xp6(1),n.Q6J("ngTemplateOutlet",e),n.xp6(1),n.hij(" ",n.lcZ(3,5,t.table.change$)," "),n.xp6(2),n.Q6J("src",t.icon)}}function g(t,e){1&t&&n.Hsn(0)}function f(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"div",6),n.NdJ("tuiResized",(function(e){n.CHM(t);const i=n.oxw();return n.KtG(i.onResized(e))})),n.qZA()}}const _=["*"];let b=(()=>{var t;class e{constructor(){this.options=(0,n.f3M)(c.Cc),this.head=(0,n.f3M)(r.D,{optional:!0}),this.sorter=this.head?(t,e)=>(0,o.tuiDefaultSort)(t[this.key],e[this.key]):null,this.resizable=this.options.resizable,this.sticky=this.options.sticky,this.width=null,this.table=(0,n.f3M)((0,n.Gpc)((()=>a.c)),{optional:!0})}get key(){if(!this.head)throw new o.TuiTableSortKeyException;return this.head.tuiHead}get isCurrent(){return!!this.sorter&&!!this.table&&this.sorter===this.table.sorter}get icon(){return this.isCurrent?1===this.table?.direction?this.options.sortIcons.desc:this.options.sortIcons.asc:this.options.sortIcons.off}updateSorterAndDirection(){this.table?.updateSorterAndDirection(this.isCurrentAndAscDirection?null:this.sorter)}onResized(t){this.width=t}get isCurrentAndAscDirection(){return this.sorter===this.table?.sorter&&-1===this.table?.direction}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["th","tuiTh",""]],hostVars:4,hostBindings:function(t,e){2&t&&(n.Udp("width",e.width,"px"),n.ekj("_sticky",e.sticky))},inputs:{sorter:"sorter",resizable:"resizable",sticky:"sticky"},features:[n._Bn([(0,o.tuiProvide)(s.TUI_ELEMENT_REF,n.SBq)])],attrs:l,ngContentSelectors:_,decls:4,vars:3,consts:[["type","button","class","t-sort",3,"t-sort_sorted","click",4,"ngIf","ngIfElse"],["content",""],["class","t-bar",3,"tuiResized",4,"ngIf"],["type","button",1,"t-sort",3,"click"],[3,"ngTemplateOutlet"],[1,"t-sort-icon",3,"src"],[1,"t-bar",3,"tuiResized"]],template:function(t,e){if(1&t&&(n.F$t(),n.YNc(0,p,5,7,"button",0),n.YNc(1,g,1,0,"ng-template",null,1,n.W1O),n.YNc(3,f,1,0,"div",2)),2&t){const t=n.MAs(2);n.Q6J("ngIf",e.sorter&&e.table)("ngIfElse",t),n.xp6(3),n.Q6J("ngIf",e.resizable)}},dependencies:[h.O5,h.tP,d.P,u.Y,h.Ov],styles:['[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;font-weight:700;color:var(--tui-text-02);background:var(--tui-base-01);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-base-04);filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:not(:first-child){border-left:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-top:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}[tuiTheme="dark"]._sticky[_nghost-%COMP%]:after, [tuiTheme="dark"]   ._sticky[_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%], [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:700;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-selection)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;width:3px;justify-self:flex-end;border-left:2px solid transparent;background:var(--tui-support-12);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}'],changeDetection:0}),e})()}}]);