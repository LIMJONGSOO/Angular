import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.scss']
})
export class Menu4Component implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() data: string;

  constructor() {
    console.log('Menu4Conponent start');
    console.log('[constructor]');
    console.log(`data: ${this.data}`);
    this.data = 'Test';
    console.log(`data: ${this.data}`);
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[OnChanges]');
    console.log(`data: ${this.data}`);
    console.log('changes:', changes);
  }

  ngOnInit() {
    console.log('[OnInit]');
    console.log(`data: ${this.data}`);
  }

  ngDoCheck() {
    console.log('[DoCheck]');
  }

  ngAfterContentInit() {
    console.log('[AfterContentInit]');
  }

  ngAfterContentChecked() {
    console.log('[AfterContentChecked]');
  }

  ngAfterViewInit() {
    console.log('[AfterViewInit]');
  }

  ngAfterViewChecked() {
    console.log('[AfterViewChecked]');
  }

  ngOnDestroy() {
    console.log('[OnDestroy]');
    console.log('Menu4Conponent end');
  }
}
