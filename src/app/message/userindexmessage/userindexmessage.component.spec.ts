import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexmessageComponent } from './userindexmessage.component';

describe('UserindexmessageComponent', () => {
  let component: UserindexmessageComponent;
  let fixture: ComponentFixture<UserindexmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
