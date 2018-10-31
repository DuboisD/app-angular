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
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoService } from './services/todo.service';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: '', component: AuthComponent},
  { path: 'users', component: UserViewComponent},
  { path: 'todo-list', component: TodoViewComponent},
  { path: 'edit', component: EditTodoComponent},
  { path: 'not-found', component: FourohfourComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UsersComponent,
    AuthComponent,
    UserViewComponent,
    SingleUserComponent,
    FourohfourComponent,
    TodoViewComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    AuthService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
