import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../service/data/data.service';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.scss']
})
export class Menu1Component implements OnInit {

  view = true;
  @Input() data: string;
  data2: string;
  @Output() childEvent = new EventEmitter<string>();

  constructor(private dataService: DataService) {
    this.data = 'child data';
    this.data2 = 'child data2';
   }

  ngOnInit() { }

  test() {
    this.data = 'child data';
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
