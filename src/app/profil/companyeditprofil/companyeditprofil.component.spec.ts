import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditprofilComponent } from './companyeditprofil.component';

describe('CompanyeditprofilComponent', () => {
  let component: CompanyeditprofilComponent;
  let fixture: ComponentFixture<CompanyeditprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
