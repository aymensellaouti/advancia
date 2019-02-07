import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../Model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  name: string;
  description: string;
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.name = '';
    this.description = '';
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    const todo = new Todo(this.name, this.description);
    this.name = '';
    this.description = '';
    this.todoService.addTodo(todo);
  }
  deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
  }

}
