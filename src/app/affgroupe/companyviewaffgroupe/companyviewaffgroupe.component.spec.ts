import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewaffgroupeComponent } from './companyviewaffgroupe.component';

describe('CompanyviewaffgroupeComponent', () => {
  let component: CompanyviewaffgroupeComponent;
  let fixture: ComponentFixture<CompanyviewaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyviewaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyviewaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
