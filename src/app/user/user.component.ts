import { Component, Input, input, computed } from '@angular/core';
import { DUMMY_USERS, type User } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) avatar!: string;

  name = input.required<string>();
  avatar = input.required<string>();

  imagePath = computed(() => {
    return "assets/users/" + this.avatar();
  })

  // get imagPath(): string {
  //   return "assets/users/" + this.avatar;
  // }
}
