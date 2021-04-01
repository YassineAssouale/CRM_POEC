import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListCustomerComponent } from './page-list-customer.component';

describe('PageListCustomerComponent', () => {
  let component: PageListCustomerComponent;
  let fixture: ComponentFixture<PageListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
