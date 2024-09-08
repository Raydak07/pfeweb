import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditcompetenceComponent } from './companyeditcompetence.component';

describe('CompanyeditcompetenceComponent', () => {
  let component: CompanyeditcompetenceComponent;
  let fixture: ComponentFixture<CompanyeditcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditcompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
