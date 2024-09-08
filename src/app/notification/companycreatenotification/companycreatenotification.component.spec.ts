import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreatenotificationComponent } from './companycreatenotification.component';

describe('CompanycreatenotificationComponent', () => {
  let component: CompanycreatenotificationComponent;
  let fixture: ComponentFixture<CompanycreatenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreatenotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
