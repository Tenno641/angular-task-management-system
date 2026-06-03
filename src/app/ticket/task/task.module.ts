import {NgModule} from '@angular/core';
import {TaskComponent} from './task.component';
import {TaskDialogComponent} from '../task-dialog/task-dialog.component';
import {TicketComponent} from '../ticket.component';
import {NgSelectComponent} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [TaskComponent, TaskDialogComponent, TicketComponent],
  exports: [TicketComponent],
  imports: [NgSelectComponent, FormsModule, DatePipe],
})
export class TaskModule {

}
