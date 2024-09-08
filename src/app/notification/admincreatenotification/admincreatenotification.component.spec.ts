import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatenotificationComponent } from './admincreatenotification.component';

describe('AdmincreatenotificationComponent', () => {
  let component: AdmincreatenotificationComponent;
  let fixture: ComponentFixture<AdmincreatenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreatenotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
