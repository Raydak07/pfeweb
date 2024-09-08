import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminedituniversiteComponent } from './adminedituniversite.component';

describe('AdminedituniversiteComponent', () => {
  let component: AdminedituniversiteComponent;
  let fixture: ComponentFixture<AdminedituniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminedituniversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminedituniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
