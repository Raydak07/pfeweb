import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreateuserComponent } from './companycreateuser.component';

describe('CompanycreateuserComponent', () => {
  let component: CompanycreateuserComponent;
  let fixture: ComponentFixture<CompanycreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreateuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
