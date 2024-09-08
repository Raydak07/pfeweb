import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreatepostulerComponent } from './companycreatepostuler.component';

describe('CompanycreatepostulerComponent', () => {
  let component: CompanycreatepostulerComponent;
  let fixture: ComponentFixture<CompanycreatepostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreatepostulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreatepostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
