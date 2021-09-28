import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductRemoteService } from '../services';
import { HttpClient } from '@angular/common/http';

describe('Product remote service', () => {
  let providers: any = {};
  let remoteService: ProductRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ProductRemoteService,
      ],
    });

    remoteService = TestBed.inject(ProductRemoteService);

    initProviders();
  });

  it('when testing module is configured should create a correct remote service instance', () => {
    expect(remoteService).toBeDefined();
    expect(remoteService).toBeInstanceOf(ProductRemoteService);
  });

  it('when get data method is called should get request to correct path', () => {
    const stub = [{ product: 'product' }] as any;
    const url = 'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';

    remoteService.getData().then((data) => {
      expect(data).toEqual(stub);
    });

    const res = providers.httpTestingController.expectOne(url);

    expect(res.request.method).toEqual('GET');

    res.flush(stub);
  });

  afterEach(() => {
    providers.httpTestingController.verify();
  });

  const initProviders = () => {
    providers = {
      httpClient: TestBed.inject(HttpClient),
      httpTestingController: TestBed.inject(HttpTestingController),
    };
  };
});
