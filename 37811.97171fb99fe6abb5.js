(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[37811],{37811:e=>{e.exports="import {CommonModule} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIsPresentPipe, TuiLetModule} from '@taiga-ui/cdk';\nimport {TuiButtonDirective} from '@taiga-ui/core';\nimport {delayWhen, of, Subject} from 'rxjs';\n\n@Component({\n    standalone: true,\n    imports: [CommonModule, TuiLetModule, TuiIsPresentPipe, TuiButtonDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    private readonly loadCountSubject = new Subject<void>();\n\n    protected readonly count$ = of(0).pipe(delayWhen(() => this.loadCountSubject));\n\n    protected loadCount(): void {\n        this.loadCountSubject.next();\n        this.loadCountSubject.complete();\n    }\n}\n"}}]);