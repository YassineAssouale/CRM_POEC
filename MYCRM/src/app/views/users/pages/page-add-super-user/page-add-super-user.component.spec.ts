import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddSuperUserComponent } from './page-add-super-user.component';

describe('PageAddSuperUserComponent', () => {
  let component: PageAddSuperUserComponent;
  let fixture: ComponentFixture<PageAddSuperUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddSuperUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddSuperUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
