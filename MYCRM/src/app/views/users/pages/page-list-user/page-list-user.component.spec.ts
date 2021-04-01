import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListUserComponent } from './page-list-user.component';

describe('PageListUserComponent', () => {
  let component: PageListUserComponent;
  let fixture: ComponentFixture<PageListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
