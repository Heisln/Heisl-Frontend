import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-error-list',
  templateUrl: './form-error-list.component.html',
  styleUrls: ['./form-error-list.component.scss'],
})
export class FormErrorListComponent implements OnInit {
  @Input() validationErrors: ValidationErrors;
  @Input() didSubmitIn: boolean;
  subscriptions: Array<Subscription> = [];

  constructor() { }

  ngOnInit() { }
}
