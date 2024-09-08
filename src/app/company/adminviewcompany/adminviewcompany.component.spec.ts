import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewcompanyComponent } from './adminviewcompany.component';

describe('AdminviewcompanyComponent', () => {
  let component: AdminviewcompanyComponent;
  let fixture: ComponentFixture<AdminviewcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
