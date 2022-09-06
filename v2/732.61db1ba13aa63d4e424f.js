(window.webpackJsonp=window.webpackJsonp||[]).push([[732],{"0Tft":function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {tuiCardExpireValidator, tuiCardNumberValidator} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: `tui-input-card-grouped-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n})\nexport class TuiInputCardGroupedExample1 {\n    readonly control = new FormControl(null, [\n        tuiCardNumberValidator,\n        tuiCardExpireValidator,\n    ]);\n\n    get card(): string | null {\n        const value = this.control.value ? this.control.value.card : ``;\n\n        if (value.length < 7) {\n            return null;\n        }\n\n        switch (value.charAt(0)) {\n            case `0`:\n            case `1`:\n            case `2`:\n                return `https://ng-web-apis.github.io/dist/assets/images/common.svg`;\n            case `3`:\n            case `4`:\n            case `5`:\n                return `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`;\n            case `6`:\n            case `7`:\n                return `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`;\n            case `8`:\n            case `9`:\n            default:\n                return `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`;\n        }\n    }\n}\n"}}]);