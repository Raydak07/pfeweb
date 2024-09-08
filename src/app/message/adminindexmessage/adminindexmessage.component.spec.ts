import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexmessageComponent } from './adminindexmessage.component';

describe('AdminindexmessageComponent', () => {
  let component: AdminindexmessageComponent;
  let fixture: ComponentFixture<AdminindexmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
