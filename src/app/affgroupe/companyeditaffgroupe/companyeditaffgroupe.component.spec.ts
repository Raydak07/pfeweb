import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditaffgroupeComponent } from './companyeditaffgroupe.component';

describe('CompanyeditaffgroupeComponent', () => {
  let component: CompanyeditaffgroupeComponent;
  let fixture: ComponentFixture<CompanyeditaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
