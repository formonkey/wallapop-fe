import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemComponent } from '../components';

describe('Menu item component', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuItemComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemComponent);

    component = fixture.componentInstance;
  });

  it('when testing module is configured should a create correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(MenuItemComponent);
  });
});
