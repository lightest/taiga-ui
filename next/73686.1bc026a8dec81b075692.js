"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[73686],{73686:n=>{n.exports="import {Component, ElementRef} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButtonComponent} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-element-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiElementExample1 {\n    isButton(component: unknown): boolean {\n        return component instanceof TuiButtonComponent;\n    }\n\n    isElement(element: unknown): boolean {\n        return element instanceof ElementRef;\n    }\n}\n"}}]);