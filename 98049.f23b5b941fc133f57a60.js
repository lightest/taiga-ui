"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[98049],{98049:(Fe,b,n)=>{n.r(b),n.d(b,{ExampleTuiComboBoxModule:()=>me});var g=n(63737),_=n(12057),r=n(23738),K=n(12021),v=n(78697),m=n(36692),c=n(90987),C=n(91068),q=n(89570),k=n(75695),tt=n(64762),t=n(74788),et=n(82880),ot=n(98204),nt=n(88331),at=n(37159),it=n(57068),lt=n(79121),N=n(27075),B=n(79765),A=n(25917),ut=n(45435),P=n(43190),D=n(39761),$=n(71289),E=n(40939),L=n(64374),d=n(41967),p=n(89290),S=n(10200),O=n(91030),T=n(52219),x=n(50020),Z=n(44124);function rt(o,a){if(1&o&&t._UZ(0,"tui-data-list-wrapper",8),2&o){const e=t.oxw().tuiLet;t.oxw();const i=t.MAs(3);t.Q6J("items",e)("itemContent",i)}}function st(o,a){if(1&o&&t._UZ(0,"tui-data-list-wrapper",8),2&o){const e=t.oxw().tuiLet;t.oxw();const i=t.MAs(3);t.Q6J("items",e)("itemContent",i)}}function ct(o,a){if(1&o&&t._UZ(0,"tui-data-list-wrapper",8),2&o){const e=t.oxw().tuiLet;t.oxw();const i=t.MAs(3);t.Q6J("items",e)("itemContent",i)}}function mt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"form",2),t.TgZ(1,"tui-combo-box",3),t.NdJ("searchChange",function(l){return t.CHM(e),t.oxw().onSearchChange(l)}),t._uU(2," Find the best employees "),t.TgZ(3,"input",4),t.NdJ("input",function(l){t.CHM(e);const u=t.oxw();return u.onSearchChange(u.extractValueFromEvent(l))}),t.qZA(),t.YNc(4,rt,1,2,"tui-data-list-wrapper",5),t.qZA(),t.TgZ(5,"tui-combo-box",6),t._uU(6," Find the best employees "),t.TgZ(7,"input",4),t.NdJ("input",function(l){t.CHM(e);const u=t.oxw();return u.onSearchChange(u.extractValueFromEvent(l))}),t.qZA(),t.YNc(8,st,1,2,"tui-data-list-wrapper",5),t.qZA(),t.TgZ(9,"tui-combo-box",7),t._uU(10," Choose a developer "),t.TgZ(11,"input",4),t.NdJ("input",function(l){t.CHM(e);const u=t.oxw();return u.onSearchChange(u.extractValueFromEvent(l))}),t.qZA(),t.YNc(12,ct,1,2,"tui-data-list-wrapper",5),t.qZA(),t.qZA()}if(2&o){const e=t.oxw(),i=t.MAs(3);t.Q6J("tuiTextfieldCleaner",!0),t.xp6(1),t.Q6J("formControl",e.testValue)("valueContent",i),t.xp6(4),t.Q6J("formControl",e.testValue)("valueContent",i),t.xp6(4),t.Q6J("formControl",e.testValue)("valueContent",i)}}function Ft(o,a){if(1&o&&(t.TgZ(0,"div",9),t._UZ(1,"tui-avatar",10),t.TgZ(2,"div",11),t._uU(3),t.qZA(),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Q6J("avatarUrl",e.avatarUrl||null)("text",e.toString()),t.xp6(2),t.Oqu(e)}}class R{constructor(a,e,i=null){this.firstName=a,this.lastName=e,this.avatarUrl=i}toString(){return`${this.firstName} ${this.lastName}`}}const y=[new R("Roman","Sedov","http://marsibarsi.me/images/1x1small.jpg"),new R("Alex","Inkin",N.L`/images/avatar.jpg`)];let dt=(()=>{class o{constructor(){this.search$=new B.xQ,this.items$=this.search$.pipe((0,ut.h)(e=>null!==e),(0,P.w)(e=>this.serverRequest(e).pipe((0,D.O)(null))),(0,D.O)(y)),this.testValue=new r.NI(y[1])}onSearchChange(e){this.search$.next(e)}extractValueFromEvent(e){var i;return(null===(i=e.target)||void 0===i?void 0:i.value)||null}serverRequest(e){const i=y.filter(l=>(0,m.TUI_DEFAULT_MATCHER)(l,e||""));return(0,A.of)(i).pipe((0,$.g)(1e3*Math.random()+500))}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-combo-box-example-1"]],decls:4,vars:3,consts:[["class","b-form",3,"tuiTextfieldCleaner",4,"tuiLet"],["content",""],[1,"b-form",3,"tuiTextfieldCleaner"],["tuiTextfieldSize","s",3,"formControl","valueContent","searchChange"],["tuiTextfield","","placeholder","Type a name",3,"input"],[3,"items","itemContent",4,"tuiDataList"],["tuiTextfieldSize","m",1,"tui-space_vertical-5",3,"formControl","valueContent"],[3,"formControl","valueContent"],[3,"items","itemContent"],[1,"template"],["size","xs",1,"avatar",3,"avatarUrl","text"],[1,"name"]],template:function(e,i){1&e&&(t.YNc(0,mt,13,7,"form",0),t.ALo(1,"async"),t.YNc(2,Ft,4,3,"ng-template",null,1,t.W1O)),2&e&&t.Q6J("tuiLet",t.lcZ(1,1,i.items$))},directives:[E.L,r._Y,r.JL,r.F,L.b,d._,p.m,S.s,r.JJ,r.oH,O.M,T.g,x.e,Z.J],pipes:[_.Ov],styles:[".template[_ngcontent-%COMP%]{display:flex;align-items:center}.avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1}"],changeDetection:0}),o})();class U{constructor(a,e,i=null,l=!1){this.firstName=a,this.lastName=e,this.avatarUrl=i,this.disabled=l}toString(){return`${this.firstName} ${this.lastName}`}}const J=[new U("Roman","Sedov","http://marsibarsi.me/images/1x1small.jpg"),new U("Alex","Inkin",N.L`/images/avatar.jpg`)];var pt=n(87519),Tt=n(46782),Ct=n(47349);let G=(()=>{class o{constructor(e){this.destroy$=e,this.request$=new B.xQ,this.response$=this.request$.pipe((0,pt.x)(),(0,P.w)(i=>(0,A.of)(J.filter(l=>(0,m.TUI_DEFAULT_MATCHER)(l,i))).pipe((0,$.g)(1e3*Math.random()+500),(0,D.O)(null))),(0,Tt.R)(this.destroy$),(0,Ct.d)({bufferSize:1,refCount:!0}))}request(e){return this.request$.next(e||""),this.response$}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m.TuiDestroyService))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var I=n(20933),X=n(35065),gt=n(23184);function _t(o,a){if(1&o&&(t._UZ(0,"tui-avatar",5),t.TgZ(1,"span",6),t._uU(2),t.qZA()),2&o){const e=a.$implicit;t.Q6J("avatarUrl",e.avatarUrl||null)("text",e.toString()),t.xp6(2),t.Oqu(e)}}function Ot(o,a){if(1&o&&(t.TgZ(0,"button",10),t._UZ(1,"tui-avatar",5),t.TgZ(2,"span",6),t._uU(3),t.qZA(),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e)("disabled",e.disabled),t.xp6(1),t.Q6J("avatarUrl",e.avatarUrl||null)("text",e.toString()),t.xp6(2),t.Oqu(e)}}function xt(o,a){if(1&o&&(t.TgZ(0,"tui-data-list"),t.YNc(1,Ot,4,5,"button",9),t.qZA()),2&o){const e=t.oxw(2).tuiLet;t.xp6(1),t.Q6J("ngForOf",e)}}function ht(o,a){1&o&&t._UZ(0,"tui-loader",11)}function ft(o,a){if(1&o&&(t.YNc(0,xt,2,1,"tui-data-list",7),t.YNc(1,ht,1,0,"ng-template",null,8,t.W1O)),2&o){const e=t.MAs(2),i=t.oxw().tuiLet;t.Q6J("ngIf",i)("ngIfElse",e)}}function Mt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tui-combo-box",1),t.NdJ("searchChange",function(l){return t.CHM(e),t.oxw().search=l}),t._uU(1," Find the best employees "),t._UZ(2,"input",2),t.YNc(3,_t,3,3,"ng-template",null,3,t.W1O),t.YNc(5,ft,3,2,"ng-template",4),t.qZA()}if(2&o){const e=t.MAs(4),i=t.oxw();t.Q6J("formControl",i.control)("valueContent",e)("search",i.search)}}let Dt=(()=>{class o{constructor(e){this.service=e,this.search="",this.control=new r.NI(J[0])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(G))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-combo-box-example-2"]],features:[t._Bn([G,m.TuiDestroyService])],decls:2,vars:3,consts:[["class","b-form",3,"formControl","valueContent","search","searchChange",4,"tuiLet"],[1,"b-form",3,"formControl","valueContent","search","searchChange"],["tuiTextfield","","placeholder","Type a name"],["value",""],["tuiDataList",""],["size","xs",1,"avatar",3,"avatarUrl","text"],[1,"name"],[4,"ngIf","ngIfElse"],["loading",""],["tuiOption","",3,"value","disabled",4,"ngFor","ngForOf"],["tuiOption","",3,"value","disabled"],[1,"tui-space_vertical-4"]],template:function(e,i){1&e&&(t.YNc(0,Mt,6,3,"tui-combo-box",0),t.ALo(1,"async")),2&e&&t.Q6J("tuiLet",t.lcZ(1,1,i.service.request(i.search)))},directives:[E.L,d._,p.m,r.JJ,r.oH,O.M,T.g,Z.J,_.O5,I.q,_.sg,X.v,gt.k],pipes:[_.Ov],styles:[".avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1}"],changeDetection:0}),o})();var V=n(68800);function Et(o,a){if(1&o&&(t._UZ(0,"tui-data-list-wrapper",3),t.ALo(1,"tuiFilterByInput")),2&o){const e=t.oxw();t.Q6J("items",t.lcZ(1,1,e.items))}}let St=(()=>{class o{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.value=""}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-combo-box-example-3"]],decls:4,vars:1,consts:[[1,"b-form",3,"ngModel","ngModelChange"],["tuiTextfield","","placeholder","Type a name"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,i){1&e&&(t.TgZ(0,"tui-combo-box",0),t.NdJ("ngModelChange",function(u){return i.value=u}),t._uU(1," Find the best employees "),t._UZ(2,"input",1),t.YNc(3,Et,2,3,"tui-data-list-wrapper",2),t.qZA()),2&e&&t.Q6J("ngModel",i.value)},directives:[d._,p.m,r.JJ,r.On,O.M,T.g,x.e],pipes:[V.b],encapsulation:2,changeDetection:0}),o})();var yt=n(30114),bt=n(60666);function vt(o,a){if(1&o&&(t._UZ(0,"tui-data-list-wrapper",3),t.ALo(1,"tuiFilterByInputWith"),t.ALo(2,"tuiStringifyContent")),2&o){const e=t.oxw();t.Q6J("items",t.xi3(1,2,e.items,e.stringify))("itemContent",t.lcZ(2,5,e.stringify))}}let Nt=(()=>{class o{constructor(){this.value=null,this.items=[{name:"John",surname:"Cleese"},{name:"Eric",surname:"Idle"},{name:"Graham",surname:"Chapman"},{name:"Michael",surname:"Palin"},{name:"Terry",surname:"Gilliam"},{name:"Terry",surname:"Jones"}],this.stringify=e=>`${e.name} ${e.surname}`}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-combo-box-example-4"]],decls:4,vars:2,consts:[[1,"b-form",3,"stringify","ngModel","ngModelChange"],["tuiTextfield","","placeholder","Type a name"],[3,"items","itemContent",4,"tuiDataList"],[3,"items","itemContent"]],template:function(e,i){1&e&&(t.TgZ(0,"tui-combo-box",0),t.NdJ("ngModelChange",function(u){return i.value=u}),t._uU(1," Find the best employees "),t._UZ(2,"input",1),t.YNc(3,vt,3,7,"tui-data-list-wrapper",2),t.qZA()),2&e&&t.Q6J("stringify",i.stringify)("ngModel",i.value)},directives:[d._,p.m,r.JJ,r.On,O.M,T.g,x.e],pipes:[yt.Y,bt.Q],encapsulation:2,changeDetection:0}),o})();var Bt=n(62500);let At=(()=>{class o{constructor(e){this.strategy=e,this.indexChange=this.strategy.scrolledIndexChange}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.yU))},o.\u0275dir=t.lG2({type:o,selectors:[["","indexChange",""]],outputs:{indexChange:"indexChange"}}),o})();function Pt(o,a){if(1&o&&(t.TgZ(0,"button",6),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function $t(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"cdk-virtual-scroll-viewport",3),t.NdJ("indexChange",function(){return t.CHM(e),t.MAs(2).handleFocusLossIfNecessary()}),t.TgZ(1,"tui-data-list",null,4),t.YNc(3,Pt,2,2,"button",5),t.qZA(),t.qZA()}if(2&o){const e=a.tuiLet;t.Udp("height",44*e.length,"px"),t.Q6J("itemSize",44),t.xp6(3),t.Q6J("cdkVirtualForOf",e)}}function Lt(o,a){if(1&o&&(t.ynx(0),t.YNc(1,$t,4,4,"cdk-virtual-scroll-viewport",2),t.ALo(2,"tuiFilterByInput"),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("tuiLet",t.lcZ(2,1,e.countries))}}let Zt=(()=>{class o{constructor(){this.value=null,this.countries=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cura\xe7ao","Cyprus","Czechia","C\xf4te d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation","Rwanda","R\xe9union","Saint Barth\xe9lemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","\xc5land Islands"]}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-combo-box-example-5"]],decls:3,vars:1,consts:[[1,"b-form",3,"ngModel","ngModelChange"],[4,"tuiDataList"],["tuiScrollable","","class","scroll",3,"height","itemSize","indexChange",4,"tuiLet"],["tuiScrollable","",1,"scroll",3,"itemSize","indexChange"],["list",""],["tuiOption","",3,"value",4,"cdkVirtualFor","cdkVirtualForOf"],["tuiOption","",3,"value"]],template:function(e,i){1&e&&(t.TgZ(0,"tui-combo-box",0),t.NdJ("ngModelChange",function(u){return i.value=u}),t._uU(1," Country "),t.YNc(2,Lt,3,3,"ng-container",1),t.qZA()),2&e&&t.Q6J("ngModel",i.value)},directives:[d._,p.m,r.JJ,r.On,T.g,E.L,g.N7,g.xd,Bt.R,At,I.q,g.x0,X.v],pipes:[V.b],styles:[".scroll[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;min-height:64px;max-height:200px}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar, .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}"],changeDetection:0}),o})();var H=n(68874);function Rt(o,a){if(1&o&&t._UZ(0,"tui-data-list-wrapper",4),2&o){const e=t.oxw();t.Q6J("items",e.items)}}const Ut=o=>`${o.name} (${o.dept.title})`;let Jt=(()=>{class o{constructor(){this.testValue=new r.NI(null),this.items=[{id:42,name:"John Cleese",dept:{id:566,title:"Financial"}},{id:237,name:"Eric Idle",dept:{id:560,title:"Staffing"}},{id:666,name:"Michael Palin",dept:{id:566,title:"Financial"}},{id:123,name:"Terry Gilliam",dept:{id:500,title:"Administrative"}},{id:777,name:"Terry Jones",dept:{id:566,title:"Financial"}},{id:999,name:"Graham Chapman",dept:{id:560,title:"Staffing"}}]}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-combo-box-example-6"]],features:[t._Bn([(0,C.tuiItemsHandlersProvider)({stringify:Ut})])],decls:5,vars:2,consts:[[1,"b-form"],["tuiTextfieldSize","m",3,"formControl","tuiTextfieldLabelOutside"],["tuiTextfield","","placeholder","Type a name"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"tui-combo-box",1),t._uU(2," Employee "),t._UZ(3,"input",2),t.YNc(4,Rt,1,1,"tui-data-list-wrapper",3),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formControl",i.testValue)("tuiTextfieldLabelOutside",!0))},directives:[r._Y,r.JL,r.F,d._,p.m,S.s,r.JJ,r.oH,H.x,O.M,T.g,x.e],encapsulation:2,changeDetection:0}),o})();var Gt=n(31823),It=n(76189),Xt=n(44051),Vt=n(17023),Ht=n(54218),Qt=n(61135),wt=n(33250),zt=n(84848),Yt=n(3729),Wt=n(34880),jt=n(76349);const Kt=["valueTemplateContent"];function qt(o,a){if(1&o&&(t.TgZ(0,"div",2),t.tHW(1,3),t._UZ(2,"code"),t.N_p(),t.qZA(),t.TgZ(3,"tui-doc-example",4),t.TgZ(4,"tui-notification",5),t._uU(5," If you need to set some attributes or listen to events on native "),t.TgZ(6,"code"),t._uU(7,"input"),t.qZA(),t._uU(8," , you can put it inside with "),t.TgZ(9,"code"),t._uU(10,"Textfield"),t.qZA(),t._uU(11," directive as shown below "),t.qZA(),t._UZ(12,"tui-combo-box-example-1"),t.qZA(),t.TgZ(13,"tui-doc-example",6),t._UZ(14,"tui-combo-box-example-2"),t.qZA(),t.TgZ(15,"tui-doc-example",7),t._UZ(16,"tui-combo-box-example-3"),t.qZA(),t.TgZ(17,"tui-doc-example",8),t._UZ(18,"tui-combo-box-example-4"),t.qZA(),t.TgZ(19,"tui-doc-example",9),t.TgZ(20,"tui-notification",2),t._uU(21," Note that virtual scroll can imperatively remove focused option from DOM. This causes ExpressionChange errors and to solve those take a look at a tiny "),t.TgZ(22,"code"),t._uU(23,"IndexChange"),t.qZA(),t._uU(24," directive included in this example. "),t.qZA(),t._UZ(25,"tui-combo-box-example-5"),t.qZA(),t.TgZ(26,"tui-doc-example",10),t._UZ(27,"tui-combo-box-example-6"),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("content",e.example1),t.xp6(10),t.Q6J("content",e.example2),t.xp6(2),t.Q6J("content",e.example3),t.xp6(2),t.Q6J("content",e.example4),t.xp6(2),t.Q6J("content",e.example5),t.xp6(7),t.Q6J("content",e.example6)}}function kt(o,a){if(1&o&&t._UZ(0,"tui-data-list-wrapper",25),2&o){const e=t.oxw(3);t.Q6J("items",e.filter(e.search))}}function te(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tui-combo-box",23),t.NdJ("searchChange",function(l){return t.CHM(e),t.oxw(2).search=l}),t._uU(1," Choose an account "),t.YNc(2,kt,1,1,"tui-data-list-wrapper",24),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("formControl",e.control)("focusable",e.focusable)("valueContent",e.valueContent)("identityMatcher",e.identityMatcher)("readOnly",e.readOnly)("strict",e.strict)("stringify",e.stringify)("strictMatcher",e.strictMatcher)("pseudoInvalid",e.pseudoInvalid)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoActive",e.pseudoPressed)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintAppearance",e.hintAppearance)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("search",e.search)}}function ee(o,a){if(1&o&&(t.TgZ(0,"div",26),t._UZ(1,"tui-svg",27),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.qZA()),2&o){const e=a.$implicit;t.xp6(3),t.Oqu(e)}}function oe(o,a){1&o&&(t.tHW(0,28),t._UZ(1,"code"),t.N_p())}function ne(o,a){1&o&&(t.tHW(0,29),t._UZ(1,"code"),t.N_p())}function ae(o,a){1&o&&(t.tHW(0,30),t._UZ(1,"strong"),t.N_p())}function ie(o,a){1&o&&(t.tHW(0,31),t._UZ(1,"code"),t.TgZ(2,"p"),t.TgZ(3,"strong"),t._UZ(4,"code"),t._UZ(5,"code"),t._UZ(6,"code"),t._UZ(7,"code"),t.qZA(),t.qZA(),t.N_p())}function le(o,a){1&o&&(t.tHW(0,32),t._UZ(1,"strong"),t.N_p())}function ue(o,a){1&o&&(t.tHW(0,33),t._UZ(1,"code"),t._UZ(2,"strong"),t.N_p())}function re(o,a){1&o&&t.SDv(0,34)}function se(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tui-doc-demo",11),t.YNc(1,te,3,25,"ng-template"),t.qZA(),t.YNc(2,ee,4,1,"ng-template",null,12,t.W1O),t.TgZ(4,"div"),t.tHW(5,13),t.TgZ(6,"p"),t._UZ(7,"code"),t.qZA(),t.TgZ(8,"button",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().setValue()}),t.qZA(),t.N_p(),t.qZA(),t.TgZ(9,"tui-doc-documentation"),t.YNc(10,oe,2,0,"ng-template",15),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().disabled=l}),t.YNc(11,ne,2,0,"ng-template",16),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().search=l}),t.YNc(12,ae,2,0,"ng-template",17),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().identityMatcher=l}),t.YNc(13,ie,8,0,"ng-template",18),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().strict=l}),t.YNc(14,le,2,0,"ng-template",19),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().strictMatcher=l}),t.YNc(15,ue,3,0,"ng-template",20),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().stringify=l}),t.YNc(16,re,1,0,"ng-template",21),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().selectedValueTemplate=l}),t.qZA(),t._UZ(17,"inherited-documentation",22)}if(2&o){const e=t.oxw();t.Q6J("control",e.control),t.xp6(10),t.Q6J("documentationPropertyValue",e.disabled),t.xp6(1),t.Q6J("documentationPropertyValue",e.search),t.xp6(1),t.Q6J("documentationPropertyValues",e.identityMatcherVariants)("documentationPropertyValue",e.identityMatcher),t.xp6(1),t.Q6J("documentationPropertyValue",e.strict),t.xp6(1),t.Q6J("documentationPropertyValues",e.strictMatcherVariants)("documentationPropertyValue",e.strictMatcher),t.xp6(1),t.Q6J("documentationPropertyValues",e.stringifyVariants)("documentationPropertyValue",e.stringify),t.xp6(1),t.Q6J("documentationPropertyValues",e.valueTemplateVariants)("documentationPropertyValue",e.selectedValueTemplate),t.xp6(1),t.Q6J("dropdown",!0)}}function ce(o,a){if(1&o&&(t.TgZ(0,"ol",35),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,36),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",37),t.TgZ(6,"p"),t.tHW(7,38),t._UZ(8,"code"),t.N_p(),t.qZA(),t.qZA(),t.TgZ(9,"li"),t.TgZ(10,"p"),t.tHW(11,39),t._UZ(12,"code"),t._UZ(13,"code"),t.N_p(),t.qZA(),t._UZ(14,"tui-doc-code",40),t.qZA(),t.TgZ(15,"li"),t.TgZ(16,"p"),t.SDv(17,41),t.qZA(),t._UZ(18,"tui-doc-code",42),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("code",e.exampleModule),t.xp6(9),t.Q6J("code",e.exampleForm),t.xp6(4),t.Q6J("code",e.exampleHtml)}}class h{constructor(a,e){this.name=a,this.balance=e}toString(){return`${this.name} (${this.balance})`}}class F extends et.b{constructor(){super(...arguments),this.valueTemplateRef="",this.exampleForm=n.e(72351).then(n.t.bind(n,72351,17)),this.exampleModule=n.e(34142).then(n.t.bind(n,34142,17)),this.exampleHtml=n.e(62982).then(n.t.bind(n,62982,17)),this.example1={TypeScript:n.e(74375).then(n.t.bind(n,74375,17)),HTML:n.e(48990).then(n.t.bind(n,48990,17)),LESS:n.e(21050).then(n.t.bind(n,21050,17))},this.example2={TypeScript:n.e(7863).then(n.t.bind(n,7863,17)),HTML:n.e(53102).then(n.t.bind(n,53102,17)),LESS:n.e(74073).then(n.t.bind(n,74073,17)),"user.ts":n.e(11962).then(n.t.bind(n,11962,17)),"request.service.ts":n.e(1442).then(n.t.bind(n,1442,17)),"database-mock-data.ts":n.e(47161).then(n.t.bind(n,47161,17))},this.example3={TypeScript:n.e(87533).then(n.t.bind(n,87533,17)),HTML:n.e(88753).then(n.t.bind(n,88753,17))},this.example4={TypeScript:n.e(28454).then(n.t.bind(n,28454,17)),HTML:n.e(32569).then(n.t.bind(n,32569,17))},this.example5={TypeScript:n.e(54991).then(n.t.bind(n,31574,17)),HTML:n.e(31241).then(n.t.bind(n,31241,17)),LESS:n.e(94729).then(n.t.bind(n,94729,17)),"index-change.directive.ts":n.e(47711).then(n.t.bind(n,47711,17))},this.example6={TypeScript:n.e(14890).then(n.t.bind(n,66331,17)),HTML:n.e(83889).then(n.t.bind(n,83889,17))},this.items=[new h("Rubles",500),new h("Dollars",237),new h("Netherlands Antillean Guilder and Falkland Islands Pound",700)],this.strict=!0,this.search="",this.valueTemplateVariants=["","Template"],this.selectedValueTemplate="",this.iconVariants=["","tuiIconPiechartLarge","tuiIconCardsLarge"],this.iconLeft=this.iconVariants[0],this.stringifyVariants=[m.TUI_DEFAULT_STRINGIFY,a=>String(String(a).match(/\d+/))],this.stringify=this.stringifyVariants[0],this.strictMatcherVariants=[m.TUI_STRICT_MATCHER,(a,e,i)=>Number.parseInt(i(a).match(/\d+/g)[0],10)===Number.parseInt(e,10)],this.strictMatcher=this.strictMatcherVariants[0],this.identityMatcherVariants=[(a,e)=>a===e,(a,e)=>a.balance===e.balance],this.identityMatcher=this.identityMatcherVariants[0],this.control=new r.NI(null,r.kI.required)}get valueContent(){return this.valueTemplateRef&&this.selectedValueTemplate?this.valueTemplateRef:""}filter(a){return this.items.filter(e=>(0,m.TUI_DEFAULT_MATCHER)(e,a||""))}setValue(){this.control.setValue(new h("Dollars",237))}}F.\u0275fac=function(){let o;return function(e){return(o||(o=t.n5z(F)))(e||F)}}(),F.\u0275cmp=t.Xpm({type:F,selectors:[["example-tui-combo-box"]],viewQuery:function(a,e){if(1&a&&t.Gf(Kt,5),2&a){let i;t.iGM(i=t.CRH())&&(e.valueTemplateRef=i.first)}},features:[t._Bn([{provide:ot.x,useExisting:(0,t.Gpc)(()=>F)}]),t.qOj],decls:4,vars:0,consts:function(){let o,a,e,i,l,u,f,Q,w,z,Y,W,M,j;return o=$localize`:␟da1522a11e1532aa028931b46d0a630078c358ff␟2233355546414937711:${"\ufffd#2\ufffd"}:START_TAG_CODE:ComboBox${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is a textfield with a dropdown with items. You can choose one of available options or input a value manually. `,a=$localize`:␟69c22e16da706bb601a0de9b79bf4032e21f238f␟4520248067908818846:Async data loading`,e=$localize`:␟895ced0c4c71fbd17c0ae69a1bd58424a04d949e␟6504226182753238526:${"\ufffd#6\ufffd"}:START_PARAGRAPH: Set a value with copied object from items to check ${"\ufffd#7\ufffd"}:START_TAG_CODE:identityMatcher${"\ufffd/#7\ufffd"}:CLOSE_TAG_CODE: : ${"\ufffd/#6\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd#8\ufffd"}:START_TAG_BUTTON: Set ${"\ufffd/#8\ufffd"}:CLOSE_TAG_BUTTON:`,i=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,l=$localize`:␟b45da9f2bafc300277a162143be5640a2c5aaf67␟1886174402380484199: Textfield value to subscribe on input or setting it from the outside (emits ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: when item from list selected) `,u=$localize`:␟543ca5b39fc7e55317cb8527b1a5a8dd1e6802b6␟4796409722932472766: A function that compares search and value to define a match between them. ${"\ufffd#1\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG:`,f=$localize`:␟eadba23b9d931a6ed170c7473e4f7eca5e0a4c1b␟3675570845695787426: Value must only be an item of suggestions  ${"[\ufffd#1\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd|\ufffd#7\ufffd]"}:START_TAG_CODE:<T>${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd|\ufffd/#7\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd#2\ufffd"}:START_PARAGRAPH:${"\ufffd#3\ufffd"}:START_TAG_STRONG: When ${"[\ufffd#1\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd|\ufffd#7\ufffd]"}:START_TAG_CODE:false${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd|\ufffd/#7\ufffd]"}:CLOSE_TAG_CODE: , make sure your handlers, such as ${"[\ufffd#1\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd|\ufffd#7\ufffd]"}:START_TAG_CODE:stringify${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd|\ufffd/#7\ufffd]"}:CLOSE_TAG_CODE: can handle ${"[\ufffd#1\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd|\ufffd#7\ufffd]"}:START_TAG_CODE:string${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd|\ufffd/#7\ufffd]"}:CLOSE_TAG_CODE: value, as well as ${"[\ufffd#1\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd|\ufffd#7\ufffd]"}:START_TAG_CODE:<T>${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd|\ufffd/#7\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#3\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#2\ufffd"}:CLOSE_PARAGRAPH:`,f=t.Zx4(f),Q=$localize`:␟eb3f18b604c7b79baae1fd3865abc04b7a5d1388␟6911526919291779574: A function that compares search text and item to define a match between them. Lowercase string comparasion function by default. ${"\ufffd#1\ufffd"}:START_TAG_STRONG:Should be a pure function${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG:`,w=$localize`:␟8b0f2fdf3aa3aaa19b87f4d255d00253c742cf23␟4616897131727147893: A function that transforms object into a string. ${"\ufffd#1\ufffd"}:START_TAG_CODE:String(value)${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: by default. ${"\ufffd#2\ufffd"}:START_TAG_STRONG:Should be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,z=$localize`:␟bd1797fbae774d643fe66cd7ddbd2dc9b405a294␟5590474436936398231: A template for custom view of selected value `,Y=$localize`:␟56c3d22f1452d68987c942338d4525f7075fcb42␟4145645488382398957: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiComboBoxModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,W=$localize`:␟dd8213acbcab882d451555cd44ef970b468c7572␟8602164619926939169: See samples to learn more about working with ${"\ufffd#8\ufffd"}:START_TAG_CODE:tui-data-list-wrapper${"\ufffd/#8\ufffd"}:CLOSE_TAG_CODE: or without them `,M=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,M=t.Zx4(M),j=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","ComboBox","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],o,["id","async","heading",a,3,"content"],[1,"tui-space_bottom-4","b-form"],["id","datalist","heading","DataList",3,"content"],["id","wrapper","heading","DataListWrapper","description","With filtering through tuiFilterByInput pipe",3,"content"],["id","stringify","heading","Stringify","description","With filtering through tuiFilterByInputWith pipe using custom stringify handler",3,"content"],["id","virtual","heading","Virtual scroll",3,"content"],["id","options-stringify","heading","Options (stringify)",3,"content"],[3,"control"],["valueTemplateContent",""],e,["tuiButton","","type","button","size","m",3,"click"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","search","documentationPropertyMode","input-output","documentationPropertyType","string | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","identityMatcher","documentationPropertyMode","input","documentationPropertyType","TuiIdentityMatcher",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","strict","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","strictMatcher","documentationPropertyMode","input","documentationPropertyType","TuiStringMatcher | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","stringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","valueContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"formControl","focusable","valueContent","identityMatcher","readOnly","strict","stringify","strictMatcher","pseudoInvalid","pseudoFocus","pseudoHover","pseudoActive","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiHintContent","tuiHintDirection","tuiHintAppearance","tuiTextfieldIconLeft","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize","search","searchChange"],[3,"items",4,"tuiDataList"],[3,"items"],[1,"item-template"],["src","tuiIconCheck",1,"item-template-icon"],i,l,u,f,Q,w,z,[1,"b-demo-steps"],Y,["filename","myComponent.module.ts",3,"code"],W,M,["filename","myComponent.component.ts",3,"code"],j,["filename","myComponent.template.html",3,"code"]]},template:function(a,e){1&a&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,qt,28,6,"ng-template",1),t.YNc(2,se,18,13,"ng-template",1),t.YNc(3,ce,19,3,"ng-template",1),t.qZA())},directives:[nt.q,at.n,it.f,lt.L,dt,Dt,St,Nt,Zt,Jt,Gt.F,It.v,Xt.z,Vt.B,Ht.w,d._,p.m,Qt.E,r.JJ,r.oH,wt.Ek,zt.b,Yt.aR,L.b,H.x,S.s,T.g,x.e,Wt.P,jt.c],styles:[".item-template[_ngcontent-%COMP%]{display:flex;align-items:center}.item-template-icon[_ngcontent-%COMP%]{margin-right:.375rem}"],changeDetection:0}),(0,tt.gn)([m.tuiPure],F.prototype,"filter",null);let me=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[_.ez,r.u5,r.UX,g.Cl,c.TuiScrollbarModule,C.TuiComboBoxModule,c.TuiButtonModule,c.TuiLinkModule,C.TuiAvatarModule,c.TuiSvgModule,c.TuiDataListModule,c.TuiLoaderModule,m.TuiLetModule,c.TuiNotificationModule,c.TuiTextfieldControllerModule,c.TuiHintModule,c.TuiDropdownModule,C.TuiDataListWrapperModule,C.TuiFilterByInputPipeModule,C.TuiStringifyContentPipeModule,q.wq,v.fV,k.f,K.Bz.forChild((0,v.Ve)(F))]]}),o})()}}]);