import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  name = 'user';
  status = 'statut';

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    /*this.name = this.userService.getUserById(+id).name;
    this.status = this.userService.getUserById(+id).status;*/
  }
}
