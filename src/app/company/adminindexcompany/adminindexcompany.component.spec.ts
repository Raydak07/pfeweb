import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexcompanyComponent } from './adminindexcompany.component';

describe('AdminindexcompanyComponent', () => {
  let component: AdminindexcompanyComponent;
  let fixture: ComponentFixture<AdminindexcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
