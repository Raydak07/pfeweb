import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewnotificationComponent } from './companyviewnotification.component';

describe('CompanyviewnotificationComponent', () => {
  let component: CompanyviewnotificationComponent;
  let fixture: ComponentFixture<CompanyviewnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewnotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
