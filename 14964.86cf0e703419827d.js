(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[14964],{14964:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var n=i(75407),c=i(87742),p=i(33269),a=i(7287),o=i(95191);function s(e,t){if(1&e){const e=n.RV6();n.j41(0,"label",5),n.EFF(1),n.j41(2,"input",6),n.bIt("ngModelChange",(function(t){const i=n.eBV(e).$implicit,c=n.XpG();return n.Njj(c.checked[i]=t)})),n.k0s()()}if(2&e){const e=t.$implicit,i=n.XpG();n.R7$(1),n.SpI(" Checkbox ",e+1," "),n.R7$(1),n.Y8G("ngModel",i.checked[e])}}function l(e,t){if(1&e&&(n.j41(0,"label",5),n.EFF(1),n.nrm(2,"input",7),n.k0s()),2&e){const e=t.$implicit;n.R7$(1),n.SpI(" Radio ",e+1," "),n.R7$(1),n.Y8G("value",e)}}function u(e,t){if(1&e){const e=n.RV6();n.j41(0,"label",8)(1,"input",9),n.bIt("ngModelChange",(function(t){const i=n.eBV(e).$implicit,c=n.XpG();return n.Njj(c.checked[i]=t)})),n.k0s(),n.EFF(2),n.k0s()}if(2&e){const e=t.$implicit,i=n.XpG();n.R7$(1),n.Y8G("ngModel",i.checked[e]),n.R7$(1),n.SpI(" Label ",e+1," ")}}function h(e,t){if(1&e){const e=n.RV6();n.j41(0,"label",10)(1,"input",11),n.bIt("ngModelChange",(function(t){const i=n.eBV(e).$implicit,c=n.XpG();return n.Njj(c.checked[i]=t)})),n.k0s(),n.EFF(2),n.k0s()}if(2&e){const e=t.$implicit,i=n.XpG();n.Y8G("appearance",i.checked[e]?"accent":"neutral"),n.R7$(1),n.Y8G("ngModel",i.checked[e]),n.R7$(1),n.SpI(" Label ",e+1," ")}}function r(e,t){if(1&e){const e=n.RV6();n.j41(0,"button",12),n.bIt("click",(function(){const t=n.eBV(e).$implicit,i=n.XpG();return n.Njj(i.onChip(t))})),n.EFF(1),n.j41(2,"button",13),n.bIt("click.stop",(function(){const t=n.eBV(e).$implicit,i=n.XpG();return n.Njj(i.onX(t))})),n.EFF(3," Remove "),n.k0s()()}if(2&e){const e=t.$implicit;n.R7$(1),n.SpI(" Button ",e+1," ")}}function k(e,t){if(1&e){const e=n.RV6();n.j41(0,"tui-chip",14),n.EFF(1),n.j41(2,"input",15),n.bIt("ngModelChange",(function(t){const i=n.eBV(e).$implicit,c=n.XpG();return n.Njj(c.values[i]=t)})),n.k0s()()}if(2&e){const e=t.$implicit,i=n.XpG();n.xc7("color","transparent"),n.R7$(1),n.SpI(" ",i.values[e]," "),n.R7$(1),n.Y8G("ngModel",i.values[e])}}const d=(()=>{var e;class t{constructor(){this.alerts=(0,n.WQX)(a.QJZ),this.checked=[!0,!1,!0],this.values=["test","Some text","WOW!"]}onChip(e){this.alerts.open(`Clicked chip ${e+1}`).subscribe()}onX(e){this.alerts.open(`Removed chip ${e+1}`,{appearance:"error"}).subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=n.VBU({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"Example3",features:[n.aNF],decls:24,vars:6,consts:[["appearance","","tuiChip","",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["appearance","whiteblock","tuiChip","",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["tuiChip","",3,"appearance",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["tuiChip","","type","button",3,"click",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["appearance","",3,"color",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["appearance","","tuiChip",""],["appearance","whiteblock","tuiChip","","type","checkbox",3,"ngModel","ngModelChange"],["appearance","whiteblock","name","radio","tuiChip","","type","radio",3,"value"],["appearance","whiteblock","tuiChip",""],["tuiCheckbox","","type","checkbox",3,"ngModel","ngModelChange"],["tuiChip","",3,"appearance"],["hidden","","type","checkbox",3,"ngModel","ngModelChange"],["tuiChip","","type","button",3,"click"],["iconStart","@tui.x","tuiIconButton","","type","button",3,"click.stop"],["appearance",""],["tuiChip","",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(n.j41(0,"h3"),n.EFF(1,"Checkbox"),n.k0s(),n.j41(2,"section"),n.DNE(3,s,3,2,"label",0),n.k0s(),n.j41(4,"h3"),n.EFF(5,"Radio"),n.k0s(),n.j41(6,"section"),n.DNE(7,l,3,2,"label",0),n.k0s(),n.j41(8,"h3"),n.EFF(9,"Label whiteblock"),n.k0s(),n.j41(10,"section"),n.DNE(11,u,3,2,"label",1),n.k0s(),n.j41(12,"h3"),n.EFF(13,"Label accent"),n.k0s(),n.j41(14,"section"),n.DNE(15,h,3,3,"label",2),n.k0s(),n.j41(16,"h3"),n.EFF(17,"Button"),n.k0s(),n.j41(18,"section"),n.DNE(19,r,4,1,"button",3),n.k0s(),n.j41(20,"h3"),n.EFF(21,"Input"),n.k0s(),n.j41(22,"section"),n.DNE(23,k,3,4,"tui-chip",4),n.k0s()),2&e&&(n.R7$(3),n.Y8G("tuiRepeatTimesOf",t.checked.length),n.R7$(4),n.Y8G("tuiRepeatTimesOf",3),n.R7$(4),n.Y8G("tuiRepeatTimesOf",t.checked.length),n.R7$(4),n.Y8G("tuiRepeatTimesOf",t.checked.length),n.R7$(4),n.Y8G("tuiRepeatTimesOf",3),n.R7$(4),n.Y8G("tuiRepeatTimesOf",t.values.length))},dependencies:[c.YN,c.me,c.Zm,c.BC,c.vS,a.paf,o.GYS,o.Ls0,p.C0w],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}h3[_ngcontent-%COMP%]{margin:0}section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}"],changeDetection:0}),t})()}}]);