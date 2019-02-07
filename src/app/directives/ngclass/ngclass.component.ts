import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
  providers: [TodoService]
})
export class NgclassComponent implements OnInit {
  est = true;
  ca = false;
  affiche = true;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  switch() {
    this.ca = !this.ca;
    this.est = !this.est;
    this.todoService.logTodo();
  }

}
