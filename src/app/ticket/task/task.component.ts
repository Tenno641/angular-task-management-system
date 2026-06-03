import {Component, Input} from '@angular/core';
import type {Task} from './task.model';
import {TaskService} from './task.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  get selectedTask() {
    return this.task;
  }

  removeTask(taskId: string) {
    this.taskService.removeTask(taskId);
  }
}
