import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditpostulerComponent } from './admineditpostuler.component';

describe('AdmineditpostulerComponent', () => {
  let component: AdmineditpostulerComponent;
  let fixture: ComponentFixture<AdmineditpostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditpostulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditpostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
