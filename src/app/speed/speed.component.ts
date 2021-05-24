import {Component, Input, OnInit} from '@angular/core';
import {R2d2Service} from "../services/r2d2.service";

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss'],
})
export class SpeedComponent implements OnInit {
  min:number =  -255;
  max:number = 255;
  speed: number;
  constructor(public r2d2Service: R2d2Service) {

  }

  ngOnInit() {
  }


}
