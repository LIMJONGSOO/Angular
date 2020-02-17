import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo {
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
    return this.http.get<Todo[]>(this.url);
  }
}