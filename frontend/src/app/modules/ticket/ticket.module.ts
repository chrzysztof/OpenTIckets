import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketHomeComponent } from './pages/ticket-home/ticket-home.component';


@NgModule({
  declarations: [
    TicketHomeComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule
  ]
})
export class TicketModule { }
