import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanBoardMainComponent } from './kanban-board-main.component';

describe('KanbanBoardMainComponent', () => {
  let component: KanbanBoardMainComponent;
  let fixture: ComponentFixture<KanbanBoardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanBoardMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanBoardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
