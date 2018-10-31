import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {
  isAuth = false;
  todos: any[];
  todoSubscription: Subscription;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  constructor(private todoService: TodoService, private authService: AuthService) {}
  ngOnInit() {
    this.isAuth = this.authService.isAuth;
    this.todoSubscription = this.todoService.todoSubject.subscribe(
      (todos: any[]) => {
        this.todos = todos;
      }
    );
    this.todoService.emitTodoSubject();
  }
  onConnectT() {
    this.todoService.switchOnAllT();
  }
  onDisconnectT() {
    if (confirm('Etes-vous sur de vouloir marquer toutes les tâches comme non faites ?')) {
      this.todoService.switchOffAllT();
    } else {
      return null;
    }
  }
}
