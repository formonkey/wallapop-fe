import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from '../components';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { querySelector } from '../../../../test';

describe('Container component', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContainerComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerComponent);

    component = fixture.componentInstance;
  });

  it('when testing module is configured should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ContainerComponent);
  });

  describe('when template rendered', () => {
    it('should exist correct divs and classes', () => {
      const contentElement = querySelector(fixture, 'div.max-w-7xl.mx-auto.px-4>div.max-w-6xl.mx-auto');

      expect(contentElement).not.toBeNull();
    });
  });
});
