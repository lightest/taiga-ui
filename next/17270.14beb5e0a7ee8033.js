(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17270,30116],{33923:(t,e,i)=>{i.d(e,{$Z:()=>c.$Z,RM:()=>c.RM,VU:()=>n.V,Tk:()=>l.T,I2:()=>u,ed:()=>l.e,RJ:()=>c.RJ});var n=i(31661),s=i(76733),r=i(3489),o=i(11746),h=i(6254),a=i(20755);let u=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[s.ez,h.wq,o.TuiHintModule,r.TuiFocusableModule,r.TuiLetModule]}),e})();var c=i(9373),l=i(95849)},75018:(t,e,i)=>{i.d(e,{w:()=>d});var n,s=i(84911),r=i(20755),o=i(33923),h=i(3489),a=i(38442),u=i(55333),c=i(81749),l=i(42075);function g(t,e){return t.find((([t])=>t.daySame(e)))||[e,NaN]}class d{constructor(){this.charts=h.EMPTY_QUERY,this.destroy$=(0,r.f3M)(h.TuiDestroyService,{self:!0}),this.zone=(0,r.f3M)(r.R0b),this.hovered$=(0,r.f3M)(h.TuiHoveredService)}ngAfterContentInit(){(0,a.a)([...this.charts.map((({charts:t})=>(0,o.ed)(t))),this.hovered$]).pipe((0,u.h)((t=>!t.some(Boolean))),(0,h.tuiZonefree)(this.zone),(0,c.R)(this.destroy$)).subscribe((()=>{this.charts.forEach((t=>t.onHovered(NaN)))}))}getContext(t){return this.getMap(...this.charts.map((({value:t})=>t))).get(String(t))||[]}raise(t){const e=this.charts.map((({value:e})=>g(e,t))).filter((([t,e])=>!Number.isNaN(e))),i=[...e].sort(((t,e)=>t[1]-e[1]));this.charts.forEach(((n,s)=>{n.onHovered(t),n.zIndex=Math.max(i.indexOf(e[s]),0)}))}getMap(...t){return(t[0]||[]).reduce(((e,[i])=>e.set(String(i),t.map((t=>g(t,i))))),new Map)}}(n=d).ɵfac=function(t){return new(t||n)},n.ɵdir=r.lG2({type:n,selectors:[["","tuiLineChartHint",""]],contentQueries:function(t,e,i){if(1&t&&r.Suo(i,l.r,4),2&t){let t;r.iGM(t=r.CRH())&&(e.charts=t)}},inputs:{hint:["tuiLineChartHint","hint"]},features:[r._Bn([h.TuiDestroyService,h.TuiHoveredService])]}),(0,s.gn)([h.tuiPure],d.prototype,"getMap",null)},42075:(t,e,i)=>{i.d(e,{r:()=>M});var n,s=i(84911),r=i(20755),o=i(33923),h=i(3489),a=i(38442),u=i(55333),c=i(81749),l=i(75018),g=i(76733),d=i(31661),y=i(6254),f=i(90189);function v(t,e){if(1&t&&r._UZ(0,"tui-line-chart",2),2&t){const t=e.$implicit,i=e.first,n=r.oxw(),s=r.MAs(2);r.Udp("z-index",n.zIndex),r.Q6J("dots",n.dots)("height",n.height)("smoothingFactor",n.smoothingFactor)("tuiHintContent",n.hintContent?s:"")("value",t)("width",i?n.firstWidth:n.getWidth(t[0][0]))("x",i?0:n.getX(t[0][0]))("xStringify",n.xStringify?n.daysStringify:null)("y",n.y)("yStringify",n.yStringify)}}function p(t,e){if(1&t&&(r.ynx(0),r._uU(1),r.BQk()),2&t){const t=e.polymorpheusOutlet;r.xp6(1),r.hij(" ",t," ")}}const m=function(t){return{$implicit:t}};function x(t,e){if(1&t&&r.YNc(0,p,2,1,"ng-container",3),2&t){const t=e.$implicit,i=r.oxw();r.Q6J("polymorpheusOutlet",i.hintContent)("polymorpheusOutletContext",r.VKq(2,m,i.getHintContext(t[0],i.value)))}}const S=[NaN,NaN];class M{constructor(){this.destroy$=(0,r.f3M)(h.TuiDestroyService,{self:!0}),this.zone=(0,r.f3M)(r.R0b),this.hovered$=(0,r.f3M)(h.TuiHoveredService),this.options=(0,r.f3M)(o.RM),this.hintDirective=(0,r.f3M)(l.w,{optional:!0}),this.charts=h.EMPTY_QUERY,this.y=0,this.height=0,this.smoothingFactor=this.options.smoothingFactor,this.xStringify=null,this.yStringify=null,this.dots=this.options.dots,this.zIndex=0,this.value=[],this.daysStringify=t=>this.xStringify?this.xStringify(this.getDay(t)):""}set valueSetter(t){if(!t.length)return void(this.value=[]);const e=t[0][0],i=[...t],n=h.TuiDay.lengthBetween(e,t[t.length-1][0])+1;this.value=Array.from({length:n},((t,n)=>{const s=e.append({day:n}),r=s.daySame(i[0][0])?i.shift():null;return[s,r?r[1]:NaN]}))}ngAfterViewInit(){(0,a.a)([(0,o.ed)(this.charts),this.hovered$]).pipe((0,u.h)((t=>!t.some(Boolean))),(0,h.tuiZonefree)(this.zone),(0,c.R)(this.destroy$)).subscribe((()=>{this.onHovered(NaN)}))}onHovered(t){if((0,h.tuiIsNumber)(t))return void this.charts.forEach((t=>t.onHovered(NaN)));const e=h.TuiMonth.lengthBetween(this.value[0][0],t),i=h.TuiDay.lengthBetween(this.value[0][0],t)+this.value[0][0].day-1,n=this.charts.get(e);this.charts.forEach((t=>{t===n?n.onHovered(n.value.findIndex((t=>t[0]===i))):t.onHovered(NaN)}))}get months(){return this.value.length?this.breakMonths(this.value):h.EMPTY_ARRAY}get firstWidth(){return this.months.length*this.value[0][0].daysCount}get hint(){return this.hintDirective?.hint??this.hintContent}getHintContext(t,e){return e[t-e[0][0].day+1]}getX(t){const e=this.getDay(t);return t-h.TuiMonth.lengthBetween(this.value[0][0],e)*e.daysCount}raise(t,{value:e}){const i=e[t][0],n=this.getDay(i);this.hintDirective?this.hintDirective.raise(n):this.onHovered(n)}getWidth(t){return this.getDay(t).daysCount*this.months.length}getContext(t,{value:e}){const i=e[t][0];return this.hintDirective?this.hintDirective.getContext(this.getDay(i)):this.getHintContext(i,this.value)}breakMonths(t){const e=t[0][0].day-1;return Array.from({length:h.TuiMonth.lengthBetween(t[0][0],t[t.length-1][0])+1},((e,i)=>i+t[0][0].month+12*t[0][0].year)).map((i=>t.map((([{month:t,year:n},s],r)=>t+12*n===i?[r+e,s]:null)).filter(h.tuiIsPresent))).map(((t,e,i)=>e===i.length-1?t:[...t,i[e+1].find((t=>!Number.isNaN(t[1])))||S]))}getDay(t){return this.value[t-this.value[0][0].day+1][0]}}(n=M).ɵfac=function(t){return new(t||n)},n.ɵcmp=r.Xpm({type:n,selectors:[["tui-line-days-chart"]],viewQuery:function(t,e){if(1&t&&r.Gf(o.VU,5),2&t){let t;r.iGM(t=r.CRH())&&(e.charts=t)}},hostVars:2,hostBindings:function(t,e){2&t&&r.Udp("z-index",e.zIndex)},inputs:{y:"y",height:"height",smoothingFactor:"smoothingFactor",hintContent:"hintContent",xStringify:"xStringify",yStringify:"yStringify",dots:"dots",valueSetter:["value","valueSetter"]},features:[r._Bn([h.TuiDestroyService,h.TuiHoveredService,{provide:o.Tk,useExisting:n}])],decls:3,vars:1,consts:[["class","t-chart",3,"dots","height","smoothingFactor","zIndex","tuiHintContent","value","width","x","xStringify","y","yStringify",4,"ngFor","ngForOf"],["hint",""],[1,"t-chart",3,"dots","height","smoothingFactor","tuiHintContent","value","width","x","xStringify","y","yStringify"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(t,e){1&t&&(r.YNc(0,v,1,12,"tui-line-chart",0),r.YNc(1,x,1,4,"ng-template",null,1,r.W1O)),2&t&&r.Q6J("ngForOf",e.months)},dependencies:[g.sg,d.V,y.Li,f.bZ],styles:["[_nghost-%COMP%]{display:block}.t-chart[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}"],changeDetection:0}),(0,s.gn)([h.tuiPure],M.prototype,"getHintContext",null),(0,s.gn)([h.tuiPure],M.prototype,"breakMonths",null)}}]);