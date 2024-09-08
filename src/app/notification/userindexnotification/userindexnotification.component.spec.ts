import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexnotificationComponent } from './userindexnotification.component';

describe('UserindexnotificationComponent', () => {
  let component: UserindexnotificationComponent;
  let fixture: ComponentFixture<UserindexnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexnotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
