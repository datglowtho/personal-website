import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    host: {
        '(window:resize)': 'onResize($event)'
    }
})
export class AppComponent {
    useMobileStyle: boolean;

    constructor(private router: Router) {
        this.useMobileStyle = (window.innerWidth < 768);
    }

    onResize(event) {
        this.useMobileStyle = (event.target.innerWidth < 768);
    }
}
