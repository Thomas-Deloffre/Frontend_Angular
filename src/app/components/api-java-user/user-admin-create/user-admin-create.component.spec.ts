import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminCreateComponent } from './user-admin-create.component';

describe('UserAdminCreateComponent', () => {
  let component: UserAdminCreateComponent;
  let fixture: ComponentFixture<UserAdminCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
