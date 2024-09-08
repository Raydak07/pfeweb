import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewuniversiteComponent } from './userviewuniversite.component';

describe('UserviewuniversiteComponent', () => {
  let component: UserviewuniversiteComponent;
  let fixture: ComponentFixture<UserviewuniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewuniversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
