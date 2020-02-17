import { Component, OnInit, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { DataBindingComponent } from '../../data-binding/data-binding.component';
import { DataService } from '../../../../service/data/data.service';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit, AfterContentInit {

  @ContentChild('dataBinding1', {static: false}) firstChild: DataBindingComponent;
  @ContentChildren(DataBindingComponent) children: QueryList<DataBindingComponent>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('firstChild ', this.firstChild);
    this.children.forEach((child, index) => {
      console.log((index + 1) + ' child ', child);
      console.log((index + 1) + ' child data ', child.data);
    });
  }
}
