(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13242],{13242:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {type TuiSheetOptions} from '@taiga-ui/addon-mobile';\n\n@Component({\n    selector: 'tui-sheet-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiSheetExample4 {\n    protected open = false;\n\n    protected elastic = 1;\n\n    protected readonly options: Partial<TuiSheetOptions> = {\n        stops: ['12rem'],\n    };\n\n    protected get transform(): string {\n        return `scale(${this.elastic * this.elastic})`;\n    }\n\n    protected toggle(): void {\n        this.elastic = 1;\n        this.open = !this.open;\n    }\n\n    protected onElastic(elastic: number): void {\n        this.elastic = elastic;\n    }\n}\n"}}]);