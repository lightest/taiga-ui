(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[96168],{96168:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiDataListComponent,\n    TuiDialogService,\n    TuiDropdownContextDirective,\n    TuiDropdownDirective,\n    TuiDropdownOptionsDirective,\n    TuiDropdownPositionSidedDirective,\n    TuiIcon,\n    TuiOptionComponent,\n} from '@taiga-ui/core';\nimport {TuiDataListDropdownManagerDirective} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        NgForOf,\n        TuiDropdownContextDirective,\n        TuiDropdownDirective,\n        TuiDataListDropdownManagerDirective,\n        TuiOptionComponent,\n        TuiIcon,\n        TuiDropdownPositionSidedDirective,\n        TuiDropdownOptionsDirective,\n        TuiDataListComponent,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly dialogs = inject(TuiDialogService);\n\n    protected readonly menuItems = [\n        {title: 'View', iconName: '@tui.eye'},\n        {title: 'Copy', iconName: '@tui.copy'},\n        {title: 'Delete', iconName: '@tui.trash'},\n        {title: 'Move', iconName: '@tui.folder'},\n    ] as const;\n\n    protected readonly tableData = [\n        {character: 'Ross Geller', actor: 'David Schwimmer'},\n        {character: 'Chandler Bing', actor: 'Matthew Perry'},\n        {character: 'Joey Tribbiani', actor: 'Matt LeBlanc'},\n        {character: 'Phoebe Buffay', actor: 'Lisa Kudrow'},\n        {character: 'Monica Geller', actor: 'Courteney Cox'},\n        {character: 'Rachel Green', actor: 'Jennifer Aniston'},\n    ] as const;\n\n    protected readonly tableColumns = Object.keys(this.tableData[0]);\n\n    protected readonly moreOptions = ['Option 1', 'Option 2', 'Option 3'];\n\n    protected getObjectValues = (obj: Record<string, unknown>): unknown[] =>\n        Object.values(obj);\n\n    protected printToConsole(action: string, contextInfo: unknown): void {\n        this.dialogs.open(`[${action}]: ${JSON.stringify(contextInfo)}`).subscribe();\n    }\n}\n"}}]);