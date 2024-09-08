import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditnotificationComponent } from './admineditnotification.component';

describe('AdmineditnotificationComponent', () => {
  let component: AdmineditnotificationComponent;
  let fixture: ComponentFixture<AdmineditnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditnotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
