import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexnotificationComponent } from './adminindexnotification.component';

describe('AdminindexnotificationComponent', () => {
  let component: AdminindexnotificationComponent;
  let fixture: ComponentFixture<AdminindexnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexnotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
