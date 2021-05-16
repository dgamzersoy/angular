import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavaltComponent } from './navalt.component';

describe('NavaltComponent', () => {
  let component: NavaltComponent;
  let fixture: ComponentFixture<NavaltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavaltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
