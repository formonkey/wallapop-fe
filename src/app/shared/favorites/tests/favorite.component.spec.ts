import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComponent } from '../components';
import { ProductServiceMock } from '../../products';
import { ProductService } from '../../products/services';

describe('Favorite component', () => {
  let spies: any = {};
  let providers: any = {};
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FavoriteComponent,
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

    fixture = TestBed.createComponent(FavoriteComponent);

    component = fixture.componentInstance;

    initProviders();
  });

  it('when testing modules is configures should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(FavoriteComponent);
  });

  it('when component is initialized should has a correct product service instance', () => {
    expect((component as any).productService).toBeDefined();
    expect((component as any).productService).toBeInstanceOf(ProductServiceMock);
  });

  describe('when component is initialized', () => {
    it('and mount life cycle is called should get favorite method is called', () => {
      spies.productService.getFavorites.and.returnValue([{ test: 'test' }] as any);

      component.ngOnInit();

      expect(spies.productService.getFavorites).toHaveBeenCalled();
      expect(component.products).toEqual([{ test: 'test' }] as any);
    });

    it('remove favorite method called should call correct method with data', () => {
      component.removeFavorite({ test: 'test' } as any);

      expect(spies.productService.removeFavorite).toHaveBeenCalled()
      expect(spies.productService.removeFavorite).toHaveBeenCalledWith({ test: 'test' });
    })
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
        getFavorites: spyOn(providers.productService, 'getFavorites'),
        removeFavorite: spyOn(providers.productService, 'removeFavorite'),
      },
    };
  };
});
