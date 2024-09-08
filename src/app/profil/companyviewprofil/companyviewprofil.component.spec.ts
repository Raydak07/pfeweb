import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewprofilComponent } from './companyviewprofil.component';

describe('CompanyviewprofilComponent', () => {
  let component: CompanyviewprofilComponent;
  let fixture: ComponentFixture<CompanyviewprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
