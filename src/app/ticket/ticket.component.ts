import {Component, Input} from '@angular/core';
import {TaskComponent} from '../task/task.component';
import {type User} from '../user/dummy-users';
import {DUMMY_TASKS, type Task} from '../task/DUMMY_TASKS';
import {TaskDialogComponent} from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-ticket',
  imports: [TaskComponent, TaskDialogComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) users!: User[];
  tasks: Task[] = DUMMY_TASKS;
  isTaskDialogOpen: boolean = false;

  get userTasks(): Task[] | undefined {
    return this.tasks.filter(task => task.userId === this.user.id);
  }

  removeTask(taskId: string): void {
    const index = this.tasks.findIndex(task => task.taskId === taskId);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  onOpenTaskDialog(): void {
    this.isTaskDialogOpen = true;
  }

  onCloseTaskDialog(): void {
    this.isTaskDialogOpen = false;
  }

}
