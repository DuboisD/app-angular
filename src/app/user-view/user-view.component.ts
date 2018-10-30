import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  isAuth = false;
  users: any[];
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.users = this.userService.users;
  }
  onConnect() {
    this.userService.switchOnAll();
  }
  onDisconnect() {
    if (confirm('Etes-vous sur de vouloir déconnecter tt le monde ?')) {
      this.userService.switchOffAll();
    } else {
      return null;
    }
  }
}
