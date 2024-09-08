import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewmessageComponent } from './userviewmessage.component';

describe('UserviewmessageComponent', () => {
  let component: UserviewmessageComponent;
  let fixture: ComponentFixture<UserviewmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
