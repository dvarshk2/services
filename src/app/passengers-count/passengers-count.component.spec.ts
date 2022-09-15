import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersCountComponent } from './passengers-count.component';

describe('PassengersCountComponent', () => {
  let component: PassengersCountComponent;
  let fixture: ComponentFixture<PassengersCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengersCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengersCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
