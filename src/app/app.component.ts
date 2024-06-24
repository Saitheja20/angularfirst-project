import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.components';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../app/dummy-user';
import { TasksComponent } from '../tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
})
export class AppComponent {
  title="";
  user = DUMMY_USERS;
  selectedUserId?: string;;
  userId?:string;
  selected!:true;

  get selectedUser() {
    return this.user.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    // console.log("Selected user with id "+id+"mkudu");
    this.selectedUserId = id;
  }
}
