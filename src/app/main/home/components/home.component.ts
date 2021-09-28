import { ModalService } from '@cowoco/angular';
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../bootstrap';
import { HOME_FILTER_CONSTANT } from '../constants';
import { FavoriteComponent } from '../../../shared/favorites';
import { convertMoneyUtil, IProductItems } from '../../../shared';

@Component({
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss', ],
})

export class HomeComponent implements OnInit {
  public showMoreButton?: boolean;
  public products?: IProductItems[] = [];
  public readonly filters = HOME_FILTER_CONSTANT;

  constructor(
    private readonly modalService: ModalService,
    private readonly productService: ProductService,
  ) {}

  public async ngOnInit(): Promise<void> {
    await this.onClear();
  }

  public onClick(data: any): void {
    if (data.key === 'price') {
      data.search = convertMoneyUtil(data.search);
    }

    this.products = this.productService.getSearches(data)
    this.setShowMoreButton();
  }

  public async onClear(): Promise<void> {
    this.products = await this.productService.getData();
    this.setShowMoreButton();
  }

  public onMoreData(): void {
    this.products = this.productService.moreData();
    this.setShowMoreButton();
  }

  public openFavorite(): void {
    this.modalService.open(FavoriteComponent, {});
  }

  private setShowMoreButton(): void {
    if (this.products) {
      this.showMoreButton = this.products.length % 6 === 0
    }
  }
}
