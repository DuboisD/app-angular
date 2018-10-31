import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
  private users: User[] = [
    {
      firstname: 'Jean',
      lastname: 'Michou',
      email: 'jeanmichou@jano.com'
    },
    {
      firstname: 'Maria',
      lastname: 'Des baies',
      email: 'mariadbu@mdb.com'
    },
    {
      firstname: 'Paul',
      lastname: 'Eau',
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
