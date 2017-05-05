import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expandable-drawer',
  templateUrl: './expandable-drawer.component.html',
  styleUrls: ['./expandable-drawer.component.css']
})
export class ExpandableDrawerComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  height: number;

  @Input()
  menu: string;

  constructor() { }

  ngOnInit() {
  }

   onToggle(event, content) {
    if(event.value === 'hide') {
      content.style.height = '0px';
    } else if (event.value === 'show') {
      content.style.height = '' + this.height + 'px';
    } else {
      alert("invalid event ExpandableDrawerComponent");
    }
  }
}
