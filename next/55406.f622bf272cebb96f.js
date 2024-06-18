(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[55406],{55406:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiBooleanHandler, TuiStringHandler} from '@taiga-ui/cdk';\nimport {TuiHint} from '@taiga-ui/core';\nimport {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\ninterface Item {\n    readonly id: number;\n    readonly name: string;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent10\",\n    imports: [\n        TuiMultiSelectModule,\n        ReactiveFormsModule,\n        TuiHint,\n        TuiTextfieldControllerModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected itemStringControl = new FormControl<string[]>([]);\n    protected itemControl = new FormControl<Item[]>([]);\n    protected itemStringGroupControl = new FormControl<string[]>([]);\n    protected itemGroupControl = new FormControl<Item[]>([]);\n\n    protected items = [\n        'Luke Skywalker',\n        'Leia Organa Solo',\n        'Darth Vader',\n        'Han Solo',\n        'Obi-Wan Kenobi',\n        'Yoda',\n    ];\n\n    protected customItems: readonly Item[] = [\n        {name: 'Luke Skywalker', id: 1},\n        {name: 'Leia Organa Solo', id: 2},\n        {name: 'Darth Vader', id: 3},\n        {name: 'Han Solo', id: 4},\n        {name: 'Obi-Wan Kenobi', id: 5},\n        {name: 'Yoda', id: 6},\n    ];\n\n    protected groupItems = [\n        ['Caesar', 'Greek', 'Apple and Chicken'],\n        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],\n    ];\n\n    protected customGroupItems: readonly Item[][] = [\n        [\n            {name: 'Caesar', id: 1},\n            {name: 'Apple and Chicken', id: 2},\n        ],\n        [\n            {name: 'Broccoli Cheddar', id: 3},\n            {name: 'Chicken and Rice', id: 4},\n            {name: 'Chicken Noodle', id: 5},\n        ],\n    ];\n\n    protected labels = ['Salad', 'Soup'];\n\n    protected stringify: TuiStringHandler<Item> = item => item.name;\n\n    protected disableHandler: TuiBooleanHandler<string> = item =>\n        item.startsWith('Broccoli');\n\n    protected disableItemHandler: TuiBooleanHandler<Item> = ({name}) =>\n        name.startsWith('Broccoli');\n}\n"}}]);