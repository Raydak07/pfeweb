import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexpostulerComponent } from './companyindexpostuler.component';

describe('CompanyindexpostulerComponent', () => {
  let component: CompanyindexpostulerComponent;
  let fixture: ComponentFixture<CompanyindexpostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexpostulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexpostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
