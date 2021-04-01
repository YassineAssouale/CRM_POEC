import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyAccountComponent } from './page-my-account.component';

describe('PageMyAccountComponent', () => {
  let component: PageMyAccountComponent;
  let fixture: ComponentFixture<PageMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMyAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
