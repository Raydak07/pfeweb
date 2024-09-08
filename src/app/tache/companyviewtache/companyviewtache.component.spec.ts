import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewtacheComponent } from './companyviewtache.component';

describe('CompanyviewtacheComponent', () => {
  let component: CompanyviewtacheComponent;
  let fixture: ComponentFixture<CompanyviewtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
