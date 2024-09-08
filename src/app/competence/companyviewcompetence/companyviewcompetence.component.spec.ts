import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewcompetenceComponent } from './companyviewcompetence.component';

describe('CompanyviewcompetenceComponent', () => {
  let component: CompanyviewcompetenceComponent;
  let fixture: ComponentFixture<CompanyviewcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewcompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
