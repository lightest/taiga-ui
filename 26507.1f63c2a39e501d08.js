(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[26507],{26507:n=>{n.exports="```ts\nimport {ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputPhoneInternationalComponent} from '@taiga-ui/kit';\n\n@Component({\n  standalone: true,\n  imports: [ReactiveFormsModule, TuiInputPhoneInternationalComponent],\n  // ...\n})\nexport class MyComponent {\n  readonly testForm = new FormGroup({\n    testValue: new FormControl('+78005553535'),\n  });\n\n  readonly countries: ReadonlyArray<TuiCountryIsoCode> = [\n    TuiCountryIsoCode.RU,\n    TuiCountryIsoCode.KZ,\n    TuiCountryIsoCode.UA,\n    TuiCountryIsoCode.BY,\n  ];\n}\n```\n"}}]);