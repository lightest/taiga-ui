(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[22656],{22656:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var i=n(75407),o=n(19908),s=n(56366),r=n(56193),c=n(59996);const l=["preview"],a=["contentSample"];function u(t,e){if(1&t&&i.nrm(0,"img",10),2&t){const t=e.polymorpheusOutlet;i.Y8G("src",t,i.B4B)}}function p(t,e){if(1&t){const t=i.RV6();i.j41(0,"tui-preview",4),i.bIt("tuiSwipe",(function(e){i.eBV(t);const n=i.XpG();return i.Njj(n.onSwipe(e))})),i.j41(1,"tui-preview-title"),i.EFF(2),i.k0s(),i.j41(3,"tui-preview-pagination",5),i.bIt("indexChange",(function(e){i.eBV(t);const n=i.XpG();return i.Njj(n.index=e)})),i.k0s(),i.j41(4,"button",6),i.bIt("click",(function(){i.eBV(t);const e=i.XpG();return i.Njj(e.delete())})),i.EFF(5," Delete "),i.k0s(),i.j41(6,"button",7),i.bIt("click",(function(){i.eBV(t);const e=i.XpG();return i.Njj(e.download())})),i.EFF(7," Download "),i.k0s(),i.j41(8,"button",8),i.bIt("click",(function(){const e=i.eBV(t).$implicit;return i.Njj(e.complete())})),i.EFF(9," Close "),i.k0s(),i.DNE(10,u,1,1,"img",9),i.k0s()}if(2&t){const t=i.XpG();i.Y8G("rotatable",!0),i.R7$(2),i.JRh(t.titles[t.index]),i.R7$(1),i.Y8G("length",t.length)("index",t.index),i.R7$(7),i.Y8G("polymorpheusOutlet",t.previewContent)}}function h(t,e){1&t&&(i.j41(0,"div",11)(1,"h1"),i.EFF(2,"Important document"),i.k0s(),i.j41(3,"p"),i.EFF(4,"Hello everyone! This is some important document in A4 format, although it is made using html"),i.k0s(),i.j41(5,"p"),i.EFF(6," This shows that the component preview can work with absolutely any content: this way you can show any template, image, pdf or even iframe with your favorite site. We will put this content in the center of the portal and provide the user with control over it, and we will provide you with convenient levers to change it and process actions. "),i.k0s(),i.nrm(7,"img",12),i.k0s())}const m=(()=>{var t;class e{constructor(){this.previewService=(0,i.WQX)(r.s6r),this.alerts=(0,i.WQX)(s.QJZ),this.index=0,this.length=2,this.titles=["Transaction cert.jpg","My face.jpg"]}get previewContent(){return 0===this.index&&this.contentSample?this.contentSample:"https://avatars.githubusercontent.com/u/10106368"}show(){this.previewService.open(this.preview||"").subscribe({complete:()=>console.info("complete")})}download(){this.alerts.open("Downloading...").subscribe()}delete(){this.alerts.open("Deleting...").subscribe()}onSwipe(t){"left"===t.direction&&(this.index=(0,o.wNj)(this.index+1,0,this.length-1)),"right"===t.direction&&(this.index=(0,o.wNj)(this.index-1,0,this.length-1))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.VBU({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(i.GBs(l,5),i.GBs(a,5)),2&t){let t;i.mGM(t=i.lsd())&&(e.preview=t.first),i.mGM(t=i.lsd())&&(e.contentSample=t.first)}},standalone:!0,exportAs:"Example1",features:[i.aNF],decls:8,vars:0,consts:[[1,"tui-space_bottom-2"],["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],["contentSample",""],[3,"rotatable","tuiSwipe"],[3,"length","index","indexChange"],["iconStart","@tui.trash","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["iconStart","@tui.download","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["iconStart","@tui.x","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["alt","preview",3,"src",4,"polymorpheusOutlet"],["alt","preview",3,"src"],[1,"content"],["alt","logo","src","https://raw.githubusercontent.com/taiga-family/ng-polymorpheus/main/projects/demo/assets/logo.svg",1,"polymorpheus"]],template:function(t,e){1&t&&(i.j41(0,"div",0),i.EFF(1,"With all features"),i.k0s(),i.j41(2,"button",1),i.bIt("click",(function(){return e.show()})),i.EFF(3," Show preview\n"),i.k0s(),i.DNE(4,p,11,5,"ng-template",null,2,i.C5r),i.DNE(6,h,8,0,"ng-template",null,3,i.C5r))},dependencies:[c.xr,s.paf,r.ooG,r.bq3,r.PMc,r.vPw,o.rPm],styles:[".content[_ngcontent-%COMP%]{font:var(--tui-font-text-xl);background-color:var(--tui-background-base);inline-size:50rem;block-size:68.75rem;padding:3.75rem;box-sizing:border-box;border-radius:.75rem}.polymorpheus[_ngcontent-%COMP%]{padding:2.5rem 10.375rem}"],changeDetection:0}),e})()}}]);