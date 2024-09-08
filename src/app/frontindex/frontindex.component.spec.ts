import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontindexComponent } from './frontindex.component';

describe('FrontindexComponent', () => {
  let component: FrontindexComponent;
  let fixture: ComponentFixture<FrontindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontindexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
