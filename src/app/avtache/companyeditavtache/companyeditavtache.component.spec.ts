import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyeditavtacheComponent } from './companyeditavtache.component';

describe('CompanyeditavtacheComponent', () => {
  let component: CompanyeditavtacheComponent;
  let fixture: ComponentFixture<CompanyeditavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyeditavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyeditavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
