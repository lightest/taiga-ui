(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[25244],{25244:n=>{n.exports="import {AsyncPipe, NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAutoColorPipe, TuiFallbackSrcPipe, TuiSurface, TuiTitle} from '@taiga-ui/core';\nimport {TuiAvatar, TuiAvatarStackComponent} from '@taiga-ui/kit';\nimport {TuiCardMedium} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [\n        TuiAvatarStackComponent,\n        TuiAvatar,\n        TuiFallbackSrcPipe,\n        AsyncPipe,\n        TuiAutoColorPipe,\n        NgForOf,\n        TuiSurface,\n        TuiCardMedium,\n        TuiTitle,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly urls = [\n        'https://avatars.githubusercontent.com/u/11832552',\n        'https://avatars.githubusercontent.com/u/10106368',\n        'https://avatars.githubusercontent.com/u/46284632',\n    ];\n}\n"}}]);