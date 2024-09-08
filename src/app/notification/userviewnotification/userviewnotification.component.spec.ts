import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewnotificationComponent } from './userviewnotification.component';

describe('UserviewnotificationComponent', () => {
  let component: UserviewnotificationComponent;
  let fixture: ComponentFixture<UserviewnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewnotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
