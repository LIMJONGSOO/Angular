import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-state-share',
  templateUrl: './state-share.component.html',
  styleUrls: ['./state-share.component.scss'],
})
export class StateShareComponent implements OnInit {
  @ViewChild(ChildComponent, {static: false}) child: ChildComponent;
  @ViewChild('p', {static: false}) p: ElementRef;
  data: string;

  constructor() {
    this.data = 'parent';

    console.log('constructor', this.p);
  }

  ngOnInit() { }

  removeData(data: string) {
    this.data = data;
  }

  toggle() {
    this.child.view = !this.child.view;
  }

  changeData() {
    this.child.changeData('parent change data');
  }

  initData() {
    this.data = 'parent';
  }
}
