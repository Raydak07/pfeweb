import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreateprofilComponent } from './companycreateprofil.component';

describe('CompanycreateprofilComponent', () => {
  let component: CompanycreateprofilComponent;
  let fixture: ComponentFixture<CompanycreateprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreateprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreateprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
