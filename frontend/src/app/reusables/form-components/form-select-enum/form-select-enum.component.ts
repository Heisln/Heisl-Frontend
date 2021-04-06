import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-select-enum',
  templateUrl: './form-select-enum.component.html',
  styleUrls: ['./form-select-enum.component.scss'],
})
export class FormSelectEnumComponent implements OnInit {
  @Input() formControlIn: FormControl;
  @Input() labelIn: string;
  @Input() didSubmitIn: boolean;
  @Input() enumIn: any;

  @Input() slideToRemove: boolean;
  @Output() removeControl = new EventEmitter<string>();
  subscriptions: Array<Subscription> = [];
  values = Object.values;

  constructor() { }

  ngOnInit() { }

  remove() {
    this.removeControl.emit();
  }
}
