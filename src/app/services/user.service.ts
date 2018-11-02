import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
  private users: User[] = [
    {
      firstName: 'Jean',
      lastName: 'Michou',
      type: 'student',
      email: 'jeanmichou@jano.com'
    },
    {
      firstName: 'Maria',
      lastName: 'Des baies',
      type: 'teacher',
      email: 'mariadbu@mdb.com'
    },
    {
      firstName: 'Paul',
      lastName: 'Eau',
      type: 'student',
      email: 'polo@water.com'
    }
  ];
  userSubject = new Subject<User[]>();
  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
