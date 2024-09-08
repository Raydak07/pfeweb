import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexafftacheComponent } from './companyindexafftache.component';

describe('CompanyindexafftacheComponent', () => {
  let component: CompanyindexafftacheComponent;
  let fixture: ComponentFixture<CompanyindexafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
