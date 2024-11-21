import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  // Modules
  {
    path: 'ticket',
    loadChildren: () =>
      import('./modules/ticket/ticket.module').then((m) => m.TicketModule),
  },
  {
    path: 'kanban',
    loadChildren: () =>
      import('./modules/kanban-board/kanban-board.module').then(
        (m) => m.KanbanBoardModule
      ),
  },

  // Other
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
