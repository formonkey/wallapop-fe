import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICardData } from '../interfaces';

@Component({
  selector: 'walla-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss', ],
})

export class CardComponent {
  @Input() public showHeaderAction?: boolean;
  @Input() public data: ICardData = {} as ICardData;

  @Output() public handleClick: EventEmitter<ICardData> = new EventEmitter<ICardData>();

  public onClick(): void {
    this.handleClick.emit(this.data);
  }
}
