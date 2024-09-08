import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexcompetenceComponent } from './companyindexcompetence.component';

describe('CompanyindexcompetenceComponent', () => {
  let component: CompanyindexcompetenceComponent;
  let fixture: ComponentFixture<CompanyindexcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexcompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
