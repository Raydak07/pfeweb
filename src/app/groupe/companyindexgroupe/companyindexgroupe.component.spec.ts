import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexgroupeComponent } from './companyindexgroupe.component';

describe('CompanyindexgroupeComponent', () => {
  let component: CompanyindexgroupeComponent;
  let fixture: ComponentFixture<CompanyindexgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
