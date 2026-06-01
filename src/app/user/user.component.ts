import { Component, Input } from '@angular/core';
import { DUMMY_USERS, type User } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() name!: string;
  @Input() avatar!: string;

  get imagPath(): string {
    return "assets/users/" + this.avatar;
  }
}
