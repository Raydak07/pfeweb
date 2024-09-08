import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexavtacheComponent } from './companyindexavtache.component';

describe('CompanyindexavtacheComponent', () => {
  let component: CompanyindexavtacheComponent;
  let fixture: ComponentFixture<CompanyindexavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
