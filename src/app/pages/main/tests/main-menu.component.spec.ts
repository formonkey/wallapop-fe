import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuComponent } from '../components';

describe('Main menu component', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainMenuComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainMenuComponent);

    component = fixture.componentInstance;
  });

  it('when testing modules is create should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(MainMenuComponent);
  });
});
