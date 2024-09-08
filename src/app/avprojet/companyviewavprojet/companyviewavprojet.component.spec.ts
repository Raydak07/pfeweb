import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewavprojetComponent } from './companyviewavprojet.component';

describe('CompanyviewavprojetComponent', () => {
  let component: CompanyviewavprojetComponent;
  let fixture: ComponentFixture<CompanyviewavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
