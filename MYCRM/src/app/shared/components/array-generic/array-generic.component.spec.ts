import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayGenericComponent } from './array-generic.component';

describe('ArrayGenericComponent', () => {
  let component: ArrayGenericComponent;
  let fixture: ComponentFixture<ArrayGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
