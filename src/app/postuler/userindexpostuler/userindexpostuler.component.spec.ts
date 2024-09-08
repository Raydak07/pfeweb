import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexpostulerComponent } from './userindexpostuler.component';

describe('UserindexpostulerComponent', () => {
  let component: UserindexpostulerComponent;
  let fixture: ComponentFixture<UserindexpostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexpostulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexpostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
