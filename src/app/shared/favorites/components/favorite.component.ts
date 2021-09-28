import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../products/services';
import { IProductItems } from '../../products/interfaces';

@Component({
  templateUrl: './favorite.component.html',
  styleUrls: [ './favorite.component.scss', ],
})

export class FavoriteComponent implements OnInit {
  public products: IProductItems[] = [];

  constructor(
    private readonly productService: ProductService,
  ) {}

  public ngOnInit(): void {
    this.products = this.productService.getFavorites();
  }

  public removeFavorite(data: IProductItems): void {
    this.products = this.productService.removeFavorite(data);
  }
}
