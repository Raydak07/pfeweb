import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreatetacheComponent } from './companycreatetache.component';

describe('CompanycreatetacheComponent', () => {
  let component: CompanycreatetacheComponent;
  let fixture: ComponentFixture<CompanycreatetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreatetacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreatetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
