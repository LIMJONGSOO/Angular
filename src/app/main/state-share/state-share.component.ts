import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-state-share',
  templateUrl: './state-share.component.html',
  styleUrls: ['./state-share.component.scss'],
})
export class StateShareComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildComponent, {static: false}) child: ChildComponent;
  @ViewChild('viewchild', {static: false}) viewchild: ElementRef;
  data: string;

  constructor() {
    this.data = 'parent';
  }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log('parent component viewChild', this.viewchild);
    console.log(this.viewchild.nativeElement.getAttribute('id'));
  }

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
