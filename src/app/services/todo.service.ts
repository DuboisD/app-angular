import {Subject} from 'rxjs';

export class TodoService {
  todoSubject = new Subject<any[]>();
  private todos = [
    {
      id: 1,
      name: 'Faire la vaisselle',
      status: 'à faire'
    },
    {
      id: 2,
      name: 'Ranger les bureaux',
      status: 'fait'
    },
    {
      id: 3,
      name: 'Etre ponctuel-le',
      status: 'à faire'
    },
    {
      id: 4,
      name: 'Ranger le frigo le vendredi',
      status: 'à faire'
    }
  ];
  emitTodoSubject() {
    this.todoSubject.next(this.todos.slice());
  }
  switchOnAllT() {
    for (const todo of this.todos) {
      todo.status = 'fait';
    }
    this.emitTodoSubject();
  }
  switchOffAllT() {
    for (const todo of this.todos) {
      todo.status = 'à faire';
    }
    this.emitTodoSubject();
  }
  switchOnOneT(i: number) {
    this.todos[i].status = 'fait';
    this.emitTodoSubject();
  }
  switchOffOneT(i: number) {
    this.todos[i].status = 'à faire';
    this.emitTodoSubject();
  }
  addTodolist(name: string, status: string) {
    const todoObject = {
      id: 0,
      name: '',
      status: ''
    };
    todoObject.name = name;
    todoObject.status = status;
    todoObject.id = this.todos[(this.todos.length - 1)].id + 1;
    this.todos.push(todoObject);
  }
}
