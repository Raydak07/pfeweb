import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexavprojetComponent } from './companyindexavprojet.component';

describe('CompanyindexavprojetComponent', () => {
  let component: CompanyindexavprojetComponent;
  let fixture: ComponentFixture<CompanyindexavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
