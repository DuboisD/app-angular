export class TodoService {
  todos = [
    {
      id: 1,
      name: 'faire la vaisselle',
      status: 'à faire'
    },
    {
      id: 2,
      name: 'ranger les bureaux',
      status: 'fait'
    },
    {
      id: 3,
      name: 'être ponctuel-le',
      status: 'à faire'
    },
    {
      id: 4,
      name: 'ranger le frigo le vendredi',
      status: 'à faire'
    }
  ];
  switchOnAllT() {
    for (const todo of this.todos) {
      todo.status = 'fait';
    }
  }
  switchOffAllT() {
    for (const todo of this.todos) {
      todo.status = 'à faire';
    }
  }
  switchOnOneT(i: number) {
    this.todos[i].status = 'fait';
  }
  switchOffOneT(i: number) {
    this.todos[i].status = 'à faire';
  }
}
