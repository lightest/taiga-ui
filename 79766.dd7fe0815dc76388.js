(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[79766],{79766:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {type TuiLineHandler} from '@taiga-ui/addon-charts';\n\n@Component({\n    selector: 'tui-axes-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiAxesExample1 {\n    protected readonly axisXLabels = ['Jan 2019', 'Feb', 'Mar'];\n    protected readonly axisYLabels = ['', '25%', '50%', '75%', '100%'];\n    protected readonly axisYSecondaryLabels = ['80 k', '100 k', '120 k'];\n    protected readonly verticalLinesHandler: TuiLineHandler = (index, total) =>\n        index === total - 1 ? 'none' : 'dashed';\n}\n"}}]);