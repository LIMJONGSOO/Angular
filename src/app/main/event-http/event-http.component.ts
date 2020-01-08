import { Component, OnInit } from '@angular/core';
//Http
import { HttpService } from '../../../service/http/http.service';

@Component({
  selector: 'app-event-http',
  templateUrl: './event-http.component.html',
  styleUrls: ['./event-http.component.scss']
})
export class EventHttpComponent implements OnInit {

  constructor(private httpService: HttpService) {
    httpService.getTodos();
  }

  ngOnInit() {
  }

}
