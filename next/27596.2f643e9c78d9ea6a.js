(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[27596],{27596:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMobileCalendar} from '@taiga-ui/addon-mobile';\nimport {TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiMobileCalendar],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected min = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 1);\n    protected max = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 10);\n}\n"}}]);