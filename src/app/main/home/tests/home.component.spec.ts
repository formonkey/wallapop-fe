import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalService, ModalServiceMock } from '@cowoco/angular';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from '../components';
import { ProductServiceMock } from '../../../shared/products';
import { ProductService } from '../../../shared/products/services';

describe('Home component', () => {
  let spies: any = {};
  let providers: any = {};
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
      ],
      providers: [
        {
          provide: ProductService,
          useClass: ProductServiceMock,
        },
        {
          provide: ModalService,
          useClass: ModalServiceMock,
        },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);

    component = fixture.componentInstance;

    initProviders();
  });

  it('when testing module is configured should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(HomeComponent);
  });

  it('when component is initialized should has correct service injected', () => {
    expect((component as any).modalService).toBeDefined();
    expect((component as any).modalService).toBeInstanceOf(ModalServiceMock);

    expect((component as any).productService).toBeDefined();
    expect((component as any).productService).toBeInstanceOf(ProductServiceMock);
  });

  describe('when component is mounted', () => {
    it('and init life cycle method is called should on clear called', async () => {
      const onClearSpy = spyOn(component, 'onClear');

      await component.ngOnInit();

      expect(onClearSpy).toHaveBeenCalled();
    });

    it('and on click method is called should call get searches data with search price', () => {
      const search = { key: 'price', search: '60€'};
      const setShowMoreButtonSpy = spyOn(component as any, 'setShowMoreButton');

      component.onClick(search);

      expect(spies.productService.getSearches).toHaveBeenCalled();
      expect(spies.productService.getSearches).toHaveBeenCalledWith(search);

      expect(setShowMoreButtonSpy).toHaveBeenCalled();
    });

    it('and on click method is called should call get searches data with search title', () => {
      const search = { key: 'title', search: 'test'};
      const setShowMoreButtonSpy = spyOn(component as any, 'setShowMoreButton');

      component.onClick(search);

      expect(setShowMoreButtonSpy).toHaveBeenCalled();
    });

    it('and on clear method is called should get data and call set show more data method', async () => {
      const setShowMoreButtonSpy = spyOn(component as any, 'setShowMoreButton');

      await component.onClear();

      expect(setShowMoreButtonSpy).toHaveBeenCalled();
      expect(spies.productService.getData).toHaveBeenCalled();
    });

    it('and on more data method is called should get data and call set show more data method', async () => {
      const setShowMoreButtonSpy = spyOn(component as any, 'setShowMoreButton');

      await component.onMoreData();

      expect(setShowMoreButtonSpy).toHaveBeenCalled();
      expect(spies.productService.moreData).toHaveBeenCalled();
    });

    it('and open favorite is called should open modal', () => {
      component.openFavorite();

      expect(spies.modalService.open).toHaveBeenCalled();
    });

    it('and set show more button method is called should not products', () => {
      component.products = undefined;

      (component as any).setShowMoreButton();

      expect(component.showMoreButton).toBeUndefined();
    });

    it('and set show more button method is called should products has six elements', () => {
      component.products = [{}, {}, {}, {}, {}, {}] as any;

      (component as any).setShowMoreButton();

      expect(component.showMoreButton).toBeTruthy();
    });

    it('and set show more button method is called should products has five elements', () => {
      component.products = [{}, {}, {}, {}, {}] as any;

      (component as any).setShowMoreButton();

      expect(component.showMoreButton).toBeFalsy();
    });
  });

  const initProviders = () => {
    providers = {
      modalService: TestBed.inject(ModalService),
      productService: TestBed.inject(ProductService),
    };

    initSpies();
  };

  const initSpies = () => {
    spies = {
      modalService: {
        open: spyOn(providers.modalService, 'open'),
      },
      productService: {
        getData: spyOn(providers.productService, 'getData'),
        moreData: spyOn(providers.productService, 'moreData'),
        getSearches: spyOn(providers.productService, 'getSearches'),
      },
    };
  };
});
