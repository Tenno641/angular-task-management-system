import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.components';
import {UserComponent} from './user/user.component';
import {TicketComponent} from './ticket/ticket.component';
import {UserService} from './user/user.service';
import {User} from './user/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TicketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedUserId!: string;
  users: User[];
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
    this.users = userService.getAllUsers();
  }

  get selectedUser(): User {
    return this.userService.getUserById(this.selectedUserId)!;
  }

  onSelectedUser(userId: string): void {
    this.selectedUserId = userId;
  }
}
