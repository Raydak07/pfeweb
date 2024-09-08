import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewafftacheComponent } from './companyviewafftache.component';

describe('CompanyviewafftacheComponent', () => {
  let component: CompanyviewafftacheComponent;
  let fixture: ComponentFixture<CompanyviewafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
