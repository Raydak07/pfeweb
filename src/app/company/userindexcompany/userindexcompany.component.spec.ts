import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexcompanyComponent } from './userindexcompany.component';

describe('UserindexcompanyComponent', () => {
  let component: UserindexcompanyComponent;
  let fixture: ComponentFixture<UserindexcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserindexcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserindexcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
