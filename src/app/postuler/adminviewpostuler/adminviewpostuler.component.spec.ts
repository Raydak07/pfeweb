import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewpostulerComponent } from './adminviewpostuler.component';

describe('AdminviewpostulerComponent', () => {
  let component: AdminviewpostulerComponent;
  let fixture: ComponentFixture<AdminviewpostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewpostulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewpostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
