(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[43875],{43875:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v});var i=n(56366),s=n(16727),a=n(75407),o=n(87742),l=n(42719),u=n(19908),c=n(78568),d=n(59996),r=n(56193),m=n(18331),p=n(7740),g=n(21154),h=n(68114),b=n(17888),f=n(36626),k=n(25751);function F(t,e){if(1&t&&a.nrm(0,"tui-data-list-wrapper",8),2&t){const t=a.XpG();a.Y8G("items",t.items)}}function x(t,e){1&t&&(a.j41(0,"div",9)(1,"p"),a.EFF(2,"This one is a template dialog"),a.k0s()())}let M=(()=>{var t;class e{constructor(){this.dialogs=(0,a.WQX)(i.wXC),this.value=null,this.name="",this.items=[10,50,100],this.context=(0,d.Dm)()}get hasValue(){return null!==this.value}get data(){return this.context.data}submit(){null!==this.value&&this.context.completeWith(this.value)}showDialog(t){this.dialogs.open(t,{dismissible:!0}).subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=a.VBU({type:t,selectors:[["ng-component"]],standalone:!0,features:[a.aNF],decls:19,vars:12,consts:[[1,"text"],["tuiAutoFocus","","tuiTextfieldSize","m",3,"ngModel","ngModelChange"],["tuiTextfieldSize","m",1,"tui-space_top-3","tui-space_bottom-5",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["tuiSlider","","type","range",1,"tui-space_bottom-5",3,"max","ngModel"],["size","m","tuiButton","","type","button",3,"disabled","click"],["size","m","tuiButton","","type","button",3,"click"],["template",""],[3,"items"],[1,"dialog"]],template:function(t,e){if(1&t){const t=a.RV6();a.j41(0,"p",0),a.EFF(1," Your balance: "),a.j41(2,"span"),a.EFF(3),a.nI1(4,"async"),a.nI1(5,"tuiAmount"),a.k0s()(),a.j41(6,"tui-input",1),a.bIt("ngModelChange",(function(t){return e.name=t})),a.EFF(7," Type a name\n"),a.k0s(),a.j41(8,"tui-select",2),a.bIt("ngModelChange",(function(t){return e.value=t})),a.EFF(9," Select a sum "),a.DNE(10,F,1,1,"tui-data-list-wrapper",3),a.k0s(),a.nrm(11,"input",4),a.j41(12,"button",5),a.bIt("click",(function(){return e.submit()})),a.EFF(13," Submit\n"),a.k0s(),a.j41(14,"p")(15,"button",6),a.bIt("click",(function(){a.eBV(t);const n=a.sdS(18);return a.Njj(e.showDialog(n))})),a.EFF(16," Show one more dialog "),a.k0s()(),a.DNE(17,x,3,0,"ng-template",null,7,a.C5r)}2&t&&(a.R7$(3),a.JRh(a.bMT(4,7,a.i5U(5,9,e.data,"RUB"))),a.R7$(3),a.Y8G("ngModel",e.name),a.R7$(2),a.Y8G("tuiTextfieldLabelOutside",!0)("ngModel",e.value),a.R7$(3),a.Y8G("max",10)("ngModel",5),a.R7$(1),a.Y8G("disabled",!e.hasValue))},dependencies:[s.Jj,o.YN,o.me,o.MR,o.BC,o.vS,l.fT,u.s8y,i.paf,r.dfP,m.WX,c.ziW,p.m,g.W,c.pgk,h.E,b.w,r.xbn,i.TB_,c.CNI,f.k,k.G],styles:["[_nghost-%COMP%]{display:block}.heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-3);margin:0 0 1.5rem}.text[_ngcontent-%COMP%]{margin:0 0 .75rem}"],changeDetection:0}),e})();const v=(()=>{var t;class e{constructor(){this.dialog=(0,i.$V3)(M,{dismissible:!0,label:"Heading"})}showDialog(){this.dialog(237).subscribe({next:t=>{console.info(`Dialog emitted data = ${t}`)},complete:()=>{console.info("Dialog closed")}})}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=a.VBU({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"Example2",features:[a.aNF],decls:2,vars:0,consts:[["size","m","tuiButton","","type","button",3,"click"]],template:function(t,e){1&t&&(a.j41(0,"button",0),a.bIt("click",(function(){return e.showDialog()})),a.EFF(1," Show\n"),a.k0s())},dependencies:[i.paf],encapsulation:2,changeDetection:0}),e})()}}]);