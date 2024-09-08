import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditnotificationComponent } from './companyeditnotification.component';

describe('CompanyeditnotificationComponent', () => {
  let component: CompanyeditnotificationComponent;
  let fixture: ComponentFixture<CompanyeditnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditnotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
