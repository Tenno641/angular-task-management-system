import {Component, Input} from '@angular/core';
import {TaskComponent} from '../task/task.component';
import type {User} from '../user/user.model';
import {TaskDialogComponent} from '../task-dialog/task-dialog.component';
import {TaskService} from '../task/task.service';
import type {Task} from '../task/task.model'

@Component({
  selector: 'app-ticket',
  imports: [TaskComponent, TaskDialogComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({required: true}) user!: User;
  isTaskDialogOpen: boolean = false;
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  get userTasks(): Task[] | undefined {
    return this.taskService.getUserTasks(this.user.id);
  }

  onOpenTaskDialog(): void {
    this.isTaskDialogOpen = true;
  }

  onCloseTaskDialog(): void {
    this.isTaskDialogOpen = false;
  }
}
