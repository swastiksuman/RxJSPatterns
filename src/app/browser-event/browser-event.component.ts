import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-event',
  templateUrl: './browser-event.component.html',
  styleUrls: ['./browser-event.component.css']
})
export class BrowserEventComponent implements OnInit {

  hoverSection: HTMLElement;
  subscription: boolean;
  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', onMouseMove);
    this.subscription = true;
  }

  subscribtionToggle() {
    if (this.subscription) {
      this.hoverSection.removeEventListener('mousemove', onMouseMove);
    } else {
      this.hoverSection.addEventListener('mousemove', onMouseMove);
    }
    this.subscription = !this.subscription;
  }
}

function onMouseMove(ev: MouseEvent) {
  console.log(ev);
}
