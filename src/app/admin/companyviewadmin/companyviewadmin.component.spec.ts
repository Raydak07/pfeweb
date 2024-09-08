import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewadminComponent } from './companyviewadmin.component';

describe('CompanyviewadminComponent', () => {
  let component: CompanyviewadminComponent;
  let fixture: ComponentFixture<CompanyviewadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
