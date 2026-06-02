import {Component, Input} from '@angular/core';
import {type Task } from './DUMMY_TASKS';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  get selectedTask() {
    return this.task;
  }
}
