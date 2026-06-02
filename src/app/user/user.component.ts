import {Component, Input, Output, input, computed, EventEmitter} from '@angular/core';
import { DUMMY_USERS, type User } from './dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Output() selected = new EventEmitter<string>();

  get imagePath(): string {
    return "assets/users/" + this.avatar;
  }

  onSelectedUser(): void {
    this.selected.emit(this.userId)
  }
}
