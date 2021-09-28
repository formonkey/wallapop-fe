import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from '../components';

describe('List item component', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListItemComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemComponent);

    component = fixture.componentInstance;
  });

  it('when testing module is configure should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ListItemComponent);
  });

  describe('when component initialised', () => {
    it('not configured should all properties is undefined', () => {
      expect(component.data).toBeUndefined();
    });

    it('should correct properties configured', () => {
      component.data = [];
      component.handleClick = { emit: () => null } as any;

      expect(component.data).toBeDefined();
      expect(component.handleClick.emit).toBeDefined();
    });
  });
});
