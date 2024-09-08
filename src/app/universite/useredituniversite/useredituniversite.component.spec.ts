import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseredituniversiteComponent } from './useredituniversite.component';

describe('UseredituniversiteComponent', () => {
  let component: UseredituniversiteComponent;
  let fixture: ComponentFixture<UseredituniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseredituniversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseredituniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
