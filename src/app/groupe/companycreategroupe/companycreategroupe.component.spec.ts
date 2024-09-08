import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreategroupeComponent } from './companycreategroupe.component';

describe('CompanycreategroupeComponent', () => {
  let component: CompanycreategroupeComponent;
  let fixture: ComponentFixture<CompanycreategroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreategroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreategroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
