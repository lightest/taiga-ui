(window.webpackJsonp=window.webpackJsonp||[]).push([[987],{"2oOl":function(n,i,t){"use strict";t.r(i),i.default='<div class="container">\n    <div class="tui-row">\n        <div class="tui-col_md-4">\n            <tui-island size="l">\n                <ul class="tui-list">\n                    <li class="tui-list__item">\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                        labore et dolore magna aliqua.\n                    </li>\n                    <li class="tui-list__item">\n                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                        consequat\n                    </li>\n                    <li class="tui-list__item">\n                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n                        pariatur\n                    </li>\n                    <li class="tui-list__item">\n                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim\n                        id est laborum\n                    </li>\n                </ul>\n            </tui-island>\n        </div>\n        <div class="tui-col_md-4">\n            <tui-island\n                size="l"\n                textAlign="center"\n            >\n                <h3 class="title">Title!</h3>\n                <form [formGroup]="testForm">\n                    <tui-input-phone\n                        formControlName="testValue"\n                        class="input"\n                        [tuiTextfieldLabelOutside]="true"\n                    >\n                        Input phone\n                    </tui-input-phone>\n                    <tui-error\n                        formControlName="testValue"\n                        [error]="[] | tuiFieldError | async"\n                    ></tui-error>\n                </form>\n            </tui-island>\n        </div>\n        <div class="tui-col_md-4">\n            <a\n                tuiIsland\n                href="http://ng-web-apis.github.io/"\n                size="l"\n                target="_blank"\n                [hoverable]="true"\n            >\n                <img\n                    alt="Taiga"\n                    class="image"\n                    [src]="bannerImage"\n                />\n                <h3 class="title title_size_s">Title</h3>\n                <p class="text">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n                    et dolore magna aliqua\n                </p>\n                <a\n                    tuiButton\n                    type="button"\n                    href="https://ng-web-apis.github.io"\n                    mode="secondary"\n                    size="m"\n                    target="_blank"\n                    class="button"\n                >\n                    Visit a website\n                </a>\n            </a>\n        </div>\n    </div>\n    <div class="tui-row tui-space_top-5">\n        <div class="tui-col_md-4">\n            <tui-island textAlign="center">\n                <h3 class="tui-island__title">Some product</h3>\n                <p class="tui-island__paragraph">{{ collapsingText }}</p>\n                <p class="tui-island__paragraph tui-island__paragraph_link">\n                    <button\n                        tuiLink\n                        type="button"\n                        (click)="expandText()"\n                    >\n                        Show\n                        <ng-container *ngIf="expanded; else more">less</ng-container>\n                        <ng-template #more>more</ng-template>\n                    </button>\n                </p>\n            </tui-island>\n        </div>\n        <div class="tui-col_md-4"></div>\n    </div>\n</div>\n'}}]);