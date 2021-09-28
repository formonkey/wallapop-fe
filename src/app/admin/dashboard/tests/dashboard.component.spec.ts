import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { querySelector } from '../../../../test';
import { DashboardComponent } from '../components';

describe('Dashboard component', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);

    component = fixture.componentInstance;
  });

  it('when testing module is configured should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(DashboardComponent);
  });

  describe('when template is rendered', () => {
    it('should exist walla-container tag', () => {
      const wallaContainerElement = querySelector(fixture, 'walla-container');

      expect(wallaContainerElement).toBeDefined();
    });

    it('should exist correct title text', () => {
      const titleElement = querySelector(fixture, 'walla-container>div.walla-dashboard>div.header>div>h1');

      expect(titleElement).toBeDefined();
      expect(titleElement.textContent).toEqual('Our products');
    });

    it('should exist correct sub title text', () => {
      const subTitleElement = querySelector(fixture, 'walla-container>div.walla-dashboard>div.header>div>h1+p');

      expect(subTitleElement).toBeDefined();
      expect(subTitleElement.textContent).toEqual('Here you can upload products, manage the ones you already have and highlight them to sell before');
    });

    it('should exist correct info icon element', () => {
      const infoIconElement = querySelector(fixture, 'walla-container>div.walla-dashboard>div.header>div+div>small>walla-icon');

      expect(infoIconElement).toBeDefined();
      expect(infoIconElement.getAttribute('icon')).toEqual('wind');
    });

    it('should exist correct info small text', () => {
      const infoSmallElement = querySelector(fixture, 'walla-container>div.walla-dashboard>div.header>div+div>small');

      expect(infoSmallElement).toBeDefined();
      expect(infoSmallElement.textContent.trim()).toEqual('How will the highlights help you?');
    });
  });
});
