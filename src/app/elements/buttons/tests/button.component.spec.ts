import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from '../components';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonColor } from '../constants';
import { querySelector } from '../../../../test';

describe('Button component', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ButtonComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('when testing module is configured should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ButtonComponent);
  });

  describe('when component initialized', () => {
    it('and exist simple changes should call on change life cycle method', () => {
      const setCorrectColorSpy = spyOn(component as any, 'setCorrectColor');

      component.ngOnChanges();

      expect(setCorrectColorSpy).toHaveBeenCalled();
    });

    it('should set correct disabled color properties', () => {
      component.disabled = true;

      component.ngOnChanges();

      expect(component.color).toEqual(ButtonColor.disabled.color);
      expect(component.background).toEqual(ButtonColor.disabled.background);
    });

    it('and type has exist in color configuration should set correct color properties', () => {
      component.disabled = false;
      component.type = 'favorite';

      component.ngOnChanges();

      expect(component.color).toEqual(ButtonColor.favorite.color);
      expect(component.background).toEqual(ButtonColor.favorite.background);
    });

    it('and type hasn\'t exist in color configuration should set primary color properties', () => {
      component.type = 'test';
      component.disabled = false;

      component.ngOnChanges();

      expect(component.color).toEqual(ButtonColor.primary.color);
      expect(component.background).toEqual(ButtonColor.primary.background);
    });

    it('and not disabled should called handle click', () => {
      const handle = { emit: () => null } as any;

      component.handleClick = handle;

      const handleSpy = spyOn(handle, 'emit');

      component.onClick();

      expect(handleSpy).toHaveBeenCalled();
    });

    it('and disabled should not called handle click', () => {
      const handle = { emit: () => null } as any;

      component.disabled = true;
      component.handleClick = handle;

      const handleSpy = spyOn(handle, 'emit');

      component.onClick();

      expect(handleSpy).not.toHaveBeenCalled();
    });
  });

  describe('when template rendered', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('and not label configured should show correct class in button tag', () => {
      const buttonElement = querySelector(fixture, 'button');

      component.ngOnChanges();
      fixture.detectChanges();

      expect(buttonElement).toBeDefined();
      expect(buttonElement.getAttribute('class')).toEqual('md walla-btn no-label cursor-pointer bg-primary text-white');
    });

    it('and disabled should show correct class in button tag', () => {
      const buttonElement = querySelector(fixture, 'button');

      component.label = 'test';
      component.disabled = true;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(buttonElement).toBeDefined();
      expect(buttonElement.getAttribute('class')).toEqual('md walla-btn bg-disabled text-grey-dark cursor-not-allowed');
    });
  });

  afterEach(() => {
    fixture.destroy();
  });
});
