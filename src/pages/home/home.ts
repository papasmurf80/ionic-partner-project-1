import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoDirective } from '../../directives/todo/todo';
import { Todo } from '../../directives/directives.module';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TodoDirective]
})
export class HomePage {

  newTodo: Todo = new Todo();

  constructor(public navCtrl: NavController, public _todoServe: TodoDirective) {

  }

  addTodo() {
    if (!this.newTodo.title) {
      return;
    }

    this._todoServe.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this._todoServe.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this._todoServe.deleteTodoById(todo.id);
  }

  get todos() {
    return this._todoServe.getAllTodos();
  }

}
