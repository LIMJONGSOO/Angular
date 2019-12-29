import { Component, OnInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { Menu1Component } from '../menu1/menu1.component';
import { DataService } from '../../../service/data/data.service';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss']
})
export class Menu2Component implements OnInit {

  @ContentChild('menu1', {static: false}) firstChild: Menu1Component;
  @ContentChildren(Menu1Component) children: QueryList<Menu1Component>;
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
