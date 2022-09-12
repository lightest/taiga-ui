"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[44844],{44844:(St,M,r)=>{r.r(M),r.d(M,{ExampleTuiLineDaysChartModule:()=>yt});var g=r(12057),y=r(23738),v=r(12021),D=r(50179),x=r(78697),_=r(36692),S=r(90987),O=r(91068),C=r(88002),t=r(74788),I=r(88331),Y=r(37159),Z=r(57068),h=r(64762),N=r(92483),R=r(48706),A=r(70390),L=r(87748);function J(n,o){if(1&n&&(t.TgZ(0,"tui-axes",3),t._UZ(1,"tui-line-days-chart",4),t.ALo(2,"async"),t.qZA()),2&n){const e=o.ngIf,a=t.oxw();t.Q6J("verticalLines",e.length)("horizontalLines",4)("axisXLabels",e),t.xp6(1),t.Q6J("height",200)("value",a.value)("yStringify",a.yStringify)("xStringify",t.lcZ(2,7,a.xStringify$))}}class d{constructor(o){this.months$=o,this.range=new _.TuiDayRange(_.TuiDay.currentLocal(),_.TuiDay.currentLocal().append({year:1})),this.maxLength={month:12},this.xStringify$=this.months$.pipe((0,C.U)(e=>({month:a,day:i})=>`${e[a]}, ${i}`)),this.yStringify=e=>`${(10*e).toLocaleString("en-US",{maximumFractionDigits:0})} $`}get value(){return this.computeValue(this.range)}computeLabels$({from:o,to:e}){return this.months$.pipe((0,C.U)(a=>Array.from({length:_.TuiMonth.lengthBetween(o,e)+1},(i,l)=>a[o.append({month:l}).month])))}computeValue({from:o,to:e}){return new Array(_.TuiDay.lengthBetween(o,e)+1).fill(0).reduce((a,i,l)=>[...a,[o.append({day:l}),(l?a[l-1][1]:100)+10*Math.random()-5]],[])}}d.\u0275fac=function(o){return new(o||d)(t.Y36(S.TUI_MONTHS))},d.\u0275cmp=t.Xpm({type:d,selectors:[["tui-line-days-chart-example-1"]],decls:5,vars:5,consts:[[1,"b-form"],[3,"maxLength","ngModel","ngModelChange"],["class","axes",3,"verticalLines","horizontalLines","axisXLabels",4,"ngIf"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels"],[1,"chart",3,"height","value","yStringify","xStringify"]],template:function(o,e){1&o&&(t.TgZ(0,"p",0),t.TgZ(1,"tui-input-date-range",1),t.NdJ("ngModelChange",function(i){return e.range=i}),t._uU(2," Range "),t.qZA(),t.qZA(),t.YNc(3,J,3,9,"tui-axes",2),t.ALo(4,"async")),2&o&&(t.xp6(1),t.Q6J("maxLength",e.maxLength)("ngModel",e.range),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,3,e.computeLabels$(e.range))))},directives:[N.H,R.d,y.JJ,y.On,g.O5,A.v,L.r],pipes:[g.Ov],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;color:#bc71c9}"],changeDetection:0}),(0,h.gn)([_.tuiPure],d.prototype,"computeLabels$",null),(0,h.gn)([_.tuiPure],d.prototype,"computeValue",null);var V=r(79121),U=r(69775),b=r(19288),X=r(58413),f=r(25917);let G=(()=>{class n{constructor(e){this.months$=e}transform({from:e,to:a}){const i=_.TuiDay.lengthBetween(e,a);if(i>90)return this.months$.pipe((0,C.U)(m=>Array.from({length:_.TuiMonth.lengthBetween(e,a)+1},(T,E)=>m[e.append({month:E}).month])));const l=Array.from({length:i},(m,T)=>e.append({day:T})),u=function(n){return n.filter(o=>!o.dayOfWeek()).map(String)}(l),p=l.map(String);return(0,f.of)(i>60?F(u):i>14?u:i>7?F(p):p)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(S.TUI_MONTHS,16))},n.\u0275pipe=t.Yjl({name:"labels",type:n,pure:!0}),n})();function F(n){return n.filter((o,e)=>!(e%2))}var z=r(47305),w=r(35271);function B(n,o){if(1&n&&(t.TgZ(0,"span",8),t.TgZ(1,"small",9),t._uU(2),t.qZA(),t.qZA()),2&n){const e=o.index;t.xp6(2),t.hij("Chart ",e+1,"")}}function W(n,o){if(1&n&&(t._UZ(0,"tui-line-days-chart",14),t.ALo(1,"tuiFilter")),2&n){const e=o.$implicit,a=t.oxw(3);t.Q6J("height",200)("value",t.Dn7(1,2,e,a.filter,a.range))}}function j(n,o){if(1&n&&(t.ynx(0),t.YNc(1,W,2,6,"tui-line-days-chart",13),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.days)}}function K(n,o){if(1&n&&(t._UZ(0,"tui-line-chart",16),t.ALo(1,"tuiMapper"),t.ALo(2,"tuiFilter")),2&n){const e=o.$implicit,a=t.oxw(3);t.Q6J("height",200)("width",a.getWidth(a.range))("value",t.Dn7(1,3,t.Dn7(2,7,e,a.filter,a.range),a.toNumbers,a.range))}}function q(n,o){if(1&n&&t.YNc(0,K,3,11,"tui-line-chart",15),2&n){const e=t.oxw(2);t.Q6J("ngForOf",e.days)}}function k(n,o){if(1&n&&(t.TgZ(0,"tui-axes",10),t.YNc(1,j,2,1,"ng-container",11),t.YNc(2,q,1,1,"ng-template",null,12,t.W1O),t.qZA()),2&n){const e=o.ngIf,a=t.MAs(3),i=t.oxw(),l=t.MAs(14);t.Q6J("verticalLines",e.length)("horizontalLines",4)("axisXLabels",e)("tuiLineChartHint",l),t.xp6(1),t.Q6J("ngIf",i.getWidth(i.show)>90)("ngIfElse",a)}}function tt(n,o){if(1&n&&(t.TgZ(0,"div",8),t.TgZ(1,"span",18),t._uU(2),t.qZA(),t.qZA()),2&n){const e=o.$implicit;t.xp6(2),t.hij("$",e[1].toFixed(0),"")}}function et(n,o){if(1&n&&(t.TgZ(0,"div",17),t.TgZ(1,"strong"),t._uU(2),t.qZA(),t.qZA(),t.TgZ(3,"div"),t.YNc(4,tt,3,1,"div",5),t.qZA()),2&n){const e=o.$implicit,a=t.oxw();t.xp6(2),t.Oqu(a.getDate(e[0][0],a.range.from)),t.xp6(2),t.Q6J("ngForOf",e)}}class c{constructor(){this.data=new _.TuiDayRange(_.TuiDay.currentLocal(),_.TuiDay.currentLocal().append({month:5})),this.show=this.data,this.days=this.computeArrays(this.data),this.maxLength={month:6},this.filter=([o],{from:e,to:a})=>o.daySameOrAfter(e)&&o.daySameOrBefore(a),this.toNumbers=(o,{from:e})=>o.map(([a,i])=>[_.TuiDay.lengthBetween(e,a),i])}get range(){return this.computeRange(this.show)}getWidth({from:o,to:e}){return _.TuiDay.lengthBetween(o,e)}getDate(o,e){return o instanceof _.TuiDay?o:e.append({day:o})}onDataChange(o){this.days=this.computeArrays(o)}computeRange(o){const{from:e,to:a}=o,i=_.TuiDay.lengthBetween(e,a),l=e.dayOfWeek(),u=a.dayOfWeek(),p=l?e.append({day:7-l}):e,m=u?a.append({day:7-u}):a,T=_.TuiDay.lengthBetween(p,m);return i>60?new _.TuiDayRange(p,m.append({day:T%14})):i>14?new _.TuiDayRange(p,m):i>7?new _.TuiDayRange(e,a.append({day:i%2})):o}computeData({from:o,to:e},a){return new Array(_.TuiDay.lengthBetween(o,e)+1).fill(0).reduce((i,l,u)=>[...i,[o.append({day:u}),Math.max((u?i[u-1][1]:a)+10*Math.random()-5,0)]],[]).filter(([i])=>i.dayOfWeek()<5)}computeArrays(o){return[this.computeData(o,100),this.computeData(o,75),this.computeData(o,50)]}}c.\u0275fac=function(o){return new(o||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["tui-line-days-chart-example-2"]],decls:15,vars:10,consts:function(){let n;return n=$localize`:␟54790dc0dc9d3d244bf99ebbb89d1a8a62195075␟6846673182472139923:${"\ufffd#2\ufffd"}:START_TAG_CODE:TuiLineDaysChart${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is used to show data of several months to simplify working with different number of days in months
`,[n,[1,"controls"],[1,"b-form",3,"maxLength","ngModel","ngModelChange"],[1,"b-form","tui-space_left-4",3,"maxLength","ngModel","ngModelChange"],[1,"legend"],["class","item",4,"ngFor","ngForOf"],["class","axes",3,"verticalLines","horizontalLines","axisXLabels","tuiLineChartHint",4,"ngIf"],["hint",""],[1,"item"],[1,"name"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels","tuiLineChartHint"],[4,"ngIf","ngIfElse"],["line",""],["class","chart",3,"height","value",4,"ngFor","ngForOf"],[1,"chart",3,"height","value"],["class","chart",3,"height","width","value",4,"ngFor","ngForOf"],[1,"chart",3,"height","width","value"],[1,"tui-space_bottom-2"],[1,"value"]]},template:function(o,e){1&o&&(t.TgZ(0,"tui-notification"),t.tHW(1,0),t._UZ(2,"code"),t.N_p(),t.qZA(),t.TgZ(3,"p",1),t.TgZ(4,"tui-input-date-range",2),t.NdJ("ngModelChange",function(i){return e.data=i})("ngModelChange",function(i){return e.onDataChange(i)}),t._uU(5," Data "),t.qZA(),t.TgZ(6,"tui-input-date-range",3),t.NdJ("ngModelChange",function(i){return e.show=i}),t._uU(7," Visible range "),t.qZA(),t.qZA(),t.TgZ(8,"p",4),t.YNc(9,B,3,1,"span",5),t.qZA(),t.YNc(10,k,4,6,"tui-axes",6),t.ALo(11,"async"),t.ALo(12,"labels"),t.YNc(13,et,5,2,"ng-template",null,7,t.W1O)),2&o&&(t.xp6(4),t.Q6J("maxLength",e.maxLength)("ngModel",e.data),t.xp6(2),t.Q6J("maxLength",e.maxLength)("ngModel",e.show),t.xp6(3),t.Q6J("ngForOf",e.days),t.xp6(1),t.Q6J("ngIf",t.lcZ(11,6,t.lcZ(12,8,e.show))))},directives:[V.L,N.H,R.d,y.JJ,y.On,g.sg,g.O5,A.v,U.T,b.w,L.r,X.V],pipes:[g.Ov,G,z.S,w.c],styles:['.axes[_ngcontent-%COMP%]{height:12.5rem}.controls[_ngcontent-%COMP%]{display:flex}.controls[_ngcontent-%COMP%]   .b-form[_ngcontent-%COMP%]{flex:1}.legend[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.item[_ngcontent-%COMP%]{color:var(--tui-support-01);display:flex;align-items:center;margin:0 .75rem}.item[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.item[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}.item[_ngcontent-%COMP%]:before{content:"";border-bottom:.125rem solid;width:1rem;margin-right:.5rem}.name[_ngcontent-%COMP%]{color:var(--tui-text-01)}.value[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.chart[_ngcontent-%COMP%]{color:var(--tui-support-01);position:absolute;top:0;left:0;width:100%;height:100%}.chart[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.chart[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}'],changeDetection:0}),(0,h.gn)([_.tuiPure],c.prototype,"getWidth",null),(0,h.gn)([_.tuiPure],c.prototype,"getDate",null),(0,h.gn)([_.tuiPure],c.prototype,"computeRange",null),(0,h.gn)([_.tuiPure],c.prototype,"computeData",null);var nt=r(31823),ot=r(44051),at=r(17023),it=r(76349);function rt(n,o){if(1&n&&(t.TgZ(0,"p"),t.SDv(1,2),t.qZA(),t.TgZ(2,"tui-doc-example",3),t._UZ(3,"tui-line-days-chart-example-1"),t.qZA(),t.TgZ(4,"tui-doc-example",4),t._UZ(5,"tui-line-days-chart-example-2"),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("content",e.example1),t.xp6(2),t.Q6J("content",e.example2)}}function lt(n,o){1&n&&t.SDv(0,15)}function _t(n,o){1&n&&(t.tHW(0,16),t._UZ(1,"code"),t._UZ(2,"code"),t.N_p())}function ut(n,o){1&n&&t.SDv(0,17)}function st(n,o){1&n&&t.SDv(0,18)}function ct(n,o){1&n&&t.SDv(0,19)}function pt(n,o){1&n&&t.SDv(0,20)}function mt(n,o){1&n&&t.SDv(0,21)}function gt(n,o){1&n&&t.SDv(0,22)}const dt=function(){return[]};function Tt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tui-doc-demo"),t.TgZ(1,"tui-axes",5),t.ALo(2,"async"),t._UZ(3,"tui-line-days-chart",6),t.qZA(),t.qZA(),t.TgZ(4,"tui-doc-documentation"),t.YNc(5,lt,1,0,"ng-template",7),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(e),t.oxw().dots=i}),t.YNc(6,_t,3,0,"ng-template",8),t.ALo(7,"async"),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(e),t.oxw().hintContent=i}),t.YNc(8,ut,1,0,"ng-template",9),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(e),t.oxw().height=i}),t.YNc(9,st,1,0,"ng-template",10),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(e),t.oxw().y=i}),t.YNc(10,ct,1,0,"ng-template",11),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(e),t.oxw().smoothingFactor=i}),t.YNc(11,pt,1,0,"ng-template",12),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(e),t.oxw().value=i}),t.YNc(12,mt,1,0,"ng-template",13),t.ALo(13,"async"),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(e),t.oxw().xStringify=i}),t.YNc(14,gt,1,0,"ng-template",14),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(e),t.oxw().yStringify=i}),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("verticalLines",3)("horizontalLines",4)("axisXLabels",t.lcZ(2,23,e.labels$)||t.DdM(29,dt)),t.xp6(2),t.Q6J("value",e.value)("y",e.y)("height",e.height)("hintContent",e.hintContent)("xStringify",e.xStringify)("yStringify",e.yStringify)("smoothingFactor",e.smoothingFactor)("dots",e.dots),t.xp6(2),t.Q6J("documentationPropertyValue",e.dots),t.xp6(1),t.Q6J("documentationPropertyValues",t.lcZ(7,25,e.hintContentVariants$))("documentationPropertyValue",e.hintContent),t.xp6(2),t.Q6J("documentationPropertyValue",e.height),t.xp6(1),t.Q6J("documentationPropertyValue",e.y),t.xp6(1),t.Q6J("documentationPropertyValue",e.smoothingFactor),t.xp6(1),t.Q6J("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value),t.xp6(1),t.Q6J("documentationPropertyValues",t.lcZ(13,27,e.xStringifyVariants$))("documentationPropertyValue",e.xStringify),t.xp6(2),t.Q6J("documentationPropertyValues",e.yStringifyVariants)("documentationPropertyValue",e.yStringify)}}function Ct(n,o){if(1&n&&(t.TgZ(0,"ol",23),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,24),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",25),t.qZA(),t.TgZ(6,"li"),t.TgZ(7,"p"),t.SDv(8,26),t.qZA(),t._UZ(9,"tui-doc-code",27),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(5),t.Q6J("code",e.exampleModule),t.xp6(4),t.Q6J("code",e.exampleHtml)}}let ht=(()=>{class n{constructor(e){this.months$=e,this.exampleModule=r.e(83405).then(r.t.bind(r,83405,17)),this.exampleHtml=r.e(42231).then(r.t.bind(r,42231,17)),this.example1={TypeScript:r.e(18807).then(r.t.bind(r,18807,17)),HTML:r.e(23889).then(r.t.bind(r,23889,17)),LESS:r.e(43743).then(r.t.bind(r,43743,17))},this.example2={TypeScript:r.e(28904).then(r.t.bind(r,28904,17)),HTML:r.e(66161).then(r.t.bind(r,66161,17)),LESS:r.e(27918).then(r.t.bind(r,27918,17)),"pipe.ts":r.e(9361).then(r.t.bind(r,9361,17))},this.valueVariants=[new Array(91).fill(0).reduce((a,i,l)=>[...a,[new _.TuiDay(2020,0,1).append({day:l}),(l?a[l-1][1]:100)+20*Math.random()-10]],[]),[[new _.TuiDay(2020,1,10),10],[new _.TuiDay(2020,1,15),150],[new _.TuiDay(2020,1,17),10],[new _.TuiDay(2020,1,20),10],[new _.TuiDay(2020,1,25),150],[new _.TuiDay(2020,1,27),10]]],this.value=this.valueVariants[0],this.labels$=this.months$.pipe((0,C.U)(a=>Array.from({length:3},(i,l)=>a[l]))),this.yStringifyVariants=[a=>`${(10*a).toLocaleString("en-US",{maximumFractionDigits:0})} $`],this.xStringifyVariants$=this.months$.pipe((0,C.U)(a=>[({month:i,day:l})=>`${a[i]}, ${l}`])),this.hintContentVariants$=this.months$.pipe((0,C.U)(a=>["",({$implicit:i})=>`${a[i[0].month]}, ${i[0].day}\n${(10*i[1]).toLocaleString("en-US",{maximumFractionDigits:0})} $`])),this.yStringify=null,this.xStringify=null,this.hintContent="",this.dots=!1,this.smoothingFactor=0,this.y=0,this.height=200}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(S.TUI_MONTHS))},n.\u0275cmp=t.Xpm({type:n,selectors:[["example-tui-line-days-chart"]],decls:4,vars:0,consts:function(){let o,e,a,i,l,u,p,m,T,E,P,$,H;return o=$localize`:␟8b3686ee0181ab81f9ff51025cf35b0a03e625e7␟590759144044987818:Line chart but for days`,e=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,a=$localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`,i=$localize`:␟c4d83e70435953f62ccae3cbf6016420df475424␟4740076445307023096: Show dots on chart `,l=$localize`:␟bedcb3b37d5f24d2f77a8c3cb483fdf13759efd7␟6338178794566893901: Content of hint for hover. It has ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:$implicit${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: in context with a tuple ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:[TuiDay, number]${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE:`,l=t.Zx4(l),u=$localize`:␟1148b851b9d07a503fe83074185fada4c56bc932␟4329060505650601384: Axis Y range, pixel scale is 1:1 `,p=$localize`:␟f33f8b3f2cfd7ef519194cc1ae13fc8fb91fb8d7␟9084820970498059965: Start of Y axis `,m=$localize`:␟dbcff3658adbc7241a4e120d0403b9b59203cf6f␟7622132382477188848: Smoothing factor from 0 to 99 `,T=$localize`:␟2eb20b3adec45476e892d48624603eec29f04ca7␟620827304048157009: Array of data `,E=$localize`:␟a95376fd00f2c7de89ef1205191f686e9bb93ceb␟8840512580092681625: Function to stringify a value number to a string in axis X hint `,P=$localize`:␟aa03eea8f292367391947b1ee6d45d8e5fe1c884␟8439308556823064311: Function to stringify a value number to a string in axis Y hint `,$=$localize`:␟3faf4a45d660c91f821e2f11c0184ec80a25404a␟5226796676451500758: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiLineDaysChartModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,H=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","LineDaysChart","package","ADDON-CHARTS","type","components"],["pageTab",""],o,["id","base","heading",e,3,"content"],["id","complex","heading",a,3,"content"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels"],[3,"value","y","height","hintContent","xStringify","yStringify","smoothingFactor","dots"],["documentationPropertyName","dots","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hintContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","height","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","y","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","smoothingFactor","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","[TuiDay, number][]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","xStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<TuiDay> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","yStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<number> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],i,l,u,p,m,T,E,P,[1,"b-demo-steps"],$,["filename","myComponent.module.ts",3,"code"],H,["filename","myComponent.template.html",3,"code"]]},template:function(e,a){1&e&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,rt,6,2,"ng-template",1),t.YNc(2,Tt,15,30,"ng-template",1),t.YNc(3,Ct,10,2,"ng-template",1),t.qZA())},directives:[I.q,Y.n,Z.f,d,c,nt.F,A.v,L.r,ot.z,at.B,it.c],pipes:[g.Ov],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:45.5rem;color:#bc71c9}"],changeDetection:0}),n})(),yt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,y.u5,D.TuiAxesModule,O.TuiSelectModule,D.TuiLineChartModule,_.TuiMapperPipeModule,S.TuiNotificationModule,_.TuiFilterPipeModule,D.TuiLineDaysChartModule,O.TuiInputDateRangeModule,x.fV,v.Bz.forChild((0,x.Ve)(ht))]]}),n})()}}]);