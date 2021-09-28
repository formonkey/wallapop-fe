import { Injectable } from '@angular/core';

import { ProductModel } from '../models';
import { IProductItems } from '../interfaces';
import { ProductRemoteService } from './product-remote.service';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  private page: number = 1;
  private readonly limit: number = 6;
  private searches: { key: string, search: string } = {} as { key: string, search: string };

  constructor(
    private readonly model: ProductModel,
    private readonly remoteService: ProductRemoteService,
  ) {}

  public async getData(): Promise<IProductItems[]> {
    this.page = 1;
    this.searches = {} as { key: string, search: string };

    if (this.model.data.length) {
      return Promise.resolve(this.model.data.slice(0, this.page * this.limit));
    } else {
      return await this.remoteService.getData().then(({ items }) => {
        this.model.data = items;

        return items.slice(0, this.page * this.limit);
      });
    }
  }

  public getSearches(data: { key: string, search: string }): IProductItems[] {
    this.page = 1;
    this.searches = data;

    return this.filterData().slice(0, this.page * this.limit);
  }

  public moreData(): IProductItems[] {
    this.page += 1;

    return this.filterData().slice(0, this.page * this.limit);
  }

  public getFavorites(): IProductItems[] {
    return this.filterData().filter((item) => item.favorite);
  }

  public setFavorite(data: IProductItems): IProductItems[] {
    this.model.data = this.model.data.map((item: IProductItems) => {
      if (!item.favorite) {
        item.favorite = (item.title === data.title);
      }

      return item;
    });

    return this.filterData().slice(0, this.page * this.limit);
  }

  public removeFavorite(data: IProductItems): IProductItems[] {
    this.model.data = this.model.data.map((item: IProductItems) => {
      if (item.title === data.title) {
        item.favorite = false;
      }

      return item;
    });

    return this.getFavorites();
  }

  private filterData(): IProductItems[] {
    if (this.searches.search) {
      return this.model.data.filter((item: any) => {
        if (this.searches.key === 'price') {
          return item[this.searches.key] === this.searches.search;
        } else {
          const regex = new RegExp(this.searches.search.toLowerCase(), 'g');

          return item[this.searches.key].toLowerCase().match(regex);
        }
      });
    } else {
      return this.model.data;
    }
  }
}
