(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[24460],{24460:e=>{e.exports='<h2\n    class="header"\n    [class.header_empty]="!heading"\n>\n    <tui-input-inline\n        *ngIf="editing; else text"\n        tuiAutoFocus\n        [(ngModel)]="heading"\n        (focusedChange)="onFocusedChange($event)"\n        (keydown.enter.prevent)="toggle()"\n        (keydown.esc.prevent)="toggle()"\n    >\n        Type a heading\n    </tui-input-inline>\n    <ng-template #text>\n        <span>{{ heading }}</span>\n        <button\n            appearance="icon"\n            iconLeft="tuiIconEdit2Large"\n            size="xs"\n            tuiIconButton\n            type="button"\n            class="tui-space_left-1"\n            (click)="toggle()"\n        >\n            Edit heading\n        </button>\n    </ng-template>\n</h2>\n\n<p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem\n    doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus\n    tempore voluptates!\n</p>\n<p>\n    Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam\n    quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n</p>\n'}}]);