import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionbarComponent } from './sessionbar.component';

describe('SessionbarComponent', () => {
  let component: SessionbarComponent;
  let fixture: ComponentFixture<SessionbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
