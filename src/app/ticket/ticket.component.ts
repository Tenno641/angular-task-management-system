import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({ required: true }) name!: string;

  get userName(): string {
    return this.name;
  }
}
