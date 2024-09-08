import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexprojetComponent } from './companyindexprojet.component';

describe('CompanyindexprojetComponent', () => {
  let component: CompanyindexprojetComponent;
  let fixture: ComponentFixture<CompanyindexprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
