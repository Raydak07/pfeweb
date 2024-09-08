import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewuniversiteComponent } from './adminviewuniversite.component';

describe('AdminviewuniversiteComponent', () => {
  let component: AdminviewuniversiteComponent;
  let fixture: ComponentFixture<AdminviewuniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewuniversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
