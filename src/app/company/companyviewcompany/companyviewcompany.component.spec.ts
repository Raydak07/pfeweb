import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewcompanyComponent } from './companyviewcompany.component';

describe('CompanyviewcompanyComponent', () => {
  let component: CompanyviewcompanyComponent;
  let fixture: ComponentFixture<CompanyviewcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
