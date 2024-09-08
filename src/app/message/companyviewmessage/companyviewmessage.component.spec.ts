import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewmessageComponent } from './companyviewmessage.component';

describe('CompanyviewmessageComponent', () => {
  let component: CompanyviewmessageComponent;
  let fixture: ComponentFixture<CompanyviewmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
