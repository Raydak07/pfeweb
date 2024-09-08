import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditnotificationComponent } from './usereditnotification.component';

describe('UsereditnotificationComponent', () => {
  let component: UsereditnotificationComponent;
  let fixture: ComponentFixture<UsereditnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditnotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
