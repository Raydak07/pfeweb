import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexadminComponent } from './companyindexadmin.component';

describe('CompanyindexadminComponent', () => {
  let component: CompanyindexadminComponent;
  let fixture: ComponentFixture<CompanyindexadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
