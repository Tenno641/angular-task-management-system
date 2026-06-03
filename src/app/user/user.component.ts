import {Component, EventEmitter, Input, Output} from '@angular/core';
import {type User} from './dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>();
  @Input({required: true}) selected!: boolean;

  get imagePath(): string {
    return "assets/users/" + this.user.avatar;
  }

  onSelectedUser(): void {
    this.select.emit(this.user.id)
  }
}
