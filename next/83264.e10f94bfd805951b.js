(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[83264],{83264:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';\nimport {TuiAutoColorPipe, TuiInitialsPipe} from '@taiga-ui/core';\nimport {TuiAvatar, TuiAvatarStackComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [\n        TuiAvatarStackComponent,\n        NgForOf,\n        TuiAvatar,\n        TuiInitialsPipe,\n        TuiAutoColorPipe,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];\n    protected readonly sizes: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [\n        'xxl',\n        'xl',\n        'l',\n        'm',\n        's',\n        'xs',\n    ];\n}\n"}}]);