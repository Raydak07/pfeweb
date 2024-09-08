import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreateavtacheComponent } from './companycreateavtache.component';

describe('CompanycreateavtacheComponent', () => {
  let component: CompanycreateavtacheComponent;
  let fixture: ComponentFixture<CompanycreateavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreateavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreateavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
