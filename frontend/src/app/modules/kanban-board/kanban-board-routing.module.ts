import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardHomeComponent } from './pages/kanban-board-home/kanban-board-home.component';

const routes: Routes = [
  {
    path: '',
    component: KanbanBoardHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KanbanBoardRoutingModule {}
