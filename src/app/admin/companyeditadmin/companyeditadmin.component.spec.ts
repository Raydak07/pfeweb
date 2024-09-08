import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditadminComponent } from './companyeditadmin.component';

describe('CompanyeditadminComponent', () => {
  let component: CompanyeditadminComponent;
  let fixture: ComponentFixture<CompanyeditadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
