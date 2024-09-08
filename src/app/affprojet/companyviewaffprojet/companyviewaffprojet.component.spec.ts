import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewaffprojetComponent } from './companyviewaffprojet.component';

describe('CompanyviewaffprojetComponent', () => {
  let component: CompanyviewaffprojetComponent;
  let fixture: ComponentFixture<CompanyviewaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
