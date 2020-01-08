import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost:3000/todos'; // json-server --watch db.json
  todos: Todo[];

  constructor(public http: HttpClient) { }

  getTodos() {
    this.http.get<Todo[]>(this.url)
      .subscribe(
        todos => console.log('http todos get', todos )
      );
  }
}