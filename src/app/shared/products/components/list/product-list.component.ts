import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IProductItems } from '../../interfaces';
import { ProductService } from '../../services';

@Component({
  selector: 'walla-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.scss', ],
})

export class ProductListComponent {
  @Input() public small?: boolean;
  @Input() public showFavorite?: boolean;
  @Input() public products?: IProductItems[] = [];

  @Output() public handleClick: EventEmitter<IProductItems> = new EventEmitter<IProductItems>();

  constructor(
    private readonly productService: ProductService,
  ) {}

  public onClickFavorite(item: IProductItems): void {
    this.products = this.productService.setFavorite(item);
  }

  public onClickRemoveFavorite(item: any): void {
    this.handleClick.emit(item);
  }
}
