import { HOME_FILTER_CONSTANT } from '../constants';

describe('Home filter constant', () => {
  let homeFilterConstant = HOME_FILTER_CONSTANT;

  it('when call home filter price should return correct data', () => {
    const priceFilter = homeFilterConstant[0] as any;

    const callback = priceFilter.transform;

    expect(callback('50')).toEqual('50,00 €');
    expect(priceFilter.value).toEqual('price');
    expect(priceFilter.label).toEqual('Price');
    expect(priceFilter.type).toEqual('number');
  });
});
