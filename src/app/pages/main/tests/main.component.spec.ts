import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from '../components';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Main component', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);

    component = fixture.componentInstance;
  });

  it('when testing module is configured should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(MainComponent);
  });
});
