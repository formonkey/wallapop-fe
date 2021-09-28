import { ProductModel } from '../models';
import { TestBed } from '@angular/core/testing';

describe('Product model', () => {
  let model: ProductModel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductModel,
      ],
    });

    model = TestBed.inject(ProductModel);
  });

  it('when testing module is configured should create a correct provide instance', () => {
    expect(model).toBeDefined();
    expect(model).toBeInstanceOf(ProductModel);
  });

  it('when set product list data should parsed price to convert in money', () => {
    const data = [{ price: '500' }, {price: '50 €'}] as any;

    model.data = data;

    const [ item1, item2 ] = model.data;

    expect(item2.price).toEqual('50 €');
    expect(item1.price).toEqual('500,00 €');
  });
});
