(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[31e3],{31e3:e=>{e.exports="import {NgForOf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_MOBILE} from '@taiga-ui/cdk';\nimport {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';\nimport {TuiChevron} from '@taiga-ui/kit';\nimport {TuiAsideItemDirective} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example6\",\n    imports: [\n        TuiChevron,\n        TuiButton,\n        TuiDropdown,\n        TuiDataList,\n        NgForOf,\n        TuiAsideItemDirective,\n    ],\n    templateUrl: './index.html',\n    styles: [\n        `\n            .option {\n                white-space: normal;\n            }\n        `,\n    ],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected open = false;\n\n    protected readonly groups = [\n        {\n            label: 'Advantages of Taiga UI',\n            items: [\n                '🧩 Modular and fully-treeshakable. We harnessed the power of Secondary Entry Points mechanism. You can import even just one entity from our library and be sure that there is no redundant code in your bundle.',\n                '🧙 Agnostic. Our components are very flexible and are ready for any use case. But we take care of basic UX aspects to let you focus on your project features.',\n                '🦋 Customizable. We use CSS custom properties for all our styling and provide easy methods to customize all UI components.',\n                '🛠 Well engineered. We are not afraid to use DI to the max. All our components use OnPush, and the whole project is developed with strict TypeScript mode.',\n                '📦 It is big! We have 130+ components, 100+ directives, dozens of tokens, utils and tools. And it is not over yet.',\n                '🏗 Maintained! The library started as an internal product in our company. It is used by 50+ projects in production now and it is here to stay.',\n            ],\n        },\n        {\n            label: 'Well-engineered Taiga UI components',\n            items: ['Calendar', 'Dialog', 'ComboBox', 'Select'],\n        },\n    ];\n\n    protected readonly isMobile = inject(TUI_IS_MOBILE);\n}\n"}}]);