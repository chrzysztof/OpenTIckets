import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardHomeComponent } from './pages/kanban-board-home/kanban-board-home.component';
import { KanbanBoardMainComponent } from './pages/kanban-board-main/kanban-board-main.component';

const routes: Routes = [
  {
    path: '',
    component: KanbanBoardHomeComponent,
  },
  {
    path: 'project/:name',
    component: KanbanBoardMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KanbanBoardRoutingModule {}
