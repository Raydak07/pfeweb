import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewgroupeComponent } from './companyviewgroupe.component';

describe('CompanyviewgroupeComponent', () => {
  let component: CompanyviewgroupeComponent;
  let fixture: ComponentFixture<CompanyviewgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
