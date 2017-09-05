import {Component} from '@angular/core';

@Component({
  selector: 'app-rowing',
  templateUrl: './rowing.component.html',
  styleUrls: ['./rowing.component.scss'],
  host: {
      '(window:resize)': 'onResize($event)'
  }
})
export class RowingComponent {
    useMobileStyle: boolean;

    constructor() {
        this.useMobileStyle = (window.innerWidth < 768);
    }

    onResize(event) {
        this.useMobileStyle = (event.target.innerWidth < 768);
    }

}
