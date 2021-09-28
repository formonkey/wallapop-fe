import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { IconType } from '../types';
import { IconTypeConstant } from '../constants';

@Component({
  selector: 'walla-icon',
  templateUrl: './icon.component.html',
})

export class IconComponent implements OnInit {
  @Input() public icon?: IconType;

  public type: IconProp = IconTypeConstant.wind;

  public ngOnInit() {
    if (this.icon) {
      this.type = (IconTypeConstant as any)[this.icon];
    }
  }
}
