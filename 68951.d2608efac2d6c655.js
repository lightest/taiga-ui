(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[68951],{68951:n=>{n.exports='<button\n    tuiButton\n    type="button"\n    (click)="open.set(!open())"\n>\n    Toggle\n</button>\n\n<tui-drawer *tuiPopup="open()">\n    <header>\n        <h2 tuiHeader>\n            <div tuiTitle>\n                <span tuiCaption>Caption・caption</span>\n                <span>\n                    Drawer title\n                    <tui-badge>Label</tui-badge>\n                </span>\n                <span tuiSubtitle>\n                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.\n                </span>\n            </div>\n\n            <div tuiAccessories>\n                <button\n                    iconStart="@tui.search"\n                    tuiButton\n                    type="button"\n                >\n                    More info\n                </button>\n                <button\n                    iconStart="@tui.ellipsis"\n                    tuiIconButton\n                    type="button"\n                >\n                    Actions\n                </button>\n                <button\n                    appearance="icon"\n                    iconStart="@tui.x"\n                    tuiIconButton\n                    type="button"\n                    (click)="open.set(false)"\n                >\n                    Close\n                </button>\n            </div>\n        </h2>\n        <div>\n            <button\n                tuiButton\n                type="button"\n            >\n                Action 1\n            </button>\n            <a\n                appearance="action"\n                href="#"\n                tuiButton\n            >\n                Action 2\n            </a>\n            <button\n                tuiLink\n                type="button"\n            >\n                Action 3\n            </button>\n        </div>\n        <nav tuiNavigationNav>\n            <tui-tabs>\n                <button\n                    tuiTab\n                    type="button"\n                >\n                    Default view\n                </button>\n                <button\n                    tuiTab\n                    type="button"\n                >\n                    Details\n                </button>\n                <button\n                    tuiTab\n                    type="button"\n                >\n                    Followers\n                </button>\n            </tui-tabs>\n            <hr />\n            <button\n                size="xs"\n                tuiButton\n                type="button"\n            >\n                Primary\n            </button>\n            <button\n                appearance="secondary"\n                iconStart="@tui.ellipsis"\n                size="xs"\n                tuiIconButton\n                type="button"\n            >\n                More\n            </button>\n        </nav>\n    </header>\n    <p *tuiRepeatTimes="let index of 15">Content</p>\n    <footer>\n        <button\n            size="m"\n            tuiButton\n            type="button"\n            [style.margin-inline-end]="\'auto\'"\n        >\n            Tertiary action\n        </button>\n        <button\n            size="m"\n            tuiButton\n            type="button"\n        >\n            Secondary action\n        </button>\n        <button\n            appearance="primary"\n            size="m"\n            tuiButton\n            type="button"\n        >\n            Primary action\n        </button>\n    </footer>\n</tui-drawer>\n'}}]);