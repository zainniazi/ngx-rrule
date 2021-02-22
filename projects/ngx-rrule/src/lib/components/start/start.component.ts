import {Component, OnInit, Output, forwardRef, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {formatDate} from "../../util/common";

@Component({
  selector: 'ngx-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StartComponent), multi: true}]
})
export class StartComponent implements OnInit, ControlValueAccessor {
  @Output() onChange = new EventEmitter();
  public form: FormGroup;
  public startDate;
  private propagateChange;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      startDate: ''
    });

    setTimeout(() => {
      this.form.valueChanges.subscribe(() => {
        this.onFormChange();
      });
      this.onFormChange();
    }, 100);
  }

  writeValue = (input: any): void => {
    this.form.patchValue({
      startDate: new Date(input.onDate.date)
    });
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  onFormChange = () => {
    if (this.propagateChange) {
      this.propagateChange({
        onDate: {
          date: new Date(this.form.value.startDate)
        }
      });
    }
    this.onChange.emit();
  }
}
