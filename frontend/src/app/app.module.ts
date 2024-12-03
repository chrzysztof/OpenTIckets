import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { KanbanBoardModule } from './modules/kanban-board/kanban-board.module';
import { TicketModule } from './modules/ticket/ticket.module';
import { TopNavigationComponent } from './layout/top-navigation/top-navigation.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, TopNavigationComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModule,

    DashboardModule,
    KanbanBoardModule,
    TicketModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
