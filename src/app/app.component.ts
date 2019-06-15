import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class AppComponent {

  mobileDevice: boolean;
  menuOpen: boolean = false;

  constructor() {
    this.mobileDevice = window.innerWidth <= 845;
  }

  getYear() {
    return new Date().getFullYear();
  }

  onResize(event) {
    this.mobileDevice = window.innerWidth <= 845;
  }

  openMenuOverlay(open: boolean) {
    this.menuOpen = open;
  }
}
