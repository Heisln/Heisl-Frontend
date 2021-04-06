import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-toggle',
  templateUrl: './form-toggle.component.html',
  styleUrls: ['./form-toggle.component.scss'],
})
export class FormToggleComponent implements OnInit {
  @Input() formControlIn: FormControl;
  @Input() labelIn: string;
  @Input() didSubmitIn: boolean;
  subscriptions: Array<Subscription> = [];

  constructor() { }

  ngOnInit() { }
}
