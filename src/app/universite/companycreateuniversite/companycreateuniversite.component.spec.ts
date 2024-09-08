import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycreateuniversiteComponent } from './companycreateuniversite.component';

describe('CompanycreateuniversiteComponent', () => {
  let component: CompanycreateuniversiteComponent;
  let fixture: ComponentFixture<CompanycreateuniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycreateuniversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycreateuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
