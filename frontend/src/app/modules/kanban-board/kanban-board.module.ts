import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanBoardRoutingModule } from './kanban-board-routing.module';
import { KanbanBoardHomeComponent } from './pages/kanban-board-home/kanban-board-home.component';
import { KanbanBoardMainComponent } from './pages/kanban-board-main/kanban-board-main.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [KanbanBoardHomeComponent, KanbanBoardMainComponent],
  imports: [
    CommonModule,
    KanbanBoardRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class KanbanBoardModule {}
