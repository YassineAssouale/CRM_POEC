import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditSuperUserComponent } from './page-edit-super-user.component';

describe('PageEditSuperUserComponent', () => {
  let component: PageEditSuperUserComponent;
  let fixture: ComponentFixture<PageEditSuperUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditSuperUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditSuperUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
