import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditpostulerComponent } from './companyeditpostuler.component';

describe('CompanyeditpostulerComponent', () => {
  let component: CompanyeditpostulerComponent;
  let fixture: ComponentFixture<CompanyeditpostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditpostulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditpostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
