import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexnotificationComponent } from './companyindexnotification.component';

describe('CompanyindexnotificationComponent', () => {
  let component: CompanyindexnotificationComponent;
  let fixture: ComponentFixture<CompanyindexnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexnotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
