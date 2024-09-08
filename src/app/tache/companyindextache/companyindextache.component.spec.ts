import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindextacheComponent } from './companyindextache.component';

describe('CompanyindextacheComponent', () => {
  let component: CompanyindextacheComponent;
  let fixture: ComponentFixture<CompanyindextacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindextacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindextacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
