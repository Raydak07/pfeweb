import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreateprojetComponent } from './companycreateprojet.component';

describe('CompanycreateprojetComponent', () => {
  let component: CompanycreateprojetComponent;
  let fixture: ComponentFixture<CompanycreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreateprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
