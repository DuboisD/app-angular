import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoName: string;
  @Input() todoStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  getStatusT() {
    return this.todoStatus;
  }
  getColorT() {
    if (this.todoStatus === 'fait') {
      return 'green';
    } else if (this.todoStatus === 'à faire') {
      return 'red';
    }
  }
  onSwitchT() {
    if (this.todoStatus === 'fait') {
      this.todoService.switchOffOneT(this.index);
    } else if (this.todoStatus === 'à faire') {
      this.todoService.switchOnOneT(this.index);
    }
  }
}
