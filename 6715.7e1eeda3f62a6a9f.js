(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6715],{6715:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiFlagPipe} from '@taiga-ui/core';\nimport type {TuiCountryIsoCode} from '@taiga-ui/i18n';\nimport {TUI_COUNTRIES} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiFlagPipe, AsyncPipe],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly countryIsoCode: TuiCountryIsoCode = 'AE';\n    protected readonly countriesNames$ = inject(TUI_COUNTRIES);\n}\n"}}]);