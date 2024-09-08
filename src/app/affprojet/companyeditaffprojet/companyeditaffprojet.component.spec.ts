import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditaffprojetComponent } from './companyeditaffprojet.component';

describe('CompanyeditaffprojetComponent', () => {
  let component: CompanyeditaffprojetComponent;
  let fixture: ComponentFixture<CompanyeditaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
