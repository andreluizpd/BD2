import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './../users/user-list/user-list.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserFormComponent } from '../users/user-form/user-form.component';
import { UsersModule } from '../users/users.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    UsersModule
  ],
  declarations: [
    UsersComponent,
    UserCreateComponent,
    UserUpdateComponent
  ]
})
export class PagesModule { }
