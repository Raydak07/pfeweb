import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditpostulerComponent } from './usereditpostuler.component';

describe('UsereditpostulerComponent', () => {
  let component: UsereditpostulerComponent;
  let fixture: ComponentFixture<UsereditpostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditpostulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditpostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
