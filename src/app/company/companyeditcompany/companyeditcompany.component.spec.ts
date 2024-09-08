import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditcompanyComponent } from './companyeditcompany.component';

describe('CompanyeditcompanyComponent', () => {
  let component: CompanyeditcompanyComponent;
  let fixture: ComponentFixture<CompanyeditcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
