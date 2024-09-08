import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreatemessageComponent } from './companycreatemessage.component';

describe('CompanycreatemessageComponent', () => {
  let component: CompanycreatemessageComponent;
  let fixture: ComponentFixture<CompanycreatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreatemessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
