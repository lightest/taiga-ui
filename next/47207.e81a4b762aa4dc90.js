(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[47207,69841,60814,13683,53166],{44739:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiSegmentedModule:()=>T});var n=i(76733),s=i(72133),a=i(87253),o=i(93803),r=i(20755),d=i(2313),u=i(36877),l=i(43894),m=i(17894),c=i(97967),h=i(77410),g=i(81768),p=i(17771),f=i(85126);function b(e,t){if(1&e&&(r.TgZ(0,"tui-notification",3),r._uU(1," This code is "),r.TgZ(2,"strong"),r._uU(3,"experimental"),r.qZA(),r._uU(4," and is a subject to change. Expect final solution to be shipped in the next major version "),r.qZA(),r.TgZ(5,"p",4),r._uU(6," Segmented is used for links and buttons to navigate within the application. It can also work as a radio button to toggle between different states. "),r.qZA(),r.TgZ(7,"tui-doc-example",5),r._UZ(8,"tui-segmented-example-1"),r.qZA(),r.TgZ(9,"tui-doc-example",6),r._UZ(10,"tui-segmented-example-2"),r.qZA(),r.TgZ(11,"tui-doc-example",7),r._UZ(12,"tui-segmented-example-3"),r.qZA(),r.TgZ(13,"tui-doc-example",8),r._UZ(14,"tui-segmented-example-4"),r.qZA()),2&e){const e=r.oxw();r.xp6(7),r.Q6J("content",e.example1),r.xp6(2),r.Q6J("content",e.example2),r.xp6(2),r.Q6J("content",e.example3),r.xp6(2),r.Q6J("content",e.example4)}}function x(e,t){if(1&e&&(r.TgZ(0,"ol",9)(1,"li")(2,"p"),r._uU(3,"Add an import:"),r.qZA(),r._UZ(4,"tui-doc-code",10),r.qZA(),r.TgZ(5,"li")(6,"p"),r._uU(7,"Add to the template:"),r.qZA(),r._UZ(8,"tui-doc-code",11),r.qZA()()),2&e){const e=r.oxw();r.xp6(4),r.Q6J("code",e.exampleModule),r.xp6(4),r.Q6J("code",e.exampleHtml)}}let v=(()=>{var e;class t{constructor(){this.exampleModule=i.e(51976).then(i.t.bind(i,51976,17)),this.exampleHtml=i.e(58997).then(i.t.bind(i,58997,17)),this.example1={HTML:i.e(42758).then(i.t.bind(i,94506,17))},this.example2={HTML:i.e(43587).then(i.t.bind(i,43587,17)),LESS:i.e(28480).then(i.t.bind(i,28480,17))},this.example3={HTML:i.e(16131).then(i.t.bind(i,16131,17)),LESS:i.e(8145).then(i.t.bind(i,8145,17))},this.example4={HTML:i.e(1470).then(i.t.bind(i,1470,17)),TypeScript:i.e(47542).then(i.t.bind(i,47542,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["example-segmented"]],decls:3,vars:0,consts:[["header","Segmented","package","EXPERIMENTAL","type","components"],["pageTab",""],["pageTab","Setup"],["status","warning"],[1,"tui-space_vertial-4"],["id","size","heading","Sizes",3,"content"],["id","width","heading","Width",3,"content"],["id","customization","heading","Customization",3,"content"],["id","content","heading","Content",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(r.TgZ(0,"tui-doc-page",0),r.YNc(1,b,15,4,"ng-template",1),r.YNc(2,x,9,2,"ng-template",2),r.qZA())},dependencies:[d.L,u.c,l.q,m.n,c.f,h.TuiSegmentedExample1,g.TuiSegmentedExample2,p.TuiSegmentedExample3,f.TuiSegmentedExample4],encapsulation:2,changeDetection:0}),t})();i(5790);let T=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=r.oAB({type:e}),e.ɵinj=r.cJS({imports:[n.ez,o.TuiNotificationModule,(0,a.bG)(v),s.u5]}),t})()},77510:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(20755),s=i(7953),a=i(2697),o=i(80506),r=i(81749),d=i(33946);const u=["*"];let l=(()=>{var e;class t{constructor(){this.el=(0,n.f3M)(n.SBq).nativeElement,this.sub=(0,n.f3M)(s.ax).pipe((0,a.tuiZonefree)((0,n.f3M)(n.R0b)),(0,r.R)((0,n.f3M)(a.TuiDestroyService,{self:!0}))).subscribe((()=>this.refresh())),this.size="s",this.activeItemIndex=0,this.activeItemIndexChange=new n.vpe}ngOnChanges(){this.refresh()}update(e){e!==this.activeItemIndex&&(this.activeItemIndex=e,this.activeItemIndexChange.emit(e),this.refresh())}get left(){const e=this.activeElement;return(0,a.tuiIsHTMLElement)(e)?e.offsetLeft:0}get width(){return this.activeElement?.clientWidth||0}get activeElement(){return this.el.children.item(this.activeItemIndex)}refresh(){this.el.style.setProperty("--t-left",(0,a.tuiPx)(this.left)),this.el.style.setProperty("--t-width",(0,a.tuiPx)(this.width))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=n.Xpm({type:e,selectors:[["tui-segmented"]],hostVars:1,hostBindings:function(e,t){2&e&&n.uIk("data-size",t.size)},inputs:{size:"size",activeItemIndex:"activeItemIndex"},outputs:{activeItemIndexChange:"activeItemIndexChange"},standalone:!0,features:[n._Bn([a.TuiDestroyService,s.ax,(0,o.tuiBadgeNotificationOptionsProvider)({size:"s"})]),n.TTD,n.jDz,n.zW0([d.T])],ngContentSelectors:u,decls:1,vars:0,template:function(e,t){1&e&&(n.F$t(),n.Hsn(0))},styles:['tui-segmented{position:relative;display:flex;box-sizing:border-box;isolation:isolate;color:var(--tui-clear);border:.125rem solid transparent}tui-segmented[data-size=s]{--t-padding: .625rem;--t-gap: .5rem;--t-margin: -.125rem;height:var(--tui-height-s);font:var(--tui-font-text-s);border-radius:var(--tui-radius-s)}tui-segmented[data-size=s]>*:before,tui-segmented[data-size=s]>*:after,tui-segmented[data-size=s] tui-icon{font-size:1rem}tui-segmented[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;height:var(--tui-height-m);font:var(--tui-font-text-m);border-radius:var(--tui-radius-s)}tui-segmented[data-size=l]{--t-padding: 1.125rem;--t-gap: 1rem;--t-margin: -.375rem;height:var(--tui-height-l);font:var(--tui-font-text-l);border-radius:var(--tui-radius-m);border-width:.25rem}tui-segmented[data-size=l]:after{box-shadow:0 0 0 .25rem}tui-segmented>a,tui-segmented>button,tui-segmented>label,tui-segmented>label>input:not([tuiRadio]){transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-01);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit}tui-segmented>a>*,tui-segmented>button>*,tui-segmented>label>*,tui-segmented>label>input:not([tuiRadio])>*,tui-segmented>a:before,tui-segmented>button:before,tui-segmented>label:before,tui-segmented>label>input:not([tuiRadio]):before,tui-segmented>a:after,tui-segmented>button:after,tui-segmented>label:after,tui-segmented>label>input:not([tuiRadio]):after{margin:0 var(--t-margin)}tui-segmented>a:focus-visible,tui-segmented>button:focus-visible,tui-segmented>label:focus-visible,tui-segmented>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-focus);outline-offset:-.125rem}tui-segmented>label>input:not([tuiRadio]){position:absolute;top:0;left:0;width:100%;height:100%}tui-segmented:after{position:absolute;top:0;left:0;width:100%;height:100%;content:"";z-index:-1;border-radius:inherit;background:currentColor;box-shadow:0 0 0 .125rem}tui-segmented:before{transition-property:left,width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;left:var(--t-left);height:100%;width:var(--t-width);border-radius:inherit;background:currentColor;color:var(--tui-base-01);box-shadow:0 .25rem 1.25rem #0000001a}\n'],encapsulation:2,changeDetection:0}),t})()},33946:(e,t,i)=>{i.d(t,{T:()=>m});var n=i(20755),s=i(72133),a=i(42932),o=i(2697),r=i(84787),d=i(30453),u=i(81749),l=i(77510);let m=(()=>{var e;class t{constructor(){this.controls=o.EMPTY_QUERY,this.links=o.EMPTY_QUERY,this.elements=o.EMPTY_QUERY,this.destroy$=(0,n.f3M)(o.TuiDestroyService,{self:!0}),this.component=(0,n.f3M)(l.A),this.el=(0,n.f3M)(n.SBq).nativeElement}ngAfterContentInit(){(0,o.tuiQueryListChanges)(this.controls).pipe((0,r.w)((()=>this.controls.last?.valueChanges||d.E)),(0,u.R)(this.destroy$)).subscribe((()=>{this.update(this.el.querySelector(":checked"))}))}ngAfterContentChecked(){this.links.length&&this.update(this.elements.get(this.linkIndex)?.nativeElement||null)}update(e){const t=this.getIndex(e);t>=0&&this.component.update(t)}get linkIndex(){return this.links.toArray().findIndex((e=>e.isActive))}getIndex(e){return Array.from(this.el.children).findIndex((t=>t.contains(e)))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵdir=n.lG2({type:e,selectors:[["tui-segmented",5,"tui-segmented"]],contentQueries:function(e,t,i){if(1&e&&(n.Suo(i,s.a5,5),n.Suo(i,a.Od,4),n.Suo(i,a.Od,4,n.SBq)),2&e){let e;n.iGM(e=n.CRH())&&(t.controls=e),n.iGM(e=n.CRH())&&(t.links=e),n.iGM(e=n.CRH())&&(t.elements=e)}},hostBindings:function(e,t){1&e&&n.NdJ("click",(function(e){return t.update(e.target)}))},standalone:!0}),t})()}}]);