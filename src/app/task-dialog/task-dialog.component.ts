import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../task/DUMMY_TASKS';
import {User} from '../user/dummy-users';
import {FormsModule} from '@angular/forms';
import {NgSelectComponent} from '@ng-select/ng-select';

@Component({
  selector: 'app-task-dialog',
  imports: [FormsModule, NgSelectComponent],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.css'
})
export class TaskDialogComponent {
  @Input({required: true}) tasks!: Task[];
  @Input({required: true}) users!: User[];
  @Input({required: true}) userId!: string;
  @Output() dialogClosed = new EventEmitter();

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

  onSubmitTask(): void {
    this.formModel.userId = this.userId;
    this.formModel.taskId = `t${this.tasks.length + 1}`;
    this.tasks.push(this.formModel);
    this.dialogClosed.emit();
  }

  onDialogClosed(): void {
    this.dialogClosed.emit();
  }
}
