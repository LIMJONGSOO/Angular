import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  @Input() data: string;

  constructor() {
    if (!this.data) { this.data = 'first data'; }
  }

  ngOnInit() {
  }

}
