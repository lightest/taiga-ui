(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97844],{97844:e=>{e.exports="import {NgForOf, NgIf, SlicePipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAvatar, TuiChip} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiChip, NgForOf, NgIf, TuiAvatar, SlicePipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly sizes = ['m', 's', 'xs', 'xxs'] as const;\n}\n"}}]);