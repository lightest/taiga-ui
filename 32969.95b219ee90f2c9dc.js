(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[32969],{32969:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var o=n(4594),a=n(35548),r=n(66094),i=n(26552),s=n(57218),c=n(48266),l=n(81470),u=n(40970),p=n(29963),d=n(51160);const m=(()=>{var e;class t{constructor(){this.dialogs=(0,a.f3M)(c.TuiDialogService),this.injector=(0,a.f3M)(a.gxx),this.months$=(0,a.f3M)(c.TUI_MONTHS),this.control=new r.NI(null),this.dialog$=this.dialogs.open(new u.Al(i.TuiMobileCalendarDialogComponent,a.zs3.create({providers:[{provide:l.TUI_CALENDAR_DATE_STREAM,useValue:(0,s.tuiControlValue)(this.control)}],parent:this.injector})),{size:"fullscreen",closeable:!1,data:{min:new s.TuiDay(2018,2,10)}}),this.date$=(0,p.a)([(0,s.tuiControlValue)(this.control),this.months$]).pipe((0,d.U)((([e,t])=>e?e.isSingleDay?`${t[e.from.month]} ${e.from.day}, ${e.from.year}`:`${t[e.from.month]} ${e.from.day}, ${e.from.year} - ${t[e.to.month]} ${e.to.day}, ${e.to.year}`:"Choose a date range")))}get empty(){return!this.control.value}onClick(){this.dialog$.subscribe((e=>this.control.setValue(e)))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=a.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent4",features:[a.jDz],decls:5,vars:7,consts:[[1,"wrapper"],["appearance","secondary","iconLeft","tuiIconCalendarLarge","tuiIconButton","","type","button",3,"click"],[1,"date"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0)(1,"button",1),a.NdJ("click",(function(){return t.onClick()})),a.qZA(),a.TgZ(2,"span",2),a._uU(3),a.ALo(4,"async"),a.qZA()()),2&e&&(a.xp6(1),a.Udp("border-radius",100,"%"),a.xp6(1),a.ekj("date_empty",t.empty),a.xp6(1),a.hij(" ",a.lcZ(4,5,t.date$)," "))},dependencies:[c.TuiButtonDirective,o.Ov],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],changeDetection:0}),t})()}}]);