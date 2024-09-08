import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewnotificationComponent } from './adminviewnotification.component';

describe('AdminviewnotificationComponent', () => {
  let component: AdminviewnotificationComponent;
  let fixture: ComponentFixture<AdminviewnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewnotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
