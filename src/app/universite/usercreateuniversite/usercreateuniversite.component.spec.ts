import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateuniversiteComponent } from './usercreateuniversite.component';

describe('UsercreateuniversiteComponent', () => {
  let component: UsercreateuniversiteComponent;
  let fixture: ComponentFixture<UsercreateuniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreateuniversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
