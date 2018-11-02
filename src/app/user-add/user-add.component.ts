import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {User} from '../models/User.model';

@Component({
  selector: 'app-single-user',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group( {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      type: ['', [Validators.required, Validators.email]],
      email: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const userAdd = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['type']
    );
    this.userService.addUser(userAdd);
    this.router.navigate(['/users']);
  }
}
