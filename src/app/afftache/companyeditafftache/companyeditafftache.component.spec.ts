import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditafftacheComponent } from './companyeditafftache.component';

describe('CompanyeditafftacheComponent', () => {
  let component: CompanyeditafftacheComponent;
  let fixture: ComponentFixture<CompanyeditafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
