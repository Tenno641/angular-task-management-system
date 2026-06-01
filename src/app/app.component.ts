import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.components';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS, type User } from './user/dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-name';
  users: User[] = DUMMY_USERS;
  protected readonly DUMMY_USERS = DUMMY_USERS;
}
