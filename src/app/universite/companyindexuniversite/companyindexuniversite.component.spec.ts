import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexuniversiteComponent } from './companyindexuniversite.component';

describe('CompanyindexuniversiteComponent', () => {
  let component: CompanyindexuniversiteComponent;
  let fixture: ComponentFixture<CompanyindexuniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexuniversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
