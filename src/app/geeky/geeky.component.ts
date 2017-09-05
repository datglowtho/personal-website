import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './geeky.component.html',
  styleUrls: ['./geeky.component.scss'],
    host: {
        '(window:resize)': 'onResize($event)'
    }
})
export class GeekyComponent {
    useMobileStyle: boolean;

    constructor() {
        this.useMobileStyle = (window.innerWidth < 768);
    }

    onResize(event) {
        this.useMobileStyle = (event.target.innerWidth < 768);
    }
}
