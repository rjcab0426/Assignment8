import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todos = [];

  constructor() { }

  getTodos() {
    return this.todos;
  }

  addTodo(task) {
    this.todos.unshift(task);
  }
}
