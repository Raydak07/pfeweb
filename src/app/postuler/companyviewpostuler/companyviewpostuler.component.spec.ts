import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewpostulerComponent } from './companyviewpostuler.component';

describe('CompanyviewpostulerComponent', () => {
  let component: CompanyviewpostulerComponent;
  let fixture: ComponentFixture<CompanyviewpostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewpostulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewpostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
