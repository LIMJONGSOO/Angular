import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  ol: Element;
  @Input() data: string;
  @ViewChild('order', {static: false}) lifeCycleOrder: ElementRef;

  constructor() {
    this.ol = document.createElement('ol');
    console.log('LifeCycleComponent start');
    console.log('[constructor]');
    const li = document.createElement('li');
    li.innerText = 'constructor';
    this.ol.appendChild(li);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[OnChanges]');
    console.log(`data: ${this.data}`);
    console.log('changes:', changes);
    const li = document.createElement('li');
    li.innerText = 'OnChanges';
    this.ol.appendChild(li);
  }

  ngOnInit() {
    console.log('[OnInit]');
    const li = document.createElement('li');
    li.innerText = 'OnInit';
    this.ol.appendChild(li);
  }

  ngDoCheck() {
    console.log('[DoCheck]');
    const li = document.createElement('li');
    li.innerText = 'DoCheck';
    this.ol.appendChild(li);
  }

  ngAfterContentInit() {
    console.log('[AfterContentInit]');
    const li = document.createElement('li');
    li.innerText = 'AfterContentInit';
    this.ol.appendChild(li);
  }

  ngAfterContentChecked() {
    console.log('[AfterContentChecked]');
    const li = document.createElement('li');
    li.innerText = 'AfterContentChecked';
    this.ol.appendChild(li);
  }

  ngAfterViewInit() {
    console.log('[AfterViewInit]');
    const li = document.createElement('li');
    li.innerText = 'AfterViewInit';
    this.ol.appendChild(li);
    this.lifeCycleOrder.nativeElement.appendChild(this.ol);
  }

  ngAfterViewChecked() {
    console.log('[AfterViewChecked]');
    const li = document.createElement('li');
    li.innerText = 'AfterViewChecked';
    this.ol.appendChild(li);
  }

  ngOnDestroy() {
    console.log('[OnDestroy]');
    console.log('LifeCycleComponent end');
    const li = document.createElement('li');
    li.innerText = 'OnDestroy';
    this.ol.appendChild(li);
  }
}