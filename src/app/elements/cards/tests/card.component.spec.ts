import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from '../components';
import { querySelector } from '../../../../test';

describe('Card component', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);

    component = fixture.componentInstance;
  });

  it('when testing module is configured should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(CardComponent);
  });

  describe('when component initialized', () => {
    it('and call click method should emit handle click', () => {
      const handle = { emit: () => null } as any;

      component.data = 'data' as any;
      component.handleClick = handle;

      const handleEmitSpy = spyOn(handle, 'emit');

      component.onClick();

      expect(handleEmitSpy).toHaveBeenCalled();
      expect(handleEmitSpy).toHaveBeenCalledWith('data');
    });
  });

  describe('when template rendered', () => {
    it('and show header should show button in header card with favorite type', () => {
      component.showHeaderAction = true;
      component.data = { favorite: true } as any;

      fixture.detectChanges();

      const showHeaderButtonElement = querySelector(fixture, 'li.walla-card>div.media.relative>div.absolute.inset-y-0.right-0.pt-2.pr-2>walla-btn');

      expect(showHeaderButtonElement).not.toBeNull();
      expect(showHeaderButtonElement.getAttribute('size')).toEqual('sm');
      expect(showHeaderButtonElement.getAttribute('icon')).toEqual('like');
    });

    it('and data price is 99 should show correct price', () => {
      component.data = { price: 99 } as any;

      fixture.detectChanges();

      const priceElement = querySelector(fixture, 'li.walla-card>div.media.relative+p.price');

      expect(priceElement.textContent.trim()).toEqual('99');
    });

    it('and data title is "test" should show correct title', () => {
      component.data = { title: 'test' } as any;

      fixture.detectChanges();

      const titleElement = querySelector(fixture, 'li.walla-card>div.media.relative+p.price+p.title');

      expect(titleElement.textContent.trim()).toEqual('test');
    });

    it('and data description is "test" should show correct description', () => {
      component.data = { description: 'test' } as any;

      fixture.detectChanges();

      const titleElement = querySelector(fixture, 'li.walla-card>div.media.relative+p.price+p.title+p.description');

      expect(titleElement.textContent.trim()).toEqual('test');
    });
  });
});
