import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexpostulerComponent } from './adminindexpostuler.component';

describe('AdminindexpostulerComponent', () => {
  let component: AdminindexpostulerComponent;
  let fixture: ComponentFixture<AdminindexpostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexpostulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexpostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
