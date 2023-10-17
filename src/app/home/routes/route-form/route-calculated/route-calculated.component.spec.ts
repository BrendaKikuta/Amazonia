import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCalculatedComponent } from './route-calculated.component';

describe('RouteCalculatedComponent', () => {
  let component: RouteCalculatedComponent;
  let fixture: ComponentFixture<RouteCalculatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouteCalculatedComponent]
    });
    fixture = TestBed.createComponent(RouteCalculatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
