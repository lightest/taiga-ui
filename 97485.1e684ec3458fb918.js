(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97485],{97485:e=>{e.exports="import {Injectable} from '@angular/core';\nimport {type TuiTreeLoader} from '@taiga-ui/kit';\nimport {map, type Observable, timer} from 'rxjs';\n\nimport type {Item} from './index';\n\n@Injectable()\nexport class TreeLoader implements TuiTreeLoader<Item> {\n    public loadChildren({text}: Item): Observable<Item[]> {\n        return timer(3000).pipe(\n            map(() => [\n                {text: `${text} 1`, children: Math.random() > 0.5},\n                {text: `${text} 2`, children: Math.random() > 0.5},\n                {text: `${text} 3`, children: Math.random() > 0.5},\n            ]),\n        );\n    }\n\n    public hasChildren({children}: Item): boolean {\n        return !!children;\n    }\n}\n"}}]);