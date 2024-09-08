import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewcompanyComponent } from './userviewcompany.component';

describe('UserviewcompanyComponent', () => {
  let component: UserviewcompanyComponent;
  let fixture: ComponentFixture<UserviewcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
