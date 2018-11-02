import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/User.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription: Subscription;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() type: string;
  @Input() email: string;
  @Input() userIndex: number;
  @Input() id: number;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
