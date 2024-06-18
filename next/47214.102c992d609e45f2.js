(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[47214],{47214:e=>{e.exports="import type {ElementRef} from '@angular/core';\nimport {Component, DestroyRef, inject} from '@angular/core';\nimport {takeUntilDestroyed} from '@angular/core/rxjs-interop';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiElementDirective, TuiScrollService} from '@taiga-ui/cdk';\nimport {TuiButton, TuiScrollbar} from '@taiga-ui/core';\nimport {TuiInputNumberModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiInputNumberModule,\n        FormsModule,\n        TuiButton,\n        TuiScrollbar,\n        TuiElementDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly scrollService = inject(TuiScrollService);\n    private readonly destroyRef = inject(DestroyRef);\n\n    protected scrollTop = 0;\n    protected scrollLeft = 0;\n    protected duration = 300;\n\n    protected onClick({nativeElement}: ElementRef<HTMLElement>): void {\n        this.scrollService\n            .scroll$(nativeElement, this.scrollTop, this.scrollLeft, this.duration)\n            .pipe(takeUntilDestroyed(this.destroyRef))\n            .subscribe();\n    }\n}\n"}}]);