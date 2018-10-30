import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AuthComponent } from './auth/auth.component';
import { UserViewComponent } from './user-view/user-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleUserComponent } from './single-user/single-user.component';

const appRoutes: Routes = [
  { path: 'users', component: UserViewComponent},
  { path: 'users/:id', component: SingleUserComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', component: UserViewComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UsersComponent,
    AuthComponent,
    UserViewComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
