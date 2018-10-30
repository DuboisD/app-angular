import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() userName: string;
  @Input() userStatus: string;
  @Input() index: number;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.userStatus;
  }
  getColor() {
    if (this.userStatus === 'actif') {
      return 'green';
    } else if (this.userStatus === 'non actif') {
      return 'red';
    }
  }
  onSwitch() {
    if (this.userStatus === 'actif') {
      this.userService.switchOffOne(this.index);
    } else if (this.userStatus === 'non actif') {
      this.userService.switchOnOne(this.index);
    }
  }
}
