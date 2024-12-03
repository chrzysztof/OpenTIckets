import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanBoardRoutingModule } from './kanban-board-routing.module';
import { KanbanBoardHomeComponent } from './pages/kanban-board-home/kanban-board-home.component';


@NgModule({
  declarations: [
    KanbanBoardHomeComponent
  ],
  imports: [
    CommonModule,
    KanbanBoardRoutingModule
  ]
})
export class KanbanBoardModule { }
