import { Component, OnInit } from '@angular/core';
//Http
import { HttpService, Todo } from '../../../service/http/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-http',
  templateUrl: './event-http.component.html',
  styleUrls: ['./event-http.component.scss']
})
export class EventHttpComponent implements OnInit {

  todos$: Observable<Todo[]>;
  todos: Todo[];

  constructor(private httpService: HttpService) {
    this.todos$ = httpService.getTodos();

    this.todos$.subscribe(
      todos => {
        this.todos = todos;
      });
  }

  ngOnInit() {
  }

}
