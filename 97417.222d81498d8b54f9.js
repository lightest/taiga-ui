(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97417],{97417:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAppearance, TuiButton, TuiOption} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [TuiAppearance, TuiButton, NgForOf, TuiOption],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly appearances = [\n        'primary',\n        'secondary',\n        'destructive',\n        'neutral',\n        'flat',\n        'link',\n        'accent',\n        'opposite',\n        'floating',\n        'textfield',\n        'whiteblock',\n        'outline',\n        'error',\n        'success',\n        'warning',\n        'info',\n        'glass',\n    ] as const;\n}\n"}}]);