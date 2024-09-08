import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreatemessageComponent } from './usercreatemessage.component';

describe('UsercreatemessageComponent', () => {
  let component: UsercreatemessageComponent;
  let fixture: ComponentFixture<UsercreatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreatemessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
