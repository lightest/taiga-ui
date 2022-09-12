"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[35781],{35781:e=>{e.exports='<button\n    tuiButton\n    (click)="toggle()"\n>\n    Show/Hide\n</button>\n<img\n    src="assets/images/earth.jpg"\n    alt=""\n    class="preload"\n/>\n<ng-template\n    let-scroll$="scroll$"\n    [tuiSheetOptions]="options"\n    [(tuiSheet)]="open"\n>\n    <div class="wrapper">\n        <h2\n            tuiSheetHeading\n            class="heading"\n        >\n            Planet Earth\n        </h2>\n        <div class="earth">\n            <img\n                src="assets/images/earth.jpg"\n                alt=""\n                class="image"\n                [style.transform]="getTransform(scroll$ | async)"\n            />\n        </div>\n        <p>\n            Earth is the third planet from the Sun and the only astronomical object known to harbour and support life.\n            About 29.2% of Earth\'s surface is land consisting of continents and islands. The remaining 70.8% is covered\n            with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other\n            freshwater, which together constitute the hydrosphere. Much of Earth\'s polar regions are covered in ice.\n            Earth\'s outer layer is divided into several rigid tectonic plates that migrate across the surface over many\n            millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that\n            generates Earth\'s magnetic field, and a convective mantle that drives plate tectonics.\n        </p>\n    </div>\n</ng-template>\n'}}]);