import {Component, Input, OnInit} from '@angular/core';
import {R2d2Service} from "../services/r2d2.service";

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss'],
})
export class DirectionComponent implements OnInit {
  constructor(private r2d2Service: R2d2Service) { }

  ngOnInit() {}

  changeDirection(newDirection: number): void {
    // @ts-ignore
    this.r2d2Service.changeDirection(newDirection);
  }

}
