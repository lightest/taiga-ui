(window.webpackJsonp=window.webpackJsonp||[]).push([[1354],{EctT:function(n,t,i){"use strict";i.r(t),t.default='<article class="zoom-controller">\n    <button\n        tuiIconButton\n        appearance="flat"\n        tuiMode="onDark"\n        size="s"\n        icon="tuiIconMinus"\n        class="minus"\n        (click)="change(-0.25)"\n    ></button>\n    <label\n        tuiSliderThumbLabel\n        class="slider-wrapper"\n    >\n        <div\n            tuiHintMode="onDark"\n            tuiHintDirection="top-middle"\n            [tuiManualHint]="hint"\n            [tuiManualHintShow]="!!(showHint$ | async)"\n        ></div>\n\n        <ng-template #hint>\n            {{ value | percent }}\n        </ng-template>\n\n        <input\n            tuiSlider\n            type="range"\n            step="any"\n            [min]="min"\n            [max]="max"\n            [(ngModel)]="value"\n        />\n    </label>\n    <button\n        tuiIconButton\n        appearance="flat"\n        tuiMode="onDark"\n        size="s"\n        icon="tuiIconPlus"\n        class="plus"\n        (click)="change(+0.25)"\n    ></button>\n</article>\n'}}]);