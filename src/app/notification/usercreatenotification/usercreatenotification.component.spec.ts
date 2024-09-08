import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreatenotificationComponent } from './usercreatenotification.component';

describe('UsercreatenotificationComponent', () => {
  let component: UsercreatenotificationComponent;
  let fixture: ComponentFixture<UsercreatenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreatenotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
