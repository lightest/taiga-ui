(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[48544],{48544:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {type TuiFileLike} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-files-example-6',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputFilesExample6 {\n    protected readonly control = new FormControl<TuiFileLike | null>(null);\n\n    protected removeFile(): void {\n        this.control.setValue(null);\n    }\n}\n"}}]);