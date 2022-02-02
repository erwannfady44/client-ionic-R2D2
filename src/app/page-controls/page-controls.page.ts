import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebsocketService} from '../services/websocket.service';
import { R2d2Service} from '../services/r2d2.service';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-controls',
  templateUrl: './page-controls.page.html',
  styleUrls: ['./page-controls.page.scss'],
})
export class PageControlsPage implements OnInit, OnDestroy{
  test = faTimesCircle;
  r2d2Service: R2d2Service;
  constructor() {

  }

  ngOnInit() {
    this.r2d2Service = new R2d2Service(new WebsocketService());
    this.r2d2Service.server.subscribe(msg => {
      //console.log(msg)
    });
  }

 /* disconnection(): void {
    this.r2d2Service = null;
  }*/

  ngOnDestroy(): void {
    this.r2d2Service.disconnect();
    this.r2d2Service = null;
  }


}
