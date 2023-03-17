import { Directive, Input } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

const noop = () => {};

@Directive()
export abstract class BaseComponent implements ControlValueAccessor {
  @Input() _id: string;
  @Input() formControl: FormControl;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  private _value: any = '';

  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
    }
  }

  set id(s: string) {
    this._id = s;
  }

  get id() {
    return this._id;
  }

  writeValue(obj: any): void {
    if (obj !== this._value) {
      this._value = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
