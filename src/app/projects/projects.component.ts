import {Component} from '@angular/core';
import {NavigationEnd} from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class ProjectsComponent {
  showSidenav: boolean;

  constructor(private router: Router) {
      router.events.subscribe(s => {
          if (s instanceof NavigationEnd) {
              const tree = router.parseUrl(router.url);
              if (tree.fragment) {
                  console.log(tree.fragment);
                  const element = document.getElementById(tree.fragment);
                  if (element) { element.scrollIntoView(); }
              }
          }
      });
      this.showSidenav = (window.innerWidth >= 768);
  }

  onResize(event) {
    this.showSidenav = (event.target.innerWidth >= 768);
  }

}
