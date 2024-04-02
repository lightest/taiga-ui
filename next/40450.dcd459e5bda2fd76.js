(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[40450],{40450:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiPureModule:()=>v});var o,c,i=n(76733),u=n(72133),a=n(42932),s=n(87253),r=n(80506),p=n(20755),l=n(36877),d=n(43894),h=n(17894),f=n(97967),m=n(84911),g=n(2697),Z=n(13117),x=n(93815),b=n(5824);function T(t,e){if(1&t&&(p.TgZ(0,"div",1),p._uU(1),p.ALo(2,"json"),p.qZA()),2&t){const t=p.oxw();p.xp6(1),p.hij(" Result: ",p.lcZ(2,1,t.calculate(t.counter,t.text)),"\n")}}class w{constructor(){this.text="",this.show=!1,this.counter={count:0}}calculate(t,e){return t.count++,{text:e}}}function _(t,e){if(1&t&&(p.TgZ(0,"div",2),p._uU(1),p.qZA()),2&t){const t=p.oxw();p.xp6(1),p.hij(" fibonacci(42) = ",t.fibonacci42,"\n")}}(o=w).ɵfac=function(t){return new(t||o)},o.ɵcmp=p.Xpm({type:o,selectors:[["example-tui-pure-function"]],decls:7,vars:3,consts:[[3,"ngModel","ngModelChange"],[1,"tui-space_top-2"],["class","tui-space_top-2",4,"ngIf"],["tuiButton","","type","button",1,"tui-space_top-2",3,"click"]],template:function(t,e){1&t&&(p.TgZ(0,"tui-input",0),p.NdJ("ngModelChange",(function(t){return e.text=t})),p._uU(1,"Type a text to start computing"),p.qZA(),p.TgZ(2,"div",1),p._uU(3),p.qZA(),p.YNc(4,T,3,3,"div",2),p.TgZ(5,"button",3),p.NdJ("click",(function(){return e.show=!e.show})),p._uU(6," Show/hide\n"),p.qZA()),2&t&&(p.Q6J("ngModel",e.text),p.xp6(3),p.hij("Called times: ",e.counter.count,""),p.xp6(1),p.Q6J("ngIf",e.show))},dependencies:[i.O5,u.JJ,u.On,Z.K,x.w,b.m,i.Ts],encapsulation:2,changeDetection:0}),(0,m.gn)([g.tuiPure],w.prototype,"calculate",null);class A{constructor(){this.show=!1}get fibonacci42(){return this.fibonacci(42)}fibonacci(t){return t<=1?t:this.fibonacci(t-1)+this.fibonacci(t-2)}}function q(t,e){if(1&t&&(p.TgZ(0,"div",3),p._uU(1,"Decorator for memoization of pure methods and getters"),p.qZA(),p.TgZ(2,"p"),p._uU(3," Decorator can help to cache result of methods or getters that can be computed once in the first call. The next calls to getter will just use computed static value. "),p.qZA(),p.TgZ(4,"p"),p._uU(5," If you use decorator with methods, it does not compute the result again if arguments did not change after the last call (concept similar to Angular pure pipes) "),p.qZA(),p.TgZ(6,"tui-doc-example",4),p._UZ(7,"example-tui-pure-getter"),p.qZA(),p.TgZ(8,"tui-doc-example",5),p._UZ(9,"example-tui-pure-function"),p.qZA()),2&t){const t=p.oxw();p.xp6(6),p.Q6J("content",t.example1),p.xp6(2),p.Q6J("content",t.example2)}}function U(t,e){if(1&t&&(p.TgZ(0,"ol",6)(1,"li")(2,"p"),p._uU(3," Add "),p.TgZ(4,"code"),p._uU(5,"@tuiPure"),p.qZA(),p._uU(6," decorator for your method or getter: "),p.qZA(),p._UZ(7,"tui-doc-code",7),p.qZA()()),2&t){const t=p.oxw();p.xp6(7),p.Q6J("code",t.exampleDecorator)}}(c=A).ɵfac=function(t){return new(t||c)},c.ɵcmp=p.Xpm({type:c,selectors:[["example-tui-pure-getter"]],decls:3,vars:1,consts:[["class","tui-space_bottom-2",4,"ngIf"],["tuiButton","","type","button",3,"click"],[1,"tui-space_bottom-2"]],template:function(t,e){1&t&&(p.YNc(0,_,2,1,"div",0),p.TgZ(1,"button",1),p.NdJ("click",(function(){return e.show=!e.show})),p._uU(2," Show/hide\n"),p.qZA()),2&t&&p.Q6J("ngIf",e.show)},dependencies:[i.O5,b.m],encapsulation:2,changeDetection:0}),(0,m.gn)([g.tuiPure],A.prototype,"fibonacci42",null);let y=(()=>{var t;class e{constructor(){this.exampleDecorator=n.e(26021).then(n.t.bind(n,26021,17)),this.example1={TypeScript:n.e(17007).then(n.t.bind(n,17007,17)),HTML:n.e(1778).then(n.t.bind(n,1778,17))},this.example2={TypeScript:n.e(74777).then(n.t.bind(n,74777,17)),HTML:n.e(51676).then(n.t.bind(n,51676,17))}}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["example-tui-pure"]],decls:3,vars:0,consts:[["header","Pure","package","CDK","path","cdk/decorators/pure.ts"],["pageTab",""],["pageTab","Setup"],[1,"tui-space_bottom-3"],["id","getter","heading","Getter",3,"content"],["id","function","heading","Function",3,"content"],[1,"b-demo-steps"],["filename","myClass.component.ts",3,"code"]],template:function(t,e){1&t&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,q,10,2,"ng-template",1),p.YNc(2,U,8,1,"ng-template",2),p.qZA())},dependencies:[l.c,d.q,h.n,f.f,w,A],encapsulation:2,changeDetection:0}),e})(),v=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=p.oAB({type:t}),t.ɵinj=p.cJS({imports:[i.ez,u.u5,r.TuiInputModule,s.fV,a.Bz.forChild((0,s.Ve)(y))]}),e})()}}]);