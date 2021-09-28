import { convertMoneyUtil } from '../convert-money.util';

describe('Convert money', () => {
  it('when called method transform string number to EUR price', () => {
    const price = convertMoneyUtil('5000');

    expect(price).toEqual('5000,00 €');
  });
});
