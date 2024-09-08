import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditcompanyComponent } from './usereditcompany.component';

describe('UsereditcompanyComponent', () => {
  let component: UsereditcompanyComponent;
  let fixture: ComponentFixture<UsereditcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
