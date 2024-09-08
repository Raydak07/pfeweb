import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewuserComponent } from './companyviewuser.component';

describe('CompanyviewuserComponent', () => {
  let component: CompanyviewuserComponent;
  let fixture: ComponentFixture<CompanyviewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
