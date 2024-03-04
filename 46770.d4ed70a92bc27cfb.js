(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[46770],{46770:e=>{e.exports="import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {type TuiDurationOptions, tuiHeightCollapse} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-height-collapse-example',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    animations: [tuiHeightCollapse],\n})\nexport class TuiHeightCollapseExample {\n    @Input()\n    public speed = 0;\n\n    protected isOpen = false;\n\n    @tuiPure\n    protected getAnimation(duration: number): TuiDurationOptions {\n        return {value: '', params: {duration}};\n    }\n}\n"}}]);