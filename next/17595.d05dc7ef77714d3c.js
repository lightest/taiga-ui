(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17595],{17595:n=>{n.exports="import {NgForOf, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIcon} from '@taiga-ui/core';\nimport {TuiTiles} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiTiles, NgForOf, NgIf, TuiIcon],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected items = [\n        {w: 1, h: 1, content: 'Item 1'},\n        {w: 1, h: 1, content: 'Item 2'},\n        {w: 2, h: 1, content: 'Item 3'},\n        {w: 1, h: 1, content: 'Item 4'},\n        {w: 3, h: 1, content: 'Item 5'},\n        {w: 1, h: 1, content: 'Item 6'},\n        {w: 2, h: 2, content: 'rick'},\n        {w: 1, h: 1, content: 'Item 8'},\n        {w: 1, h: 1, content: 'Item 9'},\n    ];\n\n    protected order = new Map();\n}\n"}}]);