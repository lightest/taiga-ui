(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[63275],{63275:(t,e,n)=>{n.r(e),n.d(e,{default:()=>_});var i=n(16727),o=n(87742),a=n(46654),s=n(33269),r=n(7287),u=n(95191),l=n(78568),c=n(61204),h=n(80736),d=n(60149),p=n(54148),g=n(25358),m=n(64204),b=n(14759),f=n(55514),$=n(70948),G=n(44046),C=n(75407),M=n(7740),j=n(21154),k=n(3358),T=n(69468),y=n(96692),S=n(25751);function F(t,e){if(1&t){const t=C.RV6();C.j41(0,"tui-reorder",10),C.bIt("itemsChange",(function(e){C.eBV(t);const n=C.XpG();return C.Njj(n.initial=e)}))("enabledChange",(function(e){C.eBV(t);const n=C.XpG();return C.Njj(n.onEnabled(e))})),C.k0s()}if(2&t){const t=C.XpG();C.Y8G("enabled",t.enabled)("items",t.initial)}}function E(t,e){1&t&&(C.j41(0,"th",19),C.EFF(1," Name "),C.k0s())}function J(t,e){if(1&t&&(C.j41(0,"th",20),C.EFF(1," Date of Birth "),C.k0s()),2&t){const t=C.XpG(2);C.Y8G("tuiSortable",t.dob)}}function D(t,e){1&t&&(C.j41(0,"th",21),C.EFF(1," Age "),C.k0s()),2&t&&C.Y8G("requiredSort",!0)}function N(t,e){if(1&t&&(C.j41(0,"td",26),C.EFF(1),C.k0s()),2&t){const t=C.XpG().$implicit,e=C.XpG(3);C.AVh("match",e.isMatch(t.name)),C.R7$(1),C.SpI(" ",t.name," ")}}function Y(t,e){if(1&t&&(C.j41(0,"td",26),C.EFF(1),C.k0s()),2&t){const t=C.XpG().$implicit,e=C.XpG(3);C.AVh("match",e.isMatch(t.dob)),C.R7$(1),C.SpI(" ",t.dob," ")}}function R(t,e){if(1&t&&(C.j41(0,"td",26),C.EFF(1),C.k0s()),2&t){const t=C.XpG().$implicit,e=C.XpG(3);C.AVh("match",e.isMatch(e.getAge(t))),C.R7$(1),C.SpI(" ",e.getAge(t)," ")}}function B(t,e){1&t&&(C.j41(0,"tr",24),C.DNE(1,N,2,3,"td",25),C.DNE(2,Y,2,3,"td",25),C.DNE(3,R,2,3,"td",25),C.k0s()),2&t&&(C.R7$(1),C.Y8G("tuiCell","name"),C.R7$(1),C.Y8G("tuiCell","dob"),C.R7$(1),C.Y8G("tuiCell","age"))}function I(t,e){if(1&t&&(C.j41(0,"tbody",22),C.DNE(1,B,4,3,"tr",23),C.k0s()),2&t){const t=e.tuiLet;C.Y8G("data",t),C.R7$(1),C.Y8G("ngForOf",t)}}function x(t,e){if(1&t){const t=C.RV6();C.j41(0,"table",11),C.bIt("directionChange",(function(e){C.eBV(t);const n=C.XpG();return C.Njj(n.direction$.next(e))}))("tuiSortByChange",(function(e){C.eBV(t);const n=C.XpG();return C.Njj(n.sorter$.next(e))})),C.nI1(1,"async"),C.nI1(2,"async"),C.j41(3,"thead")(4,"tr",12),C.DNE(5,E,2,0,"th",13),C.DNE(6,J,2,1,"th",14),C.DNE(7,D,2,1,"th",15),C.k0s()(),C.DNE(8,I,2,2,"tbody",16),C.nI1(9,"tuiTableSort"),C.j41(10,"tfoot")(11,"tr")(12,"td",17)(13,"tui-table-pagination",18),C.bIt("paginationChange",(function(e){C.eBV(t);const n=C.XpG();return C.Njj(n.onPagination(e))})),C.nI1(14,"async"),C.nI1(15,"async"),C.k0s()()()()()}if(2&t){const t=e.ngIf,n=C.XpG();C.Y8G("columns",n.columns)("direction",C.bMT(1,10,n.direction$)||1)("tuiSortBy",C.bMT(2,12,n.sorter$)),C.R7$(5),C.Y8G("tuiHead","name"),C.R7$(1),C.Y8G("tuiHead","dob"),C.R7$(1),C.Y8G("tuiHead","age"),C.R7$(1),C.Y8G("tuiLet",C.bMT(9,14,t)),C.R7$(4),C.Y8G("colSpan",n.columns.length),C.R7$(1),C.Y8G("page",C.bMT(14,16,n.page$)||0)("total",C.bMT(15,18,n.total$)||0)}}const A=function(){return{precision:0}},w=s.JKS.currentLocal(),z=["John","Jane","Jack","Jill","James","Joan","Jim","Julia","Joe","Julia"],X=["Smith","West","Brown","Jones","Davis","Miller","Johnson","Jackson","Williams","Wilson"],O=Array.from({length:300},(()=>({name:`${X[Math.floor(10*Math.random())]}, ${z[Math.floor(10*Math.random())]}`,dob:w.append({day:-Math.floor(4e3*Math.random())-7500})}))),v={Name:"name",Age:"age","Date of Birth":"dob"};function V({dob:t}){const e=w.year-t.year,n=w.month-t.month,i=w.day-t.day;return e+(0,s.Zix)(n>0||!n&&i>9)}const _=(()=>{var t;class e{constructor(){this.size$=new c.t(10),this.page$=new c.t(0),this.direction$=new c.t(-1),this.sorter$=new c.t("name"),this.minAge=new o.MJ(21),this.minAge$=(0,s.lD9)(this.minAge).pipe((0,h.B)(1e3),(0,d.M)((()=>this.page$.next(0)))),this.request$=(0,p.z)([this.sorter$,this.direction$,this.page$,this.size$,this.minAge$]).pipe((0,h.B)(0),(0,g.n)((t=>this.getData(...t).pipe((0,m.Z)(null)))),(0,b.u)()),this.initial=["Name","Date of Birth","Age"],this.enabled=this.initial,this.columns=["name","dob","age"],this.dob=!1,this.search="",this.loading$=this.request$.pipe((0,f.T)(s._sG)),this.total$=this.request$.pipe((0,$.p)(s.Ajz),(0,f.T)((({length:t})=>t)),(0,m.Z)(1)),this.data$=this.request$.pipe((0,$.p)(s.Ajz),(0,f.T)((t=>t.filter(s.Ajz))),(0,m.Z)([])),this.getAge=V}onEnabled(t){this.enabled=t,this.columns=this.initial.filter((e=>t.includes(e))).map((t=>v[t]??""))}onDirection(t){this.direction$.next(t)}onPagination({page:t,size:e}){this.page$.next(t),this.size$.next(e)}isMatch(t){return!!this.search&&(0,s.Gb0)(t,this.search)}getData(t,e,n,i,o){console.info("Making a request");const a=n*i,r=a+i,u=[...O].sort(function(t,e){return(n,i)=>"age"===t?e*(0,s._JU)(V(n),V(i)):e*(0,s._JU)(n[t],i[t])}(t,e)).filter((t=>V(t)>=o)).map(((t,e)=>e>=a&&e<r?t:null));return(0,G.O)(3e3).pipe((0,f.T)((()=>u)))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=C.VBU({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"Example4",features:[C.aNF],decls:17,vars:14,consts:[["tuiTextfieldSize","m",1,"filters"],[1,"input",3,"tuiTextfieldCleaner","ngModel","ngModelChange"],[3,"formControl","tuiNumberFormat"],[1,"filters"],["tuiLabel",""],["tuiCheckbox","","type","checkbox",3,"ngModel","ngModelChange"],["size","m","tuiButton","","tuiChevron","","tuiDropdownOpen","","type","button",3,"tuiDropdown"],["dropdown",""],[3,"overlay","showLoader"],["tuiTable","","class","table",3,"columns","direction","tuiSortBy","directionChange","tuiSortByChange",4,"ngIf"],[1,"columns",3,"enabled","items","itemsChange","enabledChange"],["tuiTable","",1,"table",3,"columns","direction","tuiSortBy","directionChange","tuiSortByChange"],["tuiThGroup",""],["tuiSortable","","tuiTh","",4,"tuiHead"],["tuiTh","",3,"tuiSortable",4,"tuiHead"],["tuiSortable","","tuiTh","",3,"requiredSort",4,"tuiHead"],["tuiTbody","",3,"data",4,"tuiLet"],[3,"colSpan"],[1,"tui-space_top-2",3,"page","total","paginationChange"],["tuiSortable","","tuiTh",""],["tuiTh","",3,"tuiSortable"],["tuiSortable","","tuiTh","",3,"requiredSort"],["tuiTbody","",3,"data"],["tuiTr","",4,"ngFor","ngForOf"],["tuiTr",""],["tuiTd","",3,"match",4,"tuiCell"],["tuiTd",""]],template:function(t,e){if(1&t&&(C.j41(0,"p",0)(1,"tui-input",1),C.bIt("ngModelChange",(function(t){return e.search=t})),C.EFF(2," Find on page "),C.k0s(),C.j41(3,"tui-input-number",2),C.EFF(4," Minimum age "),C.k0s()(),C.j41(5,"p",3)(6,"label",4)(7,"input",5),C.bIt("ngModelChange",(function(t){return e.dob=t})),C.k0s(),C.EFF(8," Enable sorting by DOB "),C.k0s(),C.j41(9,"button",6),C.EFF(10," Columns "),C.k0s(),C.DNE(11,F,1,2,"ng-template",null,7,C.C5r),C.k0s(),C.j41(13,"tui-loader",8),C.nI1(14,"async"),C.DNE(15,x,16,20,"table",9),C.nI1(16,"async"),C.k0s()),2&t){const t=C.sdS(12);C.R7$(1),C.Y8G("tuiTextfieldCleaner",!0)("ngModel",e.search),C.R7$(2),C.Y8G("formControl",e.minAge)("tuiNumberFormat",C.lJ4(13,A)),C.R7$(4),C.Y8G("ngModel",e.dob),C.R7$(2),C.Y8G("tuiDropdown",t),C.R7$(4),C.Y8G("overlay",!0)("showLoader",!!C.bMT(14,9,e.loading$)),C.R7$(2),C.Y8G("ngIf",C.bMT(16,11,e.data$))}},dependencies:[i.Jj,o.YN,o.Zm,o.BC,o.vS,i.Sq,i.bT,o.X1,o.l_,r.paf,u.GYS,u.kdZ,r.pUb,r.iEg,l.ziW,M.m,j.W,l.O9v,k.Z,T.x,r.zRW,s.cOJ,r.apU,r.$0J,a.sJ,a.gJ,a.hO,a.ke,a.z2,a.z8,a.zv,a.nS,a.JO,a.i7,a.Zx,a.Jx,a.bI,l.CNI,y.n,S.G],styles:[".table[_ngcontent-%COMP%]{inline-size:100%}.filters[_ngcontent-%COMP%]{display:flex;gap:1rem;white-space:nowrap;align-items:center}.input[_ngcontent-%COMP%]{flex:1}.columns[_ngcontent-%COMP%]{inline-size:10.625rem}.match[_ngcontent-%COMP%]{background:var(--tui-service-selection-background)}"],changeDetection:0}),e})()}}]);