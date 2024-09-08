import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewpostulerComponent } from './userviewpostuler.component';

describe('UserviewpostulerComponent', () => {
  let component: UserviewpostulerComponent;
  let fixture: ComponentFixture<UserviewpostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewpostulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewpostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
