import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexmessageComponent } from './companyindexmessage.component';

describe('CompanyindexmessageComponent', () => {
  let component: CompanyindexmessageComponent;
  let fixture: ComponentFixture<CompanyindexmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyindexmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyindexmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
