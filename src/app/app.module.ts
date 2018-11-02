import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserAddComponent } from './user-add/user-add.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoService } from './services/todo.service';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: '', component: AuthComponent},
  { path: 'users', component: UsersComponent},
  { path: 'user-add', component: UserAddComponent},
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
    UserAddComponent,
    FourohfourComponent,
    TodoViewComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
