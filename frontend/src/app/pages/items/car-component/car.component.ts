import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'openapi';

@Component({
  selector: 'app-car-component',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  @Input() car: Car;

  constructor() {}

  ngOnInit(): void {}
}
