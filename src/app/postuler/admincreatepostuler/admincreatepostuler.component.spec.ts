import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatepostulerComponent } from './admincreatepostuler.component';

describe('AdmincreatepostulerComponent', () => {
  let component: AdmincreatepostulerComponent;
  let fixture: ComponentFixture<AdmincreatepostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreatepostulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreatepostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
