import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCustomersComponent } from './icon-customers.component';

describe('IconCustomersComponent', () => {
  let component: IconCustomersComponent;
  let fixture: ComponentFixture<IconCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
