import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewuniversiteComponent } from './companyviewuniversite.component';

describe('CompanyviewuniversiteComponent', () => {
  let component: CompanyviewuniversiteComponent;
  let fixture: ComponentFixture<CompanyviewuniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewuniversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
