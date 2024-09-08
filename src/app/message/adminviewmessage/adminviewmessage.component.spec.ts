import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewmessageComponent } from './adminviewmessage.component';

describe('AdminviewmessageComponent', () => {
  let component: AdminviewmessageComponent;
  let fixture: ComponentFixture<AdminviewmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
