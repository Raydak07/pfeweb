import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreatecompetenceComponent } from './companycreatecompetence.component';

describe('CompanycreatecompetenceComponent', () => {
  let component: CompanycreatecompetenceComponent;
  let fixture: ComponentFixture<CompanycreatecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreatecompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreatecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
