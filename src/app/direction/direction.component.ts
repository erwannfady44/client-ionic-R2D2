import {Component, Input, OnInit} from '@angular/core';
import {R2d2Service} from '../services/r2d2.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss'],
})
export class DirectionComponent implements OnInit {
  @Input() r2d2Service: R2d2Service;
  constructor() { }

  ngOnInit() {}

  changeDirection(newDirection: number): void {
    this.r2d2Service.changeDirection(newDirection);
  }

}
