import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexaffprojetComponent } from './companyindexaffprojet.component';

describe('CompanyindexaffprojetComponent', () => {
  let component: CompanyindexaffprojetComponent;
  let fixture: ComponentFixture<CompanyindexaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
