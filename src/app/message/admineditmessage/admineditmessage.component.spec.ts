import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditmessageComponent } from './admineditmessage.component';

describe('AdmineditmessageComponent', () => {
  let component: AdmineditmessageComponent;
  let fixture: ComponentFixture<AdmineditmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
