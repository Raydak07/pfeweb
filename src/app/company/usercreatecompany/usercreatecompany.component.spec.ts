import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreatecompanyComponent } from './usercreatecompany.component';

describe('UsercreatecompanyComponent', () => {
  let component: UsercreatecompanyComponent;
  let fixture: ComponentFixture<UsercreatecompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreatecompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreatecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
