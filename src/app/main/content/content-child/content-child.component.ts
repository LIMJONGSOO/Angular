import { Component, OnInit, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { DataBindingComponent } from '../../data-binding/data-binding.component';
import { DataService } from '../../../../service/data/data.service';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit, AfterContentInit {

  @ContentChild('dataBinding', {static: false}) firstChild: DataBindingComponent;
  @ContentChildren(DataBindingComponent) children: QueryList<DataBindingComponent>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.firstChild);
    this.children.forEach(child => console.log(child));
  }

  get message(): string {
    return this.dataService.message;
  }

  set message(newMessage: string) {
    this.dataService.message = newMessage;
  }
}
