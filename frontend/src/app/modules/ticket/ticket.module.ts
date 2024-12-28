import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketHomeComponent } from './pages/ticket-home/ticket-home.component';
import { TicketDetailsComponent } from './pages/ticket-details/ticket-details.component';
import { TicketCreateNewComponent } from './pages/ticket-create-new/ticket-create-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TicketHomeComponent,
    TicketDetailsComponent,
    TicketCreateNewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TicketRoutingModule,
  ],
})
export class TicketModule {}
