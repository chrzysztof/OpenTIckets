import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-home',
  templateUrl: './ticket-home.component.html',
  styleUrl: './ticket-home.component.scss',
})
export class TicketHomeComponent {
  recentTickets = [1, 2, 3, 4, 5];
}
