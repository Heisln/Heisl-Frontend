import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
})
export class FormCheckboxComponent implements OnInit {
  @Input() formControlIn: FormControl;
  @Input() labelIn: string;
  @Input() didSubmitIn: boolean;
  subscriptions: Array<Subscription> = [];

  constructor() { }

  ngOnInit() { }
}
