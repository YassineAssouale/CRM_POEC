import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBarMenuComponent } from './icon-bar-menu.component';

describe('IconBarMenuComponent', () => {
  let component: IconBarMenuComponent;
  let fixture: ComponentFixture<IconBarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBarMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
