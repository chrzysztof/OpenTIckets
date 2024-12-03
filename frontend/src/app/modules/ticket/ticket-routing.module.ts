import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketHomeComponent } from './pages/ticket-home/ticket-home.component';

const routes: Routes = [
  {
    path: '',
    component: TicketHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
