(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8109],{8109:(t,e,i)=>{i.d(e,{O:()=>O});var n=i(20755),s=i(62022),a=i(43232),o=i(11830),r=i(45047),c=i(92425),l=i(35484),u=i(84787),h=i(73843),p=i(31570),g=i(1925),f=i(69781);const v=["arc"];function m(t,e){if(1&t&&(n.O4$(),n.TgZ(0,"svg",4),n._UZ(1,"path",5)(2,"path",6,7),n.qZA()),2&t){const t=e.$implicit,i=n.oxw();n.Udp("height",i.getDiameter(t),"em")("left",i.getInset(t),"em")("top",i.getInset(t),"em")("width",i.getDiameter(t),"em"),n.xp6(2),n.Udp("stroke",i.getColor(t))("stroke-dasharray",i.getLength(t),"em")("stroke-dashoffset",i.initialized?i.getOffset(t):i.getLength(t),"em"),n.ekj("t-value_inactive",i.isInactive(t))}}const d=["*"],x={m:9,l:11,xl:16},w={m:.25,l:.375,xl:.5625},C={m:.125,l:.1875,xl:.25};let O=(()=>{var t;class e{constructor(){this.sanitizer=(0,n.f3M)(a.H7),this.arcs$=new l.t(1),this.value=[],this.size="m",this.max=100,this.minLabel="0%",this.maxLabel="100%",this.activeItemIndex=NaN,this.activeItemIndexChange=this.arcs$.pipe((0,u.w)((t=>t.changes.pipe((0,h.O)(null),(0,u.w)((()=>(0,r.T)(...function(t){return t.map((({nativeElement:t},e)=>(0,r.T)((0,o.tuiTypedFromEvent)(t,"mouseenter").pipe((0,c.U)((()=>e))),(0,o.tuiTypedFromEvent)(t,"mouseleave").pipe((0,c.U)((()=>NaN))))))}(t))))))),(0,p.b)((t=>{this.activeItemIndex=t}))),this.initialized=!1,(0,g.H)(0).pipe((0,o.tuiWatch)((0,n.f3M)(n.sBO)),(0,s.sL)()).subscribe((()=>{this.initialized=!0}))}set arcs(t){this.arcs$.next(t)}get width(){return x[this.size]}get strokeWidth(){return w[this.size]}isInactive(t){return!Number.isNaN(this.activeItemIndex)&&t!==this.activeItemIndex}getInset(t){return this.strokeWidth/2+t*(this.strokeWidth+C[this.size])}getDiameter(t){return x[this.size]-2*this.getInset(t)}getLength(t){return Math.PI*this.getDiameter(t)*.76}getOffset(t){return this.getLength(t)*(1-Math.min(this.value[t]/this.max,1))}getColor(t){return this.sanitizer.bypassSecurityTrustStyle(`var(--tui-chart-${t}, var(--tui-support-0${t+1}))`)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["tui-arc-chart"]],viewQuery:function(t,e){if(1&t&&n.Gf(v,5),2&t){let t;n.iGM(t=n.CRH())&&(e.arcs=t)}},hostVars:7,hostBindings:function(t,e){2&t&&(n.uIk("data-size",e.size),n.Udp("width",e.width,"rem")("height",e.width,"rem")("stroke-width",e.strokeWidth,"rem"))},inputs:{value:"value",size:"size",max:"max",minLabel:"minLabel",maxLabel:"maxLabel",activeItemIndex:"activeItemIndex"},outputs:{activeItemIndexChange:"activeItemIndexChange"},ngContentSelectors:d,decls:9,vars:3,consts:[["focusable","false","viewBox","-100 -100 200 200","xmlns","http://www.w3.org/2000/svg","class","t-svg",3,"height","left","top","width",4,"tuiRepeatTimes","tuiRepeatTimesOf"],[1,"t-content"],[1,"t-wrapper"],[1,"t-percent"],["focusable","false","viewBox","-100 -100 200 200","xmlns","http://www.w3.org/2000/svg",1,"t-svg"],["d","M -70 70 A 100 100 0 1 1 70 70","vector-effect","non-scaling-stroke"],["d","M -70 70 A 100 100 0 1 1 70 70","vector-effect","non-scaling-stroke",1,"t-value"],["arc",""]],template:function(t,e){1&t&&(n.F$t(),n.YNc(0,m,4,16,"svg",0),n.TgZ(1,"div",1)(2,"div",2),n.Hsn(3),n.qZA()(),n.TgZ(4,"div",3)(5,"span"),n._uU(6),n.qZA(),n.TgZ(7,"span"),n._uU(8),n.qZA()()),2&t&&(n.Q6J("tuiRepeatTimesOf",e.value.length),n.xp6(6),n.Oqu(e.minLabel),n.xp6(2),n.Oqu(e.maxLabel))},dependencies:[f.X],styles:["[_nghost-%COMP%]{position:relative;display:block;flex-shrink:0}.t-svg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;overflow:visible;fill:none;stroke:currentColor;stroke-linecap:round;color:var(--tui-secondary);font-size:1rem;pointer-events:none}.t-value[_ngcontent-%COMP%]{pointer-events:auto;transition:stroke-dashoffset var(--tui-duration) ease-in-out,opacity var(--tui-duration) ease-in-out .1s}.t-value_inactive[_ngcontent-%COMP%]{transition-property:stroke-dashoffset,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:.16}.t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center;color:var(--tui-text-02);font:var(--tui-font-text-xs);pointer-events:none}[data-size=xl][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m)}.t-wrapper[_ngcontent-%COMP%]{pointer-events:auto}.t-wrapper[_ngcontent-%COMP%]:first-line{color:var(--tui-text-01)}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-s);font-weight:700}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-m);font-weight:700}[data-size=xl][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-heading-5)}.t-percent[_ngcontent-%COMP%]{position:absolute;left:25%;bottom:11%;display:flex;width:50%;justify-content:space-between;font:var(--tui-font-text-xs);color:var(--tui-text-02)}[data-size=xl][_nghost-%COMP%]   .t-percent[_ngcontent-%COMP%]{font:var(--tui-font-text-m)}"],changeDetection:0}),e})()}}]);