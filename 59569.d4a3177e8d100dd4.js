(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[59569],{59569:(t,n,e)=>{e.r(n),e.d(n,{default:()=>k});var i=e(39260),o=e(26306),r=e(56366),a=e(56193),u=e(75407),s=e(8865);function c(t,n){if(1&t&&u.nrm(0,"div",3),2&t){const t=u.XpG();u.xc7("background-image",t.background)}}function p(t,n){1&t&&(u.j41(0,"div")(1,"h2"),u.EFF(2,"Carousel is awesome"),u.k0s(),u.j41(3,"p"),u.EFF(4,"It can show arbitrary content and it's very easy to control"),u.k0s()())}function l(t,n){if(1&t&&(u.j41(0,"div")(1,"h2"),u.EFF(2,"Pagination"),u.k0s(),u.j41(3,"p"),u.EFF(4," You can use "),u.j41(5,"a",12),u.EFF(6," Pagination "),u.k0s(),u.EFF(7," component with size 's' together with it "),u.k0s()()),2&t){const t=u.XpG(2);u.R7$(5),u.Y8G("routerLink",t.routes.Pagination)}}function d(t,n){1&t&&(u.j41(0,"div")(1,"h2"),u.EFF(2,"Buttons"),u.k0s(),u.j41(3,"p"),u.EFF(4," Use "),u.j41(5,"code"),u.EFF(6,"tuiCarouselButtons"),u.k0s(),u.EFF(7," directive to setup navigation buttons "),u.k0s()())}function g(t,n){if(1&t){const t=u.RV6();u.j41(0,"div",4),u.bIt("touchstart.passive.stop",(function(){return 0})),u.j41(1,"button",5),u.bIt("click",(function(){u.eBV(t);const n=u.XpG();return u.Njj(n.navigate(-1))})),u.EFF(2," Previous "),u.k0s(),u.j41(3,"tui-carousel",6),u.bIt("indexChange",(function(n){u.eBV(t);const e=u.XpG();return u.Njj(e.index=n)})),u.DNE(4,p,5,0,"div",7),u.DNE(5,l,8,1,"div",7),u.DNE(6,d,8,0,"div",7),u.k0s(),u.j41(7,"button",8),u.bIt("click",(function(){u.eBV(t);const n=u.XpG();return u.Njj(n.navigate(1))})),u.EFF(8," Next "),u.k0s()(),u.j41(9,"tui-pagination",9),u.bIt("indexChange",(function(n){u.eBV(t);const e=u.XpG();return u.Njj(e.index=n)})),u.k0s(),u.j41(10,"div",10)(11,"button",11),u.bIt("click",(function(){u.eBV(t);const n=u.XpG();return u.Njj(n.open=!1)})),u.EFF(12," Got it! "),u.k0s()()}if(2&t){const t=u.XpG();u.R7$(3),u.Y8G("index",t.index),u.R7$(6),u.Y8G("length",3)("index",t.index)}}const h=function(t){return{size:"s",header:t}},k=(()=>{var t;class n{constructor(){this.routes=o.$,this.open=!1,this.index=0}get background(){switch(this.index){case 0:return"url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)";case 1:return"url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)";default:return"url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)"}}onClick(){this.index=0,this.open=!0}navigate(t){this.index=(this.index+t)%3}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=u.VBU({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"Example4",features:[u.aNF],decls:5,vars:4,consts:[["size","m","tuiButton","","type","button",3,"click"],["header",""],[3,"tuiDialogOptions","tuiDialog","tuiDialogChange"],[1,"header"],["tuiCarouselButtons","",1,"wrapper",3,"touchstart.passive.stop"],["appearance","neutral","iconStart","@tui.chevron-left","tuiIconButton","","tuiTheme","dark","type","button",1,"tui-space_right-4",3,"click"],[3,"index","indexChange"],[4,"tuiItem"],["appearance","neutral","iconStart","@tui.chevron-right","tuiIconButton","","tuiTheme","dark","type","button",1,"tui-space_left-4",3,"click"],["size","s",1,"tui-space_top-4",3,"length","index","indexChange"],[1,"tui-space_top-4"],["appearance","primary","tuiButton","","type","button",3,"click"],["tuiLink","",3,"routerLink"]],template:function(t,n){if(1&t&&(u.j41(0,"button",0),u.bIt("click",(function(){return n.onClick()})),u.EFF(1," Show dialog with carousel\n"),u.k0s(),u.DNE(2,c,1,2,"ng-template",null,1,u.C5r),u.DNE(4,g,13,3,"ng-template",2),u.bIt("tuiDialogChange",(function(t){return n.open=t}))),2&t){const t=u.sdS(3);u.R7$(4),u.Y8G("tuiDialogOptions",u.eq3(2,h,t))("tuiDialog",n.open)}},dependencies:[i.Wk,r.paf,s.K,a.epe,a.Adj,r.loZ,r.Jc3,a.T$q],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0 -5rem}tui-root._mobile[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin:0}tui-root._mobile[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none}.header[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;block-size:10rem;flex:1;background:var(--tui-background-base) center;background-size:cover}"],changeDetection:0}),n})()}}]);