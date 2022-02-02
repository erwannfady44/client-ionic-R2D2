import {Component, Input, OnInit} from '@angular/core';
import {R2d2Service} from '../services/r2d2.service';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss'],
})
export class SpeedComponent implements OnInit {
  @Input() r2d2Service: R2d2Service;
  min =  0;
  max = 255;
  speed = 0;

  constructor() {
  }

  ngOnInit() {
  }

  changeSpeed(speed): void {
    this.r2d2Service.data.speed1 = speed;
    this.r2d2Service.data.speed2 = speed;
  }
}
