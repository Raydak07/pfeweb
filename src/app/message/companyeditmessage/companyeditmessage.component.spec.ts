import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditmessageComponent } from './companyeditmessage.component';

describe('CompanyeditmessageComponent', () => {
  let component: CompanyeditmessageComponent;
  let fixture: ComponentFixture<CompanyeditmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
