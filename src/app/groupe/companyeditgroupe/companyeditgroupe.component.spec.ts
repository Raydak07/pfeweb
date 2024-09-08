import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditgroupeComponent } from './companyeditgroupe.component';

describe('CompanyeditgroupeComponent', () => {
  let component: CompanyeditgroupeComponent;
  let fixture: ComponentFixture<CompanyeditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
