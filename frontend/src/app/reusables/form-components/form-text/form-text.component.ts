import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.scss'],
})
export class FormTextComponent implements OnInit {
  @Input() formControlIn: FormControl;
  @Input() labelIn: string;
  @Input() didSubmitIn: boolean;
  @Input() placeholderIn: string;
  subscriptions: Array<Subscription> = [];

  constructor() { }

  ngOnInit() { }
}
