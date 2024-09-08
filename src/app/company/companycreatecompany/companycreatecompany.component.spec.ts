import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreatecompanyComponent } from './companycreatecompany.component';

describe('CompanycreatecompanyComponent', () => {
  let component: CompanycreatecompanyComponent;
  let fixture: ComponentFixture<CompanycreatecompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreatecompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreatecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
