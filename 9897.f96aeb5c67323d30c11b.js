(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[9897],{9897:n=>{n.exports="import {Component, Inject, ViewChild} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DEFAULT_MATCHER, TUI_WINDOW_HEIGHT, tuiControlValue} from '@taiga-ui/cdk';\nimport {TuiInputComponent} from '@taiga-ui/kit';\nimport {combineLatest, Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\nconst USERS = [\n    'John Doe',\n    'Jane Doe',\n    'John Smith',\n    'Jane Smith',\n    'John Johnson',\n    'Jane Johnson',\n    'John Williams',\n    'Jane Williams',\n    'John Brown',\n    'Jane Brown',\n    'John Davis',\n    'Jane Davis',\n    'John Miller',\n    'Jane Miller',\n    'John Wilson',\n    'Jane Wilson',\n];\n\n@Component({\n    selector: 'tui-sheet-dialog-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSheetDialogExample4 {\n    @ViewChild(TuiInputComponent)\n    private readonly input?: TuiInputComponent;\n\n    open = false;\n\n    readonly search = new FormControl('');\n\n    readonly users$ = tuiControlValue<string>(this.search).pipe(\n        map(search => USERS.filter(user => TUI_DEFAULT_MATCHER(user, search))),\n    );\n\n    readonly buffer$ = combineLatest([this.users$, this.height$]).pipe(\n        map(([users, height]) => `calc(${height}px - ${15 + users.length * 3}rem)`),\n    );\n\n    constructor(\n        @Inject(TUI_WINDOW_HEIGHT) private readonly height$: Observable<number>,\n    ) {}\n\n    toggle(open: boolean): void {\n        this.open = open;\n\n        if (open) {\n            this.search.setValue('');\n        }\n    }\n\n    scroll(): void {\n        const input = this.input?.nativeFocusableElement;\n        const container = input?.closest('tui-sheet-dialog');\n\n        if (!container) {\n            return;\n        }\n\n        container.scrollTop = container.clientHeight;\n        input?.focus();\n    }\n}\n"}}]);