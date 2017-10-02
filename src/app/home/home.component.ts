/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    host: {
        '(window:resize)': 'onResize($event)'
    }
})
export class HomeComponent {
    useMobileStyle: boolean;
    vSmallScreen: boolean;

    constructor() {
        this.useMobileStyle = (window.innerWidth < 768);
        this.vSmallScreen = (window.innerWidth < 460);
    }

    onResize(event) {
        this.useMobileStyle = (event.target.innerWidth < 768);
        this.vSmallScreen = (event.target.innerWidth < 460);
    }
}
