import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  defaultONOff = 'à faire';

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.todoService.addTodolist(name, status);
    this.router.navigate(['/todo-list']);
  }
}
