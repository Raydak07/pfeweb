import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreateafftacheComponent } from './companycreateafftache.component';

describe('CompanycreateafftacheComponent', () => {
  let component: CompanycreateafftacheComponent;
  let fixture: ComponentFixture<CompanycreateafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreateafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreateafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
