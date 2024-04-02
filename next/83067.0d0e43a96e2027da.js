(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[83067],{83067:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport type {TuiPopover} from '@taiga-ui/cdk';\nimport {type TuiAlertOptions, TuiButtonDirective, TuiModeModule} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    standalone: true,\n    selector: 'tui-notifications-service-example',\n    imports: [TuiButtonDirective, TuiModeModule],\n    templateUrl: './alert-example.template.html',\n    changeDetection,\n})\nexport class AlertExampleComponent {\n    private readonly context =\n        inject<TuiPopover<TuiAlertOptions<void>, boolean>>(POLYMORPHEUS_CONTEXT);\n\n    protected ok(): void {\n        this.context.completeWith(true);\n    }\n\n    protected cancel(): void {\n        this.context.completeWith(false);\n    }\n}\n"}}]);