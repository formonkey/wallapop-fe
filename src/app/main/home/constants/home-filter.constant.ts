import { convertMoneyUtil } from '../../../shared';

export const HOME_FILTER_CONSTANT = [
  {
    value: 'price',
    label: 'Price',
    type: 'number',
    transform: (value: string) => convertMoneyUtil(value),
  },
  {
    value: 'title',
    label: 'Title',
  },
  {
    value: 'description',
    label: 'Description',
  },
  {
    value: 'email',
    label: 'E-mail',
  }
];
