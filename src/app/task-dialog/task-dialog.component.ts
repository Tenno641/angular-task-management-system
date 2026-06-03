import {Component, EventEmitter, Input, Output} from '@angular/core';
import type {Task} from '../task/task.model';
import type {User} from '../user/user.model';
import {FormsModule} from '@angular/forms';
import {NgSelectComponent} from '@ng-select/ng-select';
import {TaskService} from '../task/task.service';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-task-dialog',
  imports: [FormsModule, NgSelectComponent],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.css'
})
export class TaskDialogComponent {
  @Input({required: true}) userId!: string;
  @Output() dialogClosed = new EventEmitter();
  users: User[];
  tasks: Task[];
  formModel: Task = {
    userId: '',
    taskId: '',
    title: '',
    createdDate: new Date().toISOString().split('T')[0],
    dueDate: '',
    notes: '',
    description: '',
    relatedTasks: [],
    relatedPeople: []
  };
  private taskService: TaskService;

  constructor(taskService: TaskService, userService: UserService) {
    this.taskService = taskService;
    this.users = userService.getAllUsers();
    this.tasks = taskService.getAllTasks();
  }

  onSubmitTask(): void {
    this.formModel.userId = this.userId;
    this.formModel.taskId = `t${crypto.randomUUID()}`;
    console.log(this.formModel.taskId);
    this.taskService.addTask(this.formModel);
    this.dialogClosed.emit();
  }

  onDialogClosed(): void {
    this.dialogClosed.emit();
  }
}
