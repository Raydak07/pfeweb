import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewavtacheComponent } from './companyviewavtache.component';

describe('CompanyviewavtacheComponent', () => {
  let component: CompanyviewavtacheComponent;
  let fixture: ComponentFixture<CompanyviewavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
