import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IInputFilterData, IInputFilterSearch } from '../../interfaces';

@Component({
  selector: 'walla-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: [ './input-filter.component.scss', ],
})

export class InputFilterComponent implements OnInit {
  @Input() public data: IInputFilterData[] = [];

  @Output() public handleClear: EventEmitter<void> = new EventEmitter<void>();
  @Output() public handleClick: EventEmitter<IInputFilterSearch> = new EventEmitter<IInputFilterSearch>();

  public type?: string;
  public form?: FormGroup;
  public disabled: boolean = true;

  constructor(
    private readonly fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.type = this.data[0].type ?? 'text';

    this.form = this.fb.group({
      key: [this.data[0].value],
      search: [''],
    });

    this.changeSubscribe();
  }

  public onClick(): void {
    this.handleClick.emit(this.form?.getRawValue());
  }

  public onClear(): void {
    this.form?.get('search')?.setValue('');
    this.handleClear.emit();
  }

  private changeSubscribe(): void {
    if (this.form) {
      this.form.controls.key.valueChanges.subscribe(this.keyChangeSubscriber.bind(this));

      this.form.controls.search.valueChanges.subscribe((value: string) => {
        this.disabled = !value;
      });
    }
  }

  private keyChangeSubscriber(value: string): void {
    this.form?.get('search')?.setValue('');
    this.type = this.data.find((element) => element.value === value)?.type ?? 'text';
  }
}
