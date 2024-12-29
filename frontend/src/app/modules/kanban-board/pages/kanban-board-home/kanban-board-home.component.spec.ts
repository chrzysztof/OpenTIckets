import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanBoardHomeComponent } from './kanban-board-home.component';

describe('KanbanBoardHomeComponent', () => {
  let component: KanbanBoardHomeComponent;
  let fixture: ComponentFixture<KanbanBoardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanBoardHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanBoardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
