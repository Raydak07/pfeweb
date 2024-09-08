import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreateavprojetComponent } from './companycreateavprojet.component';

describe('CompanycreateavprojetComponent', () => {
  let component: CompanycreateavprojetComponent;
  let fixture: ComponentFixture<CompanycreateavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreateavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreateavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
