(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[94700],{94700:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var i=n(16727),c=n(87742),o=n(56366),s=n(78568),m=n(75407),a=n(3358),u=n(69468),d=n(8865),r=n(88354);function I(t,e){if(1&t){const t=m.RV6();m.j41(0,"button",5),m.bIt("keydown.delete",(function(){m.eBV(t);const e=m.XpG().$implicit,n=m.XpG();return m.Njj(n.remove(e))})),m.EFF(1),m.j41(2,"tui-icon",6),m.bIt("click.stop",(function(){m.eBV(t);const e=m.XpG().$implicit,n=m.XpG();return m.Njj(n.remove(e))})),m.k0s()()}if(2&t){const t=m.XpG().$implicit;m.R7$(1),m.SpI(" ",t," "),m.R7$(1),m.xc7("font-size",1,"rem")}}function p(t,e){1&t&&(m.qex(0),m.DNE(1,I,3,3,"button",4),m.bVm())}const l=(()=>{var t;class e{constructor(){this.open=!1,this.activeItemIndex=0,this.items=Array.from({length:5},((t,e)=>`Item #${e}`))}add(){this.items=this.items.concat(`Item #${Date.now()}`)}remove(t){const e=this.items.indexOf(t);this.items=this.items.filter((e=>e!==t)),e<=this.activeItemIndex&&(this.activeItemIndex=Math.max(this.activeItemIndex-1,0))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=m.VBU({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"Example5",features:[m.aNF],decls:8,vars:8,consts:[["size","m",3,"itemsLimit","activeItemIndex","activeItemIndexChange"],[4,"ngFor","ngForOf"],["tuiButton","","type","button",3,"click"],["decimal","never",1,"tui-space_top-4",3,"max","min","step","ngModel","ngModelChange"],["tuiTab","","type","button",3,"keydown.delete",4,"tuiItem"],["tuiTab","","type","button",3,"keydown.delete"],["icon","@tui.x",1,"tui-space_left-2",3,"click.stop"]],template:function(t,e){1&t&&(m.j41(0,"tui-tabs-with-more",0),m.bIt("activeItemIndexChange",(function(t){return e.activeItemIndex=t})),m.DNE(1,p,2,0,"ng-container",1),m.k0s(),m.j41(2,"p"),m.EFF(3),m.k0s(),m.j41(4,"button",2),m.bIt("click",(function(){return e.add()})),m.EFF(5," Add one more\n"),m.k0s(),m.j41(6,"tui-input-number",3),m.bIt("ngModelChange",(function(t){return e.activeItemIndex=t})),m.EFF(7," activeItemIndex\n"),m.k0s()),2&t&&(m.Y8G("itemsLimit",3)("activeItemIndex",e.activeItemIndex),m.R7$(1),m.Y8G("ngForOf",e.items),m.R7$(2),m.JRh(e.items[e.activeItemIndex]),m.R7$(3),m.Y8G("max",4)("min",0)("step",1)("ngModel",e.activeItemIndex))},dependencies:[c.YN,c.BC,c.vS,i.Sq,o.paf,o.qo5,s.O9v,a.Z,u.x,d.K,r.e2z,r.GqK],encapsulation:2,changeDetection:0}),e})()}}]);