import { ProductRemoteService, ProductService } from '../services';
import { TestBed } from '@angular/core/testing';
import { ProductRemoteServiceMock } from './mocks';
import { ProductModel } from '../models';

describe('Product service', () => {
  let spies: any = {};
  let providers: any = {};
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductModel,
        ProductService,
        {
          provide: ProductRemoteService,
          useClass: ProductRemoteServiceMock,
        },
      ],
    });

    service = TestBed.inject(ProductService);

    initProviders();
  });

  it('when testing module is configured should create a correct service instance', () => {
    expect(service).toBeDefined();
    expect(service).toBeInstanceOf(ProductService);
  });

  it('when service instance is created should has a correct providers injected', () => {
    expect((service as any).model).toBeDefined();
    expect((service as any).model).toBeInstanceOf(ProductModel);

    expect((service as any).remoteService).toBeDefined();
    expect((service as any).remoteService).toBeInstanceOf(ProductRemoteServiceMock);
  });

  describe('when service is initialized', () => {
    it('and call get data method but model not save data should get request data', async () => {
      spies.remoteService.getData.and.returnValue(Promise.resolve({ items: [{ test: 'test', price: '50' }]} as any));

      const data = await service.getData()

      expect(spies.remoteService.getData).toHaveBeenCalled();
      expect(data).toEqual([{ test: 'test', price: '50,00 €' }] as any);
    });

    it('and call get data method but model has data should not calle request', async () => {
      (service as any).model.data = [{ test: 'test', price: '50,00 €' }] as any;

      const data = await service.getData();

      expect(spies.remoteService.getData).not.toHaveBeenCalled();
      expect(data).toEqual([{ test: 'test', price: '50,00 €' }] as any);
    });

    it('and get search method is called should call filter data private method', () => {
      const filterDataSpy = spyOn(service as any, 'filterData');

      filterDataSpy.and.returnValue([]);

      service.getSearches({ key: 'key', search: 'search' });

      expect(filterDataSpy).toHaveBeenCalled();
    });

    it('and more data method is called should call filter data private method', () => {
      const filterDataSpy = spyOn(service as any, 'filterData');

      filterDataSpy.and.returnValue([]);

      service.moreData();

      expect(filterDataSpy).toHaveBeenCalled();
      expect((service as any).page).toEqual(2);
    });

    it('and get favorites should return all favorite data', () => {
      (service as any).model.data = [{ test: 'test', favorite: true, price: '' }, { test: 'test', favorite: false, price: '' }];

      expect((service as any).model.data.length).toEqual(2);

      const data = service.getFavorites();

      expect(data.length).toEqual(1);
    });

    it('and set favorite should set correct model data to favorite', () => {
      (service as any).model.data = [{ title: '', favorite: true, price: '' }, { title: 'test', favorite: false, price: '' }];

      const data = service.setFavorite({ title: 'test' } as any);

      expect(data.length).toEqual(2);
    });

    it('and remove favorite is called should favorite to false and call get favorite', () => {
      (service as any).model.data = [{ title: '', favorite: false, price: '' }, { title: 'test', favorite: true, price: '' }];

      const getFavoritesSpy = spyOn((service as any), 'getFavorites');

      service.removeFavorite({ title: 'test' } as any);

      expect(getFavoritesSpy).toHaveBeenCalled();
    });

    it('and filter data without search should return model data', () => {
      (service as any).model.data = [{ test: 'test', price: '0€' }];

      const data = (service as any).filterData();

      expect(data).toEqual([{ test: 'test', price: '0€' }]);
    });

    it('and filter data with search price should return correct model data', () => {
      (service as any).searches = { key: 'price', search: '50€' };
      (service as any).model.data = [{ test: 'test', price: '50€' }, { test: 'test2', price: '60€' }];

      const data = (service as any).filterData();

      expect(data.length).toEqual(1);
    });

    it('and filter data with search title should return correct model data', () => {
      (service as any).searches = { key: 'test', search: '2' };
      (service as any).model.data = [{ test: 'test', price: '50€' }, { test: 'test2', price: '60€' }];

      const data = (service as any).filterData();

      expect(data.length).toEqual(1);
    });
  });

  const initProviders = () => {
    providers = {
      model: TestBed.inject(ProductModel),
      remoteService: TestBed.inject(ProductRemoteService),
    };

    initSpies();
  };

  const initSpies = () => {
    spies = {
      remoteService: {
        getData: spyOn(providers.remoteService, 'getData'),
      },
    };
  };
});
