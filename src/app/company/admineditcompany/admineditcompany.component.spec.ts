import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcompanyComponent } from './admineditcompany.component';

describe('AdmineditcompanyComponent', () => {
  let component: AdmineditcompanyComponent;
  let fixture: ComponentFixture<AdmineditcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
