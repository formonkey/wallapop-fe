import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductService } from '../services';
import { ProductServiceMock } from './mocks';
import { ProductListComponent } from '../components';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Product list component', () => {
  let spies: any = {};
  let providers: any = {};
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent,
      ],
      providers: [
        {
          provide: ProductService,
          useClass: ProductServiceMock,
        },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);

    component = fixture.componentInstance;

    initProviders();
  });

  it('when testing module is configured should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ProductListComponent);
  });

  it('when component instance is created should has a correct service injected', () => {
    expect((component as any).productService).toBeDefined();
    expect((component as any).productService).toBeInstanceOf(ProductServiceMock);
  });

  describe('when component mounted', () => {
    it ('and click on favorite button should set favorite method service is called with data', () => {
      component.onClickFavorite({ test: 'test' } as any);

      expect(spies.productService.setFavorite).toHaveBeenCalled();
      expect(spies.productService.setFavorite).toHaveBeenCalledWith({ test: 'test' });
    });

    it('and click on remove favorite button should call handle click event emitter', () => {
      const handle = { emit: () => null } as any;

      const handleEmitSpy = spyOn(handle, 'emit');

      component.handleClick = handle;

      component.onClickRemoveFavorite({ test: 'test' });

      expect(handleEmitSpy).toHaveBeenCalled();
      expect(handleEmitSpy).toHaveBeenCalledWith({ test: 'test' });
    });
  });

  const initProviders = () => {
    providers = {
      productService: TestBed.inject(ProductService),
    };

    initSpies();
  };

  const initSpies = () => {
    spies = {
      productService: {
        setFavorite: spyOn(providers.productService, 'setFavorite'),
      },
    };
  };
});
