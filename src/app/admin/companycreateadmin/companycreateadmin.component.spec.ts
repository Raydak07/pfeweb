import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreateadminComponent } from './companycreateadmin.component';

describe('CompanycreateadminComponent', () => {
  let component: CompanycreateadminComponent;
  let fixture: ComponentFixture<CompanycreateadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreateadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreateadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
