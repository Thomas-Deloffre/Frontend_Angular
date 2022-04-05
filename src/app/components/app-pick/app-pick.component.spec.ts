import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPickComponent } from './app-pick.component';

describe('AppPickComponent', () => {
  let component: AppPickComponent;
  let fixture: ComponentFixture<AppPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
