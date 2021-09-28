import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { IconType } from '../../icons';
import { ButtonColor } from '../constants';

@Component({
  selector: 'walla-btn',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss', ],
})

export class ButtonComponent implements OnChanges {
  @Input() public label?: string;
  @Input() public icon?: IconType;
  @Input() public disabled?: boolean;
  @Input() public size: string = 'md';
  @Input() public type: string = 'primary';

  @Output() public handleClick: EventEmitter<void> = new EventEmitter<void>();

  public color?: string;
  public background?: string;

  public ngOnChanges() {
    this.setCorrectColor();
  }

  public onClick(): void {
    if (!this.disabled) {
      this.handleClick.emit();
    }
  }

  private setCorrectColor(): void {
    if (this.disabled) {
      this.color = ButtonColor.disabled.color;
      this.background = ButtonColor.disabled.background;
    } else {
      this.color = ButtonColor[this.type]?.color ?? ButtonColor.primary.color;
      this.background = ButtonColor[this.type]?.background ?? ButtonColor.primary.background;
    }
  }
}
