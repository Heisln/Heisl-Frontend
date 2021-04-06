import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-form-number',
  templateUrl: './form-number.component.html',
  styleUrls: ['./form-number.component.scss'],
})
export class FormNumberComponent implements OnInit {
  @Input() formControlIn: FormControl;
  @Input() labelIn: string;
  @Input() didSubmitIn: boolean;
  @Input() placeholderIn: string;
  subscriptions: Array<Subscription> = [];

  constructor() { }

  ngOnInit() { }
}
