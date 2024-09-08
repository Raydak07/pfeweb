import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatecompanyComponent } from './admincreatecompany.component';

describe('AdmincreatecompanyComponent', () => {
  let component: AdmincreatecompanyComponent;
  let fixture: ComponentFixture<AdmincreatecompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreatecompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreatecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
