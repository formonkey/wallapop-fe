import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from '../components';

describe('Menu component', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);

    component = fixture.componentInstance;
  });

  it('when testing module is configured should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(MenuComponent);
  });
});
