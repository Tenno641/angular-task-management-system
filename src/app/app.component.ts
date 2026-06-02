import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.components';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS, type User } from './user/dummy-users';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TicketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly DUMMY_USERS = DUMMY_USERS;

  selectedUserId: string = DUMMY_USERS[0].id;

  get selectedUser(): User {
    return DUMMY_USERS.find(user => user.id === this.selectedUserId) as User;
  }

  onSelectedUser(userId: string): void {
    this.selectedUserId = userId;
  }
}
