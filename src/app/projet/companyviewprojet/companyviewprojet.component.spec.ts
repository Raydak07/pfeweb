import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewprojetComponent } from './companyviewprojet.component';

describe('CompanyviewprojetComponent', () => {
  let component: CompanyviewprojetComponent;
  let fixture: ComponentFixture<CompanyviewprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
