import { Injectable } from '@angular/core';
import {Todo} from './Model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo [];
  constructor() {
    this.todos = [];
  }
  getTodos() {
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
    console.log(this.todos);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index < 0) {
      alert('erreur todo innexistant');
    } else {
      this.todos.splice(index, 1);
    }
  }
  logTodo() {
    console.log(this.todos);
  }
}
