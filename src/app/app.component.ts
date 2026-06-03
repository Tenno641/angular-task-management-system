import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.components';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS, type User} from './user/dummy-users';
import {TicketComponent} from './ticket/ticket.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TicketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedUserId!: string;
  protected readonly users: User[] = DUMMY_USERS;

  get selectedUser(): User | undefined {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectedUser(userId: string): void {
    this.selectedUserId = userId;
  }
}
