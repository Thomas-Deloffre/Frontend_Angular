import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletsKeywordsComponent } from './wallets-keywords.component';

describe('WalletsKeywordsComponent', () => {
  let component: WalletsKeywordsComponent;
  let fixture: ComponentFixture<WalletsKeywordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletsKeywordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletsKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
