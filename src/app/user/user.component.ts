import { Component } from '@angular/core';
import {DUMMY_USERS} from "../dummy-user"
const random = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 SelectedUser = DUMMY_USERS[random];
}
