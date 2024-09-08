import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexcompanyComponent } from './companyindexcompany.component';

describe('CompanyindexcompanyComponent', () => {
  let component: CompanyindexcompanyComponent;
  let fixture: ComponentFixture<CompanyindexcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
