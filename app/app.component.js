"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let AppComponent = class AppComponent {
    constructor() {
        this.todos = ["Todo 1", "Todo 2", "Todo 3"];
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    removeTodo(todo) {
        let index = this.todos.indexOf(todo);
        console.log(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
      <h4>Todos List</h4>
      <h5>Number of Todos: <span class="badge">{{todos.length}}</span></h5>
      <ul class="list-group">
        <li *ngFor="let todo of todos" class="list-group-item" 
                style="width:400px;">
          {{todo}}
          <button class="btn btn-danger" (click)="removeTodo(todo)" 
                style="float:right;height:20px;padding:0px 12px;">Remove</button>
        </li>
      </ul>
      <div class="form-inline">
        <input class="form-control" #todotext>
        <button class="btn btn-default" (click)="addTodo(todotext.value)">Add Todo</button>
        <button class="btn btn-default" (click)="removeTodo(todotext.value)">Remove Todo</button>
      </div>
    `
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map