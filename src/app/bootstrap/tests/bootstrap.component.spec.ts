import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { querySelector } from '../../../test';
import { BootstrapComponent } from '../components';

describe('Bootstrap component', () => {
  let component: BootstrapComponent;
  let fixture: ComponentFixture<BootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BootstrapComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BootstrapComponent);

    component = fixture.componentInstance;
  });

  it('when testing module is configured should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(BootstrapComponent);
  });

  describe('when template rendered', () => {
    it('should exist a first router outlet with name menu', () => {
      const routerOutletElement = querySelector(fixture, 'router-outlet');

      expect(routerOutletElement).toBeDefined();
      expect(routerOutletElement.getAttribute('name')).toEqual('menu');
    });

    it('should exist a last router outlet', () => {
      const routerOutletElement = querySelector(fixture, 'router-outlet[name=menu]+router-outlet');

      expect(routerOutletElement).toBeDefined();
    });
  });
});
