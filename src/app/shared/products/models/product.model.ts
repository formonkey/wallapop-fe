import { Injectable } from '@angular/core';

import { IProductItems } from '../interfaces';
import { convertMoneyUtil } from '../../utils';

@Injectable({
  providedIn: 'root',
})

export class ProductModel {
  private items: IProductItems[] = [] as IProductItems[];

  public set data(items: IProductItems[]) {
    this.items = items.map((item) => {
      if (!item.price.match(/€/g)) {
        item.price = convertMoneyUtil(item.price);
      }

      return item;
    });
  }

  public get data(): IProductItems[] {
    return this.items;
  }
}
