(window.webpackJsonp=window.webpackJsonp||[]).push([[819],{"33PH":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiFileLike} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-files-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFilesExample5 {\n    readonly control = new FormControl();\n\n    readonly file: TuiFileLike = {\n        name: `custom.txt`,\n    };\n}\n"}}]);