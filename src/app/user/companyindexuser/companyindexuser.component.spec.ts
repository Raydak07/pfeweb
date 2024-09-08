import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexuserComponent } from './companyindexuser.component';

describe('CompanyindexuserComponent', () => {
  let component: CompanyindexuserComponent;
  let fixture: ComponentFixture<CompanyindexuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
