import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyComponent } from '../components';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Empty component', () => {
  let component: EmptyComponent;
  let fixture: ComponentFixture<EmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmptyComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyComponent);

    component = fixture.componentInstance;
  });

  it('when testing module is configured should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(EmptyComponent);
  });
});
