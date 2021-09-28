import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from '../components';
import { IconTypeConstant } from '../constants';
import { querySelector } from '../../../../test';

describe('Icon component', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        IconComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);

    component = fixture.componentInstance;
  });

  it('when testing module is configured should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(IconComponent);
  });

  describe('when component initialized', () => {
    it('and icon is configured should set correct type in component property', () => {
      component.icon = 'plus';

      component.ngOnInit();

      expect(component.type).toEqual(faPlusCircle);
    });

    it('and icon is not configured should not set type', () => {
      component.ngOnInit();

      expect(component.type).toEqual(IconTypeConstant.wind);
    });
  });

  describe('when template rendered', () => {
    it('should fa icon tag exist', () => {
      const faIconElement = querySelector(fixture, 'fa-icon');

      expect(faIconElement).not.toBeNull();
    });
  });
});
