(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[87496],{87496:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiPopover} from '@taiga-ui/cdk';\nimport {TuiAlertOptions} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-notifications-service-example-with-custom-label',\n    templateUrl: './alert-example-with-custom-label.template.html',\n    changeDetection,\n})\nexport class AlertExampleWithCustomLabelComponent {\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        readonly context: TuiPopover<TuiAlertOptions<unknown>, boolean>,\n    ) {}\n}\n"}}]);