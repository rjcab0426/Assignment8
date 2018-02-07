import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
