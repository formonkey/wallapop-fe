import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IListItem } from '../interfaces';

@Component({
  selector: 'walla-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: [ './list-item.component.scss', ],
})

export class ListItemComponent {
  @Input() public data?: IListItem[];

  @Output() public handleClick: EventEmitter<IListItem> = new EventEmitter<IListItem>();
}
