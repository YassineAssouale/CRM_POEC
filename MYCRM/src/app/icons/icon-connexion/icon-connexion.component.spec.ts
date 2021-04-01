import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconConnexionComponent } from './icon-connexion.component';

describe('IconConnexionComponent', () => {
  let component: IconConnexionComponent;
  let fixture: ComponentFixture<IconConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconConnexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
