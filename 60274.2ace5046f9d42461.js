(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[60274,78665,45999,34161,57974,65047,77581],{60274:(t,e,n)=>{n.d(e,{I:()=>b});var i,r=n(84911),o=n(3489),a=n(20755),s=n(76733),l=n(65047);const u=function(t,e){return{$implicit:t,index:e,flexible:!1}};function c(t,e){if(1&t&&a.GkF(0,5),2&t){const t=e.$implicit,n=e.index;a.oxw(2);const i=a.MAs(4);a.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",a.WLB(2,u,t,n))}}function g(t,e){if(1&t&&(a.ynx(0),a.YNc(1,c,1,5,"ng-container",4),a.BQk()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngForOf",t.computedValue)}}const p=function(t,e){return{$implicit:t,index:e,flexible:!0}};function d(t,e){if(1&t&&(a.TgZ(0,"div",7),a.GkF(1,5),a.qZA()),2&t){const t=e.$implicit,n=e.index;a.oxw(2);const i=a.MAs(4);a.xp6(1),a.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",a.WLB(2,p,t,n))}}function m(t,e){if(1&t&&a.YNc(0,d,2,5,"div",6),2&t){const t=a.oxw();a.Q6J("ngForOf",t.computedValue)}}function f(t,e){if(1&t&&a._UZ(0,"tui-bar",8),2&t){const t=e.flexible,n=e.index,i=e.$implicit,r=a.oxw();a.Udp("background",r.getColor(n))("height",r.getHeight(i),"%"),a.ekj("t-bar_flexible",t)("t-bar_negative",i<0),a.Q6J("size",r.computedSize)("value",r.computedSegments)}}const h=[],x=[1];class b{constructor(){this.value=[],this.size="m",this.collapsed=!1}get computedValue(){return this.collapsed?x:this.value}get computedSegments(){return this.collapsed?this.value:h}get computedSize(){return this.size||"m"}getHeight(t){return Math.abs(100*t/this.getLargest(this.computedValue))}getColor(t){return`var(--tui-chart-${t})`}getLargest(t){return t.some((t=>t>0))?t.reduce(((t,e)=>t>e?t:e),0):Math.abs(t.reduce(((t,e)=>t<e?t:e),0))}}(i=b).ɵfac=function(t){return new(t||i)},i.ɵcmp=a.Xpm({type:i,selectors:[["tui-bar-set"]],inputs:{value:"value",size:"size",collapsed:"collapsed"},ngContentSelectors:["*"],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["flexible",""],["bar",""],[1,"t-label"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","t-wrapper",4,"ngFor","ngForOf"],[1,"t-wrapper"],["automation-id","tui-bar-set__bar",1,"t-bar",3,"size","value"]],template:function(t,e){if(1&t&&(a.F$t(),a.YNc(0,g,2,1,"ng-container",0),a.YNc(1,m,1,1,"ng-template",null,1,a.W1O),a.YNc(3,f,1,10,"ng-template",null,2,a.W1O),a.TgZ(5,"span",3),a.Hsn(6),a.qZA()),2&t){const t=a.MAs(2);a.Q6J("ngIf",e.size)("ngIfElse",t)}},dependencies:[s.sg,s.O5,s.tP,l.o],styles:["[_nghost-%COMP%]{position:relative;display:flex;height:100%;align-items:flex-end;justify-content:center}.t-wrapper[_ngcontent-%COMP%]{display:flex;flex:1;height:100%;align-items:flex-end}.t-wrapper[_ngcontent-%COMP%]:first-of-type{margin-left:25%}.t-wrapper[_ngcontent-%COMP%]:last-of-type{margin-right:25%}.t-bar[_ngcontent-%COMP%]{transform-origin:bottom center}.t-bar_negative[_ngcontent-%COMP%]{transform:rotate(180deg);opacity:var(--tui-disabled-opacity)}.t-bar.t-bar_flexible[_ngcontent-%COMP%]{max-width:none;width:75%;margin:0 auto}.t-label[_ngcontent-%COMP%]{position:absolute;top:-1.5rem;font:var(--tui-font-text-xs);color:var(--tui-text-02)}"],changeDetection:0}),(0,r.gn)([o.tuiPure],b.prototype,"getLargest",null)},65047:(t,e,n)=>{n.d(e,{o:()=>u});var i,r=n(84911),o=n(3489),a=n(20755),s=n(76733);function l(t,e){if(1&t&&a._UZ(0,"div",1),2&t){const t=e.$implicit,n=e.index,i=a.oxw();a.Udp("background",i.getColor(n))("height",i.getHeight(t),"%")}}class u{constructor(){this.value=[],this.size="m"}getHeight(t){return 100*t/this.getSum(this.value)}getColor(t){return`var(--tui-chart-${t})`}getSum(t){return(0,o.tuiSum)(...t)}}(i=u).ɵfac=function(t){return new(t||i)},i.ɵcmp=a.Xpm({type:i,selectors:[["tui-bar"]],hostVars:1,hostBindings:function(t,e){2&t&&a.uIk("data-size",e.size)},inputs:{value:"value",size:"size"},decls:1,vars:1,consts:[["automation-id","tui-bar__bar",3,"background","height",4,"ngFor","ngForOf"],["automation-id","tui-bar__bar"]],template:function(t,e){1&t&&a.YNc(0,l,1,4,"div",0),2&t&&a.Q6J("ngForOf",e.value)},dependencies:[s.sg],styles:["[_nghost-%COMP%]{display:flex;min-width:.125rem;flex-direction:column-reverse;border-top-left-radius:var(--tui-radius-l);border-top-right-radius:var(--tui-radius-l);overflow:hidden}[data-size=l][_nghost-%COMP%]{width:1rem;max-width:1rem;margin:0 .1875rem}[data-size=m][_nghost-%COMP%]{width:.5rem;max-width:.5rem;margin:0 .1875rem}[data-size=s][_nghost-%COMP%]{width:.25rem;max-width:.5rem;margin:0 .125rem}"],changeDetection:0}),(0,r.gn)([o.tuiPure],u.prototype,"getSum",null)}}]);