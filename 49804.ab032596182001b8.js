(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[49804],{49804:(t,e,n)=>{n.r(e),n.d(e,{default:()=>k});var r,i=n(97270),o=n(16727),a=n(87742),l=n(19908),s=n(56366),u=n(7826),c=n(78568),f=n(75407),d=n(74428),h=n(36626);function g(t,e){if(1&t&&(f.j41(0,"button",5),f.EFF(1),f.k0s()),2&t){const t=e.$implicit;f.Y8G("value",t),f.R7$(1),f.SpI(" ",t," ")}}function p(t,e){if(1&t&&(f.j41(0,"tui-data-list"),f.DNE(1,g,2,2,"button",4),f.k0s()),2&t){const t=f.XpG(2);f.R7$(1),f.Y8G("ngForOf",t.filtered)}}function b(t,e){1&t&&(f.qex(0),f.DNE(1,p,2,1,"tui-data-list",3),f.bVm())}const m=function(){return[]},F=["The Midnight","FM-84","Timecop1983","GUNSHIP"];function v(t){return!/\d/.test(t)}class C{constructor(){var t;this.search="",this.tagValidator=v,this.control=new a.MJ([],(t=v,({value:e})=>(e?e.filter(t):l.Mlv).length>0?{tags:new l.MxN("Some tags are invalid")}:null))}get filtered(){return this.filterBy(this.search,this.control.value??[])}filterBy(t,e){return F.filter((n=>(0,l.Gb0)(n,t)&&!e.includes(n)))}}(r=C).ɵfac=function(t){return new(t||r)},r.ɵcmp=f.VBU({type:r,selectors:[["ng-component"]],standalone:!0,exportAs:"Example4",features:[f.aNF],decls:8,vars:12,consts:[[3,"formControl","tagValidator","tuiTextfieldLabelOutside","search","searchChange"],[4,"ngIf"],[3,"error","formControl"],[4,"tuiDataList"],["tuiOption","","type","button",3,"value",4,"ngFor","ngForOf"],["tuiOption","","type","button",3,"value"]],template:function(t,e){1&t&&(f.j41(0,"p"),f.EFF(1,"In this sample, tags with digits are invalid"),f.k0s(),f.j41(2,"tui-input-tag",0),f.bIt("searchChange",(function(t){return e.search=t})),f.EFF(3," Try it "),f.DNE(4,b,2,0,"ng-container",1),f.k0s(),f.nrm(5,"tui-error",2),f.nI1(6,"async"),f.nI1(7,"tuiFieldError")),2&t&&(f.R7$(2),f.Y8G("formControl",e.control)("tagValidator",e.tagValidator)("tuiTextfieldLabelOutside",!0)("search",e.search),f.R7$(2),f.Y8G("ngIf",e.filtered.length),f.R7$(1),f.Y8G("error",f.bMT(6,7,f.bMT(7,9,f.lJ4(11,m))))("formControl",e.control))},dependencies:[o.Jj,o.Sq,o.bT,a.X1,a.BC,a.l_,s.uEM,s.WX9,s.aOZ,s.J6n,u.bsk,c.FGh,d.Y,c.CNI,h.k],encapsulation:2,changeDetection:0}),(0,i.Cg)([l.PEb],C.prototype,"filterBy",null);const k=C}}]);