import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexprofilComponent } from './companyindexprofil.component';

describe('CompanyindexprofilComponent', () => {
  let component: CompanyindexprofilComponent;
  let fixture: ComponentFixture<CompanyindexprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
