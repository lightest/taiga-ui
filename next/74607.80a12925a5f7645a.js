(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[74607],{74607:n=>{n.exports='<div class="player">\n    <video\n        #video\n        tuiMedia\n        width="320"\n        class="video"\n        [(currentTime)]="currentTime"\n        [(paused)]="paused"\n        (click)="toggleState()"\n    >\n        <source\n            src="/assets/media/bbb.mp4"\n            type="video/mp4"\n        />\n    </video>\n    <div\n        tuiMode="onDark"\n        class="controls"\n    >\n        <button\n            appearance="flat"\n            size="s"\n            title="Play/Pause"\n            tuiIconButton\n            type="button"\n            [iconLeft]="icon"\n            [style.border-radius.%]="100"\n            (click)="toggleState()"\n        ></button>\n        <input\n            step="any"\n            tuiSlider\n            type="range"\n            class="slider"\n            [max]="video.duration"\n            [(ngModel)]="currentTime"\n        />\n        <div class="time">\n            <time [attr.datetime]="getTime(currentTime)">\n                {{ getTime(currentTime) }}\n            </time>\n            /\n            <time [attr.datetime]="getTime(video.duration)">\n                {{ getTime(video.duration) }}\n            </time>\n        </div>\n    </div>\n</div>\n'}}]);