import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCreateNewComponent } from './ticket-create-new.component';

describe('TicketCreateNewComponent', () => {
  let component: TicketCreateNewComponent;
  let fixture: ComponentFixture<TicketCreateNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketCreateNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
