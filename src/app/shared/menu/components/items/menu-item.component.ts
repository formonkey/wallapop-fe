import { Component, Input } from '@angular/core';

@Component({
  selector: 'walla-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: [ './menu-item.component.scss', ],
})

export class MenuItemComponent {
  @Input() public img?: string;
  @Input() public link?: string;
  @Input() public label?: string;
}
