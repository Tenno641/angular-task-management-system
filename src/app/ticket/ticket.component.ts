import {Component, Input} from '@angular/core';
import {TaskComponent} from '../task/task.component';
import { User } from '../user/dummy-users';
import { type Task, DUMMY_TASKS } from '../task/DUMMY_TASKS';

@Component({
  selector: 'app-ticket',
  imports: [TaskComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({ required: true }) user!: User;
  tasks: Task[] = DUMMY_TASKS;

  get userTasks(): Task[] | undefined {
    return this.tasks.filter(task => task.userId === this.user.id);
  }
}
