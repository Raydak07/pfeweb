import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyedituserComponent } from './companyedituser.component';

describe('CompanyedituserComponent', () => {
  let component: CompanyedituserComponent;
  let fixture: ComponentFixture<CompanyedituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyedituserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyedituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
