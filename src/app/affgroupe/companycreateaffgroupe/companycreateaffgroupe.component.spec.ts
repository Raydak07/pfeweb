import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreateaffgroupeComponent } from './companycreateaffgroupe.component';

describe('CompanycreateaffgroupeComponent', () => {
  let component: CompanycreateaffgroupeComponent;
  let fixture: ComponentFixture<CompanycreateaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreateaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreateaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
