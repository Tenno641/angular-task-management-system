import {Component, EventEmitter, Input, Output} from '@angular/core';
import {type Task} from './DUMMY_TASKS';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() removed = new EventEmitter<string>();

  get selectedTask() {
    return this.task;
  }

  removeTask(taskId: string) {
    this.removed.emit(taskId);
  }
}
