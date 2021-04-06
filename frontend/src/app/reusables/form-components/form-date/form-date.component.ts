import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
})
export class FormDateComponent implements OnInit {
  @Input() formControlIn: FormControl;
  @Input() labelIn: string;
  @Input() didSubmitIn: boolean;
  subscriptions: Array<Subscription> = [];

  minYear: number;
  maxYear: number;

  constructor() { }

  ngOnInit() {
    this.minYear = new Date().getFullYear() - 1;
    this.maxYear = this.minYear + 30;
  }
}
