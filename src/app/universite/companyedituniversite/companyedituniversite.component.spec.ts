import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyedituniversiteComponent } from './companyedituniversite.component';

describe('CompanyedituniversiteComponent', () => {
  let component: CompanyedituniversiteComponent;
  let fixture: ComponentFixture<CompanyedituniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyedituniversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyedituniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
