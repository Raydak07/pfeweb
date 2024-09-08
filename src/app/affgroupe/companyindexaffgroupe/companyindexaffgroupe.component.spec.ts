import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexaffgroupeComponent } from './companyindexaffgroupe.component';

describe('CompanyindexaffgroupeComponent', () => {
  let component: CompanyindexaffgroupeComponent;
  let fixture: ComponentFixture<CompanyindexaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
