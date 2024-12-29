import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketHomeComponent } from './pages/ticket-home/ticket-home.component';
import { TicketDetailsComponent } from './pages/ticket-details/ticket-details.component';
import { TicketCreateNewComponent } from './pages/ticket-create-new/ticket-create-new.component';

const routes: Routes = [
  {
    path: '',
    component: TicketHomeComponent,
  },
  {
    path: 'create',
    component: TicketCreateNewComponent,
  },
  {
    path: 'details',
    redirectTo: '',
  },
  {
    path: 'details/:id',
    component: TicketDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
