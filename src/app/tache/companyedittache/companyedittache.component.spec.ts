import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyedittacheComponent } from './companyedittache.component';

describe('CompanyedittacheComponent', () => {
  let component: CompanyedittacheComponent;
  let fixture: ComponentFixture<CompanyedittacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyedittacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyedittacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
