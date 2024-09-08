import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexuniversiteComponent } from './adminindexuniversite.component';

describe('AdminindexuniversiteComponent', () => {
  let component: AdminindexuniversiteComponent;
  let fixture: ComponentFixture<AdminindexuniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexuniversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
