import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyfooterComponent } from './companyfooter.component';

describe('CompanyfooterComponent', () => {
  let component: CompanyfooterComponent;
  let fixture: ComponentFixture<CompanyfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
