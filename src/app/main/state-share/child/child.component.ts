import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../../service/data/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  view = true;
  @Input() data: string;
  @Output() childEvent = new EventEmitter<string>();

  constructor(private dataService: DataService) {
    this.data = 'child data';
  }

  ngOnInit() {
  }

  test() {
    this.data = 'child change data';
    this.childEvent.emit(this.data);
  }

  changeData(data: string) {
    this.data = data;
  }

  get message(): string {
    return this.dataService.message;
  }

  set message(newMessage: string) {
    this.dataService.message = newMessage;
  }
}
