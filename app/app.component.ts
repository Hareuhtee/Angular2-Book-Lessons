import {Component} from '@angular/core'

@Component({
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
})
export class AppComponent {
  todos: Array<string>;
  constructor() {
    this.todos = ["Todo 1", "Todo 2", "Todo 3"];
  }
  addTodo(todo: string) {
    this.todos.push(todo);
  }
  removeTodo(todo: string){
      let index : string = this.todos.indexOf(todo);
      console.log(todo);
      if(index>-1){
          this.todos.splice(index,1);          
    }
  }
}