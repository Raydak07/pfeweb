import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditprojetComponent } from './companyeditprojet.component';

describe('CompanyeditprojetComponent', () => {
  let component: CompanyeditprojetComponent;
  let fixture: ComponentFixture<CompanyeditprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
