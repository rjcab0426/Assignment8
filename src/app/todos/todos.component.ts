import { Component, OnInit } from '@angular/core';
import { TodoService } from  '..//todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodo(event, task) {
    event.preventDefault();
    this.todoService.addTodo(task.value);
    task.value = '';
  }
}
