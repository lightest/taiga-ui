(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[96022],{96022:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {type TuiHandler, type TuiIdentityMatcher} from '@taiga-ui/cdk';\n\ninterface Operations {\n    operations: readonly Operation[];\n    title: string;\n}\n\ninterface Operation {\n    amount: number;\n}\n\nconst COMPLETED = {\n    title: 'Done',\n    operations: [\n        {\n            amount: 100,\n        },\n        {\n            amount: 200,\n        },\n    ],\n};\n\n@Component({\n    selector: 'tui-filter-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiFilterExample2 {\n    protected readonly form = new FormGroup({\n        filters: new FormControl([\n            {\n                title: 'Drafts',\n            },\n        ]),\n    });\n\n    protected items: readonly Operations[] = [\n        COMPLETED,\n        {\n            title: 'Drafts',\n            operations: [\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 100,\n                },\n            ],\n        },\n        {\n            title: 'For sign',\n            operations: [],\n        },\n        {\n            title: 'Queue',\n            operations: [\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n            ],\n        },\n    ];\n\n    protected identityMatcher: TuiIdentityMatcher<Operations> = (\n        item1: Operations,\n        item2: Operations,\n    ) => item1.title === item2.title;\n\n    protected badgeHandler: TuiHandler<Operations, number> = item =>\n        item.operations.length;\n}\n"}}]);