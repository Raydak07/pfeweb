import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreatepostulerComponent } from './usercreatepostuler.component';

describe('UsercreatepostulerComponent', () => {
  let component: UsercreatepostulerComponent;
  let fixture: ComponentFixture<UsercreatepostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreatepostulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreatepostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
