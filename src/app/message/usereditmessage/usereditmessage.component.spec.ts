import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditmessageComponent } from './usereditmessage.component';

describe('UsereditmessageComponent', () => {
  let component: UsereditmessageComponent;
  let fixture: ComponentFixture<UsereditmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
