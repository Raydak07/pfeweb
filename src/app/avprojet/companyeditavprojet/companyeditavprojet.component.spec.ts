import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditavprojetComponent } from './companyeditavprojet.component';

describe('CompanyeditavprojetComponent', () => {
  let component: CompanyeditavprojetComponent;
  let fixture: ComponentFixture<CompanyeditavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
