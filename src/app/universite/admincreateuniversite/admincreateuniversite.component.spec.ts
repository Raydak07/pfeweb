import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateuniversiteComponent } from './admincreateuniversite.component';

describe('AdmincreateuniversiteComponent', () => {
  let component: AdmincreateuniversiteComponent;
  let fixture: ComponentFixture<AdmincreateuniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateuniversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
