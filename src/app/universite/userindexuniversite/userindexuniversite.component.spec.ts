import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexuniversiteComponent } from './userindexuniversite.component';

describe('UserindexuniversiteComponent', () => {
  let component: UserindexuniversiteComponent;
  let fixture: ComponentFixture<UserindexuniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexuniversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
